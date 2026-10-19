import kantoneYaml from '../data/kantone.yaml?raw';
import { parse } from 'yaml';
import { z } from 'astro/zod';
import gemeindeDatei from '../data/gemeinden.json';

/*
 * Canton and municipality data, validated at build time (ADR 0001): a missing or
 * unknown source fails the build. Also the basis of the JSON export for the iOS app.
 */

const quelle = z.object({ titel: z.string().min(1), url: z.url(), artikel: z.string().optional() });
const sprache = z.enum(['de', 'fr', 'it', 'rm']);
const kanton = z.object({
  nr: z.number().int().min(1).max(26),
  code: z.string().length(2),
  name: z.string(),
  hauptort: z.string(),
  beitritt: z.number().int(),
  sprachen: z.array(sprache).min(1),
  hinweis: z.string().optional(),
});
const feld = z.object({ quelle: z.string(), ungeprueft: z.boolean().default(false) });

const schema = z
  .object({
    geprueft_am: z.coerce.date(),
    quellen: z.record(z.string(), quelle),
    kantone: z.array(kanton).length(26),
    felder: z.record(z.string(), feld),
  })
  .superRefine((d, ctx) => {
    for (const [k, f] of Object.entries(d.felder)) {
      if (!d.quellen[f.quelle]) ctx.addIssue({ code: 'custom', message: `Unbekannte Quelle «${f.quelle}»`, path: ['felder', k] });
    }
    d.kantone.forEach((k, i) => {
      if (k.nr !== i + 1) ctx.addIssue({ code: 'custom', message: `${k.code}: Nummer ${k.nr} statt ${i + 1}`, path: ['kantone', i] });
    });
  });

const roh = parse(kantoneYaml);
export const KANTONSDATEN = schema.parse(roh);
export type Kanton = z.infer<typeof kanton>;
export const KANTONE = KANTONSDATEN.kantone;

export const SPRACHEN = { de: 'Deutsch', fr: 'Französisch', it: 'Italienisch', rm: 'Rätoromanisch' } as const;

export function kantonVon(code: string): Kanton {
  const k = KANTONE.find((k) => k.code === code.toUpperCase());
  if (!k) throw new Error(`Unbekannter Kanton «${code}»`);
  return k;
}

/** `bezirk`: BFS district short name (Bezirk, Verwaltungskreis, arrondissement …). */
export type Gemeinde = { bfs: number; name: string; kanton: string; bezirk: string };
export const GEMEINDEN: Gemeinde[] = gemeindeDatei.gemeinden;
export const GEMEINDEN_STICHTAG = gemeindeDatei.stichtag;
export const GEMEINDEN_QUELLE = gemeindeDatei.quelle;

export const gemeindenVon = (code: string) => GEMEINDEN.filter((g) => g.kanton === code.toUpperCase());
