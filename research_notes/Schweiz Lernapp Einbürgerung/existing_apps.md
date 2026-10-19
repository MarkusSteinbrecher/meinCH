# Existing apps and web tools for learning about Switzerland and Swiss naturalisation (as of 19 Oct 2026)

Method: iTunes Search/Lookup API (country=ch) for iOS ratings, prices, languages and dates; raw Google Play listing HTML (hl=en, gl=CH) for Android ratings, installs and update dates; WebFetch of developer sites, App Store pages and press articles. Ratings and counts are snapshots from 19 Oct 2026. iOS "languages" are the store's declared localisation codes, so they may understate in-app content languages. Google Play price tokens in the page HTML were noisy and are not reported unless confirmed elsewhere.

## Which apps exist on the Swiss App Store / Google Play, and what do they offer?

### Takeaway
The market has one long-standing paid leader (Swift Management AG / Vexo AG, since 2016, about 3,300 iOS ratings across two apps). One strong free-to-paid challenger has about 1,350 ratings on each store (dataWorks "Einbürgerung Schweiz"). A fast-rising free hobbyist app launched in May 2026 and already has 284 iOS ratings and press coverage (Vincenzo Casini, "Swiss Naturalization Test"). Behind these sit 30+ low-traction clones from 2025–2026, many of them AI-built and solo-made. Every serious app is a question-bank quiz (multiple choice, exam simulation, some spaced repetition). None is built around interactive maps or structured lessons on history, the political system and culture.

### Cited findings

**Tier 1: market leaders**

