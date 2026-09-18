# Adding a neighbourhood

Coverage grows one neighbourhood at a time. A neighbourhood is a rough bounding
box in the `NEIGHBORHOODS` array, and it decides two things: which streets the
OSM extract carries, and therefore which streets the map can draw at all.

Use the L.A. Times *Mapping L.A.* boundaries as the reference for what counts
as the neighbourhood.

`NEIGHBORHOODS` lives in **`site-config.js`** (since 2026-09-15), beside the
category vocabulary, the name aliases and the way-keyed branches below.

## The steps

1. **Add `{ id, name, bbox }`** to `NEIGHBORHOODS`.

2. **Refresh the street geometry.** The saved extract no longer matches the new
   coverage, so open the live map and let it refetch from Overpass, then click
   "Save geometry file" and replace `streets-geometry.js` with the download.
   Everything downstream reads that file: the map tool's sense of where streets
   are, `documents/osm.js` (which derives its rows from it at load time), and
   the generator.

3. **Look for branches — two roadways under one name.** Run
   `node branch-check.js`. The model folds every way that shares a name onto
   one axis, so where OSM carries two parallel roadways as the same street
   they occupy the same stretch of it, and the first sheet that letters them
   differently puts two names on one interval (West 5th Street: the through
   street was FIFTH in 1875 and the one-way branch a block south was WARD).
   The script prints every same-name pair running side by side — more than
   40 m apart across the axis over more than 80 m along it — with each way's
   id, type, one-way/bridge tags, extent and the streets at its ends. Then
   decide, per hit, in the map or the map tool's street overlay:
   - **A real second roadway** — a one-way couplet, a frontage road beside a
     freeway, a surface street under a viaduct, an old alignment kept beside
     a realigned one: these are the ones by the freeways and the river.
     Key it apart in `WAY_STREET_KEYS` (site-config.js), one line per OSM
     way id, as `"<name> (<label>)"` — the label describes the roadway
     ("south branch", "viaduct", "frontage"); the name stays the street's,
     and the generator binds and displays the name, not the label. Then
     re-key any existing rows on that ground to the branch (`check-model.js`
     catches cross-street rows; pixel-extent rows you find by their
     latitude) and rebuild.
   - **Not a branch** — twin motorway carriageways, the two halves of a
     divided bridge, a short connector that only meets the street at one
     end, a hooked or looping street that folds back on its own axis. No
     document will ever letter these differently; leave them alone.
   The question to ask is *would a historic sheet have drawn and named these
   as two streets?* If yes, key them apart; if no, don't. Run the script
   again after every geometry refresh — a new extract can add a way.

4. **Sweep the documents you already have.** Before any fresh research: a plat
   whose coverage polygon reaches into the new area may already speak about its
   streets, and the omnibus files may already hold citations for them. Rows
   land wherever the document covers, so this costs nothing but attention.

5. **Find what the new area needs.** `node generate.js` writes
   `generated/report.md`, which lists every street with no documentary sighting
   beyond the OSM extract — the stubs. Those are the research queue.

6. **Watch for names that now span two neighbourhoods.** A street entering the
   new area may or may not carry the same naming lineage along its new stretch.
   Decide explicitly, per street: same lineage → nothing to do; different or
   unknown → the new stretch needs its own evidence, and until a document
   speaks about it the generator will correctly leave it grey. Never let an
   existing entity silently claim ground no document has put it on.

7. **Check and rebuild.** `node check-model.js && node generate.js`, then
   reload the map.
