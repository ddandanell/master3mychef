/**
 * Prerender every route's rendered body into its static HTML (SEO / Ch 9.3.1).
 *
 * Problem: this is a Vite SPA — the served HTML is a meta-only shell with an
 *   empty <div id="root">. Googlebot's HTML pass sees no content and no
 *   internal <a href> links (Ch 9.3.4). All content is client-rendered.
 *
 * Solution: after `vite build` + `inject-meta`, boot `vite preview`, render
 *   every SITEMAP route in headless Chromium, and splice the rendered
 *   #root markup INTO the inject-meta'd dist/<route>/index.html — keeping the
 *   controlled static <head> (canonical / OG / JSON-LD) AND adding real body
 *   content, H1, and crawlable internal links.
 *
 * Output path matches what Vercel serves: dist/<route>/index.html.
 * Runs in CI (GitHub Actions) where full Chromium is available; the prebuilt
 * dist is then deployed to Vercel via `vercel deploy --prebuilt`.
 *
 * Env:
 *   PRERENDER_LIMIT=<n>   only render the first n routes (local verification)
 *   SKIP_PRERENDER=1      skip entirely (emergency escape hatch)
 */

import { chromium, type Browser } from 'playwright'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn, type ChildProcess } from 'node:child_process'

import { SITEMAP } from '../src/data/sitemap'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, '..', 'dist')
const BASE_URL = 'http://127.0.0.1:4173'
const ROOT_EMPTY = '<div id="root"></div>'
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY ?? 5)
const LIMIT = process.env.PRERENDER_LIMIT ? Number(process.env.PRERENDER_LIMIT) : Infinity

type Route = { path: string; index: number }

function distFileForRoute(routePath: string): string {
  // Mirrors inject-meta.ts: dist/<route>/index.html ( '/' -> dist/index.html )
  const clean = routePath.replace(/^\/+|\/+$/g, '')
  return clean ? join(DIST_DIR, clean, 'index.html') : join(DIST_DIR, 'index.html')
}

function startPreviewServer(): Promise<ChildProcess> {
  return new Promise((resolve, reject) => {
    console.log('🌐 Starting preview server...')
    const server = spawn('pnpm', ['exec', 'vite', 'preview', '--host', '127.0.0.1', '--port', '4173'], {
      cwd: join(__dirname, '..'),
      stdio: 'pipe',
      shell: true,
    })
    let settled = false
    const ready = () => {
      if (settled) return
      settled = true
      setTimeout(() => resolve(server), 1500)
    }
    const onData = (data: Buffer) => {
      const msg = data.toString()
      if (/Local:|ready in|http:\/\//.test(msg)) ready()
      if (/EADDRINUSE/.test(msg)) {
        console.log('  ℹ Port 4173 already in use — reusing existing server')
        ready()
      }
    }
    server.stdout?.on('data', onData)
    server.stderr?.on('data', onData)
    server.on('error', reject)
    setTimeout(() => reject(new Error('Preview server start timeout (45s)')), 45000)
  })
}

async function renderRoute(browser: Browser, route: Route): Promise<{ ok: boolean; reason?: string }> {
  const distFile = distFileForRoute(route.path)
  if (!existsSync(distFile)) {
    return { ok: false, reason: 'inject-meta output missing (run inject-meta first)' }
  }

  const page = await browser.newPage({
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    viewport: { width: 1280, height: 1024 },
  })
  try {
    await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 30000 })
    // Wait for the React app to actually render content into #root.
    await page.waitForSelector('#root > *', { timeout: 15000 })
    // Brief settle for headings / above-the-fold content (no networkidle — GSAP/Tidio never idle).
    await page.waitForTimeout(400)

    const rootHtml = await page.$eval('#root', (el) => el.innerHTML)
    if (!rootHtml || rootHtml.length < 1000) {
      return { ok: false, reason: `rendered #root too small (${rootHtml?.length ?? 0} bytes)` }
    }

    const shell = readFileSync(distFile, 'utf-8')
    if (!shell.includes(ROOT_EMPTY)) {
      // Already filled (re-run without a fresh inject-meta) → idempotent success, not an error.
      if (shell.includes('<div id="root">')) return { ok: true }
      return { ok: false, reason: 'no root div in shell' }
    }
    // Splice rendered body into the controlled inject-meta <head> shell.
    const merged = shell.replace(ROOT_EMPTY, `<div id="root">${rootHtml}</div>`)
    writeFileSync(distFile, merged, 'utf-8')
    return { ok: true }
  } catch (err) {
    return { ok: false, reason: (err as Error).message }
  } finally {
    await page.close()
  }
}

async function runPool(browser: Browser, routes: Route[]): Promise<{ success: number; failures: Array<{ path: string; reason: string }> }> {
  let cursor = 0
  let success = 0
  const failures: Array<{ path: string; reason: string }> = []

  async function worker(): Promise<void> {
    while (cursor < routes.length) {
      const route = routes[cursor++]
      const res = await renderRoute(browser, route)
      if (res.ok) {
        success++
        if (success % 20 === 0) console.log(`  …${success}/${routes.length} rendered`)
      } else {
        failures.push({ path: route.path, reason: res.reason ?? 'unknown' })
        console.warn(`  ✗ ${route.path}: ${res.reason}`)
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, routes.length) }, () => worker()))
  return { success, failures }
}

async function main(): Promise<void> {
  if (process.env.SKIP_PRERENDER === '1') {
    console.log('⏭  SKIP_PRERENDER=1 — leaving inject-meta shells as-is')
    return
  }

  const routes: Route[] = SITEMAP
    .map((entry: { path: string }, index: number) => ({ path: entry.path, index }))
    .filter((_: Route, i: number) => i < LIMIT)

  console.log(`🚀 Prerendering ${routes.length} routes (concurrency ${CONCURRENCY})`)

  let server: ChildProcess | null = null
  let browser: Browser | null = null
  try {
    server = await startPreviewServer()
    console.log('  ✅ Preview server ready\n')

    browser = await chromium.launch({ headless: true })

    const { success, failures } = await runPool(browser, routes)

    console.log(`\n✅ Prerender complete: ${success}/${routes.length} routes`)
    if (failures.length) {
      console.log(`⚠️  ${failures.length} routes failed:`)
      for (const f of failures) console.log(`   - ${f.path}: ${f.reason}`)
      // Fail the build only if a large share failed (a few flaky routes shouldn't block deploy).
      const failRate = failures.length / routes.length
      if (failRate > 0.1) {
        throw new Error(`Prerender fail rate ${(failRate * 100).toFixed(1)}% exceeds 10% threshold`)
      }
    }
  } finally {
    if (browser) await browser.close()
    if (server) {
      server.kill('SIGTERM')
      setTimeout(() => { if (server && !server.killed) server.kill('SIGKILL') }, 2000)
    }
  }
}

main().catch((err) => {
  console.error('Fatal prerender error:', err)
  process.exit(1)
})
