module.exports = {
  id: "mr060-088",
  title: "Map of the Garland Tract, Being a Subdivision of a Portion of Lot 7, Block 37, Hancock's Survey, in the City of Los Angeles, California",
  shortTitle: "Garland Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR060/MR060-088.pdf",
  scan: "documents/mr060-088/mr060-088.pdf",
  transcription: null,

  date: { on: "1897-04" },   
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
    [434, 305], [-13, 1226], [304, 1391], [566, 1239],
    [861, 508]
  ],
  alignment: {
    image: "documents/mr060-088/mr060-088-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.053068, -118.268295], note: "map-tool corner (0,0)" },
      { px: [1042, 0], ll: [34.052961, -118.26478], note: "map-tool corner (1042,0)" },
      { px: [0, 1649], ll: [34.048427, -118.268499], note: "map-tool corner (0,1649)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","8th Place","8th Street","Garland Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "ORANGE STREET",
      "street": "7th Street",
      "from": {
        "px": [
          405,
          365
        ]
      },
      "to": {
        "px": [
          836,
          569
        ]
      },
      "basis": "alignment",
      "name": "orange-st-wilshire"
    },
    {
      "kind": "unnamed",
      "street": "8th Place",
      "from": {
        "px": [
          229,
          1219
        ]
      },
      "to": {
        "px": [
          423,
          1322
        ]
      },
      "note": "The modern place lies south of the roadway drawn at the tract's lower edge.",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "EIGHTH STREET",
      "name": "eighth-street",
      "street": "8th Street",
      "from": {
        "px": [
          33,
          1131
        ]
      },
      "to": {
        "px": [
          593,
          1172
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "GARLAND AVENUE",
      "street": "Garland Avenue",
      "from": {
        "px": [
          602,
          461
        ]
      },
      "to": {
        "px": [
          176,
          1324
        ]
      },
      "basis": "alignment",
      "name": "garland"
    }
  ]
};
