import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * The schema is the quality gate (ADR 0001): a lesson without sources or check date fails the build.
 */

const quelle = z.object({
  titel: z.string().min(1),
  url: z.url(),
  artikel: z.string().optional(),
});

const lektionen = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lektionen' }),
  schema: z.object({
    titel: z.string(),
    beschreibung: z.string(),
    thema: z.enum(['politik', 'einbuergerung']),
    /** Canton the lesson is about, if it is canton-specific. */
    kanton: z.string().length(2).optional(),
    reihenfolge: z.number().default(100),
    geprueft_am: z.coerce.date(),
    quellen: z.array(quelle).min(1, 'Jede Lektion braucht mindestens eine Quelle.'),
    entwurf: z.boolean().default(false),
  }),
});

export const collections = { lektionen };
