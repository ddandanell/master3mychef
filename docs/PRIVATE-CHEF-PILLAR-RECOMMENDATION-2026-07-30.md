> **STATUS: BUILT 30 July 2026.** This document is the reasoning; the work is done.
> Owner confirmed new rates (1 meal IDR 1,000,000++ / 2 meals 1,800,000++ / 3 meals
> 2,700,000++ per day, ++, weekly −10%, monthly −20%) which **replace** the
> 2.5M/3.5M/4.2M ladder discussed in §4 below. See
> `PRIVATE-CHEF-PILLAR-BUILD-LOG-2026-07-30.md` for what shipped.

# Private Chef Pillar Page — Architecture Recommendation

**Date:** 30 July 2026
**Scope:** mychef.id / `master3mychef`
**Question asked:** *"I need a dedicated Private Chef page with prices from the calculator — daily, weekly, monthly. The front page should be a hub. How should I do it?"*
**Method:** Full route inventory of `src/App.tsx` (187 page components), pricing logic extraction from `PricingCalculator.tsx` and `SolPage.tsx`, Vercel Web Analytics 30-day report, Semrush AU/US/ID keyword + SERP data, live fetch of the two top-ranking competitor pages.

---

## 1. Verdict up front

**Your instinct is right. Your proposed solution is wrong in one important way.**

| Your hypothesis | Verdict | Evidence |
|---|---|---|
| "Most of our clients are looking for pricing" | **Confirmed** | `/pricing` is the #2 page on the site — 223 of 1,215 visitors (18.4%) in 30 days. `/blog/private-chef-cost-bali` outranks most service pages. The #4 organic result for "private chef bali" (AU) is a *cost* article. |
| "The front page is difficult to use for this" | **Confirmed** | The homepage currently has 26 sections covering every service. "Private chef" competes with catering, events, bar services and villa partnerships for the same real estate. |
| "I need to create a new page called Private Chef" | **Reject — you need to consolidate, not create** | You already have **eight** competing private-chef assets, four of which publish different prices for the same service. A ninth page makes the problem worse, not better. |
| "Take the price from the calculator" | **Reject — the calculator is wrong** | `/pricing-calculator` uses a base of **IDR 350,000/person** for a private chef dinner. Every other page on the site publishes **IDR 700,000/person**. The calculator under-quotes by 50%. See §5. |

**The single most valuable thing you can do is not build a page. It is to stop publishing six different prices for the same service.**

---

## 2. What you already have (the actual problem)

Eight URLs currently compete for "private chef in Bali", each publishing a different price floor:

| URL | What it is | Price floor published | Nav link? | Traffic (30d) |
|---|---|---|---|---|
| `/` | Homepage. H1 = *"Private Chef in Bali — Your Villa. Our Kitchen."* | IDR 700K / person | — | 518 visitors |
| `/pricing` | Cross-service price index | IDR 700K / person + 31 other figures | **No** | 223 visitors |
| `/fine-dining/private-chef-bali` | Michelin tasting-menu page | IDR **2,200,000** / person | **No** (nav item labelled "Private Chef Bali" points at `/`) | 31 visitors |
| `/villa-chef` | **Has the daily / weekly / monthly table you want** | IDR 2,500,000 / **day** | **No** | not in top 30 |
| `/pricing-calculator` | Interactive estimator | IDR **350,000** / person ← contradicts everything | **No** | not in top 30 |
| `/private-chef/{61 areas}` | Templated area pages | IDR 2,500,000 / half day + IDR 700K / person | **No** | not in top 30 |
| `/hire-private-chef-bali-monthly` | Landing page | Monthly rates in JSON-LD only, **no visible content** | **No** | not in top 30 |
| `/blog/daily-chef-service-bali` | Duplicate of `/villa-chef`'s rate ladder | Same 9 figures as `/villa-chef` | **Unreachable** — redirect fires before the route | 0 |

### Three findings that matter most

**a) The page you want already exists — it is just hidden.**
`/villa-chef` (component `SolPage.tsx`) already publishes the exact daily/weekly/monthly table you described. It has **no navbar link, no keyword in the URL, and an internal codename for a filename**. It is the single most commercially useful page on the site and almost nobody can find it.

