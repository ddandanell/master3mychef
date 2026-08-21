-- Backend motor: PostHog bridge, experiments, event indexes.
-- Applied by scripts/migrate-backend-motor.ts

ALTER TABLE visitors ADD COLUMN IF NOT EXISTS posthog_distinct_id text;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS posthog_session_id text;

CREATE INDEX IF NOT EXISTS events_name_occurred_idx ON events (event_name, occurred_at DESC);
CREATE INDEX IF NOT EXISTS visitors_posthog_distinct_idx ON visitors (posthog_distinct_id);

CREATE TABLE IF NOT EXISTS ops_experiments (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  flag_key text NOT NULL,
  variants jsonb,
  hypothesis text NOT NULL,
  started_at timestamptz,
  ended_at timestamptz,
  status text NOT NULL DEFAULT 'running',
  result_summary text,
  owner text
);

CREATE INDEX IF NOT EXISTS ops_experiments_status_idx ON ops_experiments (status);
