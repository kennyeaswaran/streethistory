// \u2605\u2605 ORDINANCE NO. 76 \u2014 UPPER MAIN STREET IS NAMED, AND IT IS NAMED BY
// BUILDINGS RATHER THAN BY SURVEY. One of the few street definitions in this
// corpus that locates a street entirely by what stood along it.
//
// "SECTION 1. ... commences at the north-east corner of the building known as
// the old Roman Catholic church, in front of the plaza, and runs northerly in
// front of the store of M. G. Santa Cruz and the old Pacific Hotel, as far as
// the intersection of the same with Alameda street."
//
// Adopted Mar. 24, 1883, approved Mar. 26, published Mar. 27.
//
// \u2605 READ IT WITH documents/ord-77, WHICH IS ON THE SAME PAGE. Ordinance No. 77
// changes the name of BATH STREET to MAIN STREET, and was adopted five days
// EARLIER (Mar. 19) though it carries the later number. Together the two
// reorganise the naming of Main north of the plaza: Bath becomes Main, and the
// short stretch in front of the plaza church, running north to Alameda, is
// fixed as Upper Main.
//
// \u26a0 NO ROWS, AND THE REASON IS THE ROW RULE. names.js has no `upper-main`
// entity and nothing in this corpus letters "Upper Main street", so a row would
// have nothing to bind to and nothing to land on. What the ordinance gives is a
// very good extent for one, and TASK.md beside this file says what minting it
// would take. Note also that Robinson 1884 indexes Virgin street "between Upper
// Main and Yale streets" (Res. 141 p. 238, Res. 181 p. 298), which is a second
// line of evidence for where Upper Main ran.
//
// THE BUILDINGS, for whoever places this: the "old Roman Catholic church in
// front of the plaza" is the Plaza Church (Nuestra Se\u00f1ora la Reina de los
// \u00c1ngeles); the "old Pacific Hotel" and the store of M. G. Santa Cruz stood
// along the same frontage. The street runs NORTH from the church to Alameda.
//
// \u26a0 THE NUMBER IS ROBINSON\u2019S \u2014 see documents/ord-97 and Ordinance No. 104.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, DT0102876584.
// Read off the 200 dpi page image by Claude, 2026-09-19.

module.exports = {
  id: "ord-76",
  title: "Ordinance No. 76 (Robinson series), \u201CAn Ordinance designating and providing for the naming of Upper Main street\u201D \u2014 adopted Mar. 24, 1883, approved Mar. 26, published Mar. 27, 1883",
  shortTitle: "Ord. 76, Upper Main street named",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-76/ord-76-p223.jpg",
  transcription: "documents/ord-76/ord-76-text.md",

  date: { on: "1883-03-24" },
  recorded: "1884",
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
      text: "AN ORDINANCE designating and providing for the naming of Upper Main street." },
    { id: "sec-1",
      text: "SECTION 1. The street or part of street hereinafter described shall be and is hereby " +
            "named Upper Main street, viz: The same is sometimes called Upper Main street, and " +
            "commences at the north-east corner of the building known as the old Roman Catholic " +
            "church, in front of the plaza, and runs northerly in front of the store of M. G. " +
            "Santa Cruz and the old Pacific Hotel, as far as the intersection of the same with " +
            "Alameda street.",
      note: "\u201CThe same is sometimes called Upper Main street\u201D \u2014 the Council is ratifying usage, " +
            "as it does two pages later for Ducommun (documents/ord-92)." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of March 24th, A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 26th day of March, A. D. 1883. " +
            "C. E. THOM, Mayor. Published March 27th, 1883." }
  ],

  rows: []
};
