// Curated from the published GitHub release notes of collectarr/collectarr-app.
// Only stable releases (v1.0.0 and later) are listed; 0.x builds were prototypes.
export interface Release {
  version: string;
  date: string;
  summary: string;
  notice?: string;
  features: string[];
  fixes: string[];
  docker?: string;
}

export const releasesUrl = 'https://github.com/collectarr/collectarr-app/releases';
export const releaseUrl = (version: string) => `${releasesUrl}/tag/v${version}`;

export const releases: Release[] = [
  {
    version: '1.2.0',
    date: 'October 18, 2026',
    summary: 'Regular expression search, automatic backups, sort-name ordering, an in-app updater and a long list of Music polish.',
    notice:
      'On Windows the library and its backups now live in %APPDATA%\\Collectarr instead of Collectarr\\Collectarr. Existing data is not moved: close Collectarr and move collectarr-library.sqlite (with any -wal and -shm files) and the backups folder up one level before starting this version.',
    features: [
      'Search accepts regular expressions after “matches:” (for example matches: ^the\\s), ignoring letter case. Matching tracks are highlighted and an invalid expression outlines the box in red with the reason on hover.',
      'Automatic backups: desktop and mobile apps copy the whole database once a day at startup and before every restore or clear, keep copies for one week to forever, and restore any of them from Settings > Data.',
      'Folders are ordered by Sort Name while still showing the real name. Manage Pick Lists fills a Sort Name as you type (“The End Records” gives “End Records, The”).',
      'Settings has an Updates tab to check for, download and install new versions on the Stable, Beta or Nightly channel.',
      'Add Albums has a Catalog No. tab that searches Core by catalog number, and the Barcode field has a scan button.',
      'Add/Update from Core Settings is now a dialog: choose per non-personal field whether Add downloads it and whether Update skips, fills or replaces it.',
    ],
    fixes: [
      'Folders and the Title, Artist, Format and Genre sorts ignore case and accents and use natural number order.',
      'Cards show each entry’s Collection Status with its icon and colour, and follow changes made in the edit dialog.',
      'Loan opens a Loan Album page under the Loan Manager header instead of a dialog.',
      'XML, CSV/TXT and PDF exports show a progress window while generating.',
      'Horizontal Cards no longer overflow at small cover sizes and the cover size and spacing sliders cover their full range.',
      'Artist, Signed By and other name lists pick several names in one dialog with a Save button.',
    ],
  },
  {
    version: '1.1.0',
    date: 'October 16, 2026',
    summary: 'Reworked search, Add dialog, settings, loans and statistics, plus CATraxx import.',
    features: [
      'Settings gains Sorting, Auto Capitalization and Localization (currency, number format, date display and entry order).',
      'Albums get automatic sort titles (“Wall, The”) on Add, Edit and import; Core derives them for new catalog items.',
      'Imports CATraxx XML exports with discs, vinyl sides, tracks, credits, ratings and purchase details.',
      'Export to XML asks for confirmation and saves complete albums, from the menu and from a selection.',
      'Borrowers have a sort name, email and address, and Loan opens a lend form with a loaner picker and a due date two weeks out.',
      'New sorts for Has Back, Has Front, Format and Genre, plus Core ID and Back Cover columns.',
      'The search field, its suggestions and scope menu are redesigned; the Add dialog has Artist & Title and Barcode tabs, compact results and a “Confirm your selection” sheet.',
      'Libraries open on the In Collection status filter.',
    ],
    fixes: [
      'Albums without covers no longer show another entry’s Core cover in Covers and Shelves.',
      'Release Year exports, statistics and date sorting now work for year-only dates.',
      'Music folders default to Artist instead of the first available group.',
      '“Wrap column content” wraps long list values instead of cutting them off.',
      'Cancelling an untouched album editor no longer asks to discard changes.',
      'Ctrl + mouse wheel zooms wherever the pointer is, also over lists and panels.',
    ],
  },
  {
    version: '1.0.0',
    date: 'October 13, 2026',
    summary: 'The first stable Music release: the album catalog and personal-library model.',
    notice:
      'Windows and macOS downloads are not signed or notarized. Pre-release development databases are not converted automatically; future schema changes use explicit migrations.',
    features: [
      'Organize albums with contained discs and tracks, album and disc credits, partial dates and disc-specific recording and technical metadata.',
      'Add albums from Core, search by barcode, edit catalog metadata and propose corrections while keeping personal collection data separate.',
      'Browse with folders, search, filters, configurable columns and sorting.',
      'Manage front/back covers, personal images, custom fields, pick lists, loans and statistics.',
      'Import and export collection data, create backups and optionally connect to Collectarr Sync.',
    ],
    fixes: [
      'Stabilized editor state when switching between items and preserved grouped selection and cover sizing.',
      'Improved form-control alignment, dialog navigation, pick-list usage counts and custom-value editing.',
      'Corrected macOS release packaging.',
    ],
    docker: 'ghcr.io/collectarr/collectarr-app-web:v1.0.0',
  },
];
