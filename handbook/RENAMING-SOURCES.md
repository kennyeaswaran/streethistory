# Tracing a renaming to the instrument that made it

How to get from "Kines says this street was renamed in 1874" to a document the
model can carry a `change` row on. Written 2026-09-04 while hunting the
Bull → Castelar ordinance, which is still not found; the method is what came
out of it.

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

## Step 1 — read the newspaper item for which stage it reports

Words that mean stage 1 or 2 and are **not** enough: *a petition was received*,
*referred to*, *a committee was appointed*, *favorably received*, *asks*,
*requests*. Words that mean stage 3: *an ordinance … was carried / adopted /
passed*, *was read and adopted*, *ordinance No. …*.

If the item reports stage 3 in the paper's own words, quote it as an `excerpt`
and the document is a source. If not, it is a lead, and it gives you a date to
start from.

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
- CDNC sits behind a bot wall for instances (see §"What does not work"), so the
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
  name rather than a stretch (change-rows-amendment.md §2).
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

## What does not work

- **CDNC cannot be searched by an instance.** `cdnc.ucr.edu/robots.txt`
  disallows automated fetching, and the site additionally answers the browser
  pane with a bot-verification interstitial. Both are refusals to respect, not
  obstacles to route around. Searching CDNC is a human step.
- **A CDNC search URL can still be handed over.** Article permalinks are
  `https://cdnc.ucr.edu/?a=d&d=<PAPER><YYYYMMDD>.<page>.<item>` — verified,
  that is the form every document in the corpus uses. The search form appears
  to be `?a=q&txq=<term>&dafyq=<from year>&datyq=<to year>&puq=LAH`, but **this
  has not been verified from inside the repo** for the reason above; check the
  shape against the address bar before relying on it.
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
  month was already known. The month came from prose in `names.js`, which came
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

**Council minutes:** the browser, not a per-date link —
https://clerkapps.lacity.org/oldcfidocs/

**CDNC searches.** Unverified shape (robots.txt forbids an instance from
loading them), so check the first one against the address bar. `puq=LAH` is
the Los Angeles Herald; drop it to search every paper.

- Castelar, 1874–75  
  https://cdnc.ucr.edu/?a=q&hs=1&r=1&results=1&txq=Castelar&dafyq=1874&datyq=1875&puq=LAH&e=-------en--20--1--txt-txIN--------
- Yale street, 1874–75  
  https://cdnc.ucr.edu/?a=q&hs=1&r=1&results=1&txq=%22Yale+street%22&dafyq=1874&datyq=1875&puq=LAH&e=-------en--20--1--txt-txIN--------
- Bull street, 1873–76  
  https://cdnc.ucr.edu/?a=q&hs=1&r=1&results=1&txq=%22Bull+street%22&dafyq=1873&datyq=1876&puq=LAH&e=-------en--20--1--txt-txIN--------
- Wasp street, 1873–76  
  https://cdnc.ucr.edu/?a=q&hs=1&r=1&results=1&txq=%22Wasp+street%22&dafyq=1873&datyq=1876&puq=LAH&e=-------en--20--1--txt-txIN--------
- ordinance + street names, 1874  
  https://cdnc.ucr.edu/?a=q&hs=1&r=1&results=1&txq=ordinance+street+name&dafyq=1874&datyq=1874&puq=LAH&e=-------en--20--1--txt-txIN--------

**The two articles already in the corpus** (verified permalinks):

- Feb. 14, 1874, the petition — https://cdnc.ucr.edu/?a=d&d=LAH18740214.2.12
- Feb. 27, 1874, the ordinance carrying — https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10

**Still wanted from CDNC** (cited by entities, never transcribed):

- Feb. 19, 1897, “A Storm of Words” — https://cdnc.ucr.edu/?a=d&d=LAH18970219.2.24
- Feb. 21, 1897, “Talking Retrenchment” — https://cdnc.ucr.edu/?a=d&d=LAH18970221.2.28
- Feb. 24, 1897, council hearing — https://cdnc.ucr.edu/?a=d&d=LAH18970224.2.20

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
