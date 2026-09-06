module.exports = {
  id: "mr001-489",
  title: "Map of a part of Building Lots of the Mott Tract in the City & County of Los Angeles, California",
  shortTitle: "Mott Tract building lots",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR001/MR001-489.pdf",
  scan: "documents/mr001-489/mr001-489.pdf",
  transcription: null,

  date: { on: "1869-03-02" },   
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
    [1724, 378], [1652, 1102], [290, 1087], [284, 710],
    [434, 705], [371, 410]
  ],
  alignment: {
    image: "documents/mr001-489/mr001-489-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.051139, -118.259929], note: "map-tool corner (0,0)" },
      { px: [1727, 0], ll: [34.061299, -118.250138], note: "map-tool corner (1727,0)" },
      { px: [0, 1123], ll: [34.045826, -118.25201], note: "map-tool corner (0,1123)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  rows: [
    {
      "kind": "state",
      "asWritten": "First Street",
      "street": "1st Street",
      "from": {
        "px": [
          1239,
          389
        ]
      },
      "to": {
        "px": [
          1255,
          1098
        ]
      },
      "basis": "alignment",
      "note": "The modern 1st Street trace follows the full roadway lettered First Street.",
      "name": "first-street"
    },
    {
      "kind": "absent",
      "street": "2nd Place",
      "from": {
        "px": [
          946,
          396
        ]
      },
      "to": "Hope Street",
      "note": "This short modern approach cuts across the corner north of Hope; the map draws no separate roadway there."
    },
    {
      "kind": "state",
      "asWritten": "Second Street",
      "street": "2nd Street",
      "from": "Hope Street",
      "to": {
        "px": [
          1047,
          1095
        ]
      },
      "basis": "alignment",
      "note": "The surface street follows the historical roadway lettered Second Street from Hope across the mapped grid.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "Second Street",
      "street": "2nd Street Tunnel",
      "from": {
        "px": [
          1033,
          394
        ]
      },
      "to": {
        "px": [
          1042,
          815
        ]
      },
      "basis": "alignment",
      "note": "The modern tunnel occupies the same Second Street corridor; the sheet predates and does not distinguish the later tunnel structure.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "Third Street",
      "street": "3rd Street",
      "from": {
        "px": [
          796,
          400
        ]
      },
      "to": {
        "px": [
          807,
          1093
        ]
      },
      "basis": "alignment",
      "note": "The modern 3rd Street traces remain within the roadway lettered Third Street.",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "Fourth Street",
      "street": "4th Street",
      "from": {
        "px": [
          571,
          405
        ]
      },
      "to": {
        "px": [
          566,
          1090
        ]
      },
      "basis": "alignment",
      "note": "The modern 4th Street traces remain within the roadway lettered Fourth Street.",
      "name": "fourth-street"
    },
    {
      "kind": "unnamed",
      "street": "5th Street",
      "from": {
        "px": [
          319,
          709
        ]
      },
      "to": {
        "px": [
          325,
          1087
        ]
      },
      "basis": "alignment",
      "note": "The sheet draws the western boundary roadway followed by modern 5th Street, but no name is lettered on the covered portion."
    },
    {
      "kind": "state",
      "asWritten": "Fort Street",
      "street": "Broadway",
      "from": {
        "px": [
          1660,
          1025
        ]
      },
      "to": {
        "px": [
          289,
          1048
        ]
      },
      "basis": "alignment",
      "note": "Modern Broadway follows the complete north-south roadway lettered Fort Street.",
      "name": "fort-street"
    },
    {
      "kind": "state",
      "asWritten": "Court House Street",
      "street": "Community Terrace",
      "from": "Hill Street",
      "to": "Broadway",
      "basis": "alignment",
      "note": "This modern mid-block segment occupies the historical Court House Street corridor between Hill and Fort/Broadway.",
      "name": "court-house-street"
    },
    {
      "kind": "absent",
      "street": "Flower Street",
      "from": "Hope Street",
      "to": {
        "px": [
          999,
          395
        ]
      },
      "note": "The short modern Flower approach curves away from Hope across ground where the sheet draws no corresponding roadway."
    },
    {
      "kind": "absent",
      "street": "General Thaddeus Kosciuszko Way",
      "from": "Hope Street",
      "to": "Olive Street",
      "note": "The modern way crosses historical blocks and merely intersects Charity Street; no roadway follows its north-south scan trace."
    },
    {
      "kind": "state",
      "asWritten": "Charity Street",
      "street": "Grand Avenue",
      "from": {
        "px": [
          1704,
          579
        ]
      },
      "to": {
        "px": [
          410,
          595
        ]
      },
      "basis": "alignment",
      "note": "Modern Grand Avenue follows the complete roadway lettered Charity Street.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "Charity Street",
      "street": "Grand Avenue Lower Level",
      "from": "2nd Street",
      "to": "4th Street",
      "basis": "alignment",
      "note": "The lower-level modern trace occupies the same historical Charity Street corridor between 2nd and 4th.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "Hill Street",
      "street": "Hill Street",
      "from": {
        "px": [
          1673,
          895
        ]
      },
      "to": {
        "px": [
          287,
          897
        ]
      },
      "basis": "alignment",
      "note": "The modern line follows the complete roadway lettered Hill Street.",
      "name": "hill-street-downtown"
    },
    {
      "kind": "absent",
      "street": "Hope Place",
      "from": "Hope Street",
      "to": "Grand Avenue",
      "note": "The modern short street runs along the edge and interior of Block M, where no separate roadway is drawn between Hope and Charity."
    },
    {
      "kind": "state",
      "asWritten": "Hope Street",
      "street": "Hope Street",
      "from": {
        "px": [
          1671,
          425
        ]
      },
      "to": {
        "px": [
          435,
          444
        ]
      },
      "basis": "alignment",
      "note": "The principal modern Hope Street trace follows the full roadway lettered Hope Street.",
      "name": "hope"
    },
    {
      "kind": "state",
      "street": "Hope Street",
      "from": "1st Street",
      "to": {
        "px": [
          1021,
          395
        ]
      },
      "note": "This modern diagonal branch departs north of the historical Hope Street corridor and crosses undivided ground.",
      "basis": "alignment",
      "asWritten": "Hope St",
      "name": "hope"
    },
    {
      "kind": "absent",
      "street": "Jerry Moss Plaza",
      "from": "Hope Street",
      "to": "Grand Avenue",
      "basis": "alignment",
      "note": "The modern plaza segment occupies the historical Court House Street corridor between Hope and Charity/Grand."
    },
    {
      "kind": "absent",
      "street": "Marketplace",
      "from": "Broadway",
      "to": {
        "px": [
          1373,
          1099
        ]
      },
      "note": "The modern marketplace spur extends south from Broadway into the interior of historical Block A, where no street is drawn."
    },
    {
      "kind": "absent",
      "street": "Metro Red/Purple Lines Entrance",
      "from": {
        "px": [
          1233,
          845
        ]
      },
      "to": {
        "px": [
          1196,
          866
        ]
      },
      "note": "This modern entrance loop lies inside the historical block beside First and Hill rather than on a drawn roadway."
    },
    {
      "kind": "state",
      "asWritten": "Olive Street",
      "street": "Olive Court",
      "from": {
        "px": [
          1404,
          721
        ]
      },
      "to": {
        "px": [
          1461,
          721
        ]
      },
      "basis": "alignment",
      "note": "The small modern court lies within the broad east-west scan corridor lettered Olive Street.",
      "name": "olive"
    },
    {
      "kind": "state",
      "asWritten": "Olive Street",
      "street": "Olive Street",
      "from": "1st Street",
      "to": {
        "px": [
          285,
          746
        ]
      },
      "basis": "alignment",
      "note": "The supplied modern Olive Street segment follows the historical Olive Street roadway southward from First.",
      "name": "olive"
    },
    {
      "kind": "state",
      "asWritten": "Temple Street",
      "street": "Temple Street",
      "from": {
        "px": [
          1677,
          379
        ]
      },
      "to": {
        "px": [
          1593,
          1101
        ]
      },
      "basis": "alignment",
      "note": "The modern Temple Street trace follows the roadway lettered Temple Street along the eastern edge of the mapped lots.",
      "name": "temple"
    },
    {
      "kind": "absent",
      "street": "West Bank Plaza at The Broad",
      "from": "Hope Street",
      "to": "Grand Avenue",
      "note": "The modern plaza loop lies within a historical lot block between Hope and Charity; no roadway is drawn along it."
    },
    {
      "kind": "absent",
      "street": "Flower Street",
      "from": {
        "px": [
          1000,
          395
        ]
      },
      "to": null,
      "note": "Added in review: the sheet covers this 100 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "West Bank Plaza at The Broad",
      "from": "Hope Street",
      "to": null,
      "note": "Added in review: the sheet covers this 118 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Marketplace",
      "from": "Broadway",
      "to": null,
      "note": "Added in review: the sheet covers this 48 m and draws no street along it."
    },
    {
      "kind": "absent",
      "street": "Marketplace",
      "from": "Broadway",
      "to": null,
      "note": "Added in review: the sheet covers this 48 m and draws no street along it."
    },
    {
      "kind": "state",
      "asWritten": "Second Street",
      "street": "2nd Street",
      "from": null,
      "to": "Hill Street",
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "asWritten": "Second Street",
      "street": "2nd Street",
      "from": null,
      "to": "Hill Street",
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "second-street"
    },
    {
      "kind": "state",
      "street": "Community Terrace",
      "from": null,
      "to": "Broadway",
      "note": "Added in review: the sheet covers this 50 m and draws no street along it.",
      "basis": "alignment",
      "asWritten": "Court House Street",
      "name": "court-house-street"
    },
    {
      "kind": "state",
      "asWritten": "Court House Street",
      "street": "Community Terrace",
      "from": null,
      "to": "Broadway",
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "court-house-street"
    },
    {
      "kind": "state",
      "asWritten": "Charity Street",
      "street": "Grand Avenue",
      "from": "West Bank Plaza at The Broad",
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "charity"
    },
    {
      "kind": "state",
      "asWritten": "Hill Street",
      "street": "Hill Street",
      "from": {
        "px": [
          735,
          888
        ]
      },
      "to": null,
      "basis": "alignment",
      "note": "Added in review: the sheet draws and letters this stretch and the AI pass had no row for it.",
      "name": "hill-street-downtown"
    }
  ]
};
