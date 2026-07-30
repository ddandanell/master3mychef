# New Google Ads Account — Setup Runbook (bali@mychef.id)

**Status:** account does not exist yet. Verified twice — Google returns *"Du har ikke nogen Google Ads-konti."*
**Your step:** creation only (~3 min). **My step:** everything after.

---

## Step 1 — You create the account

Signed in as **bali@mychef.id**, go to `ads.google.com` → **"Ny Google Ads-konto"**.

### ⚠️ Three things that are permanent or hard to undo

**1. Switch to Expert Mode immediately.**
The default flow builds a **Smart Campaign**. Smart Campaigns do **not** support keyword match types, negative keyword lists, or responsive search ads — the 56 keywords, 117 negatives and 7 ad groups I built **cannot be imported into one**. Look for *"Switch to Expert Mode"* / *"Skift til eksperttilstand"* (small link, usually near the bottom). If offered, choose **"Create an account without a campaign."**

**2. These can never be changed after creation:**

| Setting | Value |
|---|---|
| Billing country | **Indonesia** |
| Currency | **IDR** |
| Time zone | **(GMT+08:00) Central Indonesia Time** |

**3. Select Offer A** — Rp 3jt credit for Rp 3jt spend in 60 days.

| Offer | Credit | Spend first | Ratio |
|---|---|---|---|
| **A ← choose this** | Rp 3jt (~USD 167) | Rp 3jt | **1 : 1** |
| B | Rp 6jt | Rp 9jt | 0.67 : 1 |
| C | Rp 9jt | Rp 18jt | 0.5 : 1 |

At IDR 118,000/day you spend ~Rp 7.2jt over 60 days — clears Offer A around day 25. Offer C needs 2.5× your budget; you'd spend ~USD 600 extra to earn USD 500.

**Then stop.** Don't add payment details or launch anything. Send me the account number (format `123-456-7890`).

---

## Step 2 — What I do once it exists

### 2a. Lock the settings before anything can serve

| Setting | Value | Why |
|---|---|---|
| **Display Network** | **OFF** | Google enables this by default on new Search campaigns. It is the single most common way a small budget is wasted. |
| **Search Partners** | OFF | Lower-quality inventory, no separate reporting to diagnose it. |
| **Auto-applied recommendations** | **ALL OFF** | Google will otherwise auto-add broad keywords and change your bid strategy. |
| **Auto-tagging** | **ON** | Required. Without it there is no `gclid`, and the WhatsApp attribution has nothing to capture. |
| Locations | AU, NZ, SG, MY, AE, UK, NL | From your GA4 behaviour, not keyword volume. |
| Location option | **Presence** | Not "presence or interest" — targets people physically in source markets. |
| Excluded location | **Indonesia** | Keeps a pre-trip-planner budget away from in-Bali and bot traffic. |
| Language | English | |
| Budget | IDR 118,000/day | ~USD 200/mo. |
| Bidding | Maximize clicks, cap IDR 25,000 | No conversion history yet — Smart Bidding would optimise on nothing. |
| Conversion window | 90 days | Your buyer searches in August and books in October. |

### 2b. Import the build

1. `01-keywords.csv` — **168 keywords**, 80 exact + 88 phrase, **zero broad**, covering all 61 `/private-chef/{area}` pages
2. `02-responsive-search-ads.csv` — 7 RSAs, all headlines ≤30 chars, descriptions ≤90, validated
3. `03-negative-keywords.csv` — 117 campaign-level phrase negatives

All 13 landing-page URLs verified against the live site.

### 2c. Wire tracking (differs from the old account)

A new account starts with **zero** conversion tracking. Required:

1. Link **GA4 property `mychef.id` (510246176)** to the new account
2. Import `generate_lead` as the **only Primary** conversion
3. Import `quote_submitted` and `form_complete` as **Secondary**

⚠️ `generate_lead` and `quote_submitted` are both GA4 key events. Importing both as Primary double-counts — one person clicking WhatsApp *and* submitting the form becomes 2 conversions, and Smart Bidding then optimises toward a phantom rate.

4. Link Google Business Profile for location assets
5. Add assets — **price assets first** (your buyer doesn't know pricing), then the calculator sitelink

---

## Step 3 — Expect this, so it isn't a surprise

**The new account needs its own advertiser verification** — Indonesia requires it, **1 to 10 days**, and the old account's verification does not transfer. So this route is not necessarily faster than the appeal already in review on 570-521-1299.

**The old account still holds a live risk.** `General keywords` remains **Enabled**: all broad match, **zero negatives**, **IDR 399,487/day**. If that appeal clears while you're not watching, it can start spending. Pause or remove it the moment write access returns there.

**Two accounts advertising the same website will compete with each other** in the same auctions if both ever run. Decide which one is primary and keep the other paused.

---

## Still open

1. **4 vs 5 guest minimum.** D-008 sets 5 for dining formats; four files still publish "four guests" for fine dining, including `articleContent.ts` beside the IDR 2.2M–2.4M prices. Ad copy currently states **no** minimum — advertising a number the landing page contradicts is worse than omitting it.
2. **IDR vs AUD in ad copy.** IDR 700K reads as a big number to an Australian; it's ~AUD 66, which is competitive. Australia is now your primary market and your buyer explicitly doesn't know pricing, so the first currency they see anchors everything. Worth an A/B test.
3. **GA4 bot filter.** ~4,145 fake users from Denpasar/Safari/Direct. Contain this **before** linking GA4 to any Ads account, or it poisons Smart Bidding and every audience you build.

---

## Already live and verified (no action needed)

- WhatsApp attribution deployed to production — `dpl_6jFiZFbV2Uwaca9obcH4ndjAmLBt`
- Confirmed on the live site: gclid captured, ref stamped on all WhatsApp links, attribution survives a direct return visit
- 7 GA4 custom dimensions created; `generate_lead` and `quote_submitted` already key events
