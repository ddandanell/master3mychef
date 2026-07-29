# ESCALATION — two incompatible babi guling pricing models are live

**Status:** BLOCKED on an owner decision. Nothing changed. This is a commercial exposure, not a copy bug.

**Raised:** 2026-07-30. Supersedes the earlier characterisation of this as "a wrong price, ten minutes to fix." It is not. Two complete pricing models are live simultaneously and they differ by 2–4×.

---

## Model A — flat packages

`src/pages/CateringMainPage.tsx:129-133` (`BABIGULING_PACKAGES`), echoed at `CateringMainPage.tsx:210` and `src/data/cateringPillarContent.ts:135`.

| Package | Price | Guests |
| --- | --- | --- |
| Small | IDR 3,700,000 | 10 to 15 |
| Medium | IDR 5,000,000 | 25 to 30 |
| Large | IDR 7,000,000 | 40 to 50 |

## Model B — per-person tiers

`src/pages/CateringBabiGulingPage.tsx`, `src/components/catering/BabiGulingPricing.tsx`, `articleContent.ts` route `/catering/babi-guling`, and both upstream files (`catering.md:73`, `catering_babi-guling.md:41,72,118`).

| Guests | Per person | Minimum total |
| --- | --- | --- |
| 6–15 | IDR 650,000 | from IDR 3,900,000 |
| 16–30 | IDR 600,000 | — |
| 31–50 | IDR 550,000 | — |

Minimum 6 guests. 6 × 650,000 = 3,900,000, so Model B is internally consistent.

---

## The gap

| Guests | Model A quote | Model B quote | Model A is |
| --- | --- | --- | --- |
| 15 | IDR 3,700,000 (Small) | IDR 9,750,000 | **62% cheaper** |
| 30 | IDR 5,000,000 (Medium) | IDR 18,000,000 | **72% cheaper** |
| 50 | IDR 7,000,000 (Large) | IDR 27,500,000 | **75% cheaper** |

This is not a typo and not reconcilable by editing one number. They are different commercial propositions — Model A reads like a whole-pig-and-basics price, Model B like a full per-head spread.

**Live exposure:** a customer who reads "Small — IDR 3,700,000 — 10 to 15 guests" on `/catering` and then books, when `/catering/babi-guling` would have quoted IDR 9,750,000 for the same 15 guests, has a fair claim to the lower number. Both pages are myCHEF's own, published, and undated.

They also disagree on the floor: Model A implies 10 guests, Model B states 6. D-008 recorded 6.

---

## Which is probably current

Evidence favours **Model B**, but this is inference, not fact, and the owner must confirm:

- `3,700,000` appears **nowhere** in the canonical upstream folder. Every upstream babi guling reference uses the tiered model.
- The owner's own in-progress FAQ rewrite (uncommitted, `CateringBabiGulingPage.tsx`) uses the tiered model: *"Six guests, with a minimum total of IDR 3,900,000."*
- D-008 recorded the babi guling minimum as 6, matching Model B.
- Model A survives only in React components that upstream does not feed.

Reading: upstream retired the flat packages, and three hard-coded component blocks were never updated. But Model A has a coherent Small/Medium/Large structure with its own descriptions — that is not the shape of an accidental leftover, so it may have been a deliberate entry-level offer.

## Decision needed

1. Is the tiered per-person model (Model B) the current commercial reality?
2. If yes — delete `BABIGULING_PACKAGES` and the two echoes, or restate them as tier examples?
3. If Model A is a real entry-level offer, it needs a scope that explains the gap (pig only, no spread?) and its own guest floor.

Until answered, **no price is changed.** Editing one side to match the other without knowing which is true would simply publish the wrong price with more confidence.

---

*Related: D-015. Flagged during the 2026-07-30 fact sweep.*
