# PROPOSED — change rows: what a renaming does and does not say

**Status: BUILT and live as of 2026-09-04.** §§2–6 and §12 are implemented in
`generate.js` and enforced by `check-model.js`; §13 records what landing it
cost. This file folds into MODEL-SPEC §5 whenever Kenny is ready. It is written against MODEL-SPEC §5 (row kinds) and §6.2 (what
each kind does to each axis), and folds into them if Kenny approves.

One part *is* implemented, because it is the existing spec rather than a change
to it, and is recorded in §8 of MODEL-SPEC: `attested` no longer counts
`change` rows. §6 below says what that did.

---

## 1. What went wrong

Boylston Street has exactly one row in the whole corpus:

```js
{ kind: "change", from: "figueroa-gov", to: "boylston",
  street: "Boylston Street", fromCross: null, toCross: null }
```

and came out `attested: true`, `knownFraction: 0.98` along its entire modern
length — a documented-looking blue over ground nothing says was ever built.
Figueroa, Central and Georgia had the same shape of problem.

Two mechanisms, and they compound:

**A renaming was being read as testimony about pavement.** §6.2's table already
gives `change` no existence axis at all — the cell is `—` — but `generate.js`
counted it, and §8's 2026-08-31 amendment listed `change` among the positive
rows. Those two passages contradicted each other and the wrong one was in code.

**`null` means something different on a document with no sheet.** On a drawn
plat, `fromCross: null` means "the street's own end *inside the coverage
polygon*", and rule 3 keeps it honest. `ord-4093` is `form: "textual"`;
`check-model` forbids it an alignment, and its coverage is a lat/lng box over
the whole city. So `null` quietly means **the whole modern street**, and the
Boylston row has null at both ends.

**And the Pico ends were never in the document.** Both Figueroa rows carry
`toCross: "Pico Boulevard"`:

```js
{ kind: "change", from: "chapules", to: "pearl",       ... toCross: "Pico Boulevard" }
{ kind: "change", from: "pearl",    to: "figueroa-gov", ... toCross: "Pico Boulevard" }
```

Neither document says Pico. Pearl's south end *was* at Pico, but that is
derived from MR 3-32 (1875) and MR 7-21 (1885) — evidence written into the row
as though the ordinance had stated it. This is the same failure as a hand-typed
source citation freezing one sheet: a derived fact authored in the place
reserved for what the document says.

## 2. Two kinds of change, and they must be declared

A renaming document either quantifies over the name or over a stretch:

- **Unqualified** — *"Pearl Street shall be known as Figueroa Street."* Every
  stretch of pavement bearing the first entity on that date takes the second,
  wherever it is. No extent is stated because none is meant.
- **Qualified** — *"Figueroa Street north of Pico shall be known as Boylston
  Street."* A particular stretch, and only that stretch.

**Which one it is must be written in the row, never inferred from whether
`fromCross`/`toCross` are present.** Two facts in the current corpus make the
inference unsafe in both directions:

- `figueroa-gov → boylston` has **no crosses and is qualified.** The ordinance
  text is still pending from the City Archivist; the row was read off Herald
  reports. Read as unqualified it would apply wherever `figueroa-gov` is
  attested before Feb 1897 — which includes MR 7-21's stretch on Figueroa south
  of Pico. All of Figueroa would become Boylston.
- `chapules → pearl` has **a cross and is unqualified** (§1).

So a row with no extent is ambiguous between "the document didn't qualify it"
and "the qualifier hasn't been transcribed", and those two must not share a
representation. `check-model` should reject a change row that declares neither.

## 3. Three states, because the third is where most rows will sit

| state | what it means | extent |
|---|---|---|
| **unqualified** | every stretch bearing A takes B | derived — never authored |
| **qualified, resolved** | this stretch of A takes B | authored by a human, `confirmed: false` until checked |
| **qualified, unresolved** | a change happened; which ground is not established | none — draws nothing |

