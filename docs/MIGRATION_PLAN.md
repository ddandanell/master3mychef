# myCHEF.id → New Site SEO Migration Plan
## Zero-Loss URL Migration with 301 Redirects

**Date:** 2026-05-15  
**Migration Type:** Full site rebuild with URL restructuring  
**Risk Level:** HIGH — 88 live URLs, 68 existing redirects, massive URL architecture changes

---

## Phase 0: Pre-Migration Audit (COMPLETE)

### Live Site (mychef.id)
- **88 URLs** in sitemap.xml
- **68 existing 301 redirects** in _redirects
- Mix of old blog posts, location pages, service pages, menu pages

### New Site (localhost:3000)
- **87 URLs** in sitemap.xml
- **68 existing 301 redirects** already configured
- New architecture: /fine-dining, /catering, /events, /in-villa-service, /staffing, /locations

### Critical Finding
**57 URLs exist on the LIVE site that do NOT exist on the NEW site.** These need redirects or content creation.

---

## Phase 1: URL Mapping — 3 Categories

### Category A: URLs that exist on BOTH sites (NO ACTION)
These 31 URLs are identical on both sites. Just deploy and they work.

```
/
/about
/berawa
/bukit
/canggu
/chefs
/faq
/guide/private-chef-bali
/jimbaran
/menus/balinese
/menus/mediterranean
/nusa-dua
/payment-terms
/pererenan
/pricing
/privacy-policy
/quote
/sanur
/seminyak
/terms-of-service
/ubud
/uluwatu
```

### Category B: URLs that exist ONLY on NEW site (CREATE + INDEX)
These 55 URLs are NEW and need to be submitted to Google Search Console after launch.

**New Pillar Pages:**
```
/book
/contact
/corporate-events
/events
/fine-dining
/in-villa-service
/journal
/locations
/partner-platform
/services
/staffing
/villa-chef
```

**New Catering Pages:**
```
/catering/babi-guling
/catering/bbq-catering
/catering/buffet-catering
/catering/corporate-catering
/catering/drop-off-catering
/catering/floating-breakfast
/catering/grazing-tables
/catering/plated-catering
/catering/retreat-catering
/catering/villa-catering
```

**New Event Pages:**
```
/events/anniversaries
/events/baby-showers
/events/birthdays
/events/corporate-events
/events/retreats
/events/villa-parties
/events/weddings
```

**New Fine Dining Pages:**
```
/fine-dining/chefs-table
/fine-dining/menus
/fine-dining/our-chefs
/fine-dining/private-chef-bali
/fine-dining/romantic-dinner
/fine-dining/tasting-menu
```

**New Service Pages:**
```
/in-villa-service/bartenders
/in-villa-service/butlers
/in-villa-service/host-hostess
/in-villa-service/mixology
/in-villa-service/sommelier
/in-villa-service/waiters
```

**New Staffing Pages:**
```
/staffing/for-hotels-restaurants
/staffing/for-villa-managers
/staffing/household-staff
/staffing/live-in-chef
/staffing/private-chef-placement
/staffing/villa-staff
```

**New Location Pages:**
```
/locations/berawa
/locations/bukit
/locations/canggu
/locations/jimbaran
/locations/nusa-dua
/locations/pererenan
/locations/sanur
/locations/seminyak
/locations/ubud
/locations/uluwatu
```

**New Journal Pages:**
```
/journal/hiring-a-live-in-chef-bali
/journal/how-to-hire-a-private-chef-in-bali
/journal/villa-bbq-bali-costs-menus-booking
```

### Category C: URLs that exist ONLY on LIVE site (NEED REDIRECTS)
These 57 URLs are on the live site but NOT on the new site. **Every single one needs a 301 redirect.**

---

## Phase 2: Critical Redirects to Add (57 URLs)

### 2.1 Old Location Pages → New Location Pages (14 redirects)
```
/kuta              → /locations/seminyak      301
/legian            → /locations/seminyak      301
/kerobokan         → /locations/seminyak      301
/petitenget        → /locations/seminyak      301
/denpasar          → /locations/sanur         301
/gianyar           → /locations/ubud          301
/tegallalang       → /locations/ubud          301
/amed              → /locations/sanur         301
/lovina            → /locations/sanur         301
/candidasa         → /locations/sanur         301
/padang-bai        → /locations/sanur         301
/tabanan           → /locations/canggu        301
/tanah-lot         → /locations/canggu        301
/jakarta           → /contact                 301
```

