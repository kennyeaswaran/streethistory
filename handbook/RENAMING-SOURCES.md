# Tracing a renaming to the instrument that made it

How to get from "Kines says this street was renamed in 1874" to a document the
model can carry a `change` row on. Written 2026-09-04 while hunting the
Bull → Castelar ordinance, which the method found the same day
(`documents/ord-1874-02-26`; "The worked example" below), and extended as the
newspaper and minutes runs of 2026-09 taught more.

## The mechanism, and why it matters to the data

A renaming in this period moves through three stages, and only the last one
changes anything:

1. **A petition** — residents or property owners ask. Anyone could file one.
2. **A referral** — the council receives it and sends it to a committee, often
   "in conjunction with the City Attorney", to draft an ordinance.
3. **An ordinance** — carried by the council. This is the act.

**Only stage 3 may carry a `change` row.** §5's rule that a change row needs a
document "attesting the transition itself" is exactly this distinction, and the
corpus contains its own proof that the stages come apart: the Feb. 13, 1874
petition (`documents/lah-1874-02-13/`) asked that Grasshopper street become
**Union Avenue**, and two weeks later a rival petition won and it became
**Pearl** (`documents/lah-1874-02-27/`). A petition read as an outcome would
have put Union Avenue on the map.

The same Feb. 27 column shows both stages in one paragraph and then one
sentence — the petitioners' name is settled, and separately "An ordinance
changing Grasshopper street to Pearl street was carried." When a newspaper
account gives you only stage 1 or 2, you have a lead, not a source.

## Step 0 — look at the plats over that ground first ⭐

Added 2026-09-18, after two plats handed over four ordinance numbers that six
newspaper articles had not mentioned once.

**County recorder's copies of plats are annotated, sometimes for decades after
recording, and the annotations cite ordinance numbers.** A renaming that touches
a platted block gets written onto the recorder's copy — and if the renaming is
later repealed, the annotation is *struck through* and a second number written
in. So a plat can tell you three things a newspaper cannot:

1. **The number of the instrument.** `documents/mr005-566` carries a clean
   marginal note, "Orange St. changed to Wilshire Blvd. Ord. 48435", and
   `documents/mr055-014` carries "ord 16916" beside a re-lettered Orange.
2. **Which of two competing accounts won**, because the loser is crossed out.
   Both those sheets show "Wilshire … Blvd." with "ORD 16790" struck through —
   the June 1908 change, cancelled after the December 1908 repeal.
3. **Vacations and establishments**, in the same hand: "Por. of Kip St. vacated
   Ord. 46278", "Name of Kip St. established Ord. 36214".

**So the order of work is:** identify the ground, list the plats the corpus
already holds over it, read their margins and their street labels at full size —
*then* go to the newspapers. It is free, it is offline, and the numbers it yields
turn an archive visit from a search into a retrieval.

⚠ **What a plat annotation does NOT give you is a date.** Which number is which
is read off where the pen struck; only the ordinance index confirms it. And ⚠ an
annotation is not the instrument — it still cannot carry a `change` row (step 3
below). It tells you what to ask for.

## Step 1 — read the newspaper item for which stage it reports

Words that mean stage 1 or 2 and are **not** enough: *a petition was received*,
*referred to*, *a committee was appointed*, *favorably received*, *asks*,
*requests*. Words that mean stage 3: *an ordinance … was carried / adopted /
passed*, *was read and adopted*, *ordinance No. …*.

If the item reports stage 3 in the paper's own words, quote it as an `excerpt`
and the document is a source. If not, it is a lead, and it gives you a date to
start from.

**Stage words that fooled earlier readings** (change-row audit, 2026-09-18):

- **"Adopted." after a Board of Public Works report** means the council adopted
  the *recommendation*, not an ordinance (`lah-1883-08-19` says so).
- **"ordered … changed"** (1919) may be only an instruction to draft.
- **"carried 6 to 3", then reconsidered** in the same meeting (1911).
- **A list printed on first reading** (Nov. 1889, Jan. 1894) whose adoption is
  reported elsewhere without the names. The list is the proposal; the adoption
  report is the act, and the two have to be joined by date.

### Adoption is not law