The third state is not a placeholder, it is the honest description of most of
`ord-4093` until the ordinance text arrives. A row in it still carries a real
fact — two entities and a date — and still belongs in the name's prose history
("renamed per Ordinance 4093"); it simply puts nothing on the map. Rule 4's
"unknowns stay unknown", applied to extents.

## 4. Unqualified changes: derive the extent, never author it

The change applies wherever the corpus independently says A held immediately
before the date, by the same interval logic as everything else (§6.2). This is
the move the spec already makes for spelling periods — "dates are derived, not
authored" (§3) — and it buys the same things: it self-corrects as the corpus
grows, and it cannot freeze a guess.

Two consequences worth stating:

- **Where the corpus knows nothing, the change draws nothing.** Correct, not a
  gap.
- **"Held at that time" means the derived timeline, not "any row naming A".**
  The corpus already contains the trap: MR 66-35 was *recorded* May 1897 but
  *surveyed* March 1894, and still letters the pre-February names.

**Acceptance test.** Strip `toCross: "Pico Boulevard"` from both Figueroa rows
and mark them unqualified. `pearl` is attested on MR 3-32 (1875) and
`figueroa-gov` on MR 7-21 (1885) from Pico south, so a correct derivation
reproduces the Pico boundary from the state rows alone. If Figueroa's
segmentation survives that unchanged, the derivation works.

## 5. Qualified changes: record the words, author the ground

A qualified change carries the document's **own wording, verbatim**, alongside
the resolved modern extent. The wording is testimony; the extent is research.

*"Figueroa north of Pico"* is 1897 Figueroa and 1897 Pico. Resolving that to
modern pavement is exactly the inference rule 2 exists to catch — on M.R. 66-35
the plat's "Third St" is modern Miramar. So the resolved extent is a researched
row like any other: `confirmed: false` until a human has checked it, and
carrying a `basis`.

**Do not build a resolver yet.** A directional qualifier ("north of Pico")
looks calculable, and a two-ended one ("Third from Alameda to Mateo") looks
more constrained still — but in the Arts District and Boyle Heights, where the
grid rotates and the numbering shifts, *the stretch of A between X and Y* does
not pick out a unique connected corridor, and a resolver trusting name plus
direction walks into rule 2. There are six change rows in the corpus. Carry the
verbatim wording so a future resolver can be **checked against** the human
answers already on disk; that is a far better position than building it first.

**Open question: `basis`.** The vocabulary is lot-level / label / alignment /
position, and "a human read an ordinance against a map" is none of them.

## 6. What each state does to each axis

Replacing the single `change` line in §6.2's table:

| | name axis | existence axis |
|---|---|---|
| **unqualified** | pins the transition wherever A is attested | **nothing** — that ground is already attested by whatever put A there |
| **qualified, resolved** | pins the transition on the stated stretch | **attests that stretch**, per the document's `attests` — an ordinance naming a stretch asserts the street was there to be renamed |
| **qualified, unresolved** | nothing drawable; prose only | nothing |

The existing name-side logic is unchanged and should not be touched: for a
third entity `E ∉ {A, B}` a change contradicts at all dates, for `E = A` after
`t`, for `E = B` before `t`; a respelling (`from === to`) contradicts nothing
for its own entity. Respellings ride the same three states — Georgia Bell →
Georgia applies wherever `georgia-bell` is attested.

**Implemented ahead of the rest:** `attested` now excludes `change` entirely.
That is conservative rather than final — it under-claims on the middle row of
the table, because today's rows carry no marker and the middle row cannot be
told from the others. Central Avenue's two rows are genuinely qualified with
real cross streets and lost their blue; they get it back when they are marked.
Under-claiming was chosen over over-claiming deliberately (rule 4).

Effect on the corpus: nine segments across four streets flipped to
`attested: false`, and nothing else in the generated output moved — no segment
boundary, no timeline, no source list.

