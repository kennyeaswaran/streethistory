# Caswell 1878 — findings

Read 2026-09-19 by an instance, from the Gale scan
(`DT0106137878`, 552 leaves, no text layer). Both indexes transcribed and
eye-checked; twelve pages of ordinance text read at 300 dpi; the rest of the
458 pages of text read only where the index pointed.

**Deliverables in this folder**

| file | what it is |
|---|---|
| `caswell-1878-contents.md` | the PDF↔folio offset table, both indexes transcribed line by line, and the full text of every renaming instrument |
| `caswell-1878-street-ordinances.md` | the shortlist — every street act in the volume, renamings first |
| `caswell-1878.js` | the rowless document record (10 excerpts). `node check-model.js` passes. |
| `caswell-1878.txt` | raw machine OCR of the whole volume, **unverified, must not be quoted** |

**No `ord-*` or `sec-*` folders were created and no rows were written**, per the
brief. Nothing outside this folder was touched.

---

## 1. The headline: the February 26, 1874 ordinance is here, in full, and it settles the doubt

`documents/ord-1874-02-26` holds this instrument only as a copy in the council
minute book (ledger p. 621), with an open question — recorded in
`handbook/RENAMING-SOURCES.md` — about whether it made one renaming or three.

**Caswell prints it as §394 on printed p. 215 (PDF 216). It is ONE ordinance
making THREE renamings, in one operative sentence.** Full text in
`caswell-1878-contents.md` §5; excerpt `feb-1874-renaming-ordinance` in the .js.

Three things the printed text adds to the ledger copy:

1. **It is unqualified.** No cross streets, no "from … to". The change is to the
   whole of each street. `handbook/RENAMING-SOURCES.md` §2c warns that a minutes
   copy can be an abridgement and that "unqualified" is the dangerous reading —
   here a **printed compilation** independently gives the same unqualified text,
   which is the second witness that warning asked for. The two copies agree on
   substance.
2. **It spells it CASTELAR, one L** — and Caswell's own index spells it
   **CASTELLAR**, twice (index pp. 529 and 530). The volume disagrees with
   itself. Worth recording as a spelling for `castelar`.
3. **It carries NO approval date and no publication date.** The line reads
   simply "Approved." Where §393, from the very same sitting, reads "Approved
   Feb. 27th, 1874. Published March 4th, 1874." So this copy does *not*
   corroborate the 27 February approval the ledger gives — it is silent, not
   contradictory.

⭐ **Bonus from the same sitting.** §393, printed immediately above it, mints
**Bunker Hill avenue** with a full extent — 40 ft wide, 3,120 ft north from
Fourth street to the west line of Temple street, starting midway between Hope
and Charity. Passed 26 Feb. 1874, approved 27 Feb., published 4 Mar. 1874.

---

## 2. ⚠⚠ THE THING THAT NEEDS KENNY'S DECISION: Eternity → Buena Vista is 1875, not 1888

**§578, printed pp. 349–350.** A resolution of the Common Council *"changing the
name of Eternity street to Buena Vista street"*, adopted **30 December 1875**,
published **4 January 1876**, unqualified.

The project currently dates this change to **1888**, from Kines, and
`handbook/RENAMING-SOURCES.md` §2d builds its whole "search the successor name"
lesson on it — the `eternity` entity is attested through two later sightings of
*Buena Vista* (`lah-1896-05-16`, `lah-1908-09-22`) whose extents land on the
corridor the Ord survey alignment assigns to Eternity.

**That reasoning still holds. Only the date is wrong, and by thirteen years.**

Two internal corroborations, from this same volume:

- **§355, p. 197** grades a **Buena Vista street** *before* the renaming — so a
  Buena Vista already existed.
- **§575, p. 347**, adopted days earlier in December 1875, defines **Rock
  street** *"between Buena Vista street and Eternity streets"* — naming both, as
  two different streets, in one description.

So there were two streets, and the last week of December 1875 collapsed the
names. That is a cleaner story than a bare 1888 date, and it makes the 1896 and
1908 Buena Vista extents late sightings rather than near-contemporary ones.

