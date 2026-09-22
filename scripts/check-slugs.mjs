// Sanity-check the slug rules: known titles keep Super's hand-set URL, and a
// title that Super never had falls through to slugify under its parent.
import { readFile } from 'node:fs/promises'
const map = JSON.parse(await readFile('scripts/slug_map.json', 'utf8'))
const overrides = Object.fromEntries(
  Object.entries(map.by_title).map(([t, s]) => [t.trim().toLowerCase(), s])
)
const slugify = (t) => t.trim().toLowerCase().replace(/['‘’]/g,'')
  .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'page'
const resolve = (title, parent) =>
  overrides[title.trim().toLowerCase()] ?? `${parent === '/' ? '' : parent}/${slugify(title)}`

const cases = [
  ['Making a Donation', '/what-is-giveth/donors-project-guides', '/projectdonating'],
  ['Archived Staking Pools ', '/what-is-giveth/the-giveconomy', '/what-is-giveth/the-giveconomy/archived-staking-pools'],
  ['FAQs', '/what-is-giveth', '/faq'],
  ['A Brand New Page', '/what-is-giveth', '/what-is-giveth/a-brand-new-page'],
  ['GIVpower 2.0 & Beyond!', '/', '/givpower-2-0-beyond'],
]
let bad = 0
for (const [title, parent, expected] of cases) {
  const got = resolve(title, parent)
  const ok = got === expected
  if (!ok) bad++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${JSON.stringify(title).padEnd(28)} -> ${got}`)
}
console.log(bad ? `\n${bad} FAILED` : '\nall slug rules behave')
process.exit(bad ? 1 : 0)
