# 🌐 Collectarr website & manual

The public website and searchable user manual for
[Collectarr](https://github.com/collectarr/collectarr-app), a free, open-source,
local-first collection manager for **Music**, **Games**, and **Comics** (v1.0.0 and later).

Live site: <https://collectarr.github.io/collectarr-page/>

**License:** [GNU AGPLv3 only](LICENSE) (`AGPL-3.0-only`), like the rest of
Collectarr. Earlier versions were MIT-licensed; that notice is kept in
[LICENSES/MIT-legacy.txt](LICENSES/MIT-legacy.txt). Screenshots, fonts and other
third-party assets keep their own licenses.

## ✨ What is on the site

- **Landing page** with a kind switcher in the header, showcasing active collection libraries (Music, Games, Comics) and ecosystem roadmap.
- **Dedicated kind pages** for **Music**, **Games**, and **Comics** with cataloging methods, features, deep dives (discs, hardware & toys, grading & slabs), comparisons, FAQs and community links.
- **What's New feeds** for all releases and dedicated feeds for Comics, Games, and Music: a version archive with a Features/Fixes filter, built from the published GitHub release notes (v1.0.0 through v1.5.0).
- **Contact & Help Center** with diagnostics guidance, log file paths across desktop/mobile/web, and kind-specific discussion links.
- **User manual** (Starlight) covering library views, domain editors, multi-disc tracks, completeness tiers, slabbed grading, scoped credits, custom fields, offline covers, import/export, loans, statistics, backups, and sync. Search works on desktop and mobile.
- **Dark and light theme** with a toggle in the header. The choice is shared with the manual.

Music, Games, and Comics are released and supported. Unreleased kinds (Movies, Books) remain planned on the roadmap; see [AGENTS.md](AGENTS.md) for content rules.

## 📸 Screenshots

Screenshots in the manual and on the landing page are captured from the real
application with sanitized fictional data. No private credentials, account
details or copyrighted CLZ screenshots are published. See
[screenshot provenance](docs/screenshot-provenance.md) and the
[content review](docs/content-review.md).

## 🧭 Familiar, independently written

Collectarr is an independent **clean-room implementation inspired by CLZ
workflows**, with its own code, assets and documentation. It is not affiliated
with or endorsed by CLZ; the site and guide are written for Collectarr's actual
behavior.

## 📖 Read and contribute

The site is static and does not need a database, account or API server. Source:
[collectarr/collectarr-page](https://github.com/collectarr/collectarr-page). The
included workflow publishes it to GitHub Pages.

<details>
<summary>Local preview and editing</summary>

Use Node 22.19+ (Node 24 recommended):

```sh
npm ci
npm run dev
npm run build
npm run check:links
npm run check:browser   # needs `npm run preview` running
```

Where things live:

- `src/pages/` landing, kind (music, games, comics), What's New and contact pages.
- `src/components/` shared header, footer, FAQ, release timeline and theme tokens.
- `src/data/releases.ts` release notes shown on What's New. Add a new entry at the
  top of the list for each stable release.
- `src/content/docs/` the manual (Markdown).

Colours come from the theme tokens in `src/components/ThemeHead.astro`; use
`var(--bg)`, `var(--text)` and friends instead of hardcoded colours so both
themes keep working.

Write only about shipped, supported features. See [AGENTS.md](AGENTS.md).

</details>
