# TASK — documents/ord-88

**No rows, deliberately.** The ordinance states no extent and neither name has
an entity.

## What is missing

1. **`polyxena` and `clay` entities in names.js.** Neither exists; nothing in
   the corpus letters either name. Entity work is Kenny's — see
   `documents/robinson-1884/FINDINGS.md`.
2. **A modern street.** Res. 150 (Robinson 1884, pp. 253–254, quoted as the
   excerpt `res-150-polyxena-district` in `ord-88.js`) gives a real placement:
   north–south, **610.50 feet between Third and Fourth streets**. On Bunker Hill
   in 1883 that is a short block between the Hill Street / Court House Street
   grades and the Charity Street ones. Take those numbers to `map-tool.html`
   against the 1880s sheets in `documents/` covering Third to Fourth.

## What would settle it cheaply

- **Robinson 1884's own subject index**, under Polyxena and under Clay, gives
  every other resolution touching either street; see
  `documents/robinson-1884/robinson-1884-contents.md`.
- **Teed 1887, Vol. III** (`DT0106633769`) would show whether Clay Street kept
  the name past 1884.
- Whether **Clay Street** survived at all: it is absent from the modern OSM
  extract for this ground, so it either vanished or was renamed again.

## When it is placeable

One `change` row: `from: "polyxena"`, `to: "clay"`, `scope: "whole-name"`,
`says: ["sec-1","title"]`, `mechanism: "renaming"`. Do **not** put the Third /
Fourth extent in the row — it comes from Res. 150, not from this ordinance, and
authoring a derived extent in the place reserved for what the document says is
the exact defect `handbook/change-rows-amendment.md` §1 was written about.
