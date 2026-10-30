# 🌐 Collectarr website & manual

The public website and searchable user manual for
[Collectarr](https://github.com/collectarr/collectarr-app), a free, open-source,
local-first collection manager. Music is the only library kind released so far
(v1.0.0 and later); the shared guides are written to grow when other kinds ship.

Live site: <https://collectarr.github.io/collectarr-page/>

**License:** [GNU AGPLv3 only](LICENSE) (`AGPL-3.0-only`), like the rest of
Collectarr. Earlier versions were MIT-licensed; that notice is kept in
[LICENSES/MIT-legacy.txt](LICENSES/MIT-legacy.txt). Screenshots, fonts and other
third-party assets keep their own licenses.

## ✨ What is on the site

- **Landing page** with a kind switcher in the header, in the style of
  established collection-database sites.
- **Music page** with cataloging methods, features, formats and discs, a
  comparison, an FAQ and community links.
- **What's New** for Music and for all releases: a version archive with a
  Features/Fixes filter, built from the published GitHub release notes
  (stable v1.0.0 and later; earlier 0.x builds were prototypes).
- **Contact & Help Center** with diagnostics guidance and community links.
- **User manual** (Starlight) covering library views, the album editor, discs and
  tracks, scoped credits, custom fields, images, import/export, loans,
  statistics, backups, optional sync and sharing. Search works on desktop and
  mobile.
- **Dark and light theme** with a toggle in the header. The choice is shared with
  the manual.

Only Music is released. Other kinds must not be presented as available; see
[AGENTS.md](AGENTS.md) for the content rules.

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

- `src/pages/` landing, kind, What's New and contact pages.
- `src/components/` shared header, footer, FAQ, release timeline and theme tokens.
- `src/data/releases.ts` release notes shown on What's New. Add a new entry at the
  top of the list for each stable release.
- `src/content/docs/` the manual (Markdown).

Colours come from the theme tokens in `src/components/ThemeHead.astro`; use
`var(--bg)`, `var(--text)` and friends instead of hardcoded colours so both
themes keep working.

Write only about shipped, supported features. See [AGENTS.md](AGENTS.md).

</details>
