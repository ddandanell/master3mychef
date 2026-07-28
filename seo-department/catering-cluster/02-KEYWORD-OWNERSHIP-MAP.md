# Document 2 — Keyword Ownership Map: Catering Cluster

**Date:** 2026-07-28 · **Owner:** Keyword Research (04) + Information Architecture (05)
**Rule:** one primary keyword and one primary intent per URL. No specialist page may target "catering Bali" as its principal term.

> **Status: PROPOSED, not approved.** Demand figures are absent — no Search Console or tool data has been granted. This map is built from the assigned keyword ownership in the brief plus structural analysis of existing pages. Priority cannot be scored until query data lands.

---

## Hub

### `/catering` — owns the category
- **Primary keyword:** `catering Bali`
- **Primary intent:** user comparing catering companies and formats in Bali, deciding who to enquire with
- **Secondary cluster:** Bali catering · catering in Bali · catering services Bali · catering company Bali · Bali catering company · professional caterer Bali · event catering Bali · private catering Bali · catering for villas Bali · group catering Bali · party catering Bali
- **Excluded:** every specialist format term as a *principal* target (BBQ catering Bali, buffet catering Bali, etc.) — these may be *mentioned* with a link, never fully developed
- **Overlaps with:** `/blog/bali-catering-menu` (**unresolved**)
- **Differentiation:** the only page that explains the company, compares all formats side by side, and routes the visitor to the correct specialist page. It sells the *decision*, not a format.
- **Links out:** all 10 specialist pages · **Links in:** all 10 specialist pages, plus main navigation
- **Recommended H1:** retain intent of current — "Catering in Bali — Built for Groups, Parties & Hosted Dinners"
- **Title issue:** current title ends "by Private Chefs", importing private-chef intent. Recommend removing at rewrite.
- **Conversion goal:** WhatsApp enquiry, or qualified click-through to the correct format page

---

## Specialist pages

| URL | Primary keyword | Primary intent | Must NOT own | Key overlap risk |
|---|---|---|---|---|
| `/catering/bbq-catering` | `BBQ catering Bali` | Live-chef BBQ at a villa/party | catering Bali; general catering | **5 URLs compete** — `/villa-bbq-catering-bali`, `/seafood-bbq-catering-bali`, `/bbq-grill`, `/journal/bbq-catering-cost-breakdown-bali` |
| `/catering/buffet` | `buffet catering Bali` | Buffet service for larger groups | plated; catering Bali | Low |
| `/catering/plated-catering` | `plated dinner Bali` | Formal course-by-course table service | fine dining tasting menu; private chef dinner | `/fine-dining/*`, `/three-course`, `/blog/plated-dinner-catering-bali` |
| `/catering/drop-off-catering` | `drop-off catering Bali` | Chef food delivered, **no staff on site** | staffed catering | `/blog/drop-off-catering-bali` |
| `/catering/babi-guling` | `Babi Guling catering Bali` | Balinese whole-roast-pig feast | BBQ catering; general catering | Low |
| `/catering/grazing-tables` | `grazing table Bali` | Styled food display for events | buffet catering | Low |
| `/catering/villa-catering` | `villa catering Bali` | Group/multi-day villa meal programmes | private chef hire | **`/private-chef/*` family** — see note |
| `/catering/corporate-catering` | `corporate catering Bali` | Company meetings, conferences, offsites | retreat catering | `/corporate-retreat-catering-bali`, `/blog/corporate-events-catering-bali-team-dining` |
| `/catering/retreat-catering` | `retreat catering Bali` | Multi-day retreat meal plans | corporate catering; villa catering | `/corporate-retreat-catering-bali`, `/blog/bali-wellness-retreat-catering` |
| `/catering/floating-breakfast` | `floating breakfast Bali` | Pool-tray breakfast **as an add-on** | standalone breakfast catering | Low — but metadata misstates the offer |

---

## The three boundaries that must hold

**1. Villa catering vs private chef.**
`/catering/villa-catering` = structured group meal *programmes* — packages, multi-meal schedules, multi-day plans, group logistics.
`/private-chef/*` = hiring a chef as a person — individualised service, personal menus.
The distinguishing question: *is the customer buying a meal programme or a chef?*

**2. Plated catering vs fine dining.**
`/catering/plated-catering` = catering *logistics* — staffing ratios, table service at scale, kitchen requirements, event execution for a group.
`/fine-dining/*` = the culinary experience — tasting menus, courses as an occasion.
The distinguishing question: *is the customer solving an event-service problem or buying a dining experience?*

**3. Corporate vs retreat.**
`/catering/corporate-catering` = business events — invoicing, NPWP, boardroom, conference, fixed timings.
`/catering/retreat-catering` = multi-day wellness programmes — meal timing around yoga schedules, dietary protocols, menu variety across days.
**`/corporate-retreat-catering-bali` currently straddles both and needs a ruling.**

---

## Unresolved before this map can be approved

1. Search Console query-per-URL for all 24 catering-intent pages — which page actually earns each term today
2. Ruling on the 5-URL BBQ overlap
3. Ruling on `/corporate-retreat-catering-bali`
4. Ruling on the 4-page wedding catering group (outside this cluster's scope but competing with the hub)

**No page in this map may be rewritten to target its assigned keyword until items 1–3 are settled.** Optimising `/catering/bbq-catering` for "BBQ catering Bali" while four other pages target the same term would intensify the cannibalisation rather than resolve it.
