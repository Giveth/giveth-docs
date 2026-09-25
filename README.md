# Giveth Docs

The site at [docs.giveth.io](https://docs.giveth.io). Content lives in Notion;
this repo turns it into a static site served from GitHub Pages.

This replaces a paid hosted service that rendered the same Notion workspace.
The background, the decisions and the salvaged assets are in
[NOTION-RENDERER-PLAN.md](NOTION-RENDERER-PLAN.md).

## How it works

```
Notion  ──►  scripts/fetch-notion.mjs  ──►  content/ + public/notion-assets/
                     │                                │
                     ▼                                ▼
          scripts/sync-media.sh              next build (static export)
                     │                                │
                     ▼                                ▼
          DigitalOcean Space (videos)    gh-pages  ──►  docs.giveth.io
```

**The built site never contacts Notion.** Pages and images are committed to
this repo, so a slow or unreachable Notion API cannot produce a half-empty page.
Pages are plain HTML files.

**Videos and other files live on a DigitalOcean Space**, not in the repo — they
are too large to commit, and Notion's own links to them expire about an hour
after they are issued. The fetch points pages at the Space; CI uploads anything
the Space does not have yet.

## Running it

```bash
npm install
npm run fetch-notion     # pull the latest content from Notion into content/
npm run build            # static export into out/
npm run serve            # serve out/ locally
npx serve out            # ...or directly
```

Checks:

```bash
node scripts/check-export.mjs    # every live URL exists, with chrome and content
npm run check-slugs              # the URL rules still behave
npm run check-routes -- http://localhost:3000   # against a running/deployed site
```

`fetch-notion` needs network access to Notion. Nothing else does, and reading
Notion needs no credentials — the docs tree is public. Uploading videos needs
Space credentials, and only happens in CI.

## How a Notion edit reaches the site

Nobody has to run anything. `.github/workflows/refresh-content.yml` re-fetches
from Notion every three hours, commits any change, and the push triggers
`deploy-docs.yml`.

To publish immediately, either run that workflow from the Actions tab, or have
a Notion automation (or anything else) poke it:

```bash
curl -X POST https://api.github.com/repos/Giveth/giveth-docs/dispatches \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <token with contents:write>" \
  -d '{"event_type":"notion-updated"}'
```

The refresh job refuses to publish a suspiciously small tree and leaves the
committed content alone if it cannot read Notion, so a bad fetch cannot empty
the site.

## Setting up the Space

One-time. Until it is done, `fetch-notion` stops with an error naming what is
missing, rather than publishing pages with broken videos.

1. In `config/media.json`, set `bucket` and `region` (e.g. `ams3`). `prefix` is
   the folder files go in; `publicBaseUrl` is only needed for a custom CDN
   domain. None of these are secrets.
2. Create a Spaces access key, and add it to the repository secrets as
   `DO_SPACES_KEY` and `DO_SPACES_SECRET`.
3. Enable the CDN on the Space, or set `publicBaseUrl` to wherever it is served.

Files are named by a hash of their Notion URL, so each is uploaded once. A video
replaced in Notion gets a new name; the old object stays on the Space until
someone removes it.

`scripts/sync-media.sh --verify` checks every hosted file is publicly reachable,
with no credentials. The deploy workflow runs it as a warning.

## Layout

| Path | Role |
|---|---|
| `scripts/fetch-notion.mjs` | The build stage. Walks Notion, downloads every asset. |
| `scripts/slug_map.json` | The live site's hand-set URLs. Irreplaceable — see below. |
| `content/` | Generated. One record map per page, plus the site map. |
| `public/notion-assets/` | Generated. Every image, hashed by source URL. |
| `content/media.json` | Generated. Videos and files, and their URLs on the Space. |
| `config/media.json` | Which Space hosts videos and files. |
| `scripts/sync-media.sh` | CI step: uploads what the Space is missing. |
| `config/navigation.ts` | The sidebar, navbar and footer. Hand-maintained. |
| `app/[...slug]/page.tsx` | Renders any page from `content/`. |
| `super-salvage/` | Archive recovered from the previous host. Irreplaceable — see below. |

`content/` and `public/notion-assets/` are generated but **committed on
purpose**: that is what lets the build run without Notion.

### URLs

The live URLs were set by hand in the previous host's dashboard and are not
derivable from page titles — *Making a Donation* was served at
`/projectdonating`. Those URLs are indexed and linked from giveth.io, Discord
and blog posts, so they are preserved exactly:

```
slug = slug_map[page title] || slugify(page title)
```

`scripts/slug_map.json` is that override table, keyed by **title** because the
Notion page ids the previous host stored are all stale. A page created in
Notion today falls through to `slugify` and gets a working URL with no code
change.

### Navigation is deliberately not derived from Notion

The live sidebar was curated in the previous host's dashboard: 12 sections,
against Notion's 4. Deriving nav from the Notion tree would restructure the
site, so the curated arrangement lives in `config/navigation.ts` and is edited
by hand.

**A page does not need a nav entry to work.** Every Notion page is generated at
its slug either way; it just will not appear in the sidebar until someone adds
it.

## Before deleting anything

`super-salvage/` was captured while the previous host was still live and
**cannot be regenerated**. It holds the heading font (which existed only on that
host's CDN), the design tokens, the original nav and footer configuration, the
logos, and the raw HTML of the live site. `scripts/slug_map.json` is equally
irreplaceable.

## Fonts

Headings use **TeX Gyre Adventor** (GUST Font License, free/libre), self-hosted
from `public/fonts/`. Only the Bold cut was ever uploaded to the previous host,
and it was declared at `font-weight: 400`, so every heading on the live site is
the Bold face at normal weight. That is reproduced deliberately — see the
comment in `app/globals.css`.

Body text is **Red Hat Display**, also self-hosted.
