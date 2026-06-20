# myCHEF AI — Customer Test & Training System (KUNDE TEST)

A closed-loop simulation harness for training and evaluating myCHEF's AI booking agent
("Peter") against realistic Bali customers. Conversations are simulated, scored, stored,
and mined for lessons that feed back into the prompts and knowledge base.

## Why this exists
> The biggest mistake people make is storing everything in chat logs and never learning
> from it. This system turns every simulated conversation into structured data, scores it,
> and grows a `learning/` vault that becomes the real brain over time.

## The agents
| Agent | File | Role |
|-------|------|------|
| **Peter** | `prompts/peter_persona.md` | The myCHEF booking agent under test. Answers customers, quotes prices, drives bookings. |
| **Hermes** | `prompts/hermes_guardrail.md` | Guardrail + orchestrator. Keeps Peter on-policy and runs the nightly learning loop. |
| **Customer** | `prompts/customer_personas.md` | Realistic, uncooperative simulated customers (50+ personas). |
| **Judge** | `prompts/judge_agent.md` | Scores each conversation 0–100, labels outcome + objections. |
| **Optimizer** | `prompts/optimizer_agent.md` | Reads scores, proposes prompt + knowledge updates. |

## Folder map
```
KUNDE TEST/
├── prompts/        # agent definitions (NO conversation logs live here)
├── knowledge/      # company facts: profile, services, pricing, faq, policies
├── training/
│   ├── sessions/           # every simulated conversation as session_XXXX.json
│   ├── good_conversations/ # high-scoring / booked
│   ├── bad_conversations/  # low-scoring / lost
│   └── golden_examples/    # hand-picked references for few-shot
├── analytics/      # CSV rollups for dashboards
├── vector-db/      # embeddings index of sessions + knowledge (searchable history)
└── learning/       # the growing brain — objections, best replies, patterns
```

## Session record format
Every simulated conversation is stored as `training/sessions/session_XXXX.json`:
```json
{
  "session_id": "0001",
  "persona": "Australian Family",
  "score": 42,
  "result": "Booked",
  "conversation": [ { "role": "customer", "text": "..." }, { "role": "peter", "text": "..." } ]
}
```

## The nightly Hermes loop
Every night Hermes runs:
1. **Read** today's conversations (`training/sessions/`)
2. **Extract** lessons (objections, winning/losing replies, new questions)
3. **Update** analytics (`analytics/*.csv`)
4. **Suggest** knowledge updates (`knowledge/`)
5. **Suggest** prompt updates (`prompts/`)

Outputs land in `learning/`. The most valuable file over time is
`learning/customer_patterns.md` — the actual record of what works with real myCHEF customers.

## Dashboards to build from `analytics/`
- Most common questions · Why people don't book · Average booking score
- Most successful replies · Most common objections
- Price / deposit / menu / staffing objection breakdowns

## Data provenance
`knowledge/pricing.md`, `company_profile.md`, and `faq.md` are seeded with **real data**
pulled from the live mychef.id site (2026-06-08). See `knowledge/PRICE_AUDIT.md` for the
full source audit (only 9 of 49 listed pages were live at scan time).
