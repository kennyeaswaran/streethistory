# -*- coding: utf-8 -*-
"""Update the in-person / online notes after the 2026-09-17 name batch."""
import io, sys


def sub(path, old, new):
    s = io.open(path, encoding="utf-8").read()
    if s.count(old) != 1:
        sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
    io.open(path, "w", encoding="utf-8").write(s.replace(old, new, 1))
    print("patched", path)


def append(path, text):
    s = io.open(path, encoding="utf-8").read()
    io.open(path, "w", encoding="utf-8").write(s.rstrip("\n") + "\n" + text)
    print("appended", path)


# ═══════════════════════════════════════════════════════════ CLAUDE.md
sub("CLAUDE.md",
'''  - **Three sources LIE rather than fail** — they answer, ignoring your query,
    with stale or default results, so a search that was never run looks like a
    clean negative. Run a deliberate nonsense control term first, every time:
    `lastreetnames.com/?s=` (use `/search/<term>/` instead, which works),
    `losangelesrevisited`'s RSS `?q=`, and archive.org's `advancedsearch.php`
    and `fulltext/inside.php`. This has already produced false negatives here.''',
'''  - **Sources that LIE rather than fail** — they answer, ignoring your query,
    with stale or default results, so a search that was never run looks like a
    clean negative. **Run a deliberate nonsense control term first, every time,
    and a POSITIVE one too** (a term you know is in there): a nonsense control
    only catches the endpoint that answers everything, not the one that answers
    nothing. Known liars: `lastreetnames.com/?s=` (use `/search/<term>/`
    instead, which works), `losangelesrevisited`'s RSS `?q=`, archive.org's
    `advancedsearch.php` and `fulltext/inside.php`, and — found 2026-09-17 —
    **`digitalcollections.lmu.edu/documents?q=`**, which returns "Sorry, no
    results found" to a query whose record demonstrably exists. Every one of
    these has produced a false negative in this project.
  - ⚠⚠ **`curl` FAILS SILENTLY EMPTY THROUGH THE AGENT PROXY.** Found
    2026-09-17, after two research agents filed false negatives from it: the
    proxy returns 403 on CONNECT for `data.lacity.org` and `stevemorse.org`,
    and curl then exits with **no output and no error text**, which is
    indistinguishable from "the search found nothing". **Use WebFetch for those
    hosts, not the shell**, and treat any empty curl result as a tooling
    failure until a positive control says otherwise. This is the same class of
    bug as the archive.org one and it cost the same thing.''')

sub("CLAUDE.md",
'''  - **Dead:** chroniclingamerica.loc.gov (404, API retired), loc.gov collection
    search (403), HathiTrust babel, Calisphere *search* (item pages are fine),
    Nominatim, Overpass, Google Books API (persistent 429).''',
'''  - **Dead:** chroniclingamerica.loc.gov (404, API retired), loc.gov collection
    search (403), HathiTrust babel, Nominatim, Overpass, Google Books API
    (persistent 429), elephind.com (403).
    ⚠ **Calisphere is now robots-blocked for ITEM PAGES too**, not just search
    (2026-09-17) — an earlier note here said item pages were fine and that is no
    longer true. **`losangelesrevisited.blogspot.com/search?q=` is likewise
    robots-blocked**, so the whole of that site's search is out, not only its
    RSS; reach its posts through a general web search instead.''')

# ═══════════════════════════════════════════════════════ IN-PERSON.md
sub("handbook/IN-PERSON.md",
'''| **Market Street / West Market Street** | West Market has no entity and we only know it from Guinn |''',
'''| **Market Street / West Market Street** | West Market has no entity and we only know it from Guinn |
| **Witmer Street** | ⭐ NEW. Three 1885–87 tract names lie on this one line — Bryan, Nichols, Logan — and the Oct. 1888 committee wanted the lot called NICHOLS. Witmer won instead and nothing says when or why |
| **Garland Avenue** | confirm Kines's 1897 date for Holmes → Garland against the Bureau's own record |
| **Ingraham Street** | who Ingraham was. A firm three-way negative online; Kimball is the next place |
| **Anderson Street** | who Anderson was, and what became of the Anderson Avenue folded into it in Oct. 1888 |
| **Loma Drive** | when Belmont Avenue became Loma Drive — the sheets bracket it but nothing dates it |''')