### 2.2 Old Private Chef Location Pages → New Location Pages (8 redirects)
```
/echo-beach-private-chef      → /locations/canggu        301
/batu-bolong-private-chef     → /locations/canggu        301
/pererenan-private-chef       → /locations/pererenan     301
/bingin-private-chef          → /locations/uluwatu       301
/padang-padang-private-chef   → /locations/uluwatu       301
/sayan-private-chef           → /locations/ubud          301
/penestanan-private-chef      → /locations/ubud          301
/sanur-beach-private-chef     → /locations/sanur         301
```

### 2.3 Old Service Pages → New Service/Event Pages (6 redirects)
```
/services/romantic-dinners    → /fine-dining/romantic-dinner     301
/services/family-reunions     → /catering                        301
/services/cooking-classes     → /contact                         301
/services/corporate-events    → /events/corporate-events         301
/services/villa-parties       → /events/villa-parties            301
/services/wedding-celebrations → /events/weddings                301
/services/birthday-celebrations → /events/birthdays              301
/services/weekly-meal-prep    → /catering                        301
```

### 2.4 Old Blog Posts → New Journal/Event Pages (5 redirects)
```
/blog/private-chef-bali-cost-breakdown-2026  → /pricing              301
/blog/best-bali-villas-private-chef-kitchen  → /partner-platform     301
/blog/wedding-rehearsal-dinner-bali          → /events/weddings      301
/blog/yoga-retreat-chef-bali-meal-planning   → /events/retreats      301
/blog/private-chef-vs-restaurant-bali        → /catering             301
/blog                                        → /journal              301
```

### 2.5 Old Menu Pages → New Fine Dining Menu (4 redirects)
```
/menus              → /fine-dining/menus           301
/menus/asian-fusion → /fine-dining/menus           301
/menus/vegan        → /fine-dining/menus           301
/menus/modern-european → /fine-dining/menus        301
/menus/halal        → /fine-dining/menus           301
```

### 2.6 Old Guide Pages → New Pages (1 redirect)
```
/guide/bali-cuisine-glossary  → /fine-dining/menus     301
```

### 2.7 Old SEO Landing Pages → New Pillar Pages (11 redirects)
```
/best-private-chef-indonesia     → /                     301
/private-chef-for-events         → /events               301
/luxury-chef-indonesia           → /fine-dining          301
/wedding-catering-indonesia      → /events/weddings      301
/private-dining-indonesia        → /fine-dining          301
/healthy-meal-delivery-indonesia  → /catering             301
/private-chef-booking-indonesia  → /quote                301
/chef-for-hire-indonesia         → /catering             301
/proposal-dinner                 → /fine-dining          301
/honeymoon-chef                  → /fine-dining          301
/private-chef-breakfast-bali     → /catering             301
```

### 2.8 Old Pricing Pages → New Pricing (2 redirects)
```
/private-chef-cost-per-day-bali  → /pricing     301
/private-chef-cost-bali          → /pricing     301
```

### 2.9 Old Contact/Info Pages → New Pages (5 redirects)
```
/jakarta              → /contact           301
/private-chef-menteng → /contact           301
/recommended-services → /contact           301
/join-our-team        → /contact           301
/reviews              → /                  301
```

### 2.10 Old About Pages → New About (1 redirect)
```
/why-mychef           → /about             301
```

### 2.11 Old Calculator → New Quote (1 redirect)
```
/calculator           → /quote             301
```

### 2.12 Old Retreats → New Events (1 redirect)
```
/retreats             → /events            301
```

### 2.13 Old Villa Partners → New Partner Platform (1 redirect)
```
/villa-partners       → /partner-platform  301
```

---

## Phase 3: Complete Redirect Map (125 Total Redirects)