**b) The navbar deliberately sends "Private Chef Bali" to the homepage.**
`src/components/Navbar.tsx:72` — verbatim comment: `// SEO rebuild 2026-07-24: consolidate "Private Chef Bali" anchor equity onto homepage.` So a decision was already made that the *homepage* is the private chef page. **Your new plan reverses that decision.** That is a legitimate choice, but it must be made consciously — you cannot have both.

**c) You are not ranking for your own head term.**
Semrush AU, July 2026, "private chef bali" (170/mo — your largest single market): mychef.id does **not** appear in the top 15. The page-1 field is takeachef.com, Instagram, a cooking school's blog post, Reddit and TripAdvisor. This is a weak SERP. It is winnable.

---

## 3. Recommended architecture

### The decision you have to make first

Who owns the term "private chef bali"?

| Option | Homepage H1 | Pillar | Trade-off |
|---|---|---|---|
| **A — status quo** | "Private Chef in Bali — Your Villa. Our Kitchen." | Homepage | Keeps existing equity. But the homepage can never be the focused, dominating page you described. |
| **B — recommended** | Brand-led (e.g. *"Your Villa. Our Kitchen."*) | `/private-chef-bali` | Gives you the dominating page. Costs you 2–4 months while the new URL earns the ranking the homepage currently holds. |

**Recommendation: Option B**, because the homepage is already carrying 26 sections and cannot be optimised further for one term, and because your competitors on page 1 are weak enough that a genuinely better page should outrank them.

### Target structure

```
/                          ← BRAND HUB (your "front page" vision)
│   H1: brand-led, not keyword-led
│   Portal grid → the six universes:
│     Private Chef · Catering · Events & Weddings · Fine Dining
│     In-Villa Staff · Locations
│   Keep the existing price strip — it works — but point it at the pillar
│
├── /private-chef-bali     ← THE PILLAR (new home of /villa-chef content)
│     Full transparent price table: per-event AND daily/weekly/monthly
│     Absorbs: /villa-chef (301)
│               /hire-private-chef-bali-monthly (301)
│               /blog/daily-chef-service-bali (already dead, 301)
│     │
│     ├── /private-chef/{61 areas}   ← already built, link UP to pillar
│     └── /pricing                   ← stays, as the cross-service index
│
├── /catering  ├── /events  ├── /fine-dining  ├── /in-villa-service  ├── /locations
```

### Why `/private-chef-bali` and not `/private-chef`

- `/private-chef-bali` is currently a **dead redirect stub** — the URL is free and already wired.
- It contains the exact head term. `/private-chef` does not include the geo modifier that every one of your queries carries.
- It sits at root level, one click from the homepage — maximum internal link equity.
- `/private-chef/{area}` children read naturally as a set beneath it.

### What happens to `/fine-dining/private-chef-bali`

