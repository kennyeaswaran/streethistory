
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

### Open

- Whether `says` should be required on every row of a `form: "textual"`
  document. It probably should — it is the textual analogue of `asWritten`, and
  a row with no sentence behind it is a claim with no source — but `ord-4093`'s
  rows come from a committee report whose lines are still being interpreted
  (§10, form 5), and requiring it today would block them.
- Whether an excerpt wants its own citation when a document quotes another
  (the committee report is quoted inside the council minutes).
