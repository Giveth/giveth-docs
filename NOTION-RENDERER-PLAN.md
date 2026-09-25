# Plan: replace the hosted Notion site with a self-hosted renderer

Handoff document. Everything a fresh session needs to build this without
re-deriving the research. Written 2026-09-22.

---

## 1. The goal

`docs.giveth.io` is currently served by a paid hosted service that renders a
Notion workspace. Giveth pays monthly for a site nobody is developing.
Replace it with a self-hosted app that:

1. **Renders Notion directly.** Notion is the source of truth. Editors work in
   Notion and never touch this repo.
2. **Looks the same.** Same fonts, colours, layout, sidebar.
3. **Serves the same routes.** The live URLs are indexed and linked from
   giveth.io, Discord and blog posts. They must not break.
4. **Picks up Notion edits automatically**, without anyone running a script.
5. **New Notion pages appear automatically** at a sensible URL.

### Explicitly decided

- **The 12-section sidebar stays hand-maintained.** The live sidebar arrangement
  does not match the Notion tree (see §4). Deriving nav from Notion would
  restructure the site; reorganising Notion to match was offered and declined.
  New sidebar entries are rare, so editing a config file when one is needed is
  acceptable. **New pages must still render at their URL** even before anyone
  adds them to the sidebar — they just will not appear in nav until someone does.
- **Framework is open.** Docusaurus is not a requirement. Neither is markdown.
- **Recommended: Next.js + `react-notion-x`.** Rationale in §5.

---

## 2. Read this before deleting anything

`super-salvage/` (13MB, committed) is irreplaceable and was captured while the
hosted site was still live. It cannot be regenerated once the subscription is
cancelled.

| Path | What it is | Why it matters |
|---|---|---|
| `fonts/tex-gyre-adventor-400.otf` | The heading font | Custom upload that existed **only on the hosted service's CDN**. GUST Font License (free/libre), so self-hosting is legal. Also at `static/fonts/TeXGyreAdventor-Bold.otf`. |
| `DESIGN-TOKENS.md` | Full extracted design system | Colours, type, layout, both themes. Read this first. |
| `super_nav.json` | The live site's complete sidebar + navbar | 12 sections, 36 pages, Lucide icon names. **This is the sidebar spec.** |
| `super_footer.json` | The live site's footer | Links + 7 socials. |
| `logo/*.png` | Navbar and footer logos, light + dark | |
| `content-images/` | 111 images from the hosted service's CDN | Rescued; Notion has the originals too. |
| `css/` | The four stylesheets the live site served | Reference for exact component styling. |
| `slugs.txt`, `sitemap.xml` | 131 live URLs | See §6 — most are stale. |
| `pages-html.tar.gz` | Raw HTML of all 132 live pages | Ground truth for visual comparison. |
| `home.html` | Raw homepage | Where the design tokens were extracted from. |

`scripts/slug_map.json` is the other irreplaceable artifact — see §6.

---

## 3. Credentials

`.env` holds `NOTION_API_SECRET` (gitignored — verify this stays true).
It is an internal integration named **`docs`** in the **`giveth`** workspace
(`ff891e0b-a285-4d6e-b9f4-87bde516d521`).

The integration must be **connected to the page** in Notion's UI or the API
returns `object_not_found` with zero results — a token alone grants nothing.
This has already been done for the docs tree. If a new page is created outside
that subtree, it may need connecting separately.

If using `react-notion-x`, note it uses Notion's **private** API and may need
different credentials (a `token_v2` cookie for private pages; public pages need
none). The docs are public, so this should not be required — verify early.

---

## 4. The Notion structure (non-obvious — this cost real time)

Root page: **`1703ab28-d48c-806f-883e-fb81cbf40c1d`** ("Giveth Docs")
Public URL: `https://giveth.notion.site/Giveth-Docs-1703ab28d48c806f883efb81cbf40c1d`

