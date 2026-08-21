-- GA-parity dimensions on first-party warehouse. Applied by scripts/migrate-ga-parity.ts.
-- Stores the same class of data as GA4 (source, device, geo, page, engagement)
-- without storing raw IP addresses.

ALTER TABLE visitors ADD COLUMN IF NOT EXISTS first_source text;
ALTER TABLE visitors ADD COLUMN IF NOT EXISTS first_medium text;
ALTER TABLE visitors ADD COLUMN IF NOT EXISTS first_landing text;
ALTER TABLE visitors ADD COLUMN IF NOT EXISTS session_count int NOT NULL DEFAULT 0;

ALTER TABLE sessions ADD COLUMN IF NOT EXISTS utm_medium text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS hostname text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS language text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS device_category text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS os_name text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS browser text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS screen text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS country text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS region text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS city text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS referrer_url text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS exit_path text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS engaged boolean NOT NULL DEFAULT false;

ALTER TABLE events ADD COLUMN IF NOT EXISTS page_title text;
ALTER TABLE events ADD COLUMN IF NOT EXISTS page_location text;
ALTER TABLE events ADD COLUMN IF NOT EXISTS hostname text;

CREATE INDEX IF NOT EXISTS sessions_country_idx ON sessions (country);
CREATE INDEX IF NOT EXISTS sessions_device_idx ON sessions (device_category);
CREATE INDEX IF NOT EXISTS sessions_source_medium_idx ON sessions (utm_source, utm_medium);
