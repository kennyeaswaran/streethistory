// \u2605\u2605 ORDINANCE NO. 105 \u2014 THE CITY DEDICATES A SIXTY-FOOT STRIP THROUGH BLOCK
// 35\u00bd, ORD\u2019S SURVEY, AND NAMES IT HIGH STREET. That is Teed Street\u2019s own block.
//
// "SEC. 2. The name of the above-described tract of land shall be High street."
//
// Adopted Nov. 17, 1883, approved Nov. 19, published Nov. 21. Printed at
// pp. 332-333 of Robinson\u2019s 1884 compilation; page images beside this file and
// the text, read by eye, in ord-105-text.md.
//
// \u2605 WHY THIS FOLDER EXISTS. handbook/COMPILED-ORDINANCES.md went after
// Ordinance No. 107 (p. 335), "ordering sale of lots in block 35\u00bd, Ord\u2019s
// survey", in the hope that a city sale of lots on Teed Street\u2019s block would
// name the streets and lift `teed-street` off `inferred`. IT DOES NOT: Ord. 107
// lists lots 1, 2, 3, 4, 8, 10, 12, 16, fractional 17, and 18 to 29 by number
// and minimum bid, and names no street at all. That negative is recorded in
// documents/robinson-1884. Ordinance 105, two pages earlier and about the same
// block, is the one that names a street \u2014 and it names two, High and Rosas.
//
// WHAT IT ADDS, precisely:
//   \u2022 It is a DEDICATION, so it dates the pavement and not just the name. The
//     row below is a `state` row with the document\u2019s `attests` overridden to
//     planned-on: a dedication IS the planning act (\u00a74.2).
//   \u2022 It puts ROSAS STREET in a city ordinance. `rosas-street` is `basis: "none"`,
//     `searched: "extensive"`, lettered only on documents/mr003-240 and
//     mr007-062-p2, and its note says the name "is gone from Los Angeles
//     entirely". Here it is, in force in 1883, as the western boundary of the
//     dedication.
//   \u2022 It shows the city still buying, selling and dedicating ground in Block 35\u00bd
//     seven years after documents/mr003-240 was recorded (July 20, 1876), which
//     is context for who was platting there and therefore for `teed-street`.
//
// \u26a0 THE EXTENT IS AUTHORED AND IS A PROPOSAL. The ordinance describes its strip
// by lot boundaries \u2014 "lot (15) fifteen and southerly part of lot (17)
// seventeen" \u2014 with only its WEST end given as a street (the east boundary of
// Rosas street). The corpus\u2019s own reading of mr003-240 letters "High St" on
// modern ORD STREET running from Hill Place (which is where that sheet puts
// Rosas Street) to Hill Street, and that is the stretch this dedication must lie
// in or on. The east end here is lot 15\u2019s boundary, not a named cross street, so
// `to: "Hill Street"` is research and carries `confirmed: false`.
//
// \u26a0 THE METES-AND-BOUNDS CONTRADICT THEMSELVES as printed \u2014 the call runs east
// "to the north-west corner of said lot 15" and then south along lot 15\u2019s EAST
// boundary. One of the two words is a slip in the original. The strip is still
// unambiguous: sixty feet wide, along the south edge of lot 15, east from Rosas.
//
// \u26a0 THE NUMBER IS ROBINSON\u2019S \u2014 see documents/ord-97 and Ordinance No. 104.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, DT0102876584.
// Read off the 200 dpi page images by Claude, 2026-09-19.

module.exports = {
  id: "ord-105",
  title: "Ordinance No. 105 (Robinson series), \u201CAn Ordinance dedicating certain lands as a public street and highway\u201D (lot 15 and part of lot 17, block 35\u00bd, Ord\u2019s survey, named High street) \u2014 adopted Nov. 17, 1883, approved Nov. 19, published Nov. 21, 1883",
  shortTitle: "Ord. 105, High street dedicated through Block 35\u00bd",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-105/ord-105-p332.jpg",
  transcription: "documents/ord-105/ord-105-text.md",

  date: { on: "1883-11-17" },
  recorded: "1884",
  form: "textual",
  type: "ordinance",
  // The document as a whole records a dedication \u2014 an act of planning, not a
  // report of pavement \u2014 so planned-on, and the row inherits it.
  attests: "planned-on",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,                // the row\u2019s east end is authored, not stated
  sweptFor: ["Ord Street"],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE dedicating certain lands as a public street and highway." },
    { id: "sec-1",
      text: "SECTION 1. The following-described real property, situated in the City of Los Angeles, " +
            "County of Los Angeles, State of California, and more particularly described as " +
            "follows: lot (15) fifteen and southerly part of lot (17) seventeen, block (35\u00bd) " +
            "thirty-five and one-half, Ord\u2019s survey of the City of Los Angeles, more particularly " +
            "described as follows: commencing at the south-east corner of said lot (15) fifteen, " +
            "and running thence along south boundary of said lot (15) fifteen westerly to the east " +
            "boundary of Rosas street; thence along the east boundary of Rosas street northerly " +
            "(63) sixty-three feet to a point; thence on a line parallel to the south boundary of " +
            "said lot (15) fifteen, and distant at all points (60) sixty feet therefrom, easterly " +
            "to the north-west corner of said lot (15) fifteen; thence along the east boundary of " +
            "said lot (15) fifteen southerly to the point of beginning, is hereby and forever " +
            "dedicated to the use of the public, and declared a public street and highway.",
      note: "A sixty-foot strip along the south edge of lot 15, running east from Rosas street. " +
            "\u26a0 \u201Cnorth-west corner\u201D followed by \u201Ceast boundary\u201D is self-contradictory in the " +
            "original and is transcribed as printed. Block 35\u00bd is the ground of " +
            "documents/mr003-240, which letters Teed Street and Rosas Street." },
    { id: "sec-2-name",
      text: "SEC. 2. The name of the above-described tract of land shall be High street.",
      note: "The warrant for the row below. High street is `high-street-chinatown`, which became " +
            "Walters Street in 1886 and Ord Street in 1890." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles at its meeting of November 17th, A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 19th day of November, A. D. 1883. " +
            "C. E. THOM, Mayor. Published November 21st, 1883." }
  ],

  rows: [
    { kind: "state", name: "high-street-chinatown", asWritten: "High street",
      street: "Ord Street", from: "Hill Place", to: "Hill Street",
      attests: "planned-on",
      confirmed: false,
      says: ["sec-2-name", "sec-1"],
      note: "The ordinance gives only the WEST end as a street (\u201Cthe east boundary of Rosas " +
            "street\u201D, which documents/mr003-240 puts on modern Hill Place); the east end is lot " +
            "15\u2019s own boundary. \u201CHill Street\u201D is taken from that sheet\u2019s own High St row, which " +
            "runs Hill Place to Hill Street, and is therefore research rather than testimony \u2014 " +
            "hence confirmed: false. If the dedication covered only part of that block the row " +
            "should be shortened, not deleted: the naming is not in doubt, only its east end." }
  ]
};
