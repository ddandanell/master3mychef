# 🛠️ HERMES BRIEFING — Read This First (Developer Onboarding)

**You are Hermes**, the developer/agent building and maintaining the myCHEF Peter system. This is your
single entry point. Read it, then the files it links. Build for an **always-on VPS** with **one shared
Postgres** and a **standalone feedback panel** (decisions already locked with David).

## The system in one paragraph
Customers chat with **Peter** (DeepSeek) on the website, WhatsApp, and Messenger. Every conversation is
stored, scored 0–100 by the **Judge**, and surfaced to David in a private **feedback panel**. David
gives feedback; when Peter is stuck mid-chat he pings David on **Telegram** for a real-time answer.
Nightly, the **Hermes loop** mines conversations + feedback into the `learning/` brain and emails David
a report. The **Optimizer** proposes prompt/knowledge improvements. Over time Peter gets smarter.

## The golden rule
**Optimizer/Hermes only *propose* changes. David approves. Nothing edits Peter's behaviour silently.**
Proposed changes land in `knowledge_updates` (applied=false) and are applied after David approves in the
panel or Telegram.

## Where everything lives (the map)
| You need… | Go to |
|-----------|-------|
| What to build, DB schema, agents, data flows | `SYSTEM_SETUP_REQUIREMENTS.md` |
| Phase-by-phase build plan + costs | `IMPLEMENTATION_ROADMAP.md` |
| Editable values (names, prices, deposit, contact, loop time) | `CONTROL_PANEL.md` (→ `settings` table) |
| Open decisions blocking you | `QUESTIONS_FOR_DAVID.md` + `OPEN_QUESTIONS.md` |
| The panel/website spec + Telegram + widget | `FEEDBACK_APP_SPEC.md` |
| Server / always-on setup | `setup/VPS_SETUP.md` |
| Email (daily report) | `setup/EMAIL_SETUP.md` |
| Google Analytics | `setup/GOOGLE_ANALYTICS_SETUP.md` |
| Vector / semantic search | `setup/VECTOR_DB_SETUP.md` |
| DB + existing-CRM wiring | `setup/DATABASE_AND_CRM_CONNECTIONS.md` |
| Website vs Peter alignment | `WEBSITE_ALIGNMENT.md` |
| Peter / Judge / Optimizer / guardrail behaviour | `KUNDE TEST/prompts/*.md` |
| Company facts, prices, faq, policies | `KUNDE TEST/knowledge/*.md` |
| The growing brain | `KUNDE TEST/learning/*.md` |

## How the pieces connect
```
Customer ─(website/WhatsApp/Messenger)→ API ─→ Peter(DeepSeek) ─→ reply
                                          │            │
                                          │      gap? high-value? ─→ Telegram → David → answer back
                                          ▼
                                     PostgreSQL (shared) ──→ existing CRM (same DB)
                                          │
                              Judge scores ─┤
                                          ▼
                              Feedback panel (David)  ──→ proposed knowledge/settings updates
                                          │  (David approves)
                                          ▼
                              Nightly Hermes loop ─→ learning/*.md + analytics/*.csv + daily email
                                          ▼
                              Optimizer ─→ proposed prompt/knowledge improvements
```

## Build order (each step ships something usable)
1. **Foundation:** VPS + Postgres + schema (6 tables + new `settings`, `calendar_events`) +
   `.env`. Load `CONTROL_PANEL.md` values into `settings`.
2. **Peter + Judge (CLI):** wire DeepSeek, prompt builder (persona + knowledge + patterns), Judge
   scoring. Test with the personas in `KUNDE TEST/prompts/customer_personas.md`.
3. **Panel v1:** login + conversation feed + view chat + feedback form (`FEEDBACK_APP_SPEC.md` steps 1–2).
4. **Telegram operator:** real-time gap-filling alerts + reply-back.
5. **Website widget:** embed on mychef.id, capture leads, proactive triggers.
6. **Nightly loop + email:** learning extraction + daily report (`setup/EMAIL_SETUP.md`).
7. **WhatsApp + Messenger** channels.
8. **Vector search** (`setup/VECTOR_DB_SETUP.md`), **GA4** (`setup/GOOGLE_ANALYTICS_SETUP.md`),
   **calendar / upload / website-alignment / settings** panel screens.

## Guardrails you must enforce (from `KUNDE TEST/prompts/hermes_guardrail.md`)
Before any Peter message goes out: no invented prices (only numbers from `pricing.md`), no chef-direct
contact pre-booking, always disclose "++ = +10% service +11% tax", no over-promises on
availability/allergy/safety, no competitor bashing, warm concise tone. Log every intervention.

## Before you start — get these answers
Blocking items in `QUESTIONS_FOR_DAVID.md`: **Q-007** (CRM + DB access), **Q-008** (VPS access),
**Q-009** (DeepSeek cloud/local), **Q-011** (report email), **Q-012** (David's Telegram). Plus the
business blockers **Q-001** (deposit %), **Q-002** (family price), **Q-013/Q-015** (success definition,
go-live date). Don't guess these — ask via the log.

## Keep the loop alive
- New gap or question → add it to `QUESTIONS_FOR_DAVID.md` (don't let it get lost in a chat log).
- Changed an editable value → update `CONTROL_PANEL.md` + `settings`, mark the question ✅ applied.
- Site or knowledge changed → re-run the `WEBSITE_ALIGNMENT.md` check.
