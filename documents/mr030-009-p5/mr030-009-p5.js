// ★★ THE RECORDER'S CERTIFICATE, transcribed 2026-09-14 from the 100 dpi render.
// Nobody had read it before, and it changes who is thought to have named the
// streets on this tract:
//
//     "A full true and correct copy of the original (reduced to two thirds size)
//      recorded Jany. 11th 1888 at 22 min past 9 a.m. AT REQUEST OF LOS ANGELES
//      LAND BUREAU.
//          Frank A. Gibson, Co. Recorder
//          by Wm. E. Johnston, Deputy"
//
// The filing party is a COMPANY, not the Wolfskills. The Los Angeles Land Bureau
// styled itself "a Corporation" at No. 20 West First Street; its president was
// George W. Frink; its auctioneers were Easton, Eldridge & Co. It advertised this
// tract at private sale in the Los Angeles Daily Herald from July 31 to Aug. 8,
// 1887 ("THE WOLFSKILL ORCHARD TRACT, NOW OFFERED AT PRIVATE SALE … Wolfskill
// Avenue is 100 Ft. Wide, and Four of its Other Principal Avenues are 80 Ft.
// Wide"), and it also handled the Governor Stoneman Tract in Alhambra and a
// 168-lot Vernon District auction the same year.
//
// ⚠ WHO NAMED THE STREETS IS THEREFORE OPEN. The Bureau's own advertising calls
// the orchard "in the actual occupancy and Possession of one family for over
// Fifty Years" — present tense — and its Vernon ad says "by Order of the Owners",
// so it reads as promoter and selling agent with the Wolfskills retaining title.
// Ruth Avenue is very likely the owner's daughter (names.js `ruth-ave`); Gladys
// Avenue is not a Wolfskill at all (`gladys-ave`), and the Bureau's own families
// are where that search goes next. The deed record would settle it.
//
module.exports = {
  id: "mr030-009-p5",
  title: "Map of the Wolfskill Orchard Tract situated in the City of Los Angeles Cal.",
  shortTitle: "Wolfskill Orchard Tract, sheet 5 (M.R. 30-13)",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf",
  scan: "documents/mr030-009-p5/mr030-009-p5.pdf",
  transcription: null,

  date: { on: "1888-01-11" },   
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [991, 476], [632, 391], [222, 1015], [253, 1303],
    [721, 1313]
  ],
  alignment: {
    image: "documents/mr030-009-p5/mr030-009-p5-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.042646, -118.245834], note: "document-tool corner (0,0)" },
      { px: [1115, 0], ll: [34.048331, -118.245513], note: "document-tool corner (1115,0)" },
      { px: [0, 1682], ll: [34.042241, -118.235556], note: "document-tool corner (0,1682)" }
    ]
  },

  sweptFully: true,
  sweptFor: ["3rd Street","4th Street","Alameda Street","Boyd Street","Central Avenue","Crocker Street","Omar Street","San Pedro Street","Stanford Avenue","Towne Avenue"],

  rows: [
    {
      "kind": "state",
      "asWritten": "Third St",
      "street": "3rd Street",
      "from": {
        "px": [
          954,
          467
        ]
      },
      "to": "Alameda Street",
      "basis": "alignment",
      "note": "The modern centerline follows the long corridor lettered Third St as far as Alameda.",
      "name": "third-street"
    },
    {
      "kind": "state",
      "asWritten": "Georgia St",
      "street": "3rd Street",
      "from": "Alameda Street",
      "to": {
        "px": [
          633,
          1311
        ]
      },
      "basis": "alignment",
      "note": "Beyond Alameda the modern 3rd Street trace curves into the short corridor lettered Georgia St.",
      "name": "georgia-east"
    },
    {
      "kind": "state",
      "asWritten": "Fourth St",
      "street": "4th Street",
      "from": {
        "px": [
          660,
          398
        ]
      },
      "to": {
        "px": [
          230,
          1088
        ]
      },
      "basis": "alignment",
      "note": "This page continues the Fourth St roadway identified on page 4.",
      "name": "fourth-street"
    },
    {
      "kind": "state",
      "asWritten": "Alameda St",
      "street": "Alameda Street",
      "from": {
        "px": [
          747,
          1233
        ]
      },
      "to": {
        "px": [
          248,
          1253
        ]
      },
      "basis": "alignment",
      "note": "The local St lettering completes Alameda on page 2, and the aligned line remains inside the corridor.",
      "name": "alameda-st"
    },
    {
      "kind": "absent",
      "street": "Boyd Street",
      "from": {
        "px": [
          826,
          437
        ]
      },
      "to": {
        "px": [
          686,
          646
        ]
      },
      "note": "The modern segment cuts across the large parcel between San Pedro and Omar; no roadway is drawn there."
    },
    {
      "kind": "absent",
      "street": "Central Avenue",
      "from": {
        "px": [
          824,
          995
        ]
      },
      "to": "3rd Street",
      "basis": "alignment"
    },
    {
      "kind": "state",
      "asWritten": "Wolfskill Ave",
      "street": "Central Avenue",
      "from": "3rd Street",
      "to": {
        "px": [
          242,
          985
        ]
      },
      "basis": "alignment",
      "note": "This is the continuation of the Wolfskill Ave corridor whose split lettering appears on pages 2 and 4.",
      "name": "wolfskill-ave"
    },
    {
      "kind": "state",
      "asWritten": "Stanford Ave",
      "street": "Crocker Street",
      "from": {
        "px": [
          767,
          882
        ]
      },
      "to": {
        "px": [
          450,
          668
        ]
      },
      "basis": "alignment",
      "note": "Modern Crocker Street follows the historic Stanford Ave corridor established across the other sheets.",
      "name": "stanford-ave"
    },
    {
      "kind": "state",
      "asWritten": "Omar Ave",
      "street": "Omar Street",
      "from": {
        "px": [
          826,
          737
        ]
      },
      "to": {
        "px": [
          561,
          560
        ]
      },
      "basis": "alignment",
      "note": "The supplied centerline stays in the roadway fully lettered Omar Ave on this page.",
      "name": "omar-ave"
    },
    {
      "kind": "state",
      "asWritten": "San Pedro Ave",
      "street": "San Pedro Street",
      "from": {
        "px": [
          981,
          508
        ]
      },
      "to": {
        "px": [
          614,
          418
        ]
      },
      "basis": "alignment",
      "note": "This is the same San Pedro Ave corridor whose name and suffix are split across pages 2 and 4.",
      "name": "san-pedro"
    },
    {
      "kind": "state",
      "asWritten": "Ruth Ave",
      "street": "Stanford Avenue",
      "from": {
        "px": [
          365,
          987
        ]
      },
      "to": {
        "px": [
          280,
          927
        ]
      },
      "basis": "alignment",
      "note": "The short modern Stanford Avenue segment lies in the continuation of the corridor lettered Ruth Ave.",
      "name": "ruth-ave"
    },
    {
      "kind": "state",
      "asWritten": "Towne Ave",
      "street": "Towne Avenue",
      "from": {
        "px": [
          643,
          987
        ]
      },
      "to": {
        "px": [
          365,
          798
        ]
      },
      "basis": "alignment",
      "note": "The main modern branch follows the Towne Ave corridor to the coverage edge.",
      "name": "towne-ave"
    },
    {
      "kind": "state",
      "asWritten": "Towne Ave",
      "street": "Towne Avenue",
      "from": {
        "px": [
          586,
          988
        ]
      },
      "to": {
        "px": [
          566,
          932
        ]
      },
      "basis": "alignment",
      "note": "The short second modern branch remains within the widened end of the same Towne Ave roadway.",
      "name": "towne-ave"
    }
  ]
};
