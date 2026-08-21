import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getOpsSnapshot, type OpsSnapshot } from '../lib/ops-stats.js'
import { opsKeyConfigured, opsKeyMatches, providedOpsKey } from '../lib/ops-auth.js'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fmtTime(iso: string): string {
  return iso.replace('T', ' ').replace(/\.\d+Z$/, ' UTC')
}

function loginPage(error?: string): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex,nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MyChef ops</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, sans-serif; background:#111; color:#eee; margin:0; min-height:100vh; display:grid; place-items:center; }
    form { width:min(360px, 92vw); display:grid; gap:12px; }
    label { font-size:13px; color:#aaa; }
    input { padding:10px 12px; border:1px solid #333; background:#1a1a1a; color:#fff; border-radius:6px; }
    button { padding:10px 12px; background:#c5a028; color:#111; border:0; border-radius:6px; font-weight:600; cursor:pointer; }
    .err { color:#f2b8b5; font-size:13px; }
    h1 { font-size:20px; font-weight:600; margin:0 0 8px; }
    p { color:#888; font-size:14px; margin:0 0 16px; }
  </style>
</head>
<body>
  <form method="post" action="/api/ops">
    <h1>MyChef command center</h1>
    <p>First-party data from Neon. Not public.</p>
    ${error ? `<div class="err">${escapeHtml(error)}</div>` : ''}
    <label for="key">Dashboard key</label>
    <input id="key" name="key" type="password" autocomplete="current-password" required />
    <button type="submit">Open dashboard</button>
  </form>
</body>
</html>`
}

function dashboardPage(data: OpsSnapshot): string {
  const c = data.counts
  const eventRows = data.recent_events
    .map(
      (row) => `<tr>
        <td>${escapeHtml(fmtTime(row.occurred_at))}</td>
        <td>${escapeHtml(row.event_name)}</td>
        <td>${escapeHtml(row.page_path ?? '')}</td>
        <td>${escapeHtml(row.service_area ?? '')}</td>
        <td>${escapeHtml(row.lead_ref ?? '')}</td>
      </tr>`
    )
    .join('')
  const leadRows = data.recent_leads
    .map(
      (row) => `<tr>
        <td>${escapeHtml(fmtTime(row.created_at))}</td>
        <td>${escapeHtml(row.lead_ref ?? '')}</td>
        <td>${escapeHtml(row.status ?? '')}</td>
        <td>${escapeHtml(row.source ?? '')}</td>
        <td>${escapeHtml(row.page_path ?? '')}</td>
        <td>${escapeHtml(row.channel ?? '')}</td>
        <td>${escapeHtml(row.name ?? '')}</td>
      </tr>`
    )
    .join('')
  const pageRows = data.top_pages
    .map((row) => `<tr><td>${escapeHtml(row.page_path ?? '(none)')}</td><td>${row.n}</td></tr>`)
    .join('')
  const statusRows = data.leads_by_status
    .map((row) => `<tr><td>${escapeHtml(row.status)}</td><td>${row.n}</td></tr>`)
    .join('')

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex,nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MyChef command center</title>
  <style>
    :root { color-scheme: dark; }
    body { font-family: ui-sans-serif, system-ui, sans-serif; background:#111; color:#eee; margin:0; padding:32px 24px 64px; }
    h1 { font-size:22px; font-weight:600; margin:0 0 4px; }
    .sub { color:#888; font-size:13px; margin-bottom:24px; }
    .pipe { display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:0 0 28px; font-size:13px; color:#bbb; }
    .pipe span { background:#1c1c1c; border:1px solid #2a2a2a; padding:6px 10px; border-radius:999px; }
    .pipe .arrow { border:0; background:none; color:#666; padding:0; }
    .stats { display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:12px; margin-bottom:28px; }
    .stat { background:#1a1a1a; border:1px solid #2a2a2a; padding:14px; border-radius:8px; }
    .stat b { display:block; font-size:24px; font-weight:600; }
    .stat span { color:#888; font-size:12px; }
    h2 { font-size:15px; font-weight:600; margin:28px 0 10px; }
    table { width:100%; border-collapse:collapse; font-size:13px; }
    th, td { text-align:left; padding:8px 10px; border-bottom:1px solid #2a2a2a; vertical-align:top; }
    th { color:#888; font-weight:500; }
    .src { display:grid; grid-template-columns: 1fr 1fr; gap:16px; font-size:13px; color:#bbb; }
    @media (max-width: 800px) { .src { grid-template-columns: 1fr; } }
    a { color:#c5a028; }
    .ok { color:#9ad4a8; }
    .later { color:#888; }
  </style>
</head>
<body>
  <h1>MyChef command center</h1>
  <p class="sub">${escapeHtml(data.property.domain)} · ${escapeHtml(data.property.country_code)} · ${escapeHtml(data.property.region ?? '')} · snapshot ${escapeHtml(fmtTime(data.generated_at))} · <a href="/api/ops">Refresh</a></p>

  <div class="pipe">
    <span>Site (mychef.id)</span><span class="arrow">→</span>
    <span>Browser collect / forms</span><span class="arrow">→</span>
    <span>Neon Postgres</span><span class="arrow">→</span>
    <span>This dashboard</span>
  </div>

  <div class="stats">
    <div class="stat"><b>${c.page_views}</b><span>Page views</span></div>
    <div class="stat"><b>${c.whatsapp_clicks}</b><span>WhatsApp clicks</span></div>
    <div class="stat"><b>${c.form_submits}</b><span>Form submits</span></div>
    <div class="stat"><b>${c.phone_clicks}</b><span>Phone clicks</span></div>
    <div class="stat"><b>${c.visitors}</b><span>Visitors (lead_ref)</span></div>
    <div class="stat"><b>${c.leads}</b><span>Leads</span></div>
  </div>

  <div class="src">
    <div>
      <h2>Writing into Neon now</h2>
      <p class="ok">POST /api/collect — page_view, whatsapp_click, form_submit, phone_click</p>
      <p class="ok">POST /api/send-email — contact and bar-services forms (status = form)</p>
      <p>Identity key: lead_ref from src/lib/attribution.ts (MC-XXXXXX)</p>
    </div>
    <div>
      <h2>Not in Postgres yet</h2>
      <p class="later">GA4 / GTM / PostHog (parallel only)</p>
      <p class="later">Google Search Console, Ads</p>
      <p class="later">WhatsApp inbox (click is stored; sent message is not)</p>
      <p class="later">Bookings and revenue</p>
    </div>
  </div>

  <h2>Leads by status</h2>
  <table><thead><tr><th>Status</th><th>Count</th></tr></thead><tbody>${statusRows || '<tr><td colspan="2">None yet</td></tr>'}</tbody></table>

  <h2>Top pages in events</h2>
  <table><thead><tr><th>Path</th><th>Events</th></tr></thead><tbody>${pageRows || '<tr><td colspan="2">None yet</td></tr>'}</tbody></table>

  <h2>Recent events</h2>
  <table>
    <thead><tr><th>Time</th><th>Event</th><th>Page</th><th>Service</th><th>lead_ref</th></tr></thead>
    <tbody>${eventRows || '<tr><td colspan="5">None yet</td></tr>'}</tbody>
  </table>

  <h2>Recent leads</h2>
  <table>
    <thead><tr><th>Time</th><th>lead_ref</th><th>Status</th><th>Source</th><th>Page</th><th>Channel</th><th>Name</th></tr></thead>
    <tbody>${leadRows || '<tr><td colspan="7">None yet</td></tr>'}</tbody>
  </table>
</body>
</html>`
}

function parseFormKey(body: unknown): string | undefined {
  if (typeof body === 'string') {
    const params = new URLSearchParams(body)
    return params.get('key')?.trim() || undefined
  }
  if (body && typeof body === 'object' && 'key' in body && typeof (body as { key: unknown }).key === 'string') {
    return (body as { key: string }).key.trim()
  }
  return undefined
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  res.setHeader('Cache-Control', 'no-store')

  const expected = opsKeyConfigured()
  if (!expected) {
    res.status(404).send('Not found')
    return
  }

  if (req.method === 'POST') {
    const key = parseFormKey(req.body)
    if (!opsKeyMatches(key, expected)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.status(401).send(loginPage('Wrong key'))
      return
    }
    res.setHeader(
      'Set-Cookie',
      `ops_key=${encodeURIComponent(key!)}; Path=/api; HttpOnly; SameSite=Lax; Max-Age=604800`
    )
    res.status(303).setHeader('Location', '/api/ops')
    res.end()
    return
  }

  if (req.method !== 'GET') {
    res.status(405).send('Method not allowed')
    return
  }

  if (!opsKeyMatches(providedOpsKey(req), expected)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(401).send(loginPage())
    return
  }

  try {
    const snapshot = await getOpsSnapshot()
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(200).send(dashboardPage(snapshot))
  } catch (error) {
    console.error('ops dashboard failed:', error)
    res.status(500).send('Failed to load dashboard')
  }
}