### Existing 68 Redirects (ALREADY CONFIGURED)
These are already in `public/_redirects` and `vercel.json`:
```
/experience → /fine-dining
/menus → /fine-dining/menus
/story → /fine-dining/our-chefs
/service → /in-villa-service
/join → /staffing
/partners → /staffing/for-villa-managers
/kuta → /seminyak
/legian → /seminyak
/kerobokan → /seminyak
/petitenget → /seminyak
/tanah-lot → /canggu
/tabanan → /canggu
/denpasar → /sanur
/gianyar → /ubud
/tegallalang → /ubud
/amed → /sanur
/lovina → /sanur
/candidasa → /sanur
/padang-bai → /sanur
/ungasan → /bukit
/pecatu → /bukit
/echo-beach-private-chef → /canggu
/batu-bolong-private-chef → /canggu
/pererenan-private-chef → /pererenan
/bingin-private-chef → /uluwatu
/padang-padang-private-chef → /uluwatu
/sayan-private-chef → /ubud
/penestanan-private-chef → /ubud
/sanur-beach-private-chef → /sanur
/best-private-chef-indonesia → /
/private-chef-for-events → /events
/luxury-chef-indonesia → /fine-dining
/wedding-catering-indonesia → /events/weddings
/private-dining-indonesia → /fine-dining
/healthy-meal-delivery-indonesia → /services/weekly-meal-prep
/private-chef-booking-indonesia → /quote
/chef-for-hire-indonesia → /catering
/proposal-dinner → /fine-dining
/honeymoon-chef → /fine-dining
/private-chef-breakfast-bali → /catering
/private-chef-cost-per-day-bali → /pricing
/private-chef-cost-bali → /pricing
/jakarta → /contact
/private-chef-menteng → /contact
/services/romantic-dinners → /fine-dining
/services/family-reunions → /catering
/services/cooking-classes → /contact
/services/corporate-events → /events/corporate-events
/menus/asian-fusion → /menus
/menus/vegan → /menus
/menus/modern-european → /menus
/menus/halal → /menus
/retreats → /events
/recommended-services → /contact
/join-our-team → /contact
/reviews → /
/why-mychef → /about
/calculator → /quote
/guide/bali-cuisine-glossary → /menus
/blog/private-chef-bali-cost-breakdown-2026 → /pricing
/blog/best-bali-villas-private-chef-kitchen → /partners
/blog/wedding-rehearsal-dinner-bali → /events/weddings
/blog/yoga-retreat-chef-bali-meal-planning → /events/retreats
/blog/private-chef-vs-restaurant-bali → /catering
/blog → /journal
```

### NEW Redirects to Add (57 URLs)
```
# Location consolidation
/amed → /locations/sanur
/batu-bolong-private-chef → /locations/canggu
/best-private-chef-indonesia → /
/bingin-private-chef → /locations/uluwatu
/calculator → /quote
/candidasa → /locations/sanur
/chef-for-hire-indonesia → /catering
/denpasar → /locations/sanur
/echo-beach-private-chef → /locations/canggu
/gianyar → /locations/ubud
/guide/bali-cuisine-glossary → /fine-dining/menus
/healthy-meal-delivery-indonesia → /catering
/honeymoon-chef → /fine-dining
/jakarta → /contact
/join-our-team → /contact
/kerobokan → /locations/seminyak
/kuta → /locations/seminyak
/legian → /locations/seminyak
/lovina → /locations/sanur
/luxury-chef-indonesia → /fine-dining
/menus → /fine-dining/menus
/menus/asian-fusion → /fine-dining/menus
/menus/halal → /fine-dining/menus
/menus/modern-european → /fine-dining/menus
/menus/vegan → /fine-dining/menus
/padang-bai → /locations/sanur
/padang-padang-private-chef → /locations/uluwatu
/pecatu → /locations/bukit
/penestanan-private-chef → /locations/ubud
/pererenan-private-chef → /locations/pererenan
/petitenget → /locations/seminyak
/private-chef-booking-indonesia → /quote
/private-chef-breakfast-bali → /catering
/private-chef-cost-bali → /pricing
/private-chef-cost-per-day-bali → /pricing
/private-chef-for-events → /events
/private-chef-menteng → /contact
/private-dining-indonesia → /fine-dining
/proposal-dinner → /fine-dining
/recommended-services → /contact
/retreats → /events
/reviews → /
/sanur-beach-private-chef → /locations/sanur
/sayan-private-chef → /locations/ubud
/services/birthday-celebrations → /events/birthdays
/services/cooking-classes → /contact
/services/corporate-events → /events/corporate-events
/services/family-reunions → /catering
/services/romantic-dinners → /fine-dining/romantic-dinner
/services/villa-parties → /events/villa-parties
/services/wedding-celebrations → /events/weddings
/services/weekly-meal-prep → /catering
/tabanan → /locations/canggu
/tanah-lot → /locations/canggu
/tegallalang → /locations/ubud
/ungasan → /locations/bukit
/villa-partners → /partner-platform
/wedding-catering-indonesia → /events/weddings
/why-mychef → /about
```

