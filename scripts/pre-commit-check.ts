#!/usr/bin/env node
/**
 * pre-commit-check.ts
 *
 * Runs automatically before every commit via simple-git-hooks.
 * Checks:
 * 1. AI skills files are present
 * 2. No secrets in staged files
 * 3. No direct main branch push (safety net)
 */

import { execSync } from "child_process";
import { existsSync } from "fs";
import { resolve } from "path";

const REQUIRED_FILES = [
  "AI_INSTRUCTIONS.md",
  "ai-skills/00-master-rules.md",
  "ai-skills/01-vercel-deployment-safety.md",
  "ai-skills/02-nextjs-build-debugging.md",
  "ai-skills/03-github-pr-rules.md",
  "ai-skills/04-seo-protection.md",
  "ai-skills/05-env-vars.md",
  "ai-skills/06-route-checking.md",
  "ai-skills/07-error-log-debugging.md",
  "ai-skills/08-agent-swarm-roles.md",
];

const SECRET_PATTERNS = [
  /API_KEY\s*[:=]\s*["']\w{20,}/,
  /SECRET\s*[:=]\s*["']\w{20,}/,
  /PASSWORD\s*[:=]\s*["']\S{8,}/,
  /TOKEN\s*[:=]\s*["']\w{20,}/,
  /PRIVATE_KEY\s*[:=]\s*["']\S{20,}/,
  /sk-\w{20,}/, // OpenAI-style key
  /ghp_\w{36}/, // GitHub personal access token
];

function checkAiSkills() {
  console.log("[pre-commit] Checking AI skills files...");
  const root = resolve(import.meta.dirname, "..");
  let ok = true;
  for (const file of REQUIRED_FILES) {
    if (!existsSync(resolve(root, file))) {
      console.error(`  ✗ MISSING: ${file}`);
      ok = false;
    }
  }
  if (ok) {
    console.log(`  ✓ All ${REQUIRED_FILES.length} AI skill files present.`);
  } else {
    console.error("[pre-commit] AI-SKILLS FAIL: some files missing.");
    process.exit(1);
  }
}

function checkSecrets() {
  console.log("[pre-commit] Checking for secrets in staged files...");
  try {
    const staged = execSync("git diff --cached --name-only", { encoding: "utf-8" }).trim();
    if (!staged) {
      console.log("  ℹ No staged files to check.");
      return;
    }

    const files = staged.split("\n").filter(f => f.endsWith(".ts") || f.endsWith(".tsx") || f.endsWith(".js") || f.endsWith(".json") || f.endsWith(".md"));
    let found = false;

    for (const file of files) {
      const content = execSync(`git diff --cached -- "${file}"`, { encoding: "utf-8" });
      for (const pattern of SECRET_PATTERNS) {
        if (pattern.test(content)) {
          console.error(`  ✗ POTENTIAL SECRET in ${file} (pattern: ${pattern.source})`);
          found = true;
        }
      }
    }

    if (found) {
      console.error("[pre-commit] SECRET CHECK FAIL: potential secrets found.");
      console.error("  If this is a false positive, run: git commit --no-verify");
      process.exit(1);
    } else {
      console.log("  ✓ No obvious secrets detected in staged files.");
    }
  } catch (err) {
    console.error("[pre-commit] Could not check secrets:", err);
  }
}

function checkBranch() {
  console.log("[pre-commit] Checking branch safety...");
  try {
    const branch = execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf-8" }).trim();
    if (branch === "main") {
      console.error("  ✗ You are on 'main' branch. Do not commit directly to main.");
      console.error("  Create a feature branch: git checkout -b feature/your-change");
      process.exit(1);
    }
    console.log(`  ✓ On branch '${branch}' (not main).`);
  } catch (err) {
    console.error("[pre-commit] Could not check branch:", err);
  }
}

function main() {
  console.log("\n[pre-commit] Running pre-commit checks...\n");
  checkAiSkills();
  checkSecrets();
  checkBranch();
  console.log("\n[pre-commit] ✓ All checks passed. Commit allowed.\n");
  process.exit(0);
}

main();
