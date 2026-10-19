# Session log

## 2026-10-19

- **Done:** research on existing naturalisation/Switzerland learning apps, cantonal test requirements, licensing of official material and naming. Name chosen: meinCH («meinCH – Schweiz verstehen»). Public repo created.
- **Changed:** `README.md`, `CLAUDE.md`, ADR 0001 (stack, Proposed), `reports/Schweiz Lernapp Einbürgerung.md`, `research_notes/Schweiz Lernapp Einbürgerung/`. HQ page `projects/meinch.md`.
- **Open:** iOS app repo later. Domain meinch.ch not needed for now (Markus).
- **Update:** swissreg checked by Markus: no trademark «meinCH» or «mein.ch» registered (2026-10-19).

## 2026-10-19 (site scaffold)

- **Done:** ADR 0001 accepted. Astro 7 + Svelte site on SteinerDesign v1.1.0: home with interactive Switzerland map, canton overview (map + table), 26 generated canton pages with municipality map, municipality list and «üben» quiz (find the canton/municipality), lesson pages, `/daten/kantone.json` export for the iOS app. First module is Zürich (Markus' canton).
- **Changed:** `src/data/kantone.yaml` (26 cantons; Hauptort/Beitritt/Sprachen marked `ungeprueft`), `src/data/gemeinden.json` (2110 municipalities, BFS, 01.01.2026) via `tools/gemeinden.mjs`; maps from `swiss-maps` 2026. Lessons: «Bund, Kantone, Gemeinden» (BV), «Einbürgerung im Kanton Zürich» (draft). GitHub Pages workflow.
- **Verified:** build (32 pages); map hover, links and quiz in the browser at 1440 px and 390 px (no horizontal scroll), light and dark.
- **Open:** check the `ungeprueft` canton fields against HLS/official sources and drop the flags; ZH lessons (Kanton, Stadt Zürich, fees, residence periods, step-by-step); more politics/history/geography lessons; a question trainer with own questions; quiz header shifts the map when its text wraps; which Gemeinde in ZH (assumed Stadt Zürich, not confirmed).

## 2026-10-19 (moved to Stein-Clankers)

- **Done:** repo transferred to the GitHub organisation Stein-Clankers (like Archipelago). Site URL, footer and README links updated; Pages setting carried over.
- **Changed:** now https://github.com/Stein-Clankers/meinCH, site https://stein-clankers.github.io/meinCH/. The old markussteinbrecher.github.io/meinCH URL no longer serves the site (Pages does not redirect).

## 2026-10-19 (no marketing)

- **Changed:** home page, page title, README and CLAUDE.md lose the slogan («die Schweiz verstehen, nicht nur den Test bestehen», «neutral, werbefrei»). Home now says what's on the site. CLAUDE.md gets a «Ton: nur Inhalt, kein Marketing» rule. meinCH added to Clanker City (steinclankers repo).
- **Fixed:** municipality→canton mapping in `tools/gemeinden.mjs`. BFS `HistoricalCode` is only unique per level (district Horgen and the municipality Vionnaz share 10078), so 9 Horgen municipalities were counted in Valais and others shifted too (ZH showed 151 instead of 160; LU, AG, GR, VS also wrong). Lookup is now per level and the script fails if a municipality has no canton. Spotted by Markus.
