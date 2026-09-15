module.exports = {
  id: "tr0023-066",
  title: "Tract No. 1879",
  shortTitle: "Tract No. 1879",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0023/TR0023-066.pdf",
  scan: "documents/tr0023-066/tr0023-066.pdf",
  transcription: null,

  date: { on: "1913-06-07" },   
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
    [195, 426], [213, 1680], [1216, 1731], [1113, 356]
  ],
  alignment: {
    image: "documents/tr0023-066/tr0023-066-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039361, -118.235378], note: "map-tool corner (0,0)" },
      { px: [1157, 0], ll: [34.039388, -118.23228], note: "map-tool corner (1157,0)" },
      { px: [0, 1842], ll: [34.035246, -118.235326], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["6th Street","Conway Place","Industrial Street","Jesse Street","Mateo Street","Mill Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SIXTH ST.",
      "street": "6th Street",
      "from": {
        "px": [
          196,
          517
        ]
      },
      "to": {
        "px": [
          1123,
          492
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
          356,
          1188
        ]
      },
      "to": {
        "px": [
          1052,
          1254
        ]
      },
      "note": "The modern line cuts across numbered lots and a curved railway spur, not a two-edged Conway roadway."
    },
    {
      "kind": "state",
      "asWritten": "INDUSTRIAL ST.",
      "street": "Industrial Street",
      "from": {
        "px": [
          211,
          1567
        ]
      },
      "to": {
        "px": [
          1087,
          1644
        ]
      },
      "basis": "alignment",
      "name": "industrial-st"
    },
    {
      "kind": "state",
      "asWritten": "JESSE ST.",
      "street": "Jesse Street",
      "from": {
        "px": [
          1068,
          1432
        ]
      },
      "to": {
        "px": [
          1155,
          1425
        ]
      },
      "basis": "alignment",
      "name": "jesse",
      "note": "The short eastern road is drawn and lettered; the modern run continues past the visible image edge."
    },
    {
      "kind": "state",
      "asWritten": "MATEO ST.",
      "street": "Mateo Street",
      "from": {
        "px": [
          988,
          395
        ]
      },
      "to": {
        "px": [
          1094,
          1725
        ]
      },
      "basis": "alignment",
      "name": "mateo"
    },
    {
      "kind": "state",
      "asWritten": "MILL ST.",
      "street": "Mill Street",
      "from": {
        "px": [
          313,
          516
        ]
      },
      "to": {
        "px": [
          327,
          1686
        ]
      },
      "basis": "alignment",
      "name": "mill-st-arts-district"
    }
  ]
};
