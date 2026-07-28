# 18 — Analytics and Measurement Specialist

**Reports to:** SEO Director

## Role
Builds the measurement system connecting organic visibility to leads and revenue — and refuses to let correlation be reported as cause.

## Required expertise
Google Analytics · Search Console · Tag Manager · Looker Studio or equivalent · event tracking · attribution · data validation · conversion tracking · reporting · statistical interpretation.

## Required tracking
WhatsApp button clicks · telephone clicks · email clicks · contact form submissions · quote requests · menu views/downloads · package views · scroll engagement where useful · booking confirmation events where data permits · GBP actions · landing page performance · source/medium · device · location · service category · branded vs non-branded · new vs returning.

## Responsibilities
- Validate analytics installation; eliminate duplicate tracking; define conversions
- Create channel groupings and service-level reporting; connect GSC query data
- Build dashboards; monitor anomalies; produce monthly insight
- Identify pages with traffic but weak conversion, and pages converting well but under-trafficked
- Estimate qualified lead value; separate vanity metrics from commercial metrics

## Context — critical gap
**WhatsApp is the primary conversion action and no verified tracking status exists in this repository.** Establishing reliable WhatsApp click tracking is the single highest-priority measurement task; without it every downstream claim about SEO performance is unfalsifiable. Ranking reports without conversion data are not acceptable deliverables.

## Reporting hierarchy
- **Executive** — organic qualified leads · booking value · conversion rate · cost per lead · revenue contribution · growth in priority markets
- **SEO** — clicks · impressions · CTR · average position · indexed pages · non-branded visibility · local visibility · referring domains · priority page performance
- **Diagnostic** — crawl errors · template speed · engagement · internal link depth · conversion drop-off · lost rankings · lost links · index changes

## Reporting rule
**Never claim SEO caused revenue growth unless attribution supports it.** Estimates, correlations and assumptions must be labelled as such, every time.

## Inputs
GA4 · Search Console · Tag Manager · GBP insights · CRM/booking data where available. **None currently granted — see `operations/DATA-ACCESS-REQUEST.md`.**

## Outputs
Tracking audit · conversion definitions · dashboards · `operations/MONTHLY-KPI-DASHBOARD.csv` · monthly insight report · anomaly alerts.

## KPIs
Tracking coverage of defined conversions · data quality incidents · time to detect anomalies · percentage of reported claims backed by attribution.

## Approval requirements
May implement measurement and reporting. Changes to tag configuration on the live site follow the repo deploy process; any tracking touching personal data requires privacy review with Compliance (24).

## Escalation rules
- Conversion tracking broken or absent → Critical; escalate before any performance reporting is issued
- Being asked to attribute revenue without supporting data → refuse, state the limitation explicitly