**What I did not do:** nothing. `names.js` is untouched, per the hard rule, and
no row was written. **This is the decision I most want Kenny to make**, because
it moves a date that several other readings hang off.

---

## 3. ⭐⭐ J. W. Potts, three times, and one of them is Temple Street

`potts-st` rests on one clause of Newmark p. 61 — *"Temple Street had not then
been opened by Beaudry and Potts"* — which reversed an earlier rejection of
J. Wesley Potts. Caswell's index gives the primary counterpart:

| § | p. | what |
|---|---|---|
| **661** | **430** | *"Railroad, (horse) **(Temple street) franchise to J. W. Potts et al.**"* — also indexed as "Temple street horse railroad franchise" and under "Potts, J. W. … et al., railroad franchise" |
| 342 | 188 | *"Potts, J. W., deed to"* — a city deed, in company with I. W. Hellman, Wm. Buckley, Geo. O. Tiffany and Andrew Glassell |
| 640 | 405 | *"Potts, J. W. … water franchise"* |

**This is the man, in city instruments, holding the Temple Street franchise.**
Newmark's memoir said the partnership opened Temple Street; the city's own book
shows Potts franchised to run a horse railroad along it.

⭐ **Recommended next read, and it is one page: printed p. 430 (PDF 432).** A
franchise describes its route. It will say how far along Temple Street the line
ran, which is an extent for the street and a much harder anchor for `potts-st`
than a memoir sentence. I did not read it — it was outside the pages the brief
named and I ran the index first. **Recommendation only; nothing entered.**

---

## 4. ⚠ The one thing I could not resolve: "Bridge street, (now Turner street)"

Index p. 529 carries, in the compiler's own words:

> **Bridge street, (now Turner street) … 279 … 153**

That is a renaming, stated as a parenthetical fact rather than an act — exactly
the kind of line this project wants. **But it does not survive checking.**

- §279, printed p. 153, declares public *"a strip of land fifty (50) feet wide
  and running in and being the prolongation of **Sansevaine street** … N. 84¾
  deg. E. … from the western line of said 'Aliso tract,' to the Los Angeles
  river."* It names **no** Bridge street and **no** Turner street.
- The same index files that same section under **"Sansevain street prolonged …
  279 … 153"** (index p. 545).
- And §500, p. 262, puts a **Turner street sewer** in the same instrument as the
  **New High street** sewer — which places 1878's Turner street on the
  Sonoratown grid north of the Plaza, not out by the Aliso tract east of
  Alameda. That is the Turner that Robinson 1884's Ord. 81 turns into Jackson
  and Ord. 97 into Sonora.

**So the gloss and the section do not agree, and I cannot tell which is wrong.**
Three readings, and nothing in this volume decides between them:

1. The index reference is simply misplaced — a compositor's slip putting a
   Bridge/Turner entry against the wrong section number.
2. The river-ward prolongation of Sansevaine really was locally called Bridge
   street (it runs *to the river*, where the bridge was — §329 protects the
   "Bridge over L. A. river") and had become Turner street by 1878, in which
   case there were **two** Turner streets in the city at once.
3. "Bridge street" was an earlier name for something on p. 153 that the
   compiler's abridgement dropped.

⚠ **I have written it into both .md files as printed, flagged, with the counter-
evidence beside it, and built nothing on it. It must not become a row as it
stands.** What would settle it: Robinson 1884 or Teed 1887 indexing a Bridge
street, or any sheet over the Aliso tract lettering one.

---

## 5. Short Street is placed, and its two termini are now named streets

`handbook/COMPILED-ORDINANCES.md` records that the project cannot place Short
Street and hoped §536 would fix it. **It does.** Printed p. 300, adopted 22 July
1875, published 29 July 1875, headed *"Opening of Short street (Eternity to
Canal and Reservoir)."*

- From the **west line of Eternity street**, north-west in three legs — 290 ft
  on N 60½° W, 302 ft on N 40° W, 470 ft on N 65½° W — **about 1,062 ft** — to
  the **north line of Canal and Reservoir street**.
