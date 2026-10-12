# Manual review — 2026-10-12

App baseline: befa19445, plus contextual Help link implemented in this work.

CLZ's authenticated manual was inspected for navigation and workflow organization. Collectarr text is original and describes its actual application. No CLZ paragraphs, screenshots, assets or proprietary fonts are copied.

Reviewed sources: app_navigation_model/app_shell_actions (all menu destinations); library_add_mode_bar (Search/Barcode/Manual); library_collections_dialog (create/rename/reorder/delete with destination, minimum one collection); settings_page and ui_preferences (actual section names, JSON backup/restore and display options); transferable_field (Copy/Move, Skip/Overwrite/Append); Music domain/disc/credit files and edit schemas; custom field definitions, previews and units; other kind entry edit schemas.

Common topics are shared; nine kind chapters add scope-specific distinctions. They do not promise unsupported import fields or assume remote services are configured. Music has one Credits editor, disc-owned recording data and explicit reducer sorts. No obsolete Classical/People instructions, packed-values transport advice, My Shelf or CLZ sync claims are included.

Validation: static build; generated link/assets check; manual search for Credits; desktop/tablet/mobile (1440/768/390px) on home and Custom Fields; Music article and four source captures visually inspected; zero browser errors. App tests/analyze/Windows debug build pass. Publishing is pending a hosting destination; repository is local only.
