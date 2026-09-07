module.exports = {
  id: "tr1339-069-p3",
  title: "Tract No. 62057 in the City of Los Angeles, State of California",
  shortTitle: "Tract No. 62057",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB1339/TR1339-069.pdf",
  scan: "documents/tr1339-069-p3/tr1339-069-p3.pdf",
  transcription: null,

  date: { on: "2007-10-09" },   
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
    [387, 354], [399, 2152], [1322, 2112], [1274, 504]
  ],
  alignment: {
    image: "documents/tr1339-069-p3/tr1339-069-p3-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049352, -118.237732], note: "map-tool corner (0,0)" },
      { px: [1759, 0], ll: [34.049339, -118.235414], note: "map-tool corner (1759,0)" },
      { px: [0, 2596], ll: [34.046499, -118.237755], note: "map-tool corner (0,2596)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["1st Street","2nd Street","Hewitt Street","Rose Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "1ST STREET",
      "street": "1st Street",
      "from": {
        "px": [
          388,
          475
        ]
      },
      "to": {
        "px": [
          1277,
          616
        ]
      },
      "basis": "alignment",
      "note": "The modern 1st Street centerline follows the roadway lettered 1ST STREET.",
      "name": "first-street"
    },
    {
      "kind": "state",
      "asWritten": "2ND STREET",
      "street": "2nd Street",
      "from": {
        "px": [
          398,
          1987
        ]
      },
      "to": {
        "px": [
          1318,
          1978
        ]
      },
      "basis": "alignment",
      "note": "The modern 2nd Street centerline follows the roadway lettered 2ND STREET.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "HEWITT STREET",
      "street": "Hewitt Street",
      "from": {
        "px": [
          1223,
          607
        ]
      },
      "to": {
        "px": [
          1223,
          2116
        ]
      },
      "basis": "alignment",
      "note": "The modern Hewitt Street centerline follows the roadway lettered HEWITT STREET.",
      "name": "hewitt"
    },
    {
      "kind": "state",
      "asWritten": "ROSE STREET",
      "street": "Rose Street",
      "from": {
        "px": [
          485,
          491
        ]
      },
      "to": {
        "px": [
          497,
          2148
        ]
      },
      "basis": "alignment",
      "note": "The modern Rose Street centerline follows the roadway lettered ROSE STREET.",
      "name": "rose-street"
    }
  ]
};
