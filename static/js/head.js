// Default site-wide head script.
// Replace or extend as needed (e.g., analytics, feature flags, CSP nonces, etc.).
(function () {
    try {
        // Example: mark head script load
        console.debug('[site] head.js loaded');

        // Example stub: expose a tiny hook
        window.__SITE_HEAD__ = {
            loadedAt: new Date().toISOString()
        };
    } catch (e) {
        // Never break the page if this script errors
    }
})();
