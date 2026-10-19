# 0001 Tech stack: Astro + Svelte, static on GitHub Pages, content as shared data

Status: Accepted (2026-10-19)

## Context
meinCH starts as a website and later gets an iOS app in a separate repo. Content (canton facts, lessons, quiz questions, map geometry) must be reusable by both. Interactive maps of the 26 cantons are a core learning surface, not decoration. Correct, dated, sourced facts are the main differentiator: wrong or outdated content is the top complaint about existing apps. meineSteuer already runs this stack with schema-checked data.

## Decision
- **Astro** static site, content collections with schema-checked front matter (`geprueft_am`, ≥ 1 `quellen` required).
- **Data layer** in versioned YAML/JSON (`src/data/`): cantons, facts, questions, map geometry. The build validates it and also emits a plain JSON export that the iOS app can bundle.
- **Maps:** BFS generalised boundaries (swisstopo-based) from the `swiss-maps` npm package (TopoJSON, one folder per year), rendered to SVG paths at build time with d3-geo; Svelte islands add interaction. No tile server or map API at runtime. Chosen over processing swissBOUNDARIES3D ourselves: already generalised for small-scale maps and versioned per year.
- **Svelte islands** for maps and the trainer; progress in localStorage, no accounts.
- **SteinerDesign** vendored from a release tag, `lang="de-CH"`.
- **GitHub Pages**, public repo, push to `main` deploys.

## Consequences
- Same tooling as meineSteuer, so components and lessons transfer.
- Content authoring is slower (sources and check dates enforced by the build) but stays trustworthy.
- swisstopo data requires the «© swisstopo» credit.
- Alternatives considered: plain HTML like meinHERMES (too much manual work for 26 cantons plus maps), SvelteKit (content pipeline by hand).
