export const THEMEN = {
  politik: 'Politisches System',
  einbuergerung: 'Einbürgerung',
} as const;

export type Thema = keyof typeof THEMEN;

/** Internal link with the GitHub Pages base path and a trailing slash. */
export function pfad(p = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = p.replace(/^\/|\/$/g, '');
  return rest ? `${base}/${rest}/` : `${base}/`;
}

/** Link to a file (no trailing slash). */
export const datei = (p: string) => pfad(p).replace(/\/$/, '');

/** Until launch: keep search engines out, show the «in Arbeit» badge. */
export const ENTWURFSPHASE = true;

export const NAVIGATION: { label: string; href: string; bereich: string }[] = [
  { label: 'Kantone', href: 'kantone', bereich: 'kantone' },
  { label: 'Politik', href: 'politik', bereich: 'politik' },
  { label: 'Einbürgerung', href: 'einbuergerung', bereich: 'einbuergerung' },
];
