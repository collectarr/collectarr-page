---
title: Browsing, search and filters
description: "Browsing, search and filters — Collectarr user manual"
---

Collectarr provides flexible browsing presentations, folder grouping trees, regular expression searching, and an alphabet jump bar to help you navigate collections of any size.

## 1. Library View Modes

You can switch between four distinct display views using the view selector in the main toolbar:

1. **List View**: A high-density spreadsheet-style tabular view in customizable columns. Top-aligned cells, right-aligned numeric headers, and full keyboard navigation. See [Columns and sorting](../columns-sorting/).
2. **Cards View**: Information cards displaying cover artwork alongside identifying metadata:
   - **Horizontal Cards**: Artist/Developer/Series and title with format, year, condition, and status badges.
   - **Comics Vertical Cards**: Formatted like comic back-issue bins—series name sits above a portrait cover, with the issue number (e.g. `#2A`) and release date below it, and the grade in an outlined pill or slab frame.
3. **Covers View**: Edge-to-edge cover artwork grid. Slabbed comics are rendered in realistic physical cases with grade headers and certification ribbons.
4. **Shelves View**: A tactile shelf presentation displaying album sleeves, game boxes, and comic book runs on virtual shelves.

### Sizing and Spacing Sliders

When in Cards, Covers, or Shelves view, the toolbar provides two smooth sliders:
* **Cover Size**: Adjusts the scale of cover artwork from compact thumbnails to large displays.
* **Item Spacing**: Adjusts the gap between items without altering outer window margins.

---

## 2. Searching Your Library

The search box in the header toolbar provides fast live filtering:

* **Live Search**: Type any text to instantly filter entries matching Title, Artist, Series, Platform, Developer, Publisher, or Barcode.
* **Regex Search**: Prefix your search query with `matches:` (for example `matches: ^the\s` or `matches: [0-9]{4}`) to perform regular expression matching, case-insensitive. If an expression has invalid syntax, the search box outlines in red and displays the reason on hover.
* **Suggestions Dropdown**: As you type, matching suggestions appear in a dropdown list. Clicking a suggestion immediately narrows your library to that record.
* **Clearing Search**: Click the **X** icon in the search box or press `Escape` to clear filters.

---

## 3. Active Item vs. Multi-Selection

Collectarr maintains an intuitive distinction between the **active item** and **ticked items**:
- **Active Item**: Displayed in light blue in List and Cards view (or framed in Covers and Shelves). The right-hand Inspector details panel displays this item's complete metadata.
- **Ticked Items**: Displayed in dark blue (or faded over blue in Covers and Shelves). Ticking an item's checkbox keeps the active item and details panel right where they were without jumping.

---

## 4. Alphabet Bar (A–Z Quick Jump)

The alphabet bar across the top of the library allows one-click jumping to entries by name:

* Click any letter (`A` through `Z`) to filter the library to artists, titles, or series beginning with that letter.
* Click `#` (or `0–9`) to display entries starting with digits or special characters.
* Click **All** to clear the alphabet filter.

> [!TIP]
> The alphabet bar respects **Sort Names** and **Sort Titles**. Leading articles such as "The", "A", and "An" are ignored (e.g. clicking **B** will locate *The Beatles* or *The Batman Adventures*).

---

## 5. Folder Grouping (Group By)

The left-hand folder panel categorizes entries into hierarchical folders:

1. Click the **Group By** dropdown at the top of the left sidebar.
2. Supported groupings adapt to the active kind:
   - **Music**: Artist, Format / Disc Format, Genre, Release Decade / Year, Storage Location, Rating.
   - **Games**: Platform, Genre, Completeness (Loose, CIB, New), Developer, Publisher, Storage Location.
   - **Comics**: Series, Publication Age (Golden, Silver, Bronze, Copper, Modern), Publisher, Grade / Slab Status, Storage Box.
3. Click any folder to filter the main library view to that category.
4. Folders can be ordered **alphabetically** or **by item count**.
