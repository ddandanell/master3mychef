# Private Chef Pillar — Build Log

**Date:** 30 July 2026 · **Files changed:** 53 · **Typecheck:** pass · **Lint:** pass

---

## 1. The new price model

Owner-confirmed. **Replaces** the retired half-day / full-day / complete-full-day ladder
(IDR 2,500,000 / 3,500,000 / 4,200,000 per day), which no longer appears anywhere on the site.

| Meals per day | 1–6 days | 7+ days (−10%) | 28+ days (−20%) |
|---|---|---|---|
| **One meal** — breakfast, lunch **or** dinner | IDR 1,000,000++ | IDR 900,000++ | IDR 800,000++ |
| **Two meals** | IDR 1,800,000++ | IDR 1,620,000++ | IDR 1,440,000++ |
| **Three meals** — breakfast, lunch and dinner | IDR 2,700,000++ | IDR 2,430,000++ | IDR 2,160,000++ |

All-in (×1.21 — 11% government tax + 10% service):

| Meals per day | 1–6 days | 7+ days | 28+ days |
|---|---|---|---|
| One meal | IDR 1,210,000 | IDR 1,089,000 | IDR 968,000 |
| Two meals | IDR 2,178,000 | IDR 1,960,200 | IDR 1,742,400 |
| Three meals | IDR 3,267,000 | IDR 2,940,300 | IDR 2,613,600 |

Every rate covers **one chef plus one dedicated assistant**. Groceries billed separately at
cost with receipts.

---

## 2. Single source of truth

`src/data/siteFacts.ts` now exports `MEAL_PLANS`, `STAY_DISCOUNTS`, `planDailyRate()`,
`planDailyRateAllIn()`, `formatIDR()` and `privateChefPricing`.

**This is the only place a day rate is defined.** Change a number there and every page,
meta description, FAQ answer and schema node follows. Before this, 119 figures were
hardcoded across 19 files, which is how six contradictory price floors ended up live.

---

## 3. What shipped

### New page — `/private-chef-bali`
`src/pages/PrivateChefPillarPage.tsx`. Sections in order:

1. Hero — H1 "Private Chef in Bali", price in the headline
2. Trust strip
3. **Prices** (`#prices`) — three plan cards + the full nine-cell length-of-stay table, each row showing both `++` and all-in
4. What the price covers / what it does not — groceries, tax, premium ingredients, drinks, stated openly
5. **Cuisines** (`#cuisines`) — six specialist head chefs with photos, dishes and links to their profiles: Italian & Mediterranean (Adriano), Japanese & Seafood (Ketut Mahardika), Indonesian & Balinese (Ni Putu Asri), BBQ & Open Flame (Bayu Pranata), Plant-Based & Wellness (Sari Dewi Kusuma), Pastry (Wayan Suarjana)
6. How booking works — four steps
7. "Is a private chef actually worth it?" — group maths, plus a direct answer to the cheaper marketplace platforms
8. **Areas** (`#areas`) — 16 area chips linking down to `/private-chef/{area}`
9. FAQ — 10 questions written for the "People also ask" box
10. Booking form + WhatsApp CTA + sticky mobile CTA

**No calculator**, per your instruction. Schema: `Service` + `AggregateOffer` (800,000–2,700,000 IDR, `unitText: per day`), `FAQPage`, `BreadcrumbList`.

### Navigation
**Private Chef is now the first item.** Space came from merging Contact and Help into one
slot — both pages stay live and are reachable from the merged dropdown alongside the Pricing
Guide and FAQ.

```
Private Chef ▾   Catering ▾   Fine Dining ▾   Locations ▾   Dining Styles ▾
Events ▾   Experience ▾   In-Villa ▾   Staffing ▾   Contact ▾
```

Private Chef dropdown: the pillar · Prices & Meal Plans · Our Head Chefs · Cuisines We Cook ·
Areas We Cover · Full Price List.
Contact dropdown: Contact Us · Help Centre · Pricing Guide · FAQ.

The Fine Dining dropdown item "Private Chef Bali" previously pointed at the homepage; it now
points at the pillar.

### Homepage
Portal grid went from three cards to four — **Private Chef** added first, ahead of Fine
Dining, Catering and Events. Grid is now 1 / 2 / 4 columns responsive.

