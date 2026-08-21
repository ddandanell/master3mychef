-- Command Center ops tables. Applied by scripts/migrate-command-center-ops.ts.

ALTER TABLE leads ADD COLUMN IF NOT EXISTS stage text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS assigned_to text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS last_contact_at timestamptz;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS next_action text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS guest_count text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS estimated_value_idr numeric;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS city text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS country text;

UPDATE leads SET stage = 'new' WHERE stage IS NULL;

CREATE TABLE IF NOT EXISTS bookings (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  lead_id bigint REFERENCES leads (id),
  property_id bigint REFERENCES properties (id),
  value_idr numeric,
  cost_idr numeric,
  service_area text,
  city text,
  country text,
  landing_page text,
  channel text,
  status text NOT NULL DEFAULT 'confirmed'
);

CREATE TABLE IF NOT EXISTS ops_recommendations (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  priority text NOT NULL,
  problem text NOT NULL,
  evidence text,
  action text NOT NULL,
  expected_impact text,
  status text NOT NULL DEFAULT 'open',
  owner text,
  page_path text,
  result text
);

CREATE TABLE IF NOT EXISTS ops_tasks (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  recommendation_id bigint REFERENCES ops_recommendations (id),
  title text NOT NULL,
  status text NOT NULL DEFAULT 'suggested',
  assignee text,
  result text
);

CREATE TABLE IF NOT EXISTS ops_changes (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  page_path text,
  change_type text NOT NULL,
  summary text NOT NULL,
  actor text
);

CREATE TABLE IF NOT EXISTS ops_alerts (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  severity text NOT NULL,
  title text NOT NULL,
  detail text,
  acknowledged boolean NOT NULL DEFAULT false
);

INSERT INTO ops_alerts (severity, title, detail)
SELECT 'medium',
  'First-party tracking is live, volume is still mostly test data',
  'Collect and form leads are writing to Neon. Production traffic will fill the Command Center after /api/collect is deployed. GSC, Ads, WhatsApp inbox, and bookings are not connected yet.'
WHERE NOT EXISTS (SELECT 1 FROM ops_alerts LIMIT 1);
