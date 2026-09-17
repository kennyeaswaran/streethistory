module.exports = {
  id: "tr0063-098-p1",
  title: "Tract No. 3791",
  shortTitle: "Tract No. 3791",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0063/TR0063-098-p1.pdf",
  scan: "documents/tr0063-098-p1/tr0063-098-p1.pdf",
  transcription: null,

  date: { on: "1922-05" },   
  // §4.1a. Whatever this tool saves has a sheet under it — that is what the
  // tool is for — but a loaded document's own declaration wins, so re-saving
  // one this tool should not have opened cannot quietly reclassify it.
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [-86, 407], [-143, 1723], [1085, 2502], [1489, 2380],
    [1486, 220]
  ],
  alignment: {
    image: "documents/tr0063-098-p1/tr0063-098-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.067668, -118.252041], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.06826, -118.249293], note: "map-tool corner (1746,0)" },
      { px: [0, 2419], ll: [34.064492, -118.251056], note: "map-tool corner (0,2419)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  // Everett Street was here four times over — three identical stretches plus a
  // bare whole-street drop — while two rows below also spoke for it, which is
  // what check-model.js was erroring on. Removed 2026-09-17: the sheet DOES
  // cover this ground, and what it shows there is said by the two rows instead.
  coverageExcept: [{"street":"Bellevue Avenue","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["Beaudry Avenue","Bellevue Avenue","Boylston Street","Everett Street","Sunset Boulevard","Sunvue Place","Victor Street","White Knoll Drive"],

  rows: [
    {
      "kind": "unnamed",
      "street": "Beaudry Avenue",
      "from": {
        "px": [
          916,
          2395
        ]
      },
      "to": {
        "px": [
          1489,
          2070
        ]
      },
      "note": "The modern roadway is not shown in the covered southeastern area."
    },
    {
      "kind": "state",
      "asWritten": "BELLEVUE AVENUE",
      "street": "Bellevue Avenue",
      "from": {
        "px": [
          184,
          375
        ]
      },
      "to": {
        "px": [
          1004,
          2082
        ]
      },
      "basis": "alignment",
      "name": "bellevue-ave"
    },
    {
      "kind": "state",
      "asWritten": "BOYLSTON STREET",
      "name": "boylston",
      "street": "Boylston Street",
      "from": {
        "px": [
          -113,
          1038
        ]
      },
      "to": {
        "px": [
          1201,
          672
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Everett Street",
      "from": {
        "px": [
          1486,
          296
        ]
      },
      "to": {
        "px": [
          1201,
          672
        ]
      },
      "note": "No roadway is drawn here, east of Sunset Boulevard."
    },
    {
      "kind": "state",
      "asWritten": "SUNSET BOULEVARD",
      "street": "Sunset Boulevard",
      "from": {
        "px": [
          1200,
          254
        ]
      },
      "to": {
        "px": [
          1310,
          2434
        ]
      },
      "basis": "alignment",
      "name": "sunset-boulevard"
    },
    {
      "kind": "state",
      "asWritten": "SUNVUE PLACE",
      "street": "Sunvue Place",
      "from": {
        "px": [
          650,
          621
        ]
      },
      "to": {
        "px": [
          674,
          1567
        ]
      },
      "basis": "alignment",
      "name": "sunvue-place"
    },
    {
      "kind": "unnamed",
      "street": "Victor Street",
      "from": {
        "px": [
          240,
          1966
        ]
      },
      "to": {
        "px": [
          417,
          1842
        ]
      },
      "note": "No street corridor is drawn on this short segment."
    },
    {
      "kind": "unnamed",
      "street": "White Knoll Drive",
      "from": {
        "px": [
          1200,
          915
        ]
      },
      "to": {
        "px": [
          1487,
          742
        ]
      },
      "note": "The modern curve lies in blank ground east of Sunset Boulevard."
    },
    {
      "kind": "unnamed",
      "street": "Everett Street",
      "from": {
        "px": [
          1364,
          457
        ]
      },
      "to": "Boylston Street",
      "basis": "alignment",
      "note": "Added in review: the sheet draws this corridor with no name lettered on it."
    }
  ]
};
