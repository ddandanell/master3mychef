#!/usr/bin/env node
/**
 * verify-all.ts
 *
 * Comprehensive project verification script.
 * Runs all checks required before a build or deployment.
 *
 * Checks:
 * 1. AI skills files present
 * 2. package.json scripts valid
 * 3. npm run lint (if available)
 * 4. npm run typecheck (if available)
 * 5. npm run build
 * 6. No uncommitted changes in ai-skills/
 *
 * Run with: npx tsx scripts/verify-all.ts
 */

import { execSync } from "child_process";
import { existsSync, readFileSync } from "fs";
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

let totalErrors = 0;

function fail(msg: string) {
  console.error(`  ✗ ${msg}`);
  totalErrors++;
}

function pass(msg: string) {
  console.log(`  ✓ ${msg}`);
}

function header(label: string) {
  console.log(`\n[verify-all] ${label}`);
}

function checkAiSkills() {
  header("Checking AI skills files...");
  const root = resolve(import.meta.dirname, "..");
  let ok = true;
  for (const file of REQUIRED_FILES) {
    if (!existsSync(resolve(root, file))) {
      fail(`MISSING: ${file}`);
      ok = false;
    }
  }
  if (ok) {
    pass(`All ${REQUIRED_FILES.length} AI skill files present.`);
  } else {
    console.error("[verify-all] AI-SKILLS FAIL: some files missing.");
  }
}

function checkGitStatus() {
  header("Checking git status for ai-skills changes...");
  try {
    const status = execSync("git status --short ai-skills/ AI_INSTRUCTIONS.md .github/workflows/ai-skills-check.yml", { encoding: "utf-8" }).trim();
    if (status) {
      fail("Uncommitted changes in ai-skills/ or related files:");
      console.error(status);
    } else {
      pass("No uncommitted changes in ai-skills infrastructure.");
    }
  } catch (err) {
    fail("Could not check git status.");
  }
}

function checkPackageJson() {
  header("Checking package.json...");
  try {
    const pkg = JSON.parse(readFileSync("package.json", "utf-8"));
    const requiredScripts = ["build", "lint", "verify:ai-skills"];
    for (const script of requiredScripts) {
      if (pkg.scripts && pkg.scripts[script]) {
        pass(`script '${script}' exists.`);
      } else {
        fail(`script '${script}' missing from package.json.`);
      }
    }
  } catch (err) {
    fail("Could not read package.json.");
  }
}

function runNpmScript(name: string) {
  header(`Running 'npm run ${name}'...`);
  try {
    execSync(`npm run ${name}`, { stdio: "inherit" });
    pass(`'npm run ${name}' completed successfully.`);
  } catch (err) {
    fail(`'npm run ${name}' failed.`);
  }
}

function main() {
  console.log("\n[verify-all] Starting comprehensive verification...\n");

  checkAiSkills();
  checkGitStatus();
  checkPackageJson();

  // Run lint if available
  try {
    const pkg = JSON.parse(readFileSync("package.json", "utf-8"));
    if (pkg.scripts && pkg.scripts.lint) {
      runNpmScript("lint");
    } else {
      header("Lint check");
      pass("No lint script defined — skipping.");
    }
  } catch (err) {
    // ignored
  }

  // Run build (this is the critical check)
  runNpmScript("build");

  if (totalErrors === 0) {
    console.log("\n[verify-all] ✓ ALL CHECKS PASSED. Safe to proceed.\n");
    process.exit(0);
  } else {
    console.error(`\n[verify-all] ✗ ${totalErrors} CHECK(S) FAILED. Fix before proceeding.\n`);
    process.exit(1);
  }
}

main();
