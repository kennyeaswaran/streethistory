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
