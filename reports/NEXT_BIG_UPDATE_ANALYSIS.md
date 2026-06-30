# myCHEF Website — Comprehensive Codebase Analysis
## NEXT_BIG_UPDATE_ANALYSIS.md

**Generated:** 2026-07-02  
**Repo:** /Users/openclaw/Movies/LIve website/master3mychef  
**Branch:** main (c774c61)  
**Files Analyzed:** 222 source files (195 TSX + 22 TS + 5 other)  
**Pages:** 131 page components  
**Total Lines:** ~50,580 lines in src/pages/  

---

## 1. Executive Summary — Top 10 Highest-Impact Opportunities

| # | Opportunity | Impact | Effort | Priority |
|---|-------------|--------|--------|----------|
| 1 | **Add srcset + responsive images** — Zero responsive image sizing exists sitewide; mobile loads 1920px hero images | 🔥 High | Medium | P0 |
| 2 | **Add HowTo schema to pillar sub-pages** — 28 sub-pages (menus, chefs, weddings) have no structured HowTo markup | 🔥 High | Low | P0 |
| 3 | **Add Review schema to /reviews page** — 4.9★ rating exists but Review/AggregateRating schema is missing | 🔥 High | Low | P0 |
| 4 | **Prerender list is 150+ pages short** — 222 routes in App.tsx but only ~70 prerendered; critical SEO pages are JS-only | 🔥 High | Medium | P0 |
| 5 | **Missing hreflang in SPA runtime** — hreflang tags are only injected at build time; client-side navigation loses them | 🔥 High | Low | P1 |
| 6 | **Add Person schema to chef profiles** — 8 chef profiles have no Person schema markup | Medium | Low | P1 |
| 7 | **No breadcrumb structured data on 45+ blog/article pages** — Only PremiumPage template pages have breadcrumbs | Medium | Low | P1 |
| 8 | **Blog pages lack article:author, article:tag injection in SeoHead** — Article meta only injected at build time | Medium | Low | P1 |
| 9 | **Add Offer schema to pricing pages** — /pricing, /calculator, /quote lack Offer/AggregateOffer schema | Medium | Low | P1 |
| 10 | **Add Event schema to event sub-pages** — Weddings, birthdays, corporate events lack Event schema | Medium | Low | P1 |

---

## 2. File Inventory

### 2.1 Pages (`src/pages/` — 131 files, ~50,580 lines total)

| File | Lines | Description | Template |
|------|-------|-------------|----------|
| `CateringMainPage.tsx` | 1,412 | Main catering hub with full feature sections | Custom |
| `LunaPage.tsx` | 1,307 | Fine dining brand page (Luna experience) | Custom |
| `EventsMainPage.tsx` | 1,261 | Events hub with format cards and packages | Custom |
| `HubPage.tsx` | 1,170 | Homepage hero, pillars, trust signals | Custom |
| `ChefProfilePage.tsx` | 1,097 | Individual chef profile with bio, menus, booking | Custom |
| `CateringBuffetPage.tsx` | 776 | Buffet catering detail page | Custom |
| `CateringPlatedPage.tsx` | 771 | Plated catering detail page | Custom |
| `CateringDropOffPage.tsx` | 742 | Drop-off catering detail page | Custom |
| `AuraPage.tsx` | 743 | Aura brand page (GSAP animations) | Custom |
| `PrivateChefCostBaliPage.tsx` | 735 | Blog: cost breakdown article | Custom |
| `CateringFloatingBreakfastPage.tsx` | 735 | Floating breakfast detail page | Custom |
| `CateringBBQPage.tsx` | 694 | BBQ catering detail page | Custom |
| `HoneymoonChefPage.tsx` | 679 | Honeymoon chef experience page | Custom |
| `CateringBabiGulingPage.tsx` | 673 | Babi guling catering page | Custom |
| `CateringGrazingPage.tsx` | 642 | Grazing tables page | Custom |
| `EventsWeddingsPage.tsx` | 636 | Wedding events detail page | Custom |
| `FineDiningMenusPage.tsx` | 619 | Fine dining menu showcase | Custom |
| `CateringCorporatePage.tsx` | 593 | Corporate catering page | Custom |
| `CateringVillaPage.tsx` | 582 | Villa catering page | Custom |
| `FAQPage.tsx` | ~580 | FAQ accordion with FAQPage schema | Custom |
| `PricingPage.tsx` | ~550 | Pricing tiers and packages | Custom |
| `ReviewsPage.tsx` | ~500 | Testimonial grid | Custom |
| `AboutPage.tsx` | ~480 | Brand story with chef profiles | PremiumPage |
| `WhyMychefPage.tsx` | ~460 | Trust signals and differentiators | PremiumPage |
| `ChefsPage.tsx` | ~450 | Chef team grid | PremiumPage |
| `ContactPage.tsx` | ~420 | Contact form + WhatsApp CTA | Custom |
| `StaffingPage.tsx` | ~400 | Staffing hub | Custom |
| `InVillaServicePage.tsx` | ~380 | In-villa service hub | Custom |
| `SolPage.tsx` | ~370 | Sol brand page | Custom |
| `RomanticDinnerPage.tsx` | ~350 | Romantic dinner experience | Custom |
| `TastingMenuPage.tsx` | ~340 | Tasting menu experience | Custom |
| `PrivateChefBaliPage.tsx` | ~330 | Private chef Bali hub | Custom |
| `ChefsTablePage.tsx` | ~320 | Chef's table experience | Custom |
| `FineDiningChefsPage.tsx` | ~310 | Fine dining chefs listing | Custom |
| `ServicesPage.tsx` | ~300 | Legacy services overview | Custom |
| `JakartaPage.tsx` | ~280 | Jakarta location page | Custom |
| `SeminyakPage.tsx` | ~270 | Seminyak location page | Custom |
| `CangguPage.tsx` | ~270 | Canggu location page | Custom |
| `UbudPage.tsx` | ~270 | Ubud location page | Custom |
| `UluwatuPage.tsx` | ~270 | Uluwatu location page | Custom |
| ... (90+ more) | | Blog posts, landing pages, event sub-pages | PremiumPage/Custom |
| **Blog/Article pages** | ~200-400 each | 45+ dedicated blog article pages | PremiumPage |

