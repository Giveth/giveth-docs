#!/usr/bin/env python3
"""
Export the Giveth Docs Notion tree to Docusaurus markdown.

Notion is the source of truth for docs.giveth.io — the Super frontend was only
a renderer. This walks the page tree from the root, converts blocks to
markdown, downloads images, and writes a sidebar definition.

Usage:
    python3 scripts/notion_export.py --check         # verify access, walk nothing
    python3 scripts/notion_export.py --tree          # print the page tree only
    python3 scripts/notion_export.py --out build-notion
    python3 scripts/notion_export.py --page <id>     # single page, for debugging

Requires NOTION_API_SECRET in .env (or the environment). Standard library only.

Notes on Notion's API that shaped this script:
  * Rate limit is ~3 requests/second averaged; RATE_LIMIT_SLEEP paces calls and
    429s are retried with backoff.
  * File URLs are signed S3 links valid for about an hour, so images must be
    downloaded during the run rather than referenced.
  * Block children are paginated at 100 per request.
"""

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

NOTION_VERSION = "2022-06-28"
API = "https://api.notion.com/v1"
ROOT_PAGE_ID = "1703ab28-d48c-806f-883e-fb81cbf40c1d"  # Giveth Docs
RATE_LIMIT_SLEEP = 0.34  # ~3 req/s
MAX_RETRIES = 5


# --------------------------------------------------------------------------- #
# HTTP
# --------------------------------------------------------------------------- #

def load_env(path=".env"):
    """Read KEY=VALUE lines from .env without overriding the real environment."""
    p = Path(path)
    if not p.exists():
        return
    for line in p.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def token():
    t = os.environ.get("NOTION_API_SECRET") or os.environ.get("NOTION_TOKEN")
    if not t:
        sys.exit("NOTION_API_SECRET is not set (put it in .env)")
    return t


def api(path, method="GET", body=None):
    """Call the Notion API, pacing requests and retrying on 429/5xx."""
    url = path if path.startswith("http") else f"{API}{path}"
    data = json.dumps(body).encode() if body is not None else None
    for attempt in range(MAX_RETRIES):
        req = urllib.request.Request(url, data=data, method=method)
        req.add_header("Authorization", f"Bearer {token()}")
        req.add_header("Notion-Version", NOTION_VERSION)
        req.add_header("Content-Type", "application/json")
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                time.sleep(RATE_LIMIT_SLEEP)
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            payload = e.read().decode(errors="replace")
            if e.code in (429, 500, 502, 503, 504) and attempt < MAX_RETRIES - 1:
                wait = float(e.headers.get("Retry-After", 2 ** attempt))
                print(f"    [{e.code}] retrying in {wait:.0f}s", file=sys.stderr)
                time.sleep(wait)
                continue
            raise RuntimeError(f"{e.code} {url}\n{payload}") from None
        except urllib.error.URLError as e:
            if attempt < MAX_RETRIES - 1:
                time.sleep(2 ** attempt)
                continue
            raise RuntimeError(f"network error for {url}: {e}") from None
    raise RuntimeError(f"gave up on {url}")


def paged(path, body=None):
    """Yield every result from a paginated endpoint."""
    cursor = None
    while True:
        if body is None:
            sep = "&" if "?" in path else "?"
            url = path + (f"{sep}start_cursor={cursor}" if cursor else "")
            d = api(url)
        else:
            d = api(path, "POST", {**body, **({"start_cursor": cursor} if cursor else {})})
        yield from d.get("results", [])
        if not d.get("has_more"):
            return
        cursor = d.get("next_cursor")


# --------------------------------------------------------------------------- #
# Rich text -> markdown
# --------------------------------------------------------------------------- #

def esc(s):
    """Escape MDX-hostile characters in plain prose.

    Asterisks are escaped because some Notion pages contain literal markdown
    markers typed by hand — e.g. text reading "**donate at least 5 USD**" that
    is *also* bold-annotated. Without escaping, the emitted markdown ends up as
    "****donate at least 5 USD****", which renders wrong. Notion displays those
    asterisks literally, so escaping is also the faithful reading.
    """
    return (s.replace("<", "&lt;")
             .replace("{", "&#123;")
             .replace("}", "&#125;")
             .replace("*", "\\*"))


