# meinCH – Schweiz verstehen

Die Schweiz verstehen, nicht nur den Einbürgerungstest bestehen: alle 26 Kantone, interaktive Karten, das politische System, Geschichte, Geografie und Gesellschaft. Neutral, werbefrei, jede Aussage mit Quelle und Stand-Datum.

**Status:** Entwurf, noch nicht für die Öffentlichkeit freigegeben (Suchmaschinen sind ausgeschlossen). Danach folgt eine iOS-App in einem eigenen Repository.
**Website:** https://stein-clankers.github.io/meinCH/

> meinCH ist ein privates Angebot und kein offizielles Angebot von Bund, Kantonen oder Gemeinden. Massgebend sind die Unterlagen deiner Gemeinde und deines Kantons.

## Fehler melden

Hast du eine falsche oder veraltete Angabe gefunden? Bitte ein [Issue](https://github.com/Stein-Clankers/meinCH/issues) eröffnen, mit Seite und Quelle.

## Entwicklung

```sh
npm install
npm run dev     # http://localhost:4321/meinCH/
npm run build   # prüft Inhalte und Daten, schreibt dist/
node tools/gemeinden.mjs 01-01-2026   # Gemeindeliste vom BFS neu laden
```

## Recherche

- `reports/Schweiz Lernapp Einbürgerung.md`: bestehende Apps, Anforderungen der Kantone, Lizenzen, Namenswahl
- `research_notes/`: die zugrunde liegenden Notizen
