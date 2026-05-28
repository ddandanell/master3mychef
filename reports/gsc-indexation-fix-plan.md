# Google Search Console Indexation Fix Plan
Date: 2026-05-22
Priority: CRITICAL

## Problem Summary

86 pages: "Discovered – currently not indexed" (never crawled, last_crawled=1970-01-01)

These pages are in sitemap.xml but Google found them and chose NOT to index them.

Root causes:
1) **SPA architecture** - Google gets blank HTML shell, relies 100% on JS execution
2) **Low perceived quality/value signals** - Google crawled once, decided not worth indexing
3) **Weak internal linking** - pages may be orphaned or hard to reach
4) **Duplicate FAQPage schema** - structured data error blocking rich results

## Affected Pages (86 total)

### High-value targets (fix first):
- /bali-wedding-catering-packages
- /michelin-private-chef-bali-prices  
- /private-tasting-menu-bali
- /chef-table-experience-bali
- /villa-bbq-catering-bali
- /corporate-retreat-catering-bali
- /luxury-birthday-party-bali
- /seafood-bbq-catering-bali
- /group-villa-dinner-packages-bali
- /hire-private-chef-bali-monthly
- /villa-staff-bali-agency
- /butler-service-bali-daily-rate

### Service pages (35):
- /catering/* (10 pages: babi-guling, bbq-catering, buffet, corporate, drop-off, floating-breakfast, grazing-tables, plated, retreat, villa)
- /fine-dining/* (5 pages: chefs-table, our-chefs, private-chef-bali, romantic-dinner, tasting-menu)
- /events/* (6 pages: anniversaries, baby-showers, birthdays, retreats, villa-parties, weddings)
- /in-villa-service/* (5 pages: bartenders, butlers, host-hostess, mixology, waiters)
- /staffing/* (4 pages: for-hotels-restaurants, for-villa-managers, household-staff, villa-staff)

### Location pages (24):
All /locations/* except seminyak/canggu/sanur/nusa-dua (those 4 ARE indexed)
- amed, berawa, bsd, bukit, candidasa, denpasar, gianyar, jakarta, jimbaran, kemang, kerobokan, kuta, legian, lovina, menteng, padang-bai, pecatu, pererenan, petitenget, pondok-indah, scbd, tabanan, tanah-lot, tegallalang, ubud, uluwatu, ungasan

### Blog pages (12):
- All 12 blog posts

### Utility pages:
- /book
- /pricing  
- /honeymoon-chef
- /proposal-dinner
- /private-chef-for-events
- /best-private-chef-indonesia
- /luxury-chef-indonesia
- /wedding-catering-indonesia
- /private-dining-indonesia
- /healthy-meal-delivery-indonesia

## Canonical Tag Issue

8 pages report: "Alternative page with proper canonical tag"
- /canggu
- /services/villa-parties
- /ubud
- /nusa-dua
- /private-dining-indonesia
- /jimbaran
- /tabanan
- /ungasan

These are redirecting or pointing canonical to another URL. Need to check:
1) Are these old URLs that should 301 redirect?
2) Are canonicals pointing to wrong URLs?

## Action Plan (Execute Now)

### Phase 1: Fix Duplicate FAQPage Schema (BLOCKER)
1) Audit all pages with FAQ structured data
2) Find duplicate FAQPage declarations
3) Consolidate to single FAQPage per page
4) Validate with Google Rich Results Test
5) Submit validation request in GSC

### Phase 2: Fix Canonical Issues
1) Check routing for /canggu, /ubud, /nusa-dua, /jimbaran, /tabanan, /ungasan
2) Verify they resolve to /locations/* or are proper 301 redirects
3) Fix /services/villa-parties canonical (should point to /events/villa-parties?)
4) Fix /private-dining-indonesia canonical

### Phase 3: Server-Side Render (SSR) Critical Pages
Google is seeing blank HTML shells. Options:
A) Add prerender.io / prerender-spa-plugin for Googlebot
B) Convert to Next.js SSG/ISR for static HTML delivery
C) Use vite-plugin-ssg to generate static HTML at build time

**Immediate action**: Add prerendering for top 20 high-value pages

### Phase 4: Strengthen Internal Linking
1) Add contextual links from homepage to top services
2) Link location pages from each other (nearby locations)
3) Add service cross-links (catering ↔ events ↔ fine-dining)
4) Blog posts must link to service pages

### Phase 5: Content Quality Signals
1) Add unique value to each page (not template copy)
2) Add local expertise signals (chef bios, local ingredients)
3) Add trust signals (reviews, certifications, experience)
4) Add compelling CTAs with conversion tracking

### Phase 6: Submit Indexing Requests
1) Use Google Indexing API for priority pages (top 20)
2) Request inspection + index via GSC for next 30
3) Let remaining pages get discovered naturally after fixes

## Technical Implementation

### Fix 1: Detect and Remove Duplicate FAQPage

```bash
cd '/Users/openclaw/Downloads/MYCHEF . MASTER/app'
grep -r "FAQPage" src/ --include="*.tsx" --include="*.ts"
```

Check SeoHead.tsx line 174 and any page-level FAQ schema.

### Fix 2: Add SSR/Prerendering

Install vite-plugin-ssg or prerender-spa-plugin:

```bash
npm install -D vite-plugin-ssg
```

Configure in vite.config.ts to generate static HTML for all sitemap URLs.

### Fix 3: Fix Canonical Redirects

Check App.tsx routing for:
- /canggu → should redirect to /locations/canggu
- /ubud → should redirect to /locations/ubud  
- /nusa-dua → should redirect to /locations/nusa-dua
- /jimbaran → should redirect to /locations/jimbaran
- /tabanan → should redirect to /locations/tabanan
- /ungasan → should redirect to /locations/ungasan
- /services/villa-parties → should redirect to /events/villa-parties

Add proper 301 redirects or fix canonical tags.

## Expected Outcomes

After fixes:
- Duplicate FAQPage error resolved → rich results eligible
- 86 "not indexed" pages → submitted for re-crawl
- SSR delivers real HTML → better first-paint indexability
- Stronger internal linking → better crawl discovery
- Canonical issues resolved → no duplicate content confusion

Timeline:
- Phase 1 (schema fix): 30 min
- Phase 2 (canonicals): 30 min  
- Phase 3 (SSR): 2-4 hours
- Phase 4 (internal links): 1-2 hours
- Phase 5 (content): ongoing
- Phase 6 (indexing requests): 1 hour

Total: ~6-8 hours focused work, then 2-4 weeks for Google re-crawl and re-evaluation.

## Next Steps

Execute phases 1-3 immediately, then monitor GSC for re-crawl activity.
