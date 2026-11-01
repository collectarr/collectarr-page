// Curated from the published GitHub release notes of collectarr/collectarr-app.
// Only stable releases (v1.0.0 and later) are listed; 0.x builds were prototypes.
export interface Release {
  version: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  notice?: string;
  features: string[];
  fixes: string[];
  docker?: string;
  kind?: 'music' | 'games' | 'comics' | 'app';
  productName?: string;
}

export const releasesUrl = 'https://github.com/collectarr/collectarr-app/releases';
export const releaseUrl = (version: string) => `${releasesUrl}/tag/v${version}`;

export const releases: Release[] = [
  {
    version: '1.5.0',
    date: 'October 31, 2026',
    title: 'Comics collection library, slabbed covers and grading, offline covers and Core compare',
    kind: 'comics',
    productName: 'Collectarr Comics',
    tags: ['comics', 'slabs', 'grading', 'offline covers', 'compare', 'imports'],
    summary:
      'Introduces the Comics collection library with CLZ XML/CSV import, 11 editor tabs, series and issue runs, slabbed covers and CGC/CBCS grading, publisher logos, offline cover downloading, and Compare & Propose to Core.',
    notice:
      'Covers linked from external sites (such as CLZ) are automatically downloaded locally after an import to remain available offline. You can also trigger Maintenance > Download Covers for an existing library.',
    features: [
      'Comics library: catalog single issues, series and issue runs with variants (e.g. #2A), publication Age (Golden, Silver, Bronze, Copper, Modern), partial publication dates, and typed Add/Edit with eleven CLZ tabs.',
      'Slabbed covers and grading: CGC, CBCS, and PGX grading status, slab certification numbers, grade ribbons, custom labels with your own artwork, and realistic slab framing in cards, covers, shelves, and the details panel.',
      'Series & Issue Add dialog: browse issues beside the series list as a cover grid or list, select all or issue runs, with variant details, creator lists, and character appearances.',
      'Missing Comics tool: view gaps in series runs with filters for variants, on-order, and unreleased issues, compact issue ranges, and PDF download.',
      'Publisher logos: details panel displays publisher logos for Marvel, DC, Image, Dark Horse, IDW, Viz Media, Kodansha, Shueisha, Tokyopop, Archie, Dynamite, Valiant, Vertigo, Fantagraphics, and Panini.',
      'Offline covers: external cover URLs are downloaded locally after import or via Maintenance > Download Covers for offline viewing.',
      'Compare & Propose to Core: compare personal metadata side-by-side with Core catalog entries, and propose edited fields directly to Core reviewers.',
      'Imports: losslessly import CLZ Comics Web XML, Comic Collector XML, and CSV spreadsheets, starting immediately without a review prompt.',
    ],
    fixes: [
      'Next and Previous in the edit dialog save changes behind a busy window and advance to the neighbouring item instead of asking to discard changes.',
      'Covers and Shelves place the tick box bottom left and collection status bottom right, showing an unticked box on hover with a mouse.',
      'Empty collections display a friendly blue guidance banner pointing to the Add button.',
      'Multi-value fields (Genre, Tags) keep caret focus after pressing Enter for rapid consecutive entry.',
      'Dragging the cover-size slider in large libraries stays smooth without rebuilding folder trees on every step.',
      'Pick-list dropdowns preserve 5 px above and below values, opening empty lists cleanly.',
    ],
    docker: 'ghcr.io/collectarr/collectarr-app-web:v1.5.0',
  },
  {
    version: '1.4.0',
    date: 'October 26, 2026',
    title: 'Games Add workflow, edition chooser, Find Online covers and localization',
    kind: 'games',
    productName: 'Collectarr Games',
    tags: ['games', 'add workflow', 'covers', 'localization', 'sorting'],
    summary:
      'Add Games platform picker with edition confirmation sheet, Find Online cover art, formatted game descriptions, PriceCharting links, and comprehensive localization formats.',
    features: [
      'Add Games platform picker: select gaming systems grouped by console generation with starred favorites directly inside the search field.',
      'Confirm selection sheet: compact sheet displaying cover, platform, release year, edition, and region before adding.',
      'Find Online covers: fetch and apply official high-resolution game box covers directly from the Covers tab.',
      'PriceCharting & eBay links: quick links to historical PriceCharting values and eBay sold listings directly under the value box.',
      'Formatted descriptions: details pane renders bold, italic, underlined text, line breaks, and bulleted/numbered lists.',
      'Localization settings: 17 date display formats, 6 number formats, and custom currency display options (e.g. US$ or USD).',
    ],
    fixes: [
      'Games and Hardware default to sorting by Platform then Title, with built-in sorting favorites.',
      'Pick lists start empty and automatically clean up values no longer used by any library entries.',
      'Managing pick lists switches directly without layout flicker, and single-value dropdowns match native reference styling.',
      'Saving items with an empty title or quantity safely stores empty/zero values without library crashes.',
      'Flow Carousel and Shelves maintain exact cover aspect ratios without top/bottom black bars.',
      'Collection Status menu matches CLZ styling with dimmed bold group headings and indented statuses.',
    ],
    docker: 'ghcr.io/collectarr/collectarr-app-web:v1.4.0',
  },
  {
    version: '1.3.0',
    date: 'October 24, 2026',
    title: 'Games, Hardware and Toys library, CLZ import and dark/light theme polish',
    kind: 'games',
    productName: 'Collectarr Games',
    tags: ['games', 'hardware', 'toys', 'import', 'themes'],
    summary:
      'Introduction of Collectarr Games, Hardware and Toys-to-Life collections, CLZ Games CSV/XML import, collection statistics, and reference light theme alignment.',
    features: [
      'Games collection library: multi-platform video game cataloging across console generations with Loose, CIB, and New completeness tiers.',
      'Independent Hardware & Toys-to-Life workspaces: catalog home/handheld consoles, controllers, and interactive figures (Amiibo, Skylanders) with serial privacy.',
      'CLZ Games import: lossless import of CLZ Games XML and CSV exports, including loan history and custom fields.',
      'Collection statistics: interactive visual charts for platforms, values, completeness, and collection status.',
      'Light theme parity: reference-matched light theme across lists, folder sidebars, toolbars, dialogs, and settings.',
    ],
    fixes: [
      'Toolbar split buttons and dialog close controls match reference appearance.',
      'List rows, cards, and covers display collection status icons with Font Awesome Free glyphs.',
      'Loan Manager displays tabbed views, empty row styling, and quick borrower management.',
      'CSV/TXT and XML exports handle empty selections gracefully with progress feedback.',
      'Numeric column headers in list views align right directly over their numeric values.',
      'Zoom web app with Ctrl + mouse wheel just like the desktop application.',
    ],
    docker: 'ghcr.io/collectarr/collectarr-app-web:v1.3.0',
  },
  {
    version: '1.2.0',
    date: 'October 18, 2026',
    title: 'Regex search, automatic backups and an in-app updater',
    kind: 'music',
    productName: 'Collectarr Music',
    tags: ['search', 'backups', 'sort names', 'updates', 'add albums'],
    summary: 'Regular expression search, automatic backups, sort-name ordering, an in-app updater and a long list of Music polish.',
    notice:
      'On Windows the library and its backups now live in %APPDATA%\Collectarr instead of Collectarr\Collectarr. Existing data is not moved: close Collectarr and move collectarr-library.sqlite (with any -wal and -shm files) and the backups folder up one level before starting this version.',
    features: [
      'Search accepts regular expressions after “matches:” (for example matches: ^the\s), ignoring letter case. Matching tracks are highlighted and an invalid expression outlines the box in red with the reason on hover.',
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
    title: 'Reworked search, Add dialog and settings, plus CATraxx import',
    kind: 'music',
    productName: 'Collectarr Music',
    tags: ['import', 'loans', 'settings', 'sorting', 'add albums'],
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
    title: 'The first stable Music release',
    kind: 'music',
    productName: 'Collectarr Music',
    tags: ['music', 'albums', 'credits', 'backups', 'sync'],
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
