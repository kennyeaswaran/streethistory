module.exports = {
  id: "tr0012-186",
  title: "Tract No. 35",
  shortTitle: "Tract No. 35",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/tract/MB0012/TR0012-186.pdf",
  scan: "documents/tr0012-186/tr0012-186.pdf",
  transcription: null,

  date: { on: "1907-07-17" },   
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
    [117, 1407], [1107, 1484], [541, 593], [172, 837]
  ],
  alignment: {
    image: "documents/tr0012-186/tr0012-186-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.043562, -118.234398], note: "map-tool corner (0,0)" },
      { px: [1185, 0], ll: [34.044106, -118.230952], note: "map-tool corner (1185,0)" },
      { px: [0, 1842], ll: [34.039093, -118.233386], note: "map-tool corner (0,1842)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["4th Place","4th Street","Mateo Street","Palmetto Street","Santa Fe Avenue"],

  rows: [
    {
      "kind": "absent",
      "street": "4th Place",
      "from": {
        "px": [
          245,
          789
        ]
      },
      "to": {
        "px": [
          270,
          928
        ]
      },
      "note": "This modern short north-south run crosses the older diagonal Mateo road rather than following a separate two-edged corridor."
    },
    {
      "kind": "absent",
      "street": "4th Place",
      "from": {
        "px": [
          256,
          1029
        ]
      },
      "to": {
        "px": [
          809,
          1015
        ]
      },
      "note": "The later east-west Fourth Place cuts across the interior of Lot A; the road name is mentioned in a later annotation but no corridor is drawn here."
    },
    {
      "kind": "state",
      "asWritten": "4TH STREET",
      "street": "4th Street",
      "from": {
        "px": [
          441,
          659
        ]
      },
      "to": "Santa Fe Avenue",
      "basis": "alignment",
      "name": "fourth-street",
      "note": "The modern line follows the diagonal corridor lettered 4TH STREET to the Santa Fe crossing."
    },
    {
      "kind": "absent",
      "street": "4th Street",
      "from": "Santa Fe Avenue",
      "to": {
        "px": [
          775,
          961
        ]
      },
      "note": "East of the crossing the modern line leaves the old Fourth Street corridor."
    },
    {
      "kind": "state",
      "asWritten": "MATEO STREET",
      "street": "Mateo Street",
      "from": {
        "px": [
          470,
          711
        ]
      },
      "to": {
        "px": [
          234,
          1416
        ]
      },
      "basis": "alignment",
      "note": "'STREET' is printed along the upper diagonal and 'MATEO' on its lower vertical continuation, forming one label for one corridor.",
      "name": "mateo"
    },
    {
      "kind": "state",
      "asWritten": "PALMETTO ST.",
      "street": "Palmetto Street",
      "from": {
        "px": [
          124,
          1334
        ]
      },
      "to": {
        "px": [
          239,
          1342
        ]
      },
      "basis": "alignment",
      "note": "This short modern western run lies near the upper edge of the broad Palmetto corridor; paper or alignment offset is possible.",
      "name": "palmetto"
    },
    {
      "kind": "absent",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          505,
          617
        ]
      },
      "to": {
        "px": [
          590,
          935
        ]
      },
      "note": "The curved northern modern approach crosses other roadways and then cuts through Lot A, rather than tracking the diagonal Santa Fe corridor."
    },
    {
      "kind": "state",
      "asWritten": "SANTA FE AVE.",
      "street": "Santa Fe Avenue",
      "from": {
        "px": [
          590,
          935
        ]
      },
      "to": {
        "px": [
          960,
          1473
        ]
      },
      "basis": "alignment",
      "name": "santa-fe-ave",
      "note": "The long southeast modern run enters and follows the plat's two-edged Santa Fe Avenue."
    }
  ]
};
