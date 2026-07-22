# MyChef B2B Bar Services Blueprint Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the complete MyChef Bar Services Blueprint into mychef.id as a polished, inter-linked, SEO-optimized B2B vertical while leaving the existing chef/private-dining IA untouched.

**Architecture:** Continue using the existing `src/data/bar-services/` data layer and `src/pages/BarServicePage.tsx` renderer. Feed richer copy, meta data, and schema into the existing components rather than rebuilding pages. Add a homepage block and resource articles as new page/section files.

**Tech Stack:** React + TypeScript + Vite + Tailwind CSS + React Router + Zod-free JSON-LD helpers in `src/components/SeoHead.tsx`.

## Global Constraints
- All existing `/bar-services/*` routes stay unchanged.
- No location pages under `/bar-services/locations/`.
- No changes to existing chef-side header navigation.
- Footer already contains a single "B2B Bar Service" link to `/bar-services/`.
- Pricing is published as "from" anchors only; confidential rates stay internal.
- No `JobPosting` schema on marketing pages.
- No fabricated `AggregateRating`/`Review` schema.
- Every code change must pass `npx tsc --noEmit` and `npm run build`.
- Commit after each independently testable task.

---

## File map

| File | Responsibility |
|---|---|
| `src/data/bar-services/services.ts` | All 11 service definitions (copy, pricing, FAQs, keywords, images, related links). |
| `src/data/bar-services/hub.ts` | Hub page data (hero, expanded copy, groups, gallery). |
| `src/data/bar-services/resources.ts` | Resource article definitions. |
| `src/data/bar-services/types.ts` | Shared TypeScript interfaces. |
| `src/data/page-meta.ts` | Meta titles/descriptions/canonicals for every route. |
| `src/components/SeoHead.tsx` | SEO head + JSON-LD helper functions. |
| `src/pages/BarServicePage.tsx` | Service page renderer. |
| `src/pages/BarServicesHubPage.tsx` | Hub renderer. |
| `src/pages/BarServicesFAQPage.tsx` | FAQ renderer. |
| `src/pages/BarServicesResourcesIndexPage.tsx` | Resources index renderer. |
| `src/pages/BarServicesResourcePage.tsx` | Single resource article renderer. |
| `src/pages/HomePage.tsx` or equivalent homepage | Add "Bar Services for Venues" block. |
| `src/components/Footer.tsx` | Wire segment anchor links. |
| `public/generated/*` | Existing/generated image assets. |

---

## Task 1: Complete content expansion (Phase 1)

**Files:**
- Modify: `src/data/bar-services/services.ts`
- Modify: `src/data/bar-services/hub.ts`
- Modify: `src/pages/BarServicesFAQPage.tsx`
- Test: `npx tsc --noEmit && npm run build`

**Interfaces:**
- Consumes: Blueprint copy in `/Users/openclaw/Downloads/MyChef Bar Services Blueprint/mychef-b2b-bar-services/06-website-copy/`.
- Produces: Every service object has ≥1,000 words of body copy, 5–8 FAQs, and richer `expandedSections`. Hub reaches ~1,800 words. FAQ page renders 22 Q&As.

- [ ] **Step 1: Audit current word counts**

Run a word-count script or manual check across each service in `src/data/bar-services/services.ts` summing: problem paragraphs + deliverable descriptions + process descriptions + included items + proof items + FAQ answers + expandedSections paragraphs.

Expected: Identify pages below 1,000 words.

- [ ] **Step 2: Expand under-weight service pages**

For each page below target, add paragraphs to `expandedSections.whyBali`, `expandedSections.whoFor`, `expandedSections.commonMistakes`, `expandedSections.connections`, and lengthen FAQ answers using the blueprint copy files. Do not change slugs, routes, or metaKeys.

Expected: Every service page totals ≥1,000 words.

- [ ] **Step 3: Expand hub copy**

In `src/data/bar-services/hub.ts`, add 1–2 paragraphs to each `expandedCopy` section (intro, whyNow, whyMyChef, howWeWork, cta) using `b2b-main-page.md` and `bar-services-main-page.md` from the blueprint.

Expected: Hub word count reaches ~1,800.

- [ ] **Step 4: Upgrade FAQ page**

Replace the existing FAQ list in `src/pages/BarServicesFAQPage.tsx` with the 22 Q&As from `06-website-copy/faq-content.md`, grouped into Pricing, Staffing, Consulting, Legal & Licensing, Logistics.