```
Boylston Street   seg0 north of Colton (Figueroa St)     0.98 → —
Boylston Street   seg1 south of 3rd (Figueroa St)        0.98 → —
Central Avenue    seg2 beyond 2nd (Vine St)              0.73 → —
Central Avenue    seg3 2nd to 3rd (Wolfskill Ave)        0.95 → —
Central Avenue    seg5 south of 6th (Wolfskill Ave)      0.95 → —
Figueroa Street   seg0 north of 3rd (Pearl St)           0.73 → —
Figueroa Street   seg1 beyond 3rd (Pearl St)             1.00 → —
Georgia Street    seg0 north of Chick Hearn Court        0.86 → —
Georgia Street    seg1 south of 15th Drive               0.86 → —
```

## 7. Why there is no "known name, unknown existence"

Kenny, 2026-09-04, and it is worth recording because it justifies §4:

> any segment of modern Boylston whose existence on a particular date is
> unknown will also have unknown name — since we don't know if it was directly
> built as Boylston either before or after the renaming, or built as Figueroa
> and then renamed, or built as something else and included in a second
> renaming.

Name knowledge comes from documents that letter a corridor, and a document that
letters a corridor draws it. So known-name implies known-existence, and the
derived-extent rule can never produce ground with a name and no existence. The
converse does occur and is already modelled: an `unnamed` row attests existence
without a name.

## 8. Migration

All six change rows need re-reading. Provisionally:

| row | document | now | should be |
|---|---|---|---|
| `chapules → pearl` | lah-1874-02-27 | `toCross: "Pico Boulevard"` | unqualified; drop the cross |
| `pearl → figueroa-gov` | ord-4093 | `toCross: "Pico Boulevard"` | unqualified; drop the cross |
| `figueroa-gov → boylston` | ord-4093 | no crosses | **qualified, unresolved** until the ordinance text arrives |
| `georgia-bell → georgia-bell` | ord-4093 | respelling, no crosses | unqualified respelling |
| `vine-central → central-ave` | ord-4093 | 1st → 2nd | qualified, resolved — needs the verbatim wording |
| `wolfskill-ave → central-ave` | ord-4093 | 2nd → null | **unqualified** (Kenny, from the text we have); drop the cross |

Four of the six are unqualified, which is worth noticing: the shape that looked
like "one end stated, one open" keeps turning out to be an unqualified change
with a derived end written into the row. That is the failure this amendment
exists to stop, and it has happened three times out of six.

## 9. Also worth deciding

- **`attests: "built-by"` on `ord-4093`.** Defensible — you do not rename a
  street that is not there — but it is an existence claim with no extent, which
  is what §6 has just stopped acting on. Under the table above it becomes the
  right thing again for qualified/resolved rows and inert for the others, so it
  can probably stay as-is; worth a conscious decision rather than drift.
- **`completeness: "exhaustive-in-scope"`.** If the ordinance really lists
  everything in scope, a name it does *not* mention did not change that day.
  Potentially strong negative evidence later. Do not design it out.
- **`annotation` rows** still count toward `attested`. §6.2 says they should
  "only if the row asserts existence", which nothing encodes. Left alone here;
  flagged so it is not forgotten.

## 10. Specimens: the grammar of a renaming statement

Written from the material already on disk — the Feb. 1897 council minutes
(`omnibus-1897-renaming-council-minutes.md`, the manuscript) and the Herald's
print of the same committee report (`omnibus-1897-renaming.md`). Roughly sixty
statements, and they fall into six forms, not two. **Two of the six are not
change rows at all**, which is the finding that matters most here.

### The ordinance's own formula

Floor motions quote the instrument's wording, so we know the canonical shape:

> That the name of that certain street known as and called **Stanley Avenue**,
> is hereby changed to **Tropico Avenue**

> That the name of that certain street known as and called **Wood Avenue from
> Morrison Road to Soto Street**, is hereby changed to **Griffin Avenue**

One formula, with the extent optional inside the subject. That is the split
this amendment proposes, and the ordinance draws it in the same place.

### Form 1 — bare pair → **unqualified**

> Hawkins Street | Manitou Street
> Wolfskill Avenue | Central Avenue
> Larkin Street | Fourth Street
> Chestnut Street | Avenue 21

By far the commonest. Roughly forty of the sixty.

### Form 2 — two anchors → **qualified**

