# Bar Services Pages Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize the existing B2B bar-services landing pages so navigation is cleaner, images are compressed and placed purposefully inside content sections, every page has a structured FAQ, and SEO titles/descriptions/headings are complete and consistent — without changing any URLs.

**Architecture:** Re-use the existing `BarService` data model and page component, add a reusable image-with-text section component, assign each service’s gallery images to logical sections, introduce a sticky sub-nav on bar-services pages, and compress all generated bar-services images. All changes are front-end only; routes and slugs stay unchanged.

**Tech Stack:** React + TypeScript + Vite + Tailwind CSS + React Router + `OptimizedImage` + `sharp` CLI for image compression.

## Global Constraints

- No URL, route, slug, or file-path changes for any bar-services page.
- Keep the main site navbar focus on private chef/catering; bar services remain discoverable through the footer `B2B Bar Service` link.
- Every bar-service page must keep at least 1,000 words of body copy and 3–4 images.
- Images must be integrated into relevant content sections, not left in a standalone random gallery band.
- Every page must keep its existing FAQ section with valid FAQPage schema.
- Heading hierarchy must be `H1 → H2 → H3` with exactly one `h1` per page.
- All meta titles ≤ 60 chars and descriptions ≤ 160 chars where possible.
- Build must pass (`npm run build`) and lint must be clean (`npm run lint`) before any deploy.
- Use only existing project dependencies; do not install new packages unless image compression requires `sharp` and it is not already available.

---

### Task 1: Audit current image assets and sizes

**Files:**
- Inspect: `public/generated/mychef-bar-services-bali-*.{webp,jpg}`
- Inspect: `src/data/bar-services/services.ts`
- Inspect: `src/data/bar-services/types.ts`

**Interfaces:**
- Consumes: existing `BarService` type and `BAR_SERVICES` array
- Produces: written audit list of image file sizes and current `galleryImages` mapping

- [x] **Step 1: List all bar-services image files with sizes**

```bash
cd /Users/openclaw/Movies/LIve\ website/master3mychef
find public/generated -name 'mychef-bar-services-bali-*' -type f -exec ls -lh {} \; | sort
```

Expected: a list of hero, body, gallery, and OG images with file sizes.

- [x] **Step 2: Record the current `galleryImages` assignments for every service**

Read `src/data/bar-services/services.ts` and list, for each service slug, which images are currently in `galleryImages`.

- [x] **Step 3: Commit the audit notes**

```bash
git add docs/superpowers/plans/2026-07-18-bar-services-optimization.md
git commit -m "docs: bar-services optimization plan and image audit"
```

## Task 1 Audit Results

### Summary

- **Total bar-services image files:** 120
- **All files match:** `public/generated/mychef-bar-services-bali-*.{webp,jpg}`
- **File types present:** `.webp` and `.jpg` only
- **Source code inspected:** `src/data/bar-services/services.ts`, `src/data/bar-services/types.ts`
- **Service entries in `BAR_SERVICES`:** 11

### File counts by category

| Category | Count | Notes |
|----------|-------|-------|
| Hero images (`-hero-*.webp`) | 13 | Includes `hub`, `contact`, and service heroes |
| Body images (`-body.webp`) | 11 | One per service in `BAR_SERVICES` + consultant |
| Gallery images (`-gallery-*.webp`) | 66 | 3 per slug across multiple slugs |
| OG images (`-og-*.jpg`) | 22 | Social/open-graph images |
| Resource images (`-resource-*.webp`) | 7 | Featured images for resource pages |
| Consultant image | 1 | `mychef-bar-services-bali-consultant.webp` |
| **Total** | **120** | — |

### Full file list (with sizes)