Expected: `/bar-services/faq/` renders all 22 questions with `FAQPage` schema.

- [ ] **Step 5: Verify build**

Run:
```bash
npx tsc --noEmit
npm run build
```
Expected: No TypeScript errors; build completes with 281 prerendered routes.

- [ ] **Step 6: Commit**

```bash
git add src/data/bar-services/services.ts src/data/bar-services/hub.ts src/pages/BarServicesFAQPage.tsx
git commit -m "content(bar-services): expand service pages, hub, and FAQ to blueprint depth"
```

---

## Task 2: Align SEO metadata with blueprint

**Files:**
- Modify: `src/data/page-meta.ts`
- Test: `npx tsc --noEmit && npm run build`

**Interfaces:**
- Consumes: `metadata.csv` from the blueprint (`07-seo/metadata.csv`).
- Produces: `getPageMeta('bar-services-*')` returns title/description/canonical/ogImage matching the blueprint.

- [ ] **Step 1: Map current meta keys to blueprint slugs**

Open `src/data/page-meta.ts` and list all keys starting with `bar-services-`. Compare each to `metadata.csv`.

Expected: A list of mismatched or missing meta entries.

- [ ] **Step 2: Update titles and descriptions**

For each mismatch, update the meta object so that `title`, `description`, and `ogImage` match `metadata.csv`. Example:

```ts
'bar-services-hub': {
  title: 'Bar Consultant Bali | B2B Bar Services | MyChef',
  description: "Bali's B2B bar consultancy: training, menus, staffing, audits and management for hotels, villas and beach clubs. Training from IDR 2.75M per pax.",
  canonical: 'https://mychef.id/bar-services/',
  ogImage: 'https://mychef.id/generated/mychef-bar-services-bali-og-hub.jpg',
},
```

Expected: All bar-services pages have blueprint-aligned metadata.

- [ ] **Step 3: Verify build**

```bash
npx tsc --noEmit
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/data/page-meta.ts
git commit -m "seo(bar-services): align meta titles and descriptions with blueprint"
```

---

## Task 3: Add service-page JSON-LD schema

**Files:**
- Modify: `src/components/SeoHead.tsx`
- Modify: `src/pages/BarServicePage.tsx`
- Test: `npx tsc --noEmit && npm run build`

**Interfaces:**
- Consumes: `BarService` objects (slug, h1, meta description, from-price via data file).
- Produces: Each service page emits `Service` + `Offer` JSON-LD.

- [ ] **Step 1: Add a bar-service schema helper**

In `src/components/SeoHead.tsx`, add:

```ts
export function barServiceSchema(
  name: string,
  description: string,
  url: string,
  serviceType: string,
  price: number,
  priceLabel: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    serviceType,
    description,
    provider: { '@id': 'https://mychef.id/#organization' },
    areaServed: [
      { '@type': 'State', name: 'Bali' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Hotels, villas, beach clubs, restaurants, event and wedding organisers in Bali',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: String(price),
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'IDR',
        minPrice: String(price),
        description: priceLabel,
      },
      availability: 'https://schema.org/InStock',
      url,
    },
  }
}
```

Expected: Helper compiles.

- [ ] **Step 2: Add from-price data to each service**

In `src/data/bar-services/services.ts`, add a `fromPrice` field to every service:

```ts
fromPrice: { value: 2750000, label: 'From IDR 2,750,000 per participant (2-day foundation course)' }
```

Use the values from the blueprint schema-plan table.

- [ ] **Step 3: Wire schema into BarServicePage**

In `src/pages/BarServicePage.tsx`, import `barServiceSchema` and append it to the `jsonLd` array:

```tsx
jsonLd={[
  breadcrumbSchema(...),
  barServiceSchema(
    service.h1,
    meta.description,
    canonical,
    service.eyebrow,
    service.fromPrice.value,
    service.fromPrice.label,
  ),
  serviceSchema(service.h1, meta.description, canonical),
  faqPageSchema(service.faqs),
]}
```

Expected: Each service page renders Service + Offer JSON-LD.

- [ ] **Step 4: Verify build**

```bash
npx tsc --noEmit
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/SeoHead.tsx src/data/bar-services/services.ts src/pages/BarServicePage.tsx
git commit -m "seo(schema): add Service + Offer JSON-LD to every bar service page"
```

---

## Task 4: Add hub JSON-LD schema