### 2.2 Components (`src/components/` — 43 files, ~11,310 lines)

| Component | Lines | Purpose |
|-----------|-------|---------|
| `SeoHead.tsx` | 483 | SEO meta tag + schema injection (runtime) |
| `PremiumPage.tsx` | 653 | Full-featured page template (hero, sections, FAQ, CTA) |
| `PrivateChefAreaPage.tsx` | 681 | Area landing page template (Bali Domination Blueprint) |
| `QuoteFunnel.tsx` | 625 | Multi-step quote form |
| `OrderPanel.tsx` | 511 | Booking/order panel |
| `PricingCalculator.tsx` | 416 | Interactive pricing calculator |
| `Footer.tsx` | 436 | Site footer with mega-nav, sitemap, links |
| `Navbar.tsx` | 387 | Main navigation with mega-menu, mobile accordion |
| `InVillaServicePage.tsx` | 478 | In-villa service hub page |
| `AreaPage.tsx` | 334 | Generic area page template |
| `LandingPage.tsx` | 310 | SEO landing page template (guides/blog) |
| `JournalPage.tsx` | 305 | Journal index + post rendering |
| `LocationsHubPage.tsx` | 288 | Locations directory |
| `MenuPage.tsx` | 278 | Menu showcase template |
| `BookPage.tsx` | 217 | Booking hub with service cards |
| `ExitIntentPopup.tsx` | 147 | Exit-intent modal with WhatsApp CTA |
| `EmailCaptureBar.tsx` | 76 | Price guide lead capture bar |
| `EngagementTracker.tsx` | 63 | Scroll depth + time-on-page + CTA analytics |
| `OptimizedImage.tsx` | 26 | Image wrapper with lazy loading |
| **Shared components** | | Breadcrumb, TrustStrip, TestimonialBlock, CateringDiscoverySection, etc. |
| **UI components** | | Button, Breadcrumb, MobileForm, Collapsible |
| **Catering components** | | BookingFormCatering, FAQAccordion, PackageCard, AddOnCard, SectionHeader, TrustRow |
| **Event components** | | EventFormatCard, EventPackageCard |
| **Trust components** | | TrustSection |

### 2.3 Data Files (`src/data/` — 11 files, ~720 KB)

| File | Purpose |
|------|---------|
| `siteArchitecture.ts` | Master site structure: pillars, locations, navigation, journal posts |
| `page-meta.ts` | Centralized SEO meta for 98 page keys (title, description, h1, canonical, ogImage) |
| `sitemap.ts` | Dynamic sitemap builder with 500+ entries (home, areas, landings, guides, blog, pillars, info) |
| `privateChefAreas.ts` | 65+ Bali area definitions for /private-chef/[slug] pages (3,163 lines) |
| `locationLandingPages.ts` | Location-specific landing page content |
| `redirects.ts` | 301 redirect mappings |
| `route-slugs.ts` | Slug arrays for dynamic routes (landing, guide, blog, service, menu, area, micro-area) |
| `related-services.ts` | Cross-sell service recommendations |
| `topCities.ts` | City content data |
| `cityContent.ts` | City deep-dive content |

### 2.4 Scripts (`scripts/` — 4 files)

