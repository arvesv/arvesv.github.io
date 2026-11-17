const ALLOWED_ORIGIN = 'https://www.arvesv.com';

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
};

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            ...CORS_HEADERS,
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store',
        },
    });
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname !== '/api/counter' && url.pathname !== '/api/counter/') {
            return new Response('Not Found', { status: 404 });
        }

        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: CORS_HEADERS });
        }

        if (request.method === 'POST') {
            const row = await env.DB.prepare(
                `INSERT INTO page_views (page, views, updated_at)
                 VALUES ('home', 1, datetime('now'))
                 ON CONFLICT(page) DO UPDATE
                 SET views = views + 1, updated_at = datetime('now')
                 RETURNING views;`
            ).first();

            const views = typeof row?.views === 'number' ? row.views : 0;
            return jsonResponse({ views });
        }

        if (request.method === 'GET') {
            const row = await env.DB.prepare(
                `SELECT views FROM page_views WHERE page = 'home';`
            ).first();

            const views = typeof row?.views === 'number' ? row.views : 0;
            return jsonResponse({ views });
        }

        return new Response('Method Not Allowed', {
            status: 405,
            headers: {
                ...CORS_HEADERS,
                Allow: 'GET, POST, OPTIONS',
            },
        });
    },
};
