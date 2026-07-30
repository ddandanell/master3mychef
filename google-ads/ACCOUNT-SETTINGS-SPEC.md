# myCHEF.id — Google Ads Account Settings Spec & GA4 Audit

**Account:** Mychef 570-521-1299 · **GA4:** `mychef.id` (`G-W0PQH8ZKTF`, property 510246176)
**Date:** 30 July 2026
**ICP (confirmed):** Foreign, English-speaking, planning a Bali trip in advance, higher budget, **does not know pricing**.

---

## Part 1 — What I completed today in GA4

GA4 is not affected by the Ads suspension, so this was done live.

### ✅ Created 5 custom dimensions

| Dimension | Parameter | Why it matters |
|---|---|---|
| Lead Ref | `lead_ref` | The code stamped into the WhatsApp message. The key to closing the loop. |
| Attr Click ID | `attr_click_id` | The `gclid`/`gbraid`/`wbraid` behind the lead. |
| Attr Campaign | `attr_campaign` | Which campaign produced it. |
| Attr Source | `attr_source` | **Paid vs organic on every single lead.** |
| Attr Medium | `attr_medium` | `cpc` / `organic` / `referral`. |

Without these, GA4 collects the parameters but discards them from every report. They are now queryable.

### ✅ Verified key events — already correct

`generate_lead` ★ and `quote_submitted` ★ are both marked as key events and receiving data. `purchase` exists but has no stream data (irrelevant for lead-gen).

⚠️ **Because both are key events, importing both into Ads as *Primary* would double-count.** One person clicking WhatsApp *and* submitting the quote form = 2 conversions. Import `generate_lead` as the only Primary. This is now confirmed against live config, not assumed.

### ⬜ Four optional dimensions left (add if you want the full set)

`attr_term`, `attr_content`, `attr_click_id_type`, `attr_landing_path` — same steps, Event scope. Not required for the core reporting.

---

## Part 2 — The GA4 audit changed the campaign. Here's the evidence.

### 🔴 Finding 1: You have a serious bot traffic problem

Last 28 days: **5,155 sessions, of which 4,423 (85.8%) are Direct** — with a **4.3% engagement rate and 4 seconds average engagement**.

GA4's own anomaly detection flagged it: *"On July 22, 2026, direct visits surged to around 3.6k, far exceeding the expected 11… driven by massive growth from Indonesia, jumping from 6 to 3.6k, and Safari users, rising from 5 to 3.6k."*

Country view confirms it: **4,145 "users" from Indonesia**, concentrated in **Denpasar**, on **Safari**, arriving **Direct**, 7.4% engagement, 7 seconds.

That is not human traffic. It is a scraper, a data-centre, or a single network hammering the site.

**Why this is urgent, not cosmetic:** the moment GA4 is linked to Google Ads, this pollution flows into Smart Bidding signals and any remarketing audience you build. Google would learn its idea of a "myCHEF visitor" from 4,145 bots.

**Fix before linking GA4 → Ads:** add an internal-traffic / data-filter rule in GA4 Admin → Data Streams → Configure tag settings → Define internal traffic, or at minimum build every Ads-facing audience with an `engagement_time > 10s` condition. Do not link the two systems until this is contained.

### 🔴 Finding 2: The United States is a trap — I removed it from the campaign

I had the US in the original location list on the strength of Semrush volume (50/mo, highest CPC at $1.06). **Real behaviour contradicts that completely.**

| Country | Users | Engagement rate | Avg engagement | Key events | **Key event rate** |
|---|---|---|---|---|---|
| 🇦🇺 **Australia** | 136 | **73.5%** | **1m 30s** | **40** | **22.06%** |
| 🇳🇿 New Zealand | 22 | 71.1% | **4m 05s** | 5 | **22.73%** |
| 🇸🇬 Singapore | 41 | 64.6% | 1m 35s | 13 | 14.63% |
| 🇲🇾 Malaysia | 16 | **81.8%** | 1m 35s | 8 | **31.25%** |
| 🇦🇪 UAE | 13 | 54.2% | 1m 06s | 5 | **38.46%** |
| 🇳🇱 Netherlands | 14 | 61.1% | 42s | 3 | 21.43% |
| 🇬🇧 UK | 22 | 59.3% | 50s | 3 | 13.64% |
| 🇺🇸 **United States** | **194** | **23.0%** | **21s** | **8** | **2.06%** |
| 🇮🇩 Indonesia (bot-inflated) | 4,145 | 7.4% | 7s | 89 | 0.94% |

**The US sends 43% more users than Australia and produces 5× fewer key events.** 21 seconds of engagement is a bounce. Spending USD-denominated CPCs ($1.06, the highest of any market) to buy that traffic on a USD 200/month budget would be the fastest way to waste it.

**Australia is unambiguously your market.** 73% engagement, 1m30s, and more key events than every other country combined.

