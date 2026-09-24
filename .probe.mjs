import { readFile } from 'node:fs/promises'
const sm = JSON.parse(await readFile('content/site-map.json','utf8'))
const pid = sm.slugToPage['/recurringdonation'].pageId
const rm = JSON.parse(await readFile(`content/pages/${pid}.json`,'utf8'))
const map = rm.recordMap ?? rm
console.log('signed_urls entries:', Object.keys(map.signed_urls||{}).length)
for (const [k,v] of Object.entries(map.signed_urls||{})) {
  console.log('\n key:', k.slice(0,110))
  console.log(' val:', String(v).slice(0,110))
  try {
    const r = await fetch(v, { method:'GET', headers:{range:'bytes=0-1023'} })
    console.log(' fetch:', r.status, r.headers.get('content-type'), r.headers.get('content-length'))
  } catch(e){ console.log(' fetch ERR', e.message) }
}
