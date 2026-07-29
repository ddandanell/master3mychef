#!/usr/bin/env node
/**
 * Vercel Web Analytics report generator.
 *
 * Why this exists
 * ---------------
 * The Vercel MCP connector's `get_web_analytics` tool returns
 *   404 { code: "not_found", message: "Web Analytics not found." }
 * for this project even though Web Analytics IS enabled and collecting data.
 * The cause is the OAuth token behind the connector, not the project: the same
 * token also returns an empty array from `list_projects` while `get_project`
 * and `list_deployments` work. Vercel answers out-of-scope resources with 404
 * rather than 403, which makes the error look like "feature is off".
 *
 * This script bypasses the connector entirely and talks to the documented
 * public REST API with a normal Vercel access token.
 *
 * Usage
 * -----
 *   node scripts/vercel-analytics-report.mjs                    # last 30 days, markdown
 *   node scripts/vercel-analytics-report.mjs --days 7
 *   node scripts/vercel-analytics-report.mjs --json             # raw JSON instead
 *   node scripts/vercel-analytics-report.mjs --exclude-internal # drop the CI cohort
 *   node scripts/vercel-analytics-report.mjs --filter "country eq 'AU'"
 *
 * Filtering
 * ---------
 * `--exclude-internal` applies an OData filter that removes the desktop-Linux
 * cohort, which is the best available retroactive proxy for the Playwright E2E
 * runs that were hitting production (playwright.config.ts has
 * baseURL: https://mychef.id). It is an ESTIMATE, not a clean signal: genuine
 * Linux desktop visitors are removed with it. The report always prints raw and
 * filtered totals side by side so nothing is silently discarded.
 *
 * Going forward this is handled properly at collection time by
 * src/lib/analytics-privacy.ts, which drops events from automated browsers
 * (navigator.webdriver) and from devices opted out via ?va-disable=1. Once
 * that has been live for a full reporting period, --exclude-internal stops
 * being necessary.
 *
 * Requires VERCEL_TOKEN in the environment or in .env.local.
 * Create one at https://vercel.com/account/settings/tokens with scope
 * "Server Bali" (the team that owns this project).
 *
 * Docs: https://vercel.com/docs/analytics/web-analytics-api
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const PROJECT_ID = 'prj_VkMbGIUciFBk2VE0EUy2SikfWOgK';
const TEAM_ID = 'team_WumSlShMHjkfsJtedvxDTaDd';
const API = 'https://api.vercel.com/v1/query/web-analytics';

// ---------------------------------------------------------------- token

function loadToken() {
  if (process.env.VERCEL_TOKEN) return process.env.VERCEL_TOKEN;

  const envFile = resolve(ROOT, '.env.local');
  if (existsSync(envFile)) {
    for (const line of readFileSync(envFile, 'utf8').split('\n')) {
      const m = line.match(/^\s*VERCEL_TOKEN\s*=\s*(.*)\s*$/);
      if (m) return m[1].replace(/^["']|["']$/g, '').trim();
    }
  }

  console.error(
    'Missing VERCEL_TOKEN.\n' +
      'Create one at https://vercel.com/account/settings/tokens (scope: Server Bali),\n' +
      'then add VERCEL_TOKEN=... to .env.local or export it in your shell.'
  );
  process.exit(1);
}

const TOKEN = loadToken();

// ---------------------------------------------------------------- api

async function query(path, params = {}) {
  const url = new URL(`${API}/${path}`);
  url.searchParams.set('projectId', PROJECT_ID);
  url.searchParams.set('teamId', TEAM_ID);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  }

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  });

  const body = await res.json().catch(() => null);

  if (!res.ok) {
    const msg = body?.error?.message ?? res.statusText;
    if (res.status === 404) {
      throw new Error(
        `404 from ${path}: ${msg}\n` +
          'Web Analytics IS enabled on this project, so a 404 here almost always means\n' +
          'the token lacks access to the team. Re-issue VERCEL_TOKEN with the\n' +
          '"Server Bali" team selected as its scope.'
      );
    }
    throw new Error(`${res.status} from ${path}: ${msg}`);
  }
  return body;
}

const iso = (d) => d.toISOString().slice(0, 10);

// ---------------------------------------------------------------- report

function pct(cur, prev) {
  if (!prev) return 'n/a';
  const d = ((cur - prev) / prev) * 100;
  return `${d >= 0 ? '+' : ''}${d.toFixed(0)}%`;
}

function table(rows, headers) {
  const line = (cells) => `| ${cells.join(' | ')} |`;
  return [
    line(headers),
    line(headers.map(() => '---')),
    ...rows.map((r) => line(r.map((c) => String(c)))),
  ].join('\n');
}

/** Retroactive proxy for the Playwright-on-production cohort. See header. */
const INTERNAL_FILTER = "osName ne 'GNU/Linux'";

