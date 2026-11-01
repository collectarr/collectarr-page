---
title: Comics
description: "Comics — Collectarr user manual"
---

Collectarr Comics is tailored specifically for comic book collectors, back-issue run completionists, and slab preservationists. It provides deep cataloging for single issues, variant covers, story arcs, and third-party certified slabs.

## 1. Series, Issues, and Variant Architecture

In Collectarr, the Comics workspace structures your collection by series and issues:
- **Series Folders**: Issues are grouped automatically under their parent Series. Series folders display the first issue cover in your collection and sort naturally by Series Name then Issue Number.
- **Issue Identifiers**: Issues are indexed by issue number and variant extension (for example, `Absolute Batman #1`, `#1A`, `#1B Foil Variant`, `#25 2nd Printing`).
- **Shared Series Metadata**: Series information includes Series Title, Publisher, Imprint, Publication Age, Country, and Language.

### Core Issue Attributes
The comic editor provides eleven specialized tabs:
- **Main**: Series, Issue Number, Variant, Publication Date (full date or year/month only), Cover Date, Age, and Format (*Floppy*, *Trade Paperback*, *Hardcover*, *Omnibus*, *Digest*).
- **Details**: Barcode (UPC or ISBN), Imprint, Edition, Country, Language, Crossover, and Story Arc.
- **Creators**: Scoped credits for Writer, Penciler, Inker, Colorist, Letterer, and Cover Artist.
- **Characters**: List of featured comic characters and superhero teams.
- **Plot**: Story synopsis and key issue notes.
- **Personal**: Storage Location / Box, Purchase Date, Purchase Store, Acquisition Price, Quantity, and Reading Status.
- **Value & Grading**: Raw grade, third-party slab details, certification number, and current market value.
- **Covers**: Front and back cover art, online cover search, and personal photo slots.
- **Links**: Reference links (Grand Comics Database, League of Comic Geeks).
- **Custom Fields**: User-defined custom fields and notes.

---

## 2. Publication Ages

Collectarr categorizes comics across industry-standard historical publication ages:

| Publication Age | Era Range | Hallmarks |
| --- | --- | --- |
| **Golden Age** | ~1938 – 1956 | Debut of major superhero archetypes (Superman, Batman, Captain America). |
| **Silver Age** | ~1956 – 1970 | Superhero revival, sci-fi origins, debut of Marvel Universe (Spider-Man, Fantastic Four, X-Men). |
| **Bronze Age** | ~1970 – 1985 | Darker, socially conscious storylines, debut of Wolverine, Punisher, Gwen Stacy death. |
| **Copper Age** | ~1984 – 1991 | Rise of independent publishers, direct market boom, Watchmen, Dark Knight Returns. |
| **Modern Age** | ~1992 – Present | Variant covers, foil/embossed cardstock, trade paperback collections, creator-owned boom. |

> [!NOTE]
> When adding issues from Collectarr Core or importing from CLZ, publication ages are derived automatically from the cover release date.

---

## 3. Grading, Slabs & Certification

Collectarr treats certified third-party slabs and raw reading copies with equal fidelity:

### Certified Grading Services
- **Supported Companies**: `CGC` (Certified Guaranty Company), `CBCS` (Comic Book Certification Service), `PGX`, and custom grading companies.
- **Slab Visuals**: In List, Cards, Covers, Shelves, and the details inspector, slabbed comics display inside authentic slab frames featuring the grading company banner, numeric grade, grade ribbon, and certification number.
- **Label Types**: Universal (Blue), Signature Series (Yellow), Qualified (Green), Restored (Purple), and Pedigree.
- **Page Quality**: Document interior paper state (*White*, *Off-White to White*, *Off-White*, *Cream to Off-White*, *Cream*, *Tan*).
- **Custom Labels**: Display your own custom label image directly on the slab header. Custom label images are loaded from your local files and remain private to your device.

### 10-Point Raw Comic Grading
For unslabbed raw comics, grade issues using standard 10-point numeric or descriptive grades:
- `10.0 Gem Mint (GM)`
- `9.9 / 9.8 Near Mint / Mint (NM/M)`
- `9.6 / 9.4 Near Mint (NM+, NM, NM-)`
- `9.2 / 9.0 Very Fine / Near Mint (VF/NM)`
- `8.5 / 8.0 Very Fine (VF+, VF)`
- `7.5 / 7.0 Fine / Very Fine (FN/VF)`
- `6.5 / 6.0 Fine (FN)`
- `5.5 / 5.0 Very Good / Fine (VG/FN)`
- `4.5 / 4.0 Very Good (VG)`
- `3.0 / 2.0 Good (GD)`
- `1.8 / 1.0 Fair (FR) to Poor (PR)`

---

## 4. Creators and Character Appearances

Document the talent behind your favorite issues:
- **Creators List**: Catalog Writers, Pencilers, Inkers, Colorists, Letterers, and Cover Artists on each issue.
- **Characters List**: Record hero appearances, villain debuts, and team memberships.
- **Key Categories**: Flag milestone issues (*1st Appearance*, *Origin*, *Death*, *Iconic Cover*, *Variant*, *Crossover Event*).

---

## 5. Publisher Visual Branding

In the inspector details panel, Collectarr automatically displays authentic visual logos for major publishers:
- **Major Publishers**: Marvel, DC Comics, Image Comics, Dark Horse, IDW Publishing, Boom! Studios.
- **Manga & International**: Viz Media, Kodansha, Shueisha, Tokyopop, Panini.
- **Indie & Classic**: Archie Comics, Dynamite Entertainment, Valiant, Vertigo, Fantagraphics, 2000 AD.

---

## 6. Missing Comics Tool

Keep your comic runs complete when crate digging:
- Access via **Main Menu → Tools → Missing Comics**.
- Select any series in your library to analyze gaps between issue numbers.
- Filter out variants, on-order issues, or unreleased issues.
- View compact issue ranges (e.g. *Missing #14–22, #30*).
- **Export to PDF**: Generate a clean, printed or digital want list to take to comic book shops and conventions.

---

## 7. Importing from CLZ Comics

Migrate existing collections seamlessly:
- **CLZ Comics Web XML**: Export your collection from the CLZ Cloud web interface and import directly into Collectarr.
- **Comic Collector XML**: Import full desktop database XML exports from Comic Collector desktop.
- **Lossless CSV / TXT**: Map spreadsheet columns to Collectarr issue fields.
- **Fast Import Flow**: Imports run immediately upon file selection without requiring confirmation review modals.

---

## 8. Offline Covers & Maintenance

Never lose access to your cover gallery:
- **Automatic Caching**: When importing from CLZ or web sources, external cover image links are automatically downloaded to your local device storage.
- **Download Covers Tool**: Use **Maintenance → Download Covers** at any time to verify and download missing cover art for offline use.

---

## 9. Community & Support

Have questions about comic cataloging, series runs, or slabbed covers?
- Visit the [Collectarr Comics Forum](https://github.com/collectarr/collectarr-app/discussions?discussions_q=comics) on GitHub Discussions.
- Review platform diagnostics in the [Contact & Support Hub](/collectarr-page/contact/?kind=comics).
