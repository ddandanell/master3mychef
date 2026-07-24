# mychef.id SEO Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` to implement content batches. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy the complete SEO rebuild from `/Users/openclaw/Movies/LIve website/mychef-seo` into the live `master3mychef` codebase without changing any URL, so every page owns one primary keyword and the internal link graph consolidates authority on the correct owners.

**Architecture:** Each `content/*.md` brief maps to one existing React page component. Implementation copies the brief's metadata (title, meta, H1, keywords), structured data, body sections/FAQ, and internal-link anchors into the component, replacing only the content while preserving component structure, routes, and images. Parallel agents handle batches of 8–15 pages; a mapping file and shared rules guarantee consistency.

**Tech Stack:** React + TypeScript + Vite; Tailwind; `PremiumPage`, `SeoHead`, `FAQAccordion`, `Breadcrumb` components; JSON-LD schema in `SeoHead`; routing in `src/App.tsx`; redirects in `src/data/redirects.ts`; nav/footer in `src/components/Navbar.tsx` / `Footer.tsx`.

## Global Constraints

- **Zero URL changes.** Every route in `src/App.tsx` stays exactly as is. Canonicals may be added, but no paths are renamed or removed.
- **Bali-only focus.** Remove or hide Jakarta-only references unless the content brief explicitly keeps Jakarta (only `/locations/jakarta`).
- **Preserve business-confirmation flags.** Any `[BUSINESS CONFIRMATION REQUIRED]` text in the brief is left in the copy as a visible editorial note or resolved with the user's prior decision; never invent facts.
- **Deposit/cancellation/tax consistency.** Where the brief specifies a value (e.g., 50% deposit, 14-day cancellation tiers, 11% tax + 10% service), use it. Where the brief flags a conflict, preserve the flag.
- **QC gate:** every shipped page must score ≥90 against the brief's own checklist (title/meta length, H1, keyword in first 100 words, internal links, schema, no placeholders).
- **One primary keyword per page.** Do not let any page hijack another page's primary keyword in H1, title, or exact-match anchors.
- **Internal-link anchor discipline:** exact keyword anchors point to the owning page only (from `05-keyword-ownership.md` and `09-internal-linking-map.md`).
- **Commit frequently.** One commit per page batch; never one giant commit.
- **Do not commit `node_modules/`, generated test images, or API keys.**

---

## Phase 0 — Critical foundation (do first)

### Task 0.1 — Create content-to-component mapping table
**Files:**
- Create: `scripts/seo-content/map-content-to-components.csv`
- Read: `mychef-seo/content/*.md`, `src/App.tsx`, `src/pages/*.tsx`

**What to do:**
- [ ] Map every `mychef-seo/content/{slug}.md` file to the exact `src/pages/{Component}.tsx` (or `src/components/{Component}.tsx`) that renders its URL.
- [ ] Mark pages that are dynamically rendered by `LandingPage` (journal/guide/landing slugs) — these are edited as Markdown/data, not as TSX page components.
- [ ] Identify 7 pages that do not exist yet but have content briefs (e.g., new pricing-transparent pages if missing); list them for component creation.
- [ ] Verify the mapping against `10-metadata-map.csv` canonical URLs.

**Test:**
- [ ] Run `npx tsx scripts/seo-content/verify-mapping.ts` (to be created) and confirm 100% of 116 content files resolve to a component or a dynamic content source.

**Commit:**
```bash
git add scripts/seo-content/map-content-to-components.csv scripts/seo-content/verify-mapping.ts
git commit -m "seo: add content-to-component mapping and verification"
```

---

