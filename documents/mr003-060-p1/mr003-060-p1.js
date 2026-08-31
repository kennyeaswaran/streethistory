// Map of the Thomas Tract, M.R. 3-60/61 — SHEET 1 (p. 60).
//
// The county file is two sheets and was one document until 2026-08-31; it is
// now one document per sheet (MODEL-SPEC §4.4a — a sheet carries one alignment
// and one coverage polygon, and two sheets have two of each). Sheet 2 (p. 61,
// Guadalupe / Georgia, and the recording block) is documents/mr003-060-p2/.
// The two share a title and a url; that is what makes them one recorded map.
//
// Part A prose for both sheets lives beside this file (mr003-060-p1-partA.md).
// Extents are stated in MODERN cross-street names (MODEL-SPEC §5) —
// identification has already happened; the plat's own wording is in Part A.

module.exports = {
  id: "mr003-060-p1",
  title: "Recorded map: Map of the Thomas Tract, being a portion of the Johnson and Mott Tract, M.R. 3-60/61 (recorded May 19, 1875, at the request of Milton Thomas; J.W. Gillette, County Recorder)",
  shortTitle: "Map of the Thomas Tract, sheet 1 (M.R. 3-60)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf",
  scan: "documents/mr003-060-p1/mr003-060-p1.pdf",
  transcription: "documents/mr003-060-p1/mr003-060-p1-partA.md",

  date: { on: "1875-05-19" },
  type: "tract-map",
  attests: "planned-on",            // doc default; rows override where the
                                    // street predates / merely abuts the tract
  completeness: "incidental",
  // PLACEHOLDER footprint: the Garey/Hewitt blocks east of Alameda, 1st–3rd.
  // Not measured — redraw it in the document tool once this sheet is aligned,
  // and it becomes scan pixels then (§4.6). Negative inference is moot until
  // that happens (sweptFully: false).
  coverage: [[34.0490, -118.2385], [34.0490, -118.2350],
             [34.0450, -118.2350], [34.0450, -118.2385]],
  sweptFully: false,                // sheet 1's street list may be incomplete
                                    // (see Part A) — one full re-read pending
  sweptFor: ["Hewitt Street", "Garey Street"],
  readBy: "instance",

  rows: [
    // Streets the tract fronts that predate it (TRACT-RESEARCH.md: "a street
    // may predate the tract fronting it") — built-by, not planned-on.
    { kind: "state", name: "hewitt", asWritten: "Hewitt",
      street: "Hewitt Street", from: "1st Street", to: "3rd Street",
      attests: "built-by",
      basis: "lot-level" },         // Lot 1, Block E = 106 S Hewitt (NavigateLA)

    { kind: "state", name: "garey", asWritten: "Garey",
      street: "Garey Street", from: "2nd Street", to: "3rd Street",
      attests: "built-by",
      basis: "lot-level" }
  ]
};
