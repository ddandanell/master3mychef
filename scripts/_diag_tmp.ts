import { SITEMAP } from '../src/data/sitemap'
import { REDIRECTS } from '../src/data/redirects'
const targets = ['/blog/yoga-retreat-chef-bali-meal-planning','/blog/wedding-rehearsal-dinner-bali','/blog/best-bali-villas-private-chef-kitchen']
const redirSet = new Set(REDIRECTS.map((r:any)=>r.from))
for (const t of targets) {
  const inSitemap = SITEMAP.filter((e:any)=>e.path===t)
  console.log(`${t}\n  in SITEMAP: ${inSitemap.length} | redirect-source: ${redirSet.has(t)}`)
  if (redirSet.has(t)) { const r:any = REDIRECTS.find((r:any)=>r.from===t); console.log(`  -> ${r.to}`) }
}
const blog = SITEMAP.filter((e:any)=>e.path?.startsWith('/blog/'))
console.log('\nTotal /blog/ in SITEMAP:', blog.length)
console.log('Blog paths that are redirect sources:', JSON.stringify(blog.filter((e:any)=>redirSet.has(e.path)).map((e:any)=>e.path),null,0))