**Files:**
- Modify: `src/components/SeoHead.tsx`
- Modify: `src/pages/BarServicesHubPage.tsx`
- Test: `npx tsc --noEmit && npm run build`

**Interfaces:**
- Consumes: `BAR_SERVICES_HUB` groups and service list.
- Produces: Hub page emits `ProfessionalService` + `OfferCatalog` JSON-LD.

- [ ] **Step 1: Add hub schema helper**

In `src/components/SeoHead.tsx`, add:

```ts
export function professionalServiceSchema(
  url: string,
  image: string,
  services: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${url}#localbusiness`,
    name: 'MyChef Bar Services',
    image,
    url,
    telephone: '+62 896-7407-2020',
    priceRange: 'IDR 2,500,000 - IDR 132,000,000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denpasar Selatan',
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
    areaServed: [
      { '@type': 'State', name: 'Bali' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'B2B Bar Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: s.url },
      })),
    },
  }
}
```

- [ ] **Step 2: Wire into hub page**

In `src/pages/BarServicesHubPage.tsx`, import `professionalServiceSchema` and add it to `jsonLd`:

```tsx
jsonLd={[
  breadcrumbSchema('Bar Services', meta.canonical ?? `${SITE}/bar-services/`),
  professionalServiceSchema(
    meta.canonical ?? `${SITE}/bar-services/`,
    meta.ogImage ?? `${SITE}/generated/mychef-bar-services-bali-og-hub.jpg`,
    groupedServices.flatMap((g) => g.items.map((s) => ({ name: s.eyebrow, url: `${SITE}${s.route}` }))),
  ),
  serviceSchema(hero.h1, meta.description, meta.canonical ?? `${SITE}/bar-services/`),
  faqPageSchema(HUB_FAQS),
]}
```

- [ ] **Step 3: Verify build**

```bash
npx tsc --noEmit
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/SeoHead.tsx src/pages/BarServicesHubPage.tsx
git commit -m "seo(schema): add ProfessionalService + OfferCatalog JSON-LD to bar hub"
```

---

## Task 5: Create the six blueprint resource articles

**Files:**
- Modify: `src/data/bar-services/resources.ts`
- Create: `src/content/bar-services/resources/*.md` (six markdown files)
- Modify: `src/pages/BarServicesResourcePage.tsx` if it only accepts inline data
- Test: `npx tsc --noEmit && npm run build`

**Interfaces:**
- Consumes: Blueprint resource copy in `06-website-copy/`.
- Produces: Six published resource articles under `/bar-services/resources/<slug>/`.

- [ ] **Step 1: Create markdown content files**

Create one file per article in `src/content/bar-services/resources/`:
- `how-much-does-a-bartender-cost-bali.md`
- `bartender-salary-benchmarks-bali.md`
- `how-many-bartenders-per-guest.md`
- `beverage-cost-percentage-guide.md`
- `how-to-open-a-bar-in-bali.md`
- `how-to-create-a-cocktail-menu.md`

Use the copy from the blueprint. Include frontmatter:

```yaml
---
slug: how-much-does-a-bartender-cost-bali
title: How Much Does It Cost to Hire a Bartender in Bali? (2026 Guide)
h1: How Much Does a Bartender Cost in Bali?
description: Real 2026 prices for event bartenders in Bali — hourly rates, packages and hidden costs explained.
featuredImage: /generated/mychef-bar-services-bali-resource-how-much-does-a-bartender-cost-bali.webp
---
```

- [ ] **Step 2: Register articles in data file**

In `src/data/bar-services/resources.ts`, add a `BarResource` object for each new article pointing to the markdown file and related services/resources.

- [ ] **Step 3: Verify build**

```bash
npx tsc --noEmit
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/content/bar-services/resources src/data/bar-services/resources.ts
git commit -m "content(resources): add six blueprint bar-services resource articles"
```

---

## Task 6: Add homepage "Bar Services for Venues" block

**Files:**
- Modify: the homepage file (`src/pages/HomePage.tsx`, `src/components/LandingPage.tsx`, or equivalent)
- Test: `npx tsc --noEmit && npm run build`

**Interfaces:**
- Consumes: `BAR_SERVICES_HUB` groups.
- Produces: A new section on the homepage linking into the bar-services hub.

- [ ] **Step 1: Add section below existing chef hero/services**

Insert a new section near the bottom of the homepage before the footer, using the existing design language (serif headings, amber accents, white/stone backgrounds). Four cards:

```tsx
const BAR_CARDS = [
  { title: 'Consulting', href: '/bar-services/#consulting', description: 'Audit, costing, menu development, signatures and new bar setup.' },
  { title: 'Staffing', href: '/bar-services/#staffing', description: 'Temporary bartenders, permanent recruitment and equipment rental.' },
  { title: 'Management', href: '/bar-services/#management', description: 'Training and monthly fractional bar management support.' },
  { title: 'Flagship', href: '/bar-services/complete-bar-performance-programme/', description: 'The complete annual bar performance programme.' },
]
```

Include trust counters and a WhatsApp CTA.

- [ ] **Step 2: Add corresponding anchors to hub page**

In `src/pages/BarServicesHubPage.tsx`, add `id="consulting"`, `id="staffing"`, `id="management"`, `id="flagship"` to the service-group sections so the homepage cards scroll to them.

- [ ] **Step 3: Verify build**

```bash
npx tsc --noEmit
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/HomePage.tsx src/pages/BarServicesHubPage.tsx
git commit -m "feat(homepage): add Bar Services for Venues block with group anchors"
```

---

## Task 7: Strengthen internal linking

**Files:**
- Modify: `src/data/bar-services/services.ts`
- Modify: `src/components/Footer.tsx`
- Modify: `src/pages/BarServicesResourcesIndexPage.tsx`
- Test: `npx tsc --noEmit && npm run build`

**Interfaces:**
- Consumes: Blueprint internal-linking plan.
- Produces: Cross-links between services, resources, and footer segment anchors.

- [ ] **Step 1: Link services to resources**

For each service in `src/data/bar-services/services.ts`, ensure `relatedResources` includes the most relevant resource article(s) per the blueprint:
- TMP → how-much-does-a-bartender-cost-bali, how-many-bartenders-per-guest
- RCR → bartender-salary-benchmarks-bali
- CST → beverage-cost-percentage-guide
- SET → how-to-open-a-bar-in-bali
- MNU/SIG → how-to-create-a-cocktail-menu

- [ ] **Step 2: Wire footer segment links**

In `src/components/Footer.tsx`, add "Who we serve" links pointing to hub anchors:
- `/bar-services/#hotels`
- `/bar-services/#villas`
- `/bar-services/#beach-clubs`
- `/bar-services/#restaurants`
- `/bar-services/#events`

Add matching `id` attributes to the hub page sections if they don't exist.

- [ ] **Step 3: Link resources to services**

In `src/pages/BarServicesResourcesIndexPage.tsx`, ensure each resource card links to its primary service page and lists sibling resources.

- [ ] **Step 4: Verify build**

```bash
npx tsc --noEmit
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/data/bar-services/services.ts src/components/Footer.tsx src/pages/BarServicesResourcesIndexPage.tsx src/pages/BarServicesHubPage.tsx
git commit -m "feat(bar-services): strengthen internal links between services, resources and footer"
```

---

## Task 8: Final build, deploy and verify

**Files:**
- All changed files.

- [ ] **Step 1: Run full verification**

```bash
npx tsc --noEmit
npm run build
```

Expected: 281 routes prerendered, zero TypeScript errors.

- [ ] **Step 2: Push**

```bash
git push origin feature/bar-services
```

- [ ] **Step 3: Deploy to Vercel**

```bash
vercel --prod --yes
```

Expected: Production deployment aliases to `https://mychef.id`.

- [ ] **Step 4: Sanity-check live pages**

Open:
- https://mychef.id/bar-services/
- https://mychef.id/bar-services/temporary-bartender-staffing/
- https://mychef.id/bar-services/faq/
- https://mychef.id/bar-services/resources/

Confirm: no console errors, images load, FAQ accordion works, WhatsApp/form CTAs function.

---

## Spec coverage self-review

| Spec requirement | Task |
|---|---|
| Hub ~1,800 words | Task 1 |
| Service pages ≥1,000 words | Task 1 |
| FAQ 22 Q&As | Task 1 |
| Metadata alignment | Task 2 |
| Service + Offer schema | Task 3 |
| Hub ProfessionalService + OfferCatalog | Task 4 |
| Six resource articles | Task 5 |
| Homepage block | Task 6 |
| Internal linking | Task 7 |
| Build & deploy | Task 8 |

No placeholders. All file paths are exact. All tasks end with a verification step and a commit.
