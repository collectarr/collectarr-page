# Collectarr website and user manual

A separate static product site and shared English manual. Kind chapters describe differences without duplicating the common guide. Screenshots use an isolated, fictional demo database.

## Run locally

Node 22.19+ (Node 24 recommended) and npm are required.

```sh
npm ci
npm run dev
```

Open the URL printed by Astro (by default http://127.0.0.1:4321/collectarr-site/).

```sh
npm run build
npm run check:links
npm run preview
```

## Hosting

The default configuration prepares https://collectarr.github.io/collectarr-site/. Creating this local repository does not publish that address. On GitHub, use Settings → Pages → GitHub Actions, then run the Publish workflow. Publishing is deliberately manual.

For a server or custom domain, build with SITE_URL=https://your-domain.example and SITE_BASE=/ and serve dist/ as static files. Preserve directory index handling and the 404 page. No API server, account or database is needed for the manual.

The app uses COLLECTARR_MANUAL_URL to select the manual root. Its expected Pages URL is https://collectarr.github.io/collectarr-site/manual/. A different host needs a corresponding app build define.

## Editing the guide

Write articles in src/content/docs/manual/. Put common workflows in common chapters and kind differences under kinds/. Keep screenshots under src/assets/screenshots/; retain their capture provenance in docs/screenshot-provenance.md. Run the build and local link check after changes. Do not copy CLZ text, screenshots or font files into the site.

The manual describes the beta app, not a compatibility or migration layer. Do not document planned functionality as available. Before changing instructions, inspect the related Collectarr controls and repository implementation.

## Browser checks

With the preview server running:

```sh
npx playwright install chromium
npm run check:browser
```

Set BROWSER_CHANNEL=chrome to use an installed Chrome, or PREVIEW_URL to test another base URL. The check uses an isolated profile and verifies manual navigation, search, all nine kinds, responsive widths and browser errors.
