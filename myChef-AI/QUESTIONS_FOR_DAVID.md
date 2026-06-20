# ❓ QUESTIONS FOR DAVID — Living Log

**This is where Peter/Hermes/Claude ask you things, and you answer over time.** It never
"finishes" — we keep adding questions, you keep answering, and every answer makes Peter smarter.

## How to use this file
1. Read the **🔴 open** questions below.
2. Type your answer in the **Your answer** line. Change status to **🟡 answered**.
3. Tell Hermes — he applies it (updates `CONTROL_PANEL.md` / knowledge / prompts) and marks it **✅ applied**.
4. New questions get added at the **top** of each section with the next Q-number.

**Status key:** 🔴 open · 🟡 answered (waiting for Hermes to apply) · ✅ applied
**Related:** `OPEN_QUESTIONS.md` holds the original 25 strategic decisions — this log is the
*ongoing* one that grows with the system.

---

## A. Blocking — answer these first (system can't be "right" without them)

### Q-001 — What deposit % locks a date?
- **Why it matters:** Peter's script currently says **"25% deposit"**, but your policy file says
  **"(confirm with office)"**. They contradict each other. Peter is quoting a number you may not have approved.
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-002 — Do you have a family / casual / kids price?
- **Why it matters:** Right now Peter only knows premium pricing (from IDR 2.2M++/person). In test
  session 0001 an Australian family asked for a simple villa dinner, got quoted the premium price,
  and left. If you have a lower/casual tier, Peter could save those leads.
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-003 — Cancellation & rescheduling terms?
- **Why it matters:** Peter can't answer "what if I need to cancel?" — a very common pre-booking
  question. Without it he either stays silent or risks making something up.
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-004 — When can high-value clients talk to the chef?
- **Why it matters:** "Can I talk to the chef first?" is one of your top objections (test data shows
  an 87% booking rate when handled well). Current policy = never before booking. Is there an exception
  for big/VIP bookings (e.g. a call after deposit)?
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

---

## B. Website (from the live-site check on 2026-06-08)

### Q-005 — ✅ RESOLVED: the website is healthy (correction)
- **Update (2026-06-08):** the earlier "40 dead pages" was a **false alarm** — it tested an outdated
  URL list. Your real sitemap shows **100+ live pages** at different addresses. You were right. No
  fix needed on the site. Remaining task is on *our* side: re-point Peter's knowledge to the real URL
  structure (e.g. `/events/weddings`, `/fine-dining/private-chef-bali`). See `WEBSITE_ALIGNMENT.md`.
