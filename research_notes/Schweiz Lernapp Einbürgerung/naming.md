# Naming a Swiss learning app (cantons, political system, history, Einbürgerung): candidates, legal limits, availability

Research date: 19 October 2026. Availability checks were run live that day: `.ch` via `whois -h whois.nic.ch` (registry answer "We do not have an entry…" means unregistered), other TLDs via `dig NS`, App Store via the iTunes Search API (`country=ch`), and Google Play via a CH/DE search page. Swissreg (trademarks) could not be queried automatically; see the Gaps sections.

## Q1: Naming patterns in the market and what works in the Swiss context

### Takeaway
The Swiss Einbürgerung app market is crowded with near-identical descriptive SEO names ("Einbürgerungstest Schweiz 2026", "Einbürgerung Schweiz", "Schweizer Kantone Quiz"). A distinctive, brandable name stands out more than another descriptive one. The descriptive keywords can go in the store subtitle instead.

### Cited Findings
- The App Store (CH) returns many naturalisation apps with generic names: "Einbürgerung Schweiz" (dataWorks GmbH), "Einbürgerungstest Schweiz" and "Einbürgerungstest Code Schweiz" (Vexo AG), "Einbürgerungsapp Schweiz 2026" (Ott & Stadler Group KLG), "Einbürgerungstest Schweiz 2026" (Vishwen Labs), "2026 Einbürgerungstest", "Schweizer Einbürgerungstest" and "Einbürgerungstest Zürich: Quiz" (Christian Deckert), "Einbürgerungstest CH 2026", "Schweizer Bürgertest 2026" — iTunes Search API, country=ch, queried 2026-10-19 ([e.g. listing](https://apps.apple.com/us/app/einb%C3%BCrgerungstest-code-schweiz/id1565353502))
- The canton-learning apps are just as generic: "Schweizer Kantone - Quiz", "Schweizer Kantone Quiz", "Kanton-Quiz", "Easy Kantone - Schweiz Quiz", "iSchweiz Quiz", "Swiss Canton Quiz", "Cantons of Switzerland Quiz", "Schweizer Geographie Quiz", "Schweiz-Karten-Quiz" — [iSchweiz Quiz](https://apps.apple.com/ch/app/ischweiz-quiz/id390719501), [Swiss Canton Quiz](https://apps.apple.com/us/app/-/id1333739012), [Cantons of Switzerland Quiz](https://apps.apple.com/us/app/id1446802167), [Schweizer Geographie Quiz](https://apps.apple.com/us/app/-/id1423131767)
- An app named **"Schweizer Werden: Bürgertest"** (Traction Engineering GmbH) already exists in the CH App Store — iTunes Search API, 2026-10-19
- The Federal Chancellery's official civics app is called **"CH info"** (seller: Schweizerische Bundeskanzlei). It appears for the searches "Staatskunde Schweiz" in both stores — iTunes Search API / Google Play search, 2026-10-19
- Some apps are tied to a single canton. The City of Zurich gives applicants access to a learning app during the naturalisation interview, and the canton publishes its question set — [Stadt Zürich, Grundkenntnisse](https://www.stadt-zuerich.ch/de/lebenslagen/einwohner-services/einbuergerung/grundkenntnisse.html)
- Test formats and question catalogues differ by canton (computer test vs. oral exam, 300–450 questions depending on canton per one vendor's store copy) — [Einbürgerungstest Code Schweiz listing](https://apps.apple.com/us/app/-/id1565353502), [Einbürgerung Schweiz – Pro](https://apps.apple.com/gd/app/einb%C3%BCrgerung-schweiz-pro/id6479197821)
- SRG SSR runs a Switzerland quiz app called "together" — [Liip blog](https://www.liip.ch/en/blog/together-app)
- **Family name collision:** `meinesteuer.ch` belongs to a commercial tax-filing service (page title "meinesteuer.ch – Steuererklärung, erledigt"), not to the user's site. `meinhermes.ch` resolves but showed no title — curl, 2026-10-19

### Inferences
- A name containing "Einbürgerung", "Test" or "Quiz" disappears among roughly ten clones and dates the product (the "2026" suffix pattern). The app is also broader than a test trainer: it covers maps, history and culture. That argues for a brand name plus a descriptive subtitle, e.g. "meinCH – Schweiz verstehen" or "Kantönli – Kantone, Politik, Geschichte".
- Avoid anything close to "CH info", the Federal Chancellery app. Similarity to an official app strengthens the impression of an official link (see Q2).
- The meine*/mein* family is not exclusive to the user: meinesteuer.ch is a commercial service. Before settling on the family pattern, check whether the user's two sites can own the .ch domains of the family at all.
- Multilingual: "mein…" names are German-only. They suit a DE-first family but would need FR/IT variants (maSuisse, laMiaSvizzera) if the app goes multilingual. Neutral or Latin/English roots (Helvetia-, Swiss-, CH, numbers) travel across DE/FR/IT/EN. Swiss German diminutives (Kantönli, Landsgmeind) are charming in the German-speaking part but opaque in Romandie and Ticino.

### Gaps
- I did not research naming patterns of Duolingo or German "Leben in Deutschland" apps in depth. The CH store results above are the evidence I relied on.
- I found no sources on user-perception studies of Swiss German vs. standard German app names.

## Q2: Legal limits (Wappenschutzgesetz, WSchG, SR 232.21)

### Takeaway
The name is mostly safe as long as it avoids the official designations "Eidgenossenschaft", "Bund", "eidgenössisch", "Kanton", "kantonal", "Gemeinde" and "kommunal" standing alone or in a way that suggests an authority. "Swiss", "Schweiz", "CH" and "Helvetia" are not on that list. The **icon** is the bigger risk: the coat of arms (cross in a shield) and the canton coats of arms are off-limits in branding. A plain Swiss cross is legally possible for a Swiss-based service, but risky because of the "fake official link" rule. Avoid both in the icon.

### Cited Findings (all from the WSchG text, version as of 1 Jan 2017, via [lexfind.ch PDF](https://www.lexfind.ch/tolv/199077/de); official source [fedlex SR 232.21](https://www.fedlex.admin.ch/eli/cc/2015/422/de))
- **Art. 1:** the Schweizerkreuz is an upright, free-standing white cross in a red field. **Art. 2:** the Schweizerwappen is a Schweizerkreuz in a triangular shield. **Art. 3:** the Schweizerfahne is the cross in a square field.
- **Art. 6, official designations:** a. «Eidgenossenschaft», «Bund»; b. «eidgenössisch»; c. «Kanton»; d. «kantonal»; e. «Gemeinde»; f. «kommunal»; g. other expressions that suggest a Swiss authority or an official or quasi-official activity. "Confoederatio Helvetica" is not listed by name. It could fall under the catch-all in g.
- **Art. 7:** national picture and word signs are signs referring to national symbols such as landmarks, hero figures, sites or monuments (e.g. Rütli, Tell, Matterhorn).
- **Art. 8:** the Swiss coat of arms and the cantonal and communal coats of arms, plus confusable signs, may be used **only by the public body they belong to** (para. 1). The same applies to word signs that refer to those coats of arms (para. 2). Exceptions (para. 4) include "Abbildung in Wörterbüchern, Nachschlagewerken, wissenschaftlichen und ähnlichen Werken" (lit. a), festive decoration and craft objects.
- **Art. 9:** official designations may be used **on their own** only by their public body (para. 1). Others may use them only if they carry out an official or quasi-official activity (para. 2). **Combined with other word or picture elements they are allowed** unless the use is misleading or violates public order, morality or law (para. 3).
- **Art. 10 / 11:** flags, other sovereign signs and national picture/word signs may be used **unless the use is misleading** or violates public order, morality or law.
- **Art. 13:** where these signs are understood as indicating geographic origin of goods/services, they count as Herkunftsangaben under MSchG Art. 47–50.
- **Art. 14:** a sign whose use is unlawful under Art. 8–13 cannot be registered as a trademark, design, company or association name, even where Art. 8(4) allows the use.
- **Art. 28:** penalty of up to one year's imprisonment or a fine for intentionally and unlawfully using protected signs, including on "Internetseiten" (lit. b), for services (lit. c), or using an official designation (lit. d).
- IGE: the Swiss cross may mark Swiss goods. Use remains prohibited where it would "fake" alleged relations with the Confederation ("angebliche Beziehungen zur Eidgenossenschaft vorzutäuschen"). Certain services, especially medical ones, may not use it because of confusion with the Red Cross — [IGE, Schweizerkreuz](https://www.ige.ch/de/etwas-schuetzen/herkunftsangaben/grundlegendes/swissness/schweizerkreuz)

### Inferences
- **Names to avoid:** anything with "Bund", "eidgenössisch", "Eidgenoss…", "Kanton"/"kantonal" standing alone or used in a portal-like way ("meinKanton" sounds like a cantonal e-government login, cf. existing "MeinLUKS" from Luzerner Kantonsspital). "meinPass" implies the federal passport/fedpol. Wording like "offiziell" or "amtlich" is misleading under Art. 9(3) and Art. 6 lit. g.
- **Combinations that look allowed:** "meineKantone", "Kantönli", "Kantonskunde" combine "Kanton" with other elements (Art. 9(3)) and do not suggest an authority. They are probably fine, but they are a weaker basis for a trademark than a fully invented name.
- **Coats of arms inside the app:** showing the 26 cantonal coats of arms as reference content in an educational app plausibly falls under Art. 8(4)(a) ("Nachschlagewerke … ähnliche Werke"). Using them in the **logo, icon or name** does not, and Art. 14 bars registering them. This is my reading, not legal advice.
- **Icon:** use no shield-shaped cross, no canton arms, and preferably no red-white cross (risk of an implied official link plus Apple/Google review friction). A map silhouette of the 26 cantons, an abstract "26", or a stylised Landsgemeinde ring are safer.
- **Neutrality disclaimer:** both existing sites already cite official sources. A visible line such as "Kein offizielles Angebot von Bund, Kantonen oder Gemeinden" helps against the "misleading" test.

### Gaps
- I did not read the Wappenschutzverordnung (WSchV) or IGE case practice on "Swiss"/"CH" in app names. The statute's wording suggests they are not official designations, but I have no direct source.
- I found no source on Apple or Google store-review practice for national flags in icons.

## Q3: Candidate names, evaluation and availability

### Takeaway
The strongest candidates with a free .ch domain and no exact App Store or Play conflict are **meinCH** (family fit, very short), **Kantönli** (warm, Swiss, distinctive), **Schweiz verstehen** (clear, descriptive; good as a subtitle or web name), **Landsgmeind** (distinctive, civic), and **Dreistufig** (abstract, federalism). Candidates that are out: meineSchweiz, meinKanton, Staatskunde, Chuchichäschtli (domains taken), Schweizer werden (existing app), and meinPass (misleading).

### Cited Findings: availability (live checks 2026-10-19)
`.ch` = nic.ch whois. App Store = iTunes Search API, CH. Play = Google Play search, gl=CH. "No exact hit" means no app with that name in the top results.

| # | Candidate | Style | .ch | Other TLD | App Store CH | Google Play CH | Legal / fit notes |
|---|---|---|---|---|---|---|---|
| 1 | **meinCH** | family | **free** (meinch.ch) | meinch.com taken (spaceship NS); meinch.app no DNS | no hit | no hit (noise: "inch" apps) | "CH" not in Art. 6 list; short. Weak point: spoken "mein Zee-Haa" is awkward |
| 2 | meineSchweiz | family | taken (Registrar entry, AWS DNS) | – | crowded generic results (TCS, SRF…) | generic results | Too generic, domain gone |
| 3 | meinKanton | family | taken | – | – | – | Sounds like a canton e-gov portal (Art. 9(3) misleading risk) |
| 4 | meineKantone | family | **free** | – | no exact hit | – | Fine legally, but only about cantons |
| 5 | meinPass | family | free | meinpass.app no DNS | no exact hit | "MyPass" apps exist | Implies passport/fedpol, so misleading. **Avoid** |
| 6 | meinBürgerrecht | family | free (meinbuergerrecht.ch) | – | no exact hit (returns Einbürgerung apps) | – | On-topic but narrow, umlaut |
| 7 | meinHeimatort | family | free | – | – | – | Nice Swiss concept, too narrow |
| 8 | meinStaat | family | free | – | – | – | Generic, a bit cold |
| 9 | meineStaatskunde | family | free | – | – | – | Descriptive, long |
| 10 | meineDemokratie | family | free | – | – | – | Politics only |
| 11 | **Kantönli** | playful | **free** (kantoenli.ch and kantonli.ch) | kantoenli.com/.app no DNS | no exact hit (search returns canton quizzes) | no exact hit | Swiss German diminutive, warm. Umlaut (use kantoenli in URLs). Scope reads as "cantons only" |
| 12 | Helvetiquiz | playful | **free** | .com/.app no DNS | no hit | no hit | Very close to **HELVETIQ SA** (Swiss games publisher with apps "Odin – Helvetiq", "Bandido"), so trademark confusion risk. "Quiz" narrows the scope |
| 13 | Chuchichäschtli | playful | taken | – | – | – | Joke name, domain gone |
| 14 | **Landsgmeind** | playful/civic | **free** | – | no hit | no hit | Distinctive, democratic symbol. Only 2 cantons still hold one; Swiss German spelling |
| 15 | Swisstory | playful (EN) | **free** | – | no hit | no hit | Pun on Swiss + story/history. English, works multilingually; "Swiss" is not an official designation |
| 16 | Helvetiklick | playful | free | – | – | – | Clunky |
| 17 | **Schweiz verstehen** | descriptive | **free** (schweizverstehen.ch) | schweizverstehen.app no DNS | no exact hit | no exact hit | Clear and neutral, but too descriptive to trademark; best as subtitle/tagline |
| 18 | Staatskunde | descriptive | taken | – | – | – | Generic |
| 19 | Kantonskunde | descriptive | **free** | – | no hit | returns "Easy Kantone" only | Descriptive; "Kanton" combined is OK |
| 20 | Schweizer werden | descriptive | free (schweizer-werden.ch, schweizwerden.ch) | – | **"Schweizer Werden: Bürgertest" exists** | – | Collision. **Avoid** |
| 21 | **Dreistufig** | abstract | **free** | – | no hit | – | Refers to the 3-level system (Bund–Kanton–Gemeinde); abstract, needs explanation |
| 22 | Föderal | abstract | free (foederal.ch) | – | – | – | Could be read as "federal = official", Art. 6 lit. g risk |
| 23 | Kanton26 / 26kantone / Sechsundzwanzig | abstract | **all taken** | – | – | – | The "26" idea works but the domains are gone; "26" could still be a logo motif |
| 24 | Cantonia / Helvetix / Helvetipedia | abstract | taken | – | – | – | Out |

Not verified because the nic.ch whois rate limit was hit: meinKantönli, meinHelvetia, Bundesbrief, Gmeind, Chantun, 26cantons, Schwiizquiz.

### Inferences: ranking and recommendation
1. **meinCH** is the best family fit: shortest name, free .ch, no store conflict, not an official designation, works as an umbrella (cantons, politics, history, culture). Pair it with a subtitle: "meinCH – Schweiz verstehen". Risk: low distinctiveness against "CH info" (Federal Chancellery) and an awkward spoken form.
2. **Kantönli** is the best standalone and most charming name, and distinctive. For the store, broaden it: "Kantönli – Kantone, Politik & Geschichte". The umlaut needs ASCII fallbacks; both kantoenli.ch and kantonli.ch are free and could both be registered.
3. **Schweiz verstehen** is the clearest description. Use it as a subtitle or website heading rather than as the brand.
4. **Landsgmeind** has strong civic symbolism and is unusual. Good if the political system is the core.
5. **Swisstory** works if history and culture become the focus and an English or multilingual audience matters.
6. **Dreistufig** is a clever abstraction of Swiss federalism, but needs explaining.
- Out: meineSchweiz, meinKanton, Staatskunde (domains), Schweizer werden (existing app), meinPass and Föderal (implied official link), Helvetiquiz (HELVETIQ proximity).
- Before committing, register the .ch (cheap). Run a manual Swissreg search (identical and similar marks, classes 9 and 41). Check EUIPO/WIPO if the app might go public beyond CH.

### Gaps
- **Trademarks:** swissreg.ch is a JavaScript app. Its API rejected unauthenticated calls ("header X-IPI-VERSION invalid"), so I checked no candidates in the trademark register. A manual search at https://www.swissreg.ch (Marken, classes 9 and 41) is required for the top picks. HELVETIQ is very likely a registered mark given the company, but I did not verify that.
- **Domains:** whois "free" means not registered at the time of the query, not reserved. Registrar availability can change quickly.
- **Google Play:** searched via the public search page (top results only); not exhaustive.
- I did not check .com/.app availability with a registrar for most names; DNS absence is only a weak signal.