- About **60 ft wide** (the opening leg on the Eternity frontage is 60 3/12 ft).
- **A. Olivas's adobe** stands on the south-west corner of Short and Eternity.

And five months later Eternity became Buena Vista (§2 above). Which is why
Robinson 1884 can grade *"Buena Vista street, between Short and College
streets"* — the same corner under the later name — and why Teed 1887's Ord. 152
consolidates **Short street** with **Canal and Reservoir**: those are precisely
the two streets §536 names as Short's endpoints. The chain is continuous:

> **Short street (from Eternity/Buena Vista to Canal and Reservoir, 1875)
> → consolidated with Canal and Reservoir → Bellevue avenue (Teed Ord. 152,
> 1887).**

Caswell also names **"Canal and Reservoir street"** as a street in its own right
(§314, p. 168), after the Canal and Reservoir Company that runs through the land
sections. The project did not have that as a street name.

---

## 6. Renamings and namings found, in full

| what | § | printed | date |
|---|---|---|---|
| **Vine or Olvera → Olvera street** (a name settled, not a change) | 680 | 454 | adopted 3 May 1877 |
| Grasshopper → **Pearl**, Bull → **Castelar**, Wasp → **Yale** (one ordinance) | 394 | 215 | passed 26 Feb. 1874 |
| **Eternity → Buena Vista** | 578 | 349 | adopted 30 Dec. 1875, pub. 4 Jan. 1876 |
| **Negro Alley → part of Los Angeles street** (a merger) | 678 | 452 | adopted 22 Mar. 1877, pub. 28 Mar. 1877 |
| **Lover's Lane → Date street** ("northerly of Macy street") | 702 | 477 | adopted 22 Nov. 1877, pub. 25 Nov. 1877 |
| **Jail street → Franklin street** | 244 | 145 | approved 3 Apr. 1872 |
| *naming:* Requena's donation → **Wilmington street** | 285 | 154 | approved 27 June 1870 |
| *naming:* **Bunker Hill avenue** | 393 | 215 | 26/27 Feb. 1874 |
| *naming:* **Keller street** | 280 | 153 | — |
| *naming:* **New High street** | 254 | 147 | 1872 |
| *naming:* **McDougal street** (index: MacDougall) | 517 | 277 | 1875 |
| *naming:* **Temple street** | 273 | 152 | — |
| *declaration:* **Polaski street** (so spelled) | 345 | 191 | — |
| *vacation:* **New High street, vacating of lines** | 257 | 147 | — |
| *vacation:* parts of the **old First street** declared vacated | 250 | 146 | approved 19 Apr. 1872 |
| ⚠ index gloss only: *"Bridge street, (now Turner street)"* | 279 | 153 | see §4 above |

That is **six renamings and eight namings** in one volume, and most of them
the project did not have.

⭐ **Three of these were found by GREPPING `caswell-1878.txt`, not by reading
the index** — §680 (Vine → Olvera), §254 (New High named) and §517 (McDougal).
In each case the index files the section under a head-word that does not
mention the naming: §680 is only "Olvera street, defining lines", §254 is only
"Jail street, establishing". **That is a general warning about this volume and
probably about Robinson 1884 and Teed 1887 too: Caswell's subject index is a
good finding aid and a bad inventory.** A raw OCR dump and `grep -niE "to be
called|be known and called|hereafter be known|shall be called"` costs an hour
and catches what the index drops.

---

### ⭐⭐ §680 — "heretofore known as Vine or Olvera street, will hereafter be known as Olvera street"

Adopted 3 May 1877. Note the **form**: it is not a change from A to B. The
thoroughfare from Macy street south to the north line of the Plaza carried
**two names at once** — "Vine **or** Olvera street" — and the Council
extinguished one. That is the same shape as the 1897 mass settlement, and it is
worth asking whether `names.js` can express "one of two names in concurrent use
was dropped" as distinct from a renaming.

It also gives **Olvera street a full extent** off the south side of Macy street,
anchored on **school house number two** and the **Potter lot**, 60 ft wide,
running south to the Plaza.

