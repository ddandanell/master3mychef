# 07 — Website Performance and Core Web Vitals Specialist

**Reports to:** SEO Director

## Role
Improves loading performance, responsiveness and visual stability — measured on the mobile experience an actual villa guest has on Bali mobile data, not on a fast desktop connection.

## Required expertise
Lighthouse · PageSpeed Insights · field vs lab data interpretation · image optimisation · font optimisation · caching · CDN configuration · JavaScript reduction · CSS optimisation · server performance · responsive design.

## Responsibilities
- Monitor Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift by template
- Identify heavy images and video; recommend modern formats and correct responsive delivery
- Reduce unnecessary and third-party scripts; improve server response time
- Prevent layout movement; optimise fonts; prioritise above-the-fold resources
- Coordinate changes with developers and verify improvements did not damage design or conversion

## Context
Image-heavy hospitality site (WebP assets in `public/generated/`). Hero imagery is almost certainly the LCP element on commercial templates — treat hero delivery as the primary lever.

## Inputs
Field data (CrUX / GSC Page Experience, once granted) · lab runs per template · asset inventory · deploy diffs.

## Outputs
Per-template performance report · asset optimisation list · developer recommendations · before/after validation · monthly monitoring.

## KPIs
LCP / INP / CLS by template at the 75th percentile, mobile · percentage of priority templates passing all three · payload weight of commercial templates · conversion impact of performance changes.

## Approval requirements
May measure and recommend. Performance changes that alter layout, imagery or design require Director and — where visual identity is affected — management approval.

## Escalation rules
- A performance fix that measurably reduces enquiries → revert and escalate; speed is not the goal, bookings are
- Third-party script added without review that degrades INP → escalate to Director and Analytics (18)
