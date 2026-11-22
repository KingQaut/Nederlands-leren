# NederlandsLeren – project notes for a new session

A free website that helps newcomers to the Netherlands find resources to learn Dutch.
Repository `KingQaut/Nederlands-leren`, branch `main`. Built on the same pattern as `KingQaut/indiawijzer`.

The owner is not a developer. Explain steps as clicks in the GitHub website, not as terminal commands.

Product requirements document (a Claude doc, read it with the docs tools): https://claude.ai/artifact/XrZNb5hvQoEjpR35srKy7k

## Hard requirements

- **€0 running cost, minimal maintenance.** No database, CMS, server, paid service or domain. Static Eleventy site on GitHub Pages (free address `kingqaut.github.io/Nederlands-leren`).
- **Content is generated automatically**, not curated by hand; every page shows a disclaimer saying so. Generation runs on the owner's Claude subscription. The owner starts an update by hand every once in a while (no scheduled task; a disabled one exists). An update follows `content/UPDATING.md`: it checks and updates `content/resources.js` on a branch, runs the link check there, and only then moves it to `main`).
- **Audience:** newcomers with limited Dutch, often on a cheap phone. Plain language, large tap targets, WCAG 2.2 AA, no cookies or tracking.
- **Coverage:** national and online resources, plus Amsterdam for local listings.
- **Paid courses, schools and apps** may be listed if they have a published price and stated levels; no quality mark is required (owner's decision). The site does not check quality and says so: on the About page and in a note on every topic page and on the help-me-choose results.
- **Translations: new items in Dutch and English only.** Anything new (resources, topics, search buttons, interface texts) is written in Dutch and English first. Do not add Arabic, Polish, Turkish, French, Spanish or other translations until the owner asks for them; meanwhile the site shows the English text in those languages (`withEnglishFallback` in `src/_lib/site-texts.js`), and `npm run check` lists how many texts are untranslated. When you change an existing text, change the Dutch and English and remove its other-language versions (they would be out of date), and tell the owner.
- **Inburgering (civic integration) is a secondary goal, deferred.** The site deliberately has no inburgering content for now; do not add it back until the owner asks. When it returns, inburgering schools need the Blik op Werk Keurmerk Inburgeren.

- **Curated entries:** a resource with `curated: true` in `content/resources.js` was added by the owner, who keeps it up to date (it may use `http://` and list days and times). Automatic content updates leave it alone and only report problems. Add one only when the owner gives the details.

Do not add anything that needs regular human upkeep without asking the owner first.

## How it is built

| What | Where |
| --- | --- |
| Resources (one entry each, texts in Dutch + English, other languages when the owner asks; `topics` says where each is listed) | `content/resources.js` |
| The two sections (online / in person), their topics, intros and "search now" buttons | `content/topics.js` |
| Site languages (`languages`), interface texts and labels (categories, formats, levels…) | `src/_lib/site-texts.js` (passed to templates as `site` by `src/_data/site.js`, which must keep a single default export) |
| Content passed to templates; works out each resource's "ways" of learning and its rank | `src/_data/library.js` (not `content.js`: that name clashes with the layout's `content`) |
| Home (two halves + cards), section, topic, help-me-choose, about pages; search index | `src/home.njk`, `section.njk`, `topic.njk`, `kiezen.njk`, `about.njk`, `search.njk`; shared resource row in `src/_includes/row.njk`; half illustrations `art-*.svg` |
| Header site search, the sentence finder and its lists | `src/assets/site.js` (finder choice syncs to `?speak=…&way=…`) |

## Site structure

Modelled on indiawijzer.nl. The home page has two big coloured halves, **Online leren** (`/online/`) and **Op locatie leren** (`/op-locatie/`), each with tiles to its topic pages, plus cards: help me choose, start today for free, levels. A topic page has a short intro, its resources (whole row links to the provider) and "search now" buttons. URLs: Dutch at `/<section>/<topic>/`; English, Arabic, Polish, Turkish, French and Spanish at `/en/…`, `/ar/…`, `/pl/…`, `/tr/…`, `/fr/…`, `/es/…` (all but Dutch reuse the English slugs). The header has a language menu (a `<details>`, works without JavaScript), sorted alphabetically by language name. Arabic pages are right to left (`dir="rtl"`); the CSS uses logical properties (`margin-inline-start`, `inset-inline-end`…), so keep using those instead of left/right. The header has site-wide search over sections, topics and resources (`/assets/search-<lang>.json`).

**Help me choose** (`/kiezen/`, `/en/choose/`) is one sentence with two blanks: "I speak [no / a little / quite a lot of / A1 / A2 / B1 / B2] Dutch and I want to learn [on my phone / by talking with people / in a class or course / to read and write / with my children]." Two taps show up to 6 best matches (exact level first, then free, then official/library/non-profit), plus matching "search now" buttons. A filled blank collapses to the chosen word so the sentence reads as one line; "change" reopens it. Below it, "browse everything" lists all resources grouped by way of learning, with a typo-tolerant search. Without JavaScript only the grouped list shows. Answers and ways are defined in `labels.speak` and `labels.ways` in `src/_lib/site-texts.js`; which resources fit which way is in `waysOf()` in `library.js`.
| Publish on push (runs `npm run check` first) / weekly link check | `.github/workflows/deploy.yml`, `links.yml` |
| Content checks (fields, topics, no inburgering, summary length) | `scripts/check-content.mjs` (`npm run check`) |
| Instructions for the monthly content update | `content/UPDATING.md` |

- Nunjucks pitfall: `none` is a keyword, so a data key named `none` breaks the template.
- The publish workflow sets `PATH_PREFIX=/Nederlands-leren/` for the free GitHub Pages address.
- The header shows a small QR code of the site address next to the logo (`src/assets/qr.svg`, generated once with the `qrcode` npm package). Remake it only if the address changes.

## Roadmap (from the PRD)

1. Evening 1 (done): site, directory, filters, search, disclaimer, Dutch + English, publishing.
2. Evenings 2–3: content update procedure (done, see `content/UPDATING.md`; run by hand), guided finder (done as Help me choose), more "search now" buttons.
3. Evening 4: Arabic (RTL, done), Polish, Turkish, French and Spanish (done, owner's request); still to do: Ukrainian, Tigrinya; accessibility pass; more Amsterdam listings.

To add a language (only when the owner asks): add it to `languages` in `src/_lib/site-texts.js`, then add its texts everywhere `npm run check` reports them untranslated (labels and `ui` in `site-texts.js`, `content/topics.js`, every `sum` in `content/resources.js`) and a block in `src/about.njk`.
