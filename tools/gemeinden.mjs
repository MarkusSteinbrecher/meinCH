// Fetches the official municipality list (BFS Amtliches Gemeindeverzeichnis) for a date
// and writes src/data/gemeinden.json: [{ bfs, name, kanton }]. Run: node tools/gemeinden.mjs [TT-MM-JJJJ]
import { writeFileSync } from 'node:fs';

const heute = new Date();
const stichtag = process.argv[2] ?? `${String(heute.getDate()).padStart(2, '0')}-${String(heute.getMonth() + 1).padStart(2, '0')}-${heute.getFullYear()}`;
const url = `https://www.agvchapp.bfs.admin.ch/api/communes/snapshot?date=${stichtag}`;
const csv = await (await fetch(url)).text();

const [kopf, ...zeilen] = csv.trim().split(/\r?\n/);
const spalten = kopf.split(',');
const zeilenObj = zeilen.map((z) => Object.fromEntries(z.split(',').map((w, i) => [spalten[i], w])));
// HistoricalCode is only unique within a level (district 10078 and a municipality share it),
// so a parent is looked up one level up: municipality (3) → district (2) → canton (1).
const nachCode = new Map(zeilenObj.map((z) => [`${z.Level}:${z.HistoricalCode}`, z]));

const kantonVon = (z) => {
  while (z && z.Level !== '1') z = nachCode.get(`${Number(z.Level) - 1}:${z.Parent}`);
  return z?.ShortName;
};

const gemeinden = zeilenObj
  .filter((z) => z.Level === '3')
  .map((z) => ({ bfs: Number(z.BfsCode), name: z.Name, kanton: kantonVon(z) }))
  .sort((a, b) => a.bfs - b.bfs);

const ohneKanton = gemeinden.filter((g) => !g.kanton);
if (ohneKanton.length) throw new Error(`Ohne Kanton: ${ohneKanton.map((g) => g.name).join(', ')}`);

writeFileSync(new URL('../src/data/gemeinden.json', import.meta.url), JSON.stringify({ stichtag, quelle: url, gemeinden }, null, 1) + '\n');
console.log(`${gemeinden.length} Gemeinden, Stichtag ${stichtag}`);
