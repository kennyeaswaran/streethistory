// OSM is a document (MODEL-SPEC.md §4.1): the current extract is the newest
// sighting of every living name. Its rows are DERIVED from
// streets-geometry.js at load time — code, not data — so they can never go
// stale against the extract. Tertiary: excluded from the primary-anchor
// metric, and (generator policy) from planned/built derivation.
//
// Rows carry a geometric extent (the way's own bounds) instead of the usual
// modern-cross-street extent — for OSM the geometry IS the identification.

const fs = require("fs");
const path = require("path");

function load() {
  const src = fs.readFileSync(path.join(__dirname, "..", "streets-geometry.js"), "utf8");
  const g = new Function(src + "; return STREET_GEOMETRY;")();
  const geom = g.data || g;
  const timestamp = (geom.osm3s && geom.osm3s.timestamp_osm_base) || null;
  const date = timestamp ? timestamp.slice(0, 10) : "unknown";

  const rows = [];
  for (const w of geom.elements) {
    if (!w.geometry || !w.tags || !w.tags.name) continue;
    rows.push({
      kind: "state",
      name: null,                  // bound by the generator (§4.1) — never by hand
      asWritten: w.tags.name,
      street: w.tags.name.replace(/^(North|South|East|West|N\.?|S\.?|E\.?|W\.?)\s+/i, ""),
      wayId: w.id,
      geometry: w.geometry,        // extent = the way itself
      basis: "label"
    });
  }

  return {
    id: "osm",
    title: `OpenStreetMap extract (Overpass, ${date})`,
    shortTitle: "the current OpenStreetMap extract",
    url: "https://www.openstreetmap.org/",
    transcription: null,
    date: { on: date },
    type: "osm",
    attests: "built-by",
    completeness: "exhaustive-in-scope",  // within the coverage bboxes, OSM
                                          // maps every public street
    coverage: null,                       // generator supplies the union of
                                          // NEIGHBORHOODS bboxes
    sweptFully: true,
    sweptFor: null,
    readBy: "instance",
    rows
  };
}

module.exports = { load };