⚠ And it exposes an index error: **§680 is indexed twice, once as "Olive
street, defining lines"** (index p. 542) and once as "Olvera street, defining
lines" (p. 543). §680 is the Olvera resolution. Whatever defines Olive street's
lines is some other section, and I have not found it.

## 7. Other things worth someone's attention

### ⭐⭐ Requena gave the street; the Council named it Wilmington

§285, p. 154. **Manuel Requena, et al.** donated a 50-ft strip *"for the purpose
of opening a new street from First street to Commercial street, between Los
Angeles and Alameda streets"*, by deed of 28 May 1870, with a map by **Frank
Lecouvreur, County Surveyor**, 30 March 1870 — and the Council accepted it and
declared it *"a public street, to be known and called **Wilmington street**."*

That is the ground Requena Street occupies, and in June 1870 it was named for
somebody else. Whatever put Requena's name there happened later and is not in
this book. Worth checking against whatever `requena-st` currently rests on.

⭐ The **Lecouvreur map of 30 March 1870** is also a document the corpus does
not hold; so is his **grading map** (§191, p. 121, "declared official"), and his
**map exhibiting the proposed street**.

### ⭐⭐ An 1878 sale over block 35½, Ord's survey — six years before Robinson's

`handbook/COMPILED-ORDINANCES.md` flags Robinson 1884's **Ord. 107** (sale of
lots in block 35½, extension of Ord's survey) as ⭐⭐ because `documents/mr003-240`
is the map of that block and `teed-street` is `inferred` for want of exactly
such an instrument.

**Caswell has an earlier one: §623, p. 389 — "lot 7, block 45, Hancock's survey,
and block 35½, Ord's survey, sale of."** Read it before Robinson's.

### ⭐ Lemon Street is in the 1878 index, twice over

`handbook/COMPILED-ORDINANCES.md` notes that neither the 1878 nor the 1884 index
has a **Wilson** street, which supports `lemon-st-arts-district`'s reading that
Lemon became Wilson in 1887. That negative stands — there is no Wilson here.

But **Lemon is positively present**: §269, p. 150, *"Lemon street, width of"*,
and §733, p. 519, extends **Citron street** *"from Alameda street to Lemon
street"* — which gives Lemon a cross street and puts it east of Alameda, with a
Citron beside it. Two 1870s sightings of a street the project has mostly from
later evidence.

### ⭐ Fort Street, block by block, fourteen years before it was Broadway

Seventeen entries. Five grades, and improvement resolutions that walk the whole
downtown length: **First→Temple (§533), →Second (§534), Second→Third (§535),
Third→Fourth (§565), Fourth→Sixth (§644)**, plus three sewers. The Fort →
Broadway change of 1890 is one the project has only from a newspaper
(`lah-1890-02-20`), because the minutes for those dates are missing. This is the
corridor's documented state before it.

### ⭐ Streets the volume names that the project may not have

**Canal and Reservoir street** (§314) · **Elmira street** (§719) · **Lugo
street** (§271) · **MacDougall street** (§517, defining lines) · **Polaski
street** (§345) · **Upper Main street**, treated as its own street (§§595, 608)
· **Court House street** (§§572, 633) · **Aliso avenue** as distinct from Aliso
street (§§524, 667) · **Citron street** (§§733, 736) · **Sand street** (§610) ·
**Rock street** (§575) · **Sotelo street** (§653) · **Summit avenue** (§§646,
657).

### ⭐ Extents worth extracting, none of them renamings

`defining lines` / `lines established` sections, which are the extent-bearing
form in this volume: **Macy §511 p. 272** · **Buena Vista §626 p. 392 and §730
p. 515** · **Rock §575 p. 347** · **Kohler §550 p. 315** · **MacDougall §517
p. 277** · **San Pedro §686 p. 460** · **Sansevain §551 p. 316** · **Olive and
Olvera together, §680 p. 454** · **Figueroa §494 p. 258 and §590 p. 359** ·
**Mission §326 p. 175** · **Los Angeles street §526 p. 288** · **Main street,
defining lines and widening, §684 p. 458** · **Ninth §252 p. 146 and §286
p. 154**.