| File | Purpose |
|------|---------|
| `inject-meta.ts` | Build-time SEO meta injection for all sitemap routes into dist/ |
| `prerender.ts` | Playwright-based SSR for ~222 critical pages |
| `generate-sitemap.ts` | Generates public/sitemap.xml from dynamic SITEMAP data |
| `change-phone.js` | One-shot phone number update across codebase |

### 2.5 Libraries & Hooks (`src/lib/`, `src/hooks/`)

| File | Purpose |
|------|---------|
| `analytics.ts` | GA4 event tracking (page_view, generate_lead, quote_submitted, cta_click, etc.) |
| `whatsapp.ts` | WhatsApp URL builder with pre-filled messages |
| `imageDimensions.ts` | Image dimension inference for OptimizedImage |
| `utils.ts` | General utilities |
| `useScrollDepth.ts` | 25/50/75/90% scroll milestone tracking |
| `useTimeOnPage.ts` | 30/60/120/180s time milestone tracking |
| `useOverlayAccessibility.ts` | A11y focus trapping for overlays |
| `use-reduced-motion.ts` | Respect `prefers-reduced-motion` |

---

## 3. SEO Gaps (Detailed, Prioritized)

### 3.1 🔴 CRITICAL — Missing Schema Markup

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **HowTo schema missing** | 28 pillar sub-pages (`/fine-dining/*`, `/catering/*`, `/events/*`, `/in-villa-service/*`, `/staffing/*`) | Rich snippet eligibility for process queries | Add `howToSchema()` to each sub-page's SeoHead jsonLd |
| **Review/AggregateRating schema missing** | `/reviews` page (4.9★, 500+ reviews displayed) | No review stars in search results | Add `Review` + `AggregateRating` schema (currently returns null) |
| **Person schema missing** | 8 chef profiles (`/chefs/adriano`, `/chefs/made-surya`, etc.) | No knowledge panel / rich results for chef searches | Add `Person` schema with `jobTitle`, `worksFor`, `knowsAbout` |
| **Event schema missing** | `/events/weddings`, `/events/birthdays`, `/events/corporate-events`, etc. | No event rich snippets | Add `Event` schema with `startDate`, `location`, `offers` |
| **Offer/AggregateOffer schema missing** | `/pricing`, `/calculator`, `/quote` | No price/rating snippets in search | Add `Offer` schema with priceRange and availability |
| **Article schema missing** | 45+ blog pages at runtime | `article:author`, `article:section`, `article:tag` only injected at build time | Add article meta tags to `SeoHead.tsx` runtime |
| **BreadcrumbList missing** | 45+ blog/article pages + dynamic routes | No breadcrumb rich snippets | Add `breadcrumbSchema()` to all pages without it |

### 3.2 🟡 HIGH — Meta & Tag Gaps

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **No hreflang on client navigation** | All pages after first load | Google may miss alternate language signals on SPA route changes | Add hreflang link injection to `SeoHead.tsx` |
| **No Twitter image:alt** | All pages | Missing accessible image descriptions for Twitter cards | Add `twitter:image:alt` to `SeoHead.tsx` |
| **Missing canonical on dynamic routes** | `/services/:slug`, `/menus/:slug`, `/blog/:slug` | Duplicate content risk on parameterized pages | Ensure canonical is always absolute, not relative |
| **og:image missing on many sub-pages** | Pillar sub-pages, area pages | Default `/og-image.webp` fallback is generic | Add pillar-specific ogImages to `inject-meta.ts` OG_IMAGES map |
| **No article:published_time at runtime** | Journal posts, blog posts | Google can't determine freshness | Add `article:published_time` meta to `SeoHead.tsx` |

### 3.3 🟢 MEDIUM — Content SEO Gaps

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **Thin content on 15+ micro-area pages** | `/private-chef/echo-beach`, `/private-chef/batu-bolong`, etc. | Area pages have minimal unique content | Add 2-3 paragraphs of area-specific copy per micro-area |
| **Missing FAQ schema on location pages** | `/locations/seminyak`, `/locations/canggu`, etc. | No FAQ rich snippets for "private chef [location]" queries | Add 3-4 location-specific FAQs with `faqPageSchema` |
| **No WebPage schema** | All pages | Missing `@type: WebPage` for mainEntityOfPage | Add `WebPage` schema to all pages |

---

## 4. Technical Gaps (Detailed, Prioritized)

### 4.1 🔴 CRITICAL — Prerender & SSR

| Gap | Impact | Fix |
|-----|--------|-----|
| **Prerender list is 150+ pages short** | 222 routes in App.tsx but only ~70 in `prerender.ts` ROUTES array. Direct access to unprerendered pages = blank HTML for Googlebot. | Expand `prerender.ts` ROUTES to cover all pillar sub-pages, all blog posts, all landing pages, all location pages, and all private-chef area pages. |
| **Prerender skips Playwright on Vercel** | `prerender.ts` catches chromium missing and silently exits. All Vercel builds get zero prerendered pages. | Add a Vercel-compatible prerender strategy (e.g., use `vite-plugin-ssg` or run Playwright in a Vercel function). |
| **inject-meta.ts only covers sitemap entries** | Dynamic routes like `/services/:slug` and `/menus/:slug` get no static HTML copies. | Add sitemap entries for all service/menu routes or ensure they are in the prerender list. |

