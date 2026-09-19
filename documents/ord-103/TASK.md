# TASK — documents/ord-103

**No rows, and one thing only is missing: a name entity.**

## What is missing

**A `mott-alley` entity in names.js.** Entity work is Kenny's — see
`documents/robinson-1884/FINDINGS.md`, which collects every entity this volume
asks for.

Unlike the other rowless ordinances in this batch, the GROUND here is not in
doubt: "between Main street and Spring street, and extending from First street
to Second street" is four streets that are all in the modern OSM extract.

## The row to write when the entity exists

```js
{ kind: "state", name: "mott-alley", asWritten: "Mott Alley",
  street: "<the modern mid-block lane, or a vanished trace>",
  from: "1st Street", to: "2nd Street",
  says: ["sec-1", "title"], confirmed: false }
```

⚠ Check first whether the lane survives. If the block between Main, Spring,
First and Second no longer carries a named way in `streets-geometry.js`, this is
a **`vanished`** row instead — and a `vanished` row needs an alignment, which a
textual document may not have (MODEL-SPEC §4.1a). In that case the honest
outcome is to leave this document rowless and record the alley on whichever
drawn sheet covers that block.

## Worth pursuing alongside

- **Who was Mott?** `documents/mr003-060` is the "Map of the Thomas Tract, being
  a portion of the Johnson and Mott Tract". Same surname, different ground —
  do not merge them without evidence.
- **Res. 183 (p. 309)** and **Res. 195 (p. 323)** of the same volume both work on
  the alley and may add a width or a grade.
