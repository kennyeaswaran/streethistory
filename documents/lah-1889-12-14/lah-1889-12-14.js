// ★★ THE INSTRUMENT FOR `regent-street`. "That all that portion of REGENT STREET,
// from Fifth street to the present southern terminus of said Regent street, is
// hereby changed, and the same shall hereafter be called MAPLE AVENUE."
//
// The `regent-street` entity was minted on 2026-09-06 from the Moreno Vineyard
// Tract sheet, recorded Mar. 1876 (documents/mr003-166-p1), which letters Regent
// between Los Angeles Street and Wall Street. Its note reads "The corridor is
// Maple Avenue today, between 5th and 6th" — an observation from the modern map
// with nothing behind it. This is the act, thirteen years later, and it runs from
// Fifth Street south, which fits.
//
// IT ALSO REVERSES THE 1888 COMMITTEE. That list had proposed the opposite —
// "Maple Ave. and Los Angeles St.: from Washington St. south, changed to Regent
// St." (documents/lah-1888-10-11). Fourteen months later the council makes Regent
// into Maple instead. A committee list is not an instrument.
//
// SECTION 1 ALSO RESTORES A NAME: the portion of Second Street between Lucas
// Avenue and Figueroa "(formerly Lakeshore avenue)" goes back to being Lakeshore
// Avenue — undoing part of what Ordinance No. 364 had done three months earlier
// (documents/lah-1889-09-19). A restoration inside three months, and a shape
// handbook/change-rows-amendment.md §10 lists as one the model cannot express.
//
// THE SECOND CLIP is the same ordinance printed again the following day. Kept
// because a duplicate publication is itself a fact about how these were
// advertised, and because the second setting is easier to read in places.
//
// PROVENANCE. Two clippings supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1889-12-14",
  title: "Ordinance No. 482 (New Series), changing Second Street to Lakeshore Avenue, Regent Street to Maple Avenue, and Downey Avenue west of the river to Olympia Street — adopted Dec. 9, 1889, approved Dec. 13, published Dec. 14 and again Dec. 15, 1889",
  shortTitle: "Ord. 482, Regent → Maple",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18891214.1.9",
  scan: "documents/lah-1889-12-14/lah-1889-12-14-clip.jpg",
  transcription: null,

  date: { on: "1889-12-09" },
  recorded: "1889-12-14",
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
      text: "AN ORDINANCE CHANGING THE NAMES OF CERTAIN STREETS IN THE CITY OF LOS ANGELES." },

    { id: "sec-1-lakeshore",
      text: "SECTION 1. That the name of that portion of Second street (formerly Lakeshore avenue) " +
            "between Lucas avenue and Figueroa street, is hereby changed, and the same shall " +
            "hereafter be called Lakeshore avenue.",
      note: "A restoration: the parenthesis admits the street had been Lakeshore before, and " +
            "Ordinance No. 364 of Sept. 1889 is what had made it Second Street." },

    { id: "sec-1-regent-maple",
      text: "That all that portion of Regent street, from Fifth street to the present southern " +
            "terminus of said Regent street, is hereby changed, and the same shall hereafter be " +
            "called Maple avenue.",
      note: "★ The instrument behind `regent-street`'s disappearance into Maple Avenue." },

    { id: "sec-1-downey-olympia",
      text: "That all that portion of Downey avenue west of the Los Angeles river, is hereby changed, " +
            "and the same shall be called Olympia street.",
      note: "The change Mr. Summerland thought too classic for the Eighth ward " +
            "(documents/lah-1889-12-10)." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of December 9, 1889. FREEMAN G. TEED, City Clerk. Approved " +
            "December 13, 1889. HENRY T. HAZARD, Mayor." }
  ],

  rows: []
};