---

## Phase 4: Implementation Steps

### Step 1: Update Redirects File
Edit `src/data/redirects.ts` to add all 57 new redirects. Run `npm run redirects` to regenerate `public/_redirects` and `vercel.json`.

### Step 2: Update Sitemap
The new sitemap already has 87 URLs. After adding redirects, regenerate sitemap.

### Step 3: Deploy to Staging
Deploy the new site to a staging URL (e.g., `staging.mychef.id`).

### Step 4: Test All Redirects
Use a redirect checker to verify all 125 redirects return 301 status.

### Step 5: Update Google Search Console
1. Submit new sitemap.xml
2. Use "Change of Address" tool if domain changes (not needed — same domain)
3. Request indexing for new pillar pages

### Step 6: Monitor for 404s
After launch, monitor Google Search Console "Coverage" report for 404 errors. Add redirects for any missed URLs.

---

## Phase 5: Content Preservation Checklist

### Meta Data
- [ ] All 87 pages have unique `<title>` tags (under 60 chars)
- [ ] All 87 pages have unique `<meta name="description">` (120-160 chars)
- [ ] All 87 pages have canonical URLs
- [ ] All 87 pages have Open Graph images

### Schema Markup
- [ ] LocalBusiness schema on all pages
- [ ] Service schema on service pages
- [ ] FAQPage schema on all pages with FAQs
- [ ] BreadcrumbList schema on all pages
- [ ] Offer schema on pricing pages
- [ ] AggregateRating schema on all pages

### Internal Linking
- [ ] Every page links to 3-5 related pages
- [ ] Footer sitemap links to all pillar pages
- [ ] Breadcrumb navigation on all sub-pages

### Images
- [ ] All images have alt text
- [ ] All images are WebP format
- [ ] Hero images are 1920×1080 or larger
- [ ] Image sitemap entries in sitemap.xml

---

## Phase 6: Post-Launch Monitoring

### Week 1
- [ ] Check Google Search Console for crawl errors
- [ ] Check Google Search Console for indexing status
- [ ] Monitor organic traffic in GA4
- [ ] Check Core Web Vitals in PageSpeed Insights

### Week 2-4
- [ ] Compare pre/post migration traffic
- [ ] Identify any ranking drops
- [ ] Add missing redirects for 404s
- [ ] Optimize pages with poor Core Web Vitals

### Month 2-3
- [ ] Full SEO audit of new site
- [ ] Content gap analysis
- [ ] Backlink audit
- [ ] Competitor analysis

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Lost traffic from missing redirects | Medium | HIGH | Complete redirect mapping + testing |
| Ranking drops from URL changes | Medium | HIGH | 301 redirects preserve 90%+ link equity |
| Broken internal links | Low | Medium | Automated link checker |
| Missing schema markup | Low | Medium | Schema validation tool |
| Slow Core Web Vitals | Medium | Medium | Pre-launch performance testing |
| Google re-indexing delay | High | Low | Submit sitemap + request indexing |

---

## Success Metrics

- [ ] 0 404 errors from old URLs
- [ ] 100% of old URLs redirect with 301
- [ ] Organic traffic maintained within 2 weeks
- [ ] All new pages indexed within 4 weeks
- [ ] Core Web Vitals "Good" on all pages
- [ ] Schema markup valid on all pages
