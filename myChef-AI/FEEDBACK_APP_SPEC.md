# 🖥️ FEEDBACK APP SPEC — David's Control Panel (the website)

The one private, login-protected website where David runs Peter: review chats, give feedback, chat
with Peter, manage the follow-up calendar, upload data, and watch the website-alignment results.
Standalone site on the **shared database** (see `setup/DATABASE_AND_CRM_CONNECTIONS.md`).

- **Stack (recommended, flexible):** Next.js + Postgres, served on the VPS behind nginx/HTTPS.
- **Auth:** single login (David) to start; username + password (hashed), session cookie. Add
  team users later. URL e.g. `panel.mychef.id`.
- **Design:** clean, fast, mobile-friendly (David will check it on his phone). Not a generic
  template — clear hierarchy, calm premium feel consistent with myCHEF.

---

## Screens

### 1. Conversation Feed (home)
- List of all conversations, newest first; filter chips: **All / Hot / Waiting / Later / Spam /
  Booked**; search; channel filter (website / WhatsApp / Messenger / Telegram).
- Each row: customer name + segment, score badge (0–100), channel, time, objections, "Peter needs"
  flag, feedback-given tick.
- Actions per row: **View chat · Give feedback · Set status · Snooze · Add to calendar**.
- Reads `conversations`; writes status/tags back.

### 2. Give Feedback (per conversation)
- Reuse the exact form already designed in `SYSTEM_SETUP_REQUIREMENTS.md` → "Screen 2": what Peter
  did well / missed, answers to Peter's requests, customer segment, next-step status, new insights,
  knowledge to add.
- On save → writes `customer_feedback`; if David supplied a price/policy answer, it becomes a
  **proposed** `knowledge_updates` row (applied after approval — see `HERMES_BRIEFING.md`).

### 3. Chat with Peter
- A live chat box where David talks to Peter himself — to test answers, train him, or draft a reply
  to send a real customer. Same engine as production Peter (same prompt, knowledge, patterns).
- Toggle: "practice mode" (not saved) vs "save as golden example" (writes to `training/golden_examples`).

### 4. Calendar / Pipeline
- Backed by the new `calendar_events` table (`setup/DATABASE_AND_CRM_CONNECTIONS.md`).
- Views: **Upcoming (next 3 months)**, **Follow-ups due**, **This week**.
- Answers David's questions at a glance: *who will we talk with? who won't we? what's coming up?*
- Each entry: customer, type (follow-up / booking / hold / call), due date, status, note.
- Auto-created when a customer says "coming in 3 months" (Peter sets a follow-up) — David confirms/edits.

### 5. Data Upload
- Drop in a document, price list, menu, or note → it's added to the knowledge base and embedded into
  the vector DB (`setup/VECTOR_DB_SETUP.md`), so Peter can use it. Shows what was ingested.
- Big additions surface as **proposed** knowledge updates for David to approve.

### 6. Website Alignment
- Renders the findings from `WEBSITE_ALIGNMENT.md`: live vs dead pages, price mismatches, recommended
  fixes. A **"Re-run check"** button triggers a fresh crawl of mychef.id and updates the view.
- This is David's "is the website saying the same thing as Peter?" surface.

### 7. Settings (the Control Panel, in the UI)
- A form view of `CONTROL_PANEL.md` (names, prices, deposit, contact, channels, loop time), backed by
  the `settings` table. Editing here = the easy way to change Peter without touching files.

---

## Channels (how Peter reaches people — and David)

### Customer channels
- **Website chat widget** — embeddable bubble on mychef.id → `POST /api/message`. Captures who's
  visiting (page, source, new vs returning) and lead facts (name, guests, date, area, occasion) into
  `conversations` + `customer_profiles` + `calendar_events`.
  - **Proactive engagement:** behavioural triggers open the chat with a tailored opener — e.g. dwell
    on a pricing page → *"Planning something special? I can give you a quick ballpark."*; exit intent;
    repeat visit → *"Welcome back — want me to pick up where we left off?"*. Triggers + copy start
    minimal and are tuned by the Optimizer + David's feedback (logged as questions).
- **WhatsApp** and **Messenger** — same Peter engine via each platform's webhook; proactive follow-up
  messages where the platform allows.

### Operator channel (David's private line) — Telegram
The real-time human-in-the-loop. When Peter hits an info gap or a high-value lead, he pings David on
Telegram with a compact card and quick actions:

```
🟢 LEAD — Aussie family · 12 guests · Seminyak · Sat 14th
Asking: "Do you have a kids menu / family price?"
Peter doesn't have a family price (Q-002).
Reply:  [1] Send Peter's suggested line   [2] I'll call the client
        [3] Type your own answer  →
```
- David's reply flows straight back into Peter's next message **and** logs to `QUESTIONS_FOR_DAVID.md`
  / `knowledge_updates`, so the same gap never recurs. Answers in seconds, not overnight.
- Also used for: hot-lead alerts, score <30 alerts, daily-report ping, "re-run website check" results.
- Built with a Telegram bot (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_OPERATOR_CHAT_ID`). Needs David's
  Telegram (Q-012).

---

## API endpoints (the panel + channels use these)
| Endpoint | Purpose | Main tables |
|----------|---------|-------------|
| `POST /api/message` | inbound customer message → Peter reply | conversations, customer_profiles |
| `POST /api/webhook/whatsapp` · `/messenger` | channel inbound | conversations |
| `POST /api/feedback` | save David's feedback | customer_feedback, knowledge_updates |
| `GET /api/conversations` | feed (filters) | conversations |
| `GET/POST /api/calendar` | calendar events | calendar_events |
| `POST /api/upload` | ingest a document → knowledge + vectors | knowledge_updates |
| `GET/POST /api/settings` | read/update control-panel values | settings |
| `POST /api/website-check` | re-run alignment crawl | (writes WEBSITE_ALIGNMENT data) |
| `POST /api/telegram/reply` | operator answer → back into Peter | peter_requests, knowledge_updates |

---

## Build priority (smallest useful version first)
1. Login + Conversation Feed + View chat (just *see* what's happening).
2. Give Feedback + Peter's Requests (start the learning loop).
3. Chat with Peter (test/train).
4. Telegram operator alerts (real-time gap-filling).
5. Calendar, Data Upload, Website Alignment, Settings UI.

See `HERMES_BRIEFING.md` for how this fits the overall build order.