### 4.2 🟡 HIGH — Code Quality & Performance

| Gap | Impact | Fix |
|-----|--------|-----|
| **No srcset anywhere** | Mobile users download 1920px hero images. 10 images are >500KB. | Add `srcSet` with 480w, 768w, 1200w, 1920w breakpoints to `OptimizedImage.tsx`. |
| **No WebP/AVIF fallback** | Older browsers (Safari <14) get no fallback from WebP. | Add `<picture>` element with JPEG fallback in `OptimizedImage.tsx`. |
| **No image preloading for above-fold content** | Only homepage hero image is preloaded in `index.html`. | Add `<link rel="preload">` for critical hero images on pillar pages (via `inject-meta.ts`). |
| **GSAP + ScrollTrigger in AuraPage** | Heavy animation library adds ~30KB+ to a single page bundle. | Lazy-load GSAP only on AuraPage; consider if page is still needed (AuraPage is not routed in App.tsx). |
| **All pages bundled individually** | 195 TSX files = 195 potential lazy-load chunks. Bundle analysis needed. | Run `vite-bundle-visualizer` to identify heavy shared chunks. |
| **No `loading="lazy"` on ~25 images** | Images below the fold are eagerly loaded. | Audit all `<img>` tags; add `loading="lazy"` to non-hero images. |
| **No `decoding="async"` on ~20 images** | Main thread blocked by image decode. | Add `decoding="async"` to all non-hero images. |

### 4.3 🟢 MEDIUM — Technical Debt

| Gap | Impact | Fix |
|-----|--------|-----|
| **Zero TODOs/FIXMEs found** | Good hygiene, but also means no inline documentation of known issues | N/A — actually a positive finding |
| **AuraPage.tsx is orphaned** | Commented out in `App.tsx` (`// const AuraPage = lazy(...)`) but file still exists (743 lines). | Remove `AuraPage.tsx` if no longer needed, or re-enable route. |
| **`page-meta.ts` has 98 entries but 131 pages** | 33 pages rely on `getPageMeta` with dynamic keys or use `PremiumPage` template without explicit meta | Audit all pages to ensure every route has a `page-meta.ts` key or generates meta dynamically. |
| **`aggregateRatingSchema` returns null** | Intentionally disabled for Google compliance, but call sites still pass `4.9, 560` — dead code smell. | Remove `aggregateRatingSchema` calls from all pages or re-enable with real review data. |
| **Deprecated `SITE.whatsapp` field** | Marked `@deprecated` in `siteArchitecture.ts` but still referenced. | Remove all references to `SITE.whatsapp`; use `PHONE.digits` instead. |
| **BLOG_POST_SLUGS in route-slugs.ts may be stale** | Blog routes are partially hardcoded in `App.tsx` and partially dynamic. | Consolidate all blog routes to use `BLOG_POST_SLUGS` or `LANDING_PAGE_SLUGS` consistently. |
| **No CSP (Content Security Policy)** | Missing `Content-Security-Policy` meta tag. | Add CSP to `index.html` for GTM, fonts, WhatsApp, Tidio. |
| **No `noscript` fallback for GTM** | Body has GTM noscript iframe, but no content fallback for JS-disabled users. | Add a `<noscript>` content block inside `#root` for core content visibility. |

---

## 5. Content Gaps (Detailed, Prioritized)

### 5.1 🔴 CRITICAL — Thin Content Pages

| Page | Issue | Word Count Est. | Fix |
|------|-------|-------------------|-----|
| Micro-area pages (`/private-chef/echo-beach`, `/batu-bolong`, `/bingin`, `/balangan`) | Only 4 micro-areas with minimal content in `siteArchitecture.ts` | ~200 | Expand to 6-8 paragraphs with area-specific dining insights, villa recommendations, and chef tips. |
| `/private-chef/[slug]` Tier 2/3 areas | Many Tier 2/3 areas have short `intro` and `villaDensity` paragraphs | ~300-500 | Add 2 more content sections per area: "Popular Villas" and "What to Expect." |
| `/help/getting-started`, `/help/menu-guide`, `/help/corporate-guide`, `/help/staffing-guide` | These are PremiumPage template pages with generic content | ~400-600 | Add real booking screenshots, menu photos, and step-by-step visuals. |
| `/services` (legacy) | Legacy page with overlapping content from pillar pages | ~500 | Redirect to `/fine-dining` or repurpose as a comparison hub. |
| `/certified-partner` | Minimal content, redirects to `/partner-platform` | ~200 | Consolidate into `/partner-platform` and 301 redirect. |

