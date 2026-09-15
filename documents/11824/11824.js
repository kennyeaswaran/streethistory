module.exports = {
  id: "11824",
  title: "Los Angeles : Botiller and Reyes lots east side of Main Street",
  shortTitle: "Botiller and Reyes lots",
  url: "https://hdl.huntington.org/digital/collection/p15150coll4/id/11824",
  scan: "documents/11824/11824.jpg",
  transcription: null,

  date: { on: "1873" },   
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
    [285, 5744], [7103, 6548], [7860, 376], [207, 310]
  ],
  alignment: {
    image: "documents/11824/11824.jpg",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.045547, -118.253188], note: "map-tool corner (0,0)" },
      { px: [8999, 0], ll: [34.041308, -118.246664], note: "map-tool corner (8999,0)" },
      { px: [0, 7958], ll: [34.040732, -118.257679], note: "map-tool corner (0,7958)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["7th Street","8th Street","9th Street","Cecelia Street","Los Angeles Street","Main Street","Maple Avenue","Santee Court","Santee Street","Spring Street","Wall Street"],

  rows: [
    {
      "kind": "state",
      "asWritten": "7th Street",
      "street": "7th Street",
      "from": {
        "px": [
          209,
          479
        ]
      },
      "to": {
        "px": [
          7826,
          653
        ]
      },
      "basis": "alignment",
      "note": "The trace stays between the two edges of the top roadway across the mapped ground; the lettering is upside down in the scan.",
      "name": "seventh-street"
    },
    {
      "kind": "state",
      "asWritten": "8th Street",
      "street": "8th Street",
      "from": {
        "px": [
          244,
          2857
        ]
      },
      "to": "Main Street",
      "basis": "alignment",
      "note": "West of Main, the trace follows the corridor lettered 8th Street; its text is upside down in the scan.",
      "name": "eighth-street"
    },
    {
      "kind": "absent",
      "street": "8th Street",
      "from": "Main Street",
      "to": {
        "px": [
          7433,
          3857
        ]
      },
      "basis": "alignment",
      "note": "East of Main, the modern 8th Street line crosses the Reyes and Botiller parcels. A diagonal parcel boundary is drawn nearby, but no paired street edges continue the 8th Street corridor."
    },
    {
      "kind": "state",
      "asWritten": "9th Street",
      "street": "9th Street",
      "from": {
        "px": [
          278,
          5242
        ]
      },
      "to": "Main Street",
      "basis": "alignment",
      "note": "West of Main, the trace follows the 9th Street corridor; its lettering is upside down in the scan.",
      "name": "ninth-street"
    },
    {
      "kind": "state",
      "asWritten": "Moran's Lane",
      "street": "9th Street",
      "from": "Main Street",
      "to": {
        "px": [
          7139,
          6251
        ]
      },
      "basis": "alignment",
      "note": "East of Main, the roadway is lettered Moran's Lane; the label is upside down in the scan.",
      "name": "moran-s-lane"
    },
    {
      "kind": "state",
      "asWritten": "Main Street",
      "street": "Main Street",
      "from": {
        "px": [
          2860,
          333
        ]
      },
      "to": {
        "px": [
          1455,
          5882
        ]
      },
      "basis": "alignment",
      "note": "The corrected centerline stays within the drawn Main Street corridor; the label is upside down in the scan.",
      "name": "main-street-dtla"
    },
    {
      "kind": "state",
      "asWritten": "Spring Street",
      "street": "Spring Street",
      "from": {
        "px": [
          1551,
          322
        ]
      },
      "to": {
        "px": [
          1602,
          5267
        ]
      },
      "basis": "alignment",
      "note": "The corrected centerline follows the drawn Spring Street corridor to its junction with Main and 9th; the label is upside down in the scan.",
      "name": "spring"
    },
    {
      "kind": "absent",
      "street": "Cecelia Street",
      "from": "8th Street",
      "to": "9th Street",
      "note": "The modern centerline crosses the open Reyes/Botiller parcel ground; no two-edged street corridor is drawn along it."
    },
    {
      "kind": "absent",
      "street": "Los Angeles Street",
      "from": {
        "px": [
          4207,
          344
        ]
      },
      "to": {
        "px": [
          2945,
          6058
        ]
      },
      "note": "The corrected modern line runs across large parcel interiors. It crosses the sheet's diagonal parcel division, but no Los Angeles Street roadway is drawn."
    },
    {
      "kind": "absent",
      "street": "Maple Avenue",
      "from": {
        "px": [
          5869,
          359
        ]
      },
      "to": {
        "px": [
          5223,
          6326
        ]
      },
      "note": "The aligned line passes through undivided parcel interiors rather than a paired roadway."
    },
    {
      "kind": "absent",
      "street": "Santee Court",
      "from": {
        "px": [
          4194,
          1207
        ]
      },
      "to": {
        "px": [
          4605,
          2559
        ]
      },
      "note": "This modern court lies within the open Reyes parcel; the sheet shows no corresponding road edges."
    },
    {
      "kind": "absent",
      "street": "Santee Street",
      "from": {
        "px": [
          4781,
          2707
        ]
      },
      "to": {
        "px": [
          4167,
          6202
        ]
      },
      "note": "The line crosses the mapped parcels and the single division between them, without a drawn street corridor."
    },
    {
      "kind": "absent",
      "street": "Wall Street",
      "from": {
        "px": [
          6864,
          367
        ]
      },
      "to": {
        "px": [
          6521,
          6479
        ]
      },
      "note": "The modern line runs near one parcel boundary on the east, but the sheet does not draw a two-edged roadway there."
    }
  ]
};
