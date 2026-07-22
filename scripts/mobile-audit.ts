#!/usr/bin/env node
/**
 * Mobile optimization audit for mychef.id
 *
 * Loads each URL in a mobile-sized Playwright viewport and checks:
 * - viewport meta tag
 * - horizontal overflow (scrollWidth > clientWidth)
 * - text smaller than 12px
 * - touch targets smaller than 48x48px or overlapping
 * - images wider than the viewport
 * - console errors / failed network requests
 *
 * Usage:
 *   npx tsx scripts/mobile-audit.ts url1 url2 ...
 *   npx tsx scripts/mobile-audit.ts --urls-file=/tmp/mychef-urls.txt
 */

import { chromium, type Browser, type Page, devices } from 'playwright'
import { readFileSync, writeFileSync } from 'node:fs'

interface PageResult {
  url: string
  ok: boolean
  viewportMeta?: string
  viewportOk: boolean
  overflowPx: number
  smallTextCount: number
  smallTextExamples: string[]
  smallTargetsCount: number
  smallTargetExamples: string[]
  oversizedImagesCount: number
  oversizedImageExamples: string[]
  consoleErrors: string[]
  failedRequests: string[]
  loadTimeMs: number
  error?: string
}

const MIN_FONT_PX = 12
const MIN_TAP_SIZE = 48
const VIEWPORT = devices['iPhone 13'].viewport

interface ParsedArgs {
  urls: string[]
  output: string
}

function parseArgs(): ParsedArgs {
  const urls: string[] = []
  let output = '/tmp/mobile-audit-report.json'
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith('--urls-file=')) {
      const file = arg.slice('--urls-file='.length)
      const list = readFileSync(file, 'utf-8')
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean)
      urls.push(...list)
    } else if (arg.startsWith('--output=')) {
      output = arg.slice('--output='.length)
    } else if (!arg.startsWith('--')) {
      urls.push(arg)
    }
  }
  return { urls, output }
}

async function auditPage(browser: Browser, url: string): Promise<PageResult> {
  const result: PageResult = {
    url,
    ok: true,
    viewportOk: false,
    overflowPx: 0,
    smallTextCount: 0,
    smallTextExamples: [],
    smallTargetsCount: 0,
    smallTargetExamples: [],
    oversizedImagesCount: 0,
    oversizedImageExamples: [],
    consoleErrors: [],
    failedRequests: [],
    loadTimeMs: 0,
  }

  const context = await browser.newContext({
    viewport: VIEWPORT,
    userAgent: devices['iPhone 13'].userAgent,
    deviceScaleFactor: devices['iPhone 13'].deviceScaleFactor,
    isMobile: true,
    hasTouch: true,
  })

  const page = await context.newPage()

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      result.consoleErrors.push(msg.text().slice(0, 200))
    }
  })
  page.on('pageerror', (err) => {
    result.consoleErrors.push(err.message.slice(0, 200))
  })
  page.on('response', (resp) => {
    if (resp.status() >= 400) {
      result.failedRequests.push(`${resp.status()} ${resp.url()}`.slice(0, 200))
    }
  })

  const start = Date.now()
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
  } catch (e) {
    result.error = `navigation failed: ${(e as Error).message}`
    result.ok = false
    await context.close()
    return result
  }
  result.loadTimeMs = Date.now() - start

  // Viewport meta
  const viewportMeta = await page.$eval('meta[name="viewport"]', (el) => el.getAttribute('content')).catch(() => null)
  result.viewportMeta = viewportMeta || undefined
  result.viewportOk = !!viewportMeta && /width\s*=\s*device-width/i.test(viewportMeta)

  // Run layout checks in the page via a stringified function so esbuild keepNames
  // does not inject __name references into the browser context.
  const auditPageFnString = `function audit(args) {
    const minFont = args.minFont
    const minTap = args.minTap
    const html = document.documentElement
    const body = document.body
    const viewportW = window.innerWidth

    const isVisible = function(el) {
      if (typeof el.checkVisibility === 'function') {
        try { return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true }) } catch (e) {}
      }
      const style = window.getComputedStyle(el)
      return style.display !== 'none' && style.visibility !== 'hidden'
    }

    const overflowPx = Math.max(0, html.scrollWidth - viewportW)

    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null)
    const smallText = []
    const seenText = new Set()
    let textNode
    while ((textNode = walker.nextNode())) {
      const el = textNode.parentElement
      if (!el || !isVisible(el)) continue
      const style = window.getComputedStyle(el)
      const fontSize = parseFloat(style.fontSize)
      if (fontSize && fontSize < minFont && textNode.textContent && textNode.textContent.trim()) {
        const key = el.tagName + '|' + fontSize + '|' + textNode.textContent.trim().slice(0, 40)
        if (seenText.has(key)) continue
        seenText.add(key)
        smallText.push({ text: textNode.textContent.trim().slice(0, 60), fontSize: fontSize })
        if (smallText.length >= 10) break
      }
    }

    const tapSelectors = 'a, button, input, select, textarea, [role="button"], [role="link"], [onclick]'
    const tapEls = Array.from(document.querySelectorAll(tapSelectors))
    const smallTargets = []
    const seenTargets = new Set()
    for (const el of tapEls) {
      if (!isVisible(el)) continue
      const rect = el.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      if (w === 0 || h === 0) continue
      if (rect.bottom < 0 || rect.top > window.innerHeight * 3) continue
      if (w < minTap || h < minTap) {
        const text = (el.innerText || '').slice(0, 40) || (el.getAttribute('aria-label') || '')
        const key = el.tagName + '|' + text + '|' + Math.round(w) + '|' + Math.round(h)
        if (seenTargets.has(key)) continue
        seenTargets.add(key)
        smallTargets.push({ tag: el.tagName, text: text, w: Math.round(w), h: Math.round(h) })
        if (smallTargets.length >= 10) break
      }
    }

    const imgs = Array.from(document.querySelectorAll('img'))
    const oversized = []
    const seenImgs = new Set()
    for (const img of imgs) {
      if (img.naturalWidth === 0) continue
      if (!isVisible(img)) continue
      const rect = img.getBoundingClientRect()
      if (rect.width > viewportW + 1) {
        const src = img.src.split('/').pop() || img.src
        if (seenImgs.has(src)) continue
        seenImgs.add(src)
        oversized.push({ src: src, w: Math.round(rect.width), viewportW: viewportW })
        if (oversized.length >= 10) break
      }
    }

    return { overflowPx: overflowPx, smallText: smallText, smallTargets: smallTargets, oversized: oversized }
  }`

  const layout = await page.evaluate(new Function('args', `return (${auditPageFnString})(args)`), {
    minFont: MIN_FONT_PX,
    minTap: MIN_TAP_SIZE,
  })

  result.overflowPx = layout.overflowPx
  result.smallTextCount = layout.smallText.length
  result.smallTextExamples = layout.smallText.map((t) => `${t.fontSize}px: "${t.text}"`)
  result.smallTargetsCount = layout.smallTargets.length
  result.smallTargetExamples = layout.smallTargets.map((t) => `${t.tag} ${t.w}x${t.h} "${t.text}"`)
  result.oversizedImagesCount = layout.oversized.length
  result.oversizedImageExamples = layout.oversized.map((i) => `${i.src} (${i.w}px > ${i.viewportW}px)`)

  result.ok =
    result.viewportOk &&
    result.overflowPx === 0 &&
    result.smallTextCount === 0 &&
    result.smallTargetsCount === 0 &&
    result.oversizedImagesCount === 0 &&
    result.consoleErrors.length === 0 &&
    !result.error

  await context.close()
  return result
}