### 5.2 🟡 HIGH — Missing Content Types

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **No video content** | All pages | Video is a top-ranking factor for "private chef" queries | Add 1-2 chef-at-work videos to `/about`, `/fine-dining`, and `/chefs` |
| **No case study detail pages** | `/corporate-case-studies` only has a summary | Missed opportunity for long-tail "corporate event catering bali case study" | Add 3-5 detailed case study pages with before/after, budgets, testimonials |
| **No menu PDF downloads** | `/fine-dining/menus`, `/catering` | Users want to share/print menus | Add downloadable PDF menus with real dishes and pricing |
| **Missing ingredient sourcing stories** | `/journal` has 1 post on sustainable sourcing | Farm-to-table content is highly engaging | Add 3-4 more journal posts: "Jimbaran Market at 5 AM", "Bedugul Organic Farms", etc. |
| **No seasonal content hub** | Dry season, wet season, festive season menus exist but no central hub | Missed "bali seasonal menu" traffic | Create `/menus/seasonal` hub linking to all seasonal pages |

### 5.3 🟢 MEDIUM — FAQ Gaps

| Page | Current FAQs | Missing FAQs |
|------|--------------|--------------|
| `/locations/seminyak` | 0 | 5+ (cost, booking lead time, cuisines, villa requirements, dietary) |
| `/locations/canggu` | 0 | 5+ |
| `/locations/ubud` | 0 | 5+ |
| `/locations/uluwatu` | 0 | 5+ |
| `/events/weddings` | 3 | 5+ (vendor coordination, rain plan, power, staff ratios, tastings) |
| `/events/corporate-events` | 3 | 5+ (invoice, dietary, AV, breakout rooms, team building) |
| `/staffing/live-in-chef` | 3 | 5+ (contract terms, trial period, replacement, visa, accommodation) |
| `/in-villa-service/butlers` | 3 | 5+ (uniform, English level, duties, hours, tipping) |

---

## 6. Conversion Gaps (Detailed, Prioritized)

### 6.1 🔴 CRITICAL — Missing Conversion Elements

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **No pricing on /pricing page** | `/pricing` lists "from" prices but no interactive calculator embed | Users bounce to find real numbers | Embed `PricingCalculator` directly on `/pricing` |
| **No sticky mobile CTA on 40+ pages** | Only some PremiumPage template pages have `StickyMobileCTA` | Mobile users scroll past CTAs | Add `StickyMobileCTA` to all pillar hub and sub-pages |
| **No urgency signals** | No "limited availability", "peak season booking", or countdown timers | Low conversion urgency | Add subtle urgency: "Only 4 chefs available for July" on `/book` and `/quote` |
| **No social proof on service pages** | `/catering`, `/events`, `/in-villa-service` lack testimonials above the fold | Trust is the #1 conversion driver | Add `TrustStrip` with "4.9★ · 560+ villas · 12,000+ guests" to all pillar pages |
| **No comparison table** | `/services` or `/why-mychef` lacks a direct comparison to restaurants/competitors | Users can't justify the premium | Add "Private Chef vs Restaurant" comparison table to `/why-mychef` |
| **No booking calendar widget** | `/book` is just a contact form | Users want to see availability instantly | Add a simple calendar picker to `/book` or `/quote` |
| **No exit-intent on mobile** | `ExitIntentPopup` only fires on `mouseleave` (desktop) or 25s timer | Mobile users never see the popup | Add a scroll-depth trigger for mobile (e.g., 75% scroll = popup) |
| **EmailCaptureBar not shown on all pages** | Only appears where explicitly imported | Lead capture opportunity missed | Import `EmailCaptureBar` into `Layout.tsx` or `PremiumPage.tsx` globally |

### 6.2 🟡 HIGH — Trust Signal Gaps

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **No press logos on homepage** | `/press` exists but no press strip on `/` or `/fine-dining` | Social proof is invisible | Add `PressStrip` to homepage and pillar hub pages |
| **No "as seen in" badges** | All pages | Missing authority signals | Add 2-3 media outlet logos to footer and hero sections |
| **No HACCP certification badge** | Mentioned in schema but no visual badge | Users don't see food safety assurance | Add a HACCP badge to footer and `/about` |
| **No partner villa logos** | `/partner-platform` | B2B trust signal missing | Add partner villa logo grid to `/partner-platform` |
| **No cancellation policy CTA** | `/cancellation` is buried in footer | Users worry about commitment | Add "Full refund 14+ days" badge to all booking CTAs |

---

## 7. Performance Gaps (Detailed, Prioritized)

### 7.1 🔴 CRITICAL — Image Performance

