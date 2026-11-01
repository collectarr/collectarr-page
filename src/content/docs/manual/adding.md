---
title: Adding items
description: "Adding items — Collectarr user manual"
---

Collectarr provides intuitive, domain-specific ways to catalog your media—whether searching the online **Core** database, scanning barcodes, selecting issue runs, using camera recognition, or typing details manually.

## 1. Adding by Title & Catalog Search

The primary way to add released items is through online search:

1. Click the **+ Add** button in the main toolbar (or press `Ctrl+N` / `Cmd+N`). On mobile devices, tap the round floating **+** button to open the full-screen touch workflow.
2. Ensure the search tab is active (**Artist & Title** for Music, **Title & Platform** for Games, **Series** for Comics).
3. Type the search query:
   - **Music**: Type artist name, album title, or both.
   - **Games**: Select your gaming platform from the integrated platform picker (grouped by console generation with starred favorites), then type the game title. Each game is suggested once per system.
   - **Comics**: Type the series title. Collectarr lists matching series with issue counts and lets you browse all issues as an adaptive cover grid or list.
4. Preview candidates in the preview pane or confirmation sheet:
   - **Music**: Inspect disc count, format (Vinyl LP, CD, Cassette), tracklist, record label, and release year.
   - **Games**: Inspect platform, release year, edition, and region in the compact *Confirm your selection* sheet.
   - **Comics**: Inspect issue runs, variant covers (#1A, #1B Foil), publication age, cover dates, and creators. You can tick individual issues or use the check all toggle to add complete runs in one action.
5. Choose your target **Collection** tab and **Collection Status** (*In Collection* for owned items, *Wish List* for wanted items).
6. Click **Add to Collection** (or **Add to Wish List**).

The entry is saved directly to your local database.

---

## 2. Adding by Barcode

Adding by barcode guarantees an exact match for retail physical packaging:

1. Open the Add dialog and switch to the **Barcode** tab.
2. Enter or paste the 12-digit (UPC) or 13-digit (EAN/ISBN) code.
3. **Camera Scanning**: Click the **Scan Barcode** icon to open the camera scanner sheet. Point your webcam or mobile camera at the barcode.
   - **Comic Barcodes**: Scans 5-digit comic add-on codes to identify the specific issue number and variant printing.
4. **Instant Match**: If a single edition matches, its full metadata and cover load automatically. Click **Add to Collection**.
5. **Multiple Editions**: If several pressings or regional variants share a barcode, choose your specific edition from the list.
6. **Unrecognized Barcodes**: If a barcode is not yet in Core, Collectarr offers to open **Add Manually** with the barcode prefilled.

---

## 3. Adding Comics Series & Issue Runs

The Comics Add workflow is purpose-built for floppy collectors:
1. Open **+ Add Comics**; the dialog opens directly on the **Series** tab.
2. Start typing a series name (e.g. *Batman*, *Saga*, *Ultimate Spider-Man*). As you type, matching series suggestions appear with blue badges showing issues already in your library.
3. Select a series to view its complete issue checklist beside the series list.
4. Toggle between **Cover Grid** or **Issue List** view, and use **Sort Issues** to view chronological or reverse order.
5. Check individual issues, select an issue range, or tick all issues.
6. Review the variant, cover date, price, and creators in the preview before saving.

---

## 4. Native Mobile Add Workflow

On iOS and Android, Collectarr features a dedicated native mobile Add experience:
- **Full-Screen Canvas**: The Add dialog gives way to a full-screen workflow tailored for single-handed mobile use.
- **Touch-Sized Tabs**: Large touch targets for search, barcode scanning, and platform filters.
- **Floating Action Button**: A round, elevated floating plus button provides quick access from anywhere in your library.
- **System Inset Awareness**: Collection tabs and buttons float safely above system navigation bars and gesture insets.

---

## 5. Adding by Catalog Number

For vinyl records, classical recordings, and promotional releases lacking retail barcodes:
1. Open **+ Add** and select the **Catalog Nr** tab.
2. Enter the matrix or catalog identifier (e.g. `BST 81535`, `COL-45012`).
3. Select the matching entry from the catalog results list and add it to your collection.

---

## 6. Adding Manually

For unreleased prototypes, indie comics, private vinyl pressings, or custom hardware:
1. Click **Add Manually** in the Add dialog toolbar.
2. Complete the tabbed editor:
   - **Main**: Title, sort title, dates, publisher/label/developer, format, barcode, and catalog numbers.
   - **Domain Tabs**: Discs and tracks (Music), completeness and platform (Games), or creators, characters, and ages (Comics).
   - **Personal**: Condition, purchase date, purchase price, store, storage box/location, rating, and private notes.
   - **Covers**: Upload custom front and back photography or find covers online.
   - **Custom Fields**: Populate user-defined custom fields.
3. Click **Save** to create the entry.

---

## 7. Pre-fill Settings and Defaults

To speed up batch cataloging:
- Open **Settings → Pre-fill Settings**.
- Configure defaults such as **Collection Status** (*In Collection*), **Purchase Date** (*Today*), **Store**, and **Storage Location** / **Storage Box**.
- Newly added items automatically inherit these presets.

---

## 8. Linking and Proposing to Core

- **Link to Core**: Manually added entries or spreadsheet imports can be linked to the online Core catalog later using **Link** in the inspector.
- **Compare & Propose to Core**: If you notice an error or have additional metadata (such as unlisted variants or credits), select **Propose to Core** in the editor. Collectarr shows a side-by-side comparison of your values versus Core's, submitting only your edited fields for community review while keeping private data local.