**The tree is not a nest of sub-pages.** The root contains an *inline database*
whose 4 entries are the top-level sections. Those pages then mix `child_page`
blocks with *further inline databases*. A walker that only follows `child_page`
finds **zero pages**.

```
Giveth Docs (root)
└── [inline database]
    ├── What is Giveth?            (11 children)
    ├── Donors & Project Guides    (13 children, incl. Causes → 3 more)
    ├── The GIVeconomy             (12 children)
    └── DeVouch                    (2 children)
```

**45 pages total.** Working tree-walk logic is in
`scripts/notion_export.py::walk_tree` — follows both `child_page` and
`child_database`. Reuse that logic even if the language changes.

The 4 section pages have almost no prose: their body *is* the inline database.
On the live site they rendered as **card grids**. The renderer must handle this.

### The live sidebar ≠ the Notion tree

The live sidebar is hand-curated in the hosted service's dashboard: **12
sections, 36 pages**, arranged differently from Notion's 4 sections. Per the
decision in §1, the 12-section arrangement wins. `super-salvage/super_nav.json`
is its spec.

Also note: one top-level sidebar entry (**FAQ**) is a bare *page*, not a
category. Do not assume every top-level entry has children.

---

## 5. Recommended architecture

### Renderer: Next.js + `react-notion-x`

`react-notion-x` renders Notion's **private** API, which is what gives the
hosted site its fidelity — callouts, columns, toggles, collection card grids,
equations. The official API renders noticeably less and would require
hand-building those block types.

**Tradeoff, stated honestly:** the private API is undocumented and can break
when Notion changes it. The official API is stable but lower fidelity. Given
"it should look the same", `react-notion-x` is the right default — but verify it
renders the inline-database card grids acceptably before committing, because
that is the single most load-bearing block type here.

`nextjs-notion-starter-kit` is essentially an open-source version of the hosted
service and a reasonable starting point. Do not adopt its design wholesale —
the Giveth design is already extracted in `DESIGN-TOKENS.md`.

### Routing

**The live slugs are hand-set and not derivable from titles:**

| Notion title | Live URL |
|---|---|
| Making a Donation | `/projectdonating` |
| Adding Updates to Your Project | `/mandatoryupdates` |
| Project Quality Assurance Guide | `/listedunlisted` |
| Getting Started | `/gettingstarted` |

No slugify rule produces these. So:

```
slug = slug_map[page_title]  ||  slugify(page_title)
```

`scripts/slug_map.json` has all 45 mappings (`by_title`). Keep it as the
override table. New pages fall through to `slugify`, satisfying requirement 5.

**Do not try to match on Notion page IDs.** The salvaged nav config stores a
`pageId` per nav entry, but **all 38 are stale** — the pages were recreated in
Notion since, and zero match the current tree. Match by **title**. This is why
`slug_map.json` is keyed by title and why it is irreplaceable: regenerating it
means manually re-deriving 45 hand-set URLs from a cancelled service.

### Navigation

Build the sidebar from `super-salvage/super_nav.json` (12 sections) resolved
through `slug_map.json`. Add `Causes` as a 13th section — it is live at
`/donation-agents` but was never in the live sidebar.

Sidebar is **global chrome on every page including the homepage**, as on the
live site. Do not tie sidebar visibility to page membership.

### Images

Notion file URLs are **signed S3 links that expire in about an hour**. They
cannot be embedded in cached HTML. Options:

- Proxy through an API route that re-signs on demand (simplest, always fresh)
- Download at build time into `public/` (fast, but stale until rebuild)

A proxy with a CDN cache in front is probably right. ~100 content images.

### Freshness

- **ISR** with a modest `revalidate` (e.g. 300–900s) gives automatic pickup.
- **On-demand revalidation endpoint** so a Notion automation or a manual button
  can push an immediate refresh.
