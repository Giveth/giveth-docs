# Notion export — staged for review, not wired into the build

This is the output of `scripts/notion_export.py` run against the Giveth Docs
Notion workspace. **Nothing here is live.** It is staged so the content can be
reviewed before any decision to replace the existing `dapps/`, `whatisgiveth/`
and `devouch/` directories.

Regenerate with:

```bash
python3 scripts/notion_export.py --out notion-export
python3 scripts/gen_sidebar.py --export notion-export --out notion-export/sidebarsNotion.js
```

## What it contains

- `docs/` — 45 pages of markdown
- `sidebarsNotion.js` — a Docusaurus sidebar reproducing Super's 12-section
  navigation (see `scripts/gen_sidebar.py` for why Super's arrangement is used
  rather than Notion's)
- `export-report.json` — per-page detail, plus unhandled block types and
  unresolved links

Images are **not** committed here. The export downloads 100 of them (~36MB) into
`static/img/notion/`, and they can be regenerated at any time from Notion, which
Giveth controls. The images that genuinely needed rescuing were the ones hosted
on Super's CDN — those are in `super-salvage/content-images/`.

## Export quality

45/45 pages, 100 images, 9 covers, no failures and **no unhandled block types**.
The image count independently matches the `notion-image` count measured by
crawling the live Super site, which is a useful cross-check.

Carried across: callouts (as `:::info` style admonitions, colour-mapped to match
`src/css/notion-blocks.css`), page icons (into `sidebar_label`), page covers
(into frontmatter `image`), internal Notion links (rewritten to local routes),
tables, code blocks, toggles and nested lists.

Headings are shifted down one level so `h1` remains the page title, which is
what Docusaurus expects.

## Known issues, in the source rather than the export

Four links in the Notion content point nowhere resolvable and will export as
dead links. They need fixing in Notion — the intended targets are not guessable:

- `https://www.notion.so/giveth/api.md` — no page id at all
- `https://giveth.notion.site/Giveth-Quadratic-Funding-3478aa27eb094a699f9ddd6a8b611027`
- `https://www.notion.so/giveth/Regen-Farm-Parameters-a5b474e75f334d03ad1c1c43f5d923d4`
- `/934200f174824da78ad4072048db3040`

Separately, some pages contain literal markdown markers typed by hand — text
reading `**like this**` that is *also* bold-annotated. The exporter escapes the
asterisks so they render as Notion displays them (literally), but it would be
better to clean these up at the source.

## Section pages

The four section pages (`what-is-giveth`, `donors-project-guides`,
`the-giveconomy`, `devouch`) plus `causes` have almost no prose, because in
Notion their body is an inline database rather than text. On the Super site
these rendered as grids of cards. They emit `<DocCardList />`, the Docusaurus
equivalent, which requires them to be used as category index pages.

## Gaps against the current repo

- **45 Notion pages vs ~65 markdown files.** Adopting this export wholesale
  means losing content that exists only in the repo.
- **Translations have no Notion equivalent.** `i18n/` carries Spanish,
  Portuguese and Turkish. Nothing in Notion corresponds to them, so a wholesale
  replacement drops all three locales.
- **`causes`, `how-it-works`, `creating-a-cause`, `for-project-owners`** exist
  in Notion but not in Super's navigation — they postdate the Super build.