```
-rw-r--r--@ 1 openclaw  staff    22K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-bar-audit-improvement.jpg
-rw-r--r--@ 1 openclaw  staff    24K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-temporary-bartender-staffing.jpg
-rw-r--r--@ 1 openclaw  staff    25K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-faq.jpg
-rw-r--r--@ 1 openclaw  staff    25K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-hub.jpg
-rw-r--r--@ 1 openclaw  staff    25K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-new-bar-setup.jpg
-rw-r--r--@ 1 openclaw  staff    27K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-bar-staff-training.jpg
-rw-r--r--@ 1 openclaw  staff    27K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-how-much-does-a-bartender-cost-bali.jpg
-rw-r--r--@ 1 openclaw  staff    27K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-how-to-create-a-cocktail-menu.jpg
-rw-r--r--@ 1 openclaw  staff    27K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-how-to-open-a-bar-in-bali.jpg
-rw-r--r--@ 1 openclaw  staff    28K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-bar-equipment-supply-rental.jpg
-rw-r--r--@ 1 openclaw  staff    29K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-permanent-bar-staff-recruitment.jpg
-rw-r--r--@ 1 openclaw  staff    29K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-resources.jpg
-rw-r--r--@ 1 openclaw  staff    30K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-how-many-bartenders-per-guest.jpg
-rw-r--r--@ 1 openclaw  staff    30K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-how-to-reduce-bar-shrinkage-bali.jpg
-rw-r--r--@ 1 openclaw  staff    31K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-monthly-bar-management-support.jpg
-rw-r--r--@ 1 openclaw  staff    32K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-contact.jpg
-rw-r--r--@ 1 openclaw  staff    33K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-cocktail-menu-development.jpg
-rw-r--r--@ 1 openclaw  staff    33K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-complete-bar-performance-programme.jpg
-rw-r--r--@ 1 openclaw  staff    33K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-signature-cocktail-creation.jpg
-rw-r--r--@ 1 openclaw  staff    34K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-bartender-salary-benchmarks-bali.jpg
-rw-r--r--@ 1 openclaw  staff    34K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-beverage-cost-percentage-guide.jpg
-rw-r--r--@ 1 openclaw  staff    34K Jul 18 18:58 public/generated/mychef-bar-services-bali-resource-bartender-salary-benchmarks-bali.webp
-rw-r--r--@ 1 openclaw  staff    35K Jul 18 18:58 public/generated/mychef-bar-services-bali-og-bar-costing-inventory-control.jpg
-rw-r--r--@ 1 openclaw  staff    44K Jul 18 18:58 public/generated/mychef-bar-services-bali-consultant.webp
-rw-r--r--@ 1 openclaw  staff    44K Jul 18 18:58 public/generated/mychef-bar-services-bali-resource-beverage-cost-percentage-guide.webp
-rw-r--r--@ 1 openclaw  staff    44K Jul 18 22:07 public/generated/mychef-bar-services-bali-signature-cocktail-creation-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    47K Jul 18 18:58 public/generated/mychef-bar-services-bali-resource-how-much-does-a-bartender-cost-bali.webp
-rw-r--r--@ 1 openclaw  staff    47K Jul 18 18:58 public/generated/mychef-bar-services-bali-resource-how-to-create-a-cocktail-menu.webp
-rw-r--r--@ 1 openclaw  staff    48K Jul 18 18:58 public/generated/mychef-bar-services-bali-resource-how-to-reduce-bar-shrinkage-bali.webp
-rw-r--r--@ 1 openclaw  staff    49K Jul 18 22:13 public/generated/mychef-bar-services-bali-permanent-bar-staff-recruitment-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    50K Jul 18 22:00 public/generated/mychef-bar-services-bali-hub-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    50K Jul 18 22:41 public/generated/mychef-bar-services-bali-bartender-salary-benchmarks-bali-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    51K Jul 18 22:20 public/generated/mychef-bar-services-bali-bar-audit-improvement-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    52K Jul 18 18:58 public/generated/mychef-bar-services-bali-monthly-bar-management-support-body.webp
-rw-r--r--@ 1 openclaw  staff    52K Jul 18 22:46 public/generated/mychef-bar-services-bali-beverage-cost-percentage-guide-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    52K Jul 18 22:50 public/generated/mychef-bar-services-bali-how-to-create-a-cocktail-menu-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    53K Jul 18 18:58 public/generated/mychef-bar-services-bali-resource-how-to-open-a-bar-in-bali.webp
-rw-r--r--@ 1 openclaw  staff    53K Jul 18 22:36 public/generated/mychef-bar-services-bali-contact-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    53K Jul 18 22:38 public/generated/mychef-bar-services-bali-resources-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    55K Jul 18 18:58 public/generated/mychef-bar-services-bali-cocktail-menu-development-body.webp
-rw-r--r--@ 1 openclaw  staff    55K Jul 18 22:12 public/generated/mychef-bar-services-bali-permanent-bar-staff-recruitment-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    55K Jul 18 22:15 public/generated/mychef-bar-services-bali-permanent-bar-staff-recruitment-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    55K Jul 18 22:46 public/generated/mychef-bar-services-bali-beverage-cost-percentage-guide-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    56K Jul 18 18:58 public/generated/mychef-bar-services-bali-new-bar-setup-body.webp
-rw-r--r--@ 1 openclaw  staff    56K Jul 18 22:35 public/generated/mychef-bar-services-bali-contact-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    57K Jul 18 22:10 public/generated/mychef-bar-services-bali-temporary-bartender-staffing-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    57K Jul 18 22:19 public/generated/mychef-bar-services-bali-bar-audit-improvement-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    58K Jul 18 21:59 public/generated/mychef-bar-services-bali-hub-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    58K Jul 18 22:07 public/generated/mychef-bar-services-bali-cocktail-menu-development-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    58K Jul 18 22:47 public/generated/mychef-bar-services-bali-beverage-cost-percentage-guide-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    59K Jul 18 22:34 public/generated/mychef-bar-services-bali-contact-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    59K Jul 18 22:37 public/generated/mychef-bar-services-bali-resources-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    59K Jul 18 22:40 public/generated/mychef-bar-services-bali-how-much-does-a-bartender-cost-bali-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    60K Jul 18 22:09 public/generated/mychef-bar-services-bali-signature-cocktail-creation-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    60K Jul 18 22:34 public/generated/mychef-bar-services-bali-faq-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    60K Jul 18 22:43 public/generated/mychef-bar-services-bali-bartender-salary-benchmarks-bali-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    61K Jul 18 22:52 public/generated/mychef-bar-services-bali-how-to-create-a-cocktail-menu-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    62K Jul 18 18:58 public/generated/mychef-bar-services-bali-bar-audit-improvement-body.webp
-rw-r--r--@ 1 openclaw  staff    62K Jul 18 22:44 public/generated/mychef-bar-services-bali-how-many-bartenders-per-guest-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    63K Jul 18 18:58 public/generated/mychef-bar-services-bali-signature-cocktail-creation-body.webp
-rw-r--r--@ 1 openclaw  staff    63K Jul 18 22:02 public/generated/mychef-bar-services-bali-bar-staff-training-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    63K Jul 18 22:03 public/generated/mychef-bar-services-bali-cocktail-menu-development-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    63K Jul 18 22:04 public/generated/mychef-bar-services-bali-cocktail-menu-development-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    64K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-bar-equipment-supply-rental.webp
-rw-r--r--@ 1 openclaw  staff    64K Jul 18 22:24 public/generated/mychef-bar-services-bali-bar-costing-inventory-control-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    64K Jul 18 22:24 public/generated/mychef-bar-services-bali-bar-costing-inventory-control-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    64K Jul 18 22:32 public/generated/mychef-bar-services-bali-faq-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    64K Jul 18 22:40 public/generated/mychef-bar-services-bali-how-much-does-a-bartender-cost-bali-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    64K Jul 18 22:54 public/generated/mychef-bar-services-bali-how-to-reduce-bar-shrinkage-bali-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    65K Jul 18 22:08 public/generated/mychef-bar-services-bali-signature-cocktail-creation-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    65K Jul 18 22:28 public/generated/mychef-bar-services-bali-monthly-bar-management-support-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    66K Jul 18 22:27 public/generated/mychef-bar-services-bali-monthly-bar-management-support-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    66K Jul 18 22:42 public/generated/mychef-bar-services-bali-bartender-salary-benchmarks-bali-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    68K Jul 18 22:22 public/generated/mychef-bar-services-bali-bar-audit-improvement-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    68K Jul 18 22:33 public/generated/mychef-bar-services-bali-faq-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    68K Jul 18 22:45 public/generated/mychef-bar-services-bali-how-many-bartenders-per-guest-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    68K Jul 18 22:52 public/generated/mychef-bar-services-bali-how-to-reduce-bar-shrinkage-bali-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    69K Jul 18 18:58 public/generated/mychef-bar-services-bali-complete-bar-performance-programme-body.webp
-rw-r--r--@ 1 openclaw  staff    70K Jul 18 22:03 public/generated/mychef-bar-services-bali-bar-staff-training-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    70K Jul 18 22:23 public/generated/mychef-bar-services-bali-bar-costing-inventory-control-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    71K Jul 18 18:58 public/generated/mychef-bar-services-bali-bar-costing-inventory-control-body.webp
-rw-r--r--@ 1 openclaw  staff    71K Jul 18 18:58 public/generated/mychef-bar-services-bali-bar-staff-training-body.webp
-rw-r--r--@ 1 openclaw  staff    71K Jul 18 21:59 public/generated/mychef-bar-services-bali-hub-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    71K Jul 18 22:01 public/generated/mychef-bar-services-bali-bar-staff-training-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    71K Jul 18 22:43 public/generated/mychef-bar-services-bali-how-many-bartenders-per-guest-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    72K Jul 18 22:51 public/generated/mychef-bar-services-bali-how-to-create-a-cocktail-menu-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    73K Jul 18 18:58 public/generated/mychef-bar-services-bali-contact-hero.webp
-rw-r--r--@ 1 openclaw  staff    73K Jul 18 22:09 public/generated/mychef-bar-services-bali-temporary-bartender-staffing-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    73K Jul 18 22:26 public/generated/mychef-bar-services-bali-bar-equipment-supply-rental-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    73K Jul 18 22:53 public/generated/mychef-bar-services-bali-how-to-reduce-bar-shrinkage-bali-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    74K Jul 18 22:31 public/generated/mychef-bar-services-bali-complete-bar-performance-programme-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    74K Jul 18 22:37 public/generated/mychef-bar-services-bali-resources-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    75K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-monthly-bar-management-support.webp
-rw-r--r--@ 1 openclaw  staff    75K Jul 18 18:58 public/generated/mychef-bar-services-bali-permanent-bar-staff-recruitment-body.webp
-rw-r--r--@ 1 openclaw  staff    75K Jul 18 18:58 public/generated/mychef-bar-services-bali-temporary-bartender-staffing-body.webp
-rw-r--r--@ 1 openclaw  staff    76K Jul 18 22:11 public/generated/mychef-bar-services-bali-temporary-bartender-staffing-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    76K Jul 18 22:30 public/generated/mychef-bar-services-bali-complete-bar-performance-programme-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    77K Jul 18 22:29 public/generated/mychef-bar-services-bali-monthly-bar-management-support-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    77K Jul 18 22:31 public/generated/mychef-bar-services-bali-complete-bar-performance-programme-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    77K Jul 18 22:49 public/generated/mychef-bar-services-bali-how-to-open-a-bar-in-bali-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    82K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-new-bar-setup.webp
-rw-r--r--@ 1 openclaw  staff    82K Jul 18 22:17 public/generated/mychef-bar-services-bali-new-bar-setup-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    83K Jul 18 22:27 public/generated/mychef-bar-services-bali-bar-equipment-supply-rental-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    84K Jul 18 18:58 public/generated/mychef-bar-services-bali-resource-how-many-bartenders-per-guest.webp
-rw-r--r--@ 1 openclaw  staff    84K Jul 18 22:39 public/generated/mychef-bar-services-bali-how-much-does-a-bartender-cost-bali-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    85K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-bar-audit-improvement.webp
-rw-r--r--@ 1 openclaw  staff    85K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-bar-costing-inventory-control.webp
-rw-r--r--@ 1 openclaw  staff    85K Jul 18 22:16 public/generated/mychef-bar-services-bali-new-bar-setup-gallery-2.webp
-rw-r--r--@ 1 openclaw  staff    86K Jul 18 22:48 public/generated/mychef-bar-services-bali-how-to-open-a-bar-in-bali-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    86K Jul 18 22:49 public/generated/mychef-bar-services-bali-how-to-open-a-bar-in-bali-gallery-3.webp
-rw-r--r--@ 1 openclaw  staff    87K Jul 18 22:25 public/generated/mychef-bar-services-bali-bar-equipment-supply-rental-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    90K Jul 18 22:15 public/generated/mychef-bar-services-bali-new-bar-setup-gallery-1.webp
-rw-r--r--@ 1 openclaw  staff    95K Jul 18 18:58 public/generated/mychef-bar-services-bali-bar-equipment-supply-rental-body.webp
-rw-r--r--@ 1 openclaw  staff    96K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-permanent-bar-staff-recruitment.webp
-rw-r--r--@ 1 openclaw  staff   105K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-bar-staff-training.webp
-rw-r--r--@ 1 openclaw  staff   105K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-hub.webp
-rw-r--r--@ 1 openclaw  staff   106K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-cocktail-menu-development.webp
-rw-r--r--@ 1 openclaw  staff   118K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-temporary-bartender-staffing.webp
-rw-r--r--@ 1 openclaw  staff   124K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-signature-cocktail-creation.webp
-rw-r--r--@ 1 openclaw  staff   135K Jul 18 18:58 public/generated/mychef-bar-services-bali-hero-complete-bar-performance-programme.webp
```

