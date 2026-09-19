# Robinson 1884 — findings

Claude, 2026-09-19. Everything quoted below was read off the 200 dpi page image
by eye; where a figure is OCR-derived it says so.

---

## 1. ⭐⭐⭐ Ordinance 97 is in hand, and Georgia's answer was in the name itself

> **SEC. 4.** That the name of that street in said City of Los Angeles, **in
> Bell's Addition**, heretofore known as Georgia street, is hereby changed, and
> the same shall be hereafter known and designated as **Georgia Bell street**.

Adopted **September 1, 1883**, approved by Mayor C. E. Thom September 3,
published in the Herald September 11. Printed pp. 293–294. Full text in
`documents/ord-97/ord-97-text.md`; the six sections are excerpted in
`documents/ord-97/ord-97.js`.

All six changes, with the ordinance's own locative:

| § | From | To | How the ordinance identifies it |
|---|---|---|---|
| 1 | Turner | **Sonora** | "in front of the Pico House, extending from Main street to New High street" |
| 2 | Pacific | **Montgomery** | "in Bell's Addition and the Los Angeles Homestead Tract" |
| 3 | Pine | **Cherry** | "between Bell's Addition and the Los Angeles Homestead Tract" |
| 4 | **Georgia** | **Georgia Bell** | "in Bell's Addition" |
| 5 | Elm | **Bush** | "in the Los Angeles Homestead Tract" |
| 6 | Rose | **Kuhrts** | "in East Los Angeles, in said city" |

**What surprised me.** Only §1 gives a from–to. The other five identify the
street by the **tract** it lies in or between, which is a disambiguator (there
were several Turners, several Roses, at least three Elms) rather than a stretch
carved out of a longer street. And the tracts interlock: Pacific runs *through*
Bell's Addition and the Homestead Tract, Pine runs *between* them, Georgia is in
Bell's alone and Elm in the Homestead Tract alone. That is a small map in words.

---

## 2. ⭐⭐⭐ THE DECISION THIS VOLUME FORCES: the Georgia Bell date

`georgia-bell` in `names.js` dates the "Georgia Bell Street" spelling period from
**1889**, on Gen. Forman's Feb. 1897 recollection and on Ordinance No. 48 (New
Series) of May 10, 1889 (`documents/lah-1889-05-10`). This ordinance coins the
same name on **Sept. 1, 1883**, six years earlier, with a number, a date, a
mayor's signature and a tract.

`documents/lah-1883-09-02` already reported the act at second hand and its own
header says what was missing: *"the ordinance book for Sept. 1883, or the council
minutes for Sept. 1, 1883."* `handbook/MINUTES-TO-CHECK.md` lists that meeting.
**This is the ordinance book for that meeting.**

I have written **one change row** on it — a respelling, `georgia-bell` →
`georgia-bell`, `toForm: "Georgia Bell Street"`, `scope: "whole-name"` — and I
have **not touched `names.js`**. The row and the entity now disagree, on purpose
and visibly.

**Kenny decides between two readings, and the corpus already contains both:**