> Vine Street **from Second to First** changed to Central Avenue
> Short Street **from Fourth to Santa Fe Grounds** | Fourth Street
> Ash Street **from Main to Date** to Queirolo
> Wood Avenue **from Morrison Road to Soto Street** → Griffin Avenue

Note "Santa Fe Grounds": an anchor need not be a cross street. The extent
vocabulary has to admit a landmark, and resolving one is research, not
arithmetic.

### Form 3 — one anchor plus a direction → **qualified**

> Walnut Street, **from Main North** | Avenue 20
> Jackson Street, **from Pasadena Avenue North** | Avenue 30

This is the shape I earlier mistook for "one end stated, one end open". It is
not: the open end is *bounded by the direction word*, and the statement is
completely qualified. It is also the form a resolver would find hardest — "from
Main north" is only as good as our knowledge of where that street ran in 1897.

### Form 4 — restoration → **not a change row**

> The name **Moore Street reinstated**.
> The name **Marion Avenue restored**.
> The name **Ruth Avenue restored**.
> The name **Yolande Street restored**.

This withdraws a change the draft would have made. Nothing on the ground
changes name; the street keeps the name it had. It is a fact about the
instrument, and it produces **no change row** — but it is not worthless, because
it dates a *negative*: Ruth Avenue was still Ruth in February 1897, which is
exactly what the corpus uses today to prove the Ruth→Stanford swap postdates
the ordinance.

Somewhere to put that is an open question. It is not a `change`, not a `state`
(no sheet letters anything), and not an `absent`. The nearest existing kind is
`annotation`, which §5 says is "a place fact tied to an extent" — this is a
name fact tied to an entity. It may want its own kind, or it may be prose on
the entity with the document cited.

### Form 5 — amendment to the draft's text → **not a change row either**

> the name "**De La Guerra Street**" as mentioned in the draft of said ordinance
> be changed to "**Boylston Street**"

This edits the instrument, not the city. De La Guerra was never law — the Feb. 2
version was returned unsigned and its vote reconsidered — so a change row
`figueroa-gov → de-la-guerra → boylston` would put a phase on the map that never
existed. The Boylston entity's `note` already says this; nothing enforces it.

**This is the trap in the 1897 material.** A committee report is a list of
amendments to a draft, and its left-hand column mixes street names that existed
on the ground with names that existed only in the commission's proposal —
Alcantara, Escalon, Chicote, Negrete, Zaragoza and Primero are all names the
commission *coined*, and "Alcantara Street | Taylor Street" therefore means "the
draft would have said Alcantara; make it Taylor", not "Alcantara Street was
renamed Taylor Street". The repo currently reads `Larkin Street | Fourth Street`
from the same table as a real renaming (`omnibus-1897-renaming.md` marks it
✔ applied). Both readings cannot be right, and **which one holds for which line
cannot be settled from the committee report alone** — it needs the ordinance
text, or a pre-1897 map showing a Larkin Street.

Until then, every line drawn from a committee report is at best
*qualified, unresolved* (§3), and possibly not a renaming at all.

### Form 6 — a duplicate assignment

> Canada Street | Avenue 33   … and …   Lacy Street | Avenue 33

Both in the same set of amendments. One of them must have been corrected later.
Not a modelling problem, but a reason the model should never silently merge two
entities because they end up spelling alike.

### What this suggests for the row shape

- The unqualified/qualified split is the document's own, and marking it is
  transcription rather than interpretation. Good sign.
- Forms 4 and 5 need somewhere to go that is *not* a change row, or they will
  be forced into one — and form 5 in particular would fabricate a name phase.
- An extent's anchors are not always cross streets, and a direction word is a
  bounding term, not an absent one.
- The verbatim wording has to travel with the row. Every distinction above is
  visible in the words and invisible in the resolved extent.

## 11. Documents to pull, in priority order

CDNC now sits behind a bot-verification interstitial — the built-in browser
reaches it and stops there, and working around bot detection is out of scope
for an instance. These need Kenny, or Chrome with his own session.

