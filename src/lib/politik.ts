import politikYaml from '../data/politik.yaml?raw';
import { parse } from 'yaml';
import { z } from 'astro/zod';
import { KANTONE } from './kantone';

/* Figures of the federal political system, validated at build time like the canton data. */

const quelle = z.object({ titel: z.string().min(1), url: z.url(), artikel: z.string().optional() });
const belegt = { quelle: z.string(), ungeprueft: z.boolean().default(false) };
const partei = z.object({ partei: z.string(), sitze: z.number().int().positive() });

const schema = z
  .object({
    geprueft_am: z.coerce.date(),
    quellen: z.record(z.string(), quelle),
    nationalrat_sitze: z.object({ ...belegt, sitze: z.record(z.string(), z.number().int().positive()) }),
    parteien: z.object({ ...belegt, nationalrat: z.array(partei), staenderat: z.array(partei) }),
    bundesrat: z.object({
      ...belegt,
      praesidium: z.object({ jahr: z.number().int(), name: z.string() }),
      departemente: z.array(z.object({
        kuerzel: z.string(), name: z.string(), kurz: z.string(), vorsteher: z.string(), partei: z.string(), icon: z.string(),
      })).length(7),
    }),
  })
  .superRefine((d, ctx) => {
    for (const k of ['nationalrat_sitze', 'parteien', 'bundesrat'] as const) {
      if (!d.quellen[d[k].quelle]) ctx.addIssue({ code: 'custom', message: `Unbekannte Quelle «${d[k].quelle}»`, path: [k] });
    }
    const summe = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
    const sitze = d.nationalrat_sitze.sitze;
    if (summe(Object.values(sitze)) !== 200) ctx.addIssue({ code: 'custom', message: 'Nationalratssitze ergeben nicht 200', path: ['nationalrat_sitze'] });
    for (const k of KANTONE) if (!sitze[k.code]) ctx.addIssue({ code: 'custom', message: `Kein Nationalratssitz für ${k.code}`, path: ['nationalrat_sitze'] });
    if (summe(d.parteien.nationalrat.map((p) => p.sitze)) !== 200) ctx.addIssue({ code: 'custom', message: 'Parteisitze Nationalrat ergeben nicht 200', path: ['parteien'] });
    if (summe(d.parteien.staenderat.map((p) => p.sitze)) !== 46) ctx.addIssue({ code: 'custom', message: 'Parteisitze Ständerat ergeben nicht 46', path: ['parteien'] });
  });

export const POLITIK = schema.parse(parse(politikYaml));
export const politikQuelle = (k: string) => POLITIK.quellen[k];

/** Cantons with one seat in the Council of States and half a cantonal vote (Art. 142 und 150 BV). */
export const HALBKANTONE = ['OW', 'NW', 'BS', 'BL', 'AR', 'AI'];
