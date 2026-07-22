# Bar Services Content Expansion & Navigation Simplification

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand all 22 `/bar-services/` pages to at least 1,000 words of unique keyword-optimized copy, add 3–4 images per page, and simplify navigation to a single footer link.

**Architecture:** Keep the existing data-driven component architecture (`src/data/bar-services/services.ts`, `src/pages/BarServicePage.tsx`, shared components in `src/components/bar-services/`). Extend the `BarService` type with new content fields, then render them in new/updated components. Generate images with OpenAI/BFL/Pollinations fallbacks and register dimensions in `src/lib/imageDimensions.ts`.

**Tech Stack:** React + TypeScript + Vite + Tailwind + Lucide + react-router-dom + Sharp (image processing).

## Global Constraints

- Every page must render at least 1,000 words of unique body copy (not counting nav/footer).
- No duplicated paragraphs across service pages.
- No location pages under `/bar-services/`.
- Primary keyword must appear in H1 and first paragraph; secondary keywords in H2/H3 and body.
- Images must be WebP/JPG, optimized, SEO-named, and registered in `src/lib/imageDimensions.ts`.
- Build, sitemap, redirects, and price-floor checks must pass before deploy.
- All changes on `feature/bar-services`; do not push without explicit instruction.

---

## File Map

| File | Responsibility |
|------|----------------|
| `src/data/bar-services/types.ts` | Extend `BarService` and `BarResource` types with new content/image fields. |
| `src/data/bar-services/services.ts` | Add expanded copy, extra images, and keywords for all 11 services. |
| `src/data/bar-services/resources.ts` | Add expanded copy and extra images for 7 resources + index. |
| `src/data/bar-services/hub.ts` | Add hub discovery layout + expanded copy. |
| `src/data/page-meta.ts` | Ensure meta titles/descriptions reflect keywords. |
| `src/components/bar-services/*.tsx` | New/revised components for expanded sections. |
| `src/pages/BarServicePage.tsx` | Render new service content sections. |
| `src/pages/BarServicesHubPage.tsx` | Render expanded hub with service discovery grid. |
| `src/pages/BarServicesFAQPage.tsx` | Render expanded FAQ page. |
| `src/pages/BarServicesContactPage.tsx` | Render expanded contact page. |
| `src/pages/BarServicesResourcesIndexPage.tsx` | Render expanded resources index. |
| `src/pages/BarServicesResourcePage.tsx` | Render expanded resource article. |
| `src/components/Navbar.tsx` | Remove Bar Services dropdown. |
| `src/components/Footer.tsx` | Replace Bar Services column with single "B2B Bar Service" link. |
| `scripts/generate-bar-services-images.ts` | Generate 3–4 images per page via OpenAI/BFL/Pollinations. |
| `scripts/generate-bar-services-images-fallback.ts` | Fallback image generator using existing assets. |
| `src/lib/imageDimensions.ts` | Register new image dimensions. |

---

