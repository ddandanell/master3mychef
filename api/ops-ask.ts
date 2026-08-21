import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSql } from '../lib/db.js'
import { isOpsAuthorized } from '../lib/ops-auth.js'
import { getOpsSnapshot } from '../lib/ops-stats.js'
import { buildDiagnoseContext } from '../lib/ops-diagnose.js'

function answerFromSnapshot(
  question: string,
  data: Awaited<ReturnType<typeof getOpsSnapshot>>,
  diagnose: Awaited<ReturnType<typeof buildDiagnoseContext>>
): string {
  const q = question.toLowerCase()
  if (q.includes('yesterday') || q.includes('happened') || q.includes('attention')) {
    const alerts = diagnose.alerts
      .filter((a) => a.severity !== 'low')
      .map((a) => `[${a.severity}] ${a.title}: ${a.detail}`)
      .join('\n')
    return `${diagnose.summary}\n\nAlerts:\n${alerts || 'None critical.'}`
  }
  if (q.includes('bounce')) {
    const t = data.pulse?.today
    return `Today bounce rate ${((t?.bounce_rate ?? 0) * 100).toFixed(1)}% from first-party sessions (single page, no conversion, under 10s). Avg time ${Math.round((t?.avg_duration_ms ?? 0) / 1000)}s.`
  }
  if (q.includes('funnel') || q.includes('losing') || q.includes('drop')) {
    const named = (data.funnel_named || [])
      .map((s) => `${s.step}: ${s.n}${s.rate_from_prev == null ? '' : ` (${(s.rate_from_prev * 100).toFixed(0)}% from prior)`}`)
      .join(' → ')
    const drop = diagnose.funnel_dropoffs
      .slice()
      .sort((a, b) => b.loss_rate - a.loss_rate)[0]
    return `Named funnel (30d): ${named || 'empty'}. Largest dropoff: ${drop ? `${drop.from} → ${drop.to} (${Math.round(drop.loss_rate * 100)}%, lost ${drop.lost})` : 'n/a'}. Devices (7d): ${diagnose.device_split.map((d) => `${d.name}=${d.n}`).join(', ') || 'n/a'}.`
  }
  if (q.includes('seo')) {
    if (data.health?.gsc_last_day) {
      return `GSC rows are in Neon through ${data.health.gsc_last_day}. Query seo_page_query_daily for page×query clicks/impressions/CTR/position. Ads still not connected.`
    }
    return 'seo_page_query_daily exists but has no rows yet. Run: npx tsx scripts/sync-gsc-daily.ts (needs GSC service account env).'
  }
  if (q.includes('conversion')) {
    const pct = (data.conversion.visitor_to_whatsapp * 100).toFixed(1)
    return `WhatsApp clicks / page views = ${pct}%. Lead conversion ${(data.conversion.visitor_to_lead * 100).toFixed(1)}%. Lead→booking ${(data.conversion.lead_to_booking * 100).toFixed(1)}%. ${diagnose.summary}`
  }
  if (q.includes('page') && (q.includes('first') || q.includes('improve') || q.includes('traffic'))) {
    const top = data.pages.slice(0, 8).map((p) => `${p.page_path || '(none)'} · ${p.events} events · ${p.leads} WA/form`).join('\n')
    return `Highest-activity pages in events:\n${top || 'No page events yet.'}`
  }
  if (q.includes('service')) {
    const top = data.services.map((s) => `${s.name}: ${s.n}`).join(', ')
    return `Events by service_area: ${top || 'none yet'}.`
  }
  if (q.includes('posthog') || q.includes('replay')) {
    return `PostHog identity coverage: ${((data.health?.posthog_identity_pct ?? 0) * 100).toFixed(0)}% of visitors have posthog_distinct_id. Use GET /api/ops-visitor?ref=MC-XXXXXX for posthog_replay_hint.`
  }
  return `${diagnose.summary} Ask about traffic, funnel, bounce, SEO, conversion, pages, or PostHog. Snapshot: ${data.counts.events} events, ${data.counts.leads} leads, events last hour ${data.health?.events_last_hour ?? 0}.`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!isOpsAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' })

  let body: { question?: string }
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as typeof body
  } catch {
    return res.status(400).json({ error: 'Invalid request body' })
  }
  const question = body?.question?.trim()
  if (!question) return res.status(400).json({ error: 'Missing question' })

  try {
    const [data, diagnose] = await Promise.all([getOpsSnapshot(), buildDiagnoseContext()])
    const sql = getSql()
    try {
      await sql`
        INSERT INTO ops_changes (change_type, summary, actor)
        VALUES ('ai_question', ${question.slice(0, 500)}, 'command-center')
      `
    } catch {
      /* optional */
    }
    return res.status(200).json({
      answer: answerFromSnapshot(question, data, diagnose),
      generated_at: data.generated_at,
      alerts: diagnose.alerts,
    })
  } catch (error) {
    console.error('ops-ask failed:', error)
    return res.status(500).json({ error: 'Ask failed' })
  }
}
