module.exports = {
  id: "mr010-062",
  title: "Map of J. W. Ellis' Subdivision of Part of Lot 3, Block 38, Hancock's Survey",
  shortTitle: "J. W. Ellis' Subdivision",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR010/MR010-062.pdf",
  scan: "documents/mr010-062/mr010-062.pdf",
  transcription: null,

  date: { on: "1886-08-16" },   
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
    [275, 574], [288, 1325], [583, 1347], [701, 1006],
    [759, 717], [986, 699], [969, 568]
  ],
  alignment: {
    image: "documents/mr010-062/mr010-062-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.068718, -118.266069], note: "map-tool corner (0,0)" },
      { px: [1109, 0], ll: [34.065822, -118.259458], note: "map-tool corner (1109,0)" },
      { px: [0, 1625], ll: [34.060637, -118.271154], note: "map-tool corner (0,1625)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Belmont Avenue","from":null,"to":null},{"street":"Loma Drive","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["2nd Street","Belmont Avenue","Beverly Boulevard","Crown Hill Avenue","Loma Drive","Miramar Street","Union Avenue","Union Place"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Northern Ave",
      "street": "2nd Street",
      "from": {
        "px": [
          405,
          800
        ]
      },
      "to": {
        "px": [
          621,
          887
        ]
      },
      "basis": "alignment",
      "name": "northern-ave"
    },
    {
      "kind": "state",
      "asWritten": "Diamond St",
      "name": "diamond-street",
      "street": "Beverly Boulevard",
      "from": {
        "px": [
          276,
          623
        ]
      },
      "to": {
        "px": [
          977,
          631
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Crown Hill Avenue",
      "from": {
        "px": [
          647,
          1031
        ]
      },
      "to": {
        "px": [
          677,
          1074
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "unnamed",
      "street": "Miramar Street",
      "from": {
        "px": [
          286,
          1214
        ]
      },
      "to": {
        "px": [
          404,
          1216
        ]
      },
      "note": "The modern street crosses the western lots and ends at Columbia Avenue; no corridor is drawn."
    },
    {
      "kind": "state",
      "asWritten": "Collado St",
      "street": "Union Avenue",
      "from": {
        "px": [
          371,
          573
        ]
      },
      "to": {
        "px": [
          404,
          1334
        ]
      },
      "basis": "alignment",
      "name": "collado-st"
    },
    {
      "kind": "state",
      "asWritten": "Western Ave",
      "street": "Union Place",
      "from": {
        "px": [
          711,
          629
        ]
      },
      "to": {
        "px": [
          524,
          1343
        ]
      },
      "basis": "alignment",
      "name": "western-ave-colina-park"
    }
  ]
};