sub("handbook/IN-PERSON.md",
'''- Anything for the **Harvey Tract** (M.R. 10-77, 1886) — would give Adele a
  family; and **Tract No. 320** (1908), which would give Nina one.''',
'''- Anything for the **Harvey Tract** (M.R. 10-77, 1886) — would give Adele a
  family; and **Tract No. 320** (1908), which would give Nina one.

---

## 3a. County map books — FIVE TITLE BLOCKS, and they are the best leads we have ⭐

Added 2026-09-17, after a 43-entity research batch in which the same answer
came back over and over: *the subdivider is not on the open web, and the sheet's
own title block would name him.* These are recorded filings — findable objects,
not searches — and each one would settle several entities at a stroke. The route
is **NavigateLA** (JavaScript-only, so a browser) or the County map books
directly.

| Sheet | Would settle |
|---|---|
| **The A. Weill tract** ⭐⭐ | `weill` has no first name, an `extensive` empty search behind it, and a confirmed ZERO in Newmark. The Oct. 1888 committee names an "A. Weill tract" with a Cedar Street in it — so the man filed a subdivision, and its title block has his full name. Not the sheet Weill Street sits on; a sibling. |
| **Map of the Clement Tract**, M.R. 17-41 (1887) | ⭐ Six names, none identified: Anderson, Clementina, Grace, Myers, Rio, Shenandoah. No digitised copy exists in ANY reachable catalogue — not Calisphere, not LMU, not UCLA's tract-map index, not the OAC finding aid. The title block is the only route. |
| **Map of Colina Park**, M.R. 7-36 (1885) | ⭐ Twelve streets, a Spanish naming scheme nobody states, and an unnamed subdivider. SurveyLA dates the tract and says nothing more. |
| **Map of the Kennedy Tract**, M.R. 6-193 (1885) | Bryan, Holmes and Lincoln Place all come off this one sheet and Kennedy himself is untraced. Four entities, one title block. |
| **Subdivision of the Bigelow Tract**, M.R. 24-81 (1887) | Bigelow is untraced. ⚠ One unopened lead: a Calisphere record titled *"Bigelow, L. M. - Downtown Los Angeles parcel"* — robots-blocked, never seen, so "L. M. Bigelow" is a string from a search result and nothing more. |

### And one sheet to re-read that is already on the shelf ⚠⚠

**M.R. 7-36 (Colina Park), the street this project has as GRAVITTA.** Garrigues
prints **GRAVILLA**, with an extent that matches our row exactly, and *gravilla*
is an ordinary Spanish word (fine gravel) that fits the tract's other three
Spanish ground-words. **"Gravitta" is attested nowhere** — not as a surname, a
place or a word, in any source. This is the Labury/Labory shape of error again:
a tt/ll confusion in a plat hand. `gravitta-st` is marked `disputed: true` and
carries both forms until someone looks at the ink.''')

