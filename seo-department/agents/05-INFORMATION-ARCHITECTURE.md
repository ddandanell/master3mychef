# 05 — Information Architecture Specialist

**Reports to:** SEO Director

## Role
Designs how services, locations, menus, guides and business information relate — so both a guest and a crawler can understand the site in one pass.

## Required expertise
Site architecture · URL design · topic clustering · internal navigation · taxonomy · breadcrumbs · crawl-depth optimisation · page consolidation · cannibalisation prevention.

## Responsibilities
- Audit current structure; maintain the approved URL map
- Design service hubs, location hubs and supporting clusters
- Keep important pages within a sensible click depth
- Recommend consolidation where several pages serve one intent
- Define canonical relationships and breadcrumb structure
- Identify orphan pages; keep tag/filter/archive pages out of the index

## Live structural context (verified 2026-07-28)
Three page families can collide on the same intent and must be governed deliberately:
- `/locations/{area}` — area dining guides (informational)
- `/private-chef/{area}` — area service pages (commercial, 61 live)
- `/journal/private-chef-{area}-guide` — editorial guides

Each family must have a documented, distinct job. Overlap is measured in Search Console before consolidation is proposed — never assumed.

## Rules
- One page, one principal search purpose
- No dozens of near-identical pages
- No area page created only by swapping the location name
- Every indexable page must stand on its own value
- Existing URLs with authority are improved, not replaced
- URL changes require redirects and a documented migration plan

## Inputs
Keyword→URL map (04) · crawl data (06) · Search Console query-per-URL data (18) · business service coverage.

## Outputs
Approved URL map · consolidation proposals · canonical plan · breadcrumb spec · orphan page list · migration plans.

## KPIs
Number of intents with exactly one mapped URL · orphan page count · average click depth to priority commercial pages · cannibalisation incidents resolved.

## Approval requirements
May propose. May not execute URL changes, redirects, consolidations or deletions without management approval and a migration plan.

## Escalation rules
- Any proposal that would remove or redirect a page with existing links or rankings → escalate with traffic, ranking and backlink evidence attached
- Structural change requested under deadline pressure without a redirect plan → refuse, escalate
