# Switchover — what is left, and whose it is (2026-09-15)

The one list to read before the transition: everything still standing between
today (index.html renders the hand-authored `streets-data.js`; preview.html
renders the generated data) and the flip (preview becomes index, the old
index is deleted, `streets-data.js` is generated). **This is Kenny's list**;
the instance-side mechanics are the checklist in MODEL-IMPLEMENTATION.md and
are only summarised here. Numbers are a snapshot from the day this was
written — `node check-legacy.js` and `node check-data.js` reprint them.

## Where things stand

| | |
|---|---|
| A — vocabulary out of the data file | ✔ done |
| B — one name normalisation, tunnel folded into 2nd Street | ✔ done (this file's date) |
| C — generator writes `streets-data.js` | partly: the vocabulary is no longer re-emitted and preview.html loads site-config.js; the output path, the header date and the CI regeneration check are not done |
| D — preview → index, old index deleted | not done; the three edits are listed at the top of preview.html |
| E — checker and CI | ✔ done, except the decision about what check-data.js is for afterwards |
| F — docs | pending the flip |
| the corpus itself | **the work below** |

Three checkers gate the flip. `node check-model.js` (authored layers) is
clean. `node check-data.js` run on the generated file has **3 errors**, all
real (§1). `node check-legacy.js` — new today — asks whether the new map still
says everything the old one said, on the same ground, and has **121 hard
findings** (§2–§4). The flip waits for those three lists to be empty or
accepted.

## 1. Three rows on the wrong street — *you, in the map tool*

Each makes a timeline end in a former name (`until: "?"` after the current
one); the checker refuses the file while they stand. Rule 2: the sheet's label
went onto the ground of the neighbouring street.

| generated segment | document | label read | should be on |
|---|---|---|---|
| 5th Street::8 (part of, "6th St") | M.R. 84-53, Grace C. Longley property, 1902 (`mr084-053`) — the row is written `street: "5th Street"`, `name: "sixth-street"` | SIXTH ST. | presumably 6th Street |
| 9th Street::1 (beyond Main, "Moran's Lane") | Botiller and Reyes lots, 1873 (`documents/11824`) | Moran's Lane | a lane between Main and Spring near 7th–9th — probably not 9th at all |
| Main Street::9 (part of, "Los Angeles St") | M.R. 39-69, Jones and Ponet Block, 1889 (`mr039-069`) | Los Angeles St. | Los Angeles Street |

`node diff-street.js "5th Street"` shows the segment; the row is the one with
that `asWritten` in the document file. Fix the row's `street` (and its extent
if it was snapped to the wrong line), re-run `node generate.js`, then
`node check-data.js` against the output — the E-item copy of the checker in
MODEL-IMPLEMENTATION.md says how.

## 2. Ground the old map painted blue that the new map paints grey — *your last batch of maps*

`check-legacy.js` overlays each legacy entry's ground on the generated
segments and asks what fraction is `attested` (a document speaks about it).
The old map painted every entry blue on the strength of any source, Wikipedia
included; the new one is blue only where a document covers the ground. So
"0% attested" means **no document in the corpus covers this street at all**,
whatever the old entry cited. 70 legacy entries are below 50 %; 44 more are
partial (soft). These are the streets your remaining maps should reach if
they can, and each one you cannot reach is an *accept* (§5) rather than a fix.

**No document touches them (whole street, 0 %):**

```
0%  Boylston Street
  0%  Georgia Street
  0%  Delong Street
  0%  Wilde Street
  0%  Industrial Street
  0%  Colyton Street
  0%  Palmetto Street
  0%  Factory Place
  0%  Molino Street
  0%  Seaton Street
  0%  Myers Street
  0%  Anderson Street
  0%  Mill Street
  0%  Utah Street
  0%  Decatur Street
  0%  Jesse Street
  0%  Keller Street
  0%  7th Place
  0%  Channing Street
  0%  Conway Place
  0%  Lawrence Street
  0%  Plaza Del Sol
  0%  Ducommun Street
  0%  Toriumi Plaza
  0%  17th Street
  0%  18th Street
  0%  Harbor Freeway
  0%  Santa Ana Freeway
  0%  Hollywood Freeway
  0%  Santa Monica Freeway
  0%  San Bernardino Freeway
  0%  Arroyo Seco Parkway
  0%  I-10 Metro ExpressLanes
  0%  Marion Avenue
  0%  Cleveland Street
```

The freeways, the ExpressLanes and the plazas are legacy-only ground by
design (ROADMAP §7 says so); those are accepts, not maps. The rest are the
list.

**Partly or barely covered (hard: below 50 %):**

```
  0%  3rd Street — east of Mission Rd (discontinuous)
  0%  5th Street — west of Figueroa
  0%  5th Street — east of Hewitt
  0%  6th Street — west of Figueroa
  0%  Olympic Boulevard — east of Central Ave (former 9th St)
  2%  4th Street — west of Figueroa
  5%  1st Street — west of Figueroa
  5%  Central Avenue — north of 1st
  6%  3rd Street — Boylston to Figueroa
  8%  Cesar E Chavez Avenue
 10%  4th Street — east of Hewitt
 13%  Boyd Street
 14%  8th Street — west of Figueroa
 15%  Santa Fe Avenue
 15%  Hewitt Street — 4th to Palmetto (Carolina St)
 16%  Vignes Street
 16%  5th Street — Alameda to Hewitt (Poplar St)
 17%  2nd Street — west of Figueroa
 18%  Garey Street
 18%  James M Wood Boulevard
 19%  Mateo Street
 22%  7th Street — west of Figueroa
 27%  Willow Street
 28%  Temple Street
 28%  3rd Street — west of Bixel
 31%  2nd Street — east of Alameda (Guadalupe St)
 33%  4th Place
 39%  Imperial Street
 43%  10th Street
 46%  Mesquit Street
 46%  Court Street
 47%  Jackson Street
 48%  1st Street — east of Main
 48%  7th Street — east of Main
 49%  College Street
```