**New Zealand at 4m05s average engagement** is the most engaged audience on the site — small, but they read everything. Exactly the "planning ahead, doesn't know pricing" buyer you described.

### 🟢 Finding 3: Malaysia and UAE were missing entirely — added

**UAE: 38.46% key event rate. Malaysia: 31.25%.** The two highest on the site, from countries that weren't in my plan at all. Tiny volume, but affluent, English-speaking, and they travel to Bali. At these intent levels they are worth having.

### 🟢 Finding 4: Organic search is your actual engine

| Channel | Sessions | Engagement rate | Key events | Key event rate |
|---|---|---|---|---|
| Direct (bot-inflated) | 4,423 | 4.3% | 47 | 0.81% |
| **Organic Search** | **577** | **72.4%** | **127** | **14.9%** |
| Unassigned | 84 | 51.2% | 32 | 15.48% |
| **AI Assistant** | **50** | 62.0% | 14 | **24.0%** |
| Referral | 37 | 56.8% | 5 | 8.11% |
| Organic Social | 31 | 83.9% | 0 | 0% |

Organic Search delivers **127 of your 225 key events from 11% of sessions.** Your SEO work is doing the heavy lifting.

**Note the AI Assistant channel: 24% key event rate — the second-highest of any channel.** ChatGPT/Perplexity referrals convert. That is worth protecting and growing; it's cheaper than paid.

**The strategic implication is uncomfortable and worth saying plainly:** organic already converts at 14.9% and costs nothing per click. Google Ads has to beat that to deserve budget. Run the paid test, but judge it against organic — not against zero.

### ℹ️ Finding 5: "Total revenue" will always read Rp0

`generate_lead` carries a value, but GA4's Total revenue metric only counts `purchase` events. Rp0 everywhere is expected behaviour for lead-gen, not a bug. Don't chase it.

---

## Part 3 — Revised campaign settings

### Locations — CHANGED

**Now:** Australia, New Zealand, Singapore, Malaysia, United Arab Emirates, United Kingdom, Netherlands
**Removed:** United States, Canada, Germany, France

`01-keywords.csv` has been regenerated with this list.

| Setting | Value | Reasoning |
|---|---|---|
| **Location option** | **Presence** | Not "Presence or interest". You want people physically in source markets, planning a trip. "Interest" would pull in people already in Bali and blur the two audiences. |
| **Excluded location** | **Indonesia** | Explicitly exclude. Prevents both the bot region and in-Bali searchers from consuming a budget built for pre-trip planners. |
| **Language** | English | All customers are English-speaking, per your brief. |

**On the US:** if you want to test it later, give it a **separate campaign with its own small budget.** Inside the main campaign it would cannibalise Australia's budget at a 2% key event rate. Never let a proven market and an unproven one share a budget.

### Bidding & budget

| Setting | Value | Reasoning |
|---|---|---|
| Bid strategy | **Maximize clicks, max CPC IDR 25,000** (~USD 1.40) | Conversion tracking isn't wired into Ads yet. Smart Bidding without conversion signal optimises on nothing. |
| Daily budget | **IDR 118,000** (~USD 200/mo) | Section 4 of the build plan. Market is small; this is right-sized. |
| Later | Switch to **Maximize conversions** at ~15–30 conv/month | Not before. |
| Conversion window | **90 days** | Your ICP plans ahead — they may search in August and book in October. A 30-day window would silently discard real conversions. |
| Attribution model | Data-driven | |
| Count | **One** per click | Not "Every". Lead-gen: one enquiry is one lead. |

### Networks — all off except Search

| Setting | Value | Reasoning |
|---|---|---|
| Google Search | ✅ On | |
| **Search Partners** | ❌ **Off** | Lower-quality inventory, no separate reporting to diagnose it. Turn on only after Search is proven. |
| **Display Network** | ❌ **Off** | Google enables this by default on new Search campaigns and it is where small budgets go to die. **Check this explicitly — it is the single most common way a beginner account wastes money.** |

### Ad rotation & delivery

| Setting | Value |
|---|---|
| Ad rotation | Optimise |
| Ad schedule | All hours initially — you have no hour-of-day data yet |
| Time zone note | Account is GMT+08:00 (Bali). Your Australian audience is GMT+10/11, so Australian evening browsing is late night Bali time. **Do not restrict hours to Bali business hours** — you'd cut your best market's peak. |

### Ad group & keyword settings

| Setting | Value | Reasoning |
|---|---|---|
| Match types | **Exact + Phrase only** | 26 exact, 30 phrase, **zero broad**. No broad until there's search-term history and a mature negative list. |
| Negatives | **117 campaign-level phrase negatives** | You currently have zero. This is the highest-value item in the build. |
| Final URLs | Per ad group, keyword-level for areas | All 13 URLs verified against your built site. |

### Assets to add (after write access returns)

