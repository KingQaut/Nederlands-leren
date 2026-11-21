# NederlandsLeren

A free guide for newcomers to the Netherlands: where to learn Dutch, by level, cost and situation.
Dutch at `/`, English at `/en/`. National and online resources, plus local ones in Amsterdam.

The content is generated automatically; every page shows a disclaimer saying so.

## How it stays low-maintenance

- **No database, no CMS, no server.** Plain HTML generated from one content file, hosted free on GitHub Pages.
- **Explain briefly, link to the source.** Each resource links to its provider, which is the source of truth.
- **"Search now" buttons** for things that change weekly (language café times, course start dates) open a live search instead of a list someone has to maintain.
- **Weekly link check.** If a link breaks, GitHub opens an issue and e-mails you. No e-mail means nothing to do.

## Where things are

| What | File |
| --- | --- |
| All resources and their texts (NL + EN) | `content/resources.js` |
| Site name, address, interface texts, labels | `src/_data/site.js` |
| Page templates | `src/home.njk`, `src/about.njk`, `src/_includes/base.njk` |
| Design, filters and search | `src/assets/style.css`, `src/assets/site.js` |
| Publish / weekly link check | `.github/workflows/` |

## Going live (one time)

1. In the repository on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Open the **Actions** tab and run **Build and publish** (or just change any file).
3. The site appears at https://kingqaut.github.io/Nederlands-leren/.
4. Run **Check links** once from the Actions tab and fix whatever it reports in `content/resources.js`.

When a domain is connected later: set it under **Settings → Pages → Custom domain**, change `url` in `src/_data/site.js`, and remove the `PATH_PREFIX` line in `.github/workflows/deploy.yml`.

## Working on it locally

```bash
npm install
```

```bash
npm start
```

Then open http://localhost:8080.