### Current `galleryImages` mapping per service

All 11 entries in `BAR_SERVICES` (`src/data/bar-services/services.ts`) define a `galleryImages` array. Each has exactly 3 gallery images.

#### 1. `bar-staff-training`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-bar-staff-training-gallery-1.webp', alt: 'Indonesian bartenders practising measured pours during a MyChef training session in Bali' },
  { src: '/generated/mychef-bar-services-bali-bar-staff-training-gallery-2.webp', alt: 'Trainer demonstrating cocktail build technique behind a venue bar in Bali' },
  { src: '/generated/mychef-bar-services-bali-bar-staff-training-gallery-3.webp', alt: 'Bar team receiving MyChef certificates after completing responsible service training' }
]
```

#### 2. `cocktail-menu-development`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-cocktail-menu-development-gallery-1.webp', alt: 'MyChef mixologist cost-testing a new cocktail recipe on a Bali venue bar' },
  { src: '/generated/mychef-bar-services-bali-cocktail-menu-development-gallery-2.webp', alt: 'Photo-illustrated cocktail spec sheets spread across a bar counter in Bali' },
  { src: '/generated/mychef-bar-services-bali-cocktail-menu-development-gallery-3.webp', alt: 'Bartenders executing a newly launched cocktail menu during team training' }
]
```

