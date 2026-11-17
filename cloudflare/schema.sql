CREATE TABLE IF NOT EXISTS page_views (
    page TEXT PRIMARY KEY,
    views INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO page_views (page, views)
VALUES ('home', 0)
ON CONFLICT(page) DO NOTHING;