1. **Coined 1883, folded in 1889.** The name was made here for the Georgia in
   Bell's Addition; the 1889 act absorbed the stretches platted *Nevada* in 1886
   (the Oct. 1888 committee list has "Nevada St., Nevada St. and Nevada St.,
   between Ninth and Tenth Sts., changed to Georgia Bell St."). Both dates are
   then right about different things, and the entity wants a **third spelling
   period** rather than a corrected one.
2. **The 1883 change did not hold**, and 1889 is the real coining. Then this row
   records an act that was undone or ignored, and should say so.

I lean to (1) — an instrument beats a recollection, and the 1889 committee list
describes a folding-in rather than a coining — but the spelling periods in
`names.js` are sourced prose and changing them is exactly the move the file's
own header warns against. **This is the single most consequential open question
in this volume.**

---

## 3. ⭐⭐⭐ Ordinance 104: the numbers are the compiler's

> Hereafter, all ordinances … and all resolutions … shall be numbered
> consecutively **in accordance with the numbering … in the compilation …
> compiled by W. W. Robinson** (p. 318, Nov. 1883)

Before November 1883 **the city did not number its ordinances**. Numbers 1–103
and 1–221 are Robinson's, assigned while compiling and then ratified. This
changes how every 1878–83 citation in the project works:

- "Ordinance No. 97, 1883" is a citation of **this book**, and there is no other
  source for the number. That is why the Herald reports the act without one.
- **Teed 1887, Vol. III starts at No. 114** — same series, continued. The "New
  Series" of `ord-1613` and `ord-4093` is a later restart, so a collision of
  numbers between the two series is guaranteed.
- ⚠ **Which is a problem with the folder ids I was told to use.** I created
  `documents/ord-76`, `ord-77`, `ord-81`, `ord-88`, `ord-92`, `ord-97`,
  `ord-103` and `ord-105` as instructed. A New Series Ordinance No. 97 almost
  certainly exists. **Kenny may want these renamed** to something like
  `ord-97-1883` or `ord-old-97` before the New Series arrives. I have not done
  it because the brief named the pattern.

---

## 4. ⭐⭐ Ordinance 81 explains the thing `turner-street` could not

`turner-street`'s internalNote ends: *"our sheet is dated 1928 and still letters
Turner, forty-five years after the Jackson change — either the sheet uses a
historic name, or Turner survived alongside Jackson on adjoining ground. **No
change row until that is settled.**"*

It is settled, and the second branch is right. Ordinance 81 renames Turner only

> **extending from Wilmington street to Alameda street, lying between Requena
> and First streets**

and twice later in the same volume the Council legislates for a Turner that is
still Turner: **Res. 157 (p. 266)**, grade of "Turner street, from Alameda street
to Vignes street", and **Res. 163 (p. 271)**, improvement of the same. So after
May 1883, Jackson ran west of Alameda and Turner east of it, end to end.
`documents/tr0145-062` letters Turner east of Alameda in 1928 because that is
where Turner was. **Nothing is wrong with that sheet.**

⚠ **Also: the newspaper garbled the extent.** `turner-street`'s note repeats
`documents/lah-1883-05-13`'s wording — *"Turner Street, from First to Alameda"*.
The ordinance says **from Wilmington to Alameda, between Requena and First**.
First Street is the southern boundary of the block, not an end of the street.

**Kenny decides:** the row's `to` is `jackson-st-little-tokyo` rather than
`jackson-st`, because the renamed stretch is west of Alameda and that is the
ground `jackson-st-little-tokyo` is lettered on (`documents/mr006-308`). The two
entities carry each other in `possiblySameAs`. If they merge, the row follows.

---

## 5. ⭐⭐ Ordinance 92 is the one row here that draws

Commercial → Ducommun, "extending from Alameda street to Amelia street", and the
ordinance **cites the recorded map by book and page**: "a map, recorded in book
2, pages 526 and 527, of miscellaneous records". That is `documents/mr002-526-p1`
and `-p2` — the Alanis Vineyard Tract of 1869, which letters **Commercial Street**
on what the corpus identifies as modern **Ducommun Street** and **Amelia** on
modern **Garey Street**. Both ends of the extent and the `from` name are already
on the map, from the sheet the Council names.

⚠ One thing for Kenny: `commercial-street` is also the modern Commercial Street
downtown, six sheets' worth. Whether the Alanis Vineyard Tract's Commercial and
the survivor are one lineage is a `names.js` question. The row binds the entity
the corpus already put on `mr002-526-p1`; a split there splits the row.

---

## 6. ⭐⭐ TWO NEW RENAMINGS THE HANDBOOK DID NOT KNOW ABOUT

Neither is in `handbook/COMPILED-ORDINANCES.md`.

- **Ordinance 77 (p. 223): Bath street → Main street**, adopted Mar. 19, 1883.
  A whole street name ends. And it **lands**: `bath-street-plaza` (in
  `names-new.js`) is lettered "BATH STREET" on `documents/oldplaza1873`, on
  modern Main Street north of Arcadia, with CALLE PRINCIPAL lettered south of it.
  The 1873 survey draws the two halves of Main under two names; this is the
  instrument that joined them. Row written.
- **Ordinance 76 (p. 223): the naming of Upper Main street**, adopted Mar. 24 —
  *"commences at the north-east corner of the building known as the old Roman
  Catholic church, in front of the plaza, and runs northerly in front of the
  store of M. G. Santa Cruz and the old Pacific Hotel, as far as the
  intersection of the same with Alameda street."* No entity, so no row.

Note the order: **77 was adopted five days before 76.** See §3.

---

## 7. ⚠ THE BLOCK 35½ LEAD IS CLOSED, AND A BETTER ONE OPENED

`handbook/COMPILED-ORDINANCES.md` starred **Ordinance 107** — "ordering sale of
lots in block 35½, Ord's survey" — hoping a city sale on Teed Street's block
would name streets and lift `teed-street` off `inferred`.

**It does not.** Ordinance 107 is lot numbers and minimum bids from beginning to
end: lots 1, 2, 3, 4, 8, 10, 12, 16, fractional 17, and 18–29, at $30 to $400.
**Not one street is named in it.** Quoted as a negative in `robinson-1884.js`.

**Ordinance 105, two pages earlier, is the one that matters.** It dedicates a
sixty-foot strip through **lot 15 and the southerly part of lot 17, block 35½,
Ord's survey**, running east from the east boundary of **Rosas street**, and
names it **High street**. So:

- `rosas-street` — `basis: "none"`, `searched: "extensive"`, note says the name
  "is gone from Los Angeles entirely" — is **in a city ordinance, in force in
  1883**, as the western boundary of a dedication.
- The city was still dedicating ground in Block 35½ seven years after
  `documents/mr003-240` was recorded (July 20, 1876). That is context for who was
  platting there, which is the whole of the `teed-street` inference.

A `state` row for `high-street-chinatown` on modern Ord Street is written,
`confirmed: false`: the ordinance gives the WEST end as a street and the east end
as a lot boundary, so `to: "Hill Street"` is taken from `mr003-240`'s own High St
row and is research, not testimony.

⚠ **The metes-and-bounds contradict themselves as printed** — the call runs east
"to the **north-west** corner of said lot 15" and then south along lot 15's
**east** boundary. One of the two words is a slip in the original. I transcribed
it as printed and said so.

---

## 8. ⭐⭐⭐ THE BIGGEST THING IN THE BOOK IS NOT A RENAMING — it is the chains

The project's recurring problem is a name with no ground. This volume is 220
resolutions that grade and improve streets, and nearly every one names its cross
streets. Three are worth more than most of the renamings:

**Resolution 95 (pp. 168–169, July 1882) — Downey avenue, east from the bridge**,
with a height at every crossing:

> bridge → **Water** → **Hayes** → **Walnut** → **Chestnut** → **Truman** →
> **Hellman** → **Daly** → **Workman** → **Sichel** → **Griffin avenue** →
> **Johnston** → **Hancock** → **Hansen** → **Gates** → **Thomas**

Sixteen points in order, in Lincoln Heights. Downey Avenue is modern North
Broadway. Of the sixteen, only `workman-street` has an entity in this corpus.
Res. 103 (p. 174) improves the same run. ⚠ The index spells the twelfth
"Johnson"; the body says "Johnston".

**Resolution 56 (p. 88, Mar. 1881) — Buena Vista, going north, with distances:**

> **Short** — 600 ft — **High** — 726 ft — **Virgin** — 600 ft — **College**

`short-street-chavez` and `virgin` could not previously be placed against each
other; `high-street-chinatown` has a known modern corridor (Ord Street), so this
chain measures the other three off it. Res. 140, 185 and 221 confirm the
Short–High and High–Virgin blocks independently.

**Resolution 137 (p. 232) — behind the plaza:**

> Bunker Hill avenue *Temple to Sand* · Montreal *Sand to Deep Water* · **Deep
> Water** *Montreal to Reservoir* · Reservoir *Deep Water to Reservoir No. 4*

⭐ **Deep Water street** is the street Teed 1887's Ordinance No. 317 renames —
`handbook/COMPILED-ORDINANCES.md` §3 lists it with contents unknown. Here it is,
placed.

**Recommendation.** These are not renamings and I wrote no rows for them, but
they are the cheapest coverage this project will get for a long time, and the
whole volume is now greppable: `robinson-1884-ocr.txt` beside this file is the
uncorrected OCR of all 397 pages with both page numbers on every page marker.
Grep it; check every quotation against the image.

---

## 9. Other things worth knowing

- **Ordinance 40 (p. 108, 1881)** calls it *"the east line of Los Angeles street,
  **formerly known as Negro alley**"*. The Calle de los Negros absorption in the
  city's own words. `calle-de-los-negros` is in `names-new.js`, lettered on
  `documents/oldplaza1873` on modern Los Angeles Street. **No row**: a recital
  that a change happened is not a document that attests the transition, and a
  change row dated 1881 would assert a date the ordinance does not give.
- **Ordinance 26 (p. 64, 1880)** opens **Vine street**: 673 ft long, 50 ft wide,
  from Turner street (230 ft west of Alameda) south to First street, per Moore &
  Kelleher's survey of Feb. 25, 1875 and the **Pryor Tract, M.R. 2-634**.
  `vine-central` has no `state` row anywhere in the corpus — it is one of the two
  rows the change-rows audit calls a known defect — and this is its first
  placement. **A sheet to pull: M.R. 2-634.**
- **Ordinance 24 (p. 59, 1880)** extends **Macy street** east from Alameda to the
  covered bridge, sixty feet wide, located by the Sisters of Charity school house,
  J. D. Woodworth's gate, Jeff. White's garden and F. W. Peschke's fence "at the
  junction of Old Aliso and Macy streets".
- **Resolution 70 (p. 110)** abandons part of **Sand street** west of Cemetery
  avenue — the only outright vacation in the volume.
- **Resolution 150 (pp. 253–254)** places **Polyxena street**: its assessment
  district runs from the north boundary of Fourth street **610.50 feet north to
  the south boundary of Third street**. A one-block north–south street on Bunker
  Hill, with a curb on the east side only, a cobbled gutter on the west, and
  *"There shall be no sidewalks."*
- **Ordinance 96 (p. 289)** widens Main "between Alameda street and
  **Marchessault** street" — another `names-new.js` stub in a city instrument.
- **Resolution 114/126** put **Rock street** on Buena Vista; Caswell 1878 §575
  "Rock street, defining lines of" is the follow-up.
- **The street-railroad franchises (Ords. 59, 84, 89, 91, 95, 106, 109, 112)
  describe their routes street by street** and are the densest unread source of
  1883 street names in the volume. I read only Ord. 106's route (Aliso avenue,
  Chicago street, block K of lot 6 block 60 Hancock's survey, Aliso avenue
  extension to Evergreen Cemetery). The rest are unread.

