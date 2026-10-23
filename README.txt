MOOC MASTERY SEO FIXES

Replace these two files at the root of the existing project:
- sitemap.xml
- sw.js

Changes:
- sitemap.xml no longer references the missing /asset_image/og-cover.png. The optional image entry and image namespace have been removed; all 12 page URLs remain.
- sw.js pre-caches /assets/level.json and /assets/badges.json and bumps the cache version so the updated service worker can take effect.

Keep the existing assets/ folder and filenames unchanged. The main app fetches these two metadata files from assets/.
