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
  await sql`
    UPDATE facts_daily f
    SET leads = src.n
    FROM (
      SELECT
        (created_at AT TIME ZONE 'UTC')::date AS day,
        COALESCE(NULLIF(channel, ''), 'direct') AS source,
        COALESCE(NULLIF(page_path, ''), '/') AS landing_path,
        COUNT(*)::int AS n
      FROM leads
      WHERE created_at >= CURRENT_DATE - 60
      GROUP BY 1, 2, 3
    ) src
    WHERE f.day = src.day AND f.source = src.source AND f.landing_path = src.landing_path
  `
  await sql`
    UPDATE facts_daily f
    SET revenue_idr = src.revenue
    FROM (
      SELECT
        (created_at AT TIME ZONE 'UTC')::date AS day,
        COALESCE(NULLIF(channel, ''), 'direct') AS source,
        COALESCE(NULLIF(landing_page, ''), '/') AS landing_path,
        COALESCE(SUM(value_idr), 0) AS revenue
      FROM bookings
      WHERE created_at >= CURRENT_DATE - 60
      GROUP BY 1, 2, 3
    ) src
    WHERE f.day = src.day AND f.source = src.source AND f.landing_path = src.landing_path
  `
}