---

## 10. What I could not read

- **Printed p. 342 (PDF 343)** is ink-starved and double-struck throughout —
  the one badly printed page in the volume. OCR returns gibberish. It is legible
  by eye and I read it: it carries **Resolution No. 209**, a sewerage franchise
  to the South Side Irrigation Company. Anything else needed from that page must
  be read by eye.
- **Fractional degrees in metes-and-bounds** (e.g. Ord. 24's "north 10½° east,
  60¼ feet") are at the edge of legibility at 200 dpi, which is the scan's own
  resolution — there is no more detail to render. I transcribed them where they
  appear in excerpts and flagged them; **do not use any of them as geometry
  without re-reading the page.**
- **Two thirds of the subject index** — everything that is not a street — is not
  transcribed. §§1–2 of `robinson-1884-contents.md` supersede it for finding any
  instrument in the book.

---

## 11. What needs Kenny's decision

1. **The Georgia Bell date** (§2). Two readings, both already in the corpus, and
   `names.js` says 1889 while a numbered ordinance says 1883.
2. **Folder ids** (§3). `documents/ord-97` will collide with the New Series.
3. **Jackson** (§4). `jackson-st` and `jackson-st-little-tokyo` are marked
   `possiblySameAs`; the Ord. 81 row picks the Little Tokyo one.
4. **Commercial** (§5). One lineage or two?
5. **Entities this volume asks for, none of which I have minted** — `names.js` is
   yours:

   | Wanted | Because |
   |---|---|
   | **`sonora`** and a second Turner (the plaza one) | Ord. 97 §1, with a from–to |
   | **`montgomery`** and a Pacific for Bell's Addition | Ord. 97 §2 |
   | **`pine`** for Bell's Addition / Homestead Tract | Ord. 97 §3 — and see below |
   | **`bush`** and a third Elm | Ord. 97 §5 |
   | **`kuhrts`** and an East L.A. Rose | Ord. 97 §6 |
   | **`polyxena`**, **`clay`** | Ord. 88, placed by Res. 150 |
   | **`mott-alley`** | Ord. 103, extent needs no research at all |
   | **`upper-main`** | Ord. 76, extent by buildings |
   | **`negro-alley`** or use `calle-de-los-negros` | Ord. 40's recital |
   | move **`bath-street-plaza`** out of `names-new.js` | it now has an end date and an instrument |
   | **the Downey avenue sixteen** | Res. 95 |

6. ⭐ **A correction that is free.** `cherry-street`'s internalNote says the
   Pine→Cherry lead "IS NOT CONFIRMED AND THE DATE ARGUES AGAINST IT", because
   the ordinance it knew of was an 1890s one while the Cherry it holds is
   lettered on a sheet of **January 1884**. Ordinance 97 is **September 1883** —
   four months *before* that sheet — and the sheet is
   `documents/mr005-431`, Wright's Subdivision of the Sisters of Charity Tract,
   whose Cherry Street is modern **L. A. Live Way**, a block from modern Georgia
   Street. So the date now argues *for* the lead, and it independently suggests
   where Bell's Addition was. I have not changed the entity.
7. **Whether `robinson-1884` should stay `completeness: "incidental"`.** I set it
   so: a compilation of ordinances is not a survey of streets, and a street the
   Council never legislated about simply does not appear.
   `handbook/COMPILED-ORDINANCES.md` leans on the absence of Wilson Street from
   this index and already flags that as weak. I agree it is weak, and
   `incidental` is what makes the checker agree too.

---

## 12. Rows written, and rows deliberately not written

**Five rows written**, all of them on documents of their own:

| Document | Row | Does it draw? |
|---|---|---|
| `ord-77` | `bath-street-plaza` → `main-street-dtla`, whole-name | **Yes** — `oldplaza1873` letters Bath on modern Main |
| `ord-92` | `commercial-street` → `ducommun`, extent, Alameda→Garey | **Yes** — resolved from the sheet the ordinance cites |
| `ord-97` | `georgia-bell` respelling, `toForm: "Georgia Bell Street"` | **Yes** — `tr0030-086` letters it on modern Georgia Street |
| `ord-105` | `high-street-chinatown` state row on Ord Street | **Yes** — Hill Place to Hill Street |
| `ord-81` | `turner-street` → `jackson-st-little-tokyo`, extent-unresolved | **No, and correctly** — no modern street follows that stretch |

**Ten changes deliberately left unwritten**, every one for want of an entity to
bind to, not for want of evidence: Ord. 97 §§1, 2, 3, 5, 6 (Sonora, Montgomery,
Cherry, Bush, Kuhrts); Ord. 88 (Polyxena→Clay); Ord. 76 (Upper Main); Ord. 103
(Mott Alley); Ord. 40's Negro alley recital; and every one of the sixteen Downey
Avenue crossings. Each is recorded as a verbatim excerpt, and each rowless
document carries a `TASK.md` saying exactly what is missing and where to look.

**Better five rows that draw than forty that do not.** Four of these five draw.

---

## 13. Working files left on disk

Rendering 400 pages at 200 dpi and OCR'ing them takes about four minutes and
produces about 470 MB. It is all in **`tmp/rob1884/`** in the project root —
`p-001.jpg` … `p-400.jpg`, `ocr/*.txt`, and `crops/` (the strips that were read
by eye). ⚠ **It can be deleted;** everything worth keeping was copied into
`documents/robinson-1884/` and the eight `documents/ord-*/` folders. I could not
delete it myself — the sandbox refuses `rm` inside a connected folder.

To rebuild any of it:

```
pdftoppm -f N -l M -r 200 -jpeg documents/robinson-1884/robinson-1884.pdf out
tesseract out-NNN.jpg -
```

200 dpi is the scan's own resolution (the embedded images are 1649 × 2818, 8-bit
grey, at 200 ppi), so rendering higher only upscales.
