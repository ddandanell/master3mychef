# GSC “Discovered – currently not indexed” — Strategy (2026-08-07)

**Source:** `mychef.id-Coverage-Drilldown-2026-08-07.zip`  
**Issue:** Discovered – currently not indexed  
**Count in export:** **130 URLs** (Chart peak ~130)  
**Last crawled:** `1970-01-01` on every row → Google **has not successfully crawled** these URLs yet (queue only).

---

## What the status means

Google **knows the URL exists** (usually via sitemap and/or internal links) but has **not chosen to crawl it yet**. This is **not** a noindex tag problem on live 200 pages, and not primarily “zero content.”

| Signal from audit | Finding |
|---|---|
| Live HTTP | **125 × 200**, **5 × 308 permanent redirects** |
| Sample word counts | Many pages already **1,500–3,500 words** (not empty) |
| Images | Often **~3 imgs/page**, many **shared heroes** across areas |
| Internal links | Tier-2/3 `/private-chef/*` barely linked outside the area mesh |
| Sitemap policy | **`/bar-services/*` already excluded** from `sitemap.xml` (by design) to free crawl budget |

**Root causes (combined):**

1. **Crawl prioritization / demand** — large site, many similar URL patterns.  
2. **Template similarity** — especially `/private-chef/{area}` (59 of 130).  
3. **Weak discovery paths** — footer-only or mesh-only links; few links from money pages.  
4. **Shared media** — 14 heroes for 49+ areas; one generic water sunset used **14×**.  
5. **Redirect clutter** — 5 GSC URLs are 308s still “discovered” via old links/sitemaps.  
6. **B2B bar-services** — 21 URLs; already deprioritized in sitemap; still appear as discovered history.

---

## URL mix (130)

| Cluster | Count | Notes |
|---|---:|---|
| `/private-chef/*` areas | **59** | Main volume; programmatic local SEO |
| `/blog/*` | 20 | 3 are 308 → commercial owners |
| `/bar-services/*` services | 13 | Excluded from sitemap intentionally |
| `/bar-services/resources/*` | 8 | Same |
| `/chefs/*` | 8 | Profiles exist; need mesh from hub |
| `/journal/*` | 7 | Support content |
| `/locations/*` | 2 | denpasar, kuta |
| Commercial singles | 11 | honeymoon, staffing, proposal, seafood BBQ, etc. |

### Permanent redirects in the export (do not “enrich”)

| From | To |
|---|---|
| `/blog/how-to-hire-private-chef` | `/blog/how-to-hire-private-chef-bali-complete-guide` |
| `/blog/romantic-dinner-at-home-bali-private-chef` | `/fine-dining/romantic-dinner` |
| `/blog/corporate-events-catering-bali` | `/corporate-case-studies` |
| `/hire-private-chef-bali-monthly` | `/private-chef-bali` |
| `/villa-staff-bali-agency` | `/staffing/villa-staff` |

**Action:** never re-add these to sitemap; update any leftover internal anchors to the **target** URL; request de-index of old URL only if it still appears as soft 200 (they are 308).

---

## Strategic principles (keyword ownership)

1. **One commercial owner per head term** — see `KEYWORD-OWNERSHIP-MAP.md`.  
2. **Area pages own only “private chef in {Area}”** — never “Private Chef Bali” as H1.  
3. **Blog/journal = support** — modifiers + link **to** commercial owner.  
4. **Bar-services = B2B venue** — separate from guest mobile-bar (`/in-villa-service/bartenders`).  
5. **Do not re-open bar-services in sitemap** until guest + area crawl demand improves.  
6. **Uniqueness = place + intent + media + links**, not word-count padding.

---

## Playbook that actually moves “Discovered → Crawled → Indexed”

### A. Raise crawl demand (domain-level)

- Link orphans from **high-authority pages**: `/`, `/private-chef-bali`, `/locations/*`, `/experiences`, footer clusters (already partial).  
- Keep **XML sitemap lean**: indexable, unique, non-redirect only (already filters redirects + bar-services).  
- Avoid flooding sitemap with new thin templates.

### B. Raise indexing value (URL-level)

For each keep-URL:

1. **Unique H1 / title / meta** (ownership-safe).  
2. **≥1 unique hero image** (filename + alt with place/intent).  
3. **Unique body blocks** (local landmarks, guest profile, menus that fit the place, FAQs).  
4. **2–5 contextual internal links out** to related owners (experiences, catering, chef pillar).  
5. **2–5 inbound links** from nearby areas, location guides, blogs.  
6. After deploy: GSC **URL Inspection → Request indexing** for Wave-1 URLs only (not all 130 at once).

