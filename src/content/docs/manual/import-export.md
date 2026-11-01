---
title: Import, export and print
description: "Import, export and print — Collectarr user manual"
---

Collectarr supports comprehensive data exchange, enabling you to bring your existing collections from spreadsheets or other catalog software, export custom reports, and generate printable PDF documents.

## Importing Data into Collectarr

Open the main drawer menu and navigate to **Main Menu → Import Data** (or choose **Import** from the library toolbar **Tools** menu).

### 1. Supported Import Formats

- **CLZ Web & Desktop XML**: Native importers for CLZ Comics Web XML, Comic Collector desktop XML, CLZ Games XML, and CLZ Music XML. Preserves full hierarchies (series, issues, variants, discs, tracks, hardware serials, loan histories, and custom fields).
- **CATraxx XML**: Full migration from CATraxx music collections including tracks, credits, and ratings.
- **CSV / TSV / Delimited Text**: Automatic header mapping for spreadsheets from Excel, Google Sheets, or custom exports.
- **JSON / Database Archives**: For complete, restorable snapshots, see [Backup and sync](../backup-sync/).

### 2. Streamlined Import Workflow

1. **Select File and Format**:
   - Choose your file (`.xml`, `.csv`, `.tsv`, or `.txt`).
   - For text files, select the field delimiter (Comma `,`, Tab `\t`, or Semicolon `;`).
2. **Execute Import**:
   - Click **Import**. The import executes immediately with a dedicated visual progress bar.
   - For CSV files, review column mappings if prompted.
3. **Automatic Offline Cover Download**:
   - For entries with external cover art links (such as those from CLZ Web exports), Collectarr automatically downloads high-resolution covers and saves them locally with your collection so they remain accessible offline.
4. **Summary & Linking**:
   - Upon completion, the *Import Successful* screen reports the number of imported records and provides an instant **Link** button for unlinked entries without catalog matches.

> [!TIP]
> If you already imported a collection earlier without offline covers, select **Maintenance → Download Covers** at any time to download and cache artwork for all entries in your collection.

---

## Exporting to CSV / TXT

Export flat files for external data analysis, sharing, or spreadsheet manipulation:

1. Click **Tools → Export to CSV / TXT** in the main toolbar, or select specific items to export a selection.
2. **Configure Scope**:
   - **All items**: Exports the entire active library.
   - **Filtered view**: Exports only items matching active folder and search filters.
   - **Selected items**: Exports only explicitly checked records.
3. **Choose Export Columns**:
   - Select which attributes to export.
4. **Export Progress**:
   - Click **Download**; a real-time progress bar shows generation progress.

---

## Printing and PDF Reports

Generate clean, formatted PDF reports and printable want lists:
- **Print / PDF Report**: Located in **Tools → Print / PDF Report**.
- **Missing Comics Checklist**: In Collectarr Comics, the **Tools → Missing Comics** tool lets you filter run gaps and export a compact, printer-friendly PDF want list to take to conventions or comic stores.
