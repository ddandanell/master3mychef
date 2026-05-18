# myCHEF.id — URL Preservation & SEO Pages Plan

**Last updated:** 2026-05-13
**Goal:** every URL indexed on the production mychef.id (88 URLs) resolves on the new site with valid SEO meta, a real H1, and a working WhatsApp CTA — so we don't lose any organic traffic during the migration.

---

## What just shipped (live on localhost:3001)

### 1. Single source of truth for URLs
`src/data/sitemap.ts` — a structured array of every page in the production sitemap. Adding a new page means adding one entry here; the route, the SEO meta, and `public/sitemap.xml` all derive from it.

It exports:
- `AREAS` (25 Bali neighbourhoods)
- `MICRO_AREAS` (8 narrower neighbourhood landings — Echo Beach, Batu Bolong, Bingin, Sayan, Padang Padang, Pererenan Beach, Sanur Beach, Penestanan)
- `SERVICES` (8 service types — villa-parties, romantic-dinners, birthday-celebrations, family-reunions, corporate-events, wedding-celebrations, cooking-classes, weekly-meal-prep)
- `MENUS` (6 cuisines — mediterranean, balinese, asian-fusion, vegan, modern-european, halal)
- `LANDING_PAGES` (14 SEO keyword landing pages)
- `GUIDES` (2 long-form guides)
- `BLOG_POSTS` (5 blog posts)
- `INFO_PAGES` + `LEGAL_PAGES`

### 2. Generic templates (data-driven)
- `src/components/SeoHead.tsx` — per-route title / description / canonical / OG meta
- `src/components/AreaPage.tsx` — one component, renders all 25 areas + 8 micro-areas
- `src/components/ServicePage.tsx` — renders all 8 service pages
- `src/components/MenuPage.tsx` — renders /menus index + 6 menu pages
- `src/components/LandingPage.tsx` — renders all 14 keyword pages + 2 guides + 5 blog posts
- `src/components/InfoPage.tsx` — minimal template for /about, /chefs, /faq, /pricing, /reviews, /why-mychef, /retreats, /catering, /recommended-services, /join-our-team, /quote, /calculator, /jakarta, /private-chef-menteng
- `src/components/BlogIndexPage.tsx` — /blog index

### 3. All 88 routes wired
`src/App.tsx` now maps every production URL. Verified live:
- `/seminyak` → "Private Chef in Seminyak, Bali" H1
- `/services/wedding-celebrations` → "Wedding Celebrations" H1
- `/menus/balinese` → "Balinese Menu" H1
- ...and 85 more, all returning HTTP 200 with proper per-route `<title>` and meta.

Production aliases that should keep working without losing rankings:
| Production URL | New site renders as |
|---|---|
| `/privacy-policy` | `PrivacyPage` (same as `/privacy`) |
| `/terms-of-service` | `TermsPage` (same as `/terms`) |
| `/payment-terms` | `CancellationPage` |
| `/villa-partners` | `PartnersPage` (same as `/partners`) |
| `/catering` | `SolPage` (same as `/villa-chef`) |

### 4. Sitemap auto-generation
`scripts/generate-sitemap.ts` reads the data file and writes `public/sitemap.xml`. Hooked into `package.json` as a `prebuild` script — every `pnpm build` regenerates the sitemap automatically. Manual run: `pnpm sitemap`.

Output currently: **88 URLs** including image:image entries for the homepage and all area pages, mirroring the production schema exactly.

### 5. robots.txt
`public/robots.txt` already points to `https://mychef.id/sitemap.xml`. No change needed.

---

## What still needs human / Kimi work

The templates intentionally ship a minimal, valid SEO body. That covers Google but it does not yet sell. Here's the ordered work to enrich content where it converts:

### Priority 1 — make the highest-traffic pages real (this week)

1. **`/quote`** — the production site has a 9-step funnel; we only render a static info page. The flow we walked through has these steps:
   1. Service type (Single Event / Recurring / Full-time)
   2. Occasion (8 options)
   3. Guest count (+/- buttons + "Not sure / Varies")
   4. Date(s) — multi-select calendar with "Dates are flexible"
   5. Cuisine (8 options)
   6. Pre-meeting choice (Yes / No)
   7. Additional services (5 checkboxes: DJ, Decor, Photography, Coordination, Other)
   8. Address (Villa name, Street, City, Region, Postal, Country + "I don't have it yet")
   9. Summary + Send via WhatsApp
   Rebuild this as a multi-step component (React Hook Form or simple `useState` per step), submit via a constructed `wa.me/...?text=...` URL containing the full summary.