- **Einbürgerungstest Schweiz** (iOS id1125130127). Subtitle: "Einbürgerung 2027 & Gespräch". Seller: Vexo AG; copyright "swift management ag & Vexo AG". Price: CHF 12.95 one-time ("Einmalkauf ohne Abo"), with Family Sharing. Rating: 4.7 from 1,951 ratings. Version 6.1.41, updated 12 Oct 2026. Released 20 Jun 2016. Languages: DE and FR. Platforms: iPhone, iPad, Mac and Vision Pro. Content: canton-specific sets for all 26 cantons. Official catalogues for AG, BE, GE, VD and ZH are integrated with explanations. Topics: history, politics, law, geography, economy, culture and everyday life. Features: adaptive learning, a "readiness coach" with radar chart, exam simulation, flashcards, favourites, offline mode, read-aloud, achievements, a national leaderboard and dark mode. No maps are mentioned. — [App Store CH](https://apps.apple.com/ch/app/einb%C3%BCrgerungstest-schweiz/id1125130127); [iTunes API data](https://itunes.apple.com/lookup?id=1125130127&country=ch)
  - Review complaints (developer replied to each, saying the issue was fixed):
    - 2018: the catalogue only matched Aargau, and some answers were outdated (it said 9 years of compulsory schooling instead of 11).
    - 2020: factual errors such as the term "Halbkantone" and a wrong title for Bern's municipal head, plus irrelevant questions about Germany and Austria.
    - 2022: the Zürich catalogue did not match the real exam.
    — [App Store CH](https://apps.apple.com/ch/app/einb%C3%BCrgerungstest-schweiz/id1125130127)
- **Einbürgerungstest Code Schweiz** (iOS id1565353502). Same subtitle: "Einbürgerung 2027 & Gespräch". Seller: Vexo AG. Free download that is unlocked with a code (QR code from a Gemeinde) or by IAP. Rating: 4.81 from 1,361 ratings. Updated 17 Oct 2026. Released May 2021. Languages: DE and FR. — [iTunes API](https://itunes.apple.com/lookup?id=1565353502&country=ch); [App Store CH](https://apps.apple.com/ch/app/einb%C3%BCrgerungstest-code-schweiz/id1565353502)
  - Android: "Einbürgerungstest Code Schweiz" (ch.swift.citizench.code), Swift Management AG. Rating: 4.67 from 174. 10K+ installs. Updated 23 Aug 2026. Has IAP, and Google Play describes it as an auto-renewing subscription. — [Google Play](https://play.google.com/store/apps/details?id=ch.swift.citizench.code)
  - Android: "Einbürgerungstest Schweiz 2026" (ch.swift.citizench), Swift Management AG. Rating: 4.48 from 185. 1K+ installs. Updated 23 Aug 2026. Paid upfront. — [Google Play](https://play.google.com/store/apps/details?id=ch.swift.citizench&hl=en)
  - Marketing claims: "Switzerland's BEST-SELLING naturalization app and official partner of the City of Zurich"; "Since 2016, more than 70,000 people" have prepared with its apps. — [Google Play description](https://play.google.com/store/apps/details?id=ch.swift.citizench&hl=en)
  - Android review complaints:
    - "Price is clearly to trap those applying for Einbürgerung rather than educate". The same reviewer flagged an in-app rating prompt that only sends 5-star ratings to the Play Store ("#darkpatterns").
    - Content is shallow on culture for Fribourg.
    - A Gemeinde QR code could not unlock the app, the unlock website did not work and support did not reply.
    - Images in "which canton is this landmark in" questions failed to load.
    — [Play ch.swift.citizench](https://play.google.com/store/apps/details?id=ch.swift.citizench&hl=en); [Play .code](https://play.google.com/store/apps/details?id=ch.swift.citizench.code)
  - Same company also runs a web app at **einbuergerungstestschweiz.ch**: "bis zu 450 Fragen pro Kanton", AI-based learning, exam simulation, German only. Operator: Swift Management AG, Basel, which also makes the iTheorie driving-theory apps (iTheorie Auto: 4.71 from 36,769 iOS ratings). — [einbuergerungstestschweiz.ch](https://www.einbuergerungstestschweiz.ch/); [iTunes search](https://itunes.apple.com/search?term=CH-Test&country=ch&entity=software)
- **Einbürgerung Schweiz** (iOS id6478831471). dataWorks GmbH. Free with IAP. Rating: 4.76 from 1,336. Updated 14 Aug 2026. Released Mar 2024. Declared language: EN. — [iTunes API](https://itunes.apple.com/lookup?id=6478831471&country=ch)
  - Android equivalent: **"Einbürgerung Schweiz 2026"** (com.dataworks.quizify.ch.citizenship). Rating: 4.74 from 1,355. 10K+ installs. Updated 11 Sep 2026. Has IAP. Short description: "Preparation for the Swiss naturalization test - ZH, AG, BE, LU, GE, VD & more". Features: SmartCoach adaptive ordering, practice exams, "all questions from the official question bank (300-450 questions, depending on the canton)", search and explanatory videos. — [Google Play](https://play.google.com/store/apps/details?id=com.dataworks.quizify.ch.citizenship&hl=en_US)
  - Review complaints: the videos do not play ("Die Videos im App kann man leider nicht abspielen"), and the way to filter to unanswered questions (a long-press) is hidden. — [Google Play](https://play.google.com/store/apps/details?id=com.dataworks.quizify.ch.citizenship&hl=en_US)
  - **Einbürgerung Schweiz - Pro** (iOS id6479197821). Subtitle (scraped, unverified): "Vorbereitung Einbürgerungstest". CHF 9.00 paid. Rating: 4.69 from 58. Updated Aug 2026. On Android (com.dataworks.quizify.ch.citizenship.pro): 4.14 from 24, last updated 5 Oct 2024, so the Android version looks abandoned. — [iTunes API](https://itunes.apple.com/lookup?id=6479197821&country=ch); [Google Play](https://play.google.com/store/apps/details?id=com.dataworks.quizify.ch.citizenship.pro&hl=en)
  - The dataWorks web presence appears to be **schweizerwerden.com**, inferred because its iOS app is titled "Einbürgerung Schweiz". It offers 50 free questions online and 619 questions in the app. The "Political System" topic is free. Features: exam simulation, spaced-repetition flashcards and a pass prediction. Languages: DE and EN. — [schweizerwerden.com/quiz](https://schweizerwerden.com/quiz/)
- **Swiss Naturalization Test** (iOS id6769993041). Subtitle (scraped, unverified): "Einbürgerung Schweiz App". Developer: Vincenzo Casini. Free, with no ads and no account. Rating: 4.79 from 284. Updated 15 Oct 2026. Released 20 May 2026. Languages: EN, FR, DE and IT. — [iTunes API](https://itunes.apple.com/lookup?id=6769993041&country=ch)
  - Android: "Swiss Naturalization Test" (ch.vincedev.swisscitizenship), shown in some search results as "Swiss Citizenship Test". Developer: vincedy. Rating: 4.89 from 127. 1K+ installs. Updated 15 Oct 2026. Short description: "Swiss citizenship test · 26 cantons · your commune · exam, games · free". — [Google Play](https://play.google.com/store/apps/details?id=ch.vincedev.swisscitizenship&hl=en)
  - Content: the user picks a commune in any of the 26 cantons, and each canton has a declared "fidelity" tier.
    - Full official set: VD (per commune), ZH and AG.
    - Official or adapted questions: GE, BE, VS and NE.
    - Authored from official sources: TI, FR, SG, BS, SO and LU.
    - The other 13 cantons fall back to the federal civic base.
  - Features: smart coaching, an online leaderboard, Play, Challenge and Conquest modes, a Cantons mode with crests and maps, RapidFire true/false, Tandem, and spaced-repetition flashcards.
  - Web version: einbuergerungsquiz.ch.
  — [Google Play](https://play.google.com/store/apps/details?id=ch.vincedev.swisscitizenship&hl=en); [einbuergerungsquiz.ch](https://einbuergerungsquiz.ch/en/)
  - Press: The Local (27 Jul 2026) reported 330 questions based on official cantonal lists. Its criticism: "doesn't offer alternative questions or additional training materials". — [The Local](https://www.thelocal.ch/20260727/new-app-helps-applicants-prepare-for-swiss-citizenship-exam/)
  - Aargauer Zeitung (24 Jul 2026):
    - The app is free, offline and usable in 11 cantons. It is based on the official Aargau catalogue of about 330 questions.
    - The developer is a 43-year-old Italian who works as an AI architect at UEFA. Several thousand people use the app.
    - Integration Aargau helped add official cantonal material.
    - The canton of Aargau has its own online practice version with a selection of questions.
    — [Aargauer Zeitung](https://www.aargauerzeitung.ch/aargau/kanton-aargau/einbuergerungsfragen-per-app-ueben-fuer-den-schweizer-pass-ld.4204055)
  - Reviews are uniformly positive. Users praise the maps and crests mode, the adaptive coaching and an active developer. — [Google Play](https://play.google.com/store/apps/details?id=ch.vincedev.swisscitizenship&hl=en)

**Tier 2: newer serious entrants with small traction**

- **Swiss Citizenship Test 2026** (Android, ch.citizenshiptest.app). Developer: ClimbTag. Rating: 5.0 from 13. 100+ installs. Updated 24 Aug 2026. Free to start; full access is a one-time purchase. Short description: "Start free: 1,215 naturalisation questions, all 26 cantons, exam simulation". — [Google Play](https://play.google.com/store/apps/details?id=ch.citizenshiptest.app&hl=en_US)
  - Website: citizenshiptest.ch (footer name "Einbürgerungstest Schweiz").
    - Questions: 1,215 reviewed in total. 367 are general, 329 come from official cantonal material, and the canton-specific count ranges from 25 (TI) to 73 (ZH).
    - Languages: DE, FR, IT and EN, with questions translatable into 12 languages.
    - Features: spaced repetition, timed tests in each canton's format, explanations for every answer, offline use and no account.
    - Sources and "last checked" dates are shown per question and per canton. Full canton guides exist only for AG, ZH, BE, LU, SG, VD and TI; the others are "being verified". No maps are mentioned.
    — [citizenshiptest.ch/en](https://citizenshiptest.ch/en/)
  - The iOS counterpart is probably "Einbürgerungstest CH 2026" (id6761297108, Leon Juenemann, who also publishes "ClimbTag App"). Free. Rating: 4.57 from 23. Updated 17 Oct 2026. Released Apr 2026. The link is inferred from the shared developer name. — [iTunes search](https://itunes.apple.com/search?term=ClimbTag&country=ch&entity=software)
- **Einbürgerungsapp Schweiz 2026** (iOS id6769352458; Android ch.einbuergerungsprofi.app). Developer: Ott & Stadler Group KLG. Subtitle (scraped, unverified): "Grundkenntnistest Schweiz üben". Free with IAP. iOS: 4.66 from 44, released 27 May 2026, updated 23 Jun 2026, DE. Android: 4.63 from 24, 100+ installs, updated 22 Jun 2026.
  - Positioning: "The only app with municipal issues". It covers federal, cantonal and municipal questions and adds a learning plan and practice exams. Website: einbuergerungsprofi.ch.
  - Reviews: "Scheint KI-generiert... Fragen sind teilweise auch falsch"; another user reported errors that were fixed within 2 days.
  — [Google Play](https://play.google.com/store/apps/details?id=ch.einbuergerungsprofi.app); [iTunes API](https://itunes.apple.com/lookup?id=6769352458&country=ch); [einbuergerungsprofi.ch](https://einbuergerungsprofi.ch/einbuergerungstest-ablauf/)
- **Einbürgerungstest Schweiz 2026** (iOS id6756960903). Developer: Vishwen Labs (OPC) Private Limited (India). Free. Rating: 4.69 from 85. Updated 9 Oct 2026. Released Dec 2025. Languages: EN, FR, DE, IT, PT and ES.
  - Android "Swiss Citizenship Test 2026" (com.vishwesh789.swisscitizenship): 5+ installs. Claims "1,650+ questions, all 26 cantons, 6 languages".
  — [iTunes API](https://itunes.apple.com/lookup?id=6756960903&country=ch); [Google Play](https://play.google.com/store/apps/details?id=com.vishwesh789.swisscitizenship)
- **Swiss Citizen** (swiss-citizen.com). Web platform with a login. DE/FR/IT/EN, "alle 26 Kantone". According to search-snippet summaries it costs a one-time CHF 19 and includes a Claude-based AI assistant; the homepage fetch did not confirm price or features. — [swiss-citizen.com](https://swiss-citizen.com/)
- **Christian Deckert apps** (all free; this developer is clearly cloning per canton):
  - "Einbürgerungstest Zürich: Quiz" (id6763646326): 4.77 from 13. Scraped subtitle "26 Kantone · Fragen & Tests" (unverified).
  - "Grundkenntnistest Aargau" (id6763869707): 5.0 from 2.
  - "Schweizer Einbürgerungstest" (id6815233037): 5.0 from 3. Scraped subtitle "Grundkenntnistest Schweiz" (unverified). Released 30 Sep 2026.
  — [iTunes search](https://itunes.apple.com/search?term=Staatskunde&country=ch&entity=software)
- **Einbürgerungstest Zürich** (iOS id6467456118). Developer: Flavio Lorenzo Thomi. Free, with the full set as a one-time IAP; the first 20 questions are free. Rating: 4.06 from 16. Updated 5 Sep 2026. DE. Covers Zürich's 350-question catalogue and states it is independent of the canton. — [App Store CH](https://apps.apple.com/ch/app/einb%C3%BCrgerungstest-z%C3%BCrich/id6467456118)

**Tier 3: long tail of iOS apps in the Swiss store**
Nearly all have 0–23 ratings and most were released in 2026. Format: name | developer | price | rating (count) | released.

- "2026 Einbürgerungstest" | Emanuel David Weber | free | 4.93 (14) | Jan 2026
- "Einbürgerung Schweiz Test 2026" | Alaeddine Messaoudi | free | 4.2 (5)
- "Einbürgerungstest Schweiz 2026" | Kanchalika Kongyong | free | 5 (2)
- "Einbürgerungstest Schweiz Quiz" (US store title "Swiss Citizenship Test") | zakaria taamouti | free | 3.5 (6) | last updated Feb 2024. Claims 400+ questions.
- "Grundwissen ZH" | Arber Fazlija | CHF 3
- "VaudNatu: Einbürgerungstest" and "ZurichNatu" (CHF 5) | Chi Thang Duong
- "Schweizer Werden: Bürgertest" | Traction Engineering GmbH | CHF 25 | 0 ratings | Mar 2026
- "Roter Pass: Einbürgerungstest" | Brian Ceccato | free | Oct 2026
- "Testklar: Einbürgerungstest ZH" | Sevim Yilanli
- "Zoylen: Einbürgerungstest CH" | CAGRI KIRT
- "Einbürgerung ZH" | Andrii Poplavskyi
- "HelvetiaPrep Swiss Citizenship" | Anuradha Welivita
- "Civica Swiss" | Ruslan Baranov
- "Revi-Swiss" | UNISHOP LLC
- "NatiCoach" | Pascal Tea | FR
- "Einbürgerung Schweiz: 2026" | Ghaith Alshehabat
- "Schweizer Bürgertest 2026" | FLY SKY PTY LTD
- "Swiss Einbürgerungstest" | Prashant Sharma
- "Belong Switzerland" | Belong Europe ApS | released 8 Oct 2026
- "Einbürgerungstest 2026: Hedi" | Suraj Kumar Giri | CHF 3

— [iTunes Search API, country=ch](https://itunes.apple.com/search?term=Einb%C3%BCrgerungstest&country=ch&entity=software)

- "Einbürgerung Schweiz 2026" by Berat Genc (iOS id6755937535) appears on the US store. It offers explanations and videos. A Swiss lookup returned nothing, so it may not be available in CH. — [App Store US](https://apps.apple.com/us/app/einb%C3%BCrgerung-schweiz-2026/id6755937535)

**Tier 3: long tail of Android apps**
- "Einbürgerungstest Schweiz 2026" | Nadia and Martin (com.panterra.einbuergerungstest.ch) | ads and IAP | 100+ installs
- "Einbürgerungstest Schweiz" | FLY SKY PTY LTD AU | 10+ installs
- "Swiss Citizenship Test 2026" | Mühldorf Software Development | ads
- "Swiss Citizenship Test" | Ali E.
- "Swiss Citizenship Test 2026" | Blissom Apps. Description: "all 26 cantons, mock exams, explanations, interview".

All have no rating. — Google Play listings: [panterra](https://play.google.com/store/apps/details?id=com.panterra.einbuergerungstest.ch&hl=en), [flysky](https://play.google.com/store/apps/details?id=com.flysky.chcitizenship), [muehldorf](https://play.google.com/store/apps/details?id=com.muehldorfsd.einbrgerungswisscivics), [Ali E.](https://play.google.com/store/apps/details?id=com.einbuergerung.testschweiz), [Blissom](https://play.google.com/store/apps/details?id=app.blissom.einbuergerung.schweiz)

**Adjacent apps: Swiss geography, cantons and civics (not naturalisation-specific)**
- "Swiss Cantons - Map & Capitals" (Android com.asmolgam.switzerland) | Andrey Solovyev | 4.51 from 1,611 | 100K+ installs | ads, with ad removal by IAP. Covers names, map locations, capitals and coats of arms in 9 languages, with spelling quizzes, multiple choice, a timed game and flashcards. Complaint: ads interrupt learning.
  - iOS versions: "Schweizer Kantone - Quiz" (4.26 from 893) and "Kantone der Schweiz - Das Quiz" (CHF 2).
  — [Google Play](https://play.google.com/store/apps/details?id=com.asmolgam.switzerland); [iTunes API](https://itunes.apple.com/search?term=Schweiz%20Kantone&country=ch&entity=software)
- "Karten Schweiz Geographie Jura" (iOS) | Evgenii Viushkov | 4.59 from 638 | last updated 2023. Android: "Swiss Cantons - Quiz Geography", 4.37 from 49. — [iTunes API](https://itunes.apple.com/search?term=Schweiz%20Kantone&country=ch&entity=software)
- Other canton quizzes:
  - "Schweizer Kantone Quiz" / "Swiss Cantons Quiz" | Atlas Educational Software | iOS 4.7 from 96; Android 4.29 from 65, 10K+ installs
  - "Easy Kantone - Schweiz Quiz" / "Swiss Cantons - Geography Quiz" | Fabian Zurbruegg | iOS 4.82 from 68. Android description: "For school, citizenship, test & geo fun!"
  - "Switzerland Geography Map Quiz" | Eman Logic
  - "swiss cantons educational game" | Daniel D Schneider
  - "Schweiz-Quiz: Kantone & mehr" | Fabrizio Bacchin | iOS, Jan 2026
  - "SwissQuiz" | Pre19
  - "Be Swiss - Quiz of Switzerland" | Nomad Systems Sàrl
  - "SwissMe" | CHF 5 | 4.72 from 424 | EN-language Swiss life/German app
  — [iTunes API](https://itunes.apple.com/search?term=Schweiz%20Kantone&country=ch&entity=software); Google Play listings ([Atlas](https://play.google.com/store/apps/details?id=com.Maple.SwissCantonsQuiz), [Easy Kantone](https://play.google.com/store/apps/details?id=com.zurbruegg.easy_kantone))
- Official federal apps:
  - "CH info" (Schweizerische Bundeskanzlei): 4.02 from 61, EN/FR/DE/IT, last updated Feb 2026.
  - "VoteInfo: Abstimmungen Schweiz" (Bundeskanzlei): 4.34 from 1,033, 100K+ installs.
  Both cover current politics and votes but are not learning or quiz apps. — [iTunes API](https://itunes.apple.com/search?term=Staatskunde&country=ch&entity=software); [Google Play VoteInfo](https://play.google.com/store/apps/details?id=ch.bk.voteinfo)
- "Der Papierkrieg" / "The Red Tape to Citizenship" | Blindflug Studios AG | a satirical game about the naturalisation process, not a study tool. — [App Store](https://apps.apple.com/us/app/-/id6578447895)

### Inferences
- The two incumbents, Vexo/Swift and dataWorks, own roughly 6,000 store ratings between them. Every other naturalisation app has under 300. Ratings are uniformly high (4.5–4.8), so ratings alone will not differentiate a new app.
- Since about mid-2025 there has been a flood of solo or AI-assisted clones, many from developers abroad (India, Australia, Turkey) and many recycling the German "Leben in Deutschland" format. Search visibility is crowded and spam-like, and incumbents have strong keyword ownership.
- Business models: paid upfront (CHF 9–25), a Gemeinde-code unlock (Swift's B2G channel; it appears the City of Zürich gives applicants app access), freemium with one-time unlock (ClimbTag, dataWorks), or fully free (Casini). Subscriptions are rare and seen negatively.
- The Casini app shows that a free, well-designed app with a game layer (crests, maps, leaderboards) and official-source transparency can gain traction within months, with press and cantonal (Integration Aargau) endorsement.

### Gaps
- Exact IAP prices for dataWorks, ClimbTag and the Swift Android apps could not be reliably extracted from Google Play HTML.
- App Store subtitles marked "unverified" came from a regex on page HTML. Several scraped subtitles clearly belonged to other apps and were discarded, so only Vexo's subtitle is confirmed.
- Exact question counts per app are mostly self-reported and inconsistent: Swift "bis zu 450 pro Kanton"; dataWorks 300–450 and 619; ClimbTag 1,215; Vishwen 1,650+.
- No download counts are available for iOS.

## Notable web-based learning tools and official resources

### Takeaway
Official resources are canton-specific, static and German-centric: PDF catalogues, brochures and a basic online practice test, with Zürich the most complete. Third-party web tools are SEO-driven quiz sites, usually funnels into paid apps. No polished interactive web resource teaches the substance (history, political system, geography) as opposed to drilling questions.

### Cited findings
- **Kanton Zürich (official).**
  - The Grundkenntnistest covers geography, politics and history. The Gemeinde sets the date and fee.
  - Official practice tools: an online "Übungs-Grundkenntnistest", a 76-page Einbürgerungsbroschüre PDF and "Alle Fragen als Download" (a 78-page PDF), all in German.
  - Recommended optional materials: "Die Schweiz verstehen" (hep), "Echo" (HEKS), "Der Bund kurz erklärt", ch.ch, and "Kompaktwissen mit Humor".
  — [zh.ch Grundkenntnistest](https://www.zh.ch/de/migration-integration/einbuergerung/grundkenntnistest.html)
- Zürich's standardised, browser-based Grundkenntnistest is administered by Gemeinden and schools. — [zh.ch Login Grundkenntnistest](https://www.zh.ch/de/migration-integration/einbuergerung/informationen-fuer-behoerden-zur-einbuergerung/grundkenntnistest-gemeinden-schulen.html)
- The City of Zürich publishes its own learning brochure (2024), and its site says applicants get access to a learning app at the naturalisation interview. — [Stadt Zürich Lernbroschüre PDF](https://www.stadt-zuerich.ch/content/dam/web/de/aktuell/publikationen/2024/einbuergerung-lernbroschuere-grundkenntnistest/lernbroschuere-grundkenntnistest.pdf); [Stadt Zürich Grundkenntnisse](https://www.stadt-zuerich.ch/de/lebenslagen/einwohner-services/einbuergerung/grundkenntnisse.html)
- Third-party sources describe the Zürich digital test as 50 questions drawn from a pool of 350, with a 60% pass mark. — [naturalisation-suisse.ch/zuerich](https://naturalisation-suisse.ch/zuerich)
- **Kanton Aargau** runs an online version with a selection of practice questions. The official catalogue has about 330 questions. — [Aargauer Zeitung](https://www.aargauerzeitung.ch/aargau/kanton-aargau/einbuergerungsfragen-per-app-ueben-fuer-den-schweizer-pass-ld.4204055)
- **naturalisation-suisse.ch.** Anonymous operator. Free Zürich practice with federal, cantonal and municipal question databases for 160 Zürich municipalities. German only. — [naturalisation-suisse.ch/zuerich](https://naturalisation-suisse.ch/zuerich)
- **zurichtest.ch.** Unofficial, free community web app built from an open-source GitHub project. Offers the Zürich test in English, German and other languages, with a timed mock exam. — [GitHub THRD-GH/KantonZurich-Grundkenntnistest](https://github.com/THRD-GH/KantonZurich-Grundkenntnistest)
- **integration-schweiz.ch/broschuere.** Offers a Zürich naturalisation brochure; the operator could not be verified. — [integration-schweiz.ch](https://integration-schweiz.ch/broschuere)
- **Funnel sites for the apps covered above:**
  - einbuergerungstestschweiz.ch (Swift web app)
  - citizenshiptest.ch (free question pages at /fragen/)
  - schweizerwerden.com (50 free questions)
  - einbuergerungsquiz.ch (Casini web version)
  - einbuergerungsprofi.ch (blog on test procedure; notes that question count, time limit and pass mark are set by each canton)
  - swiss-citizen.com
  — [citizenshiptest.ch/fragen](https://citizenshiptest.ch/fragen/); [schweizerwerden.com](https://schweizerwerden.com/quiz/); [einbuergerungsquiz.ch](https://einbuergerungsquiz.ch/en/); [einbuergerungsprofi.ch](https://einbuergerungsprofi.ch/einbuergerungstest-ablauf/)
- A German-focused site, ausbildungspark.com, ranks for "Einbürgerungstest online" Swiss queries. — [ausbildungspark.com](https://www.ausbildungspark.com/einstellungstest/einbuergerungstest-online)
- Course providers such as wbk.ch offer in-person Einbürgerung courses. — [wbk.ch](https://www.wbk.ch/kurse/einbuergerung/)

### Inferences
- Official material is authoritative but presented as PDFs and question lists, not designed for learning. A learning app that links each fact to its official source would combine trust with usability.
- Zürich is by far the most served canton, by official tools, community tools and the most single-canton apps. Smaller cantons get little canton-specific content beyond the federal base.

### Gaps
- Reddit (r/Switzerland, r/askswitzerland) threads and expat-forum recommendations did not surface in searches; community sentiment beyond store reviews is unverified.
- YouTube channels for Einbürgerung/Staatskunde were not researched within the tool budget.
- Official practice offerings for other cantons (BE, GE, VD, BS, etc.) were not individually verified.

## Which app names are taken (exact names, with subtitles where known)

### Takeaway
Nearly every obvious German, English or French name built from "Einbürgerung", "Einbürgerungstest", "Swiss Citizenship", "Swiss Naturalization" and "Schweizer werden" is taken, often several times with only a year suffix to tell them apart. "Schweiz Quiz" and "Kantone Quiz" variants are also crowded. A distinctive brand name is needed.

### Cited findings (store names exactly as listed; sources are the listings and API queries cited above)

**Naturalisation apps, iOS (CH store)**
- Einbürgerungstest Schweiz (subtitle: Einbürgerung 2027 & Gespräch)
- Einbürgerungstest Code Schweiz (subtitle: Einbürgerung 2027 & Gespräch)
- Einbürgerung Schweiz
- Einbürgerung Schweiz - Pro
- Einbürgerung Schweiz 2026 (US store)
- Swiss Naturalization Test
- Einbürgerungsapp Schweiz 2026
- Einbürgerungstest Schweiz 2026 (two different developers)
- Einbürgerungstest CH 2026
- Einbürgerungstest Zürich
- Einbürgerungstest Zürich: Quiz
- Grundkenntnistest Aargau
- Schweizer Einbürgerungstest
- Einbürgerungstest Schweiz Quiz / Swiss Citizenship Test
- 2026 Einbürgerungstest
- Einbürgerung Schweiz Test 2026
- Einbürgerung Schweiz: 2026
- Grundwissen ZH
- VaudNatu: Einbürgerungstest
- ZurichNatu
- Schweizer Werden: Bürgertest
- Schweizer Bürgertest 2026
- Roter Pass: Einbürgerungstest
- Testklar: Einbürgerungstest ZH
- Zoylen: Einbürgerungstest CH
- Einbürgerung ZH
- HelvetiaPrep Swiss Citizenship
- Civica Swiss
- Revi-Swiss
- NatiCoach
- Swiss Einbürgerungstest
- Belong Switzerland
- Einbürgerungstest 2026: Hedi
- Citoyan: Einbürgerungstest (FR, likely aimed at France)

**Naturalisation apps, Android**
- Einbürgerungstest Schweiz 2026 (Swift; separately Nadia and Martin)
- Einbürgerungstest Code Schweiz
- Einbürgerung Schweiz 2026
- Einbürgerung Schweiz - Pro
- Swiss Citizenship Test 2026 (ClimbTag; Vishwen Labs; Mühldorf; Blissom Apps)
- Swiss Citizenship Test (Ali E.)
- Swiss Naturalization Test (vincedy)
- Einbürgerungsapp Schweiz 2026
- Einbürgerungstest Schweiz (FLY SKY)

**Web brands and domains**
- einbuergerungstestschweiz.ch
- citizenshiptest.ch ("Swiss Citizenship Test")
- schweizerwerden.com ("Schweizer Werden")
- einbuergerungsquiz.ch
- einbuergerungsprofi.ch ("Naturalization Expert" / "Einbürgerungsprofi")
- swiss-citizen.com ("Swiss Citizen")
- naturalisation-suisse.ch
- zurichtest.ch
- integration-schweiz.ch

**Canton and geography quiz apps**
- Schweizer Kantone - Quiz
- Kantone der Schweiz - Das Quiz
- Swiss Cantons - Map & Capitals
- Schweizer Kantone Quiz / Swiss Cantons Quiz
- Easy Kantone - Schweiz Quiz (subtitle unverified: "Geographie, Karte, Hauptstädte") / Swiss Cantons - Geography Quiz
- Karten Schweiz Geographie Jura / Swiss Cantons - Quiz Geography
- Swiss Cantons: Geography Quiz
- Switzerland Geography Map Quiz
- swiss cantons educational game
- Schweiz-Quiz: Kantone & mehr
- SwissQuiz
- Be Swiss - Quiz of Switzerland
- SwissMe

**Civics and other**
- CH info
- VoteInfo: Abstimmungen Schweiz
- Staatskunde und Politik (iOS, 2016, inactive)
- Swiss Law
- Der Papierkrieg / The Red Tape to Citizenship

### Inferences
- Names to avoid entirely: "Einbürgerung(stest) Schweiz [year]", "Swiss Citizenship Test", "Swiss Naturalization Test", "Schweizer werden", "Swiss Citizen", "Roter Pass", "Grundkenntnistest [canton]", "Kantone Quiz".
- Apparently unused in the CH store search, but not trademark-checked: names built on "Helvetia" alone (only "HelvetiaPrep" exists), "Eidgenoss", "Landsgemeinde", "Rütli", "Bundesbrief", "26 Kantone", "Kantönligeist" or "Heimatort".

### Gaps
- No trademark (Swissreg/IGE) check was done.
- Google Play search was run with hl=en; German or French titles could differ by locale.

## Gaps in the market: what no app does well

### Takeaway
All competitors are question-bank drillers. Nobody combines (a) structured explanatory lessons, (b) interactive maps of the 26 cantons as a core learning surface, (c) current politics such as Federal Council members and recent votes, kept automatically up to date, and (d) per-fact official source citations, in one polished German-first app. Accuracy and freshness are the recurring complaint category across all apps.

### Cited findings
- **Errors and outdated content are the most frequent complaint**, across all sizes of app:
  - Vexo/Swift: outdated compulsory-schooling years, "Halbkantone", wrong canton catalogue. — [App Store CH](https://apps.apple.com/ch/app/einb%C3%BCrgerungstest-schweiz/id1125130127)
  - Einbürgerungsprofi: "Scheint KI-generiert... Fragen sind teilweise auch falsch". — [Google Play](https://play.google.com/store/apps/details?id=ch.einbuergerungsprofi.app)
- **Shallow content:** apps reproduce official catalogues without extra teaching material. The Local wrote that the Casini app "doesn't offer alternative questions or additional training materials". A Fribourg user said the Swift app "doesn't go deep into cultural" topics. — [The Local](https://www.thelocal.ch/20260727/new-app-helps-applicants-prepare-for-swiss-citizenship-exam/); [Google Play](https://play.google.com/store/apps/details?id=ch.swift.citizench&hl=en)
- **Uneven canton coverage:** even the most transparent app says only 13 cantons have dedicated sets, and the other 13 use the federal base ("basic prep, not that canton's real exam"). ClimbTag's canton guides are "being verified" for most cantons. Swift has official catalogues for only 5 cantons. — [Google Play vincedev](https://play.google.com/store/apps/details?id=ch.vincedev.swisscitizenship&hl=en); [citizenshiptest.ch](https://citizenshiptest.ch/en/); [einbuergerungstestschweiz.ch](https://www.einbuergerungstestschweiz.ch/)
- **Municipality level** is a known pain point that only Einbürgerungsprofi, Casini (VD per commune) and naturalisation-suisse.ch (ZH) address. — [Google Play Einbürgerungsprofi](https://play.google.com/store/apps/details?id=ch.einbuergerungsprofi.app); [naturalisation-suisse.ch](https://naturalisation-suisse.ch/zuerich)
- **Maps:** only the Casini app (a Cantons mode with crests and maps) and the generic canton quizzes use maps. The canton quizzes teach only names, capitals and coats of arms, and are ad-laden. — [Google Play vincedev](https://play.google.com/store/apps/details?id=ch.vincedev.swisscitizenship&hl=en); [Google Play asmolgam](https://play.google.com/store/apps/details?id=com.asmolgam.switzerland)
- **Media and UX bugs:** dataWorks videos do not play; Swift landmark images do not load; Swift's code unlock fails; dataWorks has a hidden long-press filter. — Google Play reviews ([dataWorks](https://play.google.com/store/apps/details?id=com.dataworks.quizify.ch.citizenship&hl=en_US), [Swift code](https://play.google.com/store/apps/details?id=ch.swift.citizench.code))
- **Pricing resentment** at the market leader: "Price is clearly to trap those applying for Einbürgerung rather than educate". — [Google Play](https://play.google.com/store/apps/details?id=ch.swift.citizench&hl=en)
- **Source transparency** is emerging as a differentiator but is rare. Only citizenshiptest.ch shows per-question sources and "last checked" dates, and Casini publishes fidelity tiers. — [citizenshiptest.ch](https://citizenshiptest.ch/en/); [Google Play vincedev](https://play.google.com/store/apps/details?id=ch.vincedev.swisscitizenship&hl=en)
- **Interview preparation** (the "Gespräch") is mentioned only as a tagline by Swift ("Einbürgerung 2027 & Gespräch") and Blissom; no app shows a substantive interview module. — [App Store CH](https://apps.apple.com/ch/app/einb%C3%BCrgerungstest-schweiz/id1125130127); [Google Play Blissom](https://play.google.com/store/apps/details?id=app.blissom.einbuergerung.schweiz)
- **Current politics:** the official VoteInfo app (100K+ installs) and CH info cover votes and institutions but have no learning layer. — [Google Play VoteInfo](https://play.google.com/store/apps/details?id=ch.bk.voteinfo); [iTunes CH info](https://itunes.apple.com/search?term=Staatskunde&country=ch&entity=software)

### Inferences
- A new app is best positioned as **"learn Switzerland, not just the test"**:
  - map-first exploration of all 26 cantons (capital, languages, Landsgemeinde or not, history, notable votes, sights)
  - short lessons on the political system (direct democracy, federalism, Bundesrat, Konkordanz)
  - an official-source link and "Stand" date on every fact
  - spaced repetition across lessons and questions
  - an optional exam-practice layer per canton and Gemeinde
- The German-speaking resident is under-served on UX. Many new apps are English-first clones, while Swift (DE/FR) and dataWorks look dated on Android.
- Data freshness for current-politics facts (Federal Council composition, party strengths, recent Abstimmungen) could come from official open data (Bundeskanzlei/VoteInfo). No competitor advertises this.
- Distribution is the incumbents' moat: Swift's Gemeinde/City of Zürich partnership and Casini's Integration Aargau cooperation. Partnerships with cantonal integration offices are a realistic channel.

### Gaps
- No reliable data on market size, meaning annual naturalisation test-takers per canton, was gathered in this scope.
- In-app quality (explanation depth, map interactivity) was judged from listings and reviews, not hands-on testing.
