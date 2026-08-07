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

### Wave 1 — Commercial money pages (high intent) — **done (implementation)**

- [x] `/honeymoon-chef`, `/proposal-dinner` unique heroes  
- [x] Mesh from pillar + area local-guide  
- [x] `/seafood-bbq-catering-bali` — expanded body (~700+ words) + unique hero  
- [x] `/wedding-catering-indonesia`, `/healthy-meal-delivery-indonesia`, `/butler-service-bali-daily-rate`, `/corporate-retreat-catering-bali` — unique heroes + page-meta OG  
- [x] `/corporate-case-studies` — fixed OG to existing corporate hero  
- [x] `LandingPage` no longer uses one shared hero for all landings/blogs — per-slug maps + page-meta OG  
- [x] Locations denpasar/kuta already have dedicated city heroes  

### Wave 2 — `/private-chef/*` uniqueness — **done (implementation)**

- [x] Local dining guide on all area pages  
- [x] Expanded services grid deep links  
- [x] **49/49 unique `heroImage` assignments** (12 dedicated new area heroes for tier-1 belts; remaining diversified off shared sunset/seminyak/bukit stacks)

### Wave 3 — Chef profiles (8) — **ready**

- [x] Portraits already exist on profile pages.  
- [x] Hub `/chefs` lists all 8 with images and links.  
- Optional later: secondary lifestyle images per chef.

### Wave 4 — Blog + journal support — **done (heroes)**

- [x] Per-slug `BLOG_HEROES` map on `LandingPage` for GSC blog URLs (no more single shared luna hero for those posts).  
- [x] Redirect blogs remain 308 (not enriched).  
- Journal posts already use dedicated content system; keep bar-services out of sitemap.

### Wave 5 — Remaining areas — **covered under Wave 2**

- Unique heroes + local guide for full private-chef set.

### Wave 6 — Bar-services (B2B) — **intentionally not re-admitted**

- Stay **out of sitemap** until guest/area crawl demand improves (existing policy).

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