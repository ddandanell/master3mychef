# Task 11: Verify heading hierarchy and semantic structure

## Status

DONE

## Summary

Inspected `src/pages/BarServicePage.tsx` and all components in `src/components/bar-services/*.tsx` for heading-level compliance. The bar-services page already satisfies the required `h1 → h2 → h3` hierarchy:

- **Exactly one rendered `h1`** per page state:
  - `BarServiceHero.tsx:19` renders the service title as `h1`.
  - `BarServicePage.tsx:33` renders an `h1` only in the mutually exclusive "Service not found" branch, so only one `h1` is ever present at runtime.
- **Section headers use `h2`**:
  - `BarServiceSectionHeader` defaults to `h2`.
  - Inline `h2` headings are used in `BarServicePage.tsx:92` (FAQ section), `BarServiceEnquiryForm.tsx:39`, `BarServiceLeadMagnet.tsx:7`, and `BarServiceQuoteBlock.tsx:8`.
- **Cards/items use `h3`**:
  - `BarServiceDeliverables.tsx:17`
  - `BarServiceProcess.tsx:21`
  - `BarServiceExpandedContent.tsx:74` (who-for cards)
  - `BarServiceCrossSells.tsx:24`
  - `BarServiceResources.tsx:24`

## Verification command

```bash
grep -rn "<h1\|<h2\|<h3" src/pages/BarServicePage.tsx src/components/bar-services/
```

Output confirmed the expected distribution of heading levels and no missing or extra levels within the inspected scope.

## Changes made

No source-code changes were required. This report serves as the no-op verification marker.

## Commits made

- `docs: verify bar-services heading hierarchy (no changes needed)`

## Concerns

- `FAQAccordion` (located in `src/components/catering/FAQAccordion.tsx`, outside the explicit inspection scope) renders FAQ questions as `<button><span>` rather than heading elements. This is accessible and semantically acceptable for an accordion pattern, and was intentionally left unchanged because it is a shared component used beyond bar-services pages.