sub("handbook/IN-PERSON.md",
'''**Also at LAPL:** the **city directories, 1873–1907** (ResCarta, which is
JavaScript-only so we cannot touch it). The single highest-value directory
lookup is **1886–87, for "Lemon Street"** — Kines says D. C. Wilson was living
on it, and the directory entry would place it.''',
'''**Also at LAPL:** the **city directories, 1873–1907** (ResCarta, which is
JavaScript-only so we cannot touch it). The single highest-value directory
lookup is **1886–87, for "Lemon Street"** — Kines says D. C. Wilson was living
on it, and the directory entry would place it.

⭐ **TWO MEN THIS PROJECT KNOWS ONLY BY AN INITIAL**, added 2026-09-17, and a
directory would expand both in one visit:

- **M. TEED** — contractor and builder, shop on First Street between Main and
  Spring, on the Common Council in 1873, still an old settler in 1897. Three
  independent sightings and not one gives his given name. `teed-street` rests on
  him. The **Common Council rolls** at the City Archives would do it too, as
  would the **Old Settlers' Society** membership list (founded Aug. 2, 1897 —
  Newmark, p. 614).
- **A. WEILL** — see §3a. A directory would give the name; the map book would
  give the tract.''')

# ═════════════════════════════════════════════════ CDNC-QUERIES.md
sub("handbook/CDNC-QUERIES.md",
'''### Two new searches the 1888 list generates''',
'''### Results of the 2026-09-17 name batch, for the record

Forty-three entities were researched on 2026-09-17 using the sources above. What
is worth adding here is the **negatives**, because each one is a search somebody
would otherwise run again. All were taken with both a nonsense control and, where
the endpoint supports it, a positive control.

**Kines has NO PAGE AT ALL** for: Loma Drive, Collado, Colina (or Colina Park, or
Crown Hill), Arch Street, Crown Hill Avenue, Acacia (downtown), Shenandoah *(any,
anywhere — he has never written the word)*, Artemus, Clementina, Myers Street,
Anderson Street, Kearney Street, Bigelow, Atchison/Topeka/Freight *in Los Angeles*
(his Atchison is Pasadena), Nichols Avenue, Logan, Ventura *(this ground)*,
Ingraham, Hartford, Willow Street, Bryan Street *(this ground)*, Holmes Street,
Kennedy, Strelitz *(he mentions the man only in passing, on the Union Avenue page)*.

**Garrigues has NO ENTRY** for: Arch, Texas, North, Vernon, Loma, Crown, Union,
Downey, Clementina, Clement, Myers, Anderson, Shenandoah, Grace, Artemus, Atchison,
Garland, Kennedy, Ingraham, Hartford, Ventura, Logan, Nichols, Willow *(any)*,
Strelitz, Maryland.

**Gone from the city registry** (so: retired names, not surviving streets):
Clementina, Shenandoah *(east side)*, Strelitz, Collado, Gravitta/Gravilla,
Atchison, Freight, Topeka *(the city's one Topeka is a Valley drive)*.

⚠ **Two registry findings that reverse the obvious assumption**, both worth
keeping: the city holds exactly ONE **Azusa Street** and it is the Boyle Heights
one, not the Little Tokyo alley of the 1906 revival — the famous street no longer
carries an official name. And **Clarence Street still exists** (grid 634J5)
despite Garrigues putting it under Paseo El Coronel; only its northern stretch is
gone.

### Two new searches the 1888 list generates''')

sub("handbook/CDNC-QUERIES.md",
'''| 10 | `"Molino"` | ✘ **NOT YET RUN.** |''',
'''| 10 | `"Molino"` | ✘ **NOT YET RUN.** |
| 15 | `"Clement tract"` ⭐ | **NEW, and the highest-value newspaper search on the list.** Six untraced names come off that one 1887 sheet and no digitised copy of it exists anywhere reachable. A boom-era real-estate column naming the subdivider would settle `clementina-street`, `myers`, `anderson`, `grace` and `shenandoah-avenue` together. |
| 16 | `"Colina Park"` ⭐ | Same shape: twelve streets, a Spanish naming scheme nobody states, an unnamed subdivider. SurveyLA gives only "In 1885, the Colina Park tract was developed adjacent to the western terminus of the proposed 2nd Street cable railway." |
| 17 | `"Bigelow tract"` | Would name the Bigelow behind Atchison, Topeka and Freight Streets. |
| 18 | `"Kennedy tract"` | Bryan, Holmes and Lincoln Place come off this 1885 sheet; Kennedy is untraced. |
| 19 | `"Byram & Poindexter"` | The agents who sold the E. B. Millar Property in Feb. 1887, from 27 W. First St. Their own advertisements may carry the lot plan with the street names on it — the one live lead on Channing, Lawrence and Warren. |''')

