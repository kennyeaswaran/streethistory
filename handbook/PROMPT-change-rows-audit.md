# Prompt — audit the corpus for renamings we can already draw (2026-09-18)

*Written for a fresh thread. Paste from the line below. Another session is
working the switchover in parallel and owns `tools/generate.js`, `tools/check-data.js`,
`tools/check-legacy.js`, `tools/check-model.js`, `data/site-config.js`, `handbook/SWITCHOVER.md`
and `handbook/MODEL-IMPLEMENTATION.md` — do not edit those; everything else
in `documents/` and `data/names.js` is fair game under the rules in CLAUDE.md.*

---

Read CLAUDE.md, then handbook/change-rows-amendment.md (§§2–5 and §10 in
full — the three scopes, "record the words, author the ground", and the six
specimen forms), then handbook/RENAMING-SOURCES.md. Then do this:

**1. Audit every textual document for renaming statements.** That is every
folder in `documents/` whose file has `form: "textual"` — ordinances,
news-reports, minutes, histories — including the parked `_` folders (read,
don't unpark). Most of them carry `excerpts` and no rows; 179 of 186 did on
2026-09-10. For each statement that a name became another name, record:

- the document id and the excerpt id(s) that say it (`says`);
- the verbatim wording;
- which of the amendment's §10 forms it is — Form 1 bare pair (unqualified),
  Form 2 two anchors or Form 3 anchor-plus-direction (qualified), Form 4
  restoration, Form 5 amendment to a draft, Form 6 duplicate assignment —
  and, for 4 and 5, why it is NOT a change row;
- the stage: adopted / approved / published / vetoed / referred / proposed /
  reported-after-the-fact. A petition received, a committee report, or a
  mayor's veto is a proceeding, not a change (ROADMAP §2). A `history`-type
  document (Guinn) may not carry a change row at all (check-model
  TRANSITION_TYPES) — note what it says and move on;
- the `from` and `to` entities: resolve each name against `data/names.js` and
  `data/names-new.js` (forms, aliases, disambiguation — beware the two Georgias,
  the two Belmonts, the two Willows, Beaudry Street vs Beaudry Avenue) and
  say whether the entity exists, and if not what you would mint;
- whether the `from` entity is **attested on the map**: it has a `state` row
  somewhere in `documents/`, or it is the `to` of an earlier change that
  chains from one (High → Walters → Ord is the specimen: nothing letters
  Walters, and it still holds ground). `node tools/generate.js` then
  `generated/report.md` and `node tools/diff-street.js "<street>"` will show you
  where a name currently lands.

**2. Sort the statements into four bins and count them:**

- **A. Ready — unqualified, both entities exist, `from` attested.** The row is
  `scope: "whole-name"`, `says`, `mechanism`, a `note` with the date/stage,
  `confirmed: false`.
- **B. Ready but qualified — `from` attested, extent to be resolved.** Write
  the row with `scope: "extent"`, the modern `street` and `fromCross` /
  `toCross` (rule 6: names from that street's crossings, never a coordinate),
  the `wording` verbatim, `confirmed: false`, and a note saying what you read
  the extent as and why. Kenny verifies every one of these against a map.
  Where you cannot resolve the extent, `scope: "extent-unresolved"` — that is
  a real state, not a failure.
- **C. Needs an entity first.** Say which, with the forms and the one
  sentence of `note` the document supports. Do not research namesakes here.
- **D. Not drawable yet / not a change.** Vetoed with no override found,
  draft-only (Form 5), restorations (Form 4), duplicate assignments (Form 6),
  proceedings without an adoption, and `from` entities nothing attests.

**3. Write the report** to `handbook/change-rows-audit-2026-09-18.md`: the
four counts up front, then one table per bin (document, wording, from → to,
form, stage, what's missing), then a short section on patterns worth knowing
(which omnibus ordinances carry the most, which are vetoed, which names recur).

**4. Then write the rows for bins A and B**, document by document, every one
`confirmed: false`, and mint the bin-C entities in `data/names.js` only where the
document itself gives the name and the ground (no namesake research; `basis:
"none"`, `searched: "none"`, an `internalNote` saying which document minted
it and why). After each document: `node tools/check-model.js` must pass; at the
end `node tools/generate.js`, and read `generated/report.md`'s "Revived names" and
"Row problems" sections — a change row that produces a revival on ground
where no revival happened is a wrong-street row, and belongs in the report,
not the corpus.

Rules that bite here: never write the `*Approved` fields in `data/names.js`; never
hand-write a coordinate; never confirm a row — Kenny does that; `git
--no-optional-locks` for every read-only git call and no `git add`/`commit`;
end by listing every file you changed and the boldest claim you made, so
Kenny can spot-check it against its source.
