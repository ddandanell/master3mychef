-- Session quality, daily facts, sales link. Applied by scripts/migrate-command-center-warehouse.ts.

ALTER TABLE sessions ADD COLUMN IF NOT EXISTS ended_at timestamptz;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS pageview_count int NOT NULL DEFAULT 0;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS duration_ms bigint NOT NULL DEFAULT 0;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS bounced boolean NOT NULL DEFAULT true;

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS lead_ref text;
CREATE INDEX IF NOT EXISTS bookings_lead_ref_idx ON bookings (lead_ref);
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC);

CREATE INDEX IF NOT EXISTS events_session_occurred_idx ON events (session_id, occurred_at);

CREATE TABLE IF NOT EXISTS facts_daily (
  day date NOT NULL,
  source text NOT NULL DEFAULT 'direct',
  landing_path text NOT NULL DEFAULT '/',
  visitors int NOT NULL DEFAULT 0,
  sessions int NOT NULL DEFAULT 0,
  bounces int NOT NULL DEFAULT 0,
  page_views int NOT NULL DEFAULT 0,
  whatsapp int NOT NULL DEFAULT 0,
  forms int NOT NULL DEFAULT 0,
  leads int NOT NULL DEFAULT 0,
  duration_ms bigint NOT NULL DEFAULT 0,
  revenue_idr numeric NOT NULL DEFAULT 0,
  PRIMARY KEY (day, source, landing_path)
);

CREATE INDEX IF NOT EXISTS facts_daily_day_idx ON facts_daily (day DESC);
