# SEO Critical Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the highest-impact technical SEO issues uncovered in the GSC report and live-site audit: broken hreflang, missing prerendered routes, self-serving review markup, and incorrect structured data.

**Architecture:** Keep the Vite SPA + prerender pipeline intact. Fix the static HTML shell (`index.html`), the runtime SEO injector (`SeoHead.tsx`), the sitemap source of truth (`sitemap.ts`), and page-level schema definitions. All changes must survive the existing `pnpm build` + `prerender` + `validate-prerender` pipeline.

**Tech Stack:** Vite 7, React 18, TypeScript, Playwright prerender, Vercel.

## Global Constraints

- Do NOT change any URL structure or existing redirects.
- Do NOT add new dependencies.
- All JSX/TSX must pass `pnpm exec tsc -b --noEmit`.
- All modified pages must still prerender without errors (`pnpm run build`).
- Keep changes minimal; no opportunistic refactors.
- Preserve the dark/gold brand styling; only touch SEO markup and schemas.
- Commit each task separately with a clear message.

---

## Task 1: Remove duplicate hreflang from the static HTML shell

**Files:**
- Modify: `index.html:16-19`
- Modify: `dist/index.html:16-19` (so the current deployed shell matches until next build)
- Test: `curl -s https://mychef.id/locations/canggu | grep -c 'hreflang'` should return `3` (only the SeoHead set), not `6`.

**Interfaces:**
- Consumes: `SeoHead.tsx` already injects per-page hreflang at runtime.
- Produces: A static shell with no hreflang tags; hreflang is injected by `SeoHead` only.

- [ ] **Step 1: Delete the static hreflang block in `index.html`**

Remove lines 16-19 from `index.html`:

```html
<!-- hreflang for international SEO -->
<link rel="alternate" hreflang="en" href="https://mychef.id/" />
<link rel="alternate" hreflang="id" href="https://mychef.id/" />
<link rel="alternate" hreflang="x-default" href="https://mychef.id/" />
```

- [ ] **Step 2: Mirror the change in `dist/index.html`**

Delete the identical block in `dist/index.html` so the fix is visible immediately on the live site before the next full build/deploy.

- [ ] **Step 3: Verify no static hreflang remains**

Run:
```bash
grep -n "hreflang" index.html dist/index.html || echo "No static hreflang found"
```

Expected: only references inside comments or none at all.

- [ ] **Step 4: Verify live page has only 3 hreflang tags**

Run:
```bash
curl -s --max-time 10 https://mychef.id/locations/canggu | grep -c 'hreflang'
```

Expected: `3` (en, id, x-default, all pointing to `/locations/canggu`).

- [ ] **Step 5: Commit**

```bash
git add index.html dist/index.html
git commit -m "fix(seo): remove duplicate static hreflang block from HTML shell"
```

---

## Task 2: Ensure SeoHead injects hreflang on every route change

**Files:**
- Modify: `src/components/SeoHead.tsx:511-608`
- Test: Manual navigation check via Playwright or build + inspect prerendered `/fine-dining/index.html`.

**Interfaces:**
- Consumes: `canonical` prop passed to `SeoHead` on every page.
- Produces: hreflang tags persisted in prerendered HTML for every route.

- [ ] **Step 1: Add hreflang link injection to SeoHead**

Inside the `useEffect` of `SeoHead.tsx`, after canonical is set, add code that:
1. Removes any existing `<link rel="alternate" hreflang="...">` elements.
2. If `canonical` is provided, injects three new `<link rel="alternate">` tags: `hreflang="en"`, `hreflang="id"`, `hreflang="x-default"`, all pointing to `canonical`.
3. Sets `data-seohead="hreflang"` on injected tags for later cleanup.

```tsx
// Inside useEffect, after canonical handling
const existingHreflangs = document.head.querySelectorAll('link[data-seohead="hreflang"]')
existingHreflangs.forEach((el) => el.remove())

if (canonical) {
  for (const lang of ['en', 'id', 'x-default']) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', lang)
    link.setAttribute('href', canonical)
    link.setAttribute('data-seohead', 'hreflang')
    document.head.appendChild(link)
  }
}
```

- [ ] **Step 2: Add cleanup in return function**

```tsx
return () => {
  document.head.querySelectorAll('script[data-seohead="jsonld"]').forEach((el) => el.remove())
  document.head.querySelectorAll('link[data-seohead="hreflang"]').forEach((el) => el.remove())
}
```

- [ ] **Step 3: Type-check**

Run:
```bash
pnpm exec tsc -b --noEmit
```

Expected: exit 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/SeoHead.tsx
git commit -m "fix(seo): inject per-page hreflang via SeoHead and clean up on unmount"
```

---

## Task 3: Add missing critical routes to the sitemap

**Files:**
- Modify: `src/data/sitemap.ts:221-290` (infoPages array)
- Modify: `src/data/page-meta.ts` (ensure entries exist)
- Test: `curl -s https://mychef.id/sitemap.xml | grep -c "<loc>"` should increase; `ls dist/reviews/index.html` should exist after build.

