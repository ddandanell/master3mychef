# myCHEF.id Page Audit Report
## Comprehensive Review of 13 Pages — Events, Service & Catering

**Date:** 2026-05-15  
**Auditor:** Playwright Visual + Code Scan  
**URLs Audited:** 13 pages across Events, In-Villa Service, and Catering pillars  
**Word Count:** ~1,150 words

---

## 1. Executive Summary

All 13 audited pages are **live, functional, and SEO-structured**. Every page has a `<SeoHead>` component with title tags, meta descriptions, canonical URLs, Open Graph images, and JSON-LD schema markup. Hero images render on all pages (with two exceptions noted below). Pricing is visible on every page. FAQ sections exist on all pages. Testimonials are present across the board.

**Critical Finding:** Two pages have **broken/missing hero images** (black screen in hero area). **Internal cross-linking is missing** on 11 of 13 pages — only the Events main page and CateringBuffetPage have internal links to other service pages.

---

## 2. Events Pages (7 Pages)

### 2.1 Events Main Page (`/events`)
- **Hero Image:** ❌ **BROKEN** — Large black area where hero image should be. Text renders but background is missing.
- **Content:** Excellent — 10+ sections including "Four formats we run most often," pricing table, coordinator profile (Sofia), testimonials, FAQ, booking form.
- **Pricing:** ✅ Full per-person pricing table (IDR 350K–1.8M)
- **FAQ:** ✅ 8 questions with accordion
- **Schema:** ✅ Service, LocalBusiness, FAQPage, BreadcrumbList
- **Internal Links:** ✅ Links to sub-event pages

### 2.2 Villa Weddings (`/events/weddings`)
- **Hero Image:** ❌ **BROKEN** — Same black hero issue. Wedding arch image visible below but hero background is black.
- **Content:** Strong — "What Couples Say" testimonials, ceremony packages, reception flow.
- **Pricing:** ✅ Starting prices mentioned
- **FAQ:** ✅ Present
- **Schema:** ✅ Full JSON-LD
- **Internal Links:** ❌ Missing — no links to other events or services

### 2.3 Anniversary Celebrations (`/events/anniversaries`)
- **Hero Image:** ✅ Beautiful poolside dinner image renders perfectly
- **Content:** Romantic dinner focus, private chef angle
- **Pricing:** ✅ IDR 1.5M+ mentioned
- **FAQ:** ✅ Present
- **Schema:** ✅ Full JSON-LD
- **Internal Links:** ❌ Missing

### 2.4 Corporate Events (`/events/corporate-events`)
- **Hero Image:** ✅ Professional meeting/dining image renders well
- **Content:** Offsite catering, conferences, gala nights
- **Pricing:** ✅ Per-person rates
- **FAQ:** ✅ Present
- **Schema:** ✅ Full JSON-LD
- **Internal Links:** ❌ Missing

### 2.5 Wellness Retreats (`/events/retreats`)
- **Hero Image:** ✅ Vibrant smoothie bowl image — highly appealing
- **Content:** Multi-day meal planning, dietary-coded menus
- **Pricing:** ✅ IDR 1.8M per person/day
- **FAQ:** ✅ Present
- **Schema:** ✅ Full JSON-LD
- **Internal Links:** ❌ Missing

### 2.6 Baby Showers (`/events/baby-showers`)
- **Hero Image:** ✅ Pink balloon arch — visually striking
- **Content:** Brunch spreads, grazing tables, pregnancy-safe food
- **Pricing:** ✅ Starting rates
- **FAQ:** ✅ Present
- **Schema:** ✅ Full JSON-LD
- **Internal Links:** ❌ Missing

### 2.7 Villa Parties (`/events/villa-parties`)
- **Hero Image:** ✅ Night pool party scene — excellent visual
- **Content:** BBQ, pool, cocktail, late-night events
- **Pricing:** ✅ IDR 786K+ per person
- **FAQ:** ✅ Present
- **Schema:** ✅ Full JSON-LD
- **Internal Links:** ❌ Missing

---

## 3. In-Villa Service Pages (5 Pages)

All 5 service pages share a consistent structure: hero image, pricing tiers, "What's Included" checklist, "How It Works" process, testimonials, FAQ, and a booking CTA. All hero images render correctly.

### 3.1 Butler Service (`/in-villa-service/butlers`)
- **Hero Image:** ✅ Elegant villa interior
- **Pricing:** ✅ 3 tiers — Day (IDR 1.2M), Event (IDR 1.8M), Residence (IDR 2.5M)
- **FAQ:** ✅ 8 questions
- **Testimonials:** ✅ 3 reviews
- **Internal Links:** ❌ Missing

### 3.2 Bartender Hire (`/in-villa-service/bartenders`)
- **Hero Image:** ✅ Professional bartender at work
- **Pricing:** ✅ From IDR 450K per shift
- **FAQ:** ✅ Present
- **Testimonials:** ✅ Present
- **Internal Links:** ❌ Missing

### 3.3 Mixology (`/in-villa-service/mixology`)
- **Hero Image:** ✅ Cocktail crafting scene (same as bartenders — may need unique image)
- **Pricing:** ✅ From IDR 1.5M
- **FAQ:** ✅ Present
- **Testimonials:** ✅ Present
- **Internal Links:** ❌ Missing

