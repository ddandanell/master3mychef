// Generates public/sitemap.xml from src/data/sitemap.ts.
// Run with: npx tsx scripts/generate-sitemap.ts
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { SITEMAP, type SitemapEntry } from '../src/data/sitemap'
import { REDIRECT_MAP } from '../src/data/redirects'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://mychef.id'
const today = new Date().toISOString().slice(0, 10)
const ogImage = `${SITE}/og-image.webp`
const logo = `${SITE}/logo.webp`

function imageXml(entry: SitemapEntry): string {
  if (entry.type === 'area' || entry.type === 'micro-area') {
    const areaName = entry.area ?? ''
    const slug = entry.slug ?? ''
    // Use per-area OG image if available, fall back to default
    const areaImage = `${SITE}/generated/og-private-chef-${slug}.webp`
    const defaultImage = `${SITE}/og-image.webp`
    return `
    <image:image>
      <image:loc>${areaImage}</image:loc>
      <image:title>Private chef in ${areaName}, Bali — myCHEF villa dining</image:title>
      <image:caption>myCHEF private chef preparing a villa dinner in ${areaName}, Bali</image:caption>
    </image:image>`
  }
  if (entry.path === '/') {
    return `
    <image:image>
      <image:loc>${ogImage}</image:loc>
      <image:title>myCHEF Indonesia — Private chef in Bali villa</image:title>
      <image:caption>Private chef plating a Mediterranean villa dinner in Bali</image:caption>
    </image:image>
    <image:image>
      <image:loc>${logo}</image:loc>
      <image:title>myCHEF Indonesia logo</image:title>
      <image:caption>myCHEF Indonesia — Bali private chef booking service</image:caption>
    </image:image>`
  }
  return ''
}

// Skip URLs that 301 elsewhere — they should not appear as canonical in the sitemap.
const indexable = SITEMAP.filter((e) => !REDIRECT_MAP[e.path])

const urls = indexable.map((e) => `
  <url>
    <loc>${SITE}${e.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>${imageXml(e)}
  </url>`).join('')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}
</urlset>
`

const out = join(__dirname, '..', 'public', 'sitemap.xml')
writeFileSync(out, xml)
console.log(`Wrote ${indexable.length} canonical URLs to ${out} (${SITEMAP.length - indexable.length} redirected and excluded)`)
