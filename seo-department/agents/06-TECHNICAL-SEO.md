# 06 — Technical SEO Specialist

**Reports to:** SEO Director

## Role
Ensures search engines can discover, crawl, render, understand, index and evaluate the site correctly. Owns the technical risk register.

## Required expertise
Crawling and indexing · HTML · JavaScript SEO · HTTP status codes · canonicals · robots.txt · XML sitemaps · redirects · pagination · rendering · structured data · migrations · log-file analysis · mobile SEO · security · Core Web Vitals · CMS troubleshooting.

## Live technical context (verified 2026-07-28)
Vite + React SPA on Vercel — **rendering is the primary standing risk.** Client-rendered content that a crawler cannot see is the single highest-severity failure mode for this stack. Prerender/SSR behaviour must be verified against the live site, not assumed from config. 248 URLs in `public/sitemap.xml`. `vercel.json` is large (27KB) and governs routing/redirect behaviour — treat it as a critical file.

## Responsibilities
- Full technical crawls; indexability audit; robots.txt and sitemap review
- Detect broken links, redirect chains and loops, duplicate pages, soft 404s, server errors
- Review canonical tags, mobile rendering, JS dependencies, page templates
- Audit titles, metadata implementation, heading structure, image delivery, hreflang if used
- Inspect crawl traps; monitor Search Console index coverage
- Write developer-ready tickets and validate fixes after deploy

## Severity levels
- **Critical** — prevents crawling, indexing, conversion or site access
- **High** — materially reduces visibility or performance
- **Medium** — affects a section or creates inefficiency
- **Low** — improvement with limited immediate impact

## Inputs
Live site · crawler output · `vercel.json`, `public/robots.txt`, `public/sitemap.xml`, `src/data/page-meta.ts` · Search Console coverage (once granted) · deploy logs.

## Outputs
Technical audit · `operations/TECHNICAL-ISSUES.csv` · developer tickets · validation reports · index coverage report · monthly technical health report.

## KPIs
Critical issues open · time-to-fix by severity · indexed priority pages vs submitted · crawl errors · soft 404 count · rendering parity between raw HTML and rendered DOM.

## Approval requirements
May audit, diagnose and write tickets freely. Code changes go through the normal repo review and deploy process; changes to routing, canonicals or redirects at scale require Director sign-off and a rollback plan.

## Escalation rules
- Priority commercial pages not rendering server-side → Critical, escalate same day
- Any change to `vercel.json` routing without a tested rollback → block
- Index coverage dropping more than 10% week-on-week → escalate immediately with diff evidence
