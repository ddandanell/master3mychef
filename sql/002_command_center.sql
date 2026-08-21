-- Phase 1 command-center spine. Applied by scripts/migrate-command-center.ts.
-- Reserved later (do not create yet): bookings, decisions, seo_page_query_daily.
-- No secrets in this file.

CREATE TABLE IF NOT EXISTS properties (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  domain text NOT NULL UNIQUE,
  country_code text NOT NULL,
  region text,
  timezone text NOT NULL DEFAULT 'UTC',
  created_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO properties (slug, domain, country_code, region, timezone)
VALUES ('mychef-id', 'mychef.id', 'ID', 'Bali', 'Asia/Makassar')
ON CONFLICT (slug) DO NOTHING;

CREATE TABLE IF NOT EXISTS visitors (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  property_id bigint NOT NULL REFERENCES properties (id),
  lead_ref text NOT NULL UNIQUE,
  anonymous_id text,
  first_seen_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS visitors_property_id_idx ON visitors (property_id);

CREATE TABLE IF NOT EXISTS sessions (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  property_id bigint NOT NULL REFERENCES properties (id),
  visitor_id bigint NOT NULL REFERENCES visitors (id),
  client_session_id text NOT NULL UNIQUE,
  started_at timestamptz NOT NULL DEFAULT now(),
  landing_path text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  click_id text,
  click_id_type text
);

CREATE INDEX IF NOT EXISTS sessions_visitor_id_idx ON sessions (visitor_id);
CREATE INDEX IF NOT EXISTS sessions_property_started_idx ON sessions (property_id, started_at DESC);

CREATE TABLE IF NOT EXISTS events (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  property_id bigint NOT NULL REFERENCES properties (id),
  visitor_id bigint NOT NULL REFERENCES visitors (id),
  session_id bigint NOT NULL REFERENCES sessions (id),
  occurred_at timestamptz NOT NULL DEFAULT now(),
  event_name text NOT NULL,
  page_path text,
  service_area text,
  metadata jsonb
);

CREATE INDEX IF NOT EXISTS events_property_occurred_idx ON events (property_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS events_name_occurred_idx ON events (event_name, occurred_at DESC);
CREATE INDEX IF NOT EXISTS events_visitor_id_idx ON events (visitor_id);
CREATE INDEX IF NOT EXISTS events_page_path_idx ON events (page_path);

ALTER TABLE leads ADD COLUMN IF NOT EXISTS property_id bigint REFERENCES properties (id);
ALTER TABLE leads ADD COLUMN IF NOT EXISTS visitor_id bigint REFERENCES visitors (id);
ALTER TABLE leads ADD COLUMN IF NOT EXISTS lead_ref text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS page_path text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS channel text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status text;

ALTER TABLE leads ALTER COLUMN name DROP NOT NULL;
ALTER TABLE leads ALTER COLUMN email DROP NOT NULL;
ALTER TABLE leads ALTER COLUMN message DROP NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS leads_lead_ref_uidx ON leads (lead_ref);

CREATE INDEX IF NOT EXISTS leads_property_created_idx ON leads (property_id, created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);

UPDATE leads
SET property_id = (SELECT id FROM properties WHERE slug = 'mychef-id'),
    status = COALESCE(status, 'form')
WHERE property_id IS NULL;
