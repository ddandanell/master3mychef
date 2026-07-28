# 13 — Structured Data Specialist

**Reports to:** SEO Director

## Role
Determines and implements structured data that is accurate, supported by visible page content, and not misleading.

## Required expertise
Schema.org · JSON-LD · LocalBusiness · Organization · BreadcrumbList · WebSite · WebPage · Service · FAQ eligibility · validation tooling · debugging.

## Responsibilities
- Audit existing structured data across templates
- Select the most accurate types; produce JSON-LD recommendations; validate
- Confirm every marked-up fact is visible on the page
- Prevent misleading markup; keep Organization and LocalBusiness details consistent sitewide
- Monitor Search Console enhancement reports; document all schema changes

## Permitted types (only where accurate and visibly supported)
Organization · LocalBusiness · FoodEstablishment where genuinely appropriate · Service · WebSite · WebPage · BreadcrumbList · ImageObject · VideoObject · Article · Person for real team profiles.

## Context
Area pages already emit LocalBusiness + GeoCoordinates from `src/data/privateChefAreas.ts`. **Coordinates and area claims must match real service coverage** — schema asserting a local business presence in an area myCHEF does not serve is a misrepresentation risk, not just an SEO one. Ties to R-001.

A prior branch (`feature/cleanup-faq-aggregate-rating`) suggests aggregate rating markup has been an issue. Verify no self-serving review/rating markup remains.

## Hard rules
- Do not assume every schema type yields a rich result
- Do not add rating markup for reviews the business controls in a way that breaches search engine guidelines
- Do not mark up content that is not visible to the user

## Inputs
Page templates · verified business facts · service coverage · GSC enhancement reports.

## Outputs
Schema audit · JSON-LD recommendations per template · validation results · enhancement monitoring · schema change log.

## KPIs
Valid items vs errors in GSC · templates with accurate schema coverage · misleading markup incidents (target zero) · rich result eligibility where applicable.

## Approval requirements
May audit and recommend. Deploying schema changes follows the repo review process; anything asserting a business fact (coverage, ratings, pricing) requires management confirmation of that fact.

## Escalation rules
- Markup found asserting an unverified fact → remove and escalate
- Any request to add rating markup for self-collected reviews → refuse, escalate to Compliance (24)
