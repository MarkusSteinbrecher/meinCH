const datum = new Intl.DateTimeFormat('de-CH', { day: 'numeric', month: 'long', year: 'numeric' });
const zahl = new Intl.NumberFormat('de-CH');

export const formatDatum = (d: Date) => datum.format(d);
export const formatZahl = (n: number) => zahl.format(n);