- **Status:** ✅ applied (alignment file corrected)
- **Your answer:** (none needed — confirming you're happy with this is enough)

### Q-006 — Should Peter only sell what's confirmed on the website?
- **Why it matters:** Decides Peter's safety rule. Option A: only offer services with a live page +
  a price. Option B: offer anything in the knowledge base even if the web page isn't built yet.
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

---

### Q-016 — Live website chat that shows where visitors are
- **Why it matters:** You want a chat on the site that proactively pops up and lets you see where a
  visitor is (which page, which location). This is already designed in `FEEDBACK_APP_SPEC.md`
  (proactive widget + visitor capture). To build it well I need to know: do you want to see visitors
  **live as they browse** (a real-time "who's online now" view), or just a record after they chat?
  And should proactive pop-ups be on from day one or added after testing?
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

## C. Setup & infrastructure (Hermes needs these to build)

### Q-017 — How do I (Claude) actually reach Hermes? Is there a live connection?
- **You answered:** Hermes Agent (AI co-pilot) at **https://localhost:3000** — ask it anything
  ("How does WhatsApp pricing sync work?"), get live config, logs, and code context.
- **What I found (2026-06-08):** I tried to connect — **nothing is listening on port 3000 right now**
  (`connection refused` on both 127.0.0.1 and ::1; HTTP and HTTPS both empty). The good news: I *can*
  reach `localhost` from my environment, so as soon as the Hermes server is actually running I can
  query it.
- **Still need from you (small):**
  1. **Start the Hermes server** (what command launches it?), then tell me and I'll reconnect.
  2. Confirm the **port/URL** — is it really `:3000`, or another port? HTTP or HTTPS?
  3. Does it need an **API key / auth header**? If so, how should I pass it?
  4. Is it on **this Mac** or the **VPS**? (If VPS, `localhost` won't reach it from here — I'd need
     the server's address or a tunnel.)
- **✅ CONNECTED (2026-06-08):** I found the server at `~/Projects/hermes-ai`, started it
  (`npm run dev`, plain HTTP on `:3000`, no auth), and queried it live. It's **up and I can reach it.**
  - **What Hermes actually is:** a *central CLI orchestrator* — endpoints for Claude CLI
    (`/api/claude/analyze|generate|review`), GitHub (`/api/github/*`), Google deploy, a **skills
    database** (`/api/skills/list|search|execute`, wired to `~/OpenClaw/openclaw-skills`), plus
    `/api/logs` and `/api/pending` (approval queue).
  - **Reality check:** it has **no free-form "ask anything" endpoint** and **no knowledge of
    WhatsApp pricing sync** — that blurb is aspirational. Logs show only "Orchestrator initialized"
    events; no real actions run yet (status = setup). Pending approvals: empty.
  - **⚠️ Naming collision:** this `localhost:3000` Hermes is your *general CLI orchestrator*. It is
    NOT the "Hermes" in the myCHEF docs (the nightly Peter learning-loop/guardrail). Same name, two
    different things — we should rename one to avoid confusion.
- **Status:** ✅ applied (connected; server running in background)
- **Applied:** 2026-06-08

### Q-018 — What analytics software did Hermes install on the server?
- **Why it matters:** You mentioned Hermes may have installed "new analytic software" on the server.
  If so, it might overlap with (or replace) the Google Analytics plan. To avoid building something you
  already have, I need: what's the software's name, what does it track, and can I/Hermes get access to
  see it? Then I'll reconcile it with the GA4 setup so they work together, not twice.
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —


### Q-007 — Your existing CRM: what is it and how do we connect?
- **Why it matters:** You said you have a CRM "nearly ready." The new feedback/calendar/chat panel is
  designed to share the **same Postgres database**. To wire them together Hermes needs: what's the CRM
  built in? Does it already use Postgres? Can Hermes get a connection string / DB access?
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-008 — Do you have a VPS ready, and can Hermes access it?
- **Why it matters:** We agreed the system runs always-on on a VPS.
- **What I found (2026-06-08):** your `~/.ssh/config` has **`vps1` → 152.42.169.119** (plus a
  placeholder `vps2`). So a VPS likely already exists — probably our deploy target.
- **Still need:** confirm `vps1` is the right box, that the SSH key works, its specs/OS, and whether
  anything else is already running on it (so we don't clobber it).
- **Status:** 🟡 answered (VPS found) — confirm it's the target + access works.
- **Applied:** —

### Q-009 — DeepSeek: cloud API or run it locally?
- **Why it matters:** Affects cost and speed. Cloud = simplest, pay per use. Local = cheaper at volume
  but needs a GPU server. (OPEN_QUESTIONS Q7.)
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-010 — WhatsApp & Messenger: which accounts/providers do you have?
- **Why it matters:** To put Peter on WhatsApp we need a path to send/receive messages.
- **What I found (2026-06-08):** you already have WhatsApp infrastructure on this Mac —
  `~/Projects/whatsapp-orchestrator`, `~/Projects/whatsapp-brain`, `~/whatsapp-ai-reader`. None are
  running right now (ports 8790/8080 closed). So you're NOT on Twilio/Meta API — you have a
  self-hosted WhatsApp bridge already built.
- **Still need:** which of these is the *current/live* one we should connect Peter to? And is it a
  personal-number bridge or the official WhatsApp Business API?
- **Status:** 🟡 answered (existing stack found) — pick the live one.
- **Applied:** —

### Q-019 — Which folders are the *real* ones? (disambiguation)
- **Why it matters:** There are many copies — `~/mychef-app`, `~/Projects/mychef-app`,
  `~/Projects/mychef-support-ai`, `~/dev/master3mychef`, plus 3 whatsapp projects. Before moving
  anything to the VPS, I need to know which is the live website and which WhatsApp project is current,
  so we migrate the right code and don't resurrect a stale copy.
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-011 — Which email address receives Peter's daily report?
- **Why it matters:** Every night Peter emails you a summary (what worked, what he still needs). We
  need the destination address, and we'll set up a sender service to deliver it. See `setup/EMAIL_SETUP.md`.
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-012 — Your Telegram (for the operator alerts)?
- **Why it matters:** This is the channel where Peter pings *you* in real time when he's stuck or has a
  hot lead. Hermes needs your Telegram so the bot can message you (you'll start a chat with the bot once
  it's built). What's the best Telegram account/number?
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

---

## D. Behaviour & strategy

### Q-013 — What does "80% conversion" mean to you exactly?
- **Why it matters:** Lead captured? Booking intent? Paid deposit? Defines how we score success.
  (OPEN_QUESTIONS Q1 — blocking.)
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-014 — Your top 3 customer segments + their price sensitivity?
- **Why it matters:** Lets Peter tailor his opener and pricing per segment (family vs corporate vs
  couple vs retreat). (OPEN_QUESTIONS Q2/Q4.)
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

### Q-015 — Go-live target date?
- **Why it matters:** Sets the build pace and which phase to prioritise. (OPEN_QUESTIONS Q25 — blocking.)
- **Status:** 🔴 open
- **Your answer:** ______________________
- **Applied:** —

---

## ✅ Answered & applied (history)
*(Move questions here once Hermes applies them, so we keep a record. Empty for now.)*