async function main() {
  const args = process.argv.slice(2);
  const days = Number(args[args.indexOf('--days') + 1]) || 30;
  const asJson = args.includes('--json');
  const excludeInternal = args.includes('--exclude-internal');

  const customIdx = args.indexOf('--filter');
  const customFilter = customIdx !== -1 ? args[customIdx + 1] : null;

  const parts = [excludeInternal ? INTERNAL_FILTER : null, customFilter].filter(Boolean);
  const filter = parts.length ? parts.join(' and ') : undefined;

  const until = new Date();
  const since = new Date(until.getTime() - days * 864e5);
  const prevUntil = since;
  const prevSince = new Date(since.getTime() - days * 864e5);

  const range = { since: iso(since), until: iso(until), filter };
  const prevRange = { since: iso(prevSince), until: iso(prevUntil), filter };

  const dimensions = ['requestPath', 'referrerHostname', 'country', 'deviceType', 'browserName'];

  const [count, prevCount, daily, rawCount, ...byDimension] = await Promise.all([
    query('visits/count', range),
    query('visits/count', prevRange),
    query('visits/aggregate', { ...range, by: 'day' }),
    // Unfiltered baseline, so the filter's impact is always visible.
    filter ? query('visits/count', { since: range.since, until: range.until }) : null,
    ...dimensions.map((by) => query('visits/aggregate', { ...range, by, limit: 15 })),
  ]);

  const dims = Object.fromEntries(dimensions.map((d, i) => [d, byDimension[i]]));

  if (asJson) {
    console.log(JSON.stringify({ range, filter, count, rawCount, prevCount, daily, dims }, null, 2));
    return;
  }

  const cur = count.data ?? {};
  const prev = prevCount.data ?? {};
  const raw = rawCount?.data ?? null;

  const out = [];
  out.push(`# myCHEF.id — Vercel Web Analytics (${range.since} → ${range.until})\n`);

  if (filter) {
    out.push(`**Filter applied:** \`${filter}\`\n`);
    out.push(
      table(
        [
          [
            'Page views',
            raw?.pageviews ?? 0,
            cur.pageviews ?? 0,
            (raw?.pageviews ?? 0) - (cur.pageviews ?? 0),
          ],
          [
            'Visitors',
            raw?.visitors ?? 0,
            cur.visitors ?? 0,
            (raw?.visitors ?? 0) - (cur.visitors ?? 0),
          ],
        ],
        ['Metric', 'Raw', 'Filtered', 'Removed']
      )
    );
    out.push('');
  }

  out.push(
    table(
      [
        ['Page views', cur.pageviews ?? 0, prev.pageviews ?? 0, pct(cur.pageviews, prev.pageviews)],
        ['Visitors', cur.visitors ?? 0, prev.visitors ?? 0, pct(cur.visitors, prev.visitors)],
      ],
      ['Metric', `Last ${days}d`, `Prior ${days}d`, 'Change']
    )
  );

  const sections = {
    requestPath: 'Top pages',
    referrerHostname: 'Referrers',
    country: 'Countries',
    deviceType: 'Devices',
    browserName: 'Browsers',
  };

  for (const [key, title] of Object.entries(sections)) {
    const rows = (dims[key]?.data ?? []).map((r) => [
      r[key] ?? r.key ?? '(none)',
      r.pageviews ?? 0,
      r.visitors ?? 0,
    ]);
    if (!rows.length) continue;
    out.push(`\n## ${title}\n`);
    out.push(table(rows, [title.replace(/s$/, ''), 'Page views', 'Visitors']));
  }

  const series = daily?.data ?? [];
  if (series.length) {
    out.push('\n## Daily trend\n');
    out.push(
      table(
        series.map((d) => [
          String(d.timestamp ?? d.key).slice(0, 10),
          d.pageviews ?? 0,
          d.visitors ?? 0,
        ]),
        ['Date', 'Page views', 'Visitors']
      )
    );
  }

  console.log(out.join('\n'));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