### Task 0.2 — Resolve Phase-0 technical fixes
**Files:**
- Modify: `src/data/redirects.ts`, `src/data/redirects.ts` REDIRECT_MAP
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx` (or wherever footer links live)
- Modify: `src/components/SeoHead.tsx` if canonical helpers needed

**What to do:**
- [ ] Add 301 redirects:
  - `/blog/corporate-events-catering-bali` → `/corporate-case-studies`
  - `/blog/how-to-hire-private-chef` → `/blog/how-to-hire-private-chef-bali-complete-guide`
  - `/partner-platform` → `/certified-partner`
  - `/blog/romantic-dinner-at-home-bali-private-chef` → `/fine-dining/romantic-dinner`
- [ ] Update Navbar: change "Private Chef Bali" link target from `/fine-dining/private-chef-bali` to `/`.
- [ ] Update Footer: repoint "Partner Platform" / "Staff Login" from `/partner-platform` to `/certified-partner`.
- [ ] Add canonicals on legacy consolidation pages per `content/chef-table-experience-bali.md` and `content/private-tasting-menu-bali.md`.

**Test:**
- [ ] `npx tsc --noEmit` passes.
- [ ] `npm run build` completes without error.
- [ ] Spot-check redirects in dev server: `/partner-platform` resolves to `/certified-partner`.

**Commit:**
```bash
git add src/data/redirects.ts src/components/Navbar.tsx src/components/Footer.tsx
git commit -m "seo: phase-0 redirects, nav/footer anchor fixes"
```

---

### Task 0.3 — Deploy metadata map (titles, metas, H1s, canonicals) site-wide
**Files:**
- Read: `mychef-seo/10-metadata-map.csv`
- Modify: all affected `src/pages/*.tsx` and dynamic content sources

**What to do:**
- [ ] Write a script `scripts/seo-content/apply-metadata.ts` that reads `10-metadata-map.csv` and updates `title`, `seoTitle`, `seoDescription`, `canonicalUrl`, `h1`, `subtitle`, `ogImage`, and `keywords` props on matching components.
- [ ] For dynamic `LandingPage` content (journal/guide/landing slugs), update the frontmatter/Markdown metadata in the content source files instead.
- [ ] Handle 14 "keep" rows (no change), 238 "rewrite" rows (apply brief), and 7 "canonical" rows (set canonical only).

**Test:**
- [ ] Run the script.
- [ ] Verify 0 title >60 chars and 0 meta description >155 chars by scanning output.
- [ ] `npx tsc --noEmit` passes.

**Commit:**
```bash
git add src/pages/ scripts/seo-content/apply-metadata.ts
git commit -m "seo: deploy 259-row metadata map (titles, metas, H1s, canonicals)"
```

---

## Phase 1 — High-impact content batches (deploy first)

### Task 1.1 — Homepage + brand layer (7 pages)
**Agent:** 1 content agent
**Pages:** `/` (HubPage), `/services`, `/why-mychef`, `/faq`, `/reviews`, `/villa-chef`, `/fine-dining/private-chef-bali`
**Content files:** `home.md`, `services.md`, `why-mychef.md`, `faq.md`, `reviews.md`, `villa-chef.md`, `fine-dining_private-chef-bali.md`

**What to do:**
- [ ] Replace title, meta, H1, keywords, body copy, FAQ, and schema on each page using the brief.
- [ ] Update internal links and anchors per the brief's "Internal links OUT" list.
- [ ] For `/reviews`, either fill a verified `reviewCount` or strip `AggregateRating` schema until review count is confirmed.
- [ ] Preserve any `[BUSINESS CONFIRMATION REQUIRED]` flags verbatim.

**Test:**
- [ ] Each page renders without TypeScript error.
- [ ] Each page's H1 contains its primary keyword.
- [ ] No exact-match anchor for another page's primary keyword is used incorrectly.

**Commit:** one per page or one for the batch.

---

### Task 1.2 — Tier-1 location twins (16 pages)
**Agent:** 2 content agents in parallel (8 pages each)
**Pages:** `/private-chef/{seminyak,canggu,ubud,uluwatu,jimbaran,nusa-dua,sanur,pererenan}` + `/locations/{seminyak,canggu,ubud,uluwatu,jimbaran,nusa-dua,sanur,pererenan}` + `/locations/jakarta`
**Content files:** `_private-chef_*.md`, `_locations_*.md`

**What to do:**
- [ ] For each `/private-chef/{x}` page: own "private chef {x}" — commercial villa-chef copy, pricing, FAQ.
- [ ] For each `/locations/{x}` page: reposition to "private dining in {x}" area dining guide — restaurants, venues, local menu ideas.
- [ ] Ensure `/private-chef/{x}` and `/locations/{x}` do not reuse the same H1 or primary keyword.
- [ ] Cross-link each twin with descriptive anchors (not exact keyword duplicates).

**Test:**
- [ ] Run similarity check: no two pages in this batch share >8-word shingles.
- [ ] Each `/private-chef/{x}` has the primary keyword in H1 and title.
- [ ] Each `/locations/{x}` title does NOT contain "private chef {x}" as the primary phrase.

---

### Task 1.3 — Wedding cluster (3 pages)
**Agent:** 1 content agent
**Pages:** `/events/weddings`, `/bali-wedding-catering-packages`, `/wedding-catering-indonesia`
**Content files:** `events_weddings.md`, `bali-wedding-catering-packages.md`, `wedding-catering-indonesia.md`

**What to do:**
- [ ] Differentiate intents: `/events/weddings` owns "wedding catering bali"; packages page owns pricing; Indonesia page owns national scope.
- [ ] Update cross-links between the three pages and to `/catering`, `/events`, `/pricing`.

---

### Task 1.4 — BBQ cluster (5 pages)
**Agent:** 1 content agent
**Pages:** `/catering/bbq-catering`, `/villa-bbq-catering-bali`, `/seafood-bbq-catering-bali`, `/bbq-grill`, `/catering/babi-guling`
**Content files:** `catering_bbq-catering.md`, `villa-bbq-catering-bali.md`, `seafood-bbq-catering-bali.md`, `bbq-grill.md`, `catering_babi-guling.md`

**What to do:**
- [ ] Apply replacement copy, published per-person pricing, and FAQ schema.
- [ ] Cross-link to `/catering`, `/events`, `/pricing`.

---

## Phase 2 — Service, events, experiences, staffing, bar clusters

### Task 2.1 — Catering hub + formats (8 pages)
**Agent:** 2 content agents in parallel
**Pages:** `/catering`, `/catering/buffet`, `/catering/plated-catering`, `/catering/drop-off-catering`, `/catering/grazing-tables`, `/catering/villa-catering`, `/catering/retreat-catering`, `/catering/corporate-catering`, `/catering/floating-breakfast`
**Content files:** `catering*.md`

**What to do:**
- [ ] Apply each brief's primary keyword (e.g., buffet catering bali, plated catering bali, etc.).
- [ ] Preserve `[BUSINESS CONFIRMATION REQUIRED]` flags for retreat/corporate pricing conflicts.
- [ ] Update hub page `/catering` links to use child-page primary keywords as anchors.

---

### Task 2.2 — Events & packages (12 pages)
**Agent:** 2 content agents in parallel
**Pages:** `/events`, `/events/birthdays`, `/events/anniversaries`, `/events/baby-showers`, `/events/corporate-events`, `/events/retreats`, `/events/villa-parties`, `/luxury-birthday-party-bali`, `/villa-event-packages`, `/complete-villa-experience`, `/corporate-retreat-catering-bali`, `/corporate-case-studies`
**Content files:** `events_*.md`, `luxury-birthday-party-bali.md`, `villa-event-packages.md`, `complete-villa-experience.md`, `corporate-retreat-catering-bali.md`, `corporate-case-studies.md`

**What to do:**
- [ ] Differentiate event-type pages from catering-format pages.
- [ ] Keep `/complete-villa-experience` and `/villa-event-packages` distinct in H1/intent.

---

### Task 2.3 — Experiences & romance (10 pages)
**Agent:** 2 content agents in parallel
**Pages:** `/experiences` and all 6 experience children, `/proposal-dinner`, `/honeymoon-chef`, `/private-chef-for-events`
**Content files:** `experiences_*.md`, `proposal-dinner.md`, `honeymoon-chef.md`, `private-chef-for-events.md`

**What to do:**
- [ ] Each experience page owns one distinct commercial intent per the keyword ownership map.
- [ ] Ensure experience hub does not rank for child-page primary keywords.

---

### Task 2.4 — Staffing & in-villa service (14 pages)
**Agent:** 2 content agents in parallel
**Pages:** `/staffing` + children, `/in-villa-service` + children, `/villa-staff-bali-agency`
**Content files:** `staffing*.md`, `in-villa-service*.md`, `staffing_for-villa-managers.md`

**What to do:**
- [ ] Preserve placement-fee flag `[BUSINESS CONFIRMATION REQUIRED]` until D1 decision.
- [ ] Differentiate staffing (recruitment/placement) from in-villa service (shift staffing).

---

### Task 2.5 — National & niche pages (8 pages)
**Agent:** 1 content agent
**Pages:** `/chef-for-hire-indonesia`, `/best-private-chef-indonesia`, `/luxury-chef-indonesia`, `/private-dining-indonesia`, `/private-chef-menteng`, `/healthy-meal-delivery-indonesia`, `/hire-private-chef-bali-monthly`, `/vip-transport-bali`
**Content files:** matching `.md`

**What to do:**
- [ ] Keep Indonesia pages distinct from Bali pages; no Bali-only claims on Indonesia pages except where service genuinely covers both.

---

### Task 2.6 — Support & remaining commercial pages (7 pages)
**Agent:** 1 content agent
**Pages:** `/certified-partner`, `/recommended-services`, `/group-villa-dinner-packages-bali`, `/dining-styles`, `/family-styling`, `/kids-menus`, `/three-course`
**Content files:** matching `.md`

---

## Phase 3 — Internal-link graph rollout

### Task 3.1 — Implement per-page internal-link plans
**Files:**
- Read: `mychef-seo/09-internal-linking-map.md`
- Modify: all rebuilt `src/pages/*.tsx`

**What to do:**
- [ ] Add the required UP-link (to owner/hub) and DOWN-links (to children/siblings) from `09-internal-linking-map.md`.
- [ ] Fix 9 orphan pages and 27 single-inbound pages by adding ≥3 body inlinks from relevant hubs.
- [ ] Enforce anchor discipline: one exact keyword anchor → one destination.

**Test:**
- [ ] Run `scripts/seo-content/verify-internal-links.ts` (to create) that checks each page has the minimum inbound links specified in `09-internal-linking-map.md`.

**Commit:**
```bash
git add src/pages/ scripts/seo-content/verify-internal-links.ts
git commit -m "seo: implement internal-link graph and orphan fixes"
```

---

## Phase 4 — Schema, QC, build, and deployment

### Task 4.1 — Deploy schema
**Files:** all rebuilt pages

**What to do:**
- [ ] Add JSON-LD schema from each content brief's "SUGGESTED STRUCTURED DATA" section.
- [ ] Use existing helpers in `src/components/SeoHead.tsx` where available (`breadcrumbSchema`, `faqPageSchema`, `serviceSchema`, etc.).
- [ ] Add FAQPage schema only on pages with visible FAQs and resolved business facts (B1/B2/A decisions).

---

### Task 4.2 — Quality control pass
**Files:** all rebuilt pages

**What to do:**
- [ ] Run `scripts/seo-content/qc-check.ts` (to create) that checks:
  - title ≤60, meta ≤155
  - H1 present and contains primary keyword
  - primary keyword in first 100 words
  - no `[BUSINESS CONFIRMATION REQUIRED]` left in visible copy unless flagged
  - internal links match the brief
  - no duplicate H1s/titles across the site
- [ ] Every page must score ≥90; fix failures.

---

### Task 4.3 — Build, preview, and deploy
**Files:** entire project

**What to do:**
- [ ] `npx tsc --noEmit`
- [ ] `npm run build` (or `npx vite build`)
- [ ] `vercel --yes` deploy to preview
- [ ] Spot-check homepage, `/fine-dining/private-chef-bali`, `/catering/buffet`, one location twin, and redirects.
- [ ] Push branch to GitHub.

**Commit:**
```bash
git push origin feature/seo-rebuild-2026-07-24
```

---

## Dependency / blocker tracking

| Blocker | Decision needed | Pages affected |
|---|---|---|
| B1 Deposit % | 25% vs 50% vs B2B 30/50/20 | ~60 files; leave flag if unresolved |
| B2 Cancellation | master policy | fine-dining FAQ, event pages |
| C1 Founding year | 2016 / 2018 / 2019 | why-mychef, home, bar-services, etc. |
| A1 Villa-chef billing | hour/day/week | villa-chef, monthly-hire, locations |
| A2 Retreat price ladder | 400K/500K/700K/1.5M | retreat pages, catering hub |
| A3 Corporate minimum | 7.5M vs 15M | pricing, corporate catering |
| D1 Placement fee | one month's salary vs from 15M | pricing, staffing pages |

**Rule:** if a decision is unresolved at implementation time, keep the `[BUSINESS CONFIRMATION REQUIRED]` flag in the copy and do not ship the affected FAQ schema.

---

## Parallel execution summary

| Batch | Pages | Agents | Priority |
|---|---|---|---|
| 0.1 Mapping | 116 | 1 (analysis) | Critical |
| 0.2 Redirects/anchors | all | 1 | Critical |
| 0.3 Metadata | 259 | script + 1 reviewer | Critical |
| 1.1 Homepage + brand | 7 | 1 | High |
| 1.2 Location twins | 16 | 2 | High |
| 1.3 Wedding cluster | 3 | 1 | High |
| 1.4 BBQ cluster | 5 | 1 | High |
| 2.1 Catering | 9 | 2 | Medium |
| 2.2 Events/packages | 12 | 2 | Medium |
| 2.3 Experiences | 10 | 2 | Medium |
| 2.4 Staffing/in-villa | 14 | 2 | Medium |
| 2.5 National/niche | 8 | 1 | Medium |
| 2.6 Support | 7 | 1 | Medium |
| 3.1 Internal links | all | 1 + script | Medium |
| 4.1 Schema | all | 1–2 | Medium |
| 4.2 QC | all | script + 1 | High |
| 4.3 Deploy | all | 1 | High |

---

## Notes on running alongside image overhaul

- The image overhaul branch is `feature/image-overhaul-2026-07-24`. SEO work should happen on a separate branch `feature/seo-rebuild-2026-07-24`.
- Both branches modify different files (images in `public/generated/` vs page copy in `src/pages/`). Merge conflicts should be minimal.
- Final deployment should merge both branches into `main` separately or via a single merge queue after both are verified.