| what | url | why first |
|---|---|---|
| Herald, Feb. 27, 1874, "City and Suburbs" | `cdnc.ucr.edu/?a=d&d=LAH18740227.2.10` | already a document (`lah-1874-02-27`) with a change row and **no transcription**. Its wording decides whether `chapules → pearl` is really unqualified |
| Herald, Feb. 14, 1874, "Common Council" | `cdnc.ucr.edu/?a=d&d=LAH18740214.2.12` | the same council's petition renaming **Bull → Castelar and Hornet → Yale**; url is already in `names.js` under `bull`. Two more renamings, one document, and a *petition* rather than an ordinance — a different document type to design against |
| Herald, Feb. 19, 1897, "A Storm of Words" | `cdnc.ucr.edu/?a=d&d=LAH18970219.2.24` | cited by `georgia-bell`, `nevada-1886` and `pearl`; carries Forman's dated history and Toberman's claim, and is the source for a **prose-dated spelling period** |
| Herald, Feb. 21, 1897, "Talking Retrenchment" | `cdnc.ucr.edu/?a=d&d=LAH18970221.2.28` | already transcribed in part; wanted to check the committee table's left column against the manuscript |

**Renamings the corpus asserts with a date and no document at all** — each one
a candidate once a source is found, and a reason to look at 1874 and 1886–90
council coverage rather than only 1897:

| renaming | date | mechanism as recorded |
|---|---|---|
| Bull → Castelar | Feb. 1874 | petition |
| Hornet → Yale | Feb. 1874 | the same petition |
| Charity → Grand | 1886–87 | petition by residents |
| High → Walters | 1886 | — |
| Virgin → Alpine | Aug. 1887 | petition (W. P. …) |
| Eternity → Buena Vista | 1888 | — |
| Georgia → Georgia Bell | 1889 | — |
| Fort → Broadway | Feb. 1890 | petition (Fred Lind Alles) |
| High/Walters → Ord | 1890 | — |
| Buena Vista → North Broadway | Nov. 1909 | — |
| Ruth ↔ Stanford / Crocker | after Feb. 1897 | unresearched |
| 10th → Olympic | 1935 (asked 1929) | — |

Eleven of the twelve predate 1900 and most name a petition, which suggests the
council-minutes series that produced the 1897 manuscript would answer several
of them at once — and would give the model specimens of a **petition** and a
**single-street ordinance**, neither of which the corpus has yet.

## 12. `excerpts` — how a textual document carries its evidence

Settled 2026-09-04, and piloted on `documents/lah-1874-02-27/`.

On a plat the evidence is ink, and a row quotes it in `asWritten`. On a textual
document the evidence is a **sentence**, and until now nothing carried it: the
1874 Herald document asserted `chapules → pearl` with no trace of the words that
license it, so confirming the row meant going back to CDNC.

So a textual document carries `excerpts`, verbatim and in document order, and a
row points at them:

```js
excerpts: [
  { id: "petition",
    text: "The owners of property on Grasshopper street petition for the name " +
          "Pearl street; others for Union Avenue. A heavy discussion ensued when " +
          "the first named petitioners won, and Pearl street is to be the new name." },
  { id: "ordinance-carried",
    text: "A ordinance changing Grasshopper street to Pearl street was carried." }
],

rows: [
  { kind: "change", from: "chapules", to: "pearl",
    scope: "whole-name",
    says: ["petition", "ordinance-carried"], ... }
]
```

### Why named excerpts rather than the whole text with offsets

The alternative — transcribe the column whole and point each row at a character
range — was considered and rejected:

- **The relation is many-to-many, and this very document proves it.** Two
  passages license one row here: the first records the decision, the second the
  enacting act. And the reverse is coming — the Feb. 14, 1874 petition renames
  Bull → Castelar *and* Hornet → Yale in one sentence, which will be one excerpt
  and two rows.
- **Offsets are brittle.** Any correction to a transcription silently re-points
  every row that indexes into it, and the failure is invisible.
- **Ids are diffable and survive re-transcription.** They are also readable in
  the row, which is where somebody confirming it is looking.

