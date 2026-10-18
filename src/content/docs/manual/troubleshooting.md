---
title: Troubleshooting
description: "Troubleshooting — Collectarr user manual"
---

This guide addresses common questions, unexpected display behaviors, and diagnostic steps when using Collectarr.

## 1. An Entry Appears Missing or the Library Looks Empty

If albums you expect to see are not appearing in your library list:

1. **Clear the Search Query**: Look at the search box in the header toolbar. If text is entered, click the **X** button or press `Escape` to clear it.
2. **Reset the Alphabet Bar**: If a letter is highlighted in the top bar (e.g. `B`), click **All** at the far left of the alphabet bar to display all titles.
3. **Check Collection Status Scope**: The dropdown beside the **+ Add Albums** button filters items by status. If set to *In Collection*, albums marked as *Wish List* or *On Order* will be hidden. Set it to **All Statuses** or **In Collection**.
4. **Check Named Collections**: If you use multiple collections (e.g. *Main Collection*, *Vinyl*, *Classics*), check the collection tabs at the bottom of the window to verify which collection is active.
5. **Check Folder Selection**: If the left sidebar is grouping by Artist, Genre, or Format, click **[All Albums]** at the very top of the folder list.
6. **Browser Storage Check (Web build)**: On Web builds, clearing browser cookies/site storage or opening a Private/Incognito window resets local browser storage. Restore your database using **Settings** → **Data** → **Restore from JSON**.

---

## 2. Artists, Labels, or Genres Split into Separate Folders

If the same artist appears under two different folders (e.g., *The Paper Moons* and *Paper Moons*, or an accidental typo like *Demo Record* and *Demo Records*):

1. Open the main drawer menu and select **Manage Pick Lists**.
2. Select the list (e.g. **Artists** or **Record Labels**).
3. In the right-hand panel, select the variant with the typo or duplicate naming.
4. Click **Merge**.
5. Choose the canonical target name. Collectarr re-links all albums to the chosen value and deletes the duplicate vocabulary entry. See [Pick lists](../pick-lists/).

---

## 3. Core Search or Barcode Scan Finds No Results

If searching Collectarr Core fails to find an album:

1. **Check Connection Status**: Navigate to **Settings** → **Connection** and verify that the Core service is reachable.
2. **Barcode Nuances**: Try scanning or typing the barcode without hyphens or spaces. If scanning fails, try searching by **Catalog Number** or **Artist & Title**.
3. **Obscure or Independent Releases**: If an album is brand new, a limited local pressing, or self-released, it may not exist in the central database yet. Click **Add Manually >** at the top right of the Add dialog to create the album immediately, then click **Propose to Core** to contribute it.

---

## 4. Albums Sort Under the Wrong Letter

If an album like *The Clash* is sorting under **T** instead of **C**:

1. Open the album in the editor (double-click or select and press `Ctrl+E`).
2. Inspect the **Sort Title** and **Sort Name** fields:
   - For *The Clash*, **Sort Title** should read `Clash, The`.
   - For an artist like *David Bowie*, **Sort Name** should read `Bowie, David`.
3. In **Settings** → **Appearance**, check your **Articles Ignore List** to ensure articles like `The`, `A`, and `An` are enabled.

---

## 5. Merging Multi-Disc Albums Imported Separately

If an imported spreadsheet created separate album rows for each disc of a box set:
1. Select all the individual disc entries in the library.
2. Open the selection actions menu (`...`) and click **Merge Albums**.
3. Designate the primary metadata record, arrange disc numbers (Disc 1, Disc 2, etc.), and confirm. Collectarr consolidates all tracks into a unified release. See [Editing entries](../editing/).

---

## 6. Inspecting Diagnostic Logs and Reporting Bugs

If an unexpected error or crash occurs:

1. Open **Settings** → **Logs**.
2. Review the chronological diagnostic messages. Click **Copy Logs** to copy the stack trace.
3. Visit the [Collectarr issue tracker](https://github.com/collectarr/collectarr-app/issues).
4. Provide your platform (Web, Windows, macOS, Linux), application version, and reproducible steps.

> [!CAUTION]
> Before attaching logs or screenshots to public issue reports, ensure that personal details (private notes, authorization tokens, or personal photos) are removed.