sub("handbook/CDNC-QUERIES.md",
'''- **A Facebook thread**, `facebook.com/groups/echoparkhistory/posts/1741372899282840/`,
  titled *"What is the origin of Diamond Street's name in Los Angeles?"* —
  robots-blocked. Bears on the gemstone set, since Diamond is the sixth member.''',
'''- **A Facebook thread**, `facebook.com/groups/echoparkhistory/posts/1741372899282840/`,
  titled *"What is the origin of Diamond Street's name in Los Angeles?"* —
  robots-blocked. Bears on the gemstone set, since Diamond is the sixth member.
- ⭐ **`crownhillchronicles.blogspot.com`** — a dedicated Crown Hill local-history
  blog, posting since 2009. It refused an automated fetch on 2026-09-17 with a
  permanent https→http redirect loop, and it is **the likeliest place on the open
  web to name the Colina Park subdivider** — which would unlock `colina-ave`,
  `loma-drive`, `collado-st`, `gravitta-st`, `arch-st`, `acacia-st`, `silver-st`,
  `union-avenue`, `union-st`, `north-ave`, `northern-ave`, `vernon-ave`,
  `texas-st` and `western-ave-colina-park` at once. **A browser would probably
  open it.** Nothing else on this page is worth as many entities.
- **Calisphere item pages** are robots-blocked as well as its search
  (2026-09-17). The one thing wanted behind it is a record titled
  *"Bigelow, L. M. - Downtown Los Angeles parcel"*.''')

