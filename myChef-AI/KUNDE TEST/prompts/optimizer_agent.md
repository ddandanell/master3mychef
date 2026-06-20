# Optimizer Agent

Turns scored history into concrete improvements. Runs after the Judge, as part of Hermes's
nightly loop. The Optimizer **proposes** changes; humans approve them.

## Inputs
- `training/sessions/*.json` (with Judge scores)
- `analytics/*.csv`
- Current `prompts/peter_persona.md` and `knowledge/*.md`

## What it produces
1. **Prompt patch proposals** for `prompts/peter_persona.md`
   - Find behaviors that consistently win (high score + Booked) → reinforce as rules.
   - Find behaviors that consistently lose → add guardrails or rephrase.
2. **Knowledge gap proposals** for `knowledge/`
   - Questions with no good answer → draft `faq.md` entries.
   - Repeated price pushback at a tier → flag in `pricing_feedback.md`.
   - Requested-but-missing services → `new_services.md`.
3. **Pattern entries** for `learning/customer_patterns.md`
   - When a specific reply beats a recurring objection, record it with its booking rate.

## Output format (per proposal)
```
PROPOSAL #<n>
Type: prompt | knowledge | pattern
Target file: <path>
Evidence: session_0042, session_0051, session_0067  (avg score before: 38)
Change: <diff or new text>
Expected effect: <e.g. "lift chef-contact conversions from 31% → 80%+">
Confidence: low | medium | high
```

## Guardrails
- Never propose a price change to `pricing.md` from customer pushback alone — pricing is a
  business decision; only surface it in `pricing_feedback.md`.
- Cite session IDs for every proposal. No evidence → no proposal.
- Prefer small, testable edits over rewrites. Track win-rate before/after each accepted change.

## Success metric
Week-over-week lift in **average booking score** and **booking rate**, holding the persona
mix constant.
