module.exports = {
  id: "tr0159-032-p2",
  title: "Tract No. 10542",
  shortTitle: "Tract No. 10542",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0159/TR0159-032.pdf",
  scan: "documents/tr0159-032-p2/tr0159-032-p2.pdf",
  transcription: null,

  date: { on: "1928-12" },   
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
    [-10, 380], [-4, 2389], [1777, 2440], [1714, 218]
  ],
  alignment: {
    image: "documents/tr0159-032-p2/tr0159-032-p2-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038864, -118.234946], note: "map-tool corner (0,0)" },
      { px: [1707, 0], ll: [34.03891, -118.23209], note: "map-tool corner (1707,0)" },
      { px: [0, 2413], ll: [34.035496, -118.234869], note: "map-tool corner (0,2413)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Conway Place","Industrial Street","Jesse Street","Mateo Street","Mill Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH STREET",
      "street": "6th Street",
      "from": {
        "px": [
          89,
          467
        ]
      },
      "to": {
        "px": [
          1700,
          428
        ]
      },
      "basis": "alignment",
      "name": "sixth-street"
    },
    {
      "kind": "absent",
      "street": "Conway Place",
      "from": {
        "px": [
          302,
          1544
        ]
      },
      "to": {
        "px": [
          1415,
          1660
        ]
      },
      "note": "The diagonal modern route passes through numbered lot interiors; no two-edged Conway road is drawn."
    },
    {
      "kind": "state",
      "asWritten": "INDUSTRIAL STREET",
      "street": "Industrial Street",
      "from": {
        "px": [
          100,
          2153
        ]
      },
      "to": {
        "px": [
          1466,
          2286
        ]
      },
      "basis": "alignment",
      "name": "industrial-st"
    },
    {
      "kind": "state",
      "asWritten": "JESSE STREET",
      "street": "Jesse Street",
      "from": {
        "px": [
          1438,
          1946
        ]
      },
      "to": {
        "px": [
          1700,
          1927
        ]
      },
      "basis": "alignment",
      "name": "jesse",
      "note": "The labelled stub east of Mateo continues past the scan's eastern edge in the modern run."
    },
    {
      "kind": "state",
      "asWritten": "MILL STREET",
      "street": "Mill Street",
      "from": {
        "px": [
          243,
          469
        ]
      },
      "to": {
        "px": [
          247,
          2396
        ]
      },
      "basis": "alignment",
      "name": "mill-st-arts-district"
    },
    {
      "kind": "state",
      "asWritten": "MATEO STREET",
      "street": "Mateo Street",
      "from": {
        "px": [
          1324,
          320
        ]
      },
      "to": {
        "px": [
          1476,
          2410
        ]
      },
      "basis": "alignment",
      "name": "mateo"
    }
  ]
};
