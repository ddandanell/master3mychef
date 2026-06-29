# MyChef SEO Safe Upgrade — Baseline Report
## Date: 2026-06-29
## Auditor: AI SWARM SEO + Technical QA Agent
## Website: https://mychef.id/
## Repository: https://github.com/ddandanell/master3mychef

---

## 1. Executive Summary

The MyChef website is a **React 19 + Vite SPA** deployed on Vercel with sophisticated SEO infrastructure including automated sitemap generation, meta injection, prerendering, and comprehensive schema markup. The site has **200+ pages**, **82 explicit PAGE_META entries**, and **excellent keyword coverage** for all 27 target keywords.

**Overall Health: GOOD with critical fixes needed**

### Strengths
- Zero duplicate title tags across 82 PAGE_META entries
- Comprehensive schema markup (Organization, LocalBusiness, Service, BreadcrumbList, FAQPage, BlogPosting, etc.)
- AI-crawler-friendly robots.txt (allows GPTBot, ClaudeBot, PerplexityBot)
- Strong security headers (CSP, HSTS)
- Code-splitting with React.lazy for 100+ pages
- Excellent keyword coverage for all target keywords
- Massive redirect map (250+) with documented SEO rationale
- All 27 target keywords have dedicated pages

### Critical Issues (Must Fix)
1. **Broken internal links in `related-services.ts`** — 4 paths point to non-existent routes (404 risk)
2. **Duplicate redirect entries in `vercel.json`** — Vercel may reject config
3. **Prerender gap** — 40 pages (183 vs 223 sitemap URLs) are SPA shells to crawlers
4. **32 titles over 60 characters** — risk truncation in SERPs
5. **1 meta description over 160 chars** — /events (162 chars)

### High-Impact Issues
6. Missing PAGE_META for /pricing-calculator and /corporate-case-studies
7. Orphaned /villa-chef PAGE_META entry
8. All pages use identical generic og:image:alt text
9. Location pages use generic /og-image.webp instead of location-specific images
10. Sitemap lastmod identical for all entries (batch generation, not real dates)
11. All 5 pillar pages lack FAQ sections
12. 15+ blog pages are thin content (<250 lines)
13. No visual breadcrumb UI on most pages
14. Blog/Journal duplicate content risk (/blog and /journal serve same purpose)
15. /book returns 404 on live site (but has PAGE_META in repo — possible deployment issue)

---

## 2. Current Page List

### Pillar Pages (5)
- `/` — Home
- `/fine-dining` — Fine Dining
- `/catering` — Catering
- `/events` — Events
- `/in-villa-service` — In-Villa Service
- `/staffing` — Staffing

### Service Sub-Pages (34+)
- `/fine-dining/romantic-dinner`, `/fine-dining/tasting-menu`, `/fine-dining/private-chef-bali`, `/fine-dining/chefs-table`, `/fine-dining/menus`, `/fine-dining/our-chefs`
- `/catering/bbq-catering`, `/catering/buffet`, `/catering/plated-catering`, `/catering/drop-off-catering`, `/catering/babi-guling`, `/catering/grazing-tables`, `/catering/villa-catering`, `/catering/corporate-catering`, `/catering/retreat-catering`, `/catering/floating-breakfast`
- `/events/weddings`, `/events/birthdays`, `/events/anniversaries`, `/events/corporate-events`, `/events/retreats`, `/events/baby-showers`, `/events/villa-parties`
- `/in-villa-service/waiters`, `/in-villa-service/butlers`, `/in-villa-service/bartenders`, `/in-villa-service/mixology`, `/in-villa-service/sommelier`, `/in-villa-service/host-hostess`
- `/staffing/private-chef-placement`, `/staffing/live-in-chef`, `/staffing/villa-staff`, `/staffing/household-staff`, `/staffing/for-villa-managers`, `/staffing/for-hotels-restaurants`

