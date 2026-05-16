# myCHEF.id — Phase 4: URL Migration & Production Launch Plan
**Date:** 2026-05-16  
**Status:** Starting  
**Current State:** Phase 3 Complete (16 pages, all schema/components in place)

---

## Critical Priority: URL Migration (Week 1)

### Task 1: Add 57 Missing Redirects to redirects.ts
**Why Critical:** Without these, 57 live URLs will 404 on launch, destroying SEO equity and user experience.

**Source:** MIGRATION_PLAN.md Phase 4, Section 2

**Redirects needed (grouped by category):**

**1. Location consolidation (14 redirects)**
- /kuta → /locations/seminyak
- /legian → /locations/seminyak
- /kerobokan → /locations/seminyak
- /petitenget → /locations/seminyak
- /denpasar → /locations/sanur
- /gianyar → /locations/ubud
- /tegallalang → /locations/ubud
- /amed → /locations/sanur
- /lovina → /locations/sanur
- /candidasa → /locations/sanur
- /padang-bai → /locations/sanur
- /tabanan → /locations/canggu
- /tanah-lot → /locations/canggu
- /jakarta → /contact

**2. Private chef location pages (8 redirects)**
- /echo-beach-private-chef → /locations/canggu
- /batu-bolong-private-chef → /locations/canggu
- /pererenan-private-chef → /locations/pererenan
- /bingin-private-chef → /locations/uluwatu
- /padang-padang-private-chef → /locations/uluwatu
- /sayan-private-chef → /locations/ubud
- /penestanan-private-chef → /locations/ubud
- /sanur-beach-private-chef → /locations/sanur

**3. Service pages (8 redirects)**
- /services/romantic-dinners → /fine-dining/romantic-dinner
- /services/family-reunions → /catering
- /services/cooking-classes → /contact
- /services/corporate-events → /events/corporate-events
- /services/villa-parties → /events/villa-parties
- /services/wedding-celebrations → /events/weddings
- /services/birthday-celebrations → /events/birthdays
- /services/weekly-meal-prep → /catering

**4. Blog posts (5 redirects)**
- /blog/private-chef-bali-cost-breakdown-2026 → /pricing
- /blog/best-bali-villas-private-chef-kitchen → /partner-platform
- /blog/wedding-rehearsal-dinner-bali → /events/weddings
- /blog/yoga-retreat-chef-bali-meal-planning → /events/retreats
- /blog/private-chef-vs-restaurant-bali → /catering
- /blog → /journal

**5. Menu pages (5 redirects)**
- /menus → /fine-dining/menus
- /menus/asian-fusion → /fine-dining/menus
- /menus/vegan → /fine-dining/menus
- /menus/modern-european → /fine-dining/menus
- /menus/halal → /fine-dining/menus
- /guide/bali-cuisine-glossary → /fine-dining/menus

**6. SEO landing pages (11 redirects)**
- /best-private-chef-indonesia → /
- /private-chef-for-events → /events
- /luxury-chef-indonesia → /fine-dining
- /wedding-catering-indonesia → /events/weddings
- /private-dining-indonesia → /fine-dining
- /healthy-meal-delivery-indonesia → /catering
- /private-chef-booking-indonesia → /quote
- /chef-for-hire-indonesia → /catering
- /proposal-dinner → /fine-dining
- /honeymoon-chef → /fine-dining
- /private-chef-breakfast-bali → /catering

**7. Pricing pages (2 redirects)**
- /private-chef-cost-per-day-bali → /pricing
- /private-chef-cost-bali → /pricing

**8. Contact/info pages (5 redirects)**
- /private-chef-menteng → /contact
- /recommended-services → /contact
- /join-our-team → /contact
- /reviews → /
- /villa-partners → /partner-platform

**9. Other pages (3 redirects)**
- /why-mychef → /about
- /calculator → /quote
- /retreats → /events

**Implementation:**
1. Open `src/data/redirects.ts`
2. Add all 57 redirects with category comments
3. Run `npm run redirects` to regenerate public/_redirects and vercel.json
4. Verify build: `npm run build`
5. Test: Check that all redirects appear in public/_redirects with 301 status

---

### Task 2: Verify Sitemap & Redirect Configuration
**What to check:**
- [ ] `src/data/sitemap.ts` — verify 84 URLs (no old URLs)
- [ ] `public/_redirects` — verify 101+ redirect lines
- [ ] `vercel.json` — redirects section populated
- [ ] Build: `npm run build` passes
- [ ] TypeScript: `npm run type-check` passes

---

## Phase 4 Deliverables

### Checkpoint 1: URL Migration Complete (Day 1)
- ✅ 57 new redirects added to redirects.ts
- ✅ public/_redirects regenerated
- ✅ vercel.json updated
- ✅ Build succeeds
- ✅ Sitemap validates

### Checkpoint 2: Deploy to Staging (Day 2)
- [ ] `git add` redirects changes
- [ ] `git commit` with message: "feat: add 57 legacy URL redirects for migration"
- [ ] `npm run build` on staging environment
- [ ] Deploy to staging URL (e.g., staging.mychef.id)
- [ ] Test 5-10 random redirects with curl/redirect-checker

