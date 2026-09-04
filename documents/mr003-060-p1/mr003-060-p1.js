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
  title: "Map of the Thomas Tract, being a portion of the Johnson and Mott Tract",
  shortTitle: "Thomas Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-060.pdf",
  scan: "documents/mr003-060-p1/mr003-060-p1.pdf",
  transcription: "documents/mr003-060-p1/mr003-060-p1-partA.md",

  date: { on: "1875-05-19" },   
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [88, 1533], [1039, 1520], [1062, 64], [297, 103]
  ],
  alignment: {
    image: "documents/mr003-060-p1/mr003-060-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049368, -118.234246], note: "document-tool corner (0,0)" },
      { px: [1115, 0], ll: [34.04691, -118.234215], note: "document-tool corner (1115,0)" },
      { px: [0, 1757], ll: [34.049328, -118.238889], note: "document-tool corner (0,1757)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Alameda Street","Hewitt Street","Rose Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIRST ST",
      "street": "1st Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          349,
          100
        ]
      },
      "basis": "alignment",
      "note": "One modern branch runs from Alameda to the page edge inside the broad corridor lettered FIRST ST.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "FIRST ST",
      "street": "1st Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          410,
          97
        ]
      },
      "basis": "alignment",
      "note": "The second modern branch also remains within the same wide FIRST ST corridor.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "GUADALUPE ST",
      "street": "2nd Street",
      "from": {
        "px": [
          987,
          1521
        ]
      },
      "to": {
        "px": [
          997,
          67
        ]
      },
      "basis": "alignment",
      "note": "The trace runs in the roadway along the sheet's east edge; its GUADALUPE ST label is lettered on page 2.",
      "name": "guadalupe"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA STREET",
      "street": "Alameda Street",
      "from": {
        "px": [
          97,
          1472
        ]
      },
      "to": {
        "px": [
          1040,
          1472
        ]
      },
      "basis": "alignment",
      "note": "ALAMEDA is lettered on this page and STREET on page 2; the modern centerline follows the shared corridor.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "HEWITT STREET",
      "street": "Hewitt Street",
      "from": {
        "px": [
          307,
          714
        ]
      },
      "to": {
        "px": [
          1052,
          727
        ]
      },
      "basis": "alignment",
      "note": "HEWITT is lettered here and STREET on page 2; the aligned trace stays inside that roadway to the coverage edge.",
      "name": "hewitt"
    },
    {
      "kind": "unnamed",
      "street": "Rose Street",
      "from": {
        "px": [
          242,
          1081
        ]
      },
      "to": {
        "px": [
          1046,
          1090
        ]
      },
      "note": "The modern Rose Street line crosses the interior of Block C just north of its boundary with Block A; no roadway is drawn."
    },
    {
      "kind": "vanished",
      "asWritten": "GAREY STREET",
      "trace": [
        [
          350,
          339
        ],
        [
          995,
          355
        ]
      ],
      "basis": "alignment",
      "note": "The plat draws and labels this segment west of Guadalupe, but none of the supplied modern street traces follows it on page 1.",
      "name": "garey"
    }
  ]
};
