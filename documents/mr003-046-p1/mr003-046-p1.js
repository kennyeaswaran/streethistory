module.exports = {
  id: "mr003-046-p1",
  title: "Plan of Subdivision B of Lot 8, Block 38, Hancock's Survey, the Property of P. Beaudry",
  shortTitle: "P. Beaudry Subdivision B",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-046.pdf",
  scan: "documents/mr003-046-p1/mr003-046-p1.pdf",
  transcription: null,

  date: { on: "1875-05-06" },   
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
    [1123, 1686], [1099, 793], [18, 678], [125, 1705]
  ],
  alignment: {
    image: "documents/mr003-046-p1/mr003-046-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.0564, -118.254772], note: "map-tool corner (0,0)" },
      { px: [1130, 0], ll: [34.053622, -118.256513], note: "map-tool corner (1130,0)" },
      { px: [0, 1746], ll: [34.058645, -118.259918], note: "map-tool corner (0,1746)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","Bixel Street","Boylston Street","Huntley Drive","Maryland Street","Miramar Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ARNOLD ST.",
      "street": "3rd Street",
      "from": {
        "px": [
          337,
          1701
        ]
      },
      "to": "Boylston Street",
      "basis": "alignment",
      "name": "arnold"
    },
    {
      "kind": "absent",
      "street": "3rd Street",
      "from": "Boylston Street",
      "to": {
        "px": [
          266,
          704
        ]
      },
      "note": "The modern bend leaves Arnold Street and crosses undivided ground east of the old Third Street corridor."
    },
    {
      "kind": "state",
      "asWritten": "FOURTH ST.",
      "street": "4th Street",
      "from": {
        "px": [
          697,
          1694
        ]
      },
      "to": "Boylston Street",
      "basis": "alignment",
      "name": "fourth-street"
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": "3rd Street",
      "to": {
        "px": [
          538,
          733
        ]
      },
      "note": "This modern diagonal crosses the interiors of the old numbered blocks rather than following a drawn corridor."
    },
    {
      "kind": "state",
      "asWritten": "LAFAYETTE ST.",
      "street": "Bixel Street",
      "from": {
        "px": [
          107,
          1531
        ]
      },
      "to": {
        "px": [
          1119,
          1531
        ]
      },
      "basis": "alignment",
      "note": "The label is split across the two pages: LAFAYETTE is on page 2 and ST. continues onto this page.",
      "name": "lafayette-bixel"
    },
    {
      "kind": "state",
      "asWritten": "FIGUEROA ST.",
      "street": "Boylston Street",
      "from": "Huntley Drive",
      "to": {
        "px": [
          1101,
          872
        ]
      },
      "basis": "alignment",
      "name": "figueroa-gov",
      "note": "The label is split across the two pages: FIGUEROA is on page 2 and ST. continues onto this page."
    },
    {
      "kind": "state",
      "asWritten": "FIGUEROA ST.",
      "street": "Huntley Drive",
      "from": {
        "px": [
          38,
          869
        ]
      },
      "to": "Boylston Street",
      "basis": "alignment",
      "name": "figueroa-gov",
      "note": "This short continuation follows the same Figueroa Street corridor whose label spans the page boundary."
    },
    {
      "kind": "state",
      "asWritten": "POTTS ST.",
      "street": "Maryland Street",
      "from": {
        "px": [
          1053,
          1687
        ]
      },
      "to": "Bixel Street",
      "basis": "alignment",
      "note": "The Potts Street label is on page 2, on the continuation of this corridor.",
      "name": "potts-st"
    },
    {
      "kind": "absent",
      "street": "Miramar Street",
      "from": {
        "px": [
          63,
          1113
        ]
      },
      "to": "Boylston Street",
      "note": "The western part of the modern diagonal crosses undivided ground beside the old blocks."
    },
    {
      "kind": "state",
      "asWritten": "THIRD ST.",
      "street": "Miramar Street",
      "from": "Boylston Street",
      "to": {
        "px": [
          180,
          695
        ]
      },
      "basis": "alignment",
      "name": "third-street"
    }
  ]
};
