# myCHEF.id — Google Ads Build Plan

**Account:** Mychef — 570-521-1299 (under MacVision manager 458-937-9129)
**Currency:** IDR · **Timezone:** GMT+08:00 Central Indonesia
**Prepared:** 30 July 2026
**Status:** Build files ready. **Cannot be uploaded until account suspension is cleared.**

---

## 1. Hard blockers — nothing can launch until these clear

The account is in **read-only lockdown**. This was verified directly: with David logged in as **Admin**, Google Ads still returns *"You have read-only access to this account. You can't apply bulk changes."* The lock is caused by the suspension, not by a permissions problem. No campaign can be created, edited, or even **paused** right now.

| # | Blocker | Alert text | Who fixes it |
|---|---|---|---|
| 1 | **Overdue balance** | "Your ads aren't running — make a payment towards your overdue account balance" | **David only** — payment |
| 2 | **Account suspended** | "Suspended for unpaid balance or concerns about future payments" | Clears when #1 is paid |
| 3 | **Advertiser verification lapsed** | "Your verification deadline has passed. To restart your ads, complete advertiser verification" | **David only** — identity docs |
| 4 | **Indonesia NIK unverified** | "Your NIK is not verified against your record with the Indonesian DGT" | **David only** — tax/gov ID |

**I did not and will not touch #1, #3 or #4.** They require entering payment details and government identity/tax data. Those are yours to complete.