### Location Pages (35+)
- `/locations/seminyak`, `/locations/canggu`, `/locations/ubud`, `/locations/uluwatu`, `/locations/nusa-dua`, `/locations/jimbaran`, `/locations/sanur`, `/locations/berawa`, `/locations/pererenan`, `/locations/bukit`, `/locations/kuta`, `/locations/jakarta`
- `/seminyak`, `/canggu`, `/ubud`, `/uluwatu`, `/nusa-dua`, `/jimbaran`, `/sanur`, `/berawa`, `/pererenan`, `/bukit`, `/denpasar`, `/pecatu`, `/kuta`
- `/private-chef/:slug` (25 area pages)

### Content Pages
- `/blog/*` (20 blog posts)
- `/journal/*` (15+ journal posts)
- `/guide/*` (2 guide pages)
- `/:slug` (32 landing pages)

### Utility Pages
- `/contact`, `/book`, `/quote`, `/calculator`, `/pricing`, `/faq`, `/about`, `/chefs`, `/reviews`, `/press`, `/why-mychef`, `/services`, `/recommended-services`, `/join-our-team`, `/partner-platform`, `/menus`, `/help/*`

### Legal Pages
- `/privacy-policy`, `/terms-of-service`, `/cancellation`

---

## 3. Current Route List

See `src/data/sitemap.ts` for complete list (223 URLs in sitemap.xml).

---

## 4. Current SEO Problems

| # | Issue | Severity | Affected |
|---|-------|----------|----------|
| 1 | Broken internal links in related-services.ts | 🔴 Critical | 4 links |
| 2 | 32 titles > 60 chars | 🔴 Critical | 32 pages |
| 3 | Duplicate redirects in vercel.json | 🔴 Critical | Build risk |
| 4 | Prerender gap (40 pages) | 🟠 High | 40 pages |
| 5 | /events description > 160 chars | 🟠 High | 1 page |
| 6 | Missing PAGE_META for /pricing-calculator | 🟠 High | 1 page |
| 7 | Missing PAGE_META for /corporate-case-studies | 🟠 High | 1 page |
| 8 | Orphaned /villa-chef PAGE_META | 🟠 High | 1 page |
| 9 | All pages use identical og:image:alt | 🟠 High | All pages |
| 10 | Location pages use generic OG image | 🟠 High | 10+ pages |
| 11 | Sitemap lastmod identical | 🟡 Medium | All URLs |
| 12 | No FAQ sections on 5 pillar pages | 🟡 Medium | 5 pages |
| 13 | Blog/Journal cannibalization | 🟡 Medium | 2 paths |
| 14 | /book 404 on live site | 🟡 Medium | Conversion path |
| 15 | 15+ thin blog pages | 🟡 Medium | Content quality |

---

## 5. Current Technical Problems

| # | Issue | Severity |
|---|-------|----------|
| 1 | Duplicate redirect entries | 🔴 Critical |
| 2 | Prerender list out of sync with sitemap | 🔴 Critical |
| 3 | No responsive image srcset | 🟠 High |
| 4 | 5+ images > 500KB | 🟠 High |
| 5 | axe a11y tests not enforced in build | 🟠 High |
| 6 | Playwright Chromium install on every build | 🟡 Medium |
| 7 | No eslint-plugin-jsx-a11y | 🟡 Medium |
| 8 | No heading order validation | 🟡 Medium |
| 9 | GSAP always loaded | 🟡 Medium |
| 10 | No prefers-reduced-motion | 🟡 Medium |
| 11 | No skip-to-content link | 🟢 Low |
| 12 | No aria-current on active nav | 🟢 Low |

---

## 6. Current Conversion Problems

| # | Issue | Severity |
|---|-------|----------|
| 1 | /book 404 on live site | 🔴 Critical |
| 2 | No dedicated booking form | 🟠 High |
| 3 | Calculator is noindex | 🟠 High |
| 4 | No clear pricing on /pricing | 🟠 High |
| 5 | No dedicated /about page | 🟡 Medium |
| 6 | No visible trust badges in HTML | 🟡 Medium |
| 7 | Weak CTAs on multiple pages | 🟡 Medium |
| 8 | No FAQ on pillar pages | 🟡 Medium |

