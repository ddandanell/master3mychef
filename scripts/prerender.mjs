#!/usr/bin/env node
/**
 * Prerender script for myCHEF.id
 *
 * Generates static HTML for every route by running a headless browser against
 * the Vite production build, then saving the rendered DOM to dist/<route>/index.html.
 *
 * This fixes the SPA limitation where non-JS crawlers (Facebook, Twitter,
 * LinkedIn, most SEO audit tools) see the same homepage meta for every URL.
 *
 * Usage: npm run build && node scripts/prerender.mjs
 */

import { chromium } from 'playwright'
import { mkdir, writeFile, readFile, stat } from 'fs/promises'
import { createServer } from 'http'
import { fileURLToPath } from 'url'
import { dirname, join, extname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')

// ── Tiny static file server (SPA fallback) ───────────────────────────────────
const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

const server = createServer(async (req, res) => {
  let filePath = join(DIST, decodeURIComponent(req.url.split('?')[0]))
  try {
    const s = await stat(filePath)
    if (s.isDirectory()) filePath = join(filePath, 'index.html')
  } catch {
    // Not found — try adding .html, then fallback to SPA index.html
    try {
      await stat(filePath + '.html')
      filePath += '.html'
    } catch {
      filePath = join(DIST, 'index.html')
    }
  }

  try {
    const data = await readFile(filePath)
    const ext = extname(filePath)
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
    res.end(data)
  } catch {
    res.writeHead(404)
    res.end('Not found')
  }
})
const PORT = await new Promise((resolve, reject) => {
  const srv = server.listen(0, () => {
    const addr = srv.address()
    resolve(typeof addr === 'object' ? addr.port : 3456)
  })
  srv.on('error', reject)
})
console.log(`Static server listening on http://localhost:${PORT}`)

// ── Route list (must match App.tsx) ──────────────────────────────────────────
const ROUTES = [
  // Brand pages
  '/',
  '/fine-dining',
  '/villa-chef',
  '/events',
  '/partners',
  '/contact',
  '/services',
  '/staffing',
  '/partner-platform',
  '/corporate-events',

  // Legal
  '/privacy',
  '/privacy-policy',
  '/terms',
  '/terms-of-service',
  '/cancellation',
  '/payment-terms',

  // Info / utility
  '/about',
  '/chefs',
  '/faq',
  '/why-mychef',
  '/reviews',
  '/pricing',
  '/retreats',
  '/recommended-services',
  '/join-our-team',
  '/quote',
  '/calculator',
  '/404',

  // Area pages (25)
  '/seminyak', '/canggu', '/ubud', '/sanur', '/nusa-dua',
  '/uluwatu', '/jimbaran', '/kuta', '/legian', '/kerobokan',
  '/petitenget', '/berawa', '/pererenan', '/bukit', '/tanah-lot',
  '/tabanan', '/denpasar', '/gianyar', '/tegallalang', '/amed',
  '/lovina', '/candidasa', '/padang-bai', '/ungasan', '/pecatu',

  // Micro-area pages (8)
  '/echo-beach-private-chef',
  '/batu-bolong-private-chef',
  '/bingin-private-chef',
  '/sayan-private-chef',
  '/padang-padang-private-chef',
  '/pererenan-private-chef',
  '/sanur-beach-private-chef',
  '/penestanan-private-chef',

  // Service pages (8)
  '/services/villa-parties',
  '/services/romantic-dinners',
  '/services/birthday-celebrations',
  '/services/family-reunions',
  '/services/corporate-events',
  '/services/wedding-celebrations',
  '/services/cooking-classes',
  '/services/weekly-meal-prep',

  // Menu pages (7)
  '/menus',
  '/menus/mediterranean',
  '/menus/balinese',
  '/menus/asian-fusion',
  '/menus/vegan',
  '/menus/modern-european',
  '/menus/halal',

  // SEO keyword landing pages (14)
  '/best-private-chef-indonesia',
  '/private-chef-for-events',
  '/luxury-chef-indonesia',
  '/wedding-catering-indonesia',
  '/private-dining-indonesia',
  '/healthy-meal-delivery-indonesia',
  '/private-chef-booking-indonesia',
  '/chef-for-hire-indonesia',
  '/proposal-dinner',
  '/honeymoon-chef',
  '/private-chef-breakfast-bali',
  '/private-chef-cost-per-day-bali',
  '/private-chef-cost-bali',
  '/private-chef-menteng',

  // Guides (2)
  '/guide/private-chef-bali',
  '/guide/bali-cuisine-glossary',

  // Blog (6)
  '/blog',
  '/blog/private-chef-bali-cost-breakdown-2026',
  '/blog/best-bali-villas-private-chef-kitchen',
  '/blog/wedding-rehearsal-dinner-bali',
  '/blog/yoga-retreat-chef-bali-meal-planning',
  '/blog/private-chef-vs-restaurant-bali',

  // Aliases that serve unique content
  '/jakarta',
  '/villa-partners',
  '/catering',
]

// ── Launch browser ───────────────────────────────────────────────────────────
const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })

let success = 0
let fail = 0

for (const route of ROUTES) {
  const page = await context.newPage()
  try {
    const url = `http://localhost:${PORT}${route}`
    await page.goto(url, { waitUntil: 'networkidle' })
    // Extra wait for SeoHead useEffect + lazy images
    await page.waitForTimeout(1500)

    const html = await page.content()

    // Write to dist/<route>/index.html
    const outDir = join(DIST, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html)

    const title = await page.$eval('title', (el) => el.innerText).catch(() => 'N/A')
    console.log(`✓ ${route.padEnd(45)} → "${title}"`)
    success++
  } catch (err) {
    console.error(`✗ ${route}: ${err.message}`)
    fail++
  } finally {
    await page.close()
  }
}

await browser.close()
server.close()

console.log(`\nPrerender complete: ${success} succeeded, ${fail} failed`)
if (fail > 0) process.exit(1)
