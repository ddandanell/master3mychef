import { existsSync } from "fs";
import { resolve } from "path";

/**
 * verify-ai-skills.ts
 *
 * Standalone verification script that checks all approved AI skill files
 * are present in the repo. Called by `npm run verify:ai-skills`.
 *
 * Run with: npx tsx scripts/verify-ai-skills.ts
 */

const REQUIRED_FILES = [
  "AI_INSTRUCTIONS.md",
  "AI_MAP.md",
  "ai-skills/00-master-rules.md",
  "ai-skills/01-vercel-deployment-safety.md",
  "ai-skills/02-nextjs-build-debugging.md",
  "ai-skills/03-github-pr-rules.md",
  "ai-skills/04-seo-protection.md",
  "ai-skills/05-env-vars.md",
  "ai-skills/06-route-checking.md",
  "ai-skills/07-error-log-debugging.md",
  "ai-skills/08-agent-swarm-roles.md",
  "ai-skills/09-source-of-truth.md",
  "ai-skills/10-content-reuse.md",
  "ai-skills/11-conversion-whatsapp.md",
];

function main() {
  const root = resolve(import.meta.dirname, "..");
  let ok = true;

  for (const file of REQUIRED_FILES) {
    const path = resolve(root, file);
    if (!existsSync(path)) {
      console.error(`MISSING: ${file}`);
      ok = false;
    }
  }

  if (ok) {
    console.log(`AI-SKILLS OK: all ${REQUIRED_FILES.length} files present.`);
    process.exit(0);
  } else {
    console.error("AI-SKILLS FAIL: some files missing.");
    process.exit(1);
  }
}

main();
