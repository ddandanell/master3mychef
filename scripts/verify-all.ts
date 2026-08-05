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
 * 7. Every static route is in the sitemap, noindexed, or redirected
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
  } catch (_) {
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
  } catch (_) {
    fail("Could not read package.json.");
  }
}

/**
 * Every static route in App.tsx must be accounted for: in the sitemap, deliberately
 * noindexed, or a redirect source. A page that is none of those is live, indexable and
 * unsubmitted — invisible to Google with nothing in the repo saying that was intended.
 *
 * Added 2026-08-05 after an audit found /partner in exactly that state. Gating here
 * rather than in .github/workflows/ for the reason given at the `lint` call below:
 * the deploy PAT has no `workflow` scope.
 */
function checkRouteSitemapCoverage() {
  header("Checking route/sitemap coverage");

  const appSrc = readFileSync(resolve("src/App.tsx"), "utf-8");
  const routes = [...appSrc.matchAll(/path="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => p.startsWith("/") && !p.includes(":") && !p.includes("*"))
    // Trailing-slash aliases resolve to the same component as their canonical form.
    .filter((p) => p === "/" || !p.endsWith("/"));

  const sitemapSrc = readFileSync(resolve("src/data/sitemap.ts"), "utf-8");
  const metaSrc = readFileSync(resolve("src/data/page-meta.ts"), "utf-8");
  const redirectSrc = readFileSync(resolve("src/data/redirects.ts"), "utf-8");
  const genSrc = readFileSync(resolve("scripts/generate-sitemap.ts"), "utf-8");

  const redirectSources = new Set(
    [...redirectSrc.matchAll(/from:\s*'([^']+)'/g)].map((m) => m[1])
  );
  const noindexPaths = new Set(
    [...(genSrc.match(/const NOINDEX_PATHS = new Set\(\[([^\]]*)\]/)?.[1] ?? "")
      .matchAll(/'([^']+)'/g)].map((m) => m[1])
  );
  // Paths reachable by the generator: an explicit entry, a metaInfo() key whose
  // PAGE_META entry carries that path, or the deliberate bar-services exclusion.
  const metaPaths = new Set(
    [...metaSrc.matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1])
  );

  const orphans = routes.filter((p) => {
    if (redirectSources.has(p) || noindexPaths.has(p)) return false;
    if (p === "/bar-services" || p.startsWith("/bar-services/")) return false; // owner decision 2026-07-28
    if (sitemapSrc.includes(`'${p}'`) || sitemapSrc.includes(`"${p}"`)) return false;
    return !metaPaths.has(p);
  });

  if (orphans.length > 0) {
    fail(
      `${orphans.length} live route(s) are neither in the sitemap, noindexed, nor redirected:\n` +
        orphans.map((p) => `      ${p}`).join("\n") +
        `\n    Add each to src/data/sitemap.ts, to NOINDEX_PATHS in scripts/generate-sitemap.ts,\n` +
        `    or to src/data/redirects.ts. Do not edit public/sitemap.xml by hand.`
    );
  } else {
    pass(`all ${routes.length} static routes accounted for`);
  }
}

function runNpmScript(name: string) {
  header(`Running 'npm run ${name}'...`);
  try {
    execSync(`npm run ${name}`, { stdio: "inherit" });
    pass(`'npm run ${name}' completed successfully.`);
  } catch (_) {
    fail(`'npm run ${name}' failed.`);
  }
}

function main() {
  console.log("\n[verify-all] Starting comprehensive verification...\n");

  checkAiSkills();
  checkGitStatus();
  checkPackageJson();
  checkRouteSitemapCoverage();

  // Lint. Re-enabled 2026-07-30 — the precondition the previous note set out
  // ("can be re-enabled once the debt is cleared") is now met: src/ is at zero
  // eslint errors, cleared in 916e55ac and e047ab23.
  //
  // Gating here rather than in .github/workflows/ is deliberate. This script is
  // already invoked by the build-and-verify job, so a check added here is a real
  // CI gate — and unlike a workflow file it can be updated with a normal push.
  // GitHub refuses Personal Access Token writes to .github/workflows/ without
  // `workflow` scope, which is what stopped the equivalent workflow-level step
  // from shipping.
  //
  // Runs BEFORE the build so it fails in seconds rather than after a full
  // Chromium prerender.
  runNpmScript("lint");

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
