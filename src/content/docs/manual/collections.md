---
title: Collections and collection status
description: "Collections and collection status — Collectarr user manual"
---

Collectarr provides a clean separation between **Named Collections** (containers for different physical locations, rooms, or sub-libraries) and **Collection Statuses** (the ownership state of each collectible).

## 1. Named Collections

Tabs along the bottom bar represent distinct collections for the active media kind. You can create separate collections to isolate different physical locations or collection purposes:

* *Main Collection*: Your primary active library.
* *Vault / Graded Slabs*: High-value slabbed comics, rare vinyl, or sealed retro games in protective storage.
* *Living Room / Den*: Frequently accessed physical media.
* *Digital / Download*: Digital purchases and roms.

Clicking any tab along the bottom switches your entire library view to that collection instantly.

## 2. Managing Collections

To customize your collections:

1. Click the **Manage Collections** button at the bottom-left of the window, or select **Manage Collections** from the main navigation menu.
2. The **Manage Collections** dialog opens:
   * **Add Collection**: Click the **+ Add Collection** button, type a name, and press Enter.
   * **Reorder Tabs**: Click and drag the handle beside any collection row to change its tab position in the bottom bar.
   * **Rename**: Click the edit icon on any row to rename the collection.
   * **Delete**: Click the trash icon to delete a collection.
3. **Safety Protection**:
   * Collectarr enforces that at least one collection must always remain.
   * If you delete a collection that contains items, Collectarr prompts you to choose another destination collection. All contained items are safely relocated before the old collection is removed; entries are never discarded.

![Manage collections dialog in Collectarr](../../../assets/screenshots/manage-collections.png)

## 3. Collection Status (Ownership Lifecycle)

While a *Collection* defines *where* an item belongs, **Collection Status** defines *how* you own it:

* **In Collection**: You physically own the copy. It appears in collection statistics and valuations with a clean checkmark mark.
* **Wish List**: Items you do not own yet but want to buy or track.
* **On Order**: Items you have purchased online or backordered that have not yet arrived.
* **For Sale**: Copies from your collection that you have listed for sale or trade.

### Filtering by Status
* The **Status Dropdown** in the main toolbar allows you to view *In Collection*, *Wish List*, *On Order*, or *All*.
* When a non-default status filter is active, the status pill displays an accent outline to alert you that the view is filtered.

### Changing Status
* **In Inspector**: Select an entry, open the status dropdown in the details panel, and pick a new status (e.g. change *Wish List* to *In Collection* upon receiving an item).
* **In Editor**: Open the item editor and adjust the **Collection Status** field on the Main tab.
* **In Batch Edit**: Select multiple entries and use **Edit Multiple** to change their status all at once.

## 4. Comparing Organization Methods

Collectarr offers four distinct ways to organize your items:

| Method | Type | Best For |
| :--- | :--- | :--- |
| **Named Collections** | Explicit, stable sets | Dividing physical rooms, storage units, or collection tiers. |
| **Group By Folders** | Dynamic attribute trees | Browsing items by Artist/Series/Platform, Format, Genre, Decade, or Location. |
| **Collection Status** | Item lifecycle states | Separating owned items from your wanted Wish List items. |
| **Search & Filters** | Ad-hoc queries | Finding specific barcodes, catalog numbers, or year ranges. |

## 5. Locating Missing Entries

If an item you added does not appear in your library, verify that no restrictive filters are active:
1. Check the **Bottom Tab**: Ensure you are in the correct named collection.
2. Check the **Status Dropdown**: Switch to *All* or *In Collection*.
3. Check the **Alphabet Bar**: Click **All** to clear any active letter filter.
4. Check the **Left Folder Panel**: Select the `[All Items]` folder at the top of the tree.
5. Check the **Search Field**: Click the `X` button in the search bar or press `Escape` to clear any search terms.