**Interfaces:**
- Consumes: `PAGE_META` record and existing sitemap builder.
- Produces: `/reviews` and other key routes included in `SITEMAP` so `inject-meta.ts` and `prerender.ts` process them.

- [ ] **Step 1: Add `/reviews` to infoPages**

Add to the `infoPages` array in `src/data/sitemap.ts`:

```ts
{ path: '/reviews', type: 'info', title: 'myCHEF Reviews | 4.9★ Private Chef Bali — 560+ Guest Reviews', description: 'Read verified myCHEF reviews from Bali villa guests, weddings, corporate retreats and catering events. 4.9-star average across 560+ experiences.', priority: 0.7, changefreq: 'monthly' },
```

- [ ] **Step 2: Verify PAGE_META has `/reviews` metadata**

Check `src/data/page-meta.ts` for a `reviews` entry. If missing, add:

```ts
reviews: {
  path: '/reviews',
  title: 'myCHEF Reviews | 4.9★ Private Chef Bali — 560+ Guest Reviews',
  description: 'Read verified myCHEF reviews from Bali villa guests, weddings, corporate retreats and catering events. 4.9-star average across 560+ experiences.',
  canonical: `${SITE}/reviews`,
  h1: 'What 560+ Bali Villa Guests Say About myCHEF',
},
```

- [ ] **Step 3: Type-check**

Run:
```bash
pnpm exec tsc -b --noEmit
```

Expected: exit 0.

- [ ] **Step 4: Build locally to verify prerender output**

Run:
```bash
pnpm run build
```

After build completes, verify:
```bash
ls dist/reviews/index.html
grep -c "application/ld+json" dist/reviews/index.html
```

Expected: file exists; JSON-LD count ≥ 1 (BreadcrumbList from inject-meta; Review schemas still come from client unless prerender captures them).

- [ ] **Step 5: Commit**

```bash
git add src/data/sitemap.ts src/data/page-meta.ts
git commit -m "fix(seo): add /reviews to sitemap and page meta for prerendering"
```

---

## Task 4: Remove self-serving AggregateRating from LocalBusiness

**Files:**
- Modify: `src/components/PrivateChefAreaPage.tsx:107-128`
- Modify: `src/content/staffing/*.md` (10 files with `aggregateRating` blocks)
- Test: GSC Review snippets errors should drop; no build errors.

**Interfaces:**
- Consumes: existing area page schema and markdown frontmatter/schema.
- Produces: clean LocalBusiness/Organization schemas without self-serving ratings.

- [ ] **Step 1: Remove aggregateRating from PrivateChefAreaPage**

In `src/components/PrivateChefAreaPage.tsx`, delete the `aggregateRating` property from the `LocalBusiness` object in `structuredData`.

Before:
```ts
{
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  ...
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
  },
  areaServed: ...,
}
```

After: remove the entire `aggregateRating` block.

- [ ] **Step 2: Remove aggregateRating blocks from staffing markdown files**

For each file in `src/content/staffing/*.md` that contains an `aggregateRating` block inside a `LocalBusiness` or `Organization` JSON-LD script, remove the `aggregateRating` object. Keep the rest of the schema intact.

Files to scan:
- `src/content/staffing/villa-staff.md`
- `src/content/staffing/how-it-works.md`
- `src/content/staffing/maintenance.md`
- `src/content/staffing/staffing.md`
- `src/content/staffing/villa-staffing-bali.md`
- `src/content/staffing/housekeeping-cleaning.md`
- `src/content/staffing/private-chef.md`
- `src/content/staffing/event-staff.md`
- `src/content/staffing/villa-manager.md`
- `src/content/staffing/recruitment.md`

- [ ] **Step 3: Type-check and build**

Run:
```bash
pnpm exec tsc -b --noEmit
pnpm run build
```