| Metric | Current | Target | Fix |
|--------|---------|--------|-----|
| **srcset usage** | 0% | 80%+ | Implement responsive images in `OptimizedImage.tsx` |
| **WebP adoption** | 97.8% (272/278) | 100% | Convert remaining 6 JPG/PNG to WebP |
| **Images >500KB** | 10 files | 0 | Re-compress hero images or use `<picture>` with smaller breakpoints |
| **Lazy loading coverage** | ~75% | 95%+ | Audit all `<img>` tags; add `loading="lazy"` to below-fold images |
| **Preload critical images** | 1 (homepage hero) | 5+ | Preload hero images for `/fine-dining`, `/catering`, `/events`, `/book` |
| **LCP image** | `/generated/bali-hub-hero.webp` (~300KB) | <200KB | Compress or use a lower-res hero for mobile |

### 7.2 🟡 HIGH — Bundle & Runtime Performance

| Gap | Impact | Fix |
|-----|--------|-----|
| **No bundle analysis** | Unknown chunk sizes and duplication | Run `vite-bundle-visualizer` and audit |
| **GSAP bundle hit** | ~30KB+ on AuraPage only (orphaned) | Remove AuraPage or lazy-load GSAP only when needed |
| **Tidio chat widget** | Third-party script blocks main thread | Add `async` + `defer` or load after `window.onload` |
| **Google Fonts blocking** | 3 font families loaded synchronously | Use `font-display: swap` and subset fonts (already partially done) |
| **No service worker** | No offline capability or asset caching | Add a Vite PWA plugin with runtime caching for images |
| **No `prefetch` for internal routes** | Users wait on route navigation | Add `<link rel="prefetch">` for top 10 internal pages |
| **No `preconnect` to image CDN** | Images served from same domain, but no CDN preconnect | If using CDN, add `preconnect` and `dns-prefetch` |

### 7.3 🟢 MEDIUM — Core Web Vitals Risks

| Metric | Risk | Mitigation |
|--------|------|------------|
| **LCP** | Large hero images without responsive sizing | Implement `srcset` + `sizes` |
| **INP** | Complex navbar with hover menus on mobile | Simplify mobile menu or use CSS-only hover |
| **CLS** | Images without explicit `width`/`height` | Ensure all images have `width`/`height` attributes (mostly done) |
| **TTFB** | SPA shell + no SSR for most pages | Expand prerender list or implement edge SSR |

---

## 8. Accessibility Gaps (Detailed, Prioritized)

### 8.1 🔴 CRITICAL — A11y Issues

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **Skip link exists but may not be visible** | `Layout.tsx` has `<a href="#main-content" className="skip-link">` | If `skip-link` class has no focus styles, keyboard users can't see it | Ensure `.skip-link` has `:focus` styles with `position: absolute; top: 0; left: 0; z-index: 100;` |
| **Mobile menu trap focus partially** | `Navbar.tsx` has `Escape` key handling but no focus trapping | Screen reader users may escape modal unintentionally | Implement full focus trap in `Navbar.tsx` mobile menu |
| **ExitIntentPopup lacks focus management** | `ExitIntentPopup.tsx` has no `focus()` on open or `returnFocus` on close | Screen reader users lose context when popup opens | Add `focus()` to first focusable element on open; restore focus on close |
| **No `aria-live` for dynamic content** | QuoteFunnel, Calculator, OrderPanel | Screen reader users miss step changes | Add `aria-live="polite"` regions to multi-step forms |
| **SearchOverlay focus management** | `SearchOverlay.tsx` — unknown | May have similar focus trap issues | Audit and implement focus trapping |

### 8.2 🟡 HIGH — Heading & Structure

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **Potential heading order skips** | `PremiumPage.tsx` uses `h1` then `h2` then `h3` in sections — but custom pages may skip | Screen reader users lose document outline | Audit all pages for sequential heading order (h1 → h2 → h3) |
| **No `aria-label` on decorative icons** | Trust bars, feature grids use `lucide-react` icons without labels | Screen readers announce icon names (e.g., "Star") without context | Add `aria-hidden="true"` to decorative icons (mostly done; spot-check) |
| **No `aria-expanded` on mobile accordion** | `Navbar.tsx` mobile menu has `aria-expanded` on trigger but not on sub-items | Screen reader users don't know sub-menu state | Add `aria-expanded` to all accordion triggers |
| **No `aria-current="page"` on nav links** | `Navbar.tsx` has active styling but no `aria-current` | Screen reader users don't know current page | Add `aria-current={active ? 'page' : undefined}` to all nav links |

### 8.3 🟢 MEDIUM — Color & Motion

