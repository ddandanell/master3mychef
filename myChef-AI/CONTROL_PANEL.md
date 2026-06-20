# 🎛️ CONTROL PANEL — myCHEF Peter

**This is the ONE place you change things.** Edit a value here, then tell Hermes:
*"I changed X in CONTROL_PANEL.md — please propagate it."* Hermes updates the matching
knowledge files and the database `settings` table so Peter starts using it.

- **Last updated:** 2026-06-08
- **Maintained by:** David (values) + Hermes (propagation)
- **Rule:** Never hand-edit prices/names in ten different files. Change them *here* first.
- 🔴 = a value you still need to decide (also tracked in `QUESTIONS_FOR_DAVID.md`).

> **How "Used in" works:** each value lists the files that currently contain it. When you
> change the value here, those are the files Hermes syncs. This is your traceability map.

---

## 1. Identity & Branding

| What | Current value | Used in |
|------|---------------|---------|
| Customer-facing agent name | **Peter** | `KUNDE TEST/prompts/peter_persona.md`, all docs |
| Guardrail / loop agent name | **Hermes** | `KUNDE TEST/prompts/hermes_guardrail.md`, `HERMES_BRIEFING.md` |
| Scoring agent name | **Judge** | `KUNDE TEST/prompts/judge_agent.md` |
| Improvement agent name | **Optimizer** | `KUNDE TEST/prompts/optimizer_agent.md` |
| Company name | **myCHEF.id** | `KUNDE TEST/knowledge/company_profile.md` |
| Positioning | Premium / luxury private chef + catering + events + staffing, Bali | `company_profile.md` |

> **To rename Peter** (or any agent): change it here, tell Hermes. He replaces the name in the
> prompt file(s) above and the live system prompt. One change, everywhere.

---

## 2. Contact & Hours

| What | Current value | Used in |
|------|---------------|---------|
| Phone / WhatsApp | **+62-822-3756-5997** | `company_profile.md` |
| Email | **hello@mychef.id** | `company_profile.md` |
| Website | **https://mychef.id** | `company_profile.md`, `WEBSITE_ALIGNMENT.md` |
| Instagram | https://www.instagram.com/mychef.id | `company_profile.md` |
| Facebook | https://www.facebook.com/mychef.id | `company_profile.md` |
| Office address | Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Bali 80226 | `company_profile.md` |
| Hours | Daily **07:00–23:00** | `company_profile.md` |

---

## 3. Pricing & Tax

> Source of truth scraped from live mychef.id on 2026-06-08. Full detail lives in
> `KUNDE TEST/knowledge/pricing.md`. **Peter only quotes numbers from that file.** Change a
> price here → Hermes updates `pricing.md`.

| What | Current value | Used in |
|------|---------------|---------|
| Service charge | **+10%** | `pricing.md`, `policies.md`, `faq.md` |
| Government tax | **+11%** | `pricing.md`, `policies.md`, `faq.md` |
| "++" meaning | "+10% service +11% tax" (always disclosed) | `pricing.md`, `peter_persona.md` |
| Fine dining — from | **IDR 2,200,000++ / person** | `pricing.md` |
| Chef's Table | **IDR 3,500,000++ / person** (Fri & Sat, 6 seats) | `pricing.md` |
| Corporate catering — from | **IDR 450,000 / person** | `pricing.md` |
| Buffet catering — from | **IDR 550,000 / person** (min 30) | `pricing.md` |
| BBQ catering — from | **IDR 450,000 / person** | `pricing.md` |
| Corporate events — from | **IDR 1.2M++ / guest** | `pricing.md` |
| Villa staff — from | **IDR 4,500,000 / month** | `pricing.md` |
| Travel fee (outside Seminyak/Canggu) | **IDR 250,000–700,000** | `pricing.md`, `policies.md` |
| 🔴 Deposit % to lock a date | **UNDECIDED** — Peter currently says "25%" in persona, but `policies.md` says "(confirm with office)". **These conflict — pick one.** | `peter_persona.md` (25%), `policies.md` (confirm) |
| 🔴 Family / kids-friendly price | **MISSING** — Peter has no casual/family option, only premium. Lost session 0001 over this. | (not yet in `pricing.md`) |

