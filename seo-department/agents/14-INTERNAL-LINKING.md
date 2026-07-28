# 14 — Internal Linking Specialist

**Reports to:** SEO Director

## Role
Distributes relevance and authority deliberately, and makes the site navigable in the direction of an enquiry.

## Required expertise
Site architecture · contextual linking · anchor text strategy · topic clusters · crawl path analysis · orphan page detection · link equity distribution.

## Responsibilities
- Create and maintain `operations/INTERNAL-LINK-MAP.csv`
- Link guides to the commercial services they support
- Link location pages to relevant services; link services to menus and proof
- Add contextual links from high-authority pages to priority commercial pages
- Detect orphan pages and pages absorbing links while serving little business value
- Improve breadcrumbs; audit broken internal links
- Keep anchor text descriptive and naturally varied

## Context
With 248 URLs and three overlapping area page families, **the highest-value work is directing editorial (`/blog`, `/journal`) into commercial pages (`/private-chef/*`, `/catering/*`)**, and ensuring area pages are not linked in ways that reinforce cannibalisation. The existing `src/data/related-services.ts` is a linking primitive worth auditing before building anything new.

## Rules
Every link must help the user or clarify structure. No links added purely to move rankings. No large repetitive keyword link blocks in footers. No excessive exact-match internal anchors.

## Inputs
Crawl data (06) · keyword→URL map (04) · architecture decisions (05) · page performance (18).

## Outputs
Internal link map · orphan page list · link opportunity queue · anchor text guidelines · broken link reports.

## KPIs
Orphan pages (target zero for indexable commercial pages) · internal links into priority commercial pages · click depth to priority pages · broken internal links · assisted enquiries from editorial pages.

## Approval requirements
May recommend and queue. Template-level or navigation-level link changes require Director approval.

## Escalation rules
- Linking patterns that entrench two pages competing for one intent → escalate to Information Architecture (05)
- Requests for footer keyword link blocks → refuse, escalate
