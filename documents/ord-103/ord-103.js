// \u2605\u2605 ORDINANCE NO. 103 \u2014 MOTT ALLEY IS NAMED, WITH AN EXTENT ANY MODERN MAP
// CAN FOLLOW: "between Main street and Spring street, and extending from First
// street to Second street".
//
// Adopted Oct. 15, 1883, approved Oct. 16, published Oct. 19. Printed at p. 314
// of Robinson\u2019s 1884 compilation.
//
// \u26a0 NO ROWS, AND IT IS THE ENTITY THAT IS MISSING, NOT THE GROUND. names.js has
// no `mott-alley`, and a `state` row cannot be written without a name id; the
// checker rejects one. The extent, unusually for this volume, needs no research
// at all \u2014 the block bounded by Main, Spring, First and Second is where the
// Times building and the old city hall block stand, and the mid-block lane runs
// through it. So the moment the entity exists this document carries a row.
// TASK.md beside this file says exactly what that row should be.
//
// \u2605 THE NAME. Mott is a surname this project already meets: documents/mr003-060
// is the "Map of the Thomas Tract, being a portion of the JOHNSON AND MOTT
// TRACT" (MODEL-SPEC \u00a74\u2019s own worked example). Whether the alley and the tract
// carry the same man\u2019s name is exactly the kind of question names.js exists to
// answer and this document cannot.
//
// The alley was worked on twice more in this volume: Res. 183 (p. 309), of
// intention to improve and grade Mott alley, and Res. 195 (p. 323), ordering the
// grading and improvement of Mott Alley. Note the volume itself cannot decide
// between "alley" and "Alley".
//
// \u26a0 THE NUMBER IS ROBINSON\u2019S \u2014 see documents/ord-97 and Ordinance No. 104.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, DT0102876584.
// Read off the 200 dpi page image by Claude, 2026-09-19.

module.exports = {
  id: "ord-103",
  title: "Ordinance No. 103 (Robinson series), \u201CAn Ordinance naming a certain alley, Mott Alley\u201D \u2014 adopted Oct. 15, 1883, approved Oct. 16, published Oct. 19, 1883",
  shortTitle: "Ord. 103, Mott Alley named",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-103/ord-103-p314.jpg",
  transcription: "documents/ord-103/ord-103-text.md",

  date: { on: "1883-10-15" },
  recorded: "1884",
  form: "textual",
  type: "ordinance",
  // A naming of pavement that already existed as a lane: the ordinance is the
  // naming act, but the alley is there to be named.
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "AN ORDINANCE naming a certain alley, Mott Alley." },
    { id: "sec-1",
      text: "SECTION 1. That certain lane or alley in the City of Los Angeles, between Main street " +
            "and Spring street, and extending from First street to Second street, is hereby named " +
            "and the same shall be hereafter known as \u201CMott Alley.\u201D",
      note: "\u201Clane or alley\u201D \u2014 it existed before it was named. The extent is four modern " +
            "streets and needs no resolving." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of October 15th, A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 16th day of October, A. D. 1883. " +
            "C. E. THOM, Mayor. Published October 19th, 1883." }
  ],

  rows: []
};