⭐ **§314, printed p. 168, is the single highest-yield page in the book**: one
section declares official the maps and surveys of **Alameda, Aliso, Canal and
Reservoir, Los Angeles (and its southerly extension), Macy, New High, Short and
Sixth** streets at once.

---

## 8. What I could not read, and what I did not do

- **§661, p. 430 — the Potts Temple Street franchise.** Not read. The excerpt in
  the .js quotes the *index line* and says so. This is the single page I would
  read next.
- **§623, p. 389 — the block 35½ sale.** Not read.
- **The 458 pages of ordinance text**, apart from about fifteen. Everything in
  the shortlist beyond the renamings is the index's wording, not the act's. The
  index is a finding aid, not a source: `sweptFully` is `false` and `sweptFor`
  is empty in the .js, deliberately.
- **The promised Appendix does not exist in this copy.** The compiler's note on
  printed p. 145 twice refers the reader to "the Appendix" for the land
  ordinances of 13 Aug. 1852 and 19 May 1854. The ordinances end with §736 on
  p. 522 and the Index to Charter begins on p. 523; the folios are continuous,
  so nothing is missing *between* pages. Either it was dropped in press or
  Gale's scan omits it. I could not tell which.
- **Two printer's errors in the index**, transcribed as printed and flagged:
  "Attorney, City, fees abolished … 734 · **526**" (the book has 549 pages;
  §734 is on p. 520, where this same index puts it elsewhere), and "Speed,
  driving at immoderate rate forbidden … 366 · **303**" (§366 is p. 203
  throughout).
- **`names.js` was not touched**, nor anything outside `documents/caswell-1878/`.
  No `ord-*` or `sec-*` folder was created. No row was written anywhere.

---

## 9. What needs the user's decision

1. ⚠⚠ **Eternity → Buena Vista: 1875, not 1888.** §578 is a dated, published,
   primary instrument. Accepting it moves a date several other readings hang
   off, including the lesson in `handbook/RENAMING-SOURCES.md` §2d. **Nothing
   has been changed. This is the call I most want made.**
2. ⚠ **How to identify a Caswell section.** The project is mid-decision about
   old-series instruments. This volume forces the question in its cleanest
   form: it has **no ordinance numbers at all**, only the compiler's §1–§736.
   Whatever the scheme, `Caswell 1878 §394 (p. 215)` must be expressible, and
   it must not be mistakable for an ordinance number. Until that is settled I
   have created no per-instrument folder.
3. ⚠ **What the printed §394 does to `documents/ord-1874-02-26`.** Two copies of
   one instrument now exist in the corpus: a minutes copy and a printed
   compilation. They agree on the text and differ on the approval date (the
   ledger gives 27 Feb. 1874; Caswell gives none). Does the printed copy become
   a second document, an excerpt on this one, or a note on the existing folder?
4. ⚠ **"Bridge street, (now Turner street)."** §4 above. Three readings and no
   way to choose from inside this volume. Do we chase it in Robinson 1884 /
   Teed 1887, or park it?
5. **Requena / Wilmington.** §285 shows Requena's own donated street named
   Wilmington in 1870. Does that unsettle anything `requena-st` currently rests
   on?
6. **Whether to pull printed p. 430** (Potts, Temple Street franchise) and
   **p. 389** (block 35½, Ord's survey). Both are one page each and both bear on
   entities that are currently `inferred`.
7. **The coverage polygon in `caswell-1878.js` is a rectangle I estimated** for
   the 1878 city limits. It wants a human trace in the map tool before anything
   reasons from it — the real boundary is the surveyed pueblo square, and §193
   (p. 121) extends the limits within the period the book covers.

---

## 10. Scratch to delete

**`tmp/caswell1878/` under the project folder** holds ~120 MB of page renders
and crops (`pages/`, `halves/`, `zoom/`, `probe/`) made for this reading, plus
an abandoned OCR script. **None of it is needed; delete the whole directory.**
(Deletion is off by default for connected folders, so it needs doing by hand or
by a session granted delete permission.)
