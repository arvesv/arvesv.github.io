# Cloudflare D1 Page Counter Worker

Cloudflare Worker and D1 database configuration for the `/api/counter` endpoint used on the main page of [www.arvesv.com](https://www.arvesv.com/).

## Setup & Deployment

From the `cloudflare/` directory:

1. **Create the D1 database:**
   ```bash
   npx wrangler d1 create arvesv-page-counter
   ```

2. **Configure `database_id`:**
   Copy the `database_id` from the command output into `cloudflare/wrangler.toml`, replacing `REPLACE_WITH_D1_DATABASE_ID`.

3. **Apply the database schema:**
   ```bash
   npx wrangler d1 execute arvesv-page-counter --remote --file=schema.sql
   ```

4. **Deploy the Worker:**
   ```bash
   npx wrangler deploy
   ```

Once deployed on the `www.arvesv.com/api/counter*` route, `POST /api/counter` atomically increments and returns the `'home'` view count, and `GET /api/counter` returns the current count without incrementing.
