# setup/DATABASE_AND_CRM_CONNECTIONS.md — How Everything Connects

**Audience:** Hermes. This is the contract for how the database, the existing CRM, the feedback
panel, and Peter all share data. Decision locked with David: **one shared PostgreSQL database; the
panel is a standalone site; the CRM is not rebuilt.**

## The shared-database model
```
                 ┌─────────────────────────────┐
                 │     PostgreSQL (one DB)      │
                 │  conversations, feedback,    │
                 │  patterns, peter_requests,   │
                 │  customer_profiles,          │
                 │  settings, calendar_events   │
                 └──────────────┬──────────────┘
        ┌───────────────┬───────┴───────┬────────────────┐
        ▼               ▼               ▼                ▼
   Peter / API     Feedback Panel   Existing CRM    Nightly Hermes loop
 (reads/writes    (David's login   (reads the same  (reads convos+feedback,
  conversations)   site)            customers/convos) writes learning)
```
Everyone talks to the **same database**. The panel and the CRM are just different windows onto it.
No data is copied or synced between systems — there's one source of truth.

## Tables
Use the 6 tables already defined in `SYSTEM_SETUP_REQUIREMENTS.md` (conversations,
customer_feedback, patterns_learned, knowledge_updates, peter_requests, customer_profiles), **plus
these two new ones** (full SQL is appended in `SYSTEM_SETUP_REQUIREMENTS.md`):

- **`settings`** — key/value mirror of `CONTROL_PANEL.md`. When David changes a value in the control
  panel and Hermes propagates it, the new value is written here, and the running app reads from here.
  Example rows: `agent_name_customer = "Peter"`, `deposit_pct = "25"`, `nightly_loop_utc = "23:00"`.
- **`calendar_events`** — the follow-up calendar (who to talk to, who not, what's coming in the next
  3 months). Columns: `id`, `customer_id`, `type` (follow_up / booking / hold / call), `due_date`,
  `status` (open / done / dismissed), `note`, `created_by`.

## Connecting the existing CRM (pending Q-007)
We need from David (`QUESTIONS_FOR_DAVID.md` Q-007): what the CRM is built in, whether it already
uses Postgres, and DB access. Two cases:
- **CRM already uses Postgres:** point Peter + panel at the *same* database; agree on a shared
  `customers`/`conversations` schema (map the existing tables or add ours alongside, read-compatible).
- **CRM uses a different DB:** the shared DB becomes the system-of-record for conversations; expose a
  small read API (or a nightly sync) so the CRM can display them. Avoid two-way sync if possible.

## Connection & safety
- One `DATABASE_URL` per service, least-privilege DB roles (the panel and the public chat API should
  NOT share the same superuser role).
- The **public chat API** (internet-facing) gets a restricted role: insert conversations, read
  knowledge/patterns/settings — no deletes, no access to secrets.
- The **panel** (behind login) gets read/write on feedback, calendar, settings.
- All writes that change Peter's behaviour (settings, knowledge) go through the
  **propose → David approves → apply** flow (see `HERMES_BRIEFING.md`).

## What we need from you
- **Q-007** (existing CRM details + DB access) and **Q-008** (VPS access) in `QUESTIONS_FOR_DAVID.md`.

---
### Plain-English version
Think of one filing cabinet (the database) with several people looking into it: Peter, your feedback
site, your existing CRM, and the nightly learning. Nobody keeps a separate copy — so nothing falls out
of sync. To plug your current CRM in, we just need to know what it's built on and get access.
