# NederlandsLeren – project notes for a new session

A free website that helps newcomers to the Netherlands find resources to learn Dutch.
Repository `KingQaut/Nederlands-leren`, branch `main`. Built on the same pattern as `KingQaut/indiawijzer`.

The owner is not a developer. Explain steps as clicks in the GitHub website, not as terminal commands.

Product requirements document (a Claude doc, read it with the docs tools): https://claude.ai/artifact/XrZNb5hvQoEjpR35srKy7k

## Hard requirements

- **€0 running cost, minimal maintenance.** No database, CMS, server, paid service or domain. Static Eleventy site on GitHub Pages (free address `kingqaut.github.io/Nederlands-leren`).
- **Content is generated automatically**, not curated by hand; every page shows a disclaimer saying so. Generation runs on the owner's Claude subscription (planned: a monthly scheduled Claude Code task that regenerates `content/resources.js` and commits it).
- **Audience:** newcomers with limited Dutch, often on a cheap phone. Plain language, large tap targets, WCAG 2.2 AA, no cookies or tracking.
- **Coverage:** national and online resources, plus Amsterdam for local listings.
- **Paid courses, schools and apps** may be listed if they have a published price and stated levels; no quality mark is required (owner's decision). The site does not check quality and says so: on the About page and in a note on every topic page or help-me-choose result that includes a paid resource.
- **Inburgering (civic integration) is a secondary goal, deferred.** The site deliberately has no inburgering content for now; do not add it back until the owner asks. When it returns, inburgering schools need the Blik op Werk Keurmerk Inburgeren.

Do not add anything that needs regular human upkeep without asking the owner first.

## How it is built

| What | Where |
| --- | --- |
| Resources (one entry each, NL + EN texts; `topics` says where each is listed) | `content/resources.js` |
| The two sections (online / in person), their topics, intros and "search now" buttons | `content/topics.js` |
| Interface texts and labels (categories, formats, levels…) | `src/_data/site.js` |
| Content passed to templates; works out each resource's "ways" of learning and its rank | `src/_data/library.js` (not `content.js`: that name clashes with the layout's `content`) |
| Home (two halves + cards), section, topic, help-me-choose, about pages; search index | `src/home.njk`, `section.njk`, `topic.njk`, `kiezen.njk`, `about.njk`, `search.njk`; shared resource row in `src/_includes/row.njk`; half illustrations `art-*.svg` |
| Header site search, the sentence finder and its lists | `src/assets/site.js` (finder choice syncs to `?speak=…&way=…`) |

## Site structure

Modelled on indiawijzer.nl. The home page has two big coloured halves, **Online leren** (`/online/`) and **Op locatie leren** (`/op-locatie/`), each with tiles to its topic pages, plus cards: help me choose, start today for free, levels. A topic page has a short intro, its resources (whole row links to the provider) and "search now" buttons. URLs: Dutch at `/<section>/<topic>/`, English at `/en/<section>/<topic>/`. The header has site-wide search over sections, topics and resources (`/assets/search-<lang>.json`).

**Help me choose** (`/kiezen/`, `/en/choose/`) is one sentence with two blanks: "I speak [no / a little / quite a lot of] Dutch and I want to learn [on my phone / by talking with people / in a class or course / to read and write / with my children]." Two taps show up to 6 best matches (exact level first, then free, then official/library/non-profit), plus matching "search now" buttons. A filled blank collapses to the chosen word so the sentence reads as one line; "change" reopens it. Below it, "browse everything" lists all resources grouped by way of learning, with a typo-tolerant search. Without JavaScript only the grouped list shows. Answers and ways are defined in `labels.speak` and `labels.ways` in `src/_data/site.js`; which resources fit which way is in `waysOf()` in `library.js`.
| Publish on push / weekly link check | `.github/workflows/deploy.yml`, `links.yml` |

- Nunjucks pitfall: `none` is a keyword, so a data key named `none` breaks the template.
- The publish workflow sets `PATH_PREFIX=/Nederlands-leren/` for the free GitHub Pages address.

## Roadmap (from the PRD)

1. Evening 1 (done): site, directory, filters, search, disclaimer, Dutch + English, publishing.
2. Evenings 2–3: scheduled content generation, guided finder (max 5 questions), more "search now" buttons.
3. Evening 4: Arabic (RTL), Ukrainian, Turkish, Tigrinya; accessibility pass; more Amsterdam listings.