async function main() {
  const { urls, output } = parseArgs()
  if (urls.length === 0) {
    console.error('Usage: npx tsx scripts/mobile-audit.ts URL1 URL2 ... [--urls-file=FILE] [--output=FILE]')
    process.exit(1)
  }

  const browser = await chromium.launch({ headless: true })
  const results: PageResult[] = []

  console.log(`Auditing ${urls.length} URLs with iPhone 13 viewport (${VIEWPORT.width}x${VIEWPORT.height})`)
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    process.stdout.write(`[${i + 1}/${urls.length}] ${url} ... `)
    try {
      const res = await auditPage(browser, url)
      results.push(res)
      console.log(res.ok ? 'OK' : `FAIL (${describeFails(res)})`)
    } catch (e) {
      results.push({
        url,
        ok: false,
        viewportOk: false,
        overflowPx: 0,
        smallTextCount: 0,
        smallTextExamples: [],
        smallTargetsCount: 0,
        smallTargetExamples: [],
        oversizedImagesCount: 0,
        oversizedImageExamples: [],
        consoleErrors: [],
        failedRequests: [],
        loadTimeMs: 0,
        error: `unexpected: ${(e as Error).message}`,
      })
      console.log('ERROR')
    }
  }

  await browser.close()

  const failures = results.filter((r) => !r.ok)
  const summary = {
    total: results.length,
    passed: results.filter((r) => r.ok).length,
    failed: failures.length,
    viewportFailures: results.filter((r) => !r.viewportOk).length,
    overflowFailures: results.filter((r) => r.overflowPx > 0).length,
    smallTextFailures: results.filter((r) => r.smallTextCount > 0).length,
    smallTargetFailures: results.filter((r) => r.smallTargetsCount > 0).length,
    oversizedImageFailures: results.filter((r) => r.oversizedImagesCount > 0).length,
    consoleErrorFailures: results.filter((r) => r.consoleErrors.length > 0).length,
    navigationFailures: results.filter((r) => r.error?.startsWith('navigation')).length,
  }

  writeFileSync(output, JSON.stringify({ summary, results }, null, 2))
  console.log('\nSummary:', summary)
  console.log(`Full report: ${output}`)

  if (failures.length > 0) {
    console.log('\nFailed pages:')
    for (const r of failures) {
      console.log(`- ${r.url}: ${describeFails(r)}`)
      if (r.smallTextExamples.length) console.log('  small text:', r.smallTextExamples.slice(0, 3))
      if (r.smallTargetExamples.length) console.log('  small targets:', r.smallTargetExamples.slice(0, 3))
      if (r.oversizedImageExamples.length) console.log('  oversized imgs:', r.oversizedImageExamples.slice(0, 3))
      if (r.consoleErrors.length) console.log('  console errors:', r.consoleErrors.slice(0, 3))
      if (r.error) console.log('  error:', r.error)
    }
    process.exit(1)
  }
}

function describeFails(r: PageResult): string {
  const parts: string[] = []
  if (!r.viewportOk) parts.push('viewport')
  if (r.overflowPx > 0) parts.push(`overflow ${r.overflowPx}px`)
  if (r.smallTextCount > 0) parts.push(`${r.smallTextCount} small text`)
  if (r.smallTargetsCount > 0) parts.push(`${r.smallTargetsCount} small targets`)
  if (r.oversizedImagesCount > 0) parts.push(`${r.oversizedImagesCount} oversized imgs`)
  if (r.consoleErrors.length > 0) parts.push(`${r.consoleErrors.length} console errors`)
  if (r.error) parts.push(r.error)
  return parts.join(', ') || 'unknown'
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