**Sequencing note:** advertiser verification (#3) historically takes **days to weeks**, and it runs independently of the payment. Start #3 and #4 today, in parallel with paying #1 — don't do them serially or you add weeks of delay.

### Also broken: all four conversion goals

| Goal | Status |
|---|---|
| Submit lead form | ⚠️ Needs attention |
| Book appointment | 🔴 Misconfigured |
| Request quote | 🔴 Misconfigured |
| Outbound click | 🔴 Misconfigured |

**Consequence:** no Smart Bidding. Target CPA, Target ROAS and Maximize Conversions all need conversion signal and have none. The plan below therefore starts on **Maximize Clicks with a CPC cap** and switches to Maximize Conversions only after tracking is verified and ~15–30 conversions/month are landing.

There is a related note already in the codebase: GA4 (`G-W0PQH8ZKTF`) was previously firing zero `/collect` hits because GTM (`GTM-KCBNZBL9`) injected the loader but no GA4 Configuration tag fired. Verify Google Ads conversion imports independently of that — a working GA4 does not mean working Ads conversions.

---

## 2. Can AI/MCP do the setup? Partly.

| Tool | Write access? | Verdict |
|---|---|---|
| **Google's official Google Ads MCP** (released Apr 2026) | ❌ **Read-only** | Reads metrics, budgets, statuses. Cannot create a campaign, change a bid, or add a keyword. |
| Supermetrics / Windsor.ai / Coupler.io | ❌ Reporting only | Data pipes for dashboards, not campaign management. |
| Third-party write MCPs (Adspirer etc.) | ✅ Paid, hosted | Not recommended for a billing-suspended account — adds a third party to an account already flagged for payment concerns. |
| **Google Ads Editor + CSV import** | ✅ | **The fast path.** Bulk import, review the diff, post in one action. |
| Semrush / Ahrefs MCP (connected) | ✅ for research | Used for the keyword data below. |
| Google Keyword Planner | ✅ Accessible | Confirmed still usable despite the suspension — use it to sanity-check IDR CPCs before you post. |

**So the workflow is:** research with MCPs (done) → build CSVs (done) → import via Google Ads Editor (you, after suspension clears) → review → post.

---

## 3. What was already in the account, and why it was dangerous

Two campaigns, both with **zero impressions and zero spend** since at least 1 April 2026 (the suspension).

| Campaign | Type | Budget/day | Status |
|---|---|---|---|
| `ads 1` | Performance Max | IDR 285,964 | Paused |
| `General keywords` | Search | IDR 399,487 | **Enabled** |

`General keywords` → one ad group `Isolated to Bali` → 7 keywords, **every one Broad match**, and **zero negative keywords account-wide**.

Combined budget IDR 399,487/day ≈ **USD 730/month**.

Three specific problems:

1. **Broad match + zero negatives + a large budget.** The moment the suspension lifts, this campaign starts spending on whatever Google decides is loosely related. This is the highest-risk item in the account.
2. **Two keywords have the wrong intent.** `bali villa with chef` and `bali villa with private pool and chef` are *villa-booking* searches. Those people want to rent a property, not hire a chef. Same trap applies to `villa party bali` (210/mo in Indonesia) — high volume, wrong buyer.
3. **The budget exceeds what the market can absorb.** See section 4.

**Action taken:** none possible — the account is read-only. **`General keywords` is still Enabled.** Pause it the moment you regain write access, *before* you import anything.

---

## 4. Keyword research — the market is smaller than the budget

Source: Semrush, July 2026.

### Core term across all markets: `private chef bali`

| Market | Volume/mo | CPC |
|---|---|---|
| Australia | 170 | $0.85 |
| Indonesia | 170 | $0.45 |
| United States | 50 | $1.06 |
| Singapore | 20 | $0.81 |
| UK | 20 | $0.68 |
| NZ, CA, DE, FR, ES, IT, NL, AT, BE | ~20 each | — |
| **Global total** | **~600/mo** | — |

### Australia (source market) detail

| Keyword | Volume | CPC | Competition |
|---|---|---|---|
| private chef bali | 170 | $0.85 | 0.38 |
| bali villa with chef | 140 | $0.79 | 0.75 |
| bali private chef | 50 | $0.70 | 0.41 |
| bali chef hire | 40 | $0.56 | 0.66 |
| bali villa private chef | 30 | $0.86 | 0.99 |
| private chef seminyak / uluwatu | 20 ea | $0.93 | — |
| private chef ubud | 20 | $0.87 | 0.41 |
| private chef canggu | 20 | $0.78 | 0.58 |
| private chef bali cost / price | 20 ea | $0.37 | — |

### Indonesia detail

| Keyword | Volume | CPC |
|---|---|---|
| catering bali | 590 | $0.34 |
| private chef bali | 170 | $0.45 |
| private dining bali | 30 | $0.38 |
| catering prasmanan bali | 30 | $0.17 |
| private chef seminyak | 20 | $0.43 |
| catering murah bali | 20 | $0.13 |

### The arithmetic that drives the budget decision

Total commercial-intent volume across every market and every core variant is roughly **1,500–3,000 searches/month**. At realistic impression share you might win 300–600 clicks/month on *tightly matched* keywords. At ~$0.80 CPC that is **USD 240–480/month of genuinely relevant inventory.**

The original USD 730/month budget was 1.5–3× larger than the addressable market. Broad match will always find somewhere to spend the surplus, and none of it will be qualified. **This is the mechanism by which the old setup would have wasted money — not a hunch, arithmetic.**

Recommended start: **USD 200/month → IDR 118,000/day** (at IDR 17,935/USD, 26 Jul 2026). Scale up only when search-term data shows you are losing impression share on keywords that actually convert.

---

## 5. Campaign structure

**Campaign:** `MYCHEF | Search | Source Markets`

| Setting | Value | Why |
|---|---|---|
| Type | Search only | No Display, no Search Partners at launch — keeps the data clean. |
| Locations | AU, US, UK, SG, NZ, CA, NL, DE, FR | Pre-trip planners, per your decision. |
| Location option | **Presence** (not "presence or interest") | Targets people physically in those countries. "Presence or interest" would pull in people already in Bali and blur the two audiences. |
| Language | English | |
| Budget | IDR 118,000/day (~USD 200/mo) | Section 4. |
| Bidding | **Maximize clicks, max CPC cap IDR 25,000** (~USD 1.40) | Conversion tracking is broken; Smart Bidding is not an option yet. Cap sits above the $0.93 observed high. |
| Match types | **Exact + Phrase only** | No broad match until there is search-term history and a mature negative list. |
| Ad rotation | Optimise | |

### Ad groups

| Ad group | Keywords | Landing page |
|---|---|---|
| Private Chef - Core | 10 | `/guide/private-chef-bali` |
| Private Chef - Cost | 7 | `/calculator` |
| Villa Chef - Multi Day | 8 | `/villa-chef` |
| Party Catering | 8 | `/luxury-birthday-party-bali` |
| BBQ Catering | 7 | `/seafood-bbq-catering-bali` |
| Events & Groups | 6 | `/private-chef-for-events` |
| Areas | 10 | keyword-level URLs → `/private-chef/{area}` |

**56 keywords · 7 ad groups · 7 responsive search ads · 117 campaign-level negatives.**

Area keywords use **keyword-level Final URLs** so `private chef canggu` lands on `/private-chef/canggu` rather than a generic page. Individual area volumes (~20/mo) are too thin to justify separate ad groups.

### Deliberately excluded from v1

- **Wedding catering** — different buyer, longer cycle, much higher order value. Deserves its own campaign and budget, not a share of this one.
- **Indonesian-language / domestic terms** — `catering bali` has real volume (590/mo) at very low CPC ($0.13–0.34), but it is a different audience, a different price expectation, and needs Bahasa ad copy and landing pages. Worth a separate campaign later.
- **Performance Max** — leave `ads 1` paused. PMax without conversion signal is a budget donation.

---

## 6. Negative keywords — 117 phrase negatives

This is the single highest-value part of the build, because the account currently has **none**. Grouped by what they block:

- **Villa/accommodation rental intent** (26) — `villa for rent`, `villa rental`, `airbnb`, `hotel`, `resort`, `where to stay`… Deliberately *phrase* negatives, not the single word `villa`, because `villa chef bali` is a target keyword.
- **Jobs & training** (19) — `chef job`, `chef salary`, `cooking class`, `culinary school`, `how to become a chef`, `lowongan kerja`…
- **Free / DIY** (7) — `recipe`, `how to cook`, `tutorial`, `youtube`…
- **Wrong service** (13) — `restaurant`, `warung`, `food delivery`, `gojek`, `grab food`…
- **Wrong role** (8) — `nanny`, `driver`, `housekeeper`, `maid`…
- **Products** (9) — `chef knife`, `chef uniform`, `chef jacket`…
- **TV/brand confusion** (7) — `masterchef`, `gordon ramsay`, `hells kitchen`… (large volume, zero commercial value)
- **Software** (6) — `chef devops`, `chef infra`, `chef cookbook`… (Chef is also a DevOps tool)
- **Other destinations** (16) — `phuket`, `thailand`, `maldives`, `tulum`, `santorini`…
- **Price shoppers** (7) — `cheap`, `murah`, `cheapest`, `discount`…
- **Informational only** (8) — `meaning`, `wikipedia`, `vs personal chef`, `reddit`…

---

## 7. Ad copy — facts used

All claims in the RSAs were pulled from the live site source, not invented:

| Claim | Source |
|---|---|
| From IDR 700K per person | `LandingPage.tsx`, `BookPage.tsx` |
| Villa chef from IDR 2.5M++/half day | `/villa-chef` meta description |
| Groceries at cost | `/villa-chef` meta description |
| 4 guests minimum (fine dining) | `PillarSubPage.tsx` |
| BBQ 10 guests minimum | `PillarSubPage.tsx` |
| Villa parties from 10 guests | `PillarSubPage.tsx` |
| Reply in 2 hours, itemised quote in 24 hours | `LandingPage.tsx`, `/quote` |
| Prices ++ (11% tax + 10% service) | `LandingPage.tsx` |
| Jimbaran market sourcing | `/seafood-bbq-catering-bali` meta |
| Areas covered | `dist/private-chef/*` |

All 105 headlines validated ≤30 characters and all 28 descriptions ≤90 characters programmatically.

### ⚠️ One factual discrepancy to resolve before posting

My notes from an earlier session recorded a **5-guest minimum**. The live site says **four guests minimum for the full fine dining experience** (`PillarSubPage.tsx`). The ad copy currently says **"4 Guests Minimum"** to match the site. Confirm which is correct — if it is 5, the site and the ads both need changing.

### Two copy decisions for you

1. **Currency in ads.** Copy quotes IDR, matching the site. IDR 700K reads as a big number to an Australian who hasn't converted it — it's about **AUD 66 / USD 39**, which is genuinely competitive against a private chef at home. Converting in the ad could lift CTR, but rates move and it creates a site/ad mismatch. Currently left as IDR.
2. **WhatsApp vs. form.** The site pushes WhatsApp (+62 896-7407-2020). Ads point at web pages. Consider **call/message assets** on the ads so international searchers can reach WhatsApp in one tap — but that only pays off once conversion tracking works.

---

## 8. Execution order

**Now — you, in parallel:**
1. Pay the overdue balance.
2. Start advertiser verification (slowest item — start it today).
3. Submit Indonesia NIK / tax information.

**The moment write access returns — before importing anything:**
4. **Pause `General keywords`.** It is still Enabled with broad match, zero negatives and IDR 399,487/day.
5. Confirm `ads 1` (PMax) stays paused.

**Then, fix measurement before spending:**
6. Repair all four conversion goals. Verify a real quote submission fires a real Google Ads conversion — not just a GA4 event.
7. Only after conversions are recording, import the build.

**Import:**
8. Google Ads Editor → Account → Import → From file → `01-keywords.csv`, then `02-responsive-search-ads.csv`, then `03-negative-keywords.csv`.
9. Set location option to **Presence** (CSV cannot carry this — set it in the UI).
10. Review the proposed-changes diff in Editor. **Post nothing you have not read.**
11. Cross-check a handful of CPCs in Keyword Planner against the Semrush figures in section 4 before going live.

**First 30 days:**
12. Check the **Search Terms report every 2–3 days** and add negatives. With a brand-new campaign this is where the money is saved.
13. Do **not** switch to Smart Bidding until you have ~15–30 conversions/month.
14. Leave budget at IDR 118,000/day until search-term data justifies more.

---

## 9. Risks I'd flag before you spend anything

1. **Verification may not clear.** If advertiser verification or NIK verification fails, the account may stay suspended indefinitely. Do not plan around a launch date until #3 and #4 are actually approved.
2. **A suspension for "concerns about future payments" is not purely mechanical.** Paying the balance may not automatically restore serving. Budget time for an appeal.
3. **The market is small.** At ~600/mo globally for the core term, Google Ads may not be the highest-leverage channel here. The site already ranks content for these terms — organic and the existing SEO work may return more per rupiah. Worth measuring before scaling paid spend.
4. **Attribution across a long booking cycle.** A pre-trip planner may search in Australia in August and book in October. Last-click attribution will undercount Search. Set the conversion window to 90 days.
5. **Nothing here is verified against live performance,** because the account has never served an impression. Every number is a pre-launch estimate.

---

*Files: `01-keywords.csv`, `02-responsive-search-ads.csv`, `03-negative-keywords.csv` — all Google Ads Editor import format.*
