---
title: Games
description: "Games — Collectarr user manual"
---

Collectarr Games is designed specifically for video game collectors, retro gaming preservationists, and hardware archivists. It provides deep cataloging for games, gaming consoles, accessories, and toys-to-life figures.

## 1. Game and Edition Architecture

In Collectarr, the Games workspace distinguishes between three specialized collection domains:
- **Games**: Video game software across all platforms (cartridges, discs, digital).
- **Hardware**: Consoles, handheld systems, controllers, memory units, and peripheral devices.
- **Toys-to-Life**: Interactive figures and accessories (Amiibo, Skylanders, Disney Infinity).

### Core Game Edition Attributes
Each game entry captures both catalog metadata and your personal physical copy:
- **Title & Sort Title**: Base game title with customizable sorting rules (articles like *The* or *A* handled automatically).
- **Platform**: The host gaming system (e.g., *Nintendo Entertainment System*, *Sega Genesis*, *PlayStation 2*, *PC*).
- **Companies**: Developer and Publisher attributions.
- **Release Details**: Release Date (full date or year-only), Region (*NTSC-U/C*, *PAL*, *NTSC-J*, *Region Free*), and Audience Rating (*ESRB*, *PEGI*, *CERO*).
- **Media Format**: *Cartridge*, *Optical Disc*, *Card*, or *Digital Download*.
- **Edition**: Standard, Collector's Edition, Limited Run, Greatest Hits, or Remaster.

---

## 2. Completeness and Packaging Tiers

Accurately capturing the completeness of physical game media is crucial for retro and modern collecting. Collectarr provides five standardized completeness tiers:

| Completeness Tier | Description |
| --- | --- |
| **Loose** | Game cartridge or optical disc only, without original outer packaging. |
| **Complete in Box (CIB)** | Original game media, original case or box, and printed user manual included. |
| **New / Sealed** | Factory mint, original shrink-wrap or seal intact. |
| **Box Only** | Authentic outer game box or case without game media or manual. |
| **Manual Only** | Original instruction booklet or paperwork only. |

> [!NOTE]
> When cataloging a game, switching completeness tiers automatically manages relevant packaging checkboxes (*Box*, *Manual*) and updates your collection valuation statistics.

### Packaging & Condition
For each item, you can record:
- **Box Condition**: Grade the condition of cardboard sleeves, plastic cases, or slipcovers.
- **Manual Condition**: Track booklet wear, dog-ears, or missing inserts.
- **Personal Notes & Rating**: Record play notes, completion status, and your personal score.

---

## 3. Gaming Hardware and Peripherals

Hardware items are cataloged in an independent inventory with hardware-specific schemas:

### Hardware Types
- **Consoles**: Home television gaming consoles (*Super Nintendo*, *PlayStation 5*, *Xbox 360*).
- **Handhelds**: Portable gaming devices (*Game Boy Color*, *PlayStation Portable*, *Nintendo Switch*).
- **Controllers**: Gamepads, arcade sticks, light guns, steering wheels, and VR motion controllers.
- **Accessories**: Memory cards, expansion paks, link cables, and AV adapters.

### Serial Numbers & Privacy
Hardware entries include a dedicated **Serial Number** field. 
> [!IMPORTANT]
> Your serial numbers live exclusively in your local database. They are never transmitted to public servers or shared in sync metadata.

---

## 4. Toys-to-Life Figures

For collectors of NFC and interactive figures, Collectarr provides dedicated Toys-to-Life collections:
- **Supported Ranges**: *Nintendo Amiibo*, *Activision Skylanders*, *Disney Infinity*, *Lego Dimensions*.
- **Figure Classifications**: Track character name, series (e.g. *Super Smash Bros. Collection*, *Zelda Breath of the Wild*), figure type, and card variants.
- **Packaging Status**: Choose between **Loose** (unboxed figure ready for display or scanning) and **New** (mint in sealed blister pack).
- **Dual Photography**: Distinct photo slots for **Figure Image** and **Box Image**.

---

## 5. Valuation and PriceCharting Snapshots

Keep track of the monetary value and purchase history of your collection:
- **Purchase History**: Record Purchase Date, Purchase Store, and original Purchase Price.
- **Valuation Snapshots**: Enter current market value or import PriceCharting snapshot valuations without mandatory cloud lock-in.
- **Currency Display**: All values honor your chosen currency setting (*USD*, *EUR*, *GBP*, *JPY*, etc.) configured in **Settings → Appearance**.
- **Value Recalculation**: If an unlocked Loose value is recorded, updating packaging components (such as acquiring the original manual) recalculates the estimated value proportionally.

---

## 6. Media, Covers, and Video Trailers

Visual presentation brings your video game library to life:
- **Front and Back Covers**: High-resolution artwork for game boxes, slipcases, and cartridges.
- **Additional Image Gallery**: Up to five extra custom photos per entry (ideal for documenting circuit board PCB revisions, disc read surfaces, and special inserts).
- **Video Trailers**: Link official YouTube game trailers to preview gameplay directly from the inspector panel. Toggle video visibility in **Settings → Appearance**.

---

## 7. Community & Support

Have questions about video game fields, platform additions, or hardware workflows?
- Visit the [Collectarr Games Forum](https://github.com/collectarr/collectarr-app/discussions?discussions_q=game) on GitHub Discussions.
- Review platform diagnostics and log paths in the [Contact & Support Hub](/collectarr-page/contact/?kind=games).