### Task 1: Simplify Navigation & Footer

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/data/siteArchitecture.ts` (if needed for PRIMARY_NAV)

**Interfaces:**
- Consumes: `BAR_SERVICES_HUB`, `BAR_SERVICES` from `@/data/bar-services`.
- Produces: Navbar without Bar Services dropdown; footer with single "B2B Bar Service" link.

- [ ] **Step 1: Remove Bar Services from navbar**
  - In `src/components/Navbar.tsx`, remove the `Bar Services` item from `NAV_ITEMS` and remove `NAV_SUBPAGES['/bar-services/']` and `PILLAR_PREVIEW_IMAGES['/bar-services/']`.
  - Keep `Contact` and `Help` as they are.
  - Verify no TypeScript errors: `npx tsc --noEmit`

- [ ] **Step 2: Replace footer Bar Services column**
  - In `src/components/Footer.tsx`, remove the entire "Bar Services" column added earlier.
  - Add one link labelled "B2B Bar Service" pointing to `/bar-services/` in the secondary footer row or in an existing column (e.g., under "Company" or as a standalone link).
  - Keep the existing cross-links from `/bartender-hire-bali` and `/staffing/villa-managers` unchanged.

- [ ] **Step 3: Lint modified files**
  - Run: `npx eslint src/components/Navbar.tsx src/components/Footer.tsx`
  - Expected: no errors.

- [ ] **Step 4: Commit**
  - `git add src/components/Navbar.tsx src/components/Footer.tsx`
  - `git commit -m "refactor(bar-services): simplify nav to single footer link"`

---

### Task 2: Extend Data Types for Expanded Content

**Files:**
- Modify: `src/data/bar-services/types.ts`

**Interfaces:**
- Consumes: existing `BarService`, `BarResource`, `BarFAQ` interfaces.
- Produces: extended interfaces with new fields.

- [ ] **Step 1: Add expanded content fields to `BarService`**
  ```typescript
  interface BarService {
    // ... existing fields ...
    keywords: { primary: string; secondary: string[] }
    expandedSections: {
      whyBali: { title: string; paragraphs: string[] }
      whoFor: { title: string; items: { label: string; description: string }[] }
      commonMistakes: { title: string; items: string[] }
      compliance?: { title: string; paragraphs: string[] }
      successKpis: { title: string; items: string[] }
      connections: { title: string; paragraphs: string[] }
    }
    galleryImages: { src: string; alt: string }[] // 3-4 images
  }
  ```

- [ ] **Step 2: Add expanded content fields to `BarResource`**
  ```typescript
  interface BarResource {
    // ... existing fields ...
    keywords: { primary: string; secondary: string[] }
    expandedSections: {
      context: { title: string; paragraphs: string[] }
      deepDive: { title: string; paragraphs: string[] }
      mistakes: { title: string; items: string[] }
      actionableTips: { title: string; items: string[] }
    }
    galleryImages: { src: string; alt: string }[]
  }
  ```

- [ ] **Step 3: Type-check**
  - Run: `npx tsc --noEmit`
  - Expected: no new errors (existing files will error until data is updated).

- [ ] **Step 4: Commit**
  - `git add src/data/bar-services/types.ts`
  - `git commit -m "types(bar-services): add expanded content and gallery fields"`

---

### Task 3: Build New Content Components

**Files:**
- Create: `src/components/bar-services/BarServiceExpandedContent.tsx`
- Create: `src/components/bar-services/BarServiceGallery.tsx`
- Modify: `src/components/bar-services/index.ts`

**Interfaces:**
- Consumes: `BarService['expandedSections']`, `BarService['galleryImages']`.
- Produces: `<BarServiceExpandedContent />` and `<BarServiceGallery />` components.

- [ ] **Step 1: Create `BarServiceExpandedContent.tsx`**
  Render `whyBali`, `whoFor`, `commonMistakes`, `compliance`, `successKpis`, and `connections` sections with Tailwind styling consistent with existing components.

- [ ] **Step 2: Create `BarServiceGallery.tsx`**
  Render a 2-column grid of images using `OptimizedImage` with lazy loading and proper alt text.

- [ ] **Step 3: Export from barrel**
  - Add exports to `src/components/bar-services/index.ts`.

- [ ] **Step 4: Lint**
  - Run: `npx eslint src/components/bar-services/BarServiceExpandedContent.tsx src/components/bar-services/BarServiceGallery.tsx src/components/bar-services/index.ts`

- [ ] **Step 5: Commit**
  - `git commit -m "feat(bar-services): add expanded content and gallery components"`

---

### Task 4: Expand Hub Page Content & Discovery

**Files:**
- Modify: `src/data/bar-services/hub.ts`
- Modify: `src/pages/BarServicesHubPage.tsx`

**Interfaces:**
- Consumes: `BAR_SERVICES`, `BAR_RESOURCES`.
- Produces: Expanded hub copy and grouped service discovery grid.

- [ ] **Step 1: Expand `hub.ts`**
  - Add `expandedCopy` with at least 1,000 words covering: Bali bar market context, MyChef advantage, service groups, process, trust signals, CTA.
  - Add `galleryImages` for hub (3 images).

- [ ] **Step 2: Update `BarServicesHubPage.tsx`**
  - Render expanded copy sections.
  - Add a discovery grid showing all 11 services grouped by Consulting/Staffing/Management, plus FAQ, Contact, Resources cards.
  - Use `BarServiceGallery` for hub images.

- [ ] **Step 3: Verify word count**
  - Run: `npx tsx scripts/count-words.ts src/pages/BarServicesHubPage.tsx` (create a simple word-count script if needed).
  - Expected: ≥ 1,000 rendered words.

- [ ] **Step 4: Commit**
  - `git commit -m "feat(bar-services): expand hub page + add service discovery grid"`

---

### Task 5: Expand Service Pages Batch 1 (Training, Menu, Signature, Temp Staffing)

**Files:**
- Modify: `src/data/bar-services/services.ts`
- Modify: `src/pages/BarServicePage.tsx` (only if needed)

**Interfaces:**
- Consumes: blueprint copy from `06-website-copy/` and `04-service-design/`.
- Produces: Expanded service data for slugs: `bar-staff-training`, `cocktail-menu-development`, `signature-cocktail-creation`, `temporary-bartender-staffing`.

- [ ] **Step 1: Expand each service in `services.ts`**
  For each of the 4 services:
  - Fill `expandedSections` using blueprint content.
  - Ensure total rendered body copy ≥ 1,000 words.
  - Add `galleryImages` with 3 image paths/alt text.
  - Update `keywords.primary` and `keywords.secondary`.

- [ ] **Step 2: Wire components in `BarServicePage.tsx`**
  - Add `<BarServiceExpandedContent sections={service.expandedSections} />` and `<BarServiceGallery images={service.galleryImages} />` to the page template.

- [ ] **Step 3: Type-check**
  - Run: `npx tsc --noEmit`

- [ ] **Step 4: Commit**
  - `git commit -m "feat(bar-services): expand training, menu, signature, temp staffing pages"`

---

### Task 6: Expand Service Pages Batch 2 (Recruitment, Setup, Audit, Costing)

**Files:**
- Modify: `src/data/bar-services/services.ts`

**Interfaces:**
- Produces: Expanded data for `permanent-bar-staff-recruitment`, `new-bar-setup`, `bar-audit-improvement`, `bar-costing-inventory-control`.

- [ ] **Step 1: Expand each service**
  - Use blueprint page copy + service design docs to reach ≥ 1,000 words each.
  - Add `galleryImages` (3 per service).
  - Set keywords.

- [ ] **Step 2: Type-check and lint**
  - Run: `npx tsc --noEmit && npx eslint src/data/bar-services/services.ts`

- [ ] **Step 3: Commit**
  - `git commit -m "feat(bar-services): expand recruitment, setup, audit, costing pages"`

---

### Task 7: Expand Service Pages Batch 3 (Equipment, Monthly Support, Flagship)

**Files:**
- Modify: `src/data/bar-services/services.ts`

**Interfaces:**
- Produces: Expanded data for `bar-equipment-supply-rental`, `monthly-bar-management-support`, `complete-bar-performance-programme`.

- [ ] **Step 1: Expand each service**
  - Use blueprint to reach ≥ 1,000 words each.
  - Add `galleryImages` (3 per service).
  - Set keywords.

- [ ] **Step 2: Type-check and lint**
  - Run: `npx tsc --noEmit && npx eslint src/data/bar-services/services.ts`

- [ ] **Step 3: Commit**
  - `git commit -m "feat(bar-services): expand equipment, monthly support, flagship pages"`

---

### Task 8: Expand FAQ, Contact, Resources Index, and 7 Resource Pages

**Files:**
- Modify: `src/data/bar-services/resources.ts`
- Modify: `src/pages/BarServicesFAQPage.tsx`
- Modify: `src/pages/BarServicesContactPage.tsx`
- Modify: `src/pages/BarServicesResourcesIndexPage.tsx`
- Modify: `src/pages/BarServicesResourcePage.tsx`

**Interfaces:**
- Produces: Expanded copy and gallery images for FAQ, contact, resources index, and all resource articles.

- [ ] **Step 1: Expand resources data**
  - Add `expandedSections` and `galleryImages` to each resource.
  - Ensure each resource article ≥ 1,000 words.

- [ ] **Step 2: Expand FAQ page**
  - Add intro/context copy + trust signals + images to reach ≥ 1,000 words.

- [ ] **Step 3: Expand contact page**
  - Add service overview copy, what to expect, response time, coverage, images.

- [ ] **Step 4: Expand resources index**
  - Add descriptive copy for each resource and hub images.

- [ ] **Step 5: Commit**
  - `git commit -m "feat(bar-services): expand FAQ, contact, and resource pages"`

---

### Task 9: Generate Images (OpenAI → BFL → Pollinations → Fallback)

**Files:**
- Modify: `scripts/generate-bar-services-images.ts`
- Modify: `scripts/generate-bar-services-images-fallback.ts` (if needed)

**Interfaces:**
- Produces: ~66–88 new image files in `public/generated/`.

- [ ] **Step 1: Update image generator script**
  - Extend `scripts/generate-bar-services-images.ts` to generate 3 images per service page + hub/faq/contact/resources.
  - Write prompts that are realistic, on-brand, Bali venue context, no text overlays unless for OG.
  - Providers: OpenAI first, then BFL, then Pollinations.

- [ ] **Step 2: Run generator**
  - Run: `npx tsx scripts/generate-bar-services-images.ts`
  - Verify all expected files exist in `public/generated/`.

- [ ] **Step 3: Run fallback if needed**
  - If any images failed, run `npx tsx scripts/generate-bar-services-images-fallback.ts` to fill gaps from existing assets.

- [ ] **Step 4: Commit generated images**
  - `git add public/generated/mychef-bar-services-*`
  - `git commit -m "assets(bar-services): add expanded page images"`

---

### Task 10: Register Image Dimensions

**Files:**
- Modify: `src/lib/imageDimensions.ts`

**Interfaces:**
- Consumes: generated image paths.
- Produces: dimension entries for `OptimizedImage`.

- [ ] **Step 1: Add dimensions for all new images**
  - Use `npx tsx scripts/register-image-dimensions.ts` if it exists, or manually add entries for each new `public/generated/mychef-bar-services-*` file.
  - Include width, height, and placeholder.

- [ ] **Step 2: Validate**
  - Run: `npx tsx scripts/validate-image-dimensions.ts` if available, otherwise `npx tsc --noEmit`.

- [ ] **Step 3: Commit**
  - `git commit -m "chore(bar-services): register image dimensions"`

---

### Task 11: Validate Build & SEO

**Files:**
- All modified files.

- [ ] **Step 1: Run lint**
  - Run: `pnpm lint`
  - Note: pre-existing errors outside bar-services may remain; ensure no new errors.

- [ ] **Step 2: Run build**
  - Run: `pnpm build`
  - Expected: success, 280+ routes prerendered.

- [ ] **Step 3: Verify bar-services URLs**
  - Run: `grep -c "bar-services" public/sitemap.xml`
  - Expected: 22.

- [ ] **Step 4: Verify word counts**
  - Run a script or grep rendered HTML to confirm each page has substantial text.

- [ ] **Step 5: Commit any final fixes**
  - Commit as needed.

---

### Task 12: Deploy

**Files:**
- Branch `feature/bar-services`.

- [ ] **Step 1: Push to GitHub**
  - `git push origin feature/bar-services`

- [ ] **Step 2: Deploy to Vercel**
  - `vercel --prod --yes --non-interactive`
  - Wait for deployment URL and alias to `mychef.id`.

- [ ] **Step 3: Smoke test live pages**
  - Spot-check `https://mychef.id/bar-services/`, one service page, FAQ, and a resource page.

---

## Spec Coverage Check

| Spec Requirement | Task |
|-----------------|------|
| Single footer link "B2B Bar Service" | Task 1 |
| Remove navbar dropdown | Task 1 |
| Hub page surfaces all pages | Task 4 |
| ≥ 1,000 words per page | Tasks 4–8 |
| 3–4 images per page | Tasks 4–9 |
| Keyword optimization | Tasks 5–8 |
| OpenAI image generation with fallback | Task 9 |
| No location pages | Global constraint (already enforced) |
| Build/sitemap/price-floor pass | Task 11 |
| Deploy | Task 12 |

## Placeholder Scan

- No TBD/TODO/"implement later".
- Each task has exact files and commands.
- Code interfaces are specified.
