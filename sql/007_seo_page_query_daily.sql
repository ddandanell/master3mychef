-- GSC warehouse. Applied by scripts/migrate-backend-motor.ts / sync-gsc-daily.ts

CREATE TABLE IF NOT EXISTS seo_page_query_daily (
  day date NOT NULL,
  property_id bigint REFERENCES properties (id),
  page text NOT NULL DEFAULT '/',
  query text NOT NULL DEFAULT '',
  clicks int NOT NULL DEFAULT 0,
  impressions int NOT NULL DEFAULT 0,
  ctr numeric,
  position numeric,
  PRIMARY KEY (day, page, query)
);

CREATE INDEX IF NOT EXISTS seo_page_query_daily_day_idx ON seo_page_query_daily (day DESC);
CREATE INDEX IF NOT EXISTS seo_page_query_daily_page_idx ON seo_page_query_daily (page);