#### 3. `signature-cocktail-creation`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-signature-cocktail-creation-gallery-1.webp', alt: 'Bespoke signature cocktail being garnished for a Bali beach club tasting panel' },
  { src: '/generated/mychef-bar-services-bali-signature-cocktail-creation-gallery-2.webp', alt: 'Professional photo session of a named signature serve with story card' },
  { src: '/generated/mychef-bar-services-bali-signature-cocktail-creation-gallery-3.webp', alt: 'Wedding couple\'s signature cocktail being poured at a Bali reception bar' }
]
```

#### 4. `temporary-bartender-staffing`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-temporary-bartender-staffing-gallery-1.webp', alt: 'Uniformed MyChef bartenders setting up an event bar before a Bali wedding' },
  { src: '/generated/mychef-bar-services-bali-temporary-bartender-staffing-gallery-2.webp', alt: 'MyChef supervisor briefing a temporary bar crew at a Bali beach club event' },
  { src: '/generated/mychef-bar-services-bali-temporary-bartender-staffing-gallery-3.webp', alt: 'Temporary bartender pouring cocktails at a high-volume Bali reception' }
]
```

#### 5. `permanent-bar-staff-recruitment`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-permanent-bar-staff-recruitment-gallery-1.webp', alt: 'Bali bartender completing a timed practical trial during a MyChef recruitment assessment' },
  { src: '/generated/mychef-bar-services-bali-permanent-bar-staff-recruitment-gallery-2.webp', alt: 'Bar manager interviewing a trade-tested candidate with trial scores in a Bali venue' },
  { src: '/generated/mychef-bar-services-bali-permanent-bar-staff-recruitment-gallery-3.webp', alt: 'Newly placed MyChef bartender receiving onboarding documents and a responsible-service briefing' }
]
```

#### 6. `new-bar-setup`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-new-bar-setup-gallery-1.webp', alt: 'New Bali restaurant bar being fitted out before opening under MyChef supervision' },
  { src: '/generated/mychef-bar-services-bali-new-bar-setup-gallery-2.webp', alt: 'Scaled bar layout plan and equipment specification on a venue desk' },
  { src: '/generated/mychef-bar-services-bali-new-bar-setup-gallery-3.webp', alt: 'MyChef bar lead coaching opening-week staff behind a newly launched Bali bar' }
]
```

#### 7. `bar-audit-improvement`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-bar-audit-improvement-gallery-1.webp', alt: 'MyChef auditor reviewing bar inventory records and label-edar stickers at a Bali venue' },
  { src: '/generated/mychef-bar-services-bali-bar-audit-improvement-gallery-2.webp', alt: 'Mystery guest assessing cocktail build quality during an anonymous bar audit in Bali' },
  { src: '/generated/mychef-bar-services-bali-bar-audit-improvement-gallery-3.webp', alt: 'Senior bar consultant presenting a board-ready audit report to a Bali venue owner' }
]
```

#### 8. `bar-costing-inventory-control`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-bar-costing-inventory-control-gallery-1.webp', alt: 'Bar manager reviewing recipe costing cards and par levels at a Bali bar' },
  { src: '/generated/mychef-bar-services-bali-bar-costing-inventory-control-gallery-2.webp', alt: 'MyChef consultant supervising a baseline stocktake behind a Bali venue bar' },
  { src: '/generated/mychef-bar-services-bali-bar-costing-inventory-control-gallery-3.webp', alt: 'Bar team training on variance tolerance bands and count sheets during costing rollout' }
]
```

#### 9. `bar-equipment-supply-rental`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-bar-equipment-supply-rental-gallery-1.webp', alt: 'Mobile bar unit and glassware being prepared for a Bali wedding rental delivery' },
  { src: '/generated/mychef-bar-services-bali-bar-equipment-supply-rental-gallery-2.webp', alt: 'Professional bartender tool kits laid out for inventory check before an event' },
  { src: '/generated/mychef-bar-services-bali-bar-equipment-supply-rental-gallery-3.webp', alt: 'MyChef team delivering and setting up a mobile bar at a Bali villa event' }
]
```

#### 10. `monthly-bar-management-support`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-monthly-bar-management-support-gallery-1.webp', alt: 'MyChef bar manager reviewing KPIs with a Bali venue owner over a one-page report' },
  { src: '/generated/mychef-bar-services-bali-monthly-bar-management-support-gallery-2.webp', alt: 'Bar manager supervising a monthly stocktake behind a Bali restaurant bar' },
  { src: '/generated/mychef-bar-services-bali-monthly-bar-management-support-gallery-3.webp', alt: 'Monthly training refresher on pour standards with a Bali bar team' }
]
```