The whole text still has a home: `transcription`, as now (§4). Excerpts are the
load-bearing quotes and live beside the rows, not in a companion file — the
warrant and the claim must travel together, because the confirm step (rule 5) is
"check this row against the source", and it should not require two files.

### The rules

- **Verbatim.** Excerpts are `asWritten` for prose: OCR slips, "A ordinance",
  and period spelling all stay. Corrections go in the row's `note`.
- **`…` marks elision** between excerpts, and the excerpt list is not a claim
  to completeness — `sweptFully` says whether the document was read through.
- **An excerpt nobody quotes is still worth keeping** if it bears on reading one
  that is quoted.
- **Not everything in an excerpt becomes a row.** "others for Union Avenue" is a
  name proposed and rejected: it never named the street, so it is not an entity
  and gets no row — the same reason "De La Guerra Street" is not a phase of
  Boylston (§10, form 5).
- **What the text does not place, the text does not attest.** The same 1874
  column mentions "Bunker Hill Avenue" without saying which street it is; that
  went to research-leads.md, not into a row. A textual document tempts you to
  turn every proper noun into an attestation, and the extent discipline that
  §4.4 imposes on a plat's coverage polygon has no equivalent here — `excerpts`
  is the closest thing, because a claim that cannot be pinned to a quoted
  sentence has nothing holding it down.

### Settled and enforced (2026-09-04)

**`says` is required on every row of a `form: "textual"` document**, and every
id in it must name an excerpt the document carries. `check-model.js` enforces
both, plus unique excerpt ids and text on each. The reason it is an error and
not a warning: a plat's coverage polygon is what stops a claim outrunning its
document, and a textual document has no polygon — the quoted sentence is the
only thing bounding what the document may be read to say.

`ord-4093` was the objection to requiring it, and the answer is a **placeholder
excerpt**: an id beginning `PLACEHOLDER-`, whose text says in square brackets
that no warrant has been quoted yet and why. The checker warns on every row that
cites one, so the debt is counted rather than hidden. Three of its five rows are
placeholders today; two carry real manuscript text —

```
vine-second-to-first   "Vine Street from Second to First changed to Central Avenue."
wolfskill-table-row    "Wolfskill Avenue | Central Avenue"
```

— and the three placeholders are placeholders for a reason worth reading: the
manuscript's nearest lines for Boylston and for the Georgia respelling are
floor motions amending the **draft** (§10, form 5), which edit the instrument
rather than the city and are therefore not the warrant for a change on the
ground. Quoting them would have looked like evidence.

### Still open

- Whether an excerpt wants its own citation when a document quotes another —
  the committee report is quoted inside the council minutes, and `ord-4093`'s
  two real excerpts are really the minutes quoting the committee.
- Whether a **clipping** should accompany every textual document. Piloted on
  `lah-1874-02-27`, whose `scan` is now a 20 KB crop from CDNC's own page-image
  cropper, committed rather than gitignored: the rule is that what cannot be
  re-derived is carved back into git, and a CDNC crop behind a bot-verification
  wall is exactly that. It costs a manual crop per document; it buys an excerpt
  that can be checked without leaving the repo.

## 13. The derivation, built and measured (2026-09-04)

Built, run against the whole corpus, and **reverted pending a decision**. The
working generator is unchanged; the scope markers are in the data. The code is
kept at `_to_delete/2026-09-04/gen.derive-experiment.js`.

### What it does

Held-back placement plus a second pass. An authored change row with
`scope: "extent"` places as before; `"extent-unresolved"` places nothing;
`"whole-name"` is deferred, and after every authored row is placed, each
deferred change — **in date order** — is expanded onto every record where its
`from` entity holds. "Holds" counts `state` rows for A *and* change rows whose
`to` is A, which is what makes the chain work, and skips ground attested only
*after* the change date. Inherited extents are clipped to the renaming
document's own coverage.

### The chain works

