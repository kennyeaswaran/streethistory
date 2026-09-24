module.exports = {
  id: "tr0005-049b",
  title: "Map of Lot A of the Perry-Hellman Property in the City of Los Angeles, County of Los Angeles, California",
  shortTitle: "Perry-Hellman Property, Lot A",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0005/TR0005-049B.pdf",
  scan: "documents/tr0005-049b/tr0005-049b.pdf",
  transcription: null,

  date: { on: "1903-07" },   
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
    [874, 596], [280, 571], [330, 1315], [800, 1534]
  ],
  alignment: {
    image: "documents/tr0005-049b/tr0005-049b-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.049937, -118.245095], note: "map-tool corner (0,0)" },
      { px: [1164, 0], ll: [34.051316, -118.24401], note: "map-tool corner (1164,0)" },
      { px: [0, 1820], ll: [34.048521, -118.242511], note: "map-tool corner (0,1820)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["2nd Street","Los Angeles Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "SECOND ST.",
      "name": "second-street",
      "street": "2nd Street",
      "from": {
        "px": [
          768,
          592
        ]
      },
      "to": {
        "px": [
          720,
          1497
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "LOS ANGELES ST.",
      "name": "los-angeles-street",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          863,
          734
        ]
      },
      "to": {
        "px": [
          291,
          732
        ]
      },
      "basis": "alignment"
    }
  ]
};
