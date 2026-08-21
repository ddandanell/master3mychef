import { getSql } from './db.js'

export async function refreshFactsDaily(): Promise<void> {
  const sql = getSql()
  await sql`DELETE FROM facts_daily WHERE day >= (CURRENT_DATE - 60)`
  await sql`
    INSERT INTO facts_daily (
      day, source, landing_path, visitors, sessions, bounces, page_views,
      whatsapp, forms, leads, duration_ms, revenue_idr
    )
    SELECT
      (s.started_at AT TIME ZONE 'UTC')::date,
      COALESCE(NULLIF(s.utm_source, ''), 'direct'),
      COALESCE(NULLIF(s.landing_path, ''), '/'),
      COUNT(DISTINCT s.visitor_id)::int,
      COUNT(*)::int,
      COUNT(*) FILTER (WHERE s.bounced)::int,
      COALESCE(SUM(ev.page_views), 0)::int,
      COALESCE(SUM(ev.whatsapp), 0)::int,
      COALESCE(SUM(ev.forms), 0)::int,
      0,
      COALESCE(SUM(s.duration_ms), 0)::bigint,
      0
    FROM sessions s
    LEFT JOIN (
      SELECT
        session_id,
        COUNT(*) FILTER (WHERE event_name = 'page_view')::int AS page_views,
        COUNT(*) FILTER (WHERE event_name = 'whatsapp_click')::int AS whatsapp,
        COUNT(*) FILTER (WHERE event_name = 'form_submit')::int AS forms
      FROM events
      WHERE occurred_at >= CURRENT_DATE - 60
      GROUP BY session_id
    ) ev ON ev.session_id = s.id
    WHERE s.started_at >= CURRENT_DATE - 60
    GROUP BY 1, 2, 3
  `
  // Attribute conversions onto the session grain used by the INSERT above
  // (utm_source + landing_path), not lead.channel / conversion page_path.
  await sql`
    UPDATE facts_daily f
    SET leads = src.n
    FROM (
      SELECT
        CASE
          WHEN s.found THEN (s.started_at AT TIME ZONE 'UTC')::date
          ELSE (l.created_at AT TIME ZONE 'UTC')::date
        END AS day,
        CASE
          WHEN s.found THEN COALESCE(NULLIF(s.utm_source, ''), 'direct')
          ELSE COALESCE(NULLIF(v.first_source, ''), 'direct')
        END AS source,
        CASE
          WHEN s.found THEN COALESCE(NULLIF(s.landing_path, ''), '/')
          ELSE COALESCE(NULLIF(v.first_landing, ''), '/')
        END AS landing_path,
        COUNT(*)::int AS n
      FROM leads l
      LEFT JOIN visitors v ON v.id = COALESCE(
        l.visitor_id,
        (SELECT id FROM visitors WHERE lead_ref = l.lead_ref LIMIT 1)
      )
      LEFT JOIN LATERAL (
        SELECT started_at, utm_source, landing_path, true AS found
        FROM sessions
        WHERE visitor_id = v.id
          AND started_at <= l.created_at
        ORDER BY started_at DESC
        LIMIT 1
      ) s ON true
      WHERE l.created_at >= CURRENT_DATE - 60
        AND v.id IS NOT NULL
      GROUP BY 1, 2, 3
    ) src
    WHERE f.day = src.day AND f.source = src.source AND f.landing_path = src.landing_path
  `
  await sql`
    UPDATE facts_daily f
    SET revenue_idr = src.revenue
    FROM (
      SELECT
        CASE
          WHEN s.found THEN (s.started_at AT TIME ZONE 'UTC')::date
          ELSE (b.created_at AT TIME ZONE 'UTC')::date
        END AS day,
        CASE
          WHEN s.found THEN COALESCE(NULLIF(s.utm_source, ''), 'direct')
          ELSE COALESCE(NULLIF(v.first_source, ''), 'direct')
        END AS source,
        CASE
          WHEN s.found THEN COALESCE(NULLIF(s.landing_path, ''), '/')
          ELSE COALESCE(NULLIF(v.first_landing, ''), '/')
        END AS landing_path,
        COALESCE(SUM(b.value_idr), 0) AS revenue
      FROM bookings b
      LEFT JOIN leads l ON l.id = b.lead_id
      LEFT JOIN visitors v ON v.id = COALESCE(
        l.visitor_id,
        (SELECT id FROM visitors vis WHERE vis.lead_ref = l.lead_ref LIMIT 1)
      )
      LEFT JOIN LATERAL (
        SELECT started_at, utm_source, landing_path, true AS found
        FROM sessions
        WHERE visitor_id = v.id
          AND started_at <= b.created_at
        ORDER BY started_at DESC
        LIMIT 1
      ) s ON true
      WHERE b.created_at >= CURRENT_DATE - 60
        AND v.id IS NOT NULL
      GROUP BY 1, 2, 3
    ) src
    WHERE f.day = src.day AND f.source = src.source AND f.landing_path = src.landing_path
  `
}
