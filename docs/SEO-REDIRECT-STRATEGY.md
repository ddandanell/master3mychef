# myCHEF.id — SEO Redirect Strategy

**Last updated:** 2026-05-13
**Goal:** preserve organic traffic from the 88 indexed URLs while only maintaining content for ~28 of them.

---

## TL;DR

A **301 redirect** tells Google "this page moved permanently to X" and forwards roughly 90–95% of the ranking signal to the target. So instead of building unique content for all 88 URLs, you:

1. Pick the ~28 URLs that map to your real business and write good content there.
2. 301 the other 60 to the closest related kept page.
3. Never redirect to an unrelated page (e.g., everything → homepage). Google calls that a "soft 404" and devalues it.

That's what just shipped.

---

## The split

### Kept (28 URLs, indexable, in sitemap.xml)

These you maintain real content for over time.

**Brand & utility (10)**
- `/` `/fine-dining` `/villa-chef` `/events` `/partners` `/contact` `/about` `/chefs` `/faq` `/pricing`

**Quote funnel (1)**
- `/quote`

**Areas with real chef coverage (10)**
- `/seminyak` `/canggu` `/ubud` `/uluwatu` `/sanur` `/nusa-dua` `/jimbaran` `/berawa` `/pererenan`

**Top conversion services (5)**
- `/services/villa-parties` `/services/birthday-celebrations` `/services/corporate-events` `/services/wedding-celebrations` `/services/weekly-meal-prep`

**Menus (3)**
- `/menus` `/menus/mediterranean` `/menus/balinese`

**Legal (3)**
- `/privacy-policy` `/terms-of-service` `/payment-terms`

**Aliases for legacy slugs (4)**
- `/privacy` → `PrivacyPage` (same content as `/privacy-policy`)
- `/terms` → `TermsPage`
- `/cancellation` → `CancellationPage`
- `/villa-partners` → `PartnersPage`
- `/catering` → `SolPage`

These five aliases share their canonical page with the production URL. Internal links point to the canonical version; the alias still resolves so any old inbound link works.

### Redirected (60 URLs → real 301 to a related kept page)

Edit `src/data/redirects.ts` to change a target or remove an entry (which turns the URL back into a kept content page).

Mapping summary:
| Pattern | Target | Why |
|---|---|---|
| Lesser areas (Kuta, Legian, Kerobokan, Petitenget, Tanah Lot, Tabanan, Denpasar, Gianyar, Tegallalang, Amed, Lovina, Candidasa, Padang Bai, Ungasan, Pecatu, Bukit) | nearest kept area | Same chef pool, low search volume |
| Micro-areas (Echo Beach, Batu Bolong, Bingin, Sayan, Padang Padang, Pererenan-private-chef, Sanur Beach, Penestanan) | parent area | Sub-neighborhood of a kept area |
| Generic SEO keyword pages (`/best-private-chef-indonesia`, `/luxury-chef-indonesia`, `/wedding-catering-indonesia`, etc.) | best brand match | Overlap with brand pages |
| `/jakarta`, `/private-chef-menteng` | `/contact` | Not actively serving Jakarta |
| `/services/romantic-dinners` | `/fine-dining` | Fine dining covers romantic intent |
| `/services/family-reunions` | `/villa-chef` | Villa chef covers multi-day intent |
| `/services/cooking-classes` | `/contact` | Niche request — qualify by hand |
| `/menus/asian-fusion`, `/menus/vegan`, `/menus/modern-european`, `/menus/halal` | `/menus` | Consolidate menu pages |
| `/retreats` | `/events` | Retreats are a kind of event |
| `/blog/*`, `/guide/*` | closest brand match | Write later, redirect for now |
| `/calculator` | `/quote` | Calculator replaced by quote funnel |
| `/recommended-services`, `/join-our-team`, `/reviews`, `/why-mychef` | nearest match | Low priority |

---

## How it works (technically)

1. **`src/data/redirects.ts`** — single source of truth. Array of `{ from, to, reason }`.

2. **`scripts/generate-redirects.ts`** — reads the array and writes:
   - `public/_redirects` (Netlify format — also works on Cloudflare Pages)
   - `vercel.json` (Vercel format with `permanent: true` = 301)

   Run with `pnpm redirects`. Also hooked into `prebuild` so every `pnpm build` regenerates them.

3. **`src/App.tsx`** — has a `Navigate` route for each redirect, **declared above the area routes**, so client-side navigation also forwards correctly. This is a UX fallback only; Google sees the real 301 from the edge.

4. **`scripts/generate-sitemap.ts`** — skips any URL that has a redirect entry. Result: 28 canonical URLs in `public/sitemap.xml`, 60 redirected URLs excluded.

5. **No `<link rel="canonical">` clash** — `SeoHead.tsx` only sets canonical on kept pages.

---

## Verification

```bash
pnpm sitemap     # regenerates sitemap.xml
pnpm redirects   # regenerates vercel.json + _redirects
pnpm build       # both run automatically via prebuild
```

```bash
# Test that redirects fire in the SPA fallback
curl -s -o /dev/null -w "%{url_effective} %{http_code}\n" \
  -L http://localhost:3001/kuta
# (browser test: /kuta -> URL flips to /seminyak, Seminyak content renders)
```

---

## Edit-flow (when business changes)

- **You start servicing a new area** — open `src/data/redirects.ts`, delete that area's entry. The route already exists from `AREAS`, so it goes back to rendering a real area page automatically.
- **You stop servicing an area** — open `src/data/sitemap.ts`, remove from `AREAS`. Then in `redirects.ts`, add an entry pointing somewhere sensible.
- **You want to keep an SEO landing page** — delete that entry from `redirects.ts`, then write real copy in `src/components/LandingPage.tsx` or split it into a custom page.

---

## What this saves

- **Content workload:** ~60 pages of unique copy you would have had to write.
- **Maintenance:** 60 pages you would have had to keep current.

## What this costs

- **5–10% SEO equity** per redirected URL. For a generic SEO landing page like `/best-private-chef-indonesia`, this is fine — the brand homepage absorbs the intent. For a high-ranking area like Kuta (if it actually ranks well today), this is a small loss.
- **Recommendation:** before you deploy, check Google Search Console for the 10 highest-traffic URLs in the production sitemap. Any that are in the redirect list and bring real bookings — pull them out of the redirect map and write content for them instead.

---

## Files in this pass

```
created:
  src/data/redirects.ts          (60 redirect entries)
  scripts/generate-redirects.ts  (writes vercel.json + public/_redirects)
  public/_redirects              (generated — Netlify/Cloudflare format)
  vercel.json                    (generated — Vercel 301 config)
  SEO-REDIRECT-STRATEGY.md       (this file)

modified:
  src/App.tsx                    (REDIRECTS routes declared above area routes)
  scripts/generate-sitemap.ts    (filters out redirected URLs)
  package.json                   (added "redirects" + updated "prebuild")
  public/sitemap.xml             (now 28 canonical URLs, down from 88)
```
