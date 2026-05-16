import { SITEMAP } from '../src/data/sitemap'
import { REDIRECT_MAP } from '../src/data/redirects'

console.log('--- ROUTE INTEGRITY CHECK ---')
const indexable = SITEMAP.filter(e => !REDIRECT_MAP[e.path])
const redirected = SITEMAP.filter(e => REDIRECT_MAP[e.path])

console.log(`Total Sitemap Entries: ${SITEMAP.length}`)
console.log(`Indexable (Canonical): ${indexable.length}`)
console.log(`Redirected (Eclipsed): ${redirected.length}`)

if (redirected.length > 0) {
  console.log('\nWARNING: The following canonical routes are being eclipsed by redirects:')
  redirected.forEach(e => console.log(`  - ${e.path} -> ${REDIRECT_MAP[e.path]}`))
}

const missingSlugs = SITEMAP.filter(e => e.type === 'landing' && !e.content)
if (missingSlugs.length > 0) {
  console.log('\nWARNING: The following landing pages are missing content:')
  missingSlugs.forEach(e => console.log(`  - ${e.path}`))
}

console.log('\n--- CHECK COMPLETE ---')
