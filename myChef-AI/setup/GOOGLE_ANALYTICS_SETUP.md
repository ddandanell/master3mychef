# setup/GOOGLE_ANALYTICS_SETUP.md — Tracking Conversations

**What it's for:** so you can see, in charts, how many people talk to Peter, which channels convert,
and what they ask — without reading every conversation by hand. Google Analytics 4 (GA4) is free.

## What gets tracked
Every time a customer talks to Peter, the server sends one **event** called `customer_inquiry` with
these properties (already defined in `SYSTEM_SETUP_REQUIREMENTS.md`):
- `channel` — website_chat / whatsapp / messenger / telegram
- `customer_segment` — family / corporate / couple / retreat / …
- `conversation_score` — 0–100 (from the Judge)
- `result` — booked / abandoned / pending
- `objections` — price / menu / timeline / chef_contact / …
- `conversion` — true / false
- `response_time` — how fast Peter replied (ms)

## Setup steps (Hermes does this)
1. **Create a GA4 property:** analytics.google.com → Admin → Create property → "myCHEF Peter".
2. Create a **Web data stream** for mychef.id → copy the **Measurement ID** (`G-XXXXXXX`).
3. Create a **Measurement Protocol API secret** (Admin → Data Streams → Measurement Protocol).
4. Put both in `.env`:
   ```
   GA4_MEASUREMENT_ID="G-XXXXXXX"
   GA4_API_SECRET="..."
   ```
5. The server sends events **server-side** (via the Measurement Protocol) so it works for WhatsApp
   and Messenger too — not just the website. The website widget can *also* fire client-side events.

## How to verify
- GA4 → Reports → Realtime: have a test chat with Peter; the `customer_inquiry` event appears within
  seconds.
- Build a simple "Explore" report grouped by `channel` and `result` to watch conversion by channel.

## Decision needed
- **Q-022 in `OPEN_QUESTIONS.md`:** track every conversation, only bookings, or bookings +
  abandonments? Default recommendation: **track every conversation** (richest data, costs nothing).

---
### Plain-English version
GA4 is a free dashboard. We send it a little note every time Peter chats with someone, so you can see
trends ("WhatsApp converts better than the website", "price is the #1 objection") without reading
transcripts. Hermes sets it up; you just look at the charts.