`node check-legacy.js --verbose` prints, for each, which generated segments
are grey.

## 3. Names the old map recorded that the new map does not — *fix or accept*

15 findings. Some are the omnibus renaming files that are not encoded yet
(Walters → Ord, Macy → Cesar Chavez, Carolina → Hewitt, Weller → Onizuka,
San Pedro → Aiso, Stephenson → Traction, Virginia → Delong); some are the
1849–1870s Spanish names that only the legacy prose carried (Calle Cuidado,
Calle de Caridad, Calle Real, Calle de los Negros, Buena Vista); Miramar's
Ocean View / Nob Hill and Boylston's Figueroa / De La Guerra are the tract
sheets and the 1897 ordinance not yet reaching that ground; and the
freeways' former names are accepts. `node check-legacy.js | grep names`
prints the list with the street each belongs to.

## 4. Fifty legacy streets have no entity in names.js — *an instance, then you*

The old file's namesake research was never carried into `names.js`: **50 of
the 107 legacy streets bind to OSM stubs**, and on 36 of them the old map
had a `namedAfter` that the new map now answers with nothing. Three special
cases first, because they are not migrations:

- **`pico`** exists but its only form is "Pico Street"; OSM says "Pico
  Boulevard", so the way binds to a stub. Add the current form in the names
  tool.
- **`boylston`** exists, is bound, and has `namedAfter: null` — the legacy
  entry had "Boston's Boylston Street, suggested in 1897 by O. T. Johnson…".
- **Georgia Street** is an ambiguous OSM bind (`georgia-east` vs
  `georgia-bell`, see generated/report.md); the generator refuses to guess.
  It resolves the day one of them has a row on that ground.

Then the migration: for each of the other streets, an instance makes the
entity in the names tool from the legacy entry's `namedAfter`,
`namedAfterLink`, `categories` and `sources` — the prose was mostly
agent-drafted in the old file too, so this is a move, not a rewrite — and you
read them in the names tool at whatever pace you like (§3.2 approval is not a
gate, per your call). The 36 with a namesake to carry:

```
Grand Avenue
Boylston Street
Georgia Street
Delong Street
Industrial Street
Mateo Street
Colyton Street
Seaton Street
Keller Street
4th Place
7th Place
Santee Alley
San Julian Street
Judge John Aiso Street
Astronaut Ellison S Onizuka Street
Ducommun Street
Toriumi Plaza
14th Street
17th Street
18th Street
Olympic Boulevard — west of Central Ave (former 10th St)
James M Wood Boulevard
Harbor Freeway
Santa Ana Freeway
Hollywood Freeway
Santa Monica Freeway
San Bernardino Freeway
Arroyo Seco Parkway
I-10 Metro ExpressLanes
Court Street
Miramar Street
Cleveland Street
Ord Street
Cesar E Chavez Avenue
Pico Boulevard
Venice Boulevard
```

The other 14 had `namedAfter: null` in the old file as well, so a stub says
the same thing and they can wait for research.

## 5. Accepting what you will not fix — *you*

`legacy/accepted-differences.js` is the file. One line per finding: the
legacy street key, the legacy segment label (`"*"` for a whole-street
entry), the check (`coverage` / `names` / `namesake` / `dates` /
`sources`), and a reason. The harness prints an accepted finding as such and
never fails on it. Nothing is accepted yet. Obvious first entries: the six
freeways and the ExpressLanes for `coverage` and `namesake`; the plazas.

## 6. Two small names.js prose items — *you, names tool*

`check-data.js` warns on the generated output:
- **Spring Street** has a `{{Trinidad Ortega}}` span and no `namedAfterLink`
  — the marker is harmless (the map strips it) but a link was meant.
- **Mesquit Street** has a link and no `{{span}}`, so the whole sentence is
  the link; wrap "mesquite".

## 7. Instance work you can hand off, in order

1. **The three rows** (§1) if you would rather an instance found and fixed
   them — but a person confirms.
2. **The 50 entities** (§4).
3. **Checklist C** — output path, drop the header date, retarget
   `diff-street.js` / `preview-test.js` / deploy.yml, add the regeneration
   check; then **D** and **F**. All in MODEL-IMPLEMENTATION.md.
4. **`test-review.js` is stale** — it lists `clipRun`, which map-tool.html no
   longer defines (it fails at HEAD, before any of today's edits). The other
   suites pass: doc-geometry 42/42, names-tool 89/89.
5. **Run the browser suites in a sandbox** after today's B: map-tool.html
   and preview.html both gained a `<script src="site-config.js">` line and
   the tool's `normalize` is now site-config's. `browser-test.js` and
   `preview-test.js` need Playwright, which is not on this machine.
6. **Style-budget warnings** (70-odd, long notes / namedAfter) now fire on
   names.js prose through the generator on every deploy; move them to
   `check-model.js` or the names tool, once per entity.
7. **The four re-keyed documents** (`mr053-069`, `12685`, `mr001-489`,
   `mr005-307-a`): their rows now say `2nd Street`, but their
   `<id>-streets.json` and `TASK.md` still list the tunnel as a street and a
   crossing. Both are tool output and are rewritten on the next save in the
   map tool; nothing reads them for the model, so this is cosmetic until then.

## 8. Order

§1 first (the checker refuses the file). Then your maps (§2) while an
instance does §4; accept the rest (§5). Then the instance runs C, D, F, and
the three checkers are the gate: `node check-model.js && node generate.js;
node check-data.js --require-generated && node check-legacy.js`.
