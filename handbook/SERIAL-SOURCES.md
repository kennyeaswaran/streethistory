# Serial sources: Sanborn atlases and city directories

Recorded tract maps are *origin* documents: they say who platted a street,
when, and often after whom. Sanborn fire-insurance atlases and city
directories are a different kind of evidence — *serial* sources, the same
ground re-recorded every few years — and they answer a different question:
what was this stretch called in year X, and between which two years did that
change?

The two kinds are complementary, and the serial ones should usually come
first. One Sanborn pair brackets a renaming across a whole neighborhood in a
single pass, and that is what tells you which streets have a question worth
spending a NavigateLA lookup and a tract map on. But a Sanborn sheet never
names a namesake — only the tract map, the ordinance, the newspaper, or a
biography does. Sweep with the serial sources; explain with the origin ones.

## What each source proves

- **Sanborn sheet** — the name in use on those few blocks at the sheet's
  edition/correction date. Contiguous coverage, so one sheet documents many
  streets at once. Silent on namesakes; blind to unbuilt streets.
- **City directory street section** — the name in use citywide in that year,
  usually with the street's extent stated in cross-streets. Annual, so the
  brackets are tight. Records usage, not law.
- **Recorded tract map** — the platted name, the recording date, the
  subdivider and the surveyor, on one subdivision's blocks (TRACT-RESEARCH.md).

All three feed the same core loop in ADDING-STREETS.md: transcribe once,
fully, then apply to every street the document touches.

## Sanborn fire insurance atlases

- Library of Congress collection (free, public domain, partial coverage):
  https://www.loc.gov/collections/sanborn-maps/
- LAPL's guide to the L.A. set, including its street index and the volume
  key map: https://www.lapl.org/collections-resources/research-guides/sanborn-atlases
- ProQuest Digital Sanborn Maps (1867–1970) — many more years than LOC has
  online, but it needs a library card, so it is a human-only path.

**L.A. city editions**, per LAPL's guide: 1888 (downtown only), 1894
(slightly wider), 1906 (updated through ~1930), 1950 (corrected), then
1960/1962/1963/1967/1970 for the city. LOC's online coverage is partial.

### The dating caveat that matters most

Bound Sanborn volumes were kept current by pasting correction slips over the
base sheets, for decades — LOC dates the volume checked in 2026-08 as
"1906 – Jun 1950." A sheet from such a volume is therefore a palimpsest, and
the edition date is **not** the date of every feature on it. Consequences:

- Prefer 1888 and 1894 as clean anchors; treat the 1906 volumes as
  "1906 or later" unless the sheet itself dates the correction.
- Cite the correction state, not just the edition:
  `{ title: "Sanborn fire insurance map, Los Angeles, vol. N, sheet NN (1906 edition, corrected to [date shown]) — labels this stretch \"Palm St\"", url: "https://www.loc.gov/item/…" }`
- When a name appears on what is visibly a pasted slip, say so — the slip's
  own date is the claim, not the volume's.

This is a genuinely different risk from a recorded map, which is frozen at
its recording date. It cuts the other way too: a paste-on is itself dated
evidence of a change, which is exactly what this project wants.

### Index first — the cheap pass

Every volume carries a street index and a key map to the edition. The index
is a name→sheet lookup, which means that read across editions it is a **name
gazetteer per year**: transcribing the index sheets of 1888, 1894, 1906 and
1950 yields an existence timeline for every street in the city from roughly a
dozen images, with no plat-reading at all.

Two reasons to do this before reading any sheets:

1. It is the prioritization tool — it says which names appear, disappear, or
   move between editions, i.e. which streets have a question at all.
2. It is text, not plat ink, so it sidesteps the stage-2 visual-grounding
   bottleneck (PIPELINE.md) almost entirely.

### Reading sheets

Same **downloads-first** rule as tract maps: get the images into the project
folder, then read them locally (`pdftoppm`/render, crop, zoom) rather than
squinting through a browser viewer.

Access, verified 2026-08: LOC **item pages** read fine through a fetch tool,
but the collection search, the JSON API (`?fo=json`) and the IIIF manifest
all return 403 to automated fetching. So acquisition is a browser or human
step — the same division of labor `tracts/` already uses.

For georeferencing, Sanborn is friendlier than an 1890s plat: north-up,
consistent scale, and a street network much closer to the modern graph, so
one alignment per sheet covers many streets and the classical-CV
auto-alignment idea (PIPELINE.md, reduction 2) has better odds here than
anywhere else in this project. Everything else is unchanged — above all the
rule that identification is by geometry, never by name.

### Annexed cities

Sanborn published Hollywood, Highland Park, San Pedro, Venice, Eagle Rock and
the rest as their **own** city volumes before annexation, so search LOC by
those city names, not "Los Angeles," as coverage grows. Annexation is also a
renaming event class in its own right: duplicate names with existing L.A.
streets had to be resolved at or after annexation, which makes the
pre- and post-annexation editions of an annexed city a natural bracket.

## City directories (LAPL ResCarta)

- https://rescarta.lapl.org/ResCarta-Web/jsp/RcWebBrowse.jsp

Holdings seen 2026-08: L.A. city directories **1873–1907** (some years in
several editions), plus a separate "Los Angeles Street – Reverse Directories"
sub-collection.

**Access:** ResCarta is a JavaScript app — its browse links are
`javascript:void(0)` and fetch tools see nothing usable. Browser (Claude in
Chrome) or human, the same class as NavigateLA and CDNC.

What they offer this project:

- A street/avenue guide section listing each street with its extent in
  cross-streets — extent language in exactly the form `from`/`to` wants.
- Annual granularity: a name that changes between the 1896 and 1898 editions
  is bracketed within a year or two, far finer than Sanborn's decade gaps.
- ~~A name-conversion table after a mass renaming.~~ **Tested 2026-08,
  negative:** the 1898 directory prints no list of the 1897 changes, and the
  1897 edition says it already incorporates the 326 council changes without
  tabulating them. Worth knowing as a general lesson about this source: the
  directories absorb a renaming silently, so they bracket a change but do not
  document it. (The ordinance itself is now identified as No. 4093 N.S.,
  Ordinance Book IV p. 337 — see omnibus-1897-renaming-council-minutes.md.)
- The reverse/street directories add house numbering, which is how to tell
  renumbering apart from renaming.

**Caveat:** a directory records usage, not law. It can lag an ordinance by an
edition, or print both names during a transition. Strong for brackets, weak
as a date for the change itself — pair it with the ordinance trail rather
than substituting for it.

## Conventions (proposed; not yet exercised)

- One folder per sheet, as for every document: `documents/sanborn-1894-v1-s12/`
  and `documents/directory-1897/`, each holding its own Part A transcription
  (`<id>-partA.md`) beside the document file, per
  `handbook/TRANSCRIPTION-TEMPLATE.md`'s Part A / Part B split — Part A
  verbatim (labels as lettered, correction-slip dates, index rows), Part B
  the modern identifications with their basis. The split matters more here,
  not less: one Sanborn sheet can produce dozens of Part B rows.
- `check-data.js`'s `PRIMARY` regex doesn't yet recognize `loc.gov` or
  `rescarta.lapl.org`; add them when the first such source lands, so the
  primary-anchor count stays honest.