# Set once per run by main(); consulted by rich() to turn Notion page links into
# local Docusaurus routes. A module-level hook keeps rich() callable everywhere.
_RESOLVER = None

NOTION_ID_RE = re.compile(r"([0-9a-f]{32})(?:[?#].*)?$")


def resolve_href(href):
    """Rewrite a Notion-internal link to a local route where possible.

    Returns the original href unchanged for genuine external links. Links that
    point at Notion but carry no resolvable page id are recorded so they surface
    in the export report rather than shipping as dead notion.so URLs.
    """
    if not href or _RESOLVER is None:
        return href
    page_map, unresolved = _RESOLVER
    candidate = href.split("?")[0].rstrip("/")
    m = NOTION_ID_RE.search(candidate.replace("-", ""))
    if m:
        raw = m.group(1)
        dashed = f"{raw[0:8]}-{raw[8:12]}-{raw[12:16]}-{raw[16:20]}-{raw[20:32]}"
        hit = page_map.get(dashed)
        if hit:
            return hit["slug"]
    if "notion.so" in href or "notion.site" in href or href.startswith("/"):
        unresolved.add(href)
    return href


def rich(rt):
    out = []
    for t in rt or []:
        txt = t.get("plain_text", "")
        if not txt:
            continue
        a = t.get("annotations", {})
        if a.get("code"):
            # Inline code is literal; never escape inside it.
            body = f"`{txt}`"
        else:
            body = esc(txt)
            if a.get("bold"):
                body = f"**{body}**"
            if a.get("italic"):
                body = f"_{body}_"
            if a.get("strikethrough"):
                body = f"~~{body}~~"
        href = resolve_href(t.get("href"))
        if href:
            body = f"[{body}]({href})"
        out.append(body)
    return "".join(out)


def plain(rt):
    return "".join(t.get("plain_text", "") for t in rt or [])


def slugify(s):
    s = re.sub(r"[^\w\s-]", "", (s or "").lower()).strip()
    return re.sub(r"[\s_-]+", "-", s) or "untitled"


_SLUG_MAP = None


def super_slug(title):
    """The URL the Super site served for this page title, if any.

    Keeping these means the rebuilt site holds on to every indexed URL instead
    of redirecting away from it. Super's own pageIds are stale, so the mapping
    is by title — see scripts/slug_map.json.
    """
    global _SLUG_MAP
    if _SLUG_MAP is None:
        f = Path(__file__).parent / "slug_map.json"
        try:
            _SLUG_MAP = json.loads(f.read_text(encoding="utf-8"))["by_title"]
        except Exception:  # noqa: BLE001 - the map is an optimisation, not a need
            _SLUG_MAP = {}
    if title in _SLUG_MAP:
        return _SLUG_MAP[title]
    lowered = {k.lower(): v for k, v in _SLUG_MAP.items()}
    return lowered.get((title or "").strip().lower())


# --------------------------------------------------------------------------- #
# Assets
# --------------------------------------------------------------------------- #

def file_url(node):
    """Notion files are either uploaded ('file', signed+expiring) or external."""
    if not node:
        return None
    t = node.get("type")
    if t in ("file", "file_upload"):
        return (node.get(t) or {}).get("url")
    if t == "external":
        return (node.get("external") or {}).get("url")
    return None


def embed_url(url):
    """Turn a YouTube/Vimeo watch URL into its embeddable form."""
    m = re.search(r"(?:youtube\.com/watch\?v=|youtu\.be/|youtube\.com/embed/)([\w-]{6,})", url)
    if m:
        return f"https://www.youtube.com/embed/{m.group(1)}"
    m = re.search(r"vimeo\.com/(?:video/)?(\d+)", url)
    if m:
        return f"https://player.vimeo.com/video/{m.group(1)}"
    return None