#### 11. `complete-bar-performance-programme`

```ts
galleryImages: [
  { src: '/generated/mychef-bar-services-bali-complete-bar-performance-programme-gallery-1.webp', alt: 'Bali venue leadership team reviewing a quarterly bar scorecard with MyChef' },
  { src: '/generated/mychef-bar-services-bali-complete-bar-performance-programme-gallery-2.webp', alt: 'Bartenders executing a newly launched cocktail menu behind a Bali bar' },
  { src: '/generated/mychef-bar-services-bali-complete-bar-performance-programme-gallery-3.webp', alt: 'MyChef programme director presenting an annual rupiah impact summary to an owner' }
]
```

### Observations / Concerns

1. **Orphan gallery images exist for slugs not in `BAR_SERVICES`.**
   The following slugs have generated gallery/hero/body/OG images but are not listed as services in `BAR_SERVICES`:
   - `hub`
   - `contact`
   - `faq`
   - `resources`
   - `bartender-salary-benchmarks-bali`
   - `beverage-cost-percentage-guide`
   - `how-many-bartenders-per-guest`
   - `how-much-does-a-bartender-cost-bali`
   - `how-to-create-a-cocktail-menu`
   - `how-to-open-a-bar-in-bali`
   - `how-to-reduce-bar-shrinkage-bali`

   These are likely hub/resource/contact pages defined elsewhere, but Task 1 only audited `BAR_SERVICES` gallery mapping. If those pages also expect `galleryImages`, their mapping is in separate data files and was not inspected here.

2. **All 11 `BAR_SERVICES` entries have exactly 3 gallery images.**
   No service has a missing or oversized `galleryImages` array.

3. **File sizes are reasonable for web delivery.**
   - Smallest: 22K (OG images)
   - Largest hero: 135K (`complete-bar-performance-programme`)
   - Largest gallery: 90K (`new-bar-setup-gallery-1`)
   - All images are under 150KB.

4. **No source code was modified.**
   This audit only read files and recorded findings.

---

### Task 2: Create a reusable image-with-text section component

**Files:**
- Create: `src/components/bar-services/BarServiceImageSection.tsx`
- Modify: `src/components/bar-services/index.ts` to export it

**Interfaces:**
- Consumes: `OptimizedImage` component and Tailwind utilities
- Produces: `BarServiceImageSection` component with props:
  ```ts
  interface BarServiceImageSectionProps {
    image: { src: string; alt: string }
    children: React.ReactNode
    imagePosition?: 'left' | 'right'
    bgColor?: 'white' | 'stone'
  }
  ```

- [ ] **Step 1: Write the component**

```tsx
import OptimizedImage from '@/components/OptimizedImage'

export interface BarServiceImageSectionProps {
  image: { src: string; alt: string }
  children: React.ReactNode
  imagePosition?: 'left' | 'right'
  bgColor?: 'white' | 'stone'
}

export function BarServiceImageSection({
  image,
  children,
  imagePosition = 'right',
  bgColor = 'white',
}: BarServiceImageSectionProps) {
  const bgClass = bgColor === 'stone' ? 'bg-stone-50' : 'bg-white'
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
  const contentOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1'

  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${bgClass}`}>
      <div className={`${contentOrder}`}>{children}</div>
      <div className={`${imageOrder}`}>
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Export it from the bar-services index**

Add to `src/components/bar-services/index.ts`:

```ts
export { BarServiceImageSection } from './BarServiceImageSection'
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/bar-services/BarServiceImageSection.tsx src/components/bar-services/index.ts
git commit -m "feat: reusable BarServiceImageSection component"
```

---

### Task 3: Add bar-services sticky sub-navigation

**Files:**
- Create: `src/components/bar-services/BarServiceSubNav.tsx`
- Modify: `src/pages/BarServicePage.tsx` to render it below the hero
- Modify: `src/pages/BarServicesHubPage.tsx` to render it below the hero

**Interfaces:**
- Consumes: `BAR_SERVICES` array and `BarServiceGroup` from `src/data/bar-services/hub.ts`
- Produces: sticky sub-nav component that links to each bar-service page

- [ ] **Step 1: Write the sub-nav component**

```tsx
import { Link, useLocation } from 'react-router-dom'
import { BAR_SERVICES } from '@/data/bar-services'

const GROUPS = [
  {
    label: 'Training & Menus',
    slugs: ['bar-staff-training', 'cocktail-menu-development', 'signature-cocktail-creation'],
  },
  {
    label: 'Staffing',
    slugs: ['temporary-bartender-staffing', 'permanent-bar-staff-recruitment'],
  },
  {
    label: 'Operations',
    slugs: [
      'new-bar-setup',
      'bar-audit-improvement',
      'bar-costing-inventory-control',
      'bar-equipment-supply-rental',
      'monthly-bar-management-support',
      'complete-bar-performance-programme',
    ],
  },
]

export function BarServiceSubNav() {
  const { pathname } = useLocation()

  return (
    <div className="sticky top-[52px] z-40 bg-[#0F0E0C]/95 border-b border-[#C5A028]/15 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2">
        <nav aria-label="Bar services" className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <Link
            to="/bar-services/"
            className={`text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-colors ${
              pathname === '/bar-services/' ? 'text-[#C5A028]' : 'text-white/70 hover:text-[#C5A028]'
            }`}
          >
            Overview
          </Link>
          {GROUPS.map((group) => (
            <div key={group.label} className="flex items-center gap-3 border-l border-white/10 pl-4">
              <span className="text-[10px] uppercase tracking-wider text-[#C5A028]/70 whitespace-nowrap">
                {group.label}
              </span>
              {group.slugs.map((slug) => {
                const service = BAR_SERVICES.find((s) => s.slug === slug)
                if (!service) return null
                const active = pathname === service.route
                return (
                  <Link
                    key={slug}
                    to={service.route}
                    className={`text-xs whitespace-nowrap transition-colors ${
                      active ? 'text-[#C5A028]' : 'text-white/70 hover:text-[#C5A028]'
                    }`}
                  >
                    {service.eyebrow}
                  </Link>
                )
              })}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Add to `BarServicePage.tsx` after the hero**

```tsx
import { BarServiceSubNav } from '@/components/bar-services'