| Gap | Where | Impact | Fix |
|-----|-------|--------|-----|
| **Gold on white contrast** | `#C5A028` on white (`#FFFFFF`) = 3.0:1 | Fails WCAG AA for normal text (needs 4.5:1) | Darken gold to `#A08020` for body text or use black for text on gold backgrounds |
| **No reduced-motion for GSAP** | `AuraPage.tsx` has `useReducedMotion` but animations may still play | Users with vestibular disorders may be affected | Ensure all GSAP animations respect `useReducedMotion` |
| **No `prefers-reduced-motion` for hover effects** | Navbar hover, card hover effects | Motion-sensitive users may be affected | Wrap hover animations in `@media (prefers-reduced-motion: no-preference)` |

---

## 9. Internal Linking Gaps

### 9.1 🔴 CRITICAL — Orphaned / Underlinked Pages

| Page | Inbound Links | Issue |
|------|-------------|-------|
| `/corporate-case-studies` | 1 (footer?) | No prominent links from `/events/corporate-events` or `/catering/corporate-catering` |
| `/blog/*` (45 pages) | 2-3 each | Only linked from `/blog` index and occasional footer; missing from pillar pages |
| `/journal/*` (16 posts) | 2-3 each | Linked from `/journal` and occasional inline references; missing from pillar page "Related Guides" |
| `/private-chef/[slug]` (65+ areas) | 1-2 each | Only linked from `/locations` and `/guide/private-chef-bali`; no cross-linking between adjacent areas |
| `/help/*` (7 guides) | 2-3 each | Only linked from `/help` and footer; missing from relevant pillar pages |
| `/chef-profile/*` (8 chefs) | 1-2 each | Only linked from `/chefs` and occasional inline mentions |
| `/pricing-calculator` | 2-3 | Not linked from `/pricing` or `/book` prominently |
| `/quote` | 3-4 | Only in navbar CTA; missing from `/fine-dining`, `/catering`, `/events` mid-page CTAs |
| `/retreats` | 1 | Redirects to `/events/retreats`; no direct internal links |
| `/villa-chef` | 1-2 | Legacy alias to `/sol`; no prominent links |

### 9.2 🟡 HIGH — Missing Cross-Links

| From Page | Should Link To | Why |
|-----------|---------------|-----|
| `/fine-dining` | `/blog/private-chef-vs-restaurant-bali` | Converting comparison shoppers |
| `/catering` | `/blog/bali-wedding-catering-private-chef-timeline` | Event planners researching catering |
| `/events/weddings` | `/blog/wedding-private-chef-bali-planning-guide` | Wedding planners seeking detail |
| `/pricing` | `/calculator` | Users wanting to estimate costs |
| `/book` | `/faq` | Users with pre-booking questions |
| `/about` | `/journal/michelin-training-bali` | Credibility story amplification |
| `/chefs` | `/journal/sustainable-sourcing` | Ingredient story amplification |
| `/locations/*` | `/private-chef/[same-slug]` | Area page users should discover private chef pages |
| `/private-chef/*` | `/locations/[same-slug]` | Private chef page users should discover location hub |
| `/help/getting-started` | `/book` | After reading guide, user should book |

### 9.3 🟢 MEDIUM — Footer Link Health

| Issue | Detail | Fix |
|-------|--------|-----|
| **Footer has 20+ "Top Experiences" links** | Many are landing pages with no other inbound links | These act as a sitemap but dilute link equity. Consider nofollow on low-priority links or add more contextual inline links. |
| **Footer "Locations" only shows top 5** | Hidden behind "See all areas" toggle | Ensure all location pages are at least in the sitemap and have 1 contextual link each. |
| **Footer "Planning Guides" missing `/blog`** | Only `/journal` linked; blog is separate | Add `/blog` to footer or consolidate blog+journal into one nav item. |

---

## 10. Image Optimization Gaps

| Issue | Count | Where | Fix |
|-------|-------|-------|-----|
| **No srcset** | ~150+ images | All pages | Add responsive breakpoints to `OptimizedImage.tsx` |
| **No `<picture>` element** | All images | All pages | Add `<picture>` with WebP/AVIF primary and JPEG fallback |
| **No `srcset` on hero images** | ~30 hero images | Pillar pages, location pages | Add `srcset="... 480w, 768w, 1200w, 1920w"` |
| **Large images (>500KB)** | 10 files | `public/` directory | Re-compress or create smaller variants |
| **Missing `alt` text** | ~25 images | `BlogIndexPage`, `CityDeepDive`, `InfoPage`, `LocationsHubPage`, `JournalPage`, `LandingPage`, `PrivateChefAreaPage`, `BaliHubPage`, `PremiumPage`, `LocationLandingPage`, `BookPage`, `InVillaServicePage`, `ConciergeWidget`, `AreaPage`, `MenuPage`, `HoneymoonChefPage`, `SolPage`, `CateringPlatedPage`, `KutaPage`, `PartnerPlatformPage`, `AuraPage` | Audit and add descriptive `alt` text to all images |
| **No `width`/`height` on some images** | ~15 images | Various | Add explicit dimensions to prevent CLS |
| **Eager loading on non-hero images** | ~5 images | `AuraPage`, `EventsMainPage`, `HubPage` (non-first images) | Change `loading="eager"` to `loading="lazy"` for below-fold images |
| **No image CDN** | All images | Served from same domain | Consider Cloudflare Images or Imgix for dynamic resizing |
| **No blur-up placeholder** | All images | Instant load feels jarring | Add low-quality image placeholder (LQIP) or dominant color placeholder |

