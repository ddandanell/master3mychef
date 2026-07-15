/**
 * Smoke test for the 50-menu website update.
 * Runs against a local preview server (dist/) with real Chromium.
 * Usage: npx tsx scripts/smoke-menu-pages.ts [baseUrl]   (default http://localhost:4173)
 */
import { chromium } from 'playwright'

const BASE = process.argv[2] ?? 'http://localhost:4173'

let failures = 0
function check(name: string, cond: boolean, detail = '') {
  if (cond) {
    console.log(`  ✅ ${name}`)
  } else {
    console.log(`  ❌ ${name}${detail ? ` — ${detail}` : ''}`)
    failures++
  }
}

async function main() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  const pageErrors: string[] = []
  page.on('pageerror', (e) => pageErrors.push(`${page.url()}: ${e.message}`))

  // ---- /three-course ----
  console.log('\n/three-course')
  await page.goto(`${BASE}/three-course`, { waitUntil: 'networkidle' })
  check('H1', (await page.locator('h1').first().textContent())?.includes('Three Perfect Courses') ?? false)
  const tcCards = page.locator('article')
  check('8 menu cards', (await tcCards.count()) === 8, `got ${await tcCards.count()}`)
  await page.getByRole('button', { name: /Tier A/i }).click()
  check('Tier A filter → 2 cards', (await tcCards.count()) === 2, `got ${await tcCards.count()}`)
  await page.getByRole('button', { name: 'All', exact: true }).click()
  check('All filter → 8 cards', (await tcCards.count()) === 8, `got ${await tcCards.count()}`)
  const quoteHref = await page.locator('article a[data-source^="three-course-"]').first().getAttribute('href')
  check('quote CTA href', !!quoteHref && quoteHref.includes('wa.me/6289674072020') && quoteHref.includes('send%20me%20a%20quote'), quoteHref ?? 'none')
  check('price 850,000 shown', (await page.locator('text=IDR 850,000').count()) >= 1)
  check('FAQ section', (await page.locator('text=Minimum 6 guests').count()) >= 1)
  check('related collections', (await page.locator('a[href="/bbq-grill"]').count()) >= 1)

  // ---- /kids-menus ----
  console.log('\n/kids-menus')
  await page.goto(`${BASE}/kids-menus`, { waitUntil: 'networkidle' })
  check('H1', (await page.locator('h1').first().textContent())?.includes('Little Guests') ?? false)
  check('6 menu cards', (await page.locator('article').count()) === 6)
  check('Interactive badge', (await page.locator('text=Interactive').count()) >= 1)
  check('Why Parents Love Us', (await page.locator('text=Why Parents Love Us').count()) >= 1)
  check('per child pricing', (await page.locator('text=per child').count()) >= 6)
  check('kids FAQ', (await page.locator('text=/nut-free/i').count()) >= 2)

  // ---- /bbq-grill ----
  console.log('\n/bbq-grill')
  await page.goto(`${BASE}/bbq-grill`, { waitUntil: 'networkidle' })
  check('H1', (await page.locator('h1').first().textContent())?.includes('Fire. Smoke. Flavour.') ?? false)
  check('12 menu cards', (await page.locator('article').count()) === 12, `got ${await page.locator('article').count()}`)
  check('3 sub-sections', (await page.locator('h3', { hasText: /Grills$/ }).count()) >= 3)
  check('oyster badge', (await page.locator('text=Includes Oysters').count()) >= 2)
  check('equipment section', (await page.locator('text=/charcoal grills/i').count()) >= 1)
  check('min 8 guests', (await page.locator('text=Minimum 8 guests').count()) >= 12)
  check('catering cross-link', (await page.locator('a[href="/catering/bbq-catering"]').count()) >= 1)

  // ---- /families ----
  console.log('\n/families')
  await page.goto(`${BASE}/families`, { waitUntil: 'networkidle' })
  check('H1', (await page.locator('h1').first().textContent())?.includes('Find Your Perfect Menu') ?? false)
  for (const href of ['/fine-dining/menus', '/three-course', '/bbq-grill', '/kids-menus', '/fine-dining', '/catering']) {
    check(`card link ${href}`, (await page.locator(`a[href="${href}"]`).count()) >= 1)
  }
  check('recommender link', (await page.locator('a[href="/recommended-services"]').count()) >= 1)

  // ---- /family-styling ----
  console.log('\n/family-styling')
  await page.goto(`${BASE}/family-styling`, { waitUntil: 'networkidle' })
  check('H1', (await page.locator('h1').first().textContent())?.includes('How We Style Each Experience') ?? false)
  check('4 family sections', (await page.locator('h2').count()) >= 4)

  // ---- /fine-dining ----
  console.log('\n/fine-dining')
  await page.goto(`${BASE}/fine-dining`, { waitUntil: 'networkidle' })
  await page.locator('#our-menus').scrollIntoViewIfNeeded()
  check('24 rows on "All"', (await page.locator('#our-menus button[data-menu-code]').count()) === 24, `got ${await page.locator('#our-menus button[data-menu-code]').count()}`)
  await page.locator('#our-menus button[data-menu-code]').first().click()
  await page.waitForTimeout(300)
  check('row click → MenuCard visible', (await page.locator('#our-menus article:visible').count()) >= 1, `got ${await page.locator('#our-menus article:visible').count()}`)
  check('quote CTA visible in open card', (await page.locator('#our-menus article:visible a[data-source^="luna-menus-"]').count()) >= 1)
  await page.locator('#our-menus').getByRole('button', { name: 'Seafood', exact: true }).click()
  check('Seafood filter → 6 rows', (await page.locator('#our-menus button[data-menu-code]').count()) === 6, `got ${await page.locator('#our-menus button[data-menu-code]').count()}`)
  check('families cross-link', (await page.locator('#our-menus a[href="/families"]').count()) >= 1)
  check('bespoke callout', (await page.locator('a[href="/quote"]').count()) >= 1)

  // ---- /fine-dining/menus ----
  console.log('\n/fine-dining/menus')
  await page.goto(`${BASE}/fine-dining/menus`, { waitUntil: 'networkidle' })
  check('title', (await page.title()).includes('Classic Set Menus'))
  check('24 rows', (await page.locator('button[data-menu-code]').count()) === 24, `got ${await page.locator('button[data-menu-code]').count()}`)
  await page.locator('button[data-menu-code]').first().click()
  await page.waitForTimeout(300)
  check('row click → MenuCard visible', (await page.locator('article:has(a[data-source^="finedining-menus-"]):visible').count()) >= 1, `got ${await page.locator('article:has(a[data-source^="finedining-menus-"]):visible').count()}`)
  check('single breadcrumb', (await page.locator('nav[aria-label*="readcrumb"], ol').count()) >= 1)
  check('card families link', (await page.locator('article a[href="/families"]').count()) >= 1)

  // ---- Nav dropdown (desktop) ----
  console.log('\nNav (desktop)')
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  const menusBtn = page.getByRole('button', { name: /^Menus$/i }).first()
  if ((await menusBtn.count()) > 0) {
    await menusBtn.click()
    await page.waitForTimeout(400)
    check('dropdown: Three-Course', (await page.locator('a[href="/three-course"]').count()) >= 1)
    check('dropdown: BBQ Grill', (await page.locator('a[href="/bbq-grill"]').count()) >= 1)
    check('dropdown: Kids', (await page.locator('a[href="/kids-menus"]').count()) >= 1)
  } else {
    // maybe it's a link not a button
    const menusLink = page.locator('nav a[href="/families"]').first()
    check('Menus nav item present', (await menusLink.count()) >= 1)
    await menusLink.hover()
    await page.waitForTimeout(400)
    check('dropdown: Three-Course', (await page.locator('a[href="/three-course"]').count()) >= 1)
  }

  // ---- Mobile ----
  console.log('\nMobile (390px)')
  const mob = await ctx.newPage()
  mob.on('pageerror', (e) => pageErrors.push(`mobile ${mob.url()}: ${e.message}`))
  await mob.setViewportSize({ width: 390, height: 844 })
  await mob.goto(`${BASE}/bbq-grill`, { waitUntil: 'networkidle' })
  check('mobile: cards stack', (await mob.locator('article').count()) === 12)
  const box = await mob.locator('article').first().boundingBox()
  check('mobile: card full-width', !!box && box.width > 340, `width ${box?.width}`)
  await mob.goto(`${BASE}/three-course`, { waitUntil: 'networkidle' })
  await mob.getByRole('button', { name: /Tier C/i }).click()
  check('mobile: filter works', (await mob.locator('article').count()) === 3)

  // ---- console errors ----
  console.log('\nConsole/page errors')
  check('no pageerrors', pageErrors.length === 0, pageErrors.slice(0, 3).join(' | '))

  await browser.close()
  console.log(failures === 0 ? '\n🎉 ALL CHECKS PASSED' : `\n💥 ${failures} CHECK(S) FAILED`)
  process.exit(failures === 0 ? 0 : 1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
