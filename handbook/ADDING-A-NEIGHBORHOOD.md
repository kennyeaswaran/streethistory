# Adding a neighbourhood

Coverage grows one neighbourhood at a time. A neighbourhood is a rough bounding
box in the `NEIGHBORHOODS` array, and it decides two things: which streets the
OSM extract carries, and therefore which streets the map can draw at all.

Use the L.A. Times *Mapping L.A.* boundaries as the reference for what counts
as the neighbourhood.

> **Where `NEIGHBORHOODS` lives is a leftover.** It is still declared at the top
> of `streets-data.js` — the hand-authored file the document model replaces —
> and `generate.js` reads it from there along with `CATEGORIES` and
> `SIMILAR_PROJECTS`, purely as configuration. Moving those three to a file of
> their own is on the switchover list (MODEL-IMPLEMENTATION.md §10); until then,
> that is where to edit them.

## The steps

1. **Add `{ id, name, bbox }`** to `NEIGHBORHOODS`.

2. **Refresh the street geometry.** The saved extract no longer matches the new
   coverage, so open the live map and let it refetch from Overpass, then click
   "Save geometry file" and replace `streets-geometry.js` with the download.
   Everything downstream reads that file: the map tool's sense of where streets
   are, `documents/osm.js` (which derives its rows from it at load time), and
   the generator.

3. **Sweep the documents you already have.** Before any fresh research: a plat
   whose coverage polygon reaches into the new area may already speak about its
   streets, and the omnibus files may already hold citations for them. Rows
   land wherever the document covers, so this costs nothing but attention.

4. **Find what the new area needs.** `node generate.js` writes
   `generated/report.md`, which lists every street with no documentary sighting
   beyond the OSM extract — the stubs. Those are the research queue.

5. **Watch for names that now span two neighbourhoods.** A street entering the
   new area may or may not carry the same naming lineage along its new stretch.
   Decide explicitly, per street: same lineage → nothing to do; different or
   unknown → the new stretch needs its own evidence, and until a document
   speaks about it the generator will correctly leave it grey. Never let an
   existing entity silently claim ground no document has put it on.

6. **Check and rebuild.** `node check-model.js && node generate.js`, then
   reload the map.
