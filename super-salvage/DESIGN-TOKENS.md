# Super design tokens — docs.giveth.io

Extracted from the live Super site on 2026-09-09 (while the subscription is still active).
Source: inline `<style>` blocks in the served HTML, not the CSS files — which is why
they are not visible in the Super dashboard and did not survive the wget scrape.

Light values are on bare `html`; dark values are scoped to `html.theme-dark`.

## Typography

| Role | Font | Notes |
|---|---|---|
| Headings (`--primary-font`) | **TeX Gyre Adventor** | Custom upload, hosted on Super. Salvaged to `fonts/`. |
| Body (`--secondary-font`) | **Red Hat Display** | Already self-hosted in `static/fonts/`. |

`--primary-font` drives `.notion-heading` (h1–h3), page titles, quotes, navbar/sidebar logo text.
`--secondary-font` is set on `body`, so it covers all body copy.

**TeX Gyre Adventor licensing: GUST Font License** (free/libre, an LPPL variant) — Giveth can
self-host it legally. The name table reads:

> Copyright 2006, 2009 for TeX Gyre extensions by B. Jackowski and J.M. Nowacki
> (on behalf of TeX users groups). Released under the GUST Font License.

**Gotcha:** Super uploaded only one cut, and it is the **Bold** face (`Full name: TeX Gyre Adventor Bold`)
declared as `font-weight: 400`. Every heading on the live site is therefore the Bold cut rendered at
weight 400. To match the look, the `@font-face` must keep that same mis-weighting.

### Type scale
```
--title-size:     3.5rem
--heading-size:   0.7rem      /* base multiplier */
--heading1-size:  calc(var(--heading-size) * 1.875)
--heading2-size:  calc(var(--heading-size) * 1.5)
--heading3-size:  calc(var(--heading-size) * 1.25)
--heading-weight: 600
--text-weight:    400
```

## Colour

The brand purple is **`#5326ec`**. It is the border, card and hover colour throughout.

| Token | Light | Dark |
|---|---|---|
| `--color-bg-default` | `#ffffff` | `#1b1657` |
| `--color-text-default` | `#1d1e1f` | `#EDEEEE` |
| `--color-text-default-light` | `#5326ec` | `#8668fc` |
| `--color-border-default` | `#5326ec` | `#8668fc` |
| `--color-card-bg` | `#ffffff` | `#5326ec` |
| `--color-card-bg-hover` | `#f5f3fe` | `#3c14c4` |
| `--color-ui-hover-bg` | `#f5f3fe` | `#5326ec` |
| `--navbar-background-color` | `#ffffff` | `#1b1657` |
| `--navbar-text-color` | `#1d1e1f` | `#EDEEEE` |
| `--sidebar-background-color` | `#ffffff` | `#1b1657` |
| `--sidebar-background-color-hover` | `#f5f3fe` | `#5326ec` |
| `--sidebar-border-color` | `#5326ec` | — |
| `--footer-background-color` | `#f7f7f9` | `#5326ec` |
| `--scrollbar-thumb-color` | `#d7ddea` | `#1b1657` |

Palette summary: `#5326ec` purple · `#1b1657` deep indigo (dark bg) · `#8668fc` light purple
(dark-mode accent) · `#f5f3fe` purple tint (hover) · `#3c14c4` pressed purple · `#f7f7f9` footer grey.

## Layout

```
--layout-max-width:      1300px
--sidebar-width:         241px
--navbar-height:         56px
--border-radii-layout:   20px     /* the generous rounding */
--border-thickness-layout: 1px
--padding-layout:        0.6rem
--padding-left/right:    calc(env(safe-area-inset-*) + 96px)   /* 24px mobile */
--column-spacing:        46px
--header-cover-height:   35vh
--navbar-button-border-radii: 50px  /* pill buttons */
--collection-card-cover-height-large: 200px
--collection-card-gap:   10px
```

## Assets salvaged

- `fonts/tex-gyre-adventor-400.otf` — the custom heading font (dies with the subscription)
- `logo/navbar-logo-{light,dark}.png` — navbar logo, both themes
- `logo/logo-{light,dark}.png` — footer logo, both themes
- `css/` — the four served stylesheets
- `super_nav.json` — full sidebar + navbar tree (see below)
- `slugs.txt` / `sitemap.xml` — 132 live URLs, for redirects
- `home.html` — raw served homepage

Favicon still live at:
`https://assets.super.so/0aa1e97d-ce91-4e39-ba8c-7485e18db5c0/uploads/favicon/2297dfb9-192b-4b3c-a05c-4f49bf6fbac1.png`

## Site structure

`super_nav.json` holds the authoritative navigation, recovered from the streamed RSC payload
(`self.__next_f.push`). This is what the scrape could not capture: Super renders the sidebar
client-side, so the static HTML contains the labels as bare text with no hrefs.

- **Sidebar:** 12 sections, 36 pages, each with a Lucide icon name
- **Navbar:** 7 top-level links
- **Super site ID:** `0aa1e97d-ce91-4e39-ba8c-7485e18db5c0`

---

## Where the design actually lives

Super's dashboard Custom Code is **empty**. The served RSC payload contains:

```json
"code": { "global": [], "head": [], "body": [], "style": [], "css": "" },
"styles": ""
```

So none of the design is hand-written CSS. It is entirely (a) Super's theme
settings, which are the variables documented above, and (b) how Super renders
Notion blocks. That is why the port is a matter of restyling Docusaurus
components rather than copying a stylesheet across.

## Block usage across all 132 pages

Measured from a full crawl of the live site:

| Block | Count | Notes |
|---|---|---|
| `notion-image` | 100 | |
| `notion-bulleted-list` | 95 | |
| `notion-collection` | 44 | Linked card grids |
| `notion-numbered-list` | 23 | |
| `notion-table` | 18 | |
| `notion-code` | 13 | |
| `notion-divider` | 12 | |
| `notion-quote` | 7 | |
| `notion-toggle` | 4 | |
| `notion-video` | 4 | |
| `notion-column-list` | 1 | |

Page chrome:

- **10 pages** have a cover image
- **42 pages** have a page icon (an emoji beside the title)
- **12 pages** use callouts — 21 callouts total

Callout colour variants actually used: `bg-blue-light` (12), `bg-gray-light` (5),
`bg-yellow-light` (3), `color-default` (1). The repo's own admonition usage is
similar: `:::info` (14), `:::note` (2), `:::caution` (2), `:::warning` (1),
`:::success` (1).

## Content images

**111 unique images**, all salvaged into `content-images/`, named by their
Cloudflare Images UUID. `image-manifest.json` maps each live page path to the
image UUIDs it uses and records whether the page had a cover.

Note that Super serves two variants per image — `/public` and
`/w=1920,quality=90,fit=scale-down` — and not every image has both. The
`w=1920` variant was preferred where available; `canonical_images.tsv` records
the URL each file came from.

`pages-html.tar.gz` holds the raw HTML of all 132 crawled pages.
