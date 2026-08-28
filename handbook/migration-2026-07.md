# Segment-model migration pass (2026-07) — agent instructions

> **Path note (2026-08-26):** written before the folder reorganisation;
> `tracts/transcriptions/` is now `documents/<id>/<id>-partA.md`.


Goal: bring existing `streets-data.js` entries up to the conventions
established by the 3rd Street pilot. Read ADDING-STREETS.md first (the
"Segments" and "Field conventions" sections), and study the **"3rd Street"
entry in streets-data.js — it is the exemplar**; your output should look
like it. This pass is restructuring and cleanup only.

## Hard rules

1. **No new research.** Work only from what's already in the repo: the entry
   itself, other entries, `omnibus-*.md`, `research-leads.md`,
   `tracts/transcriptions/`. Do not fetch web pages or read tract PDFs.
2. **No new segments in this pass.** Where the record clearly suggests a
   split (a stated extent, or evidence covering only part of a
   street/segment), FLAG it (rule 7) — don't restructure. Splits are the
   next pass.
3. **Never eyeball coordinates.** Any band boundary you state or verify comes
   from `node intersect.js "A Street" "B Street"`. Report every value you
   used.
4. **`how` only where the text already says so.** Tag a nameHistory item
   `how: "origin" | "extension" | "renaming" | "transfer"` only when the
   item's own origin sentence (or the entry's sources) states it — a
   renaming ordinance means "renaming"; "name transferred from …" means
   "transfer"; a first-documented-here platted name means "origin"
   (including presumed cases the text already flags, e.g. "presumably folded
   in during the Feb. 1897 renaming" → "renaming"). If the text doesn't say,
   leave `how` off. At most one segment per name carries "origin".
5. **Never write a fresh origin item that outruns its evidence** (lesson from
   the pilot batch). If you compose a new nameHistory item (or new origin
   prose) for an entry/segment whose extent goes beyond what the cited
   document covers — e.g. an Ord-survey claim on a street or band extending
   past the 1849 grid, or a tract map covering a few blocks of a long street
   — the text must state the document's actual extent ("…whose grid ran from
   Pearl to Main — when the rest joined is not yet researched"), AND the
   entry gets a segment-review flag (rule 7). When in doubt, don't write the
   item; flag instead.
6. **Preserve information.** Trimmed content (methodology narration,
   cross-segment context, lists of what else a document shows) must either
   already exist elsewhere in the repo or be MOVED — methodology/context to
   `research-leads.md` (dated bullet), document contents to the relevant
   omnibus/transcription file. Never silently delete. Pure duplication may
   be dropped.
7. **Flag over-claiming, don't fix it.** If an entry's or segment's claims
   plainly rest on evidence covering only part of its extent (one tract map
   cited for a long street; an Ord-survey citation on a segment extending
   past the Ord grid), append one bullet to a `## Segment-review flags
   (2026-07 migration)` section of research-leads.md: street/segment, which
   stretch the evidence actually covers, what's uncovered. This feeds the
   next pass.
8. **Touch only `streets-data.js` and `research-leads.md`.** Not the
   geometry, HTML, checker, or docs.
9. **`node check-data.js` must pass after every street** before you move to
   the next. If a change triggers a checker warning you can't resolve within
   these rules, revert that change and flag it instead.

## Per-street checklist

For each street in your batch, in order:

**Segmented streets**
- [ ] Add `from`/`to` cross-street names to every segment, derived from the
      existing labels/bands; verify each shared boundary with intersect.js
      and correct band values that are off (report old → new). Adjacent
      segments share the boundary name; physical discontinuities get
      `gapAfter: true` on the earlier segment.
- [ ] Labels follow the pilot style: "Alameda to Santa Fe (Georgia St)" —
      bounding streets, former name in parentheses if any.
- [ ] Add `how` per rule 4. Mark an origin segment (single-item nameHistory,
      `how: "origin"`) only when the entry already documents the origin
      claim for that stretch.
- [ ] Full cleanup, per segment: note only about THIS segment; no
      methodology narration (an alignment-based identification becomes
      "(identified by map alignment...)" in the source title, nothing more); no
      restating nameHistory; remove sources that don't document this segment
      (rule 6 for anything displaced).

**Single-entry streets**
- [ ] Do NOT segment (rule 2).
- [ ] If it has a nameHistory, add `how` per rule 4.
- [ ] Same cleanup pass on note and sources.

**Both**
- [ ] Over-claim check (rule 7).
- [ ] `node check-data.js`.

## Reporting

End with a report: streets touched; for each — every `how` added and the
sentence justifying it, every boundary computed (intersect.js values,
old → new band corrections), what was trimmed and where it moved; flags
appended to research-leads.md; the final check-data.js output line. List
the boldest judgment call you made so the reviewer can check it first.