Expected: both exit 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/PrivateChefAreaPage.tsx src/content/staffing/*.md
git commit -m "fix(schema): remove self-serving AggregateRating from LocalBusiness"
```

---

## Task 5: Fix incomplete Event schema

**Files:**
- Modify: `src/components/SeoHead.tsx:344-384`
- Modify: `src/pages/EventsMainPage.tsx:453-458` and event sub-pages using `eventSchema`
- Test: Build passes; GSC Events errors should trend to zero.

**Interfaces:**
- Consumes: `eventSchema()` helper.
- Produces: Either complete `Event` schemas or `Service` schemas for recurring event offerings.

- [ ] **Step 1: Decide per page type**

For `/events` and event sub-pages (`/events/weddings`, `/events/birthdays`, etc.), these are **service offering pages**, not specific calendar events. Change the schema type from `Event` to `Service`.

For Aura pages (`AuraPage.tsx`) that describe specific scheduled experiences, keep `Event` but add `startDate`, `endDate`, `location.address`, `offers`, `image`, and `performer`.

- [ ] **Step 2: Add a serviceEventSchema helper**

In `src/components/SeoHead.tsx`, add:

```ts
export function serviceEventSchema(
  name: string,
  description: string,
  url: string,
  lowPrice?: number,
  priceCurrency?: string,
  image?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: { '@id': 'https://mychef.id/#business' },
    areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
    ...(image ? { image } : {}),
    ...(lowPrice
      ? {
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: lowPrice.toString(),
            priceCurrency: priceCurrency ?? 'IDR',
            availability: 'https://schema.org/InStock',
            url,
          },
        }
      : {}),
  }
}
```

- [ ] **Step 3: Replace eventSchema calls on service pages**

In `src/pages/EventsMainPage.tsx:453-458`, replace:

```ts
eventSchema({
  name: 'Private Events and Celebrations in Bali',
  description: '...',
  url: `${SITE}/events`,
  lowPrice: 600000,
})
```

with:

```ts
serviceEventSchema(
  'Private Events and Celebrations in Bali',
  'Private chef events, weddings, birthdays, corporate dinners, and villa parties across Bali — managed end-to-end.',
  `${SITE}/events`,
  600000,
  'IDR',
)
```

Repeat for event sub-pages (`EventsWeddingsPage.tsx`, `EventsBirthdaysPage.tsx`, etc.) that use `eventSchema` for a generic service description.

- [ ] **Step 4: Keep Event type only where it is a real scheduled event**

If `AuraPage.tsx` events are real scheduled events, enrich them with:
- `startDate` (ISO 8601)
- `endDate` (ISO 8601)
- `location.address` object
- `offers`
- `image`
- `performer`

If they are not real events, switch them to `serviceEventSchema` as well.

- [ ] **Step 5: Type-check and build**

Run:
```bash
pnpm exec tsc -b --noEmit
pnpm run build
```

Expected: both exit 0.

- [ ] **Step 6: Commit**

```bash
git add src/components/SeoHead.tsx src/pages/Events*.tsx src/pages/AuraPage.tsx
git commit -m "fix(schema): use Service schema for generic event offerings and enrich real Event markup"
```

---

## Task 6: Move static Service schemas from index.html to relevant pages

**Files:**
- Modify: `index.html:182-250`
- Modify: `dist/index.html:182-250`
- Modify: `src/pages/HubPage.tsx` or relevant page components
- Test: Build passes; homepage still has Organization + WebSite; service pages have their own Service schema.

**Interfaces:**
- Consumes: existing `serviceSchema()` helper in `SeoHead.tsx`.
- Produces: Service schemas only on the pages they describe.

- [ ] **Step 1: Remove Service schemas from index.html**

Delete the five Service JSON-LD blocks from `index.html`:
- Private Chef / Fine Dining
- Villa Catering
- Event Production
- In-Villa Service Staff
- Staffing & Placement

Also mirror the deletion in `dist/index.html`.

- [ ] **Step 2: Add Service schemas to the correct pages**

For each service page, add a `serviceSchema()` call via `SeoHead`:

`/fine-dining`:
```ts
jsonLd={[
  ...,
  serviceSchema(
    'Private Chef / Fine Dining',
    'Italian tasting menus and open-flame dining experiences in your Bali villa. Michelin-trained leadership.',
    `${SITE}/fine-dining`,
    '$$$$',
  ),
]}
```

Repeat for `/catering`, `/events`, `/in-villa-service`, `/staffing`.

- [ ] **Step 3: Type-check and build**

Run:
```bash
pnpm exec tsc -b --noEmit
pnpm run build
```

Expected: both exit 0.

- [ ] **Step 4: Commit**

```bash
git add index.html dist/index.html src/pages/HubPage.tsx src/pages/LunaPage.tsx src/pages/CateringMainPage.tsx src/pages/EventsMainPage.tsx src/components/InVillaServicePage.tsx src/pages/StaffingPage.tsx
git commit -m "fix(schema): move homepage-only Service schemas to their respective pages"
```

---

## Final Verification

- [ ] Run full build:
  ```bash
  pnpm run build
  ```
  Expected: exit 0.

- [ ] Run type-check:
  ```bash
  pnpm exec tsc -b --noEmit
  ```
  Expected: exit 0.

- [ ] Spot-check live/prerendered pages:
  ```bash
  curl -s https://mychef.id/locations/canggu | grep -c 'hreflang'  # expect 3
  curl -s https://mychef.id/reviews | grep -c 'application/ld+json'  # expect >= 1
  curl -s https://mychef.id/events | grep '"@type":"Service"' | head -1  # expect Service, not Event
  ```

- [ ] Run lint:
  ```bash
  pnpm run lint
  ```
  Expected: no new errors.

---

## Spec Coverage

| Requirement | Task |
|---|---|
| Fix duplicate/wrong hreflang | Task 1 + Task 2 |
| Prerender missing routes | Task 3 |
| Remove self-serving AggregateRating | Task 4 |
| Fix incomplete Event schema | Task 5 |
| Move static Service schemas to relevant pages | Task 6 |