Retitle it. It is not a private chef page — it is a Michelin tasting-menu page (IDR 2.2M–2.4M/person, Adriano's story, wine pairing). Change the H1 and title to lead with **"Michelin Tasting Menu"**, remove "Private Chef Bali" from the title tag, and link it up to the new pillar as the premium tier. This stops it competing with the pillar and gives it a term it can actually own.

---

## 4. The full transparent price table

You chose full transparency. Below is every published rate reconciled into one table, using **only numbers already live in the codebase**. `++` = 11% government tax + 10% service charge (×1.21).

### Table A — Chef by the day (chef + dedicated assistant, groceries at cost)

| Package | What it covers | Daily rate | Weekly rate (7+ days, −10%) | Monthly rate (28+ days, −20%) |
|---|---|---|---|---|
| **Half Day** | Cook & serve one meal + one meal prepared for later | IDR 2,500,000++ /day | IDR 2,250,000++ /day | IDR 2,000,000++ /day |
| **Full Day** | Cook & serve two meals + one prepared for later | IDR 3,500,000++ /day | IDR 3,150,000++ /day | IDR 2,800,000++ /day |
| **Complete Full Day** | Breakfast, lunch and dinner, cooked and served | IDR 4,200,000++ /day | IDR 3,780,000++ /day | IDR 3,360,000++ /day |

### Table B — the same figures all-in (what the customer actually pays)

Publish this as a toggle next to Table A. It is the single biggest trust lever you have, because no competitor does it.

| Package | Per day all-in | Per week all-in (7 days) | Per month all-in (28 days) |
|---|---|---|---|
| Half Day | IDR 3,025,000 | IDR 19,057,500 | IDR 67,760,000 |
| Full Day | IDR 4,235,000 | IDR 26,680,500 | IDR 94,864,000 |
| Complete Full Day | IDR 5,082,000 | IDR 32,016,600 | IDR 113,836,800 |

*Weekly/monthly columns apply the discounted day rate. Groceries billed separately at cost with receipts.*

### Table C — Chef by the event (per person)

| Format | From | Notes |
|---|---|---|
| Villa dinner, 3–4 courses | IDR 700,000++ /person | 2–10 guests |
| Fine-dining tasting menu | IDR 1,750,000++ /person | 5-guest minimum |
| Wagyu / French experience | IDR 1,950,000–2,400,000++ /person | |
| Chef's Table (interactive, 6 guests) | IDR 3,500,000++ /person | |
| Romantic dinner for two | IDR 2,800,000 / couple | |
| BBQ & group catering | IDR 700,000++ /person | groups 8+ |
| Wedding catering | IDR 1,500,000–3,000,000++ /person | |
| Wine pairing (4–5 glasses) | +IDR 850,000 /person | |

### Table D — Add-on staff

| Role | Rate |
|---|---|
| Waiter / server | IDR 250,000 /hour (3h min) |
| Bartender | IDR 350,000 /hour (3h min) |
| Butler | IDR 400,000 /hour |
| Sommelier | quoted per event |

**One waiter per 10 guests is the standard ratio.**

---

## 5. Blockers — fix these before or alongside the page

Ordered by severity.

### 🔴 P1 — The calculator under-quotes by 50%
`src/pages/PricingCalculatorPage.tsx` uses **IDR 350,000/person** as the private-chef base. Every other page says IDR 700,000. A prospect who uses the calculator receives an estimate half the real price, then gets a quote that is double what the site told them. This destroys trust at exactly the moment of highest intent, and it corrupts your lead quality.

Separately, `src/components/PricingCalculator.tsx` (used on `/pricing`) uses `guests × 700,000 + 500,000` — a *different* formula again. **Two calculators, two formulas, neither matching the published table.**

**Action:** pick one engine, drive it from a single constants file, delete the other.

### 🔴 P2 — Six contradictory price floors
A transparent price table published on top of six contradictory floors just adds a seventh. Every figure must come from one source of truth (extend `src/data/siteFacts.ts` with a `pricing` block) before the pillar ships.

### 🟠 P3 — `/villa-chef` has no navbar link
The most commercially useful page on the site is unreachable from navigation. Even before any restructure, adding it to the nav is a same-day win.

### 🟠 P4 — Title/H1 flip on hydration
`/fine-dining/private-chef-bali` prerenders `Michelin-Trained Chefs Bali | ...` then swaps to `Michelin Private Chef Bali | ...` on hydration. The H1 in `page-meta.ts` says *"At Your Space"*; the component renders *"At Your Villa"*. Same class of bug likely affects other pages.

### 🟡 P5 — Client-side-only redirects
`/private-chef-bali` → `/fine-dining/private-chef-bali` is a React `<Navigate>`, with no matching entry in `vercel.json`. Google sees a 200 and an SPA shell. Any 301 in this plan must be a real server-side redirect.

---

## 6. Competitive reality check

I fetched the two pages beating you.

**takeachef.com (#1, AU)** publishes per-person prices openly:

| Group size | Their price / person |
|---|---|
| 13+ people | IDR 288,542 |
| 7–12 people | IDR 317,708 |
| 3–6 people | IDR 466,667 |
| 2 people | IDR 537,508 |

**They are 25–60% cheaper than your IDR 700,000 floor.** Full transparency will expose this. You cannot publish your table and ignore it.

**But their product is not your product.** They are a marketplace of 161 freelance chefs — solo, no assistant, no service staff, average rating 4.17 for the chef. You send a chef *and* a dedicated assistant, you serve, and you clean. Your table must state that difference on the same screen as the price, or the number does the arguing for them.

**tamandukuh.com (#4, AU)** ranks for the head term with a cooking school's blog post whose entire pricing answer is *"$30 to $350 per day"* — no real figures, no packages, no tax explanation. **This is the gap.** A page with Tables A–D above is strictly, obviously better than the page currently ranking fourth.

**Nobody on page 1 publishes daily, weekly and monthly rates.** That is your wedge — not "private chef", which is crowded, but **"private chef for a week / for a month in Bali"**, which is unoccupied.

---

## 7. Suggested page structure for `/private-chef-bali`

1. **Hero** — H1 `Private Chef in Bali` · sub: chef + assistant, groceries at cost, from IDR 2,500,000++/day or IDR 700,000++/person · WhatsApp CTA
2. **Which do you need?** — two-door split: *One dinner* → per-person path · *Several days* → per-day path. This is the page's most important section; most competitors conflate the two and confuse the visitor.
3. **Table A + B** — day rates, with the all-in toggle
4. **Table C** — event rates per person
5. **Table D** — add-on staff
6. **Calculator** — one engine, feeding the same numbers, prefilled from the section above
7. **What "++" means** — worked example (700,000 → 847,000)
8. **What's included / what's not** — groceries at cost with receipts is a genuine differentiator, lead with it
9. **vs. a freelance chef / vs. eating out** — where you address the takeachef price gap directly
10. **Where we come to you** — link block to all 61 `/private-chef/{area}` pages
11. **Proof** — 560+ events, 12,000+ guests, testimonials
12. **FAQ** — cost, minimums, notice period, deposit, cancellation
13. **Booking form + sticky WhatsApp CTA**

**Schema:** `Service` + `AggregateOffer` (lowPrice 700000 / highPrice 4200000, IDR) + `FAQPage` + `BreadcrumbList`. Do **not** emit `Offer` nodes with prices that contradict Tables A–D — this is where the current site's inconsistency becomes machine-readable.

---

## 8. Sequenced plan

| Phase | Work | Why this order |
|---|---|---|
| **0 — this week** | Fix the 350K calculator base. Add `/villa-chef` to the navbar. | Stops active damage. Both are hours, not days. |
| **1** | Create `pricing` block in `siteFacts.ts`. Repoint every price on every page to it. | Nothing else is safe until one source of truth exists. |
| **2** | Build `/private-chef-bali` from `SolPage.tsx` + Tables A–D. | The content already exists; this is largely a move and merge. |
| **3** | Server-side 301: `/villa-chef`, `/hire-private-chef-bali-monthly`, `/blog/daily-chef-service-bali` → `/private-chef-bali`. Update all ~40 internal links. | Consolidates equity onto one URL. |
| **4** | Retitle `/fine-dining/private-chef-bali` to lead with "Michelin Tasting Menu". | Removes the last internal competitor. |
| **5** | Rework homepage into the portal hub. Change H1 only **after** the pillar is indexed and ranking. | Never vacate a term before the replacement holds it. |
| **6** | Point all 61 `/private-chef/{area}` pages up at the pillar. | Builds the topical cluster. |

---

## 9. Open questions for you

1. **Are the `/villa-chef` day rates current?** Every figure above is read from code. If half-day is no longer IDR 2,500,000++, the whole table is wrong before it ships.
2. **Do you want to publish the weekly/monthly *totals* (Table B), or only the day rates?** IDR 113,836,800 for a month of complete full-day service is a true number and a large one. Totals build trust; they also cause sticker shock. My suggestion: day rate as the headline, total behind a toggle.
3. **Is the 5-guest minimum for fine dining still correct, and does any minimum apply to day-rate bookings?**
4. **Are you willing to change the homepage H1?** This is the load-bearing decision in the whole plan. If the answer is no, the pillar will always be the site's second-best private chef page and we should plan differently.
5. **Do you want a price-match or price-explanation block addressing takeachef.com directly?** Naming the gap is more persuasive than ignoring it, but it also acknowledges a cheaper option exists.