2. **`/calculator`** — same idea, lighter weight. Inputs: guests, days, meals per day, cuisine, add-ons → IDR range output.

3. **The top 5 area pages** — Seminyak, Canggu, Ubud, Uluwatu, Sanur. Each needs:
   - 2–3 paragraphs of unique area-specific copy (why villas there, typical kitchens, signature menus)
   - One hero image actually shot in that area
   - 3–5 real testimonials from that area
   - FAQ with `FAQPage` JSON-LD
   - Map embed for the area

4. **`/faq`** — currently a stub. Production likely has 15–25 questions. Reuse the FAQ accordion pattern from HubPage.

5. **`/pricing`** — currently a stub with 4 highlights. Production probably has a real pricing table; copy and refine.

### Priority 2 — fill out the content lake (next 2 weeks)

6. **8 service pages** (`/services/*`) — each needs:
   - 1 hero image specific to that service
   - "How it works" 4-step block
   - Example menus
   - Pricing band
   - 2–3 testimonials

7. **6 menu pages** (`/menus/*`) — each needs the actual sample courses (starters / mains / desserts) the production site shows. Best path: scrape the production menu pages and port the dish names + descriptions.

8. **14 keyword landing pages** — these are SEO-only pages. The stubs we shipped are enough to keep the URL indexed; for ranking improvement each needs 600–1000 words of unique content. Use the page title as the H1 and write a real article-style page.

9. **2 guides** — `/guide/bali-cuisine-glossary` and `/guide/private-chef-bali`. These should be the longest, most useful pages on the site. They're the ones Google sends informational searches to.

10. **5 blog posts** — port from production. Title slugs match exactly.

### Priority 3 — local SEO + production parity (week 3+)

11. **Per-area `LocalBusiness` JSON-LD** — currently only the homepage has business schema. Each area page should have `Service` schema with `areaServed` (already shipped) plus location-specific `LocalBusiness` once you have a real address per area or you decide on a single hub.

12. **Sitemap submission** — once deployed, submit `https://mychef.id/sitemap.xml` to Google Search Console and Bing Webmaster Tools.

13. **Old-URL redirects** — if any production URLs differ from what we've wired (none found in the audit), set up 301s at the hosting layer (Vercel/Netlify config).

14. **Pre-rendering** — Vite SPAs need JS execution for Google to see the content. Two options:
    - **Quick:** add `vite-plugin-ssg` to pre-render all 88 routes at build → static HTML per page. ~2 hours of work.
    - **Right:** migrate to Next.js 16. ~1–2 days. Unlocks server actions for the WhatsApp form and proper per-page SSR.
    Recommendation: ship the SPA today with the new routes, schedule the Next.js migration after the rest of the content is in.

---

## Files touched in this pass

```
created:
  src/data/sitemap.ts                       (the single source of truth)
  src/components/SeoHead.tsx
  src/components/AreaPage.tsx
  src/components/ServicePage.tsx
  src/components/MenuPage.tsx
  src/components/LandingPage.tsx
  src/components/InfoPage.tsx
  src/components/BlogIndexPage.tsx
  scripts/generate-sitemap.ts
  SEO-PAGES-PLAN.md  (this file)

modified:
  src/App.tsx                               (9 routes -> 88 routes)
  package.json                              (prebuild + sitemap scripts)
  public/sitemap.xml                        (8 routes -> 88 routes, mirrors prod)
```

No legacy URL was broken. Every previously-shipping route still works.

---

## Verification commands

```bash
# Regenerate sitemap from data
pnpm sitemap

# Smoke test routes
for path in /seminyak /services/villa-parties /menus/balinese \
            /best-private-chef-indonesia /blog/private-chef-bali-cost-breakdown-2026 \
            /about /privacy-policy /catering /jakarta; do
  printf "%-55s " "$path"
  curl -s -o /dev/null -w "HTTP %{http_code}\n" "http://localhost:3001$path"
done
```

All 88 URLs should return HTTP 200.
