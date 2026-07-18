# MyChef B2B Bar Services — Blueprint Integration Design

**Date:** 2026-07-18  
**Status:** Design ready for implementation  
**Goal:** Integrate the complete MyChef Bar Services Blueprint into mychef.id as a polished, inter-linked, SEO-optimized B2B vertical — without disturbing the existing chef/private-dining pages.

## Current state

A B2B bar-services section already exists under `/bar-services/`:
- Hub page (`/bar-services/`)
- 11 service pages (`/bar-services/<service>/`)
- FAQ (`/bar-services/faq/`), Contact (`/bar-services/contact/`) and Resources hub (`/bar-services/resources/`)
- Some resource articles already live
- 120 generated images in `public/generated/`
- Footer link "B2B Bar Service" already points to the hub
- Email backend (`/api/send-email.ts`) is wired to the contact/enquiry forms

## Gaps vs. the blueprint

1. **Word counts and depth**
   - Hub target: ~1,800 words (currently ~1,165).
   - Service page targets: 1,100–2,000 words each. Several pages need richer expanded sections.
   - FAQ page should carry the full 22-question blueprint FAQ.
2. **SEO metadata & schema**
   - Some page titles/descriptions differ from `metadata.csv`.
   - Service pages need `Service` + `Offer` JSON-LD with from-prices.
   - Training page needs `Course` schema; audit/costing/setup pages should add `HowTo` schema where relevant.
   - Hub needs `ProfessionalService` + `OfferCatalog` schema.
3. **Content pieces not yet built**
   - Six resource articles from the blueprint (cost guide, salary benchmarks, bartender ratios, beverage cost %, open-a-bar guide, cocktail menu engineering).
   - Homepage "Bar Services for Venues" block (additive, no existing blocks removed).
4. **Internal linking**
   - Cross-sells between services are present but can be richer.
   - Service pages should link to relevant resource articles and back.
   - Footer segment links to hub anchors (#hotels, #villas, etc.) are not wired yet.
5. **What is intentionally out of scope**
   - Location pages: per user instruction, no `/bar-services/locations/*` pages.
   - `/id/` mirror: Phase 2.
   - Header dropdown: per user instruction, only the footer "B2B Bar Service" link is needed; the main nav stays focused on chef services.

## Design decisions

### URL / address policy
- Keep all existing `/bar-services/*` routes exactly as they are.
- No new routes outside `/bar-services/` except the homepage block.
- Do not create location pages.

### Content architecture
- Continue using the central `src/data/bar-services/services.ts` data file for all 11 services.
- Expand each service object with richer `expandedSections` paragraphs and longer FAQ answers.
- Keep the existing page renderer `src/pages/BarServicePage.tsx` and component map; feed them richer data rather than rebuilding components.

### SEO & schema
- Update `src/data/page-meta.ts` (or equivalent) to match `metadata.csv` exactly for every bar-services page.
- Extend `src/components/SeoHead.tsx` helpers or add a new `barServiceSchema` helper that emits `Service` + `Offer` JSON-LD with priceCurrency=IDR.
- Add hub-level `ProfessionalService` + `OfferCatalog` schema on `BarServicesHubPage`.
- Keep `BreadcrumbList`, `FAQPage` and `Organization` schemas that already exist.

### Images
- The existing 120 generated images are sufficient.
- Ensure each service page uses at least hero + problem + deliverables + process + proof images in clearly separated sections (already in progress).
- Resource articles get one featured image each from the existing generated set.

### Homepage block
- Add a single new section to the homepage below existing chef content.
- Show four cards: Consulting, Staffing, Management, Flagship — each linking to the hub or a primary service.
- Include trust counters (560+ villas, 500+ events) and a WhatsApp CTA.

### Internal linking plan
- Each service page links to 2–3 related services (existing cross-sells) + 1 relevant resource article.
- Each resource article links to its primary service page + sibling resources.
- FAQ page links to all 11 service pages.
- Footer "Who we serve" links point to hub section anchors.

## Phased implementation

**Phase 1 — Content foundation (in progress by background agent)**
- Expand every service page to ≥1,000 words using blueprint copy.
- Expand hub to ~1,800 words.
- Upgrade FAQ page with blueprint 22-question content.

**Phase 2 — SEO & schema**
- Align all bar-services meta titles/descriptions with `metadata.csv`.
- Add `Service` + `Offer` schema to every service page.
- Add `ProfessionalService` + `OfferCatalog` schema to hub.
- Add `Course` schema to training page; `HowTo` schema to audit/costing/setup pages.

**Phase 3 — Resources & homepage**
- Create the six blueprint resource articles.
- Wire resource index to list them.
- Add homepage "Bar Services for Venues" block.

**Phase 4 — Linking & polish**
- Strengthen cross-links between services and resources.
- Wire footer segment anchors.
- Run full build, sitemap, and deploy.

## Success criteria
- Every service page renders ≥1,000 words of unique body copy.
- Every bar-services page has title/meta/description matching the blueprint.
- Every service page has FAQ schema and at least 5 FAQs.
- All new content passes `npx tsc --noEmit` and `npm run build`.
- No existing chef-side routes, titles, or navigation are changed.

## Notes
- Pricing from the blueprint is used as "from" anchors only; the confidential pricing handbook is never published.
- No `JobPosting` schema on marketing pages (Google spam-policy risk).
- AggregateRating/Review schema is only added once genuine reviews exist.