def download(url, dest_dir, stem):
    """Fetch an asset now — signed Notion URLs expire in about an hour."""
    if not url:
        return None
    dest_dir.mkdir(parents=True, exist_ok=True)
    ext = Path(urllib.parse.urlparse(url).path).suffix.lower()
    if ext not in (".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".mp4", ".pdf"):
        ext = ".png"
    dest = dest_dir / f"{stem}{ext}"
    # Treat a zero-byte file as absent: an earlier run may have written an empty
    # response, and caching that would make the failure permanent.
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "giveth-docs-export"})
        with urllib.request.urlopen(req, timeout=120) as r:
            data = r.read()
        if not data:
            raise ValueError("empty response")
        dest.write_bytes(data)
        return dest
    except Exception as e:  # noqa: BLE001 - a missing asset must not kill the run
        print(f"    ! asset failed {stem}: {e}", file=sys.stderr)
        return None


# --------------------------------------------------------------------------- #
# Blocks -> markdown
# --------------------------------------------------------------------------- #

# Notion callout colours -> Docusaurus admonition types. Mirrors the mapping in
# src/css/notion-blocks.css so exported content matches the ported styling.
CALLOUT_MAP = {
    "blue": "info", "blue_background": "info",
    "gray": "note", "gray_background": "note", "default": "note",
    "brown": "note", "brown_background": "note",
    "yellow": "caution", "yellow_background": "caution",
    "orange": "caution", "orange_background": "caution",
    "green": "tip", "green_background": "tip",
    "red": "danger", "red_background": "danger",
    "pink": "danger", "pink_background": "danger",
    "purple": "info", "purple_background": "info",
}