### Consolidation — 8 competing pages down to 3
| Page | Action |
|---|---|
| `/villa-chef` | **301 → pillar.** `SolPage.tsx` replaced with a tombstone so the old rates cannot be copy-pasted back. |
| `/hire-private-chef-bali-monthly` | **301 → pillar.** Removed from route slugs, page-meta and sitemap. |
| `/blog/daily-chef-service-bali` | Redirect **retargeted** to the pillar (was chaining through the monthly page). |
| `/blog/private-chef-bali-expats` | Redirect **retargeted** to the pillar (de-chained). |
| `/in-villa-service/villa-chef`, `/in-villa-service/meal-prep` | Retargeted to the pillar (de-chained). |
| `/pricing` | **Kept** — 223 visitors/30d, covers catering and events too. |
| `/blog/private-chef-cost-bali` | **Kept** — 39 visitors/30d, ranking, informational intent. |
| `/fine-dining/private-chef-bali` | **Kept** — different product (tasting menus). Still worth retitling to lead on "Michelin Tasting Menu"; not done yet. |

**Zero redirect chains** across all 206 redirects (verified). ~90 internal links repointed
off the redirected URLs so nothing hops.

**Location pages untouched structurally**, as you asked. The 61 `/private-chef/{area}` pages
keep their structure — only the price figures inside them were corrected.

---

## 4. Verification run

| Check | Result |
|---|---|
| `tsc --noEmit` | pass |
| `eslint` on all changed files | pass |
| Retired ladder anywhere in `src/` | 0 occurrences |
| Internal links to redirect sources | 0 |
| Redirect chains | 0 of 206 |
| `/private-chef-bali` shadowed by a redirect | no — removed from `redirects.ts` |
| ++ arithmetic (×1.21) | verified programmatically for all 9 cells |
| Area chips without a matching page | 0 of 16 |

---

## 5. Round two — groceries, keywords, calculators, internal links

### Groceries reframed as a service (owner ruling)
The first draft treated groceries as a caveat ("not included"). Wrong framing. The sourcing
**is** the service; only the food cost is billed separately. `/private-chef-bali#groceries`
is now a full section covering: we plan and shop all of it, fresh daily or every second day
depending on what the menu needs, across different markets (fish from the coast, produce from
the highlands, specialist items from the suppliers who stock them), and you pay exactly what
we paid with every receipt handed over.

The invented "IDR 150,000–350,000 per person per day" estimate has been **removed** — that was
my number, not yours. The page now says the grocery estimate is built with the guest against
their chosen menu, which is both true and better positioning.

### Keyword optimisation
Semrush AU showed the biggest gap was **villa**, not "private chef" — `bali private chef
villa`, `villa with private chef bali`, `private villa with pool and chef` and friends are
~200/mo combined and the page barely used the word. Also strong: `private chef hire bali`
(highest CPC in the set at 1.54) and `how much is a private chef in bali`.

Changes: hero and H1 area now lead with villa hire; section H2s rewritten as the questions
people type ("How much does a private chef in Bali cost?", "How to hire a private chef in
Bali", "Is hiring a private chef in Bali worth it?", "Private chef service for villas across
all of Bali"); two new FAQs added targeting *how do I hire* and *does the chef come to my
villa*; hero alt text rewritten. Visible-copy density now: Bali 41, private chef 30, villa 21,
cost 19, groceries 13, per day 12, hire 6.

### Calculators now quote real chef rental rates
| | Before | After |
|---|---|---|
| `/pricing-calculator` private chef base | IDR 350,000/person | **IDR 700,000/person** (matches `/pricing` and the homepage) |
| `/pricing` calculator formula | `guests × 700,000 + 500,000` | **`guests × 700,000`** — the unexplained flat 500,000 is gone |

Both calculators now render a **"Renting a chef for your whole stay?"** panel showing the three
real day rates straight from `MEAL_PLANS`, plus the weekly and monthly rates, plus a link to
`/private-chef-bali#prices`. They price one-off events per guest; chef hire is per day, so
rather than fake it in a per-person engine the panel states the real numbers and hands off.

### Internal linking
127 internal links now point at the pillar. Footer anchor changed from "Monthly Private Chef"
(the redirected page) to **"Private Chef Bali"**. Area pages were linking to the pillar twice
with two different anchors — only the first link on a page passes anchor text, so those are
collapsed into one "private chef in Bali" link. All 61 `/private-chef/{area}` pages now carry
a contextual sentence linking up to the prices section with the anchor "private chef Bali
prices page", and their price cards were rebuilt around the meal-count ladder.

---

## 6. Still outstanding

1. **`/fine-dining/private-chef-bali` retitle** — still carries "Private Chef Bali" in its
   title tag and competes with the pillar. Retitling to lead on "Michelin Tasting Menu" is a
   ten-minute change.
2. **Homepage H1** is still "Private Chef in Bali — Your Villa. Our Kitchen." Leave it until
   the pillar is indexed and ranking, then switch the homepage to brand-led. Never vacate a
   term before the replacement holds it.
3. **Deploy** — nothing is pushed. `vercel.json` regenerates from `redirects.ts` on build via
   `prebuild`, so the 301s land automatically.
