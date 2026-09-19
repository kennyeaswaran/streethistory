# TASK — documents/ord-76

**This document has no rows on purpose.** Ordinance 76 names a street with a
perfectly good extent, and the corpus has nothing for the row to bind to.

## What is missing

1. **A name entity.** names.js has no `upper-main` (nor `bath-street`, which
   `documents/ord-77` needs). Minting one is Kenny's call — see
   `documents/robinson-1884/FINDINGS.md`, which lists every entity this volume
   asks for in one place.
2. **A modern street.** "From the north-east corner of the old Roman Catholic
   church in front of the plaza, northerly past the store of M. G. Santa Cruz
   and the old Pacific Hotel, to Alameda street" needs resolving against the
   OSM extract. Candidates run through the El Pueblo block and North Main
   Street; the map tool, not this file, should decide it.

## What would settle it cheaply

- **Robinson 1884 itself**: Res. 141 (p. 238) and Res. 181 (p. 298) both put
  Virgin street "between Upper Main street and Yale street", and Res. 171
  (p. 282) establishes the grade of College street "from Upper Main…". Three
  more crossings of Upper Main, all in the same volume, all transcribable from
  `documents/robinson-1884/robinson-1884.pdf` at the pages given in
  `robinson-1884-contents.md`.
- **`documents/oldplaza1873`** covers this ground and may letter it.

Once the entity exists and the modern corridor is fixed, this document should
carry ONE `state` row (`asWritten: "Upper Main street"`) with the extent above —
not a `change` row: the ordinance names a street, it does not rename one.