class Renderer:
    def __init__(self, ctx):
        self.ctx = ctx  # dict: img_dir, img_rel, page_map, counters

    def children(self, block_id):
        return list(paged(f"/blocks/{block_id}/children?page_size=100"))

    def render(self, blocks, depth=0):
        """Render a sibling list of blocks to markdown lines."""
        out = []
        numbering = 0
        for b in blocks:
            t = b.get("type")
            if t == "numbered_list_item":
                numbering += 1
            else:
                numbering = 0
            out.extend(self.block(b, depth, numbering))
        return out

    def block(self, b, depth, number):
        t = b.get("type")
        d = b.get(t, {}) or {}
        pad = "  " * depth
        has_kids = b.get("has_children")

        if t == "paragraph":
            txt = rich(d.get("rich_text"))
            return [pad + txt, ""] if txt else [""]

        if t in ("heading_1", "heading_2", "heading_3"):
            lvl = {"heading_1": "##", "heading_2": "###", "heading_3": "####"}[t]
            # h1 is reserved for the page title in Docusaurus, so shift down one.
            txt = rich(d.get("rich_text"))
            if d.get("is_toggleable") and has_kids:
                inner = self.render(self.children(b["id"]), 0)
                return ["<details>", f"<summary>{txt}</summary>", "", *inner, "</details>", ""]
            return [f"{lvl} {txt}", ""]

        if t == "bulleted_list_item":
            lines = [f"{pad}- {rich(d.get('rich_text'))}"]
            if has_kids:
                lines += self.render(self.children(b["id"]), depth + 1)
            return lines + ([""] if depth == 0 else [])

        if t == "numbered_list_item":
            lines = [f"{pad}{number}. {rich(d.get('rich_text'))}"]
            if has_kids:
                lines += self.render(self.children(b["id"]), depth + 1)
            return lines + ([""] if depth == 0 else [])

        if t == "to_do":
            mark = "x" if d.get("checked") else " "
            lines = [f"{pad}- [{mark}] {rich(d.get('rich_text'))}"]
            if has_kids:
                lines += self.render(self.children(b["id"]), depth + 1)
            return lines + ([""] if depth == 0 else [])

        if t == "callout":
            kind = CALLOUT_MAP.get(d.get("color", "default"), "note")
            icon = (d.get("icon") or {}).get("emoji", "")
            body = [rich(d.get("rich_text"))]
            if has_kids:
                body += self.render(self.children(b["id"]), 0)
            body = [ln for ln in body if ln is not None]
            head = f":::{kind}"
            # Keep the Notion emoji as the admonition title so it is not lost.
            if icon:
                head = f":::{kind} {icon}"
            return [head, *body, ":::", ""]

        if t == "quote":
            lines = [f"> {rich(d.get('rich_text'))}"]
            if has_kids:
                for ln in self.render(self.children(b["id"]), 0):
                    lines.append(f"> {ln}" if ln else ">")
            return lines + [""]

        if t == "code":
            lang = (d.get("language") or "text").replace(" ", "")
            lang = {"plain text": "text", "plaintext": "text"}.get(lang, lang)
            body = plain(d.get("rich_text"))
            cap = plain(d.get("caption"))
            fence = ["```" + lang, body, "```", ""]
            return ([f"*{esc(cap)}*", ""] + fence) if cap else fence

        if t == "divider":
            return ["---", ""]

        if t in ("image", "video", "file", "pdf"):
            url = file_url(d)
            cap = plain(d.get("caption"))
            if t == "image":
                self.ctx["n_img"] += 1
                stem = f"{self.ctx['slug']}-{self.ctx['n_img']:02d}"
                got = download(url, self.ctx["img_dir"], stem)
                if got:
                    rel = f"{self.ctx['img_rel']}/{got.name}"
                    return [f"![{esc(cap)}]({rel})", ""]
                return [f"![{esc(cap)}]({url})", ""] if url else [""]
            if t == "video" and url:
                embed = embed_url(url)
                if embed:
                    # A raw iframe needs no import, unlike a React component.
                    return [f'<iframe width="100%" height="420" src="{embed}" '
                            f'title="{esc(cap) or "Video"}" frameBorder="0" '
                            f'allow="accelerometer; autoplay; clipboard-write; '
                            f'encrypted-media; gyroscope; picture-in-picture" '
                            f'allowFullScreen></iframe>', ""]
                return [f"[{esc(cap) or 'Video'}]({url})", ""]
            if url:
                return [f"[{esc(cap) or 'Download'}]({url})", ""]
            return [""]

        if t in ("bookmark", "embed", "link_preview"):
            url = d.get("url", "")
            cap = plain(d.get("caption")) or url
            return [f"[{esc(cap)}]({url})", ""] if url else [""]

        if t == "table":
            return self.table(b, d)

        if t == "column_list":
            # Flatten columns; Docusaurus has no column primitive in markdown.
            out = []
            for col in self.children(b["id"]):
                if col.get("has_children"):
                    out += self.render(self.children(col["id"]), 0)
            return out

        if t == "toggle":
            summary = rich(d.get("rich_text"))
            inner = self.render(self.children(b["id"]), 0) if has_kids else []
            return ["<details>", f"<summary>{summary}</summary>", "", *inner, "</details>", ""]

        if t == "table_of_contents":
            return []  # Docusaurus renders its own TOC

        if t in ("child_page", "child_database"):
            return []  # handled by the tree walk

        if t == "link_to_page":
            target = d.get("page_id") or d.get("database_id")
            ref = self.ctx["page_map"].get(target)
            if ref:
                return [f"- [{ref['title']}]({ref['slug']})", ""]
            return []

        if t in ("breadcrumb", "unsupported", "template", "synced_block"):
            if t == "synced_block" and has_kids:
                return self.render(self.children(b["id"]), depth)
            return []

        if t == "equation":
            return ["$$", d.get("expression", ""), "$$", ""]

        # Anything unrecognised: keep the text so nothing silently vanishes.
        txt = rich(d.get("rich_text"))
        self.ctx["unknown"].add(t)
        return [txt, ""] if txt else []

    def table(self, b, d):
        rows = self.children(b["id"])
        if not rows:
            return []
        width = d.get("table_width", 0)
        has_header = d.get("has_column_header", False)
        out = []
        for i, r in enumerate(rows):
            cells = (r.get("table_row") or {}).get("cells", [])
            vals = [rich(c).replace("|", "\\|") or " " for c in cells]
            vals += [" "] * (width - len(vals))
            out.append("| " + " | ".join(vals) + " |")
            if i == 0:
                out.append("| " + " | ".join(["---"] * max(width, len(vals))) + " |")
        if not has_header:
            # Synthesise a blank header row so markdown renders the table.
            out.insert(0, "| " + " | ".join([" "] * width) + " |")
            out.insert(1, "| " + " | ".join(["---"] * width) + " |")
        return out + [""]