### C. Prune or demote (crawl hygiene)

| Option | When | How |
|---|---|---|
| Keep out of sitemap | Low demand / B2B test | Already: bar-services |
| `noindex,follow` | Thin tier-3 areas with zero bookings | **Owner decision** before applying |
| 301 consolidate | Duplicate blogs / aliases | Already for 5 URLs above |
| Expand uniqueness | High demand areas still unindexed | Wave 1–2 content + images |

**Recommendation:** do **not** noindex tier-1 villa belts. Consider later noindex for remote tier-3 only if still unindexed after enrichment and after 4–8 weeks.

---

## Prioritized waves

### Wave 0 — Hygiene (immediate)

- [x] Document GSC export + diagnosis (this file).  
- [x] Confirm 5 redirect URLs are 308 + filtered from sitemap generation (do not re-list).  
- [x] Keep bar-services **out** of sitemap.  
- [ ] Optional later: strip remaining structured-data `@id` references in legacy content JSON that still name redirect paths.

### Wave 1 — Commercial money pages (high intent) — **in progress**

Enrich + unique media + hub/pillar links:

- [x] `/honeymoon-chef` — unique hero WebP + page-meta/inject-meta  
- [x] `/proposal-dinner` — unique hero WebP + page-meta/inject-meta  
- [x] Mesh from `/private-chef-bali` stack to honeymoon, proposal, seafood BBQ, staffing  
- [x] Mesh from every `/private-chef/{area}` local-guide + services grid → commercial + experiences  
- [ ] `/seafood-bbq-catering-bali` content uniqueness pass  
- [ ] `/staffing` content uniqueness pass  
- [ ] `/wedding-catering-indonesia`  
- [ ] `/corporate-case-studies`  
- [ ] `/corporate-retreat-catering-bali`  
- [ ] `/healthy-meal-delivery-indonesia`  
- [ ] `/butler-service-bali-daily-rate`  
- [ ] `/locations/denpasar`, `/locations/kuta`

### Wave 2 — Tier-1 `/private-chef/*` still unindexed — **partial**

Includes: seminyak, uluwatu, nusa-dua, jimbaran, sanur, pererenan, berawa, kuta, legian, petitenget, pecatu, ungasan (canggu/ubud may already be indexed — not in this export).

- [x] Extra **Local dining guide** section (template-driven uniqueness from area data) on **all** area pages.  
- [x] Expanded services grid deep links (experiences, honeymoon, staffing).  
- [ ] Unique hero per slug where currently shared (batch image gen).  
- [ ] Mesh from `/locations/{slug}` where missing.

### Wave 3 — Chef profiles (8)

- Portraits already exist; add plating/lifestyle secondary images if missing.  
- Link from `/chefs` hub + area pages (chef “available in region” blocks).

### Wave 4 — Blog + journal support

- Ensure each post has: unique angle, hero image, outbound links to **one** commercial owner.  
- No competing H1s with pillars.

### Wave 5 — Remaining `/private-chef/*` (tier 2–3)

- Unique heroes batch.  
- Local guide section.  
- Optional: noindex lowest-demand after review.

### Wave 6 — Bar-services (B2B)

- Only after guest crawl improves.  
- Then: re-admit **hub + top 3 services** to sitemap with strong B2B nav, not all 21 at once.

---

## Success metrics

| Metric | Target |
|---|---|
| Wave-1 URLs with Last crawl date real | Within 2–4 weeks of requests |
| “Discovered not indexed” count | Down from 130 (redirects + bar noise + areas) |
| Indexed `/private-chef/*` tier-1 | All Wave-2 URLs crawled |
| Cannibalization | No new H1s stealing pillar keywords |

---

## Implementation notes for agents

1. Prefer **small shippable PRs per wave**.  
2. Always run ownership check against `KEYWORD-OWNERSHIP-MAP.md`.  
3. **No public price lies** — floors and ++ rules still apply.  
4. Images: WebP in `public/generated/`, SEO filenames, descriptive alt.  
5. After merge: human or agent with GSC access should **Request indexing** on Wave-1 list.

---

## Changelog

| Date | Change |
|---|---|
| 2026-08-07 | Strategy created from Coverage Drilldown export; waves defined; bar-services sitemap exclusion affirmed |
EOF