### Checkpoint 3: GSC Readiness (Day 3)
- [ ] Submit new sitemap.xml to Google Search Console
- [ ] Request indexing for new pillar pages:
  - /fine-dining
  - /catering
  - /events
  - /locations
  - /staffing
  - /partner-platform
  - /journal
- [ ] Verify no 404 errors reported

---

## Post-Migration Tasks (Weeks 2-4)

### Copy & Content Review
- [ ] Review all 16 page titles (ensure < 60 chars, keyword-relevant)
- [ ] Review all 16 meta descriptions (120-160 chars)
- [ ] Verify founder name consistency (Adriano vs Antonio)
- [ ] Update hero copy if needed

### Performance Optimization
- [ ] Run Lighthouse audit on 5 pages
- [ ] Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Bundle size: JS < 150KB gzipped
- [ ] Image optimization: All hero images WebP + alt text

### Accessibility & QA
- [ ] axe DevTools audit on all 16 pages
- [ ] Keyboard navigation test (Tab / Enter)
- [ ] Reduced motion test
- [ ] Cross-browser: Chrome, Firefox, Safari
- [ ] Mobile test: 390px viewport

### Form Testing
- [ ] Test WhatsApp deeplinks on all 16 pages
- [ ] Verify form pre-fill with guest count + date
- [ ] Test message format: "Hi Sofia, I'm interested in [package] for [guests] guests on [date] at [villa]"

### Analytics & Monitoring
- [ ] GA4 integration (if not already in place)
- [ ] GTM setup
- [ ] Hotjar heatmaps (optional)
- [ ] Monitor GSC for crawl errors (daily, Week 1)

---

## Launch Checklist (Pre-Go-Live)

### Technical
- [ ] All redirects tested (zero 404s)
- [ ] Build succeeds with zero TypeScript errors
- [ ] Sitemap valid XML, 84 URLs
- [ ] robots.txt configured
- [ ] SSL certificate valid
- [ ] CDN cache headers configured

### SEO
- [ ] Old site sitemap compared to new sitemap (no surprise drops)
- [ ] 301 redirect audit passed (all old URLs → new pages)
- [ ] Schema markup validated on 3+ pages (schema.org)
- [ ] Canonical URLs correct on all pages
- [ ] Open Graph images set on all pages

### Content
- [ ] All page titles reviewed and approved
- [ ] All meta descriptions approved
- [ ] All image alt text present
- [ ] Founder name consistent
- [ ] WhatsApp number verified (+62 822 3756 5997)
- [ ] Email verified (indonesia@mychef.id)

### Performance
- [ ] Core Web Vitals audit passed
- [ ] Lighthouse score > 80 on all pages
- [ ] Bundle size < 150KB JS (gzipped)
- [ ] Images optimized (WebP, proper dimensions)

### Legal
- [ ] Privacy policy live and linked
- [ ] Terms of service live and linked
- [ ] Cookie banner functional
- [ ] GDPR compliance reviewed

---

## Success Metrics (Post-Launch)

### Week 1
- [ ] Zero 404 errors in GSC Coverage
- [ ] 100% of redirects return 301
- [ ] New pages appear in GSC "New URLs" report
- [ ] No spike in 404s vs baseline

### Week 2-4
- [ ] Organic traffic maintained within ±10% of pre-migration
- [ ] No ranking drops > 10 positions
- [ ] New pages indexed (at least 50 of 84 URLs)
- [ ] Core Web Vitals remain "Good"

---

## Current File Status

**Phase 3 Complete Files:**
- ✅ All 16 pages built (Catering + Events)
- ✅ All shared components integrated
- ✅ Schema markup on all pages
- ✅ Breadcrumbs, AllInPrice, PressStrip, FAQ, TrustStrip
- ✅ GroupTotalCalculator on pricing pages
- ✅ Build succeeds (4.72s)
- ✅ TypeScript zero errors

**Phase 3.5 — Bug Fixes & Visual Polish (May 16, Evening):**
- ✅ Fixed broken images in HubPage.tsx (lines 766, 787: `/images/family-villa-dinner-cutout.png` → `/generated/hub-villa.webp`)
- ✅ Removed unused import `CheckCircle` from WeddingGuidePage.tsx
- ✅ Fixed duplicate closing code in AreaPage.tsx (removed lines 301-306 duplicate)
- ✅ Added subtle noise texture pattern to Footer.tsx and created `.noise-pattern` utility class
- ✅ Production build: `vite build` — zero errors, all assets injected correctly
- ✅ Dev server verified: http://localhost:3000 running, HTTP 200, myCHEF marker confirmed

**Phase 4 Todo:**
- 🔲 Add 57 new redirects to src/data/redirects.ts
- 🔲 Regenerate public/_redirects
- 🔲 Verify sitemap.ts
- 🔲 Deploy to staging
- 🔲 Test redirects
- 🔲 Submit sitemap to GSC
- 🔲 Monitor for 404s

---

## Work Order

**Task 1 (Today):** Add 57 redirects + regenerate  
**Task 2 (Today):** Verify build & test  
**Task 3 (Tomorrow):** Deploy to staging & monitor  
**Task 4 (This week):** GSC setup + copy review  
**Task 5+ (Next weeks):** Performance + accessibility + form testing