# --------------------------------------------------------------------------- #
# Tree walk
# --------------------------------------------------------------------------- #

def page_title(page):
    for v in (page.get("properties") or {}).values():
        if v.get("type") == "title":
            return plain(v.get("title"))
    return plain((page.get("title") or []))


def walk_tree(root_id, depth=0, seen=None, limit_depth=6):
    """Depth-first walk of the page tree.

    The Giveth docs are not a plain nest of sub-pages: the root holds an inline
    database whose entries are the top-level sections, and those pages in turn
    mix child_page blocks with further inline databases. Both have to be
    followed or most of the site is invisible.
    """
    seen = seen if seen is not None else set()
    if root_id in seen or depth > limit_depth:
        return []
    seen.add(root_id)
    kids = []
    for b in paged(f"/blocks/{root_id}/children?page_size=100"):
        t = b.get("type")
        if t == "child_page":
            kids.append({
                "id": b["id"],
                "title": (b.get("child_page") or {}).get("title", "Untitled"),
                "children": walk_tree(b["id"], depth + 1, seen, limit_depth),
            })
        elif t == "child_database":
            for row in paged(f"/databases/{b['id']}/query", body={"page_size": 100}):
                if row["id"] in seen:
                    continue
                kids.append({
                    "id": row["id"],
                    "title": page_title(row) or "Untitled",
                    "children": walk_tree(row["id"], depth + 1, seen, limit_depth),
                })
    return kids


def print_tree(nodes, indent=0):
    n = 0
    for x in nodes:
        print("  " * indent + f"- {x['title']}  ({x['id']})")
        n += 1 + print_tree(x["children"], indent + 1)
    return n


# --------------------------------------------------------------------------- #
# Export
# --------------------------------------------------------------------------- #

def flatten(nodes, out=None, parent=None):
    out = out if out is not None else []
    for x in nodes:
        out.append({"id": x["id"], "title": x["title"], "parent": parent,
                    "has_children": bool(x["children"])})
        flatten(x["children"], out, x["id"])
    return out


