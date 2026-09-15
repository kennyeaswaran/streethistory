module.exports = {
  id: "tr0034-004",
  title: "Tract No. 2713",
  shortTitle: "Tract No. 2713",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0034/TR0034-004.pdf",
  scan: "documents/tr0034-004/tr0034-004.pdf",
  transcription: null,

  date: { on: "1917-08-14" },   
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
    [540, 168], [512, 584], [1218, 568], [1179, 64]
  ],
  alignment: {
    image: "documents/tr0034-004/tr0034-004-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.038734, -118.271651], note: "map-tool corner (0,0)" },
      { px: [1184, 0], ll: [34.037813, -118.26955], note: "map-tool corner (1184,0)" },
      { px: [0, 1691], ll: [34.036229, -118.273227], note: "map-tool corner (0,1691)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Figueroa Street","from":null,"to":"Venice Boulevard"}],

  sweptFully: true,
  sweptFor: ["Figueroa Street","Venice Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "FIGUEROA ST.",
      "street": "Figueroa Street",
      "from": {
        "px": [
          1040,
          166
        ]
      },
      "to": {
        "px": [
          1037,
          572
        ]
      },
      "basis": "alignment",
      "name": "figueroa-gov",
      "note": "'ST.' is lettered at the north end and 'FIGUEROA' farther south within the same roadway."
    },
    {
      "kind": "state",
      "asWritten": "16th STREET",
      "street": "Venice Boulevard",
      "from": {
        "px": [
          530,
          319
        ]
      },
      "to": {
        "px": [
          1175,
          272
        ]
      },
      "basis": "alignment",
      "name": "sixteenth-street",
      "note": "The modern Venice line runs through the middle of the plat's broad 16th Street corridor."
    }
  ]
};
