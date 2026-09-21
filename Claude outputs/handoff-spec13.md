Replacement text for MODEL-SPEC.md §13 (the whole section, heading included),
to match handbook/ROADMAP.md as trimmed 2026-09-21. Numbers follow ROADMAP's
section numbers, which are kept stable.

---

## 13. Roadmap — wanted, not yet specified (2026-09-10; trimmed 2026-09-21)

§12 is what the spec describes and the code does not yet do. This section is
the other list: changes we want that the spec does not yet *describe*. Each is
sized and argued in **handbook/ROADMAP.md**, under the same number; an item
moves from there into the body of this spec when its design is settled, and out
of both when it ships.

1. **Fewer segments on the map, nothing lost.** Measured 2026-09-07: of 371
   segment boundaries, 23 marked a change of name; the rest marked where a
   document's coverage ends. Three steps — split the display unit from the
   evidence unit (a segment carries *stretches*), then §6.2a and its existence
   hull, then a `continues` mark for streets drawn off the sheet's edge.
2. **Proceedings.** A renaming is a sequence of petition, referral, adoption,
   veto, approval, repeal, reported by many documents proposing different
   things; most textual documents carry no rows because nothing in the model
   connects them. A first-class `proceedings/<id>.js` carrying the steps and
   the rows that took effect, hand-written first, tool (MAP-TOOL-SPEC §9)
   after. Also holds the change-row questions still open (`basis` for a
   resolved extent, `ord-4093`'s `built-by`, `exhaustive-in-scope` as negative
   evidence, `annotation` rows and `attested`, cross-document excerpts,
   clippings) and the generator's A → B → A → B limit that holds back the 1908
   Orange → Wilshire pair.
3. **Historic sheets on the public site**, drawn through their §4.6
   alignments and masked to their coverage; first step, a coverage-ring layer
   from a generated `documents.js`.
4. **The paper trail in the popup**, once 2 exists.
5. **Display modes:** the grid as of a year (three states — known present,
   known absent, unknown — plus vanished lines within their attested window);
   colour by earliest attestation (§8 schemes 3 and 4, specified, unbuilt).
6. **Search folds renderings** — "eleventh" finds "11th". A browser-side
   matcher on canonical tokens; the `<datalist>` cannot do it.
7. **Categories** — built 2026-09-15 (the vocabulary and tree live in
   `data/site-config.js`). Left: empty nodes, one judgment-call tag, and the
   rationale not recorded elsewhere (tree vs plant, `descriptive` as a
   residual).
8. **A second neighbourhood, and the large serial sheets** — ADDING-A-
   NEIGHBORHOOD.md and SERIAL-SOURCES.md, plus what a one-affine tool does
   with a sheet that needs several.
9. **Smaller items:** permalinks, a segmentation report, the §6.2a bridging
   report, and two map-tool gaps (export notes for the next AI pass; `basis`
   not editable in review).
10. *(ROADMAP's suggested order.)*
11. **Left over from the switchover:** legacy cleanup, what
    `tools/check-data.js` is for now, style-budget warnings, and
    `report.notes` never printed.