def export_page(node, outdir, page_map, unknown):
    slug = slugify(node["title"])
    page = api(f"/pages/{node['id']}")
    icon = (page.get("icon") or {}).get("emoji")
    cover_url = file_url(page.get("cover"))

    img_rel = f"/img/notion/{slug}"
    ctx = {
        "slug": slug,
        "img_dir": outdir / "static" / "img" / "notion" / slug,
        "img_rel": img_rel,
        "page_map": page_map,
        "n_img": 0,
        "unknown": unknown,
    }
    r = Renderer(ctx)
    body = r.render(r.children(node["id"]))

    cover_rel = None
    if cover_url:
        got = download(cover_url, ctx["img_dir"], f"{slug}-cover")
        if got:
            cover_rel = f"{img_rel}/{got.name}"

    route = super_slug(node["title"])
    fm = {
        "id": slug,
        "title": node["title"],
        "sidebar_label": node["title"],
        "notion_page_id": node["id"],
    }
    if route:
        fm["slug"] = route
    if cover_rel:
        fm["image"] = cover_rel
    if icon:
        fm["sidebar_label"] = f"{icon} {node['title']}"

    lines = ["---"]
    for k, v in fm.items():
        v = str(v).replace('"', '\\"')
        lines.append(f'{k}: "{v}"')
    lines.append("---")
    lines.append("")
    if cover_rel:
        lines += [f"![]({cover_rel})", ""]
    lines += body

    kids = node.get("children_index") or []
    if kids:
        # On Super these pages rendered as a grid of cards for their children,
        # because the page body is an inline database rather than prose, so the
        # exported markdown is nearly empty. DocCardList would be the natural
        # equivalent but it only works on pages that are a sidebar category
        # index, and these are not, so link the children explicitly.
        lines += [""]
        for k in kids:
            bullet = f"- [{k['title']}]({k['slug']})"
            lines.append(f"{bullet}")
        lines += [""]

    docs = outdir / "docs"
    docs.mkdir(parents=True, exist_ok=True)
    path = docs / f"{slug}.md"
    text = "\n".join(lines)
    text = re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"
    path.write_text(text, encoding="utf-8")
    return {"slug": slug, "path": str(path), "title": node["title"],
            "icon": icon, "cover": bool(cover_rel), "images": ctx["n_img"]}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=ROOT_PAGE_ID)
    ap.add_argument("--out", default="build-notion")
    ap.add_argument("--check", action="store_true", help="verify access only")
    ap.add_argument("--tree", action="store_true", help="print the page tree only")
    ap.add_argument("--page", help="export a single page id")
    ap.add_argument("--limit", type=int, default=0, help="stop after N pages")
    args = ap.parse_args()

    load_env()

    me = api("/users/me")
    print(f"integration: {me.get('name')}  workspace: {me.get('bot', {}).get('workspace_name')}")

    if args.check:
        try:
            p = api(f"/pages/{args.root}")
            print(f"root page OK: {page_title(p)!r}")
            kids = list(paged(f"/blocks/{args.root}/children?page_size=100"))
            sub = [b for b in kids if b.get("type") == "child_page"]
            print(f"top-level blocks: {len(kids)}   child pages: {len(sub)}")
        except RuntimeError as e:
            print("NO ACCESS:", e)
            print("\nShare the page with the integration in Notion:")
            print("  page ••• -> Connections -> Add connections -> 'docs'")
            return 1
        return 0

    print(f"walking tree from {args.root} ...")
    tree = walk_tree(args.root)
    total = print_tree(tree) if args.tree else len(flatten(tree))
    if args.tree:
        print(f"\n{total} pages")
        return 0

    nodes = flatten(tree)
    if args.page:
        nodes = [n for n in nodes if n["id"].replace("-", "") == args.page.replace("-", "")]
        if not nodes:
            nodes = [{"id": args.page, "title": page_title(api(f"/pages/{args.page}")), "parent": None}]
    if args.limit:
        nodes = nodes[: args.limit]

    outdir = Path(args.out)
    page_map = {n["id"]: {"title": n["title"],
                          "slug": super_slug(n["title"]) or "/" + slugify(n["title"])}
                for n in nodes}
    unresolved = set()
    globals()["_RESOLVER"] = (page_map, unresolved)
    unknown = set()
    results = []
    by_parent = {}
    for n in nodes:
        if n.get("parent"):
            by_parent.setdefault(n["parent"], []).append(n)
    for n in nodes:
        n["children_index"] = [
            {"title": c["title"], "slug": page_map[c["id"]]["slug"]}
            for c in by_parent.get(n["id"], [])
        ]

    for i, n in enumerate(nodes, 1):
        print(f"[{i}/{len(nodes)}] {n['title']}")
        try:
            results.append(export_page(n, outdir, page_map, unknown))
        except Exception as e:  # noqa: BLE001 - one bad page must not stop the export
            print(f"    ! FAILED: {e}", file=sys.stderr)

    (outdir / "export-report.json").write_text(
        json.dumps({"pages": results,
                    "unknown_block_types": sorted(unknown),
                    "unresolved_notion_links": sorted(unresolved)}, indent=2),
        encoding="utf-8")
    print(f"\n{len(results)} pages -> {outdir}/docs")
    print(f"images: {sum(r['images'] for r in results)}   covers: {sum(r['cover'] for r in results)}")
    if unknown:
        print("unhandled block types:", ", ".join(sorted(unknown)))
    if unresolved:
        print(f"unresolved Notion links: {len(unresolved)} (see export-report.json)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
