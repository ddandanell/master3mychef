import { getSql } from './db.js'
import { getNamedFunnel } from './ops-funnels.js'

export type DiagnoseAlert = {
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  detail: string
}

export async function buildDiagnoseContext(): Promise<{
  alerts: DiagnoseAlert[]
  summary: string
  funnel_dropoffs: Array<{ from: string; to: string; lost: number; loss_rate: number }>
  pulse: { today_visitors: number; yesterday_visitors: number; today_wa: number; yesterday_wa: number }
  recent_changes: Array<{ change_type: string; summary: string; created_at: string }>
  device_split: Array<{ name: string; n: number }>
}> {
  const sql = getSql()
  const { funnel_named, dropoffs } = await getNamedFunnel()

  const [pulseRows, changeRows, deviceRows] = await Promise.all([
    sql`
      SELECT
        COUNT(DISTINCT visitor_id) FILTER (
          WHERE started_at >= date_trunc('day', now())
            AND started_at < now()
        )::int AS today_visitors,
        COUNT(DISTINCT visitor_id) FILTER (
          WHERE started_at >= date_trunc('day', now()) - interval '1 day'
            AND started_at < now() - interval '1 day'
        )::int AS yesterday_visitors
      FROM sessions
    `,
    sql`
      SELECT change_type, summary, created_at
      FROM ops_changes
      ORDER BY id DESC
      LIMIT 10
    `.catch(() => []),
    sql`
      SELECT COALESCE(device_category, 'unknown') AS name, COUNT(*)::int AS n
      FROM sessions
      WHERE started_at >= now() - interval '7 days'
      GROUP BY 1
      ORDER BY 2 DESC
    `.catch(() => []),
  ])

  const [waToday, waYday] = await Promise.all([
    sql`
      SELECT COUNT(*)::int AS n FROM events
      WHERE event_name = 'whatsapp_click'
        AND occurred_at >= date_trunc('day', now())
        AND occurred_at < now()
    `,
    sql`
      SELECT COUNT(*)::int AS n FROM events
      WHERE event_name = 'whatsapp_click'
        AND occurred_at >= date_trunc('day', now()) - interval '1 day'
        AND occurred_at < now() - interval '1 day'
    `,
  ])

  const todayVisitors = Number(pulseRows[0]?.today_visitors ?? 0)
  const yesterdayVisitors = Number(pulseRows[0]?.yesterday_visitors ?? 0)
  const todayWa = Number(waToday[0]?.n ?? 0)
  const yesterdayWa = Number(waYday[0]?.n ?? 0)

  const alerts: DiagnoseAlert[] = []

  // Same elapsed clock window, not full-yesterday vs partial-today.
  if (yesterdayVisitors > 0 && todayVisitors / yesterdayVisitors < 0.7) {
    alerts.push({
      severity: 'high',
      title: 'Visitors down vs yesterday',
      detail: `Today ${todayVisitors} vs yesterday ${yesterdayVisitors} same elapsed window (${Math.round((1 - todayVisitors / yesterdayVisitors) * 100)}% drop).`,
    })
  }

  if (yesterdayWa >= 5 && todayWa / yesterdayWa < 0.75) {
    alerts.push({
      severity: 'critical',
      title: 'WhatsApp clicks down vs yesterday',
      detail: `Today ${todayWa} vs yesterday ${yesterdayWa} same elapsed window.`,
    })
  }

  for (const d of dropoffs) {
    if (d.loss_rate >= 0.7 && d.lost >= 5) {
      alerts.push({
        severity: d.loss_rate >= 0.85 ? 'high' : 'medium',
        title: `Funnel drop: ${d.from} → ${d.to}`,
        detail: `Lost ${d.lost} (${Math.round(d.loss_rate * 100)}%) over the last 30 days.`,
      })
    }
  }

  if (alerts.length === 0) {
    alerts.push({
      severity: 'low',
      title: 'No critical anomalies',
      detail: 'Pulse and funnel look stable relative to simple day-over-day rules.',
    })
  }

  const topDrop = dropoffs.sort((a, b) => b.loss_rate - a.loss_rate)[0]
  const summary = [
    `Named funnel (30d): ${funnel_named.map((s) => `${s.step}=${s.n}`).join(' → ')}.`,
    topDrop ? `Largest dropoff: ${topDrop.from} → ${topDrop.to} (${Math.round(topDrop.loss_rate * 100)}%).` : '',
    `Visitors today/yesterday: ${todayVisitors}/${yesterdayVisitors}. WA today/yesterday: ${todayWa}/${yesterdayWa}.`,
  ]
    .filter(Boolean)
    .join(' ')

  return {
    alerts,
    summary,
    funnel_dropoffs: dropoffs,
    pulse: {
      today_visitors: todayVisitors,
      yesterday_visitors: yesterdayVisitors,
      today_wa: todayWa,
      yesterday_wa: yesterdayWa,
    },
    recent_changes: (changeRows as Array<{ change_type: string; summary: string; created_at: string }>).map((c) => ({
      ...c,
      created_at: new Date(c.created_at).toISOString(),
    })),
    device_split: (deviceRows as Array<{ name: string; n: number }>).map((d) => ({
      name: d.name,
      n: Number(d.n),
    })),
  }
}

export async function refreshOpsAlerts(): Promise<DiagnoseAlert[]> {
  const sql = getSql()
  const ctx = await buildDiagnoseContext()
  for (const alert of ctx.alerts) {
    if (alert.severity === 'low') continue
    await sql`
      INSERT INTO ops_alerts (severity, title, detail)
      SELECT ${alert.severity}, ${alert.title}, ${alert.detail}
      WHERE NOT EXISTS (
        SELECT 1 FROM ops_alerts
        WHERE title = ${alert.title}
          AND created_at >= now() - interval '1 day'
          AND acknowledged = false
      )
    `
  }
  return ctx.alerts
}
