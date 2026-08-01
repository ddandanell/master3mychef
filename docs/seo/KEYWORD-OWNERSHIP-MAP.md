# myCHEF.id Keyword Ownership Map

**Purpose:** One primary page owns each commercial keyword. Supporting pages use **modifiers** (area, occasion, cost angle, format) so they do not compete.

**Rule for all future title/H1/meta work:**  
If a phrase is already owned below, **do not** put that exact phrase first in another page’s title or H1. Use a modifier or a different intent.

**Last updated:** 2026-08-01  
**Source of truth for live meta:** `src/data/page-meta.ts`  
**Online / production base:** `origin/main` (plus this SEO branch)

---

## Head & commercial cluster

| Primary keyword / intent | Owner URL | Supporting pages (modifiers only) |
|---|---|---|
| **private chef bali** (hire / commercial) | `/private-chef-bali` | Home supports brand+head lightly; area pages use “private chef in [area]” only |
| **private chef bali price / rates (transactional list)** | `/pricing` | Help: `/help/pricing` (quote mechanics, not rates table) |
| **how much does a private chef cost in bali** (informational) | `/blog/private-chef-cost-bali` | Journal deep-dive: groceries/tax/tipping only |
| **private chef groceries / tax / tipping** | `/journal/bali-private-chef-cost-guide-2026` | Do not re-title as generic “cost guide” |
| **michelin / premium chef pricing** | `/michelin-private-chef-bali-prices` | Not the general cost page; keep “Michelin-standard / premium” framing |
| **how to hire a private chef in bali** | `/blog/how-to-hire-private-chef-bali-complete-guide` | Do not reuse as H1 on other pages |
| **private chef bali areas / coverage map** | `/guide/private-chef-bali` | Hub map of villa regions; links out to `/private-chef/[area]` |
| **tasting menu / michelin villa fine dining** | `/fine-dining/private-chef-bali` + `/fine-dining/tasting-menu` | Pillar is day-rate chef hire, not tasting menu |
| **fine dining bali (hub)** | `/fine-dining` | Menus, chefs, romantic dinner as children |
| **group villa dinner packages** | `/group-villa-dinner-packages-bali` | Large-group blog/catering pages link here |
| **villa catering bali** | `/catering/villa-catering` | Multi-day stay meal programs |
| **bbq catering bali** (general) | `/catering/bbq-catering` | — |
| **villa bbq party / poolside packages** | `/villa-bbq-catering-bali` | Occasion/package angle |
| **seafood bbq bali** | `/seafood-bbq-catering-bali` | Jimbaran market / seafood only |
| **wedding catering bali** (service) | `/events/weddings` | — |
| **wedding catering packages / prices** | `/bali-wedding-catering-packages` | Budget/package intent |
| **wedding catering indonesia** | `/wedding-catering-indonesia` | National / non-Bali-first |
| **birthday catering / villa birthday** | `/events/birthdays` | Luxury: `/luxury-birthday-party-bali`; kids: `/experiences/kids-birthday-chef-party` |
| **honeymoon private chef** | `/honeymoon-chef` | Romantic dinner is different intent |
| **romantic dinner bali villa** | `/fine-dining/romantic-dinner` | — |
| **complete villa experience** | `/complete-villa-experience` | End-to-end stay hospitality |
| **staffing / chef placement** | `/staffing` | Live-in, hotels, villa managers as children |

---

## Local cluster (systematic)

| Intent | Owner pattern | Example |
|---|---|---|
| **Where to eat / dining guide in [area]** | `/locations/[area]` | “Private Dining in Canggu \| Dining Guide…” |
| **Hire a private chef in [area]** | `/private-chef/[area]` | “Private Chef in Canggu, Bali \| Villa Dining…” |
| **Neighborhood journal guides** | `/journal/*` or `/blog/*` | Supporting content only; link to both owners |

**Never** put “Private Chef Bali” (island head term) as the lead phrase on an area page.  
**Never** put “Private Chef in Canggu” on `/locations/canggu` (that page owns dining-guide intent).

---

## Cost cluster (strict split)

| Page | Owns | Must not lead with |
|---|---|---|
| `/pricing` | Published rate cards, packages, ++ tax | Long-form “how much does it cost” article framing |
| `/blog/private-chef-cost-bali` | Informational cost ranges & decision guide | Full commercial package menus (link to pricing) |
| `/journal/bali-private-chef-cost-guide-2026` | Groceries, tax, tipping, receipts | Day-rate table ownership |
| `/michelin-private-chef-bali-prices` | Premium / Michelin-standard pricing only | Generic “private chef cost bali” |
| `/bali-wedding-catering-packages` | Wedding package prices | General private chef day rates |

---

## BBQ cluster (strict split)

| Page | Owns |
|---|---|
| `/catering/bbq-catering` | BBQ catering service hub |
| `/villa-bbq-catering-bali` | Villa BBQ **party packages** / poolside nights |
| `/seafood-bbq-catering-bali` | Seafood / Jimbaran market BBQ |
| `/bbq-grill` | BBQ menu collection / dining style |
| `/journal/bbq-catering-cost-breakdown-bali` | BBQ cost education |

---

## Wedding cluster

| Page | Owns |
|---|---|
| `/events/weddings` | Wedding catering service |
| `/bali-wedding-catering-packages` | Packages & prices |
| `/blog/bali-wedding-catering-private-chef-timeline` | Planning timeline |
| `/journal/villa-wedding-catering-logistics-bali` | Logistics |
| `/journal/bali-wedding-catering-complete-guide` | Comprehensive guide |
| `/wedding-catering-indonesia` | Indonesia-wide (not Bali-first) |

---

## Implementation rules

1. **Before changing any title/H1/meta:** find the owner row above.  
2. **Supporting pages:** lead with modifier (area, occasion, cost angle, format).  
3. **Internal links:** always point supporting pages → owner for conversion CTAs.  
4. **No new pages** for a keyword that already has an owner unless the intent is clearly different.  
5. **Redirects** already consolidate many duplicates — do not reopen those URLs as thin competitors.

---

## Known residual risks (monitor, don’t panic-edit)

- Marketing copy still says “560+ villas” while `siteFacts` says 560+ **events** / 500+ **villa bookings**. Do **not** bulk-change ranking H1s; align only new/non-H1 copy when touching a page.  
- Some blog titles still include “private chef bali” as a **suffix modifier** — acceptable if primary phrase is occasion/diet/process specific.  
- Home and pillar both mention private chef Bali by design (brand + commercial pillar).

---

## Changelog

| Date | Change |
|---|---|
| 2026-08-01 | Map created; first differentiation pass applied on guide + cost/premium titles |
| 2026-08-01 | Retargeted 22 supporting pages' “Private Chef Bali” related links from `/` to `/private-chef-bali` |