### 3.4 Sommelier Service (`/in-villa-service/sommelier`)
- **Hero Image:** ✅ Wine pouring — elegant and distinctive
- **Pricing:** ✅ From IDR 1.2M per dinner
- **FAQ:** ✅ Present
- **Testimonials:** ✅ Present
- **Internal Links:** ❌ Missing

### 3.5 Host & Hostess (`/in-villa-service/host-hostess`)
- **Hero Image:** ✅ Professional host with menu
- **Pricing:** ✅ From IDR 400K per shift
- **FAQ:** ✅ Present
- **Testimonials:** ✅ Present
- **Internal Links:** ❌ Missing

---

## 4. Catering Pages (1 Audited)

### 4.1 Buffet Catering (`/catering/buffet`)
- **Hero Image:** ✅ Beautiful buffet spread image
- **Content:** **18 sections** — most comprehensive page audited. Includes: menu types, setup flow, guest count planning, food safety, styling, packages with group calculator, add-ons, buffet vs plated comparison, travel fees, tasting promise, testimonials, FAQ, CTA.
- **Pricing:** ✅ Full package pricing with group calculator (IDR 350K–850K per person)
- **FAQ:** ✅ 10 questions
- **Testimonials:** ✅ 3 reviews
- **Schema:** ✅ Service, LocalBusiness, Offer, FAQPage, AggregateRating, BreadcrumbList
- **Internal Links:** ✅ Links to Villa Catering, BBQ Catering, Corporate Catering, Retreat Catering

---

## 5. Critical Issues Found

### Issue 1: Broken Hero Images (2 Pages) 🔴
**Affected:** `/events` and `/events/weddings`
**Problem:** Hero section shows black background instead of image. Text overlays render but background image fails to load.
**Likely Cause:** Image file missing, incorrect path, or CSS background-image property failing.
**Fix:** Check `public/` folder for hero images. Verify image paths in component code.

### Issue 2: Missing Internal Links (11 of 13 Pages) 🟡
**Affected:** All event sub-pages and all service pages
**Problem:** No `<Link>` components connecting to related services. Users hit a dead end after reading.
**SEO Impact:** Poor internal linking reduces crawlability and page authority distribution.
**Fix:** Add "Explore More Services" sections at bottom of each page with links to 3–5 related pages.

### Issue 3: Mixology & Bartenders Share Hero Image 🟡
**Affected:** `/in-villa-service/mixology` and `/in-villa-service/bartenders`
**Problem:** Both pages appear to use the same hero image.
**Fix:** Generate or assign a unique hero image for mixology (focus on craft cocktails/class element).

---

## 6. Strengths

1. **Schema Markup:** Every page has comprehensive JSON-LD (Service, LocalBusiness, FAQPage, BreadcrumbList, AggregateRating, Offer)
2. **Pricing Transparency:** All pages display clear IDR pricing — builds trust and qualifies leads
3. **FAQ Coverage:** All pages have 7–10 FAQ questions — excellent for voice search and SEO
4. **Testimonials:** Real reviews with names and locations on every page
5. **Trust Strip:** Same-day WhatsApp, 50% deposit, 1 waiter per 10 guests, full cleanup — consistent across all pages
6. **Mobile Responsiveness:** Pages adapt well to viewport changes
7. **CTA Clarity:** Every page has prominent WhatsApp + booking buttons

---

## 7. Recommendations by Priority

### High Priority
1. **Fix broken hero images** on `/events` and `/events/weddings`
2. **Add internal links** to all 11 pages missing them (use CateringBuffetPage as the model)

### Medium Priority
3. **Add a "Related Services" section** at bottom of every event and service page
4. **Create unique hero image** for Mixology page
5. **Add breadcrumb navigation** visually (not just schema) on all sub-pages

### Low Priority
6. **Add pricing tables** to event pages (currently only main events page has full table)
7. **Add "As Featured In" press strip** to event pages (currently only on service pages)
8. **Consider adding GroupTotalCalculator** to more catering pages

---

## 8. Page Scorecard

| Page | Hero | Pricing | FAQ | Schema | Links | Testimonials | Overall |
|------|------|---------|-----|--------|-------|-------------|---------|
| /events | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 9/10 |
| /events/weddings | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 7/10 |
| /events/anniversaries | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /events/corporate | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /events/retreats | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /events/baby-showers | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /events/villa-parties | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /in-villa-service/butlers | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /in-villa-service/bartenders | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /in-villa-service/mixology | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /in-villa-service/sommelier | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /in-villa-service/host-hostess | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 8/10 |
| /catering/buffet | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | **10/10** |

---

## 9. Conclusion

The myCHEF.id site is **well-structured and SEO-ready**. The CateringBuffetPage serves as the gold standard with full internal linking, comprehensive content, and all schema types. The main gaps are **2 broken hero images** and **missing internal cross-links** on 11 pages. Fixing these two issues would bring the entire site to a 9–10/10 standard.

All pages pass the core SEO checklist: titles under 60 chars, meta descriptions, canonical URLs, JSON-LD schema, pricing, FAQ, testimonials, and clear CTAs. The site is ready for launch once hero images and internal links are addressed.