// inside the return, after <BarServiceHero service={service} />:
<BarServiceSubNav />
```

- [ ] **Step 3: Add to `BarServicesHubPage.tsx` after the hero**

Same import and placement as in `BarServicePage.tsx`.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: build completes without errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/bar-services/BarServiceSubNav.tsx src/pages/BarServicePage.tsx src/pages/BarServicesHubPage.tsx
git commit -m "feat: sticky bar-services sub-navigation"
```

---

### Task 4: Update BarService types to support section images

**Files:**
- Modify: `src/data/bar-services/types.ts`

**Interfaces:**
- Consumes: existing `BarService` interface
- Produces: updated `BarService` with optional image fields on major sections

- [ ] **Step 1: Add section image fields to the type**

Add these optional fields to `BarService` after `bodyAlt`:

```ts
  problemImage?: string
  problemAlt?: string
  deliverablesImage?: string
  deliverablesAlt?: string
  processImage?: string
  processAlt?: string
  proofImage?: string
  proofAlt?: string
```

Keep `galleryImages` for any pages that still need it, but mark it as deprecated in a comment.

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/bar-services/types.ts
git commit -m "types: section image fields on BarService"
```

---

### Task 5: Reorganize section components to use images and H2 headings

**Files:**
- Modify: `src/components/bar-services/BarServiceProblem.tsx`
- Modify: `src/components/bar-services/BarServiceDeliverables.tsx`
- Modify: `src/components/bar-services/BarServiceProcess.tsx`
- Modify: `src/components/bar-services/BarServiceProof.tsx`
- Modify: `src/components/bar-services/BarServiceIncluded.tsx`
- Modify: `src/components/bar-services/BarServiceExpandedContent.tsx`
- Modify: `src/components/bar-services/BarServiceSectionHeader.tsx`

**Interfaces:**
- Consumes: `BarServiceImageSection` from Task 2, updated types from Task 4
- Produces: section components that accept optional images and render `h2` titles

- [ ] **Step 1: Update `BarServiceSectionHeader` to render `h2` by default**

```tsx
import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: string
  children?: ReactNode
  as?: 'h2' | 'h3'
}

export function BarServiceSectionHeader({ eyebrow, title, children, as: Tag = 'h2' }: Props) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <span className="text-sm uppercase tracking-widest text-amber-600 block mb-2">{eyebrow}</span>
      )}
      <Tag className="text-3xl md:text-4xl font-serif text-gray-900">{title}</Tag>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
```

- [ ] **Step 2: Update `BarServiceProblem` to accept and use an image**

```tsx
import { BarServiceImageSection } from './BarServiceImageSection'

interface Props {
  problem: BarService['problem']
  image?: { src: string; alt: string }
}