---

## 7. Current Content Gaps

| # | Gap | Impact |
|---|-----|--------|
| 1 | 15+ blog pages < 250 lines | Low search ranking |
| 2 | No FAQ on 5 pillar pages | Missed rich snippets |
| 3 | Thin location pages risk | Duplicate content penalty |
| 4 | Missing long-tail pages | Missed traffic |
| 5 | No dedicated About page | Trust signal gap |

---

## 8. Current Internal Linking Gaps

| # | Gap | Impact |
|---|-----|--------|
| 1 | 4 broken links in related-services.ts | 404 errors |
| 2 | No "Staffing" in related services | Missing cross-links |
| 3 | No "In-Villa Service" in related services | Missing cross-links |
| 4 | Location pages missing Staffing/Service links | Missing cross-links |
| 5 | No visual breadcrumbs on pages | UX gap |
| 6 | Orphaned pages (reviews, press, why-mychef) | Crawl issues |

---

## 9. Current Performance Issues

| # | Issue | Impact |
|---|-------|--------|
| 1 | No responsive image srcset | Mobile bandwidth |
| 2 | 5+ images > 500KB | Slow LCP |
| 3 | No blur-up placeholders | Layout shifts |
| 4 | GSAP always loaded | Bundle size |
| 5 | No route prefetching | Slow navigation |
| 6 | No edge caching (max-age=0) | TTFB |

---

## 10. Current Schema Status

| Schema Type | Status |
|-------------|--------|
| Organization | ✅ Present |
| LocalBusiness | ✅ Present (with GeoCoordinates) |
| Service (5 types) | ✅ Present |
| WebSite + SearchAction | ✅ Present |
| BreadcrumbList | ✅ Present (injected + runtime) |
| BlogPosting / Article | ✅ Present |
| FAQPage | ✅ Present (runtime only) |
| HowTo | ✅ Present |
| Event | ✅ Present |
| Offer / Menu | ✅ Present |
| Review / AggregateRating | ❌ Not implemented (self-serving risk) |
| Person (for chefs) | ❌ Not implemented |
| Speakable | ❌ Not implemented |

---

## 11. Current Sitemap Status

- 223 URLs in sitemap.xml
- All major page types covered
- lastmod present but identical (batch generation)
- No image sitemap entries
- Redirect paths correctly excluded

---

## 12. Current Robots.txt Status

- ✅ Googlebot, Bingbot allowed
- ✅ AI crawlers explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, etc.)
- ✅ /404 disallowed
- ✅ Sitemap reference present
- **Excellent configuration**

---

## 13. Current Deployment Setup

- Vercel with trailingSlash: false
- Build: prebuild → tsc → vite → postbuild → prerender
- Security headers: CSP, HSTS, X-Frame-Options
- Asset caching: immutable for /assets/* (1 year)
- HTML caching: must-revalidate (no edge cache)

---

## 14. Risk Areas That Must NOT Be Touched

| # | Risk Area | Why |
|---|-----------|-----|
| 1 | GTM container (GTM-KCBNZBL9) | All tracking depends on this |
| 2 | GA4 config (G-W0PQH8ZKTF) | Analytics fallback |
| 3 | Schema markup structure | Rich snippet eligibility |
| 4 | Tidio chat widget | Active support channel |
| 5 | Canonical tags | Prevent duplicate content penalties |
| 6 | robots.txt AI permissions | AI search visibility |
| 7 | 308 permanent redirects | Preserve link equity |
| 8 | Security headers | Legal/insurance risk |
| 9 | Preconnect/preload strategy | Core Web Vitals |
| 10 | WhatsApp links | Primary conversion channel |
| 11 | Vercel hosting config | Downtime risk |
| 12 | PAGE_META keys that have existing SEO ranking | Risk of ranking drops |
| 13 | URL slugs and routes | Break existing links |
| 14 | Brand identity, logo, colors | Design system integrity |
| 15 | Pricing, deposit, tax, service charge rules | Commercial policy |

---

*End of Baseline Report*
