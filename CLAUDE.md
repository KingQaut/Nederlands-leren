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
- **Paid schools** are listed only from educational institutions or providers with a recognised quality mark, with a published price and CEFR levels.
- **Inburgering (civic integration) is a secondary goal, deferred.** The site deliberately has no inburgering content for now; do not add it back until the owner asks. When it returns, inburgering schools need the Blik op Werk Keurmerk Inburgeren.

Do not add anything that needs regular human upkeep without asking the owner first.

## How it is built

| What | Where |
| --- | --- |
| Resources (one entry each, NL + EN texts) and "search now" buttons | `content/resources.js` |
| Interface texts and labels (categories, formats, levels…) | `src/_data/site.js` |
| Content passed to templates | `src/_data/library.js` (not `content.js`: that name clashes with the layout's `content`) |
| Home page with directory, filters and search; about page | `src/home.njk`, `src/about.njk` (paginated over languages in `library.pages`) |
| Client-side filters, typo-tolerant search, share/print | `src/assets/site.js` (filters sync to the URL query) |
| Publish on push / weekly link check | `.github/workflows/deploy.yml`, `links.yml` |

- Nunjucks pitfall: `none` is a keyword, so a data key named `none` breaks the template.
- The publish workflow sets `PATH_PREFIX=/Nederlands-leren/` for the free GitHub Pages address.

## Roadmap (from the PRD)

1. Evening 1 (done): site, directory, filters, search, disclaimer, Dutch + English, publishing.
2. Evenings 2–3: scheduled content generation, guided finder (max 5 questions), more "search now" buttons.
3. Evening 4: Arabic (RTL), Ukrainian, Turkish, Tigrinya; accessibility pass; more Amsterdam listings.
