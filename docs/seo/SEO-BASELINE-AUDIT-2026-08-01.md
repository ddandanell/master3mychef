# myCHEF.id SEO Baseline Audit vs Report

**Date:** 2026-08-01  
**Branch:** `feat/seo-ranking-safe-optimize`  
**Source report:** Comprehensive SEO Optimization Report v1.0  
**Method:** Codebase inventory + live HTTP checks on mychef.id  

---

## 1. Who we are (site concept)

**Brand:** myCHEF.id / myCHEF. - Private Chef and Catering  
**Model:** Service-area luxury hospitality — chefs travel to villas (no storefront dining room).  
**Core offer:** Private chef hire, villa catering, fine dining tasting menus, events (weddings, birthdays, retreats, corporate), bar/staffing add-ons.  
**USP:** Transparent ++ pricing, groceries at cost, chef + assistant model, same-day quotes, HACCP discipline, Bali-wide coverage.  
**Primary conversion:** WhatsApp (+62 896-7407-2020) → quote within ~1–2 hours.  
**Proof:** 560+ events / 500+ villa bookings / 12,000+ guests (canonical in `siteFacts.ts`).  
**Ops base (schema):** Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Bali 80226.  
**Primary email:** bali@mychef.id  

**Positioning keywords (cluster):**
- Head: private chef Bali, villa catering Bali, private dining Bali  
- Commercial: private chef cost Bali, hire private chef Bali, group villa dinner packages  
- Local: private chef Canggu / Seminyak / Ubud / Uluwatu / Sanur / Nusa Dua  
- Occasion: wedding catering Bali, birthday catering Bali, corporate retreat catering  

---

## 2. Report claims vs live/code reality

| Report claim | Reality (2026-08-01) | Action |
|---|---|---|
| Zero JSON-LD on key pages | **False.** Live homepage 6 JSON-LD blocks; /private-chef-bali 10; /pricing 7; /faq 6; location pages 6+ | Improve coverage where missing; do not reinvent from zero |
| Secondary phone +62 822-3756-5997 still live | **Not found** in `src/`, `public/`, or live samples | P0.1 largely already done — monitor only |
| indonesia@mychef.id still used | **Not found** | Done |
| Sunset Road Seminyak address in content | **Not found** | Done |
| Missing homepage meta description | **False.** Live has unique meta | Protect; improve CTR wording only if additive |
| NAP inconsistency critical | **Mostly resolved** to +62 896-7407-2020 / bali@mychef.id | Keep siteFacts + PHONE as single source of truth |
| Social proof inconsistency | **Partial.** Marketing often says “560+ villas”; siteFacts says 560+ **events** and 500+ **villa bookings** | Standardize carefully without changing ranking H1s |
| Image alts incomplete | **Plausible** — at least decorative empty alts remain | Audit priority pages |
| Location uniqueness risk | **Real** for /private-chef/* template cluster | Additive enrichments only |
| GBP weak | **Real** (separate browser work in progress) | Continue SAB optimization off-page |

**Conclusion:** The report’s technical diagnosis is partly outdated (schema + NAP already improved). Remaining ROI is in **meta quality, alt text, location uniqueness, internal links, FAQ schema completeness, and off-page GBP/reviews**.

---

## 3. Strengths to protect (do not rewrite)

- Ranking titles/H1s (homepage, /private-chef-bali, /pricing, top locations)
- Pricing tables and ++ tax transparency
- WhatsApp conversion architecture
- robots.txt AI crawler openness
- Sitemap inventory (~225 URLs)
- Journal cost/comparison content
- Guarantees and chef bios

---

## 4. Prioritized execution (updated)

### P0 — still do
1. **NAP guardrails** — ensure no regressions; all new copy uses `siteFacts` / `PHONE`
2. **Schema gaps** — pages without `jsonLd` (~half of page components) get breadcrumb + FAQ/service where content exists
3. **Short/weak meta descriptions** — expand high-value pages to 140–160 chars without touching titles

### P1
4. Image alt audit on heroes and top conversion pages  
5. Additive location / private-chef area uniqueness blocks  
6. FAQ schema expansion + contextual internal links  

### P2
7. GBP SAB completion (service areas cleanup, photos, posts, Q&A, reviews)  
8. Review request flow + citations  

---

## 5. Canonical NAP (lock)

```
Phone / WhatsApp display: +62 896-7407-2020
Phone digits / wa.me:     6289674072020
Email:                    bali@mychef.id
Brand schema name:        myCHEF. - Private Chef and Catering
Brand UI:                 myCHEF.id
Service area wording:     Bali-wide — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Pererenan & beyond
```

Social proof (from `siteFacts.ts` — prefer these phrasings):
- `560+ events served`
- `12,000+ guests served`
- `500+ villa bookings`

Note: “560+ villas” appears in many ranking titles/H1s. **Do not bulk-rewrite those H1s.** Prefer aligning new copy to siteFacts; leave ranking H1s unless owner approves.

---

## 6. Push cadence

- Branch: `feat/seo-ranking-safe-optimize`
- Auto-checkpoint push every **20 minutes** while this campaign is active
- Conventional commits: `seo:`, `fix(seo):`, `chore(seo):`

---

## 7. Changelog (this campaign)

| Time (UTC) | Change | Notes |
|---|---|---|
| 2026-08-01 | Baseline audit document created | Evidence-based report correction |
| (ongoing) | See git log on this branch | |

---

## 8. Next batch targets

1. Expand thin meta descriptions on high-value journal + private-chef area pages  
2. Add missing breadcrumb/FAQ schema on pages that already render FAQ UI but lack jsonLd  
3. Alt text pass on Hub + Private Chef pillar + top location heroes  
4. One additive uniqueness block for a thinner /private-chef/* page as pilot  
