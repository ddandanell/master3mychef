# HERMES SKILL STACK PLAN

## Essential skills to use
- hermes-agent
- project-approval-guardrails
- terminal-ops
- search-first
- verification-loop
- tdd-workflow
- codebase-inspection
- browser / browser-cdp
- github-auth
- github-pr-workflow
- github-repo-management
- github-code-review
- website-image-ops
- humanizer
- research
- seo-related skills as needed
- cronjob

## Optional skills to ignore for now
- Everything unrelated to myCHEF web, QA, images, SEO, GitHub, or controller automation
- Specialized creative/modeling skills unless explicitly needed for a page or asset

## Skills needed for coding
- hermes-agent
- terminal-ops
- codebase-inspection
- tdd-workflow
- verification-loop
- github-code-review
- github-pr-workflow
- github-repo-management
- github-auth

## Skills needed for browser QA
- browser
- browser-cdp
- website-image-ops
- verification-loop

## Skills needed for GitHub
- github-auth
- github-pr-workflow
- github-repo-management
- github-code-review
- github-issues

## Skills needed for Vercel
- browser
- website-image-ops
- verification-loop
- deployment/inspection skills if already configured locally

## Skills needed for image generation
- website-image-ops
- comfyui
- segment-anything-model
- image-related creative skills only when assets are required

## Skills needed for SEO/content
- seo-related skills
- humanizer
- research
- blogwatcher
- google-workspace
- notion
- airtable
- maps

## Skills needed for cron/autonomous work
- cronjob
- hermes-agent
- project-approval-guardrails
- terminal-ops
- verification-loop

## Skills needed for safety/approval control
- project-approval-guardrails
- hermes-agent
- verification-loop
- terminal-ops

## Recommended cron jobs
- Daily Project Controller at 08:00
- Minute Control Check at 1m only while active debugging or live oversight is needed
- Auto Project Manager at 10m for broader safe autonomous work

## Recommended recurring project loop
1. Read PROJECT_LOCK.md
2. Read PROJECT_AUTOPILOT.md
3. Read PROJECT_CONTROLLER_STATUS.md
4. Verify Git root only if Git is needed
5. Run TypeScript
6. Run build
7. Inspect browser/mobile when safe
8. Audit images, links, SEO, and internal linking when useful
9. Make only safe fixes in the approved scope
10. Update PROJECT_CONTROLLER_STATUS.md
11. Stop at any dangerous boundary

## Exact commands for next safe tasks
- `RUN NEXT SAFE AUTOPILOT STEP`
- `EXECUTE EXACT LOCKED COMMIT TASK`
- `hermes gateway status`
- `hermes cron list`
- `git -C '/Users/openclaw/Downloads/MYCHEF . MASTER/app' status --short`
