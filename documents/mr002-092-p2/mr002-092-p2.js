module.exports = {
  id: "mr002-092-p2",
  title: "Plan of the Johnston Tract at the corner of First and Alameda Sts., Los Angeles City",
  shortTitle: "Johnston Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-092.pdf",
  scan: "documents/mr002-092-p2/mr002-092-p2.pdf",
  transcription: null,

  date: { on: "1871-03" },   
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
    [55, 1536], [899, 1453], [660, 338], [37, 396]
  ],
  alignment: {
    image: "documents/mr002-092-p2/mr002-092-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.047392, -118.233169], note: "map-tool corner (0,0)" },
      { px: [1096, 0], ll: [34.044237, -118.233348], note: "map-tool corner (1096,0)" },
      { px: [0, 1662], ll: [34.047617, -118.238903], note: "map-tool corner (0,1662)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","4th Place","Alameda Street","Garey Street","Hewitt Street","Rose Street","Traction Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Guadalupe Street",
      "street": "2nd Street",
      "from": {
        "px": [
          147,
          1527
        ]
      },
      "to": {
        "px": [
          96,
          390
        ]
      },
      "basis": "alignment",
      "note": "This is the continuation of the roadway whose complete Guadalupe Street label appears on page 1.",
      "name": "guadalupe"
    },
    {
      "kind": "state",
      "asWritten": "Georgie Street.",
      "street": "3rd Street",
      "from": {
        "px": [
          673,
          1475
        ]
      },
      "to": {
        "px": [
          502,
          353
        ]
      },
      "basis": "alignment",
      "note": "The modern 3rd Street centerline follows the roadway whose label is divided into Georgie and Street. on this sheet.",
      "name": "georgia-east"
    },
    {
      "kind": "absent",
      "street": "4th Place",
      "from": {
        "px": [
          732,
          1322
        ]
      },
      "to": {
        "px": [
          841,
          1185
        ]
      },
      "note": "The modern 4th Place trace crosses the Lugo Vineyard lots and their boundaries; no two-edge roadway follows it."
    },
    {
      "kind": "state",
      "asWritten": "Alameda STREET.",
      "street": "Alameda Street",
      "from": {
        "px": [
          53,
          1429
        ]
      },
      "to": {
        "px": [
          883,
          1376
        ]
      },
      "basis": "alignment",
      "note": "The complete label is split between the filing sheets: Alameda appears on page 1 and STREET. here; Railroad above it completes the separate Los Angeles and San Pedro Railroad annotation.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "Messer STREET.",
      "street": "Garey Street",
      "from": {
        "px": [
          105,
          571
        ]
      },
      "to": {
        "px": [
          535,
          547
        ]
      },
      "basis": "alignment",
      "note": "The modern Garey Street centerline follows the roadway whose label is split across the sheets: Messer on page 1 and STREET. here.",
      "name": "messer-street"
    },
    {
      "kind": "state",
      "asWritten": "Hewitt STREET.",
      "street": "Hewitt Street",
      "from": {
        "px": [
          44,
          857
        ]
      },
      "to": {
        "px": [
          597,
          828
        ]
      },
      "basis": "alignment",
      "note": "The complete label is split across the sheets: Hewitt on page 1 and STREET. here.",
      "name": "hewitt"
    },
    {
      "kind": "state",
      "asWritten": "Rose STREET.",
      "street": "Rose Street",
      "from": {
        "px": [
          49,
          1132
        ]
      },
      "to": {
        "px": [
          655,
          1101
        ]
      },
      "basis": "alignment",
      "note": "The complete label is split across the sheets: Rose on page 1 and STREET. here.",
      "name": "rose-street"
    },
    {
      "kind": "absent",
      "street": "Traction Avenue",
      "from": {
        "px": [
          260,
          1418
        ]
      },
      "to": {
        "px": [
          757,
          791
        ]
      },
      "note": "The modern diagonal cuts across several Johnston Tract blocks and named street corridors; the sheet draws no road on its alignment."
    }
  ]
};
