# -*- coding: utf-8 -*-
import io, sys


def sub(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit("%s: %d matches for %r" % (path, s.count(old), old[:110]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("patched", path)


def append(path, text):
    s = io.open(path, encoding="utf-8").read()
    io.open(path, "w", encoding="utf-8").write(s.rstrip("\n") + "\n" + text)
    print("appended", path)


# ── clippings/README ────────────────────────────────────────────────────────
sub("clippings/README.md", [
 ('''| `LAH18870405-pacific-coast-land-bureau.jpg` | `LAH18870405.1.7` | The Pacific Coast Land Bureau's auction colophon — San Francisco, Wendell Easton president, Geo. W. Frink general manager, Easton & Eldridge auctioneers | ✘ **nothing yet.** Kept because boom-era auction houses named streets, and none of these four surnames has been checked against the corpus |''',
  '''| `LAH18870405-pacific-coast-land-bureau.jpg` | `LAH18870405.1.7` | The Pacific Coast Land Bureau's auction colophon — San Francisco, Wendell Easton president, Geo. W. Frink general manager, Easton & Eldridge auctioneers | ✘ **nothing yet.** Kept because boom-era auction houses named streets, and none of these four surnames has been checked against the corpus |

## Not newspaper cuttings

Two more things live here because they are the same KIND of evidence — they back
a namesake and say nothing about the ground — and neither warrants a document.

| File | What it is | Supports |
|---|---|---|
| `1889-la-railway-map.jpg` | ★★ A published **"Map of Los Angeles Railway and Railroad circa 1889"**, supplied 2026-09-17 with the Echo Park History thread on Diamond Street. It glosses each cable-line street with its modern name: *"Texas St. (Belmont Ave.)"*, *"Diamond St. (Beverly Blvd.)"*, *"Lake Shore Ave. (Glendale Blvd.)"*, *"Fort St. (Broadway)"*, *"San Fernando St. (N. Spring)"*, *"Downey Ave. (N. Broadway)"*, *"Pritchard St. (Lincoln Park Ave.)"*, and shows the Temple Street and Second Street cable lines entire. ⚠ The parentheses are a modern author's annotation, not an 1889 fact. | ★★ `diamond-street`, `texas-st`, `lake-shore-ave` |
| `crown-hill-chronicles/` (5 PDFs) | Saved pages of **crownhillchronicles.blogspot.com** (2009), a neighbourhood blog, supplied 2026-09-17 after the site refused automated fetching. ⚠⚠ **HANDLE WITH TONGS.** Its own commenters correct the dating of its photographs by a decade, and its claim that the Witmers arrived in 1850 contradicts Kines's November 1884. Kenny flagged it as unreliable when supplying it. The one durable thing in it is `the-real-o.g.pdf`: *"Henry and his two siblings constructed large Victorian estates next door to one another on a dirt road and named it 'Witmer Street'"* — which is consistent with everything else here. ✘ It does **not** name the Colina Park subdividers, which was the reason for wanting it; the sheet's own title block did that instead. | `witmer-street` |'''),
])

# ── CDNC-QUERIES: close the two leads ───────────────────────────────────────
sub("handbook/CDNC-QUERIES.md", [
 ('''- **A Facebook thread**, `facebook.com/groups/echoparkhistory/posts/1741372899282840/`,
  titled *"What is the origin of Diamond Street's name in Los Angeles?"* —
  robots-blocked. Bears on the gemstone set, since Diamond is the sixth member.''',
  '''- ✔ **CLOSED 2026-09-17. A Facebook thread**,
  `facebook.com/groups/echoparkhistory/posts/1741372899282840/`, titled *"What is
  the origin of Diamond Street's name in Los Angeles?"* Kenny supplied it in
  full. **It gives no namesake** — the gemstone set is untouched — but it did two
  other things. (1) Its attached image is a published **"Map of Los Angeles
  Railway and Railroad circa 1889"**, now `clippings/1889-la-railway-map.jpg`,
  which glosses seven streets with their modern names and independently
  corroborates Texas → Belmont. (2) The post contradicts itself about what
  Diamond Street became — its author says Beverly Blvd., the railway society it
  quotes says West First Street — and **this corpus's own rows arbitrate**: the
  eleven `diamond-street` rows fall into three contiguous longitude bands, west
  to east, on Beverly Boulevard, 1st Street and the surviving Diamond Street,
  with `mr007-056` handing over between the first two at −118.26042. One street,
  three modern names, and both published claims true of different thirds.'''),

 ('''- ⭐ **`crownhillchronicles.blogspot.com`** — a dedicated Crown Hill local-history
  blog, posting since 2009. It refused an automated fetch on 2026-09-17 with a
  permanent https→http redirect loop, and it is **the likeliest place on the open
  web to name the Colina Park subdivider** — which would unlock `colina-ave`,
  `loma-drive`, `collado-st`, `gravilla-st`, `arch-st`, `acacia-st`, `silver-st`,
  `union-avenue`, `union-st`, `north-ave`, `northern-ave`, `vernon-ave`,
  `texas-st` and `western-ave-colina-park` at once. **A browser would probably
  open it.** Nothing else on this page is worth as many entities.''',
  '''- ✔ **CLOSED 2026-09-17. `crownhillchronicles.blogspot.com`** — Kenny saved all
  five substantive posts (`clippings/crown-hill-chronicles/`). ✘ **It does not
  name the Colina Park subdividers**, which was the whole reason for wanting it.
  ★ The sheet's own title block did, the same afternoon, from a PDF already in
  `documents/mr007-036-p2/` — see `handbook/IN-PERSON.md` §3a, which is a lesson
  about checking the folder before writing down a lead. ⚠⚠ And the blog is a weak
  source in any case: its commenters correct its photo datings by a decade and its
  Witmer chronology contradicts Kines. Only `the-real-o.g.pdf`'s account of the
  Witmers naming their own street survived into `witmer-street`.'''),
])

# ── research-leads ──────────────────────────────────────────────────────────
append("handbook/research-leads.md", '''
---

## 2026-09-17 (night) — the title blocks were on disk

Kenny confirmed the ink, supplied the second Guinn paper, five Crown Hill
Chronicles posts and the Diamond Street thread, and pointed out that some sheets
had moved to `inbox/out of neighborhood`. Checking that folder is what started
this: the Clement and Kennedy tracts were **not** there, because they are in
`documents/` — **with their PDFs** — and had been all along.

### ⚠ The mistake worth remembering

Twelve hours earlier this file and `IN-PERSON.md` recorded **five title blocks**
as in-person leads at the County map books, on the reasoning that the subdivider
would be named there and was nowhere on the open web. **Four of the five sheets
were already in `documents/`**, and reading them took about ten minutes with
`pdftoppm`. CLAUDE.md states the rule — *"Downloads first: if a map is already in
`inbox/` or `documents/<id>/`, read it locally"* — and the lead was written
anyway, because the research had been framed as a web problem from the start.
**Before writing down a trip, list the folder.**

### ★★★ What the title blocks gave

- **Colina Park** (M.R. 7-36): surveyed Nov. 1884 by **E. T. Wright**, recorded
  at the request of **six named owners** — W. J. Bradshaw, Mrs M. A. Hoadley,
  J. W. Ellis, W. A. Boring, N. W. Stowell and **H. C. Witmer**. Three were
  already in the corpus under other hats. ⭐ W. A. Boring may be the Ellis Island
  architect. Nothing about the Spanish street names, so `pattern` stands.
- **Bigelow Tract** (M.R. 24-81): recorded "at request of **A. W. Francisco**" —
  Andrew Wiggins Francisco, already in `names.js`. And the sheet **already had a
  `santa-fe-ave` row**, so the plat letters ATCHISON, TOPEKA, SANTA FE and
  FREIGHT together beside a depot its own title names. The `pattern` for that set
  no longer needs Kines's Pasadena tract to make its case.
- **Clement Tract** and **Kennedy Tract**: a surveyor and a requester each
  (John Goldsworthy / B. E. Day; E. T. Wright / E. W. Jones) and ⚠ **no Clement
  and no Kennedy.** The lead was half right: a title block names who *filed* the
  map, not always who it is named for.
- **Truman Tract** (M.R. 5-405): recorded at request of **E. Bouton**, and it
  letters its neighbours — H. C. Sigler, **Nichols**, Jones, Mallard — which is a
  third independent placement of the Nichols family on this ground.

### ★★ Witmer beat Nichols, and now we know why

H. C. Witmer is on the Colina Park title block of Nov. 1885, three months before
Witmer Street was named. So by the time the Oct. 1888 committee proposed
"Witmer St., Nichols St. and Logan Ave., changed to **Nichols** St.", the Witmers
owned the hill, ran the cable railway up it and had built their houses on their
own street. The committee reached for the older landowner's name and the newer
one won.

### ✔ Gravilla, and a rule on its third outing

Kenny read M.R. 7-36: it says **Gravilla**, and the street's dashed centreline
runs through the word, which is what made a doubled letter look plausible.
Corrected throughout; `disputed` dropped; Garrigues corroborated.

> **When a name is attested *nowhere at all* — not as a surname, not as a place,
> not as a word, in any source — suspect the transcription before concluding the
> name is obscure.** A real but rare name leaves some trace; a misread letter
> leaves none. Third instance: Labury→Labory, Gravitta→Gravilla.

### ★★★ Guinn 1895 is the bigger of the two Guinn papers

`documents/guinn-1895` prints **Ord's 1849 street names in both languages** —
seventeen of them, with four etymologies stated outright (Spring for the season,
Eternity for having neither beginning nor end, Bull for the bull fight, Hornet
for the hornets), three successors (Charity → Grand, Grasshoppers → Pearl,
Orchards → San Pedro), and the bounds of Ord's survey (north First, east Main,
south Twelfth, west Pearl). It also names its own source — C. C. Grove of the
West Coast Abstract company — so the concordance is a title abstractor's work
relayed, which is better provenance than Guinn's own recollection.

⚠ **It contradicts itself once**, and no entity should lean on either half until
something decides: the concordance gives *Calle de Las Caridad* as the street
that became **Grand Avenue**, and two pages later gives the same Spanish name as
**Spring Street's** own earlier name.

### ★★ Diamond Street: three modern streets, one 1889 name

The Echo Park thread contradicts itself — author says Beverly Blvd., the railway
society it quotes says West First Street — and the corpus arbitrates. Sorted west
to east, `diamond-street`'s eleven rows fall into three contiguous longitude
bands with no gap at either join:

```
−118.2669 … −118.2604   modern Beverly Boulevard
−118.2604 … −118.2553   modern 1st Street        (mr007-056 hands over at −118.26042)
−118.2534 … −118.2514   surviving Diamond Street
```

Both published claims are true of different thirds, which vindicates Kenny's
2026-08-30 decision to hold it as one entity. The thread's attached image turned
out to be worth more than its text: a published **1889 railway map** that glosses
seven streets with modern names and independently corroborates Texas → Belmont.

### Still open

- **The A. Weill tract** — the one sheet of the five that is genuinely not on
  disk, and now the best single lead in the project.
- **Seven names off the title blocks**: B. E. Day, E. W. Jones, E. Bouton,
  W. A. Boring, N. W. Stowell, Mrs M. A. Hoadley, W. J. Bradshaw. None needs a
  library — a city directory or a census would do it.
- **`stevenson-ave` still has no row**, and the 1889 map makes that worse: the
  1888 list's Stevenson is on the cable route west of downtown, while this entity
  was minted from a Boyle Heights sheet now parked out of neighbourhood. Nothing
  can be attached to it until it has ground.
''')
