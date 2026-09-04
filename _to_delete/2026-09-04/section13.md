
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
