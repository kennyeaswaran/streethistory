module.exports = {
  id: "mr003-038-p1",
  title: "Plan of the Morris, Main & Pico Streets",
  shortTitle: "Morris Plan",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR003/MR003-038.pdf",
  scan: "documents/mr003-038-p1/mr003-038-p1.pdf",
  transcription: null,

  // DATE CORRECTED 2026-09-18 (was `before: 1915-05-04`, and the title read
  // "Norris"). The sheet itself carries no date; the facing page, M.R. 3-39
  // (mr003-038-p2, the same county PDF), is "Recorded May 4th A.D. 1875" by J. W.
  // Gillette — the "1875" was misread as 1915. This plan is M.R. 3-38, and Book 3
  // is recorded in page order: p. 33 is Apr. 29, 1875 (mr003-033) and p. 46 is
  // May 6, 1875 (mr003-046-p1). So it was recorded between those two dates. The
  // title is "Plan of the MORRIS … Main & Pico Streets", not Norris.
  date: { after: "1875-04-29", before: "1875-05-06" },
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
    [113, 167], [1004, 124], [1020, 1496], [246, 1510]
  ],
  alignment: {
    image: "documents/mr003-038-p1/mr003-038-p1-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.039601, -118.264398], note: "map-tool corner (0,0)" },
      { px: [1117, 0], ll: [34.037812, -118.261302], note: "map-tool corner (1117,0)" },
      { px: [0, 1725], ll: [34.035611, -118.267708], note: "map-tool corner (0,1725)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["14th Street","15th Street","Grand Avenue","Hill Street","Margo Street","Olive Street","Pico Boulevard","Venice Boulevard"],

  rows: [
    {
      "kind": "state",
      "asWritten": "CALIFORNIA STREET",
      "street": "14th Street",
      "from": {
        "px": [
          245,
          866
        ]
      },
      "to": {
        "px": [
          1013,
          866
        ]
      },
      "basis": "alignment",
      "note": "CALIFORNIA is lettered on this half and STREET on the adjoining half of the same sheet.",
      "name": "california-street-14th"
    },
    {
      "kind": "state",
      "asWritten": "LAUREL STREET",
      "street": "15th Street",
      "from": {
        "px": [
          213,
          1173
        ]
      },
      "to": {
        "px": [
          1016,
          1160
        ]
      },
      "basis": "alignment",
      "note": "LAUREL is lettered here and STREET on the adjoining half of the same sheet.",
      "name": "laurel-dtla"
    },
    {
      "kind": "state",
      "asWritten": "CHARITY",
      "name": "charity",
      "street": "Grand Avenue",
      "from": {
        "px": [
          156,
          165
        ]
      },
      "to": {
        "px": [
          309,
          1509
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "HILL STREET",
      "name": "hill-street-downtown",
      "street": "Hill Street",
      "from": {
        "px": [
          946,
          127
        ]
      },
      "to": {
        "px": [
          954,
          1497
        ]
      },
      "basis": "alignment",
      "note": "This eastern corridor joins the one lettered HILL STREET on the adjoining half; Break Line marks the survey edge, not a road name."
    },
    {
      "kind": "state",
      "asWritten": "PALM STREET",
      "street": "Margo Street",
      "from": {
        "px": [
          342,
          193
        ]
      },
      "to": {
        "px": [
          357,
          863
        ]
      },
      "basis": "alignment",
      "name": "palm-street-margo"
    },
    {
      "kind": "state",
      "asWritten": "ELM STREET",
      "street": "Olive Street",
      "from": {
        "px": [
          648,
          192
        ]
      },
      "to": "14th Street",
      "basis": "alignment",
      "name": "elm-street"
    },
    {
      "kind": "absent",
      "street": "Olive Street",
      "from": "14th Street",
      "to": {
        "px": [
          643,
          1503
        ]
      },
      "basis": "alignment"
    },
    {
      "kind": "absent",
      "street": "Olive Street",
      "from": {
        "px": [
          539,
          146
        ]
      },
      "to": {
        "px": [
          607,
          407
        ]
      },
      "note": "The separate diagonal modern run north of the ELM STREET junction crosses numbered lot interiors rather than a corridor."
    },
    {
      "kind": "absent",
      "street": "Olive Street",
      "from": {
        "px": [
          607,
          407
        ]
      },
      "to": {
        "px": [
          641,
          537
        ]
      },
      "note": "The separate diagonal modern run north of the ELM STREET junction crosses numbered lot interiors rather than a corridor."
    },
    {
      "kind": "state",
      "asWritten": "PICO STREET",
      "name": "pico",
      "street": "Pico Boulevard",
      "from": {
        "px": [
          116,
          200
        ]
      },
      "to": {
        "px": [
          1005,
          187
        ]
      },
      "basis": "alignment",
      "note": "The small PICO lettering here and STREET on the adjoining half form the full roadway label; the large title words are not used."
    },
    {
      "kind": "state",
      "asWritten": "PINE STREET",
      "street": "Venice Boulevard",
      "from": {
        "px": [
          241,
          1461
        ]
      },
      "to": {
        "px": [
          1019,
          1450
        ]
      },
      "basis": "alignment",
      "note": "PINE is lettered here and STREET on the adjoining half of the same sheet.",
      "name": "pine-street-venice"
    }
  ]
};