| Asset | Value for your ICP |
|---|---|
| **Sitelinks** (4+) | Pricing Calculator, Dining Styles, Get a Quote, How It Works. **The calculator is your strongest asset for a price-uninformed buyer — make it a sitelink.** |
| **Callouts** | "Reply in 2 Hours", "Itemised Quote in 24 Hrs", "Groceries at Cost", "Full Cleanup Included" |
| **Structured snippets** | Service types: Private Chef, Villa Chef, BBQ Catering, Event Catering, Wedding Catering |
| **Price assets** | ⭐ **High priority.** Your ICP explicitly doesn't know pricing. Showing "From IDR 700K/person" in the ad pre-qualifies and filters out bargain hunters before you pay for the click. |
| **Location asset** (Google Business Profile) | Links your GBP. Adds legitimacy for a foreign buyer hiring a chef in a country they've never visited. |
| Call asset | ⚠️ Low priority — your ICP is 6+ timezones away and won't phone Bali. WhatsApp is the channel. |

### Account-level settings

| Setting | Value | Reasoning |
|---|---|---|
| Auto-applied recommendations | **Off — all of them** | Google will auto-add broad keywords and switch bid strategies. On a small budget with immature tracking, this actively harms you. **Check this on day one.** |
| Auto-tagging | **On** | Required. Without it there is no `gclid`, and the attribution built today has nothing to capture. |
| Account-level negative lists | Create one shared list from `03-negative-keywords.csv` | Reusable across future campaigns. |
| Conversion goal for the campaign | `generate_lead` only, as Primary | See the double-counting warning above. |

---

## Part 4 — What the ICP means for messaging

You said: *planning ahead, higher budget, doesn't know pricing.* Three concrete consequences:

**1. The "cost" keywords are your best keywords, not your cheapest.** `private chef bali cost`, `private chef bali price`, `how much is a private chef in bali` — a price-uninformed buyer searches these *before* they're ready to book. The `Private Chef - Cost` ad group points at `/calculator`, which is exactly the right answer. Lowest CPCs in the set ($0.37) and highest strategic value. Watch this ad group most closely.

**2. Transparency outperforms urgency for this buyer.** They're not comparison-shopping between chefs; they're working out whether this is a thing they can even do. "Transparent IDR Pricing", "No Hidden Fees", "Know The Cost Up Front", "Itemised, Not Estimated" will beat "Book Now" — because their question is *"how does this work and what does it cost"*, not *"who is cheapest"*.

**3. The 90-day conversion window is not optional.** Someone booking a villa for December, searching in August, is your ideal customer. A 30-day window makes them invisible and would make you conclude the campaign failed.

**One open question I'd flag:** IDR 700K/person reads as a big number to an Australian who hasn't converted it — it's roughly **AUD 66**, which is very competitive against a private chef at home. For a buyer who explicitly *doesn't know pricing*, the currency they see first anchors everything. Worth testing an AUD-denominated ad variant against the IDR one, since Australia is now your primary market.

---

## Part 5 — Execution order

**Now (unblocked):**
1. ✅ GA4 custom dimensions — done
2. ✅ Key events — verified
3. ⬜ **Add the GA4 bot/internal traffic filter.** Do this before any GA4↔Ads link.
4. ⬜ Deploy the attribution code (`npm run build` on your Mac — can't run in the sandbox)
5. ⬜ Verify live: `mychef.id/?gclid=TEST123&utm_campaign=verification` → WhatsApp message must end `(Ref: MC-XXXXXX)`
6. ⬜ Link Search Console → GA4

**Blocked on the overdue balance:**
7. Pay balance · complete advertiser verification (start now, slowest) · submit NIK
8. **Remove both old campaigns before importing anything.** `General keywords` is still Enabled, broad match, zero negatives, IDR 399,487/day.
9. Delete the 4 misconfigured Ads conversion goals
10. Link Ads ↔ GA4, import `generate_lead` as the **only** Primary
11. Turn off auto-applied recommendations; confirm auto-tagging on; **confirm Display Network is off**
12. Import the three CSVs; set Location option to **Presence**; **exclude Indonesia**
13. Add assets — price assets and the calculator sitelink first

**First 30 days:**
14. Search Terms report every 2–3 days; add negatives
15. Log every `MC-` ref against its booking outcome. This replaces the 20% blended close-rate guess with real per-service numbers.
16. **Judge paid against organic's 14.9% key event rate**, not against zero.

---

## Honest caveats

1. **The 28-day sample is small and bot-polluted.** Australia's 136 users and 40 key events is a real signal, but UAE's 38% rate rests on 13 users and 5 events. Treat the small markets as promising, not proven.
2. **The US verdict is behavioural, not causal.** 194 users at 2% could be bot-adjacent rather than genuinely uninterested Americans. Excluding it from a USD 200/month budget is right either way — but it's a deprioritisation, not a permanent judgement.
3. **None of the campaign numbers are validated against live performance,** because the account has never served an impression.
4. **The 4-vs-5 guest minimum is still unresolved** — site says four, my earlier note said five.
