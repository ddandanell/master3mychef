# Vercel production lock — READ BEFORE ANY DEPLOY

**This is the ONLY production project for mychef.id.**

| Field | Value |
|-------|--------|
| **Project Name** | `master3mychef` |
| **Project ID** | `prj_VkMbGIUciFBk2VE0EUy2SikfWOgK` |
| **Team / org** | `daviddandanell-9392s-projects` (`team_WumSlShMHjkfsJtedvxDTaDd`) |
| **Dashboard** | https://vercel.com/daviddandanell-9392s-projects/master3mychef |
| **Production domain** | https://mychef.id |
| **GitHub repo** | `ddandanell/master3mychef` |
| **Production branch** | `main` |

## Hard rules for agents

1. **Never** run `vercel deploy` from a git worktree without first copying  
   `master3mychef/.vercel/project.json` into that worktree’s `.vercel/`.
2. **Never** let the CLI create a new project (names like `wt-*`, `tmp-*`, folder-name projects).
3. Before every prod deploy, verify:
   ```bash
   cat .vercel/project.json | grep -E 'projectId|projectName'
   # must show:
   #   "projectId": "prj_VkMbGIUciFBk2VE0EUy2SikfWOgK"
   #   "projectName": "master3mychef"
   ```
4. Preferred command (from repo root or a worktree with the correct `.vercel`):
   ```bash
   ./scripts/deploy-prod.sh
   # or:
   vercel deploy --prod --yes --archive=tgz --scope daviddandanell-9392s-projects
   ```
5. After deploy, confirm alias is `https://mychef.id` (not a random `*.vercel.app` project).
6. If the CLI says “Created …/some-other-name” — **STOP**, do not continue. Fix link and redeploy to `master3mychef`.

## Accidental projects (do not use)

- `wt-journal-main` — created by mistake from a worktree folder name. Not production.
