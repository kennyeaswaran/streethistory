// Part B (machine-readable) of the Thomas Tract map. Part A prose lives in
// tracts/transcriptions/MR003-060.md (cross-referenced by `transcription`).
// Extents are stated in MODERN cross-street names (MODEL-SPEC.md §5) —
// identification has already happened; the plat's own wording is in Part A.

module.exports = {
  id: "mr003-060",
  title: "Recorded map: Map of the Thomas Tract, being a portion of the Johnson and Mott Tract, M.R. 3-60/61 (recorded May 19, 1875, at the request of Milton Thomas; J.W. Gillette, County Recorder)",
  shortTitle: "Map of the Thomas Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf",
  transcription: "tracts/transcriptions/MR003-060.md",

  date: { on: "1875-05-19" },
  type: "tract-map",
  attests: "planned-on",            // doc default; rows override where the
                                    // street predates / merely abuts the tract
  completeness: "incidental",
  // Approximate footprint (east of Alameda, Garey/Hewitt/Traction blocks,
  // 1st–3rd Sts). Replace with the georef-derived polygon when the sheet is
  // aligned; until then negative inference is moot (sweptFully: false).
  coverage: [[34.0490, -118.2385], [34.0490, -118.2320],
             [34.0450, -118.2320], [34.0450, -118.2385]],
  sweptFully: false,                // sheet 1's street list may be incomplete
                                    // (see transcription note); one unnamed
                                    // "STREET" on sheet 2 is unresolved
  sweptFor: ["Hewitt Street", "Garey Street", "2nd Street", "3rd Street"],
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
      basis: "lot-level" },

    // Streets the tract itself plats (sheet 2): planned-on the recording date.
    { kind: "state", name: "guadalupe", asWritten: "Guadalupe",
      street: "2nd Street", from: "Alameda Street", to: "Santa Fe Avenue",
      basis: "position" },          // one block north of Georgia St; not lot-checked

    // Georgia St abuts and is drawn again on the 1888 Wolfskill map — treat
    // as existing rather than platted here.
    { kind: "state", name: "georgia-east", asWritten: "Georgia St",
      street: "3rd Street", from: "Alameda Street", to: "Santa Fe Avenue",
      attests: "built-by",
      basis: "alignment" }          // position/alignment with the numbered grid

    // Sheet 2's unlabeled platted street (≈ Rose Street's position) and the
    // second unnamed "STREET" carry no name testimony — no rows; see the
    // transcription and research-leads.md.
  ]
};
