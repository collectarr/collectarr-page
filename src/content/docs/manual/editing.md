---
title: Editing and personal data
description: "Editing and personal data — Collectarr user manual"
---

The Collectarr editor allows you to refine catalog metadata, manage multi-disc track lists, track creators and character appearances, set completeness tiers, and record comprehensive personal collection details.

## 1. Opening the Editor

To edit any item, use any of the following methods:

* Select an item in your library and click the **Edit** button (pencil icon) in the right-hand Inspector toolbar.
* Double-click any row or card in the library.
* In Cards, Covers, or Shelves view, hover your mouse over an entry to reveal the quick **Edit** button.
* Press `Enter` or `Ctrl+E` / `Cmd+E` when an item is selected.

![Editor with metadata and personal fields](../../../assets/screenshots/editor.png)

---

## 2. Catalog Metadata vs. Personal Data

Collectarr maintains a strict separation between shared catalog information (what the item is) and your personal inventory records (information about your specific physical copy):

| Catalog Metadata (Shared) | Personal Inventory Data (Private) |
| :--- | :--- |
| Title, Sort Title, Subtitle, Series | Collection Status (*In Collection*, *Wish List*, etc.) |
| Main Artist, Developer, Publisher, Creators | Personal Index Number and Quantity |
| Release Date, Cover Date, Publication Age | Storage Location or Storage Box |
| Label, Platform, Barcode, Catalog Number | Physical Condition & Grading (CGC/CBCS/Goldmine) |
| Packaging & Completeness (CIB, Loose, Slabs) | Purchase Date, Store, and Purchase Price |
| Discs, Tracks, Characters, Story Arcs | Current Estimated Valuation & Currency |
| Official Front & Back Cover Artwork | Personal Rating (1–10 stars) |
| Descriptions, Plots, and Links | Private Notes and Custom Fields |

> [!NOTE]
> When you propose corrections to the shared online Core catalog, only public catalog metadata is submitted. Your private purchase prices, condition notes, personal images, and storage locations are never sent.

---

## 3. Editor Tabs by Kind

The editor tailors its tabs to each collection kind:

### Music Editor Tabs
* **Main**: Artist, Title, Sort Title, Format, Label, Catalog Number, Barcode, Release Date, Status, Location, and Index.
* **Details**: Country, Packaging type (Digipak, Jewel Case, Gatefold), Box Set, and audio specifications.
* **Credits**: Contributors and roles (Musicians, Producers, Engineers) with album- or disc-level scope.
* **Tracks**: Multi-disc management, track positions, vinyl sides (A1, B1), and durations.
* **Personal**, **Covers**, **My Images**, **Links**, and **Custom Fields**.

### Games Editor Tabs
* **Main**: Title, Platform, Developer, Publisher, Region, Release Year, Barcode, Status, and Location.
* **Details**: Edition (Standard, Collector's, Limited Run), Media Format, and Audience Rating.
* **Completeness**: Standardized tiers (**Loose**, **CIB**, **New / Sealed**, **Box only**, **Manual only**) with automatic packaging checkboxes and valuation adjustments.
* **Hardware & Toys**: Serial numbers, model revisions, and interactive figure ranges (Amiibo, Skylanders).
* **Personal**, **Value** (with PriceCharting links), **Covers**, **Links**, and **Custom Fields**.

### Comics Editor Tabs
* **Main**: Series, Issue Number, Variant (e.g. *#1A*, *#1B Foil*), Format, Age (Golden to Modern), Cover Date, and Release Date.
* **Details**: Barcode (UPC with 5-digit comic add-on or ISBN), Country, Language, Crossover, and Story Arc.
* **Creators**: Scoped credits for Writer, Penciler, Inker, Colorist, Letterer, and Cover Artist.
* **Characters**: Featured superheroes, villains, and teams.
* **Plot**: Story synopsis and key issue notes.
* **Personal**: Storage Box / Location, Purchase Date, Store, and Acquisition Price.
* **Value & Grading**: Universal/Signature grading, CGC/CBCS/PGX slabs, certification numbers, grade ribbons, and Custom Labels.
* **Covers**, **My Images**, **Links**, and **Custom Fields**.

---

## 4. Rapid Data Entry & Multi-Value Fields

* **Fast Multi-Value Entry**: In multi-value fields such as **Genre**, **Tags**, and **Creators**, pressing `Enter` commits the value and automatically leaves the caret in the field so you can type subsequent entries rapidly without touching the mouse.
* **Pick-List Selectors**: Single-value pick lists (Location, Format, Series) offer inline search and auto-complete from values currently used across your collection.
* **Save on Previous / Next**: Clicking **Previous** (`<`) or **Next** (`>`) automatically saves all changes made to the current item behind a quick *Saving...* busy sheet before smoothly opening the neighbouring record.
* **Keyboard Shortcuts**: Press `Ctrl+S` (`Cmd+S`) to save immediately, or `Escape` to close.

---

## 5. Batch Editing (Multi-Edit)

When updating fields across multiple items at once (such as moving 50 comics to a new storage box, tagging a batch of games, or updating collection status):

1. In the library, select your target items:
   * Hold `Ctrl` (`Cmd` on macOS) to select individual items.
   * Hold `Shift` to select a range.
   * Use **Select All** in the toolbar.
2. Click **Edit Multiple** in the selection toolbar or context menu.
3. Check the checkbox beside each field you want to modify.
4. Enter or choose the new value (e.g. set a new **Storage Box**).
5. Unchecked fields remain completely untouched.
6. Click **Apply Changes**.

---

## 6. Compare & Propose to Core

If catalog metadata needs enhancement:
* Select **Compare with Core** to inspect your entry side-by-side with the central Core database in an easy comparison table.
* Select **Propose to Core** to submit corrections. Collectarr highlights only the fields you modified, allowing Core maintainers to review and apply updates while keeping your personal notes local.
