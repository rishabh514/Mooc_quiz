MOOC MASTERY — STATIC HTML SEO ROUTE PACKAGE

WHAT THIS PACKAGE DOES
- Keeps the existing root index.html React quiz application and its UI/quiz logic.
- Adds /courses/ as a crawlable directory and ten independently addressable static course-guide routes.
- Adds a small "Explore all course guides" link to the existing landing page.
- Refreshes the homepage ItemList structured data, sitemap.xml and llms.txt to list all ten subjects.
- Updates the service worker cache version and best-effort pre-caches the new course routes plus all ten known question-bank JSON names.

IMPORTANT ASSET STEPS
- The assets/ and asset_image/ directories are intentionally empty in this ZIP.
- Copy your existing question-bank JSON files and referenced icon files into assets/ (matching the filenames and capitalisation expected in index.html).
- Copy your subject covers and other image files into asset_image/ exactly as in the original project.
- The root index.html loads question banks from assets/ and subject imagery from asset_image/. Do not rename files unless you also update the references in index.html.
- favicon.ico, manifest.json, robots.txt, sitemap.xml, llms.txt, seo-keywords.json, sw.js and vercel.json are included from the source package or refreshed where needed.

ROUTES
- /                         Existing practice app (preserved)
- /courses/                 Static course directory
- /courses/<slug>/          Independent static HTML course guide
- Each guide's Start Practising link uses the existing /#<subject_id> deep-link mechanism, without replacing the quiz engine.

DEPLOYMENT
1. Back up the live project before replacing any files.
2. Merge this package into the project root; populate assets/ and asset_image/ with your existing assets.
3. Deploy to Vercel as a static site using the same project/root configuration as before.
4. After deployment, test the home screen and all quiz features, then open /courses/ and each course URL directly.
5. In Google Search Console, submit /sitemap.xml and use URL Inspection on representative course pages.

VALIDATION NOTE
The original application JavaScript and quiz UI are intentionally left intact apart from the small course-directory link. As with any deployment, functionality must be smoke-tested against the real assets and hosting configuration before publishing.
