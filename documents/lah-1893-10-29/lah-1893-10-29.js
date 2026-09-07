// ★★ SUNSET BOULEVARD IS ASSEMBLED, in one ordinance, out of five named pieces:
//
//   • Elysian Park avenue, from Beaudry avenue to Reservoir street
//   • Reservoir street, from Elysian Park avenue to Pasadena boulevard
//   • Elysian Park avenue, through the Washington Heights, Augusta Heights and
//     Golden Gate tracts
//   • CHILDS AVENUE, in the Childs Heights tract
//   • Effie street, from Hyperion avenue to the north city boundary
//
// QUALIFIED throughout — every piece has an extent or a tract, which is what makes
// this the model's `scope: "extent"` case and not a whole-name change.
//
// ★ CHILDS AGAIN. Ozro W. Childs's name is on the O. W. Childs Tract of 1885
// (documents/mr006-378), on "Childs street (or Vermont avenue)" in the Aug. 1896
// ordinance (documents/lah-1896-09-03), and here on Childs Avenue in the Childs
// Heights tract. Three different streets in three parts of the city, none of them
// surviving under that name. Do not merge them on the surname.
//
// AND NOTE WHAT IT IS NOT: the modern Sunset Boulevard runs far west of anything
// here. This ordinance makes the eastern end of it, from Beaudry out past Elysian
// Park, and the name spread west later by acts not in this corpus.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1893-10-29",
  title: "Ordinance No. 1888 (New Series), changing five streets to Sunset Boulevard — adopted Oct. 23, 1893, approved Oct. 26, published Oct. 29, 1893",
  shortTitle: "Ord. 1888, the making of Sunset Boulevard",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18931029.1.11",
  scan: "documents/lah-1893-10-29/lah-1893-10-29-clip.jpg",
  transcription: null,

  date: { on: "1893-10-23" },
  recorded: "1893-10-29",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE CHANGING THE NAMES of certain streets in the city of Los Angeles to Sunset " +
            "boulevard." },

    { id: "sec-1",
      text: "SECTION 1. That the names of those certain streets in the city of Los Angeles heretofore " +
            "known and designated as \"Elysian Park avenue,\" from Beaudry avenue to Reservoir street; " +
            "also \"Reservoir street,\" from Elysian Park avenue to Pasadena boulevard; also, \"Elysian " +
            "Park avenue\" through the Washington Heights tract, Augusta Heights and Golden Gate " +
            "tract; also \"Childs avenue,\" in the Childs Heights tract; also, \"Effie street,\" from " +
            "Hyperion avenue to the north city boundary, be and the same are hereby changed to and " +
            "shall hereafter be known as \"Sunset boulevard.\"" },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the council of the city of " +
            "Los Angeles at its meeting of October 23d, 1893. C. A. LUCKENBACH, City Clerk. Approved " +
            "this 26th day of October, 1893. T. E. ROWAN, Mayor." }
  ],

  rows: []
};
