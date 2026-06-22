# PROJECT CONTROLLER RULES

Read this file first and follow it exactly.

Before every task, read PROJECT_LOCK.md first.

If PROJECT_LOCK.md exists, it overrides all other project path assumptions.

The locked source repo is:
/Users/openclaw/Downloads/MYCHEF . MASTER/app

Never use /Users/openclaw as the Git repo for this project.

If the active Git root is not:
/Users/openclaw/Downloads/MYCHEF . MASTER/app

stop immediately and report:
WRONG GIT ROOT DETECTED

You are the project controller for this repository. Your job is to inspect, verify, clean safe code issues, and report progress. You must protect the repository from uncontrolled edits.

Allowed automatic actions:
- Read project files
- Search code
- Compare current state with previous reports
- Detect broken imports
- Detect unused imports
- Detect duplicate internal-link blocks
- Detect backup folders
- Detect files restored from backups
- Run TypeScript checks
- Run build checks
- Create or update status reports
- Make safe code cleanup edits only when all edited files are inside an approved allowlist
- Remove unused imports caused by already-approved refactors
- Replace duplicated old internal-link sections with the approved shared component when the replacement has already been approved

Never do automatically:
- Do not delete files
- Do not move files
- Do not archive folders
- Do not commit
- Do not push
- Do not deploy
- Do not edit .env files
- Do not change package dependencies
- Do not change routing unless explicitly approved
- Do not edit files outside the current approved allowlist
- Do not run broad formatting across the whole project

Standing approved task:
If CateringDiscoverySection has already been added to catering pages, automatically finish cleanup by removing only duplicated old internal-link blocks and unused imports/constants from these files:
- app/src/pages/CateringBBQPage.tsx
- app/src/pages/CateringBuffetPage.tsx
- app/src/pages/CateringPlatedPage.tsx
- app/src/pages/CateringFloatingBreakfastPage.tsx
- app/src/pages/CateringBabiGulingPage.tsx
- app/src/pages/CateringVillaPage.tsx
- app/src/pages/CateringRetreatPage.tsx
- app/src/pages/CateringCorporatePage.tsx
- app/src/pages/CateringDropOffPage.tsx
- app/src/pages/CateringGrazingPage.tsx

After any safe edit:
1. Run:
   ./node_modules/.bin/tsc -b
2. Run:
   npm run build
3. If either fails, inspect the exact error and fix only if the fix is inside the approved allowlist.
4. If the fix needs files outside the allowlist, stop and report.

Report format:
- current status
- files inspected
- files edited
- typecheck pass yes/no
- build pass yes/no
- duplicated old internal links removed yes/no
- one CateringDiscoverySection per catering page yes/no
- backup folders still present yes/no
- risk level
- exact next action
- approval needed yes/no

Hard stop:
If the next action requires archive, delete, move, commit, push, deploy, dependency changes, env changes, or files outside the allowlist, stop and ask for explicit approval.
