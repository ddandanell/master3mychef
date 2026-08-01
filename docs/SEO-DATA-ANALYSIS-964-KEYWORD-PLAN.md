# SEOdata analysis_964 — Keyword plan & implementation

**Source:** `/Users/openclaw/Downloads/analysis_964_full_export`  
**Date:** 2026-08-02  
**Code ownership map:** `src/data/keywordOwnership.ts`  
**Meta applied via:** `src/data/page-meta.ts` (+ area `metaTitle`s in `privateChefAreas.ts`)

---

## Report snapshot

| Sheet | What it tells us |
|-------|------------------|
| Main / Raw data | Query × page × clicks/impr/position |
| URL data | Which URLs get impressions; some titles were wrong/shared historically |
| PVT Brand | Strong brand terms: *private chef bali*, *private chef canggu/ubud/uluwatu*, *bbq catering bali*, *wedding catering* |
| No-brand | Gaps: *private dining*, *butler service*, *bartender hire*, *chefs table bali*, *buffet*, *tasting menu* |
| Variations | Home impressions/clicks growing period-over-period |

### Biggest issues found

1. **Cannibalization** — same query on 2–4 URLs (e.g. *private dining bali*, *chefs table bali*, *buffet*).  
2. **Wrong historical titles** — Jakarta URLs 301→home still show in GSC with home title (already redirected; leave alone).  
3. **Home vs `/private-chef-bali`** both fighting “private chef bali”.  
4. **Location pages** ranking for *private dining {area}* but titles were generic “Dining Guide”.  
5. **Romantic dinner** competing for *private dining bali* (should not).

---

## Ownership rules (one primary per keyword)

| Primary keyword | Owner URL |
|-----------------|-----------|
| private chef bali | `/` |
| hire private chef bali / daily rates | `/private-chef-bali` |
| private dining (+ private dining bali) | `/private-dining-indonesia` |
| private dining canggu/ubud/… | `/locations/{area}` |
| private chef canggu/ubud/… | `/private-chef/{area}` |
| chefs table bali | `/fine-dining/chefs-table` |
| romantic dinner bali | `/fine-dining/romantic-dinner` |
| tasting menu bali | `/fine-dining/tasting-menu` |
| catering bali | `/catering` |
| buffet catering bali | `/catering/buffet` |
| bbq catering bali | `/catering/bbq-catering` |
| villa bbq party bali | `/villa-bbq-catering-bali` |
| bali villa catering | `/catering/villa-catering` |
| wedding catering bali | `/events/weddings` |
| bali wedding catering packages | `/bali-wedding-catering-packages` |
| corporate event catering bali | `/events/corporate-events` |
| butler service bali | `/in-villa-service/butlers` |
| bartender hire bali | `/in-villa-service/bartenders` |

Full machine-readable map: **`src/data/keywordOwnership.ts`**.

---

## What we implemented

### Meta title / description / H1 updates
- Home, private-chef-bali, private-dining-indonesia  
- Location guides: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Sanur  
- Fine dining: chefs-table, romantic-dinner, tasting-menu  
- Catering: hub, buffet, BBQ, villa catering  
- Events: weddings, corporate  
- Staff: butlers, bartenders  
- Villa BBQ party + wedding packages  
- Private-chef area landings: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Pererenan  

### Already handled by redirects (do not recreate)
- `/chef-table-experience-bali` → `/fine-dining/chefs-table`  
- `/services/romantic-dinners` → `/fine-dining/romantic-dinner`  
- Jakarta URLs → `/`  

---

## Body copy + internal links (shipped)

1. **Location guides** (`/locations/*`): open with “Private dining {Area}…”, Related Services block linking to `/private-chef/{area}`, catering, fine dining, and `/private-dining-indonesia`.  
2. **Home** (`/`): hero + services cards use primary ownership anchors (catering Bali, private dining, chefs table Bali, hire private chef Bali, butler/bartender).  
3. **Hubs**: catering Bali H1 + format links with primary anchors; fine dining Bali villa H1 + related services; chefs table Bali H1; butler service Bali / bartender hire Bali H1s; romantic dinner Bali H1 (links out to private dining owner, does not claim it).  
4. **Private dining owner**: location guide + hire/fine-dining/chefs-table links in article body.

## Still recommended

1. **GSC**: after deploy, Request indexing on top 15 updated URLs only.  
2. **Ignore** ranking for long nonsense queries like “how to ensure food safety…” across many URLs — improve E-E-A-T FAQ on hub, don’t keyword-stuff.  
3. **Monitor** cannibalization monthly via GSC query×page export.

---

## Deploy note

Production project remains **`master3mychef` / `prj_VkMbGIUciFBk2VE0EUy2SikfWOgK`**.  
Use `./scripts/deploy-prod.sh` after merge to `main`.
