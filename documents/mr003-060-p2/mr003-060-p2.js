// Map of the Thomas Tract, M.R. 3-60/61 — SHEET 2 (p. 61).
//
// The county file is two sheets and was one document until 2026-08-31; it is
// now one document per sheet (MODEL-SPEC §4.4a). Sheet 1 (p. 60, Hewitt /
// Garey) is documents/mr003-060-p1/. The two share a title and a url.
//
// This is the sheet that carries the recording block ("Recorded May 19 1875
// … at the request of Milton Thomas") and the GEORGIA ST label read directly
// off the scan in the 2026-07 retro-transcription.
//
// Part A prose for both sheets lives beside this file (mr003-060-p2-partA.md).
// Extents are stated in MODERN cross-street names (MODEL-SPEC §5).

module.exports = {
  id: "mr003-060-p2",
  title: "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract",
  shortTitle: "Thomas Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf",
  scan: "documents/mr003-060-p2/mr003-060-p2.pdf",
  transcription: "documents/mr003-060-p2/mr003-060-p2-partA.md",

  date: { on: "1875-05-19" },   
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [128, 1501], [1084, 1511], [837, 58], [117, 79]
  ],
  alignment: {
    image: "documents/mr003-060-p2/mr003-060-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.047622, -118.234284], note: "document-tool corner (0,0)" },
      { px: [1119, 0], ll: [34.045155, -118.234253], note: "document-tool corner (1119,0)" },
      { px: [0, 1750], ll: [34.047582, -118.238908], note: "document-tool corner (0,1750)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","4th Place","Alameda Street","Garey Street","Hewitt Street","Rose Street","Traction Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "GUADALUPE ST",
      "street": "2nd Street",
      "from": {
        "px": [
          196,
          1502
        ]
      },
      "to": {
        "px": [
          205,
          76
        ]
      },
      "basis": "alignment",
      "note": "The modern 2nd Street centerline follows the full western roadway lettered GUADALUPE ST.",
      "name": "guadalupe"
    },
    {
      "kind": "state",
      "asWritten": "GEORGIA ST",
      "street": "3rd Street",
      "from": {
        "px": [
          898,
          1509
        ]
      },
      "to": {
        "px": [
          737,
          61
        ]
      },
      "basis": "alignment",
      "note": "The modern 3rd Street trace stays within the long eastern corridor lettered GEORGIA ST.",
      "name": "georgia-east"
    },
    {
      "kind": "absent",
      "street": "4th Place",
      "from": "3rd Street",
      "to": {
        "px": [
          1042,
          1262
        ]
      },
      "note": "This short modern diagonal crosses the numbered lots east of GEORGIA ST; the plat draws no roadway along it."
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA STREET",
      "street": "Alameda Street",
      "from": {
        "px": [
          128,
          1448
        ]
      },
      "to": {
        "px": [
          1072,
          1443
        ]
      },
      "basis": "alignment",
      "note": "STREET is lettered here and ALAMEDA on page 1; the modern line follows the complete cross-page corridor.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "GAREY STREET",
      "street": "Garey Street",
      "from": "2nd Street",
      "to": "3rd Street",
      "basis": "alignment",
      "note": "The roadway carries STREET on this page and GAREY on page 1; its geometry joins modern 2nd and 3rd Streets.",
      "name": "garey"
    },
    {
      "kind": "state",
      "asWritten": "HEWITT STREET",
      "street": "Hewitt Street",
      "from": {
        "px": [
          122,
          701
        ]
      },
      "to": "3rd Street",
      "basis": "alignment",
      "note": "STREET here completes HEWITT on page 1, and the modern centerline remains in the corridor across the coverage.",
      "name": "hewitt"
    },
    {
      "kind": "unnamed",
      "street": "Rose Street",
      "from": {
        "px": [
          125,
          1061
        ]
      },
      "to": "3rd Street",
      "basis": "alignment",
      "note": "A full roadway corridor separates Blocks D and B on this alignment, but no name is lettered along it."
    },
    {
      "kind": "absent",
      "street": "Traction Avenue",
      "from": "Alameda Street",
      "to": {
        "px": [
          954,
          745
        ]
      },
      "note": "The diagonal modern trace cuts through the interiors of Blocks B and D rather than following a drawn street."
    }
  ]
};