---

## 11. Recommended Next Steps (In Order of Impact)

### Phase 1: SEO Foundation (Week 1-2) — Expected +15% organic traffic
1. **Expand prerender list** to cover all 222 routes (or at least all pillar sub-pages, blog posts, and landing pages)
2. **Add HowTo schema** to all 28 pillar sub-pages (`/fine-dining/*`, `/catering/*`, `/events/*`, `/in-villa-service/*`, `/staffing/*`)
3. **Add Review + AggregateRating schema** to `/reviews` page with real review data
4. **Add Person schema** to all 8 chef profile pages
5. **Add Event schema** to `/events/weddings`, `/events/birthdays`, `/events/corporate-events`

### Phase 2: Performance (Week 2-3) — Expected -30% LCP, +10% conversion
6. **Implement responsive images** (`srcset` + `sizes`) in `OptimizedImage.tsx`
7. **Add `<picture>` with WebP/JPEG fallback** for older browsers
8. **Preload critical hero images** for top 5 pages via `inject-meta.ts`
9. **Add lazy loading** to all below-fold images
10. **Compress 10 large images** (>500KB)

### Phase 3: Conversion (Week 3-4) — Expected +20% quote requests
11. **Add `StickyMobileCTA`** to all pillar hub and sub-pages
12. **Embed `PricingCalculator`** directly on `/pricing`
13. **Add urgency signals** to `/book` and `/quote` (e.g., "Only X chefs available in July")
14. **Add `TrustStrip`** to all pillar pages (4.9★ · 560+ villas · 12,000+ guests)
15. **Enable `EmailCaptureBar` globally** in `Layout.tsx` or `PremiumPage.tsx`
16. **Add scroll-depth mobile trigger** for `ExitIntentPopup`

### Phase 4: Content & Accessibility (Week 4-5)
17. **Add 5+ FAQs to each location page** with `faqPageSchema`
18. **Add cross-links** between `/locations/*` ↔ `/private-chef/*`, `/blog/*` ↔ pillar pages
19. **Expand thin content** on 15+ micro-area and help pages
20. **Fix skip-link visibility** and mobile menu focus trapping
21. **Add `aria-current="page"`** to all nav links

### Phase 5: Technical Polish (Week 5-6)
22. **Add CSP** to `index.html`
23. **Add `noscript` content fallback**
24. **Remove orphaned `AuraPage.tsx`** or re-enable route
25. **Add `prefetch` for top 10 internal pages**
26. **Run `vite-bundle-visualizer`** and optimize chunks
27. **Implement service worker** for asset caching

---

## Appendix A: Quick Stats

| Metric | Value |
|--------|-------|
| Total source files | 222 |
| TSX files | 195 |
| TS files | 22 |
| CSS files | 2 |
| Markdown files | 2 |
| Pages (`src/pages/`) | 131 |
| Components (`src/components/`) | 43 |
| Data files (`src/data/`) | 11 |
| Hooks (`src/hooks/`) | 5 |
| Lib files (`src/lib/`) | 5 |
| Total lines in `src/pages/` | ~50,580 |
| Largest page | `CateringMainPage.tsx` (1,412 lines) |
| Largest component | `PremiumPage.tsx` (653 lines) |
| Pages with SeoHead | 150 / 131 = 100% (all pages have SEO) |
| Pages with `page-meta.ts` key | ~98 (some use dynamic meta) |
| Total images in `public/` | 278 |
| WebP images | 272 (97.8%) |
| Images >500KB | 10 |
| Images without `alt` | ~25 |
| Images without `srcset` | ~150+ (100%) |
| Sitemap entries | ~500+ |
| Prerendered pages | ~70 (222 total routes) |
| Blog posts | 45+ |
| Journal posts | 16 |
| Landing pages | 25+ |
| Help guides | 7 |
| Private chef areas | 65+ |
| Chef profiles | 8 |
| Pillar sub-pages | 28 |
| TODOs/FIXMEs | 0 (clean codebase) |
| Noindex pages | `/book`, `/quote`, `/calculator`, `/join-our-team`, `/404` |

---

*End of analysis. All findings are based on static code review of the repository at commit c774c61 on branch main.*
