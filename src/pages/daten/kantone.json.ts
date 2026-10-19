import type { APIRoute } from 'astro';
import { KANTONSDATEN, GEMEINDEN, GEMEINDEN_STICHTAG, GEMEINDEN_QUELLE } from '../../lib/kantone';
import { POLITIK } from '../../lib/politik';

/** Data export for the iOS app (ADR 0001): the same validated data the website uses. */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      version: 1,
      erstellt: new Date().toISOString(),
      kantone: KANTONSDATEN,
      gemeinden: { stichtag: GEMEINDEN_STICHTAG, quelle: GEMEINDEN_QUELLE, liste: GEMEINDEN },
      politik: POLITIK,
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
