// Map of the Thomas Tract, M.R. 3-60/61 — SHEET 2 (p. 61).
//
// The county file is two sheets and was one document until 2026-08-31; it is
// now one document per sheet (MODEL-SPEC §4.4a). Sheet 1 (p. 60, Hewitt /
// Garey) is documents/mr003-060-p1/. The two share a title and a url.
//
// This is the sheet that carries the recording block ("Recorded May 18 1875
// … at the request of Milton Thomas") and the GEORGIA ST label read directly
// off the scan in the 2026-07 retro-transcription.
//
// Part A prose for both sheets lives beside this file (mr003-060-p2-partA.md).
// Extents are stated in MODERN cross-street names (MODEL-SPEC §5).

module.exports = {
  id: "mr003-060-p2",
  title: "Recorded map: Map of the Thomas Tract, being a portion of the Johnson and Mott Tract, M.R. 3-60/61 (recorded May 19, 1875, at the request of Milton Thomas; J.W. Gillette, County Recorder)",
  shortTitle: "Map of the Thomas Tract, sheet 2 (M.R. 3-61)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf",
  scan: "documents/mr003-060-p2/mr003-060-p2.pdf",
  transcription: "documents/mr003-060-p2/mr003-060-p2-partA.md",

  date: { on: "1875-05-19" },
  type: "tract-map",
  attests: "planned-on",
  completeness: "incidental",
  // PLACEHOLDER footprint: the Guadalupe/Georgia blocks east of Alameda toward
  // Santa Fe. Not measured — redraw it in the document tool once this sheet is
  // aligned, and it becomes scan pixels then (§4.6).
  coverage: [[34.0470, -118.2385], [34.0470, -118.2320],
             [34.0430, -118.2320], [34.0430, -118.2385]],
  sweptFully: false,                // one unnamed "STREET" on this sheet is
                                    // unresolved (research-leads.md)
  sweptFor: ["2nd Street", "3rd Street"],
  readBy: "instance",

  rows: [
    // Streets the tract itself plats: planned-on the recording date.
    { kind: "state", name: "guadalupe", asWritten: "Guadalupe",
      street: "2nd Street", from: "Alameda Street", to: "Santa Fe Avenue",
      basis: "position" },          // one block north of Georgia St; not lot-checked

    // Georgia St abuts and is drawn again on the 1888 Wolfskill map — treat
    // as existing rather than platted here.
    { kind: "state", name: "georgia-east", asWritten: "Georgia St",
      street: "3rd Street", from: "Alameda Street", to: "Santa Fe Avenue",
      attests: "built-by",
      basis: "alignment" }          // position/alignment with the numbered grid

    // This sheet's unlabeled platted street (≈ Rose Street's position) and the
    // second unnamed "STREET" carry no name testimony. Once the sheet is
    // aligned they are `unnamed` rows (§5.2a) rather than nothing; until then
    // see Part A and research-leads.md.
  ]
};
