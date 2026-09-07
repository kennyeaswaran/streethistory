module.exports = {
  id: "tr0926-086-p2",
  title: "Tract No. 35332 in the City of Los Angeles, State of California, for Redevelopment Purposes",
  shortTitle: "Tract No. 35332",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0926/TR0926-086.pdf",
  scan: "documents/tr0926-086-p2/tr0926-086-p2.pdf",
  transcription: null,

  date: { on: "1979-09-18" },   
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
    [236, 192], [93, 1881], [1449, 2404], [1459, 759]
  ],
  alignment: {
    image: "documents/tr0926-086-p2/tr0926-086-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.04857, -118.24016], note: "map-tool corner (0,0)" },
      { px: [1746, 0], ll: [34.048536, -118.237254], note: "map-tool corner (1746,0)" },
      { px: [0, 2489], ll: [34.045112, -118.240218], note: "map-tool corner (0,2489)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","3rd Street","Alameda Street","Central Avenue","Traction Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "2ND STREET",
      "street": "2nd Street",
      "from": {
        "px": [
          220,
          385
        ]
      },
      "to": {
        "px": [
          1458,
          994
        ]
      },
      "basis": "alignment",
      "note": "The modern 2nd Street centerline follows the roadway lettered 2ND STREET.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "3RD STREET",
      "street": "3rd Street",
      "from": {
        "px": [
          112,
          1653
        ]
      },
      "to": {
        "px": [
          1450,
          2197
        ]
      },
      "basis": "alignment",
      "note": "The modern 3rd Street centerline follows the roadway lettered 3RD STREET.",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "ALAMEDA STREET",
      "street": "Alameda Street",
      "from": {
        "px": [
          1239,
          657
        ]
      },
      "to": {
        "px": [
          1289,
          2342
        ]
      },
      "basis": "alignment",
      "note": "The modern Alameda Street centerline follows the north-south roadway lettered ALAMEDA STREET.",
      "name": "alameda-st"
    },
    {
      "kind": "state",
      "asWritten": "CENTRAL AVENUE",
      "street": "Central Avenue",
      "from": {
        "px": [
          512,
          320
        ]
      },
      "to": {
        "px": [
          360,
          1984
        ]
      },
      "basis": "alignment",
      "note": "The modern Central Avenue centerline follows the roadway lettered CENTRAL AVENUE.",
      "name": "central-ave"
    },
    {
      "kind": "state",
      "asWritten": "TRACTION AVENUE",
      "street": "Traction Avenue",
      "from": "Alameda Street",
      "to": {
        "px": [
          1456,
          1332
        ]
      },
      "basis": "alignment",
      "note": "The modern curved segment east of Alameda Street follows the roadway lettered TRACTION AVENUE.",
      "name": "traction-avenue"
    }
  ]
};