- Notion's native webhook/automation support depends on workspace plan —
  **verify what the `giveth` workspace actually has** before designing around it.
  ISR alone satisfies requirement 4; webhooks are the nicer version.

### Hosting

Vercel is the path of least resistance for Next.js + ISR. Cloudflare Pages works
but ISR support differs. Either is €0 at this scale — the point is to stop
paying for the hosted service.

---

## 6. Routes: what must work

**45 URLs must resolve.** They are listed in `scripts/slug_map.json` under
`by_title`. This is the acceptance criterion for requirement 3.

`super-salvage/slugs.txt` has **131** URLs from the live sitemap, but **most are
stale** — the live sitemap lists pages long since deleted from Notion.
`/angelvault`, `/bridgesecurity`, `/crypto` and ~85 others return an empty
document on the live site. Per the maintainers: **absence is intentional, do not
resurrect them.** Do not treat the sitemap as a requirements list.

Nested routes that must work: `/devouch/what-is-devouch`,
`/devouch/integrating-devouch`, `/what-is-giveth/the-giveconomy`,
`/what-is-giveth/donors-project-guides`,
`/what-is-giveth/the-giveconomy/archived-staking-pools`,
`/donation-agents/{how-it-works,creating-a-cause,for-project-owners}`.

---

## 7. Design spec

Full detail in `super-salvage/DESIGN-TOKENS.md`. Essentials:

**Type**
- Headings: **TeX Gyre Adventor** — self-host from `static/fonts/`.
  Only the **Bold** cut was ever uploaded to the hosted site, declared at
  `font-weight: 400`.
  Every heading on the live site is therefore the Bold face at normal weight.
  **Preserve that mis-weighting** or headings will not match.
- Body: **Red Hat Display** (Google Font, already self-hosted in `static/fonts/`).

**Colour** — light / dark

| Token | Light | Dark |
|---|---|---|
| Background | `#ffffff` | `#1b1657` |
| Text | `#1d1e1f` | `#EDEEEE` |
| Brand / border | `#5326ec` | `#8668fc` |
| Card hover | `#f5f3fe` | `#3c14c4` |
| Footer bg | `#f7f7f9` | `#5326ec` |

**Layout**: content max-width `1300px`, sidebar `241px`, navbar height `56px`,
corner radius `20px`, page padding `96px` (24px mobile), cover height `35vh`.

**The hosted dashboard's Custom Code is empty** (`"css": ""`, `"styles": ""`).
None of the design is hand-written CSS — it is all hosted theme settings plus
Notion block rendering. So there is no stylesheet to port; the tokens above plus
faithful block rendering *is* the design.

**Block usage**, measured by crawling all 132 live pages — build for this:

| Block | Count |
|---|---|
| image | 100 |
| bulleted list | 95 |
| **collection (card grid)** | **44** |
| numbered list | 23 |
| table | 18 |
| code | 13 |
| divider | 12 |
| quote | 7 |
| toggle | 4 |
| video | 4 |
| column list | 1 |

Callouts: 21 across 12 pages — blue (12), gray (5), yellow (3), default (1).
42 pages have an emoji icon beside the title; 10 have a cover image.

---

## 8. Implementation steps

1. **Scaffold** a Next.js app. Decide in-place vs. fresh repo — see §9.
2. **Prove the render path first.** Fetch one content-heavy page
   (`GIVbacks`, `1703ab28-d48c-80f6-b6f5-d40559745e0e` — callouts, images,
   tables) and one section page (`The GIVeconomy`,
   `1823ab28-d48c-807d-b3dd-cf3c2ec457da` — inline database card grid) and
   confirm both render acceptably **before building anything else.** If the card
   grids do not work, the architecture choice needs revisiting, and it is much
   cheaper to learn that on day one.
3. **Routing** — `[...slug]` catch-all, resolved via `slug_map.json` +
   slugify fallback. Verify all 45 URLs from §6 return 200.
