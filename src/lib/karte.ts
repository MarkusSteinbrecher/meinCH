import { geoMercator, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import topo from 'swiss-maps/2026/ch-combined.json';
import { KANTONE, GEMEINDEN } from './kantone';

/*
 * Maps are rendered to SVG path strings at build time (ADR 0001): no map service and
 * no geodata download at runtime. Boundaries: BFS generalised boundaries via swiss-maps (© swisstopo / BFS).
 */

const t = topo as unknown as Topology<{
  country: GeometryCollection; cantons: GeometryCollection; municipalities: GeometryCollection; lakes: GeometryCollection;
}>;

export const KARTEN_QUELLE = {
  titel: 'BFS, Generalisierte Gemeindegrenzen 2026 (swisstopo), aufbereitet von swiss-maps',
  url: 'https://www.bfs.admin.ch/bfs/de/home.assetdetail.34367751.html',
};

export type Flaeche = { id: number; code: string; name: string; d: string };
/** `umriss`: outline the lakes are clipped to (canton maps), so neighbouring lakes don't spill in. */
export type Karte = { breite: number; hoehe: number; flaechen: Flaeche[]; seen: string; grenzen: string; umriss?: string };

const runden = (d: string | null) => (d ?? '').replace(/-?\d+\.\d+/g, (z) => String(Math.round(Number(z) * 2) / 2));

function projektion(ziel: GeoPermissibleObjects, breite: number) {
  const vorlaeufig = geoMercator().fitWidth(breite, ziel);
  const [[, y0], [, y1]] = geoPath(vorlaeufig).bounds(ziel);
  return { projektion: vorlaeufig, hoehe: Math.ceil(y1 - y0 + 2) };
}

const seenAlle = feature(t, t.objects.lakes);

/** Switzerland with its 26 cantons. */
export function schweizKarte(breite = 800): Karte {
  const land = feature(t, t.objects.country);
  const { projektion: p, hoehe } = projektion(land, breite);
  const pfad = geoPath(p);
  const kantone = feature(t, t.objects.cantons).features;
  return {
    breite,
    hoehe,
    flaechen: kantone.map((f) => {
      const k = KANTONE[Number(f.id) - 1];
      return { id: k.nr, code: k.code, name: k.name, d: runden(pfad(f)) };
    }),
    seen: runden(pfad(seenAlle)),
    grenzen: runden(pfad(mesh(t, t.objects.cantons))),
  };
}

/** One canton with its municipalities. Municipalities not in the BFS list (shared territories) are left out. */
export function kantonKarte(nr: number, breite = 640): Karte {
  const kanton = feature(t, t.objects.cantons).features.find((f) => Number(f.id) === nr);
  if (!kanton) throw new Error(`Kanton ${nr} nicht in den Kartendaten`);
  const code = KANTONE[nr - 1].code;
  const namen = new Map(GEMEINDEN.filter((g) => g.kanton === code).map((g) => [g.bfs, g.name]));
  const { projektion: p, hoehe } = projektion(kanton, breite);
  const pfad = geoPath(p);
  const gemeinden = { ...t.objects.municipalities, geometries: t.objects.municipalities.geometries.filter((g) => namen.has(Number(g.id))) };
  return {
    breite,
    hoehe,
    flaechen: feature(t, gemeinden).features.map((f) => ({ id: Number(f.id), code, name: namen.get(Number(f.id))!, d: runden(pfad(f)) })),
    seen: runden(pfad(seenAlle)),
    grenzen: runden(pfad(mesh(t, gemeinden))),
    umriss: runden(pfad(kanton)),
  };
}
