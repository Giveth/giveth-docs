# Giveth Docs

The site at [docs.giveth.io](https://docs.giveth.io). It renders the Giveth
Notion workspace directly: **Notion is the source of truth**, editors work in
Notion, and nothing in this repo needs changing when content changes.

This replaces a [super.so](https://super.so) subscription that rendered the same
Notion workspace. The background, the decisions and the salvaged assets are in
[NOTION-RENDERER-PLAN.md](NOTION-RENDERER-PLAN.md).

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build; prerenders all 45 pages
npm start            # serve the production build
npm run check-routes -- http://localhost:3000   # assert every live URL resolves
```

No credentials are needed to render: the docs tree is public, and Notion's API
serves it unauthenticated. `REVALIDATE_SECRET` is only needed for the on-demand
refresh endpoint. See [.env.example](.env.example).

## How it fits together

| Path | Role |
|---|---|
| `lib/site-map.ts` | Walks the Notion tree and maps every page to its URL. |
| `lib/notion.ts` | Notion client plus the caching that makes edits show up. |
| `lib/search.ts` | Builds the search index from page text. |
| `config/navigation.ts` | The sidebar, navbar and footer. Hand-maintained. |
| `app/[...slug]/page.tsx` | Renders any page by its URL. |
| `app/api/image` | Image proxy, so images are served from this origin. |
| `app/api/revalidate` | Pushes a Notion edit live immediately. |
| `super-salvage/` | Archive recovered from Super. Irreplaceable — see below. |

### URLs

Super's slugs were set by hand in its dashboard and are not derivable from page
titles — *Making a Donation* was served at `/projectdonating`. Those URLs are
indexed and linked from giveth.io, Discord and blog posts, so they are preserved
exactly:

```
slug = slug_map[page title] || slugify(page title)
```

`scripts/slug_map.json` is that override table. It is keyed by **title**, not by
Notion page id, because the page ids Super stored are all stale. A page created
in Notion today falls through to `slugify` and gets a working URL with no code
change.

### Navigation is deliberately not derived from Notion

Super's sidebar was curated in its dashboard: 12 sections, against Notion's 4.
Deriving nav from the Notion tree would restructure the site, so the curated
arrangement is kept in `config/navigation.ts` and edited by hand. New sidebar
entries are rare.

**A page does not need a nav entry to work.** Every Notion page resolves at its
slug either way; it just will not appear in the sidebar until someone adds it.

### How edits reach the site

- **Automatically.** Pages revalidate every 5 minutes, the site map every 15.
  Nobody has to run anything.
- **Immediately**, on demand:

  ```bash
  curl -X POST https://docs.giveth.io/api/revalidate \
    -H "Authorization: Bearer $REVALIDATE_SECRET"
  ```

  Pass `{"pageId": "..."}` to refresh a single page.

## Before deleting anything

`super-salvage/` was captured while the Super subscription was still live and
**cannot be regenerated**. It holds the heading font (which existed only on
Super's CDN), the design tokens, the original nav and footer configuration, the
logos, and the raw HTML of the live site. `scripts/slug_map.json` is equally
irreplaceable. Read
[NOTION-RENDERER-PLAN.md §2](NOTION-RENDERER-PLAN.md) first.

## Fonts

Headings use **TeX Gyre Adventor** (GUST Font License, free/libre), self-hosted
from `public/fonts/`. Super uploaded only the Bold cut and declared it at
`font-weight: 400`, so every heading on the live site is the Bold face at normal
weight. That is reproduced deliberately — see the comment in `app/globals.css`.

Body text is **Red Hat Display**, also self-hosted.
