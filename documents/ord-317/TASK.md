# ord-317 — what is missing

**One renaming, no row — and it is the closest thing in this volume to a row
that is one edit away from drawing.**

> "That the name of that portion of Deepwater street, in the City of Los
> Angeles, **between Beaudry avenue and Philadelphia street**, be changed to
> **Bartlett street**."

| what the row needs | have it? |
|---|---|
| a stated extent | ✅ both ends named in the ordinance |
| `fromCross` — Beaudry avenue | ✅ `beaudry-avenue` exists |
| `toCross` — Philadelphia street | ✅ `philadelphia-st` exists |
| `from` entity — Deepwater Street | ❌ **missing** |
| `to` entity — Bartlett Street | ❌ **missing** |
| modern `street` for the extent | ❓ depends on which corridor Deepwater is |

Two entities, and `names.js` is the user's to edit (CLAUDE.md, hard rule). The
recommendation is in `documents/teed-1887/FINDINGS.md` §5.

## Supporting evidence already in hand

- **Res. 334** (p. 420) — "Accepting grading of Montreal street, from Sand and
  Deepwater streets"
- **Res. 336** (p. 422) — "Ordering payment for grading Montreal street, from
  Sand"
- **Res. 373** (p. 459) — "To establish grade of Philadelphia street, from
  Bellevue avenue"; the GENERAL INDEX adds Philadelphia grades at Virgin street
  and at Bellevue avenue

So Deepwater ran on Prudent Beaudry's hillside among Montreal, Sand, Bellevue
and Virgin, and the renamed stretch is between Beaudry Avenue and Philadelphia
Street. `philadelphia-st`, `beaudry-avenue`, `montreal-st`, `sand-st` and
`bellevue-ave` are all live entities, so the neighbourhood is well covered
already — the two new names would slot straight into it.

⚠ **Before writing the row**, the modern street the extent lies on has to be
identified from geometry, not from the name (CLAUDE.md rule 2). `node intersect.js
"Beaudry Avenue" "<candidate>"` against the OSM extract is the check.