Figueroa comes out as designed. Three Ord sheets letter Grasshopper in 1849,
the 1874 report moves that ground to Pearl, the 1897 ordinance moves Pearl's
ground — its own 1875 sighting plus everything inherited — to Figueroa. And
`beyond Pico (original Figueroa St)` survives, because Grasshopper was never
lettered south of Pico so Pearl never arrived there and the 1897 change never
fired. The boundary is derived from where the names are lettered, not from
anyone having typed "Pico".

### What it costs, and why

Four streets move. Boylston and Central are expected. **Georgia is the finding:**

```
Georgia Street  seg0  entityId: georgia-bell  →  entityId: null
```

`georgia-bell` has **no state rows anywhere in the corpus**. Its whole existence
is prose — spelling periods with `from`/`until` and their own sources (§3's
prose exception). So an unqualified change has no ground to land on, and the
authored `street: "Georgia Street"` on the respelling row was the only thing
putting that entity on that pavement. Worse, it was also the only thing
resolving the OSM bind, which is ambiguous because `georgia-east` and
`georgia-bell` spell alike — so removing it leaves modern Georgia Street with
**no name entity at all**.

`vine-central` has no state rows either and survives only because its row is
`scope: "extent"`.

This is the amendment working, not failing: §4 says "where the corpus knows
nothing, the change draws nothing", and Georgia is that case. What the
experiment reveals is that three entities were being placed on the map by an
authored `street` field rather than by evidence, and the field was doing that
silently. The rule does not want weakening; the corpus wants filling.

### The decision

1. **Accept the holes.** Land it, and Georgia Street carries no history until a
   document row attests `georgia-bell` somewhere. Honest, and visibly worse.
2. **Fill first.** Get a row for `georgia-bell` — the 1897 ordinance names
   Georgia on the floor ("Nevada Street" → "Georgia Street"), and a Sanborn
   sheet or directory would letter it — then land the derivation.
3. **Re-read the Georgia row as qualified.** If the ordinance named a stretch,
   `scope: "extent"` with an authored extent is the truthful record and the
   problem disappears. This needs the ordinance text.

(3) then (2) looks right, but all three depend on documents not yet in hand, so
it is Kenny's call whether the map may get worse in the meantime.

### One thing to fix before landing either way

An unqualified change whose `from` is attested nowhere reports to
`generated/report.md` and draws nothing — but nothing yet warns that an entity
placed *only* by an authored `street` on a change row has no evidence behind it.
That is the condition Georgia was in, and it was invisible until the field was
removed. `check-model.js` should say so.


## 14. Landed (2026-09-04)

Kenny's call: **accept the holes.** `georgia-bell` is on no pavement until a
document puts it there, and modern Georgia Street carries no entity in the
meantime. `handbook/WANTED.md` P1 is the sheet that fixes it.

Enforced by `check-model.js` from today:

- every change row declares a `scope` — `whole-name`, `extent` or
  `extent-unresolved` — and it is an error to omit it, because a row with no
  extent is ambiguous between "the document did not qualify it" and "the
  qualifier was not transcribed", and the corpus has one of each;
- a `whole-name` or `extent-unresolved` row may not carry `street`,
  `fromCross` or `toCross` — that is where a derived fact used to get written
  in the source's voice, three times, always naming a boundary no document
  states;
- an `extent` row must carry a street, since it is the stretch the document
  names;
- an unqualified change whose `from` is lettered by no document **warns**: it
  lands on no ground and draws nothing, which is honest but must not be
  silent. One hit today, `georgia-bell`.

What the map gained, on Figueroa's middle stretch:

```
by 1849 → Feb. 1874   Grasshopper Street   origin
Feb. 1874 → Feb. 1897 Pearl Street         origin
Feb. 1897 → now       Figueroa Street      transfer
```

and south of Pico, where Grasshopper was never lettered, Pearl never arrives
and the 1897 change never fires: `beyond Pico (original Figueroa St)`, Figueroa
by 1885, untouched. The Pico boundary is now derived from where the names are
lettered rather than from anyone having typed it.

**Loose end.** An unqualified change that lands nowhere pushes a note into
`report.notes`, which `generated/report.md` does not currently render. The
`check-model` warning above covers the same ground and is the better home, but
the note is dead code until the report prints it.
