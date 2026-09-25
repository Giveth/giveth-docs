/*
 * URL rules. Build-time only: the app reads the site map this produces and does
 * no slug resolution of its own.
 */
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))

/**
 * Super's slugs were hand-set in its dashboard and are not derivable from page
 * titles -- "Making a Donation" was served at /projectdonating. slug_map.json is
 * the recovered override table, keyed by title because the Notion page ids Super
 * stored are all stale.
 */
const slugMap = JSON.parse(
  await readFile(join(here, '..', 'slug_map.json'), 'utf8')
)

const OVERRIDES = Object.fromEntries(
  Object.entries(slugMap.by_title).map(([title, slug]) => [
    title.trim().toLowerCase(),
    slug,
  ])
)

/** Fallback for pages created in Notion after Super was cancelled. */
export function slugify(title) {
  const slug = title
    .trim()
    .toLowerCase()
    .replace(/['‘’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'page'
}

/**
 * A page's url path: the hand-set Super slug when there is one, otherwise a
 * slugified title nested under its parent. A page created in Notion therefore
 * gets a working URL with no code change.
 */
export function resolveSlug(title, parentSlug) {
  const override = OVERRIDES[title.trim().toLowerCase()]
  if (override) return override
  const base = parentSlug === '/' ? '' : parentSlug
  return `${base}/${slugify(title)}`
}

export const SLUG_OVERRIDE_COUNT = Object.keys(OVERRIDES).length
