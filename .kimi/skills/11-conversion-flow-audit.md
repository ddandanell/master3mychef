# Skill 11 — Conversion Flow Audit

**Purpose:** Every commercial page must have a clear next action that works on mobile. The single conversion is WhatsApp.

**When to use:** Any sprint touching CTAs, contact, service, pricing, or mobile layout.

## Current state
- Primary CTA: WhatsApp `wa.me/6289674072020` (display `+62 896-7407-2020`), consistent sitewide.
- Lead magnets: `ExitIntentPopup` (Bali Price Guide) + `EmailCaptureBar` on key pages.
- Sticky mobile CTA exists (`5107cab`).

## Checklist
1. Every money page has a visible primary CTA above the fold AND a closing CTA.
2. WhatsApp links use the canonical number; prefilled message is sensible.
3. Mobile: sticky CTA visible, tap targets ≥44px, CTA not covered by popups.
4. Contact/inquiry path reachable in ≤2 taps from any commercial page.
5. Forms (EmailCaptureBar) submit and confirm; no dead submit.

## Verification
- Load 5 commercial pages on a 375px viewport: CTA visible, WhatsApp opens correct number, no layout break, popup dismissible.

## Output
Table: page | primary CTA present | WhatsApp # correct | mobile sticky OK | next-action clear | issue.
