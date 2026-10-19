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
const nachCode = new Map(zeilenObj.map((z) => [z.HistoricalCode, z]));

const kantonVon = (z) => {
  while (z && z.Level !== '1') z = nachCode.get(z.Parent);
  return z?.ShortName;
};

const gemeinden = zeilenObj
  .filter((z) => z.Level === '3')
  .map((z) => ({ bfs: Number(z.BfsCode), name: z.Name, kanton: kantonVon(z) }))
  .sort((a, b) => a.bfs - b.bfs);

writeFileSync(new URL('../src/data/gemeinden.json', import.meta.url), JSON.stringify({ stichtag, quelle: url, gemeinden }, null, 1) + '\n');
console.log(`${gemeinden.length} Gemeinden, Stichtag ${stichtag}`);
