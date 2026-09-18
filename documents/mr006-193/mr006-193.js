// SEED DOCUMENT, written 2026-09-17 so the sheet opens in the map tool at
// roughly the right place. The alignment here is scale + rotation derived from
// the sheet's own printed scale and courses, with the page centre dropped on
// the tract's recorded footprint centre — the POSITION has not been checked
// against the scan. See PLACEMENT.md in this folder.
//
// The coverage ring is PROVISIONAL: it is the tract's recorded footprint
// (County land-records layer / assessor parcel hull) projected into scan pixels
// through this same seed alignment, written so the model has a polygon to check.
// It is NOT a human trace. Re-trace it in the map tool once the placement is
// confirmed — the ring is stored in scan pixels, so dragging the sheet carries
// it along and it will not correct itself.
module.exports = {
  id: "mr006-193",
  title: "Map of the Kennedy Tract, Los Angeles, Cal. (surveyed May 1884 by E. T. Wright)",
  shortTitle: "Kennedy Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR006/MR006-193.pdf",
  scan: "documents/mr006-193/mr006-193.pdf",
  transcription: null,

  date: { on: "1885-01-14" },   
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
    [185, 382], [196, 915], [949, 912], [966, 401]
  ],
  alignment: {
    image: "documents/mr006-193/mr006-193-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051776, -118.269152], note: "map-tool corner (0,0)" },
      { px: [1069, 0], ll: [34.050328, -118.265954], note: "map-tool corner (1069,0)" },
      { px: [0, 1711], ll: [34.047505, -118.271931], note: "map-tool corner (0,1711)" }
    ]
  },

  // The polygon strays onto these; the document does not inform about them.
  // NOT the same as a absent row, which says the sheet covers the ground and
  // draws nothing there (MODEL-SPEC §4.4, §5.2).
  coverageExcept: [{"street":"Hartford Avenue","from":null,"to":null}],

  sweptFully: true,
  sweptFor: ["8th Place","8th Street","Garland Avenue","Hartford Avenue","James M Wood Boulevard","Witmer Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Lincoln Place",
      "street": "8th Place",
      "from": {
        "px": [
          745,
          462
        ]
      },
      "to": {
        "px": [
          964,
          468
        ]
      },
      "basis": "alignment",
      "note": "East of Holmes St., the modern 8th Place trace follows the eastern end of the roadway lettered Lincoln Place.",
      "name": "lincoln-place"
    },
    {
      "kind": "state",
      "asWritten": "Lincoln Place",
      "street": "8th Street",
      "from": {
        "px": [
          187,
          473
        ]
      },
      "to": {
        "px": [
          863,
          398
        ]
      },
      "basis": "alignment",
      "note": "The modern 8th Street trace follows Lincoln Place, bending northward only after it leaves the historical corridor near the northeast edge.",
      "name": "lincoln-place"
    },
    {
      "kind": "state",
      "asWritten": "Holmes St.",
      "street": "Garland Avenue",
      "from": {
        "px": [
          745,
          396
        ]
      },
      "to": {
        "px": [
          744,
          848
        ]
      },
      "basis": "alignment",
      "name": "holmes-st"
    },
    {
      "kind": "state",
      "asWritten": "Ninth Street",
      "street": "James M Wood Boulevard",
      "from": {
        "px": [
          195,
          850
        ]
      },
      "to": {
        "px": [
          951,
          846
        ]
      },
      "basis": "alignment",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "Bryan St.",
      "street": "Witmer Street",
      "from": {
        "px": [
          282,
          471
        ]
      },
      "to": {
        "px": [
          279,
          849
        ]
      },
      "basis": "alignment",
      "name": "bryan-st"
    }
  ]
};