4. **Design tokens** — fonts, colours, both themes, layout measurements.
5. **Chrome** — sidebar from `super_nav.json` (global, every page), navbar and
   footer from `super_nav.json` / `super_footer.json`.
6. **Homepage** — cover banner, title, tagline, 4-card grid. Assets already in
   `static/img/home/`.
7. **Images** — proxy or build-time cache.
8. **Freshness** — ISR + revalidation endpoint.
9. **Verify against the live site** (§10).
10. **Cut over DNS**, then cancel the hosted service — in that order, and only
    after §10 passes.

---

## 9. What to do with this repo

The current `master`/`feat/port-super-design` state is a **Docusaurus site with
markdown exported from Notion**. It works and builds, but it is a *snapshot*
pipeline, not a renderer: new Notion pages land nowhere, and edits need a script
run plus a commit. That is why it is being replaced.

**Keep:**
- `super-salvage/` — irreplaceable, see §2
- `scripts/slug_map.json` — irreplaceable, see §5
- `static/fonts/TeXGyreAdventor-Bold.otf`
- `static/img/home/` — homepage cover + 4 card banners
- `scripts/notion_export.py` — **as reference**, not as production code. Its
  `walk_tree`, block coverage and rate-limit handling encode real lessons.

**Discard:** `docs/`, `sidebarsNotion.js`, `docusaurus.config.js`,
`babel.config.js`, `src/`, `build/`, `export-report.json`, and
`static/img/` apart from `home/` (**174MB**, almost entirely orphaned images
from the old markdown site).

Suggest building the new app in a **fresh repo or a clean branch**, copying the
keep-list across. Untangling Docusaurus in place is not worth it.

---

## 10. Acceptance criteria

1. All **45 URLs** from `slug_map.json` return 200.
2. Side-by-side visual comparison against the live site for at least: homepage,
   `/givbacks` (callouts + images + tables), `/what-is-giveth` (card grid),
   `/faq`, one `/donation-agents/*` page. `super-salvage/pages-html.tar.gz` has
   the live HTML if the hosted site is already gone.
3. Editing a Notion page shows up on the site without a deploy.
4. Creating a Notion page produces a working URL without a code change.
5. Dark mode works — the live site had one.
6. Search works, or is consciously dropped. **Note:** the old Docusaurus Algolia
   index (`appId: BH4D9OD16A`, `indexName: giveth`) is indexed against the *old*
   markdown URLs and is stale. Either re-crawl or use something else.

---

## 11. Known issues, in the Notion content itself

Not renderer bugs — these need fixing **in Notion** by someone who knows the
intended targets:

- `https://www.notion.so/giveth/api.md` — no page ID at all (on *What is DeVouch*)
- `https://giveth.notion.site/Giveth-Quadratic-Funding-3478aa27eb094a699f9ddd6a8b611027`
- `https://www.notion.so/giveth/Regen-Farm-Parameters-a5b474e75f334d03ad1c1c43f5d923d4`
- `/934200f174824da78ad4072048db3040`
- A `./angelVault.md` link in *GIVfarm (deprecated)*, left over from an earlier
  import
- Some pages contain literal markdown markers typed by hand — text reading
  `**like this**` that is *also* bold-annotated

---

## 12. Gotchas

- **Rate limit** ~3 req/s on the official API. Pace requests; retry 429 with
  backoff. A full 45-page walk takes several minutes.
- **File URLs expire** in ~1 hour.
- **Empty downloads**: a failed image fetch can write a 0-byte file. Treat
  zero-byte as failure or the failure caches permanently.
- **`child_database` must be walked**, not just `child_page` (§4).
- **Notion page IDs in the salvaged nav config are stale** — match by title
  (§5).
- **Verify visually.** This was built across a long session with no browser
  available, and two regressions (a stale i18n override silently replacing the
  navbar title, and a missing sidebar on the homepage) got through because the
  build was green and nobody had looked at the page. A clean build is not
  evidence that it looks right.