append("handbook/research-leads.md", '''
---

## 2026-09-17 (late) — the 43-entity batch out of names-new.js

Everything the tool had minted was researched and moved into `names.js`, which
is now 292 entities and `names-new.js` is empty. Three web-research agents ran in
parallel on disjoint name sets; the corpus side — the Oct. 1888 committee list,
Newmark, and the row geometry — was done here.

### What the 1888 list settled that no amount of searching would have

Six of the batch were answered by a document transcribed earlier the same day.
This is the argument for transcribing instruments in full rather than in the
lines you happen to need:

- **`north-ave` and `northern-ave` are one roadway.** Their rows, on two sheets a
  year apart, are the same line to five decimals — and the committee list has
  *"Northern Ave. and North Ave., in Colina Park tract, changed to North St."*
- **`rio-avenue` → `rio-st` → `anderson`** is a complete chain with a document at
  each join: the 1888 proposal, a 1908 sheet lettering the result, and an L.A.
  City Planning district record for the mid-1920s Union Pacific extension.
- **`ventura-ingraham`** was minted on alignment alone; the committee says it in
  its own words. One of the few 1888 proposals that demonstrably took.
- **`atchison-st` / `topeka-st`** are placed by *"Topeka St., near river"* against
  Garrigues's other, South Los Angeles Topeka.
- **`grace`** — proposed for Mono in 1888; Kines dates the act to 1889. A useful
  calibration on how long that committee's items took to land.

### ★★ The Witmer absorptions

*"Witmer St., Nichols St. and Logan Ave., changed to **Nichols** St."* Three
separate 1885–87 tract names — Bryan, Nichols, Logan — lie on the line of modern
**Witmer Street**, and the council's committee wanted the whole thing called
Nichols. **The ground says Witmer won.** That is the clearest instance in the
corpus of a committee proposal losing to a name already in use, and it is why the
1888 list is graded as intentions rather than acts.

### ★★ Texas → Belmont → Loma, from three facts that looked unrelated

`texas-st`'s row ends at 34.06341,−118.26308. `belmont-ave`'s 1886 row **begins**
at 34.06341,−118.26308. End to end on one line. So: Belmont Avenue already existed
beside Texas Street in 1886; `lah-1887-01-04` renamed Texas to match its
neighbour; modern Belmont Avenue therefore stands on what was Texas, and the
original Belmont stretch became **Loma Drive**. ⚠ Kines has modern Belmont coming
from AZTEC Avenue, which is a third account of the same corner and is reconciled
with neither.

### Identified

| | |
|---|---|
| `garland` | **William May Garland** (1866–1948) — the tract is his, and he brought the 1932 Olympics to Los Angeles. Two independent sources, and the dates interlock with the Holmes → Garland renaming |
| `shatto-st` | **George Rufus and Clara Ruth Shatto** — named 1891 after their own "Vieudelou" was rejected. ★ Shatto also developed **Orange Heights**, which is where `logan-ave` and `ventura-ingraham` come from |
| `utah-st` | **Thomas W. Collins** petitioned for it in 1896, on **Henry J. Woollacott**'s land — both Salt Lake City men. A rare case where the PROPOSER is documented rather than the honoree |
| `clarence-st` | **Clarence Casper Cummings** (1881–1968), aged thirteen, on his parents' land |
| `strelitz-st` | **Jacob Strelitz**, merchant tailor, owner of the adjoining Fairview tract — `inferred`, and Kines is the sole witness |
| `nichols-ave` | **John Gregg Nichols**, mayor, or his son — `inferred` from Kines placing him as prior owner of this exact ground |
| `atchison-st` etc. | the **Atchison, Topeka & Santa Fe**, whose subsidiary the California Central reached Los Angeles five months before the depot tract was recorded |
| `colina-ave` + 3 | a **Spanish ground-word set** — colina, loma, collado, gravilla — on a tract called Colina Park, on a hill |

### ⚠ The one that needs Kenny's eyes: GRAVITTA or GRAVILLA

The entity was minted from ink read as *Gravitta*. Garrigues prints **Gravilla**,
with an extent matching our row exactly; *gravilla* is Spanish for fine gravel and
fits the tract's other three Spanish ground-words; and **"Gravitta" is attested
nowhere at all** — not as a surname, a place or a word, in any source searched.
This is the Labury/Labory error again. `disputed: true`, both forms carried, until
someone re-reads M.R. 7-36. Written up in `handbook/IN-PERSON.md` §3a.

### ⚠ And one duplicate, which is why check-model was red

`lucas-ave` was the same street as the existing `lucas-avenue` — same name, same
corridor, 1.4 m apart at the join. The row on `mr007-056` was repointed and the
stub dropped. That was the `lucas avenue` disambiguation error Kenny hit.

### What came back empty, and why that is worth writing down

The **Clement Tract** (six names) and the **Kennedy Tract** (three) both defeated
every online route, and for one identifiable reason: *no digitised copy of either
sheet exists in any reachable catalogue*, and every 1880s newspaper full-text
archive is dead or robots-blocked. The answers are in the title blocks. Five such
sheets are now listed in `handbook/IN-PERSON.md` §3a as findable objects rather
than searches — which is a better kind of lead than anything a search returned.

### Tooling, and it cost two false negatives before it was caught

⚠⚠ **`curl` fails SILENTLY EMPTY through the agent proxy** — 403 on CONNECT for
`data.lacity.org` and `stevemorse.org`, with no output and no error text, which is
indistinguishable from "nothing found". Two agents filed false negatives from it
before a positive control caught it. **Use WebFetch for those hosts.** Also new:
`digitalcollections.lmu.edu/documents?q=` ignores the query and answers "no
results" to a record that exists; Calisphere now robots-blocks item pages as well
as search; and `losangelesrevisited`'s HTML search is blocked, not just its RSS.
All four are in CLAUDE.md. **The lesson that keeps recurring: a nonsense control
only catches the endpoint that answers everything. Run a positive control too.**
''')
