#!/usr/bin/env node
/**
 * Prerender all routes: captures fully-rendered HTML from a headless browser
 * and injects it into each route's dist/<route>/index.html file.
 *
 * This fixes the SPA SEO issue: Googlebot sees actual page content, not just
 * an empty <div id="root">.
 *
 * Usage: npx tsx scripts/prerender-routes.ts
 * Must run AFTER `npm run build` (dist/ must exist).
 */

import { chromium } from 'playwright'
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SITEMAP } from '../src/data/sitemap'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const PORT = 4173
const BASE = `http://127.0.0.1:${PORT}`

// Routes to skip (no content, redirects, or utility pages)
const SKIP = new Set([
  '/404', '/book', '/quote', '/calculator', '/join-our-team',
])

// Maximum time to wait for a page to render
const WAIT_FOR_RENDER = 3000 // ms

// Timeout per route
const ROUTE_TIMEOUT = 15000 // ms

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function prerender() {
  console.log('Prerender: Starting...')

  // Verify dist exists
  if (!existsSync(DIST)) {
    console.error('Prerender: dist/ not found. Run `npm run build` first.')
    process.exit(1)
  }

  // Collect all routes from sitemap + pillar sub-pages
  const routes = new Set<string>()

  for (const entry of SITEMAP) {
    if (!SKIP.has(entry.path)) {
      routes.add(entry.path)
      if ((entry as any).aliases) {
        for (const alias of (entry as any).aliases) {
          if (!SKIP.has(alias)) routes.add(alias)
        }
      }
    }
  }

  // Also add pillar sub-page routes
  try {
    const { getAllSubPages } = await import('../src/data/siteArchitecture')
    const subPages = getAllSubPages()
    for (const sp of subPages) {
      if (!SKIP.has(sp.path)) routes.add(sp.path)
    }
  } catch {
    // siteArchitecture might not be importable in this context, skip
  }

  console.log(`Prerender: ${routes.size} routes to render`)

  // Launch browser
  const browser = await chromium.launch({ headless: true })
  let success = 0
  let fail = 0
  let skipped = 0

  try {
    const sortedRoutes = Array.from(routes).sort()
    for (let i = 0; i < sortedRoutes.length; i++) {
      const route = sortedRoutes[i]
      const start = Date.now()
      try {
        const context = await browser.newContext({
          viewport: { width: 1920, height: 1080 },
          userAgent: 'Mozilla/5.0 (compatible; myCHEF-Prerender/1.0)',
        })
        const page = await context.newPage()

        // Navigate and wait for render
        await page.goto(`${BASE}${route}`, {
          waitUntil: 'networkidle',
          timeout: ROUTE_TIMEOUT,
        })

        // Extra wait for React hydration and lazy content
        await sleep(WAIT_FOR_RENDER)

        // Get the full HTML
        const html = await page.content()

        // Extract just the <head> and the rendered body content
        const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i)
        const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i)

        if (!headMatch || !bodyMatch) {
          console.error(`  ✗ ${route}: Could not parse HTML`)
          fail++
          await context.close()
          continue
        }

        // Read the existing meta-injected HTML (has correct meta tags)
        const metaHtmlPath = join(DIST, route, 'index.html')
        if (!existsSync(metaHtmlPath)) {
          // Create directory and use base template
          mkdirSync(join(DIST, route), { recursive: true })
          const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf-8')

          // Inject the rendered body content
          const newHtml = baseHtml
            .replace(/<div id="root"><\/div>/, bodyMatch[1])
            .replace(/<div id="root" \/><\/div>/, bodyMatch[1])

          writeFileSync(metaHtmlPath, newHtml)
        } else {
          // Update existing file with rendered body
          let existingHtml = readFileSync(metaHtmlPath, 'utf-8')

          // Replace the empty root div with rendered content
          existingHtml = existingHtml
            .replace(/<div id="root"><\/div>/, bodyMatch[1])
            .replace(/<div id="root" \/><\/div>/, bodyMatch[1])

          writeFileSync(metaHtmlPath, existingHtml)
        }

        await context.close()
        const elapsed = Date.now() - start
        success++
        console.log(`  ✓ ${route} (${elapsed}ms)`)
      } catch (err: any) {
        console.error(`  ✗ ${route}: ${err.message?.substring(0, 100) || err}`)
        fail++
      }
    }
  } finally {
    await browser.close()
  }

  console.log(`\nPrerender complete: ${success} rendered, ${fail} failed, ${skipped} skipped`)
}

// Run
prerender().catch(err => {
  console.error('Prerender fatal:', err)
  process.exit(1)
})