Stage 3 is necessary, not sufficient. An adopted ordinance still has to survive
the mayor, and a surprising number did not. Vetoed, recalled or withdrawn:
Jan. 1888 Le Convieur → Ashland (defeated 8–5), Feb. 1889 the duplicate-names
ordinance (vetoed by Bryson; became Ord. 48), Oct. 1890 the twenty-one changes
(vetoed by Hazard), Dec. 1892 Adobe → Harvard (vetoed), Mar. 1893 Loomis → Sixth
(returned at the council's own request and tabled), Feb. 1897 the first version
of Ord. 4093 (returned), May 1905 the ninety-street ordinance (recalled from the
mayor), 1908 Orange → Wilshire (repealed), 1917 Valley → Hughes (held up), 1926
Sherman Way (protested by 74% of owners), 1927 Main → Huntington Drive (drafted,
withheld, postponed indefinitely), 1932 Pasadena Avenue → North Figueroa (vetoed,
then overridden 11–4 — the only override found).

**Never date a change from a stage-3 report alone.** Look for the approval, the
publication, or the paper saying it is in force.

**A veto is a reason to look for a *later* instrument, not evidence the change
never happened.** Collado → Union, Waters → Douglas and Canal → Beaudry were all
in the vetoed 1890 ordinance and all came true later.

**Enacted re-changes are ordinary change rows, not a withdrawn draft.** Ord. 482
(1889) changing "Second street (formerly Lakeshore avenue)" back to Lakeshore
Avenue, the 1890 "portion of Aliso street back to Pleasant avenue", and the 1908
Orange repeal are instruments changing the name on the ground back again. They
produce a genuine revival. MODEL-SPEC §5.8's Form 4 ("restoration
→ not a change row") is for a change a *draft* would have made and the enacted
text dropped, not for these.

## Step 2 — go to the council minutes for the dates after the referral

**The City Clerk's old-document browser is the way in:**

    https://clerkapps.lacity.org/oldcfidocs/

Filter by date range and page through the results. The minutes are scans of
handwritten ledgers, so they are **not searchable** — you page through and read.

⚠ **A per-date URL pattern does not work.** This file previously asserted one,
`…showpdf.aspx?doctype=minutes&filedir=R05.557&pdfname=M<MMDDYYYY>_01.pdf`,
"verified 2026-09-04". It was not. The endpoint answers *something* for any date
you put in it — which is exactly why the check passed, and why probing a Sunday
looked identical to probing a real meeting. An instance fetching a scan gets
"[This PDF is empty or contains no machine-readable text]" whether the file is
minutes or nothing, so there was no signal in it at all. Corrected 2026-09-04
after Kenny found the links dead. **Go through the browser.**

**Reading the hand.** The ledger is a clear 1870s copperplate and transcribes
well from a 300 dpi render: `pdftoppm -png -r 300 -f <page> -l <page>`, then
read the PNG. Where it defeats you, Gemini or ChatGPT in a browser will read a
page at a time (Kenny's route through the Feb. 1874 volume). Street names and
ordinance language come out reliably; personal surnames are the weak point and
want a second reader.

Cite what you find the way the 1897 transcription does — Record Series R05.557,
the PDF name, PDF page, and the manuscript **ledger page** written on the leaf,
which is the stable reference.

## Step 2a — when the minutes are not there

**The series has gaps, and one of them swallowed a renaming.** Hunting Fort
Street → Broadway in Feb. 1890, Kenny found the council minutes for the
relevant dates **missing** from the City Clerk's holdings. The instrument
itself has never been located; what carries that change in this corpus is a
newspaper report (`documents/lah-1890-02-20/`), and that is the only surviving
record of it.

So the ordering in this file is a preference, not a rule. When the minutes are
absent, an unambiguous press report of an *enacted* ordinance is the source —
and the words that make it unambiguous are worth learning, because they are
what separates it from the petition items in Step 1:

> "The ordinance changing its name to Broadway **has gone into effect**, having
> been **signed by Mayor Hazard** and **published as required by law**."

Signed, published, in force. That is stage 3 reported, not stage 1 asked, and
it is enough to carry a change row.

Two habits it argues for:

- **Check the papers even when you expect to find minutes**, because a dated
  press notice also brackets the change when the minutes give no clean date.
  On Mar. 10, 1890 the clerk writes "Fort street (now Broadway)" in passing —
  useless as an instrument, perfect as corroboration.
- **Record the gap.** A missing volume looks exactly like a search you did
  badly, until somebody writes down which it was.

## Step 2b — the ordinances were PRINTED, and that is the best index there is

Found 2026-09-06, and it changes the order of this whole file.

Ordinance No. 1613 (documents/ord-1613/), which merged Wyoming Avenue and
Cooper Street into Scott Avenue, survives **only** as a newspaper notice: the
council adopted it on Apr. 3, 1893 and the City Clerk's holdings have no volume
for that date. That is the second renaming lost to the minutes gap after Fort
Street in 1890. But this one was recoverable, and its own Section 2 says why:

> "The city clerk shall certify to the passage of this ordinance and shall
> cause the same to be **published once in the Los Angeles Daily HERALD**, and
> **thereupon and thereafter the same shall take effect and be in force**."

**Publication was not publicity. It was a condition of the law taking effect.**
Every renaming instrument in this corpus says so in its own words:

| instrument | what its closing section requires |
|---|---|
| Feb. 26, 1874 (ord-1874-02-26) | "take effect and be in force from and after its passage approval and **publication**" |
| Aug. 22, 1887 (ord-1887-08-22) | "cause the same to be **published once in the Los Angeles Daily Tribune** and thereupon and thereafter it shall take effect" |
| Apr. 3, 1893 (ord-1613) | "**published once in the Los Angeles Daily HERALD**, and thereupon and thereafter the same shall take effect" |

So for this whole period the following holds: **an ordinance that took effect
was printed in a newspaper, in full, over the clerk's certification** — number,
adoption date, mayor's approval, the operative sentence, all of it. A renaming
whose minutes are lost is still in print somewhere, and unlike the minutes, the
print is OCR'd and searchable.

That inverts the method this file was built on. The minutes are unsearchable
and are a place to *land*; CDNC is searchable and is now a place to *look* —
not for the news report of a council meeting, which is a lead, but for the
**instrument itself**, which is an answer.

**What to search for.** The formula is stable across twenty years, so search
the ordinance's own words rather than the street's:

- `"AN ORDINANCE CHANGING THE NAME"` — the headline form, singular and plural
- `"changing the names of"` with a street name
- `"are hereby abolished"` — the merger form, as in 1613
- `"shall hereafter be known as"`
- a street name plus `"ordinance"` and `"hereby"`

**Caveats, so nobody over-trusts this.**

- The ordinance names the paper it must appear in, and it is not always the
  Herald: 1887 required the *Los Angeles Daily Tribune*. CDNC's holdings decide
  what is reachable, so a miss is not proof an ordinance does not exist.
- These notices are dense small type in the legal-advertisement columns, which
  is where newspaper OCR is worst. Expect to search several spellings.
- A published ordinance gives the instrument and its date, and usually no
  extent. It settles *what* and *when*, not *where*.
- CDNC sits behind a bot wall for instances (see "Searching CDNC" below), so the
  searching is Kenny's or a browser's; an instance can still read a clip.

## Step 2c — a minutes copy of an ordinance can be an ABRIDGEMENT

Found 2026-09-06, the hard way, an hour after the opposite was written down.

The Sept. 8, 1896 minutes copy Ordinance No. 3847 into the ledger as nine bare
lines — "Freeman Street to Twentieth Street" — with no extents. The Herald of
the next morning prints the same ordinance with a stretch on every one of the
nine: "Freeman street, **from Hoover street to Budlong avenue**, change to
Twentieth street." Same instrument, same day; the clerk dropped the extents.

**So "the minutes give the text" is not the same as "the minutes give the text
in full."** An instrument read only from a minute book may be missing exactly
the part a change row needs. Three habits follow:

- **Look for the printed version even when the minutes seem complete.** By
  Step 2b it exists, because publication was a condition of the ordinance taking
  effect. Here it cost one clipping and changed the reading of the instrument.
- **Never conclude "unqualified" from a minutes copy alone.** Absence of an
  extent in the ledger is not evidence the ordinance had none — and an
  unqualified change is the more dangerous reading, because it claims the whole
  name rather than a stretch (MODEL-SPEC §5.6).
- **Mark which copy a row was read from.** `documents/ord-1874-02-26` is a
  minutes copy too and reads as complete. It may be. Nothing disproves it, and
  nothing supports it either.

The two versions disagreeing is also why the ordinance book stays on WANTED even
once a newspaper text is in hand: two secondary copies that differ do not settle
what the instrument said.

## Step 3 — if the minutes name an ordinance number, that is the document

The 1897 hunt ended at "Ordinance No. 4093 (New Series), Ordinance Book IV
p. 337", because the minutes record the number and the ledger page when an
ordinance is adopted. Expect the same shape in 1874. The ordinance *text*
usually needs the City Archivist; the number and ledger page are enough to ask
for it precisely, which is the difference between a request and a search.

## Step 2e — the compiled ordinance volumes, 1852–1889

The Council published compilations of the ordinances *in force*, indexed. All
five are in the corpus as rowless volume documents, from Gale's *The Making of
Modern Law: Primary Sources* (UCLA network only, `…/MMLP?u=uclosangeles`):
`mcpherson-1873` (reaching back to 1852), `caswell-1878`, `robinson-1884`,
`teed-1887` (Vol. III) and `teed-1889` (Vol. IV). Each folder carries a contents
file, a street-ordinance shortlist and a FINDINGS.md.

- **Search them by the right key.** Caswell and Robinson index by **subject**
  (street name) and give ordinance or resolution number and page; Teed lists by
  **ordinance number** with a title. For a street, search Caswell and Robinson;
  for an ordinance, scan Teed.
- **Resolutions place streets.** Grading, sewer and improvement resolutions name
  cross streets, which is how Robinson 1884 fixed where Virgin Street ran.
- **Absence from a subject index is weak evidence.** A street with no ordinance
  about it simply does not appear.
- **The series stops at 1889, and the numbering restarts.** The 1889 charter
  began the New Series, which is why the Oct. 1888 cull is Ordinance No. 48
  **(N.S.)**, 22 April 1889 (`documents/lah-1889-05-10`), and not in Vol. IV.
  Anything later — 3829, 3847, 4093, the 1908 and 1924 numbers — is a City Clerk
  or City Archivist request.
- **Pulling a page:** the Gale reader downloads page images a range at a time;
  the citation page it appends carries the doc id. Name downloads
  `<volume>-p<page>.pdf`.

## Step 4 — modern renamings (after about 1930): the council file

For the 1988–1997 names the route is the City Clerk's **Council File Index**
(`https://cityclerk.lacity.org/lacityclerkconnect/` → Council File search; a
JavaScript app, so a browser or a person). Search by the new name and by the
old, with the year bracketed. A street-renaming file holds the motion or request,
the **City Engineer's / Bureau of Engineering report** (which states the extent
in cross-streets — the qualified wording a row needs), the Board of Public Works
transmittal, the council action, and the **ordinance** with its number and its
adopted / approved / published dates. Pair each with the *L.A. Times* item
(full text online from 1985 at latimes.com). CDNC's papers stop in 1931, so a
1930s adoption is a *Times* item (LAPL's ProQuest).

For the 1930s–40s, before the online index: **NavigateLA's Cadastral Map** for a
parcel on the street. The Bureau annotates former names with the ordinance
("… (formerly 10th St) Ord. No. …"), and that number is the document to ask the
City Archives or the Clerk for. Kimball's *Street Names of Los Angeles* carries
ordinance numbers too (IN-PERSON.md §2).

**Making the documents.** One folder per instrument, `type: "ordinance"`,
`form: "textual"`, dated `{ on: <adopted> }` with the approval and publication in
the note; `excerpts` for the title, the operative section and the certification,
verbatim; the scan or PDF beside it; `readBy: "human"` only if a person read it.
The newspaper item is its own `news-report` document.

**Writing the rows**, all `confirmed: false`: whole-name where the ordinance names
the whole street; `scope: "extent"` with the modern `street`,
`fromCross`/`toCross` from that street's crossings, and the `wording` verbatim
where it names a stretch. Mint a missing predecessor entity from what the
ordinance says (`basis: "none"`, `searched: "none"`, an `internalNote` naming the
document); a namesake from a secondary source is a lead for the internal note,
not a `namedAfter`. Never write the `*Approved` fields. Then
`node tools/check-model.js` per document, `node tools/generate.js` at the end,
and read "Revived names" and "Row problems" in `generated/report.md`. Kenny
confirms the rows and checks each qualified extent against a map.

## Searching CDNC — cdnc.ucr.edu

**Instances cannot.** `cdnc.ucr.edu/robots.txt` disallows automated fetching,
and the site also answers the browser pane with a bot-verification
interstitial. Both are refusals to respect, not obstacles to route around.
Searching CDNC is Kenny's step; an instance writes the exact phrases for him and
reads the clips that come back.

**How to search.** Use the search box at `https://cdnc.ucr.edu`, then narrow with
the facets on the results page (newspaper = *Los Angeles Herald*, and the date
range). The advanced-search form takes a phrase in quotes and a date range
directly, which is the fastest route. Give phrases exactly as they should be
typed, in quotation marks where the quotation marks matter.

**URLs.** Article permalinks are
`https://cdnc.ucr.edu/?a=d&d=<PAPER><YYYYMMDD>.<page>.<item>` (`LAH` for the
Herald) — verified; every newspaper document in the corpus uses this form. An
article id is not guessable: the Oct. 1888 committee list is `LAH18881011.1.3`,
and an earlier guess of `.2.11` was a different article. The search form appears
to be
`https://cdnc.ucr.edu/?a=q&hs=1&r=1&results=1&txq=<term>&dafyq=<from year>&datyq=<to year>&puq=LAH&e=-------en--20--1--txt-txIN--------`
(drop `puq=LAH` to search every paper), but it cannot be verified from inside
the repo; check it against the address bar before relying on it.

**Coverage.** The Herald from the 1870s; the searchable record is thin before
about 1883 (Step 2d), and CDNC's papers stop in 1931.

**What to capture.** Several Los Angeles names belonged to two, three or four
unrelated streets at once (Virginia, Lafayette, Jackson, Ida, Pine, Crescent; the
Oct. 1888 list alone has four Virginias, three Williams, three Grants, and two
Aurora Streets four Hancock blocks apart). A hit is useful only if the article
gives a cross-street or a tract, so capture enough of the surrounding text to
place it. The full list is under "Recurring names — each a trap", at the end
of this file.

**Council minutes**, for comparison, are reached only through the City Clerk's
old-document browser, `https://clerkapps.lacity.org/oldcfidocs/` (Step 2): no
per-date link works.

## What does not work

- **Instances searching CDNC** — above.
- **A per-date minutes URL** — Step 2.
- **Directory and Sanborn routes** are covered in SERIAL-SOURCES.md and are
  better for *bracketing* a change than for naming its instrument.

## Is it worth reading the minutes straight through? — measured, 2026-09-05

Kenny pulled **every July 1850 meeting** — 8 meetings, 50 pages, 21 MB — as a
sample, and an instance read all 50. The result is the argument against doing
this at scale, and it is worth having in numbers rather than as a hunch.

**Yield: zero street names. Zero rows.** Not one street is named in the month.

What the 50 pages actually contain:

| | pages | |
|---|---|---|
| oaths of office and certifications | ~11 | the first council after statehood swearing itself in |
| the Council's own Rules and Regulations | ~10 | ten chapters of procedure |
| water / zanja / irrigation regulation | ~6 | the zanjero, ditch fees, water rights |
| salaries, jail, courthouse, school petitions | ~10 | |
| lot auctions, treasurer's statements, sundry | rest | |

**Two items touch streets at all, and neither is a row** (§ below records both).
So: a month of the earliest council, read in full, produced one citable
sentence of context and nothing enterable.

### What that projects to

At this sample's rates — 6.25 pages and 2.6 MB per meeting — and a council
meeting roughly weekly plus specials:

```
~90 meetings/year × 60 years (1850-1910)  ≈  5,400 meetings
                                          ≈  34,000 pages
                                          ≈  14 GB of scans
```

Handwritten throughout, so **no text layer and no search**: every one of those
pages is a human or a vision pass. Against that, the whole corpus today needs
perhaps a dozen more renaming instruments.

### The asymmetry that decides it

The minutes are **unsearchable**; the newspapers are **OCR'd and searchable**.
And the papers reported council meetings the next morning. So the newspaper is
not a worse source than the minutes — it is a far better *index* to them.

That inverts the order this file used to recommend, and the three finds of
2026-09-04 all support the inversion:

- **Fort → Broadway** was found in the Herald after the minutes for those dates
  turned out to be missing. Newspaper-first would have gone straight to it.
- **Virgin → Alpine** was found in the minutes at the first try — because a
  month was already known. The month came from prose in `data/names.js`, which came
  from Kines, who got it from somewhere.
- **Bull → Castelar** was found only because the Feb. 1874 petition gave a
  fortnight to search.

In every case the expensive step was cheap *because something else had already
narrowed it to a date*. Reading forward through the minutes is that narrowing
done the most expensive way available.

### The recommendation

1. **Search CDNC** for the phrasings a renaming report uses — "changing the
   name of", "is no longer", "hereafter be known as" — over a year range. This
   is a human step (robots.txt; see "What does not work"), but it is minutes
   rather than months.
2. **Take each hit's date to the minutes**, which is the workflow above, and
   which works.
3. **Do not read forward.** The one exception worth considering is the
   **ordinance ledger indexes** — Ordinance Book IV p. 337 was found that way
   for 1897 — since an index lists ordinances by title, and "An Ordinance
   changing the name of…" is a title. That is a few hundred index pages against
   34,000 minute pages, and it is the only exhaustive pass with a plausible
   ratio.

**Where an exhaustive read WOULD pay:** a single year already known to be
dense. The 1897 renaming ordinance touched 350 streets in one instrument; if a
second such omnibus exists, it is worth a year of minutes to find. Nothing
suggests one does.

## What each source gives — measured on the whole newspaper run, 2026-09-06

Kenny's CDNC phrase search on *"ordinance changing"* was carried through the
Herald to 1927 and then the Daily News and Evening Express to 1935, and every
clipping became a document. Read as a whole, the run answers "can we find full
texts or street lists in the papers or the minutes?", and the answer is not
symmetrical:

- **The Herald prints a full list only when the list is the story.** Ordinance
  No. 48 (1889, `lah-1889-05-10`) and the Oct. 1888 committee report
  (`lah-1888-10-11`) are the only two full lists it ever gave this project, both
  from the 1880s, when the paper still printed legal notices at length. After
  about 1890 it reports that an ordinance exists, names two or three streets as
  examples, and stops: the ninety-street ordinance of 1905 got four articles and
  **one** concrete change out of ninety. The 1920s–30s papers never print a list
  either; five names is the most, because five fits in a paragraph.
- **So for lists, the minutes are the only route.** The newspaper's value is
  telling you *which meeting* to pull.
- **The newspaper's comparative advantage is failure.** It says whether the
  ordinance survived — vetoed, recalled, repealed, held up, protested, withheld
  ("Adoption is not law", above). A minute book showing a 10–4 vote and no later
  ordinance is silence; the paper says what the silence means. **A minutes-first
  strategy would have written every one of those as a change. Read the
  newspaper first, then pull the minutes.**
- **One campaign in three pushes.** Streets south of Pico were renamed to
  numbers in Nov. 1889; the same names turn up again in the Sept. 1896 southwest
  ordinance (Shafer, Simpson, Janes), beside a petition asking that names be
  changed "so as to make them compare with the names of the streets on the north
  side of Pico Street"; then the 1897 ordinance. Read 1889, 1896 and 1897
  together, not as three separate tidyings.
- **The seniority rule for duplicates.** `lah-1899-10-11` (Pasadena council news,
  kept for this alone) states the seniority rule for duplicate names, which Los
  Angeles adopts as annexation policy by 1910 (`lah-1910-09-30`). Read it there
  before deciding which of two same-named streets gave way.

## The worked example, now closed

**Bull → Castelar and Wasp → Yale, Feb. 1874 — found 2026-09-04.** The method
above, run once: stage 1 was the Feb. 13 petition, stage 2 the referral in the
same item, and stage 3 turned up in the council minutes for **Feb. 26, 1874**,
ledger page 621 — one ordinance renaming all three streets at once. It is
`documents/ord-1874-02-26/`.

Three lessons that generalise:

- **Go to the minutes even when the newspaper looks conclusive.** The Herald
  reported this meeting and named one street of three.
- **The relevant page is one page.** A meeting PDF runs to dozens of leaves of
  unrelated business — warrants, bills, ditch repairs. Page through for the
  ordinance heading; it is set off and easy to spot.
- **Expect no ordinance number in the 1870s.** The 1897 minutes name
  "Ordinance No. 4093 (New Series)"; this one is headed only "An Ordinance
  Changing the names of Certain Streets". The ledger page is the citation.

---

## Full URLs

- **Council minutes:** the browser, not a per-date link —
  https://clerkapps.lacity.org/oldcfidocs/
- **Council File Index** (modern renamings, Step 4):
  https://cityclerk.lacity.org/lacityclerkconnect/
- **CDNC:** permalink and search-URL shapes under "Searching CDNC" above.

## Step 2d — search the SUCCESSOR name, not the old one

Added 2026-09-07, after a coverage audit reported that six of our oldest renamings had
left "no trace" in 176 newspaper documents. One of the six was wrong, and the error is
general enough to be worth a step of its own.

**The searchable newspaper record begins, in practice, around 1883.** A street renamed
before that appears in it only under its *new* name. Searching for the old one returns
nothing, and nothing is easy to mistake for evidence of absence.

The case: `eternity` is lettered `ETERNITY ST.` / `CALLE DE LA ETERNIDAD` on the 1849
survey, and Kines has it renamed Buena Vista in 1888. The string "Eternity" occurs in
**zero** of 176 newspaper documents — and the renaming is nevertheless attested twice,
under the successor name:

> "an ordinance changing the names of **Buena Vista street from Bellevue avenue north
> to the river**…" (`documents/lah-1896-05-16`)

> "**Buena Vista, from Bellevue to the river**" → Broadway (`documents/lah-1908-09-22`)

Bellevue-north-to-the-river on the Broadway corridor is exactly where our alignment of
the Ord survey puts Eternity. The chain holds; only the search was wrong.

**So the order is:**

1. Search the **successor** name first, with an extent if you have one. That is the
   name the papers will be using.
2. Search the **old** name second. A hit there dates the *end* of the old name and may
   catch the renaming itself; a miss means very little.
3. Only when both fail, and the successor name is genuinely absent, is "not in this
   corpus" a finding.

And the confirmation is always **geometric**, not lexical: the reason `lah-1896-05-16`
counts as attesting Eternity is that the extent it gives lands on the corridor our
survey alignment assigns to `eternity` — not that any word matched. Rule 2 does the
work; the search only finds the candidate.

### The mirror-image trap

The same asymmetry runs the other way. A name that *spread* will be found under the
successor name on ground that was never the street you are tracing:

- **Castelar** was minted from Bull Street in 1874 and then took **Cemetery Avenue** in
  1886 (`documents/lah-1886-07-23`) — a second, different street.
- **Grand Avenue** took **Philadelphia street** in 1895 (`documents/lah-1895-07-02`).
- **Broadway** took Fort street, Buena Vista and Downey avenue in 1908
  (`documents/lah-1908-09-22`), and Moneta avenue in 1926 (`documents/dnla-1926-09-30`).

So a successor-name hit is a *candidate*, never a confirmation. Check the extent
against the corridor before believing it.

### Recurring names — each a trap

A name in an ordinance is not yet a street. These names each belonged to several
unrelated Los Angeles streets, often at the same time (change-row audit,
2026-09-18): **Pine** (four), **Virginia** (four), **Georgia** (two, maybe three),
**William** (two or three; `william` already carries sightings on both Santee and
Bixel), **Belmont** (two, plus Aztec on the same corridor), **Willow** (two),
**Cooper** (two — the one in 1896 is not `ord-1613`'s), **California** (two — the
1896 Bunker Hill one is not `california-street-14th`), **Jackson** (three or
four), **South Street** (at least three), **Short** (two), **Crescent** (two), and
**Broadway** (Fort, Buena Vista, Downey, Moneta, *and* a pre-1890 "Broadway
street" that became Toberman the same night Fort became Broadway). Resolve the
entity from the extent, never from the word.

### A clean checker does not mean the right street — Ord. 482

Ordinance No. 482's "Second street … between Lucas avenue and Figueroa street"
was first written as a row on 2nd Street, Lucas Avenue → Figueroa Street. Both
ends resolved at 0 m and `tools/check-model.js` passed it. A trial build with the
row let through painted Lake Shore Avenue over 2nd Street ground lettered
"Second" since 1869: the 1889 Figueroa is `figueroa-gov`, today's Boylston, and
modern 2nd Street never meets Boylston (203 m). **This is the Miramar trap
(CLAUDE.md rule 2) on a textual document, and the checker cannot see it** — only
a build can. When a textual row names streets whose names have since moved,
build with the unconfirmed rows let through (on a copy of the tree) and look at
where they paint before writing the extent.
