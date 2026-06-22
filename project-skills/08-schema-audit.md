# Skill 08 — Schema Audit

**Purpose:** Keep JSON-LD valid, single-entity, and policy-safe. Prevent fake/duplicate review markup (manual-action risk).

**When to use:** Any sprint touching JSON-LD, `SeoHead.tsx`, or page schema.

## History / current state
- Self-serving `AggregateRating`/`Review` removed site-wide (`21390a7`); duplicate per-location rating removed (`6104777`); invalid rating on legal pages removed (`7adfc18`).
- `aggregateRatingSchema` helper in `src/components/SeoHead.tsx` was **neutralized** — confirm it emits nothing before reusing it.

## Checklist
1. `grep -rl "AggregateRating" src/` → should only surface the neutralized helper, not per-page emitters. Verify helper returns null/empty.
2. **One entity per @id:** `#business` (LocalBusiness/Organization) must carry at most ONE `aggregateRating` site-wide (currently none — acceptable). No conflicting counts.
3. **No review markup on legal pages** (Terms/Privacy/Cancellation).
4. Validate each schema type used: `LocalBusiness`, `BreadcrumbList`, `FAQPage`, `Article/BlogPosting`, `Event`, `Offer/AggregateOffer`, `Service`, `HowTo`, `WebSite`.
5. Any `aggregateRating`/`Review` re-added must be backed by real, on-page, verifiable reviews — otherwise do NOT add.

## Verification
- Google Rich Results Test passes for a sample of each schema type.
- No "duplicate field" / "invalid value" warnings; no rating without real reviews.

## Output
"Schema: rating markup=none/backed, duplicate-entity=none, legal-page review markup=none, invalid types=<list>. Action: <…>."