---

## 4. Minimums & Booking Rules

| What | Current value | Used in |
|------|---------------|---------|
| Minimum booking ("Rule of 8") | **8 guests** | `peter_persona.md`, `company_knowledge.md` |
| Tasting Menu minimum | 4 guests | `pricing.md`, `policies.md` |
| Chef's Table | 6 seats max, Fri & Sat only | `pricing.md`, `policies.md` |
| Buffet minimum | 30 guests | `pricing.md`, `policies.md` |
| Chef-direct contact | **Not allowed** before booking; office coordinates | `policies.md`, `peter_persona.md` |
| 🔴 Cancellation / reschedule terms | **(confirm with office)** | `policies.md` |

---

## 5. Service Areas

| What | Current value | Used in |
|------|---------------|---------|
| Areas served | Seminyak · Canggu · Ubud · Uluwatu · Sanur · Nusa Dua · Jimbaran · Berawa · Pererenan · Bukit Peninsula (Bali-wide) | `company_profile.md`, `services.md` |
| Free-travel zones | Seminyak / Canggu | `pricing.md`, `policies.md` |

---

## 6. Operational Rules

| What | Current value | Used in |
|------|---------------|---------|
| Nightly learning loop time | **23:00 UTC** (report email 23:30 UTC) | `SYSTEM_SETUP_REQUIREMENTS.md`, `hermes_guardrail.md` |
| Knowledge reload frequency | 🔴 **UNDECIDED** (immediate vs hourly vs daily) — see OPEN_QUESTIONS Q14 | `SYSTEM_SETUP_REQUIREMENTS.md` |
| DB backup time | 02:00 UTC, 30-day retention | `SYSTEM_SETUP_REQUIREMENTS.md` |
| Pattern-trust threshold | 🔴 **UNDECIDED** (how many wins before trusting a pattern) — OPEN_QUESTIONS Q12 | `optimizer_agent.md` |
| Change approval | Optimizer/Hermes **propose**, David **approves**. No silent edits. | `HERMES_BRIEFING.md` |

---

## 7. Channels (where Peter talks)

| Channel | Purpose | Status | Used in |
|---------|---------|--------|---------|
| Website chat widget | Customers on mychef.id | 🔴 to build | `FEEDBACK_APP_SPEC.md`, `SYSTEM_SETUP_REQUIREMENTS.md` |
| WhatsApp | Customers | 🔴 to build (provider TBD) | `SYSTEM_SETUP_REQUIREMENTS.md` |
| Messenger | Customers | 🔴 to build | `FEEDBACK_APP_SPEC.md` |
| Telegram (operator) | **David's private control + approval line** — Peter pings David when he needs an answer | 🔴 to build | `FEEDBACK_APP_SPEC.md`, `HERMES_BRIEFING.md` |

---

## 8. LLM / Models

| What | Current value | Used in |
|------|---------------|---------|
| Peter's model | **deepseek-chat** (DeepSeek API), temp 0.7, max 300 tokens | `SYSTEM_SETUP_REQUIREMENTS.md` |
| Judge's model | 🔴 TBD (Claude / GPT recommended for scoring) | `judge_agent.md` |
| 🔴 DeepSeek: cloud vs local | UNDECIDED — OPEN_QUESTIONS Q7 | `setup/` |

---

### When you change anything here
1. Edit the value above.
2. Update **Last updated** at the top.
3. Tell Hermes to propagate (he syncs knowledge files + the DB `settings` table).
4. If it was a 🔴 open item, also mark it answered in `QUESTIONS_FOR_DAVID.md`.