export function BarServiceProblem({ problem, image }: Props) {
  const content = (
    <>
      <BarServiceSectionHeader title={problem.title} />
      <div className="max-w-3xl space-y-4 text-gray-700">
        {problem.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  )

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {image ? (
          <BarServiceImageSection image={image} imagePosition="right">
            {content}
          </BarServiceImageSection>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Update `BarServiceDeliverables` similarly**

Accept `image?: { src: string; alt: string }`, wrap the existing grid in `BarServiceImageSection` when an image is provided, and use `BarServiceSectionHeader` with `eyebrow="What you get" title="What we deliver"`.

- [ ] **Step 4: Update `BarServiceProcess` similarly**

Accept `image?: { src: string; alt: string }`, wrap the step list in `BarServiceImageSection` when an image is provided.

- [ ] **Step 5: Update `BarServiceProof` similarly**

Accept `image?: { src: string; alt: string }`, wrap proof items in `BarServiceImageSection` when an image is provided.

- [ ] **Step 6: Update `BarServiceIncluded` to use `h2` title**

Add a `BarServiceSectionHeader` title (e.g., "What’s included") and keep the included list as-is.

- [ ] **Step 7: Update `BarServiceExpandedContent` to accept images and place them per section**

Add optional `images?: Partial<Record<'whyBali' | 'whoFor' | 'commonMistakes' | 'successKpis' | 'connections', { src: string; alt: string }>>` prop. For each expanded section, if an image exists, render it inside the section using `BarServiceImageSection` with `imagePosition` alternating left/right.

- [ ] **Step 8: Verify TypeScript and build**

```bash
npx tsc --noEmit && npm run build
```

Expected: no errors.

- [ ] **Step 9: Commit**

```bash
git add src/components/bar-services/
git commit -m "feat: section components accept images and render h2 headings"
```

---

### Task 6: Assign images to sections in `services.ts`

**Files:**
- Modify: `src/data/bar-services/services.ts`

**Interfaces:**
- Consumes: existing `BAR_SERVICES` data, image files in `public/generated/`
- Produces: each service has `problemImage`, `deliverablesImage`, `processImage`, `proofImage` (and optional expanded-section images) populated from the existing gallery set

- [ ] **Step 1: For each service, map its existing gallery images to logical sections**

Using the audit from Task 1, assign:
- `galleryImages[0]` → `problemImage`
- `galleryImages[1]` → `deliverablesImage`
- `galleryImages[2]` → `processImage`
- `galleryImages[3]` (if exists) → `proofImage`

Keep `galleryImages` as a fallback but no longer render it on the page.

Example for `bar-staff-training`:

```ts
{
  slug: 'bar-staff-training',
  // ... existing fields ...
  problemImage: '/generated/mychef-bar-services-bali-bar-staff-training-gallery-1.webp',
  problemAlt: 'Bali bar team during a practical training session',
  deliverablesImage: '/generated/mychef-bar-services-bali-bar-staff-training-gallery-2.webp',
  deliverablesAlt: 'Bartender practising cocktail shaking in a villa bar',
  processImage: '/generated/mychef-bar-services-bali-bar-staff-training-gallery-3.webp',
  processAlt: 'Trainer reviewing recipes with bar staff in Bali',
}
```

Repeat for all 11 services.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: build completes.

- [ ] **Step 3: Commit**

```bash
git add src/data/bar-services/services.ts
git commit -m "data: assign gallery images to specific content sections"
```

---

### Task 7: Rebuild `BarServicePage.tsx` layout and wire section images

**Files:**
- Modify: `src/pages/BarServicePage.tsx`

**Interfaces:**
- Consumes: updated section components, `BarServiceSubNav`, section images from service data
- Produces: page renders hero, sub-nav, problem, deliverables, process, included, proof, expanded content, quote, cross-sells, FAQ, resources, enquiry form, lead magnet

- [ ] **Step 1: Update the page return to pass images into each section**

```tsx
<BarServiceSubNav />
<BarServiceProblem problem={service.problem} image={service.problemImage ? { src: service.problemImage, alt: service.problemAlt || '' } : undefined} />
<BarServiceDeliverables deliverables={service.deliverables} image={service.deliverablesImage ? { src: service.deliverablesImage, alt: service.deliverablesAlt || '' } : undefined} />
<BarServiceProcess process={service.process} image={service.processImage ? { src: service.processImage, alt: service.processAlt || '' } : undefined} />
<BarServiceIncluded included={service.included} />
<BarServiceProof proof={service.proof} image={service.proofImage ? { src: service.proofImage, alt: service.proofAlt || '' } : undefined} />
{service.expandedSections && (
  <BarServiceExpandedContent sections={service.expandedSections} images={service.expandedImages} />
)}
<BarServiceQuoteBlock service={service} />
<BarServiceCrossSells slugs={service.relatedServices} />
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-serif mb-8">Frequently asked questions</h2>
    <FAQAccordion items={service.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
  </div>
</section>
```

Remove the old `BarServiceGallery` block.

- [ ] **Step 2: Verify TypeScript and build**

```bash
npx tsc --noEmit && npm run build
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/BarServicePage.tsx
git commit -m "feat: wire section images and sub-nav into bar service page"
```

---

### Task 8: Improve FAQ copy and add service-specific FAQs

**Files:**
- Modify: `src/data/bar-services/services.ts`

**Interfaces:**
- Consumes: existing `faqs` array on each service
- Produces: each service has 5–8 relevant FAQs with answers ≥ 40 words

- [ ] **Step 1: Review and expand FAQs per service**

For each of the 11 services, ensure there are at least 5 FAQs covering:
1. Who the service is for
2. What is included
3. Pricing model / how quotes work
4. Timeline / turnaround
5. How to start / next step

Keep answers specific to the service; do not duplicate generic answers verbatim across services.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: build completes.

- [ ] **Step 3: Commit**

```bash
git add src/data/bar-services/services.ts
git commit -m "content: expand service-specific FAQs"
```

---

### Task 9: Optimize image file sizes

**Files:**
- Modify: `public/generated/mychef-bar-services-bali-*.{webp,jpg}` in place
- Create: `scripts/optimize-bar-images.sh` or `scripts/optimize-bar-images.ts`

**Interfaces:**
- Consumes: original image files
- Produces: smaller, visually equivalent image files

- [ ] **Step 1: Check available image tools**

```bash
which cwebp
which sharp
npx sharp --version 2>/dev/null || true
```

- [ ] **Step 2: Create an optimization script using `sharp` if available, else `cwebp`**

If `sharp` is installed:

```ts
// scripts/optimize-bar-images.ts
import sharp from 'sharp'
import { glob } from 'glob'
import fs from 'fs/promises'
import path from 'path'

async function main() {
  const files = await glob('public/generated/mychef-bar-services-bali-*.{webp,jpg,jpeg}', { absolute: true })
  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    const tmp = `${file}.tmp${ext}`
    const pipeline = sharp(file)
    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 80, progressive: true }).toFile(tmp)
    } else {
      await pipeline.resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80, effort: 4 }).toFile(tmp)
    }
    const originalSize = (await fs.stat(file)).size
    const newSize = (await fs.stat(tmp)).size
    await fs.rename(tmp, file)
    console.log(`${path.basename(file)}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB`)
  }
}

main().catch(console.error)
```

If `sharp` is not available, use `cwebp`:

```bash
#!/bin/bash
# scripts/optimize-bar-images.sh
find public/generated -name 'mychef-bar-services-bali-*.webp' -type f -print0 | while IFS= read -r -d '' file; do
  cwebp -q 80 -mt "$file" -o "${file}.tmp"
  mv "${file}.tmp" "$file"
done
```

- [ ] **Step 3: Run the optimization script**

```bash
npx tsx scripts/optimize-bar-images.ts
```

or

```bash
bash scripts/optimize-bar-images.sh
```

Expected: console output showing size reductions.

- [ ] **Step 4: Inspect a sample image to confirm quality**

Open one optimized image in the default viewer:

```bash
open public/generated/mychef-bar-services-bali-hub-gallery-1.webp
```

Expected: image looks visually equivalent to before.

- [ ] **Step 5: Commit**

```bash
git add scripts/optimize-bar-images.* public/generated/mychef-bar-services-bali-*
git commit -m "perf: compress bar-services images to ~80 quality, max 1600px"
```

---

### Task 10: Review and tighten SEO titles, descriptions, and headings

**Files:**
- Modify: `src/data/page-meta.ts`

**Interfaces:**
- Consumes: existing `PAGE_META` entries for bar-services routes
- Produces: every bar-services meta title ≤ 60 chars, description ≤ 160 chars, h1 unique and keyword-rich

- [ ] **Step 1: Review each bar-services `PAGE_META` entry**

For each entry from `bar-services-hub` through `bar-services-resources-how-to-reduce-bar-shrinkage-bali`:
- Count title length. If > 60 chars, shorten while keeping primary keyword + brand.
- Count description length. If > 160 chars, tighten.
- Confirm `h1` matches the on-page `h1` and contains the primary keyword.

- [ ] **Step 2: Apply tightened copy**

Example adjustments:

```ts
'bar-services-hub': {
  path: '/bar-services/',
  title: 'Bar Consultant Bali | B2B Bar Services | myCHEF',
  description:
    "Bali's B2B bar consultancy: training, menus, staffing, audits and management for hotels, villas and beach clubs.",
  canonical: `${SITE}/bar-services/`,
  h1: 'Bar Consultant Bali: The Dedicated Bar-Operations Partner for Your Venue',
  ogImage: '/generated/mychef-bar-services-bali-og-hub.jpg',
},
```

Only shorten; do not change meaning or keywords.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: build completes.

- [ ] **Step 4: Commit**

```bash
git add src/data/page-meta.ts
git commit -m "seo: tighten bar-services titles, descriptions, h1s"
```

---

### Task 11: Verify heading hierarchy and semantic structure

**Files:**
- Inspect: `src/pages/BarServicePage.tsx`
- Inspect: `src/components/bar-services/*.tsx`

**Interfaces:**
- Consumes: page and section components
- Produces: every page has exactly one `h1`, sections use `h2`, cards/items use `h3`

- [ ] **Step 1: Run a grep check for heading levels**

```bash
grep -rn "<h1\|<h2\|<h3" src/pages/BarServicePage.tsx src/components/bar-services/
```

Expected: only one `h1` in `BarServiceHero`, `h2` in each section header, `h3` in cards and accordion items.

- [ ] **Step 2: Fix any heading violations**

If any component uses the wrong heading level, adjust it. The `BarServiceSectionHeader` defaults to `h2`; cards and list item titles should be `h3`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/BarServicePage.tsx src/components/bar-services/
git commit -m "fix: enforce h1→h2→h3 heading hierarchy on bar service pages"
```

---

### Task 12: Update hub page sections and images

**Files:**
- Modify: `src/pages/BarServicesHubPage.tsx`
- Modify: `src/data/bar-services/hub.ts` if needed

**Interfaces:**
- Consumes: `BarServicesHubData`, hub gallery images
- Produces: hub page uses images inside relevant sections, not a standalone gallery

- [ ] **Step 1: Read `src/pages/BarServicesHubPage.tsx` and `src/data/bar-services/hub.ts`**

- [ ] **Step 2: Move hub gallery images into the why-us, process, or proof sections**

Use `BarServiceImageSection` or a similar layout to place each hub gallery image inside a relevant section. Remove any standalone gallery section.

- [ ] **Step 3: Add `h2` titles to hub sections that lack them**

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: build completes.

- [ ] **Step 5: Commit**

```bash
git add src/pages/BarServicesHubPage.tsx src/data/bar-services/hub.ts
git commit -m "feat: integrate hub images into content sections"
```

---

### Task 13: Run full lint and build verification

**Files:**
- All modified files

**Interfaces:**
- Consumes: final codebase
- Produces: clean lint and build output

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: no errors or warnings.

- [ ] **Step 2: Run build**

```bash
npm run build
```

Expected: build completes with exit code 0.

- [ ] **Step 3: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: lint and type issues after bar-services optimization"
```

---

### Task 14: Deploy to Vercel

**Files:**
- All committed changes

**Interfaces:**
- Consumes: clean git branch
- Produces: live deployment on `mychef.id`

- [ ] **Step 1: Ensure the Vercel CLI is logged in and project linked**

```bash
npx vercel whoami
npx vercel status
```

Expected: shows the current user and project linked to `mychef.id`.

- [ ] **Step 2: Deploy to production**

```bash
npx vercel --prod --yes
```

Expected: deployment succeeds and outputs a production URL.

- [ ] **Step 3: Verify a sample page**

Open `https://mychef.id/bar-services/bar-staff-training/` in a browser and confirm:
- Sticky sub-nav appears
- Images appear inside problem, deliverables, process sections
- FAQ section is present
- No console errors

- [ ] **Step 4: Commit deployment marker**

```bash
git tag -a bar-services-optimize-$(date +%Y%m%d-%H%M%S) -m "Bar services optimization deployed"
git push --tags
```

---

## Self-Review

**Spec coverage:**
- Navigation optimization → Task 3
- Image optimization → Tasks 1, 9
- Purposeful image placement → Tasks 2, 4, 5, 6, 7, 12
- FAQ per page → Tasks 8, 11
- SEO titles/descriptions/headings → Tasks 10, 11
- No URL changes → Global Constraint
- Footer-only global entry point → Global Constraint

**Placeholder scan:**
- No TODOs or TBDs.
- All code steps contain actual code.
- All file paths are explicit.

**Type consistency:**
- `BarServiceImageSectionProps` matches usage.
- Section image fields are added to `BarService` before use in components.
- `BarServiceSectionHeader` `as` prop supports `h2` and `h3`.
