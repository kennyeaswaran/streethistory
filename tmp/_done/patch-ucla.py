# -*- coding: utf-8 -*-
"""The UCLA pass, 2026-09-18: the Viole map has a call number and sits in an
open-access map case; the compiled-ordinance series turns out to exist; M. Teed
gets a first name; and the library hours make tomorrow impossible."""
import io, re, sys


def sub(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


# ══════════════════════════════════════════════════ IN-PERSON.md §1
sub("handbook/IN-PERSON.md", [
 ("""## 1. UCLA — the 1903/04 Chamber of Commerce city map ⭐ TOP PRIORITY

**What:** the Los Angeles Chamber of Commerce city map of 1904, **compiled and
drawn in 1903 by Félix Violé**. Held in the UCLA map room (this is the copy
George Garrigues worked from for his street-changes list, which is how we know
it is there).""",
  """## 1. UCLA — the 1903/04 Chamber of Commerce city map ⭐ TOP PRIORITY

### ★★★ IT HAS A CALL NUMBER. Found 2026-09-18 in UC Library Search.

> **Map of Los Angeles / compiled & drawn by Félix Violé for the Chamber of
> Commerce.** 1904, ©1903. OCLC 25268136.
> **YRL — A-Level Map Cases — `G4364 Los Angeles P2 ns Violé 1904`**
> (a second copy: LSC, YRL Special Collections Backlog, `SCB 135673 LOCIM`)

**This changes the shape of the errand completely.** The A-Level map cases are
**open-stack, self-service** — the guide's own instruction is to look the place
up in *MapCallFinder*, get the call-number range, and pull the drawer yourself.
**No appointment, no paging slip, no Special Collections registration, no
two-day wait.** Walk into the Young Research Library while it is open, go to the
A level, open the drawer. The LSC copy in the backlog is the one to ignore.

⚠ **THE HOURS ARE THE WHOLE PROBLEM, not access.** Checked against UCLA's own
LibCal on 2026-09-18:

| | Sat 9/19 | weekdays to 9/23 | Thu 9/24 on | Sat 9/26 on |
|---|---|---|---|---|
| **Research Library (YRL)** | **Closed** | 10am–4pm | 8am–10pm | 10am–6pm |
| **Library Special Collections** | **Closed** | 10am–4pm | 10am–5pm | **Closed — every Saturday** |
| **SRLF** | **Closed** | 1pm–5pm | 1pm–5pm | **Closed** |
| Law Library | 9am–4:30pm | 8am–9:30pm | — | 9am–4:30pm |

★ **LSC is closed every single Saturday** in the month checked — so anything
needing Special Collections is a weekday errand, permanently. **The map is not
one of those.** For the map, any open YRL day works, and **Saturday from 9/26
(10am–6pm) is fine.**

⚠ The Law Library is the only thing open on a Saturday and it is **effectively
shut to the public**: its own policy says "anyone not specifically mentioned
above is generally not authorized," with the general public admitted only to the
Federal Depository collection by advance reservation. See §1b — this matters
because the Law Library is where the ordinance volumes are.

**The old note, kept because it is still the reason to go:** this is the copy
George Garrigues worked from for his street-changes list, which is how we knew
to look. His exact sourcing, verbatim: *"Street names as listed on the 1904
Chamber of Commerce city map compiled and drawn in 1903 by Félix Violé are in
boldface … If you care to check any of these streets, you can find the map in
the UCLA map room."* Dealer descriptions say it is a folding promotional pocket
map, ~21¼ × 24 in., engraved by Thorpe, **with an alphabetised street index on
the verso** — that index is probably what Garrigues actually transcribed, and it
is the first thing to photograph.

⚠ **Not digitised anywhere I could find** — not LOC, not LAPL, not Rumsey, not
Calisphere. UCLA does run its own georeferenced viewer at
**uclalibrary.oldmapsonline.org**, which has other LA sheets on it; I could not
get its search to answer, so **one click there before driving** is worth it.""")
])

sub("handbook/IN-PERSON.md", [
 ("""**Also at UCLA if there is time:** anything in the map room catalogued to
**Félix Violé** or to the Chamber of Commerce for adjacent years — a second
edition would bracket changes rather than just snapshot them.""",
  """**Also at UCLA if there is time:** anything in the map room catalogued to
**Félix Violé** or to the Chamber of Commerce for adjacent years — a second
edition would bracket changes rather than just snapshot them.

### ⭐⭐ And a second sheet in the same building, which may matter more

> **Map of the city of Los Angeles, California / by H. J. Stevenson**, 1884
> (1966 reproduction, from the copy in Robert J. Woods's collection, 23¾ × 32¾ in.)
> **YRL — Reference Maps Collection — `G4364.L8G46 1884 .S74 1966`**

**Stevenson 1884 sits in the middle of this corpus's densest period** — the
1883–89 tract sheets — where the Violé map sits twenty years downstream of it.
A complete 1884 street-name snapshot would bear on far more entities than a 1903
one: the Hancock's Survey state-name and gemstone sheets, the Temple–Beaudry
block, Lemon/Wilson, Alabama, and the whole Oct. 1888 duplicate cull, which it
**predates by four years** — so it shows the city *before* the cull, which
nothing else in the corpus does.

✔ **And this one IS digitised, by UCLA itself:**
https://uclalibrary.oldmapsonline.org/maps/f563fb17-ea1b-4c78-aa67-258b64303166/
— georeferenced, with WMTS/GeoTIFF/IIIF export behind a sign-in. **Try this from
a keyboard before treating it as a trip at all.** ⭐ If the export works it is a
`documents/` candidate outright.

⚠ **AND THE NAME IS PROBABLY IN OUR OWN INDEX.** H. J. Stevenson was the surveyor
who made the city's 1884 official map. `stevenson-ave` currently has
`basis: "none"` and — more to the point — **no row at all**, and its internalNote
says no Stevenson found anywhere can be attached until it has ground. A city
surveyor whose map is the 1884 base sheet is a far better candidate than
anything found so far, and the same map may be what places the street. **Do not
grade it until the row exists** — but look for Stevenson Avenue *on Stevenson's
own map*, which would be a nice closed loop.

---

## 1b. UCLA — the compiled ordinance volumes ⚠ NEW, AND AWKWARDLY PLACED

**Kenny asked, 2026-09-18, whether UCLA might have the ordinance books in
print.** Answer: **there is no series that prints every ordinance by number** —
the City Clerk's ordinance books remain the only route to 16790 / 16915 / 16916 /
48435 and to 3829 / 3847 / 4093. But there IS a published series of *compiled*
ordinances, it was published by order of the Council, and **UCLA has the whole
early run**:

| Volume | Compiler | UCLA copies |
|---|---|---|
| **1878** Revised charter and compiled ordinances | Wm. M. Caswell | LAW `KFX1621 .A6 1878` · SRLF→LSC `JS1001 .A8 1878` · **also as a licensed e-book** |
| **1884** Compiled ordinances and resolutions | W. W. Robinson | LAW `KFX1621 .A6 1884` · SRLF→LSC `JS1001.A9 A3 1884` |
| **1887** Compiled ordinances and resolutions, **Vol. III** | Freeman G. Teed | SRLF→LSC `JS1001.A9 A3 1887` · **also as a licensed e-book** |
| **1889** Charter and compiled ordinances, **Vol. IV** | Freeman G. Teed | LAW `KFX1621 .A6 1889` · SRLF→LSC `JS1001 .A8 1889` |

⭐ **WHY THIS IS WORTH A DAY.** These are compilations of the ordinances *in
force*, indexed, covering exactly 1850–1889 — **the corpus's densest period and
the one where this project keeps having to infer dates it cannot document.** A
compiled volume of that era normally carries a streets chapter: opening,
grading, widening, vacating, naming. If the Feb. 1874 renaming ordinance, or
anything from the 1870s–80s street-name changes, was still in force at
compilation, its text is in one of these four books. **Nobody on this project has
ever looked.**

⚠ **THE CATCH IS ACCESS, and it is annoying.** Every volume is in one of two
places, and both are awkward:
- **Law Library** (`KFX…`, "Superseded Section") — open Saturdays, but closed to
  the public by policy. Worth an email to the Law Library first if a weekday is
  impossible; do not just turn up.
- **SRLF → "Non-Circ Request at UCLA YRL Special Collections"** (`JS…`) — these
  are off-site AND non-circulating, so they need an **LSC request at least two
  business days ahead**, and LSC is a **weekday-only** reading room. Register the
  LSC account first (speccoll.library.ucla.edu), then request all four at once.

⭐ **THE CHEAP SHOT FIRST:** the 1878 and 1887 volumes exist as **UCLA-licensed
electronic books** (no holdings attached, "1 online resource"; the OCLC numbers
sit in the range Gale uses for *The Making of Modern Law*). If that is right,
they open **in a browser on the UCLA network** with no reading room, no request
and no waiting. ⚠ Unverified — check by opening the record in UC Library Search
while on campus. If it works, two of the four volumes cost nothing.

⚠ And there is **no LA City Council minute run at UCLA at all** — print or film.
The nearest thing is *Chronological record of Los Angeles city officials,
1850–1938, compiled from the minutes of the City Council* (SRLF→LSC,
`JS1001 .A4 1966`), which is a roster, not proceedings.""")
])

# ══════════════════════════════════════════════════ IN-PERSON.md §2 — Teed
sub("handbook/IN-PERSON.md", [
 ("""- **M. TEED** — contractor and builder, shop on First Street between Main and
  Spring, on the Common Council in 1873, still an old settler in 1897. Three
  independent sightings and not one gives his given name. `teed-street` rests on
  him. The **Common Council rolls** at the City Archives would do it too, as
  would the **Old Settlers' Society** membership list (founded Aug. 2, 1897 —
  Newmark, p. 614).""",
  """- ✔✔ **M. TEED — CLOSED 2026-09-18, AND NOT IN A LIBRARY. He is MATTHEW
  TEED** (b. Budleigh, Devonshire, 17 Apr. 1828 — d. Los Angeles, 31 Mar. 1904),
  an English-born carpenter who learned the trade in San Francisco, lost a
  Stockton shop to fire in 1857, and sat on the **Common Council for three
  terms — 1870–73, 1874–76 and 1880–88**. He built a house on Fort Hill at 513
  California Street, served on the city's first Park Commission from 1895, and
  was a charter member of the Los Angeles Pioneers Association. Source: the
  Wikipedia article *Matthew Teed*, itself sourced to the **Chronological Record
  of Los Angeles City Officials (1938)** and his *Los Angeles Times* obituary of
  1 Apr. 1904. ⭐ **The 1874–76 term is the one that matters**: Teed Street is
  lettered on the Block 35½ sheet recorded **July 1876**, i.e. he was sitting on
  the Council at the moment the ground was platted.
  ⚠ **AND THERE IS A SECOND TEED IN CITY GOVERNMENT** — **Freeman G. Teed**
  (1851–1916), of Wilkes-Barre PA, city auditor 1886–88 and councilman 1892–96,
  who is the man who compiled the 1887 and 1889 ordinance volumes in §1b. He
  arrived too late to be the 1876 namesake, so this does not disturb the
  identification — but any future "Teed" hit in a city record needs sorting
  between the two. Whether they were related is unknown.
  ⚠ Still open, and now cheap: Matthew Teed's own **land**. Nothing yet connects
  him to the ground on Block 35½ beyond the coincidence of dates. ★ THE LESSON,
  again: this had been written down as a trip for the **Common Council rolls**
  and the **Old Settlers' Society list**, and it took one web search.""")
])

print("done")
