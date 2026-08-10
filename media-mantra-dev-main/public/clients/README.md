# Client logo files (homepage marquee)

Approved raster pack lives here as **`logo-01.png` … `logo-29.png`**, sourced from the client logo delivery zip.

## Mapping

Brand → file mapping is defined explicitly in **`src/data/clients.ts`** (`clientLogoFiles`) and the homepage grid in **`src/data/home-content.ts`** (`homeClientsGrid`).

Each homepage cell loads **one logo file** — not a combined grid image.

## File tips

- Use **full-colour** brand-approved assets only.
- Prefer **SVG** when brand supplies it; PNG ok (transparent or light background reads best on cream tiles).
- Layout holds logos in roughly **140 × 44 px** slots (`object-contain`).

## Known gaps

If a slot file is blank or incorrect (e.g. Sony, boAt), replace the PNG in this folder and keep the same filename, or update the path in `homeClientsGrid`.
