# meinCH

Öffentliche Lern-Website über die Schweiz und zur Vorbereitung auf die Einbürgerung: alle 26 Kantone, interaktive Karten, politisches System, Geschichte, Geografie, Gesellschaft. Primär Markus' eigene Informationsquelle und Testvorbereitung, öffentlich als freies, neutrales Angebot. Positionierung: «die Schweiz verstehen, nicht nur den Test bestehen» (siehe `reports/`).

## Conventions

- **Sprache:** Deutsch, Schweizer Rechtschreibung («ss» statt «ß», Guillemets «»). Leser werden mit «du» angesprochen.
- **Design:** SteinerDesign (`~/Code/design-system/`), vendored from a release tag.
- **Mobile matters:** people learn on the phone; every view must work well at 390 px, unlike desktop-first meineSteuer.
- **Content is shared with the iOS app** (separate repo, later): facts, lessons, questions and map data live in versioned data files, not in page markup, so the app can consume them.
- **Sources:** every fact, lesson and question carries at least one source and a check date (`geprueft_am`). Official texts are written in our own words; no verbatim copies of «Der Bund kurz erklärt», cantonal question catalogues or other admin.ch content without written consent (licence finding in the report). Statute texts may be quoted (URG Art. 5).
- **Wappenschutzgesetz:** no Swiss cross or cantonal arms in logo, icon or branding; nothing that suggests an official service. Canton arms as content are plausibly covered by the reference-work exception (Art. 8 Abs. 4 lit. a), see the report. Every page carries the «kein offizielles Angebot» notice.

## Stack

Not built yet. Proposed: Astro + Svelte islands, static, GitHub Pages, like meineSteuer. See `design/decisions/0001-tech-stack.md`.

## Pointers

- Decisions: `design/decisions/`.
- Research: `reports/`, `research_notes/`.
- Sibling sites: `~/Code/meineSteuer`, `~/Code/meinHERMES`.
