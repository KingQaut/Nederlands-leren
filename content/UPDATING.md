# Content update – instructions

The owner starts a content update by hand every once in a while, by asking a Claude Code
session to "follow content/UPDATING.md". This file tells that session exactly what to do. Read `CLAUDE.md` first; its hard requirements apply.

## Goal

Keep `content/resources.js` current: remove resources that are gone, fix ones that changed,
and add good new ones, especially to topics with fewer than 3 resources. Everything is
generated automatically; the site already says so on every page.

## Steps

1. **Start from the latest `main`.** Work on a new branch `content-update-YYYY-MM-DD`.
2. **Check every existing resource** with web search and by reading its page (not just a
   search snippet): is it still there, still free or paid as listed, still the same levels,
   formats and languages? Fix the entry, or remove it if it is gone or no longer fits.
3. **Add new resources** where a topic is thin (see `npm run check` warnings) and where the
   web shows good, current options. Aim for 3–8 resources per topic; quality over quantity.
4. **Update `generated`** at the top of `content/resources.js` to today's date.
5. **Run `npm run check`** and `npm run build`; fix every problem they report.
6. **Push the branch**, then run the **Check links** workflow on it:
   `gh workflow run links.yml --ref <branch>`, wait for it, and read its summary.
   Remove or fix any resource whose link is reported broken, push again, re-check.
7. **When the check is clean**, fast-forward `main` to the branch and push `main`. The
   **Build and publish** workflow then publishes the site. Watch it finish successfully.
8. **Report** in one short message: what was removed, changed and added, and anything
   the owner should look at.

## Rules for entries

- Follow the field list at the top of `content/resources.js`; topic keys come from
  `content/topics.js`. Do not change `topics.js`, templates or styles in this task.
- **Summaries:** plain language at CEFR A2/B1, max ~25 words, no marketing words, one in
  Dutch (`nl`) and one in English (`en`). Say "free" only when a real free version exists.
- **No other translations.** Do not write Arabic (`ar`), Polish (`pl`) or other summaries for
  new resources; the owner asks for translations separately, and until then the site shows
  the English text. If you change an existing summary, remove that resource's other-language
  summaries (they would be out of date) and list those resources in the report.
- **Paid** courses, schools and apps may be listed if they show a price and the levels
  they teach. Do not claim a quality mark unless the provider's own site shows it.
- **No inburgering (civic integration) content.** The owner has deferred it.
- **Coverage:** national and online resources, plus local places in Amsterdam only.
- **Never invent** a URL, address, price or level. If you cannot confirm it on the
  provider's own site, leave the resource out.
- Keep the three home-page picks (`quickNames` in `src/_data/library.js`) unless one is
  gone; `npm run check` fails if one is missing.
- Things that change weekly (dates, times of language cafés) are not listed; the topic
  pages have "search now" buttons for those.

## If something goes wrong

Do not push to `main`. Leave the branch as it is and say in the report what failed.
