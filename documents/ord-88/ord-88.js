// \u2605\u2605 ORDINANCE NO. 88 \u2014 POLYXENA STREET BECOMES CLAY STREET, and the volume
// places Polyxena two pages earlier even though the ordinance does not.
//
// "SECTION 1. That the name of that street in the City of Los Angeles, known
// and designated as Polyxena street, be and the same is hereby changed to Clay
// street."
//
// Adopted June 25, 1883, approved June 26, published June 30. Printed at p. 255
// of Robinson\u2019s 1884 compilation.
//
// \u26a0 NO ROWS, AND THE ROW RULE IS WHY. The ordinance states no extent, and
// names.js has neither a `polyxena` nor a `clay` entity; nothing in this corpus
// letters either name. A row would bind to nothing and draw nothing. TASK.md
// beside this file says what is needed.
//
// \u2605 THE PLACEMENT IS IN THE SAME VOLUME, AND IT IS SHARP. Resolution No. 150
// (p. 253) is "of intention to improve and grade Polyxena street", and its
// assessment district is described from the street\u2019s own centre line:
//
//   "Commencing at the point of intersection of the center line of Polyxena
//   street with the north boundary of Fourth street, and running thence easterly
//   along the north boundary of Fourth street 30 feet; thence on a line parallel
//   to the center line of Polyxena street northerly 610.50 feet to the south
//   boundary of Third street ..."
//
// So Polyxena ran NORTH-SOUTH between Third and Fourth streets and was 610.50
// feet long \u2014 one block, on Bunker Hill, in the same stretch of the volume as
// the Hill Street and Court House Street grades. Res. 151 (p. 254) immediately
// after it establishes the grade of Hill street between Court House and Temple.
// That is enough to look for it on a sheet.
//
// \u2605 AND THE NAME IS WORTH SOMETHING ON ITS OWN. Polyxena is Priam\u2019s daughter;
// it is one of a very small set of classical given names on 1870s Los Angeles
// plats, and the project already holds another \u2014 `chapules` / Grasshopper and
// the virtue cluster (Faith, Hope, Charity) show the same habit of naming by
// theme. Whoever mints the entity should look for its neighbours.
//
// \u26a0 SEC. 2 IS THE LAST SECTION. Unlike nearly every other ordinance in this
// volume, No. 88 carries no section directing the Clerk to publish it \u2014 the
// certification follows Sec. 2 directly. Transcribed as printed.
//
// \u26a0 THE NUMBER IS ROBINSON\u2019S \u2014 see documents/ord-97 and Ordinance No. 104.
//
// PROVENANCE. Gale, The Making of Modern Law: Primary Sources, DT0102876584.
// Read off the 200 dpi page image by Claude, 2026-09-19.

module.exports = {
  id: "ord-88",
  title: "Ordinance No. 88 (Robinson series), \u201CAn Ordinance changing the name of Polyxena street to Clay street\u201D \u2014 adopted June 25, 1883, approved June 26, published June 30, 1883",
  shortTitle: "Ord. 88, Polyxena street becomes Clay street",
  url: "https://link.gale.com/apps/doc/DT0102876584/MMLP?u=uclosangeles&sid=bookmark-MMLP",
  scan: "documents/ord-88/ord-88-p255.jpg",
  transcription: "documents/ord-88/ord-88-text.md",

  date: { on: "1883-06-25" },
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
      text: "AN ORDINANCE changing the name of Polyxena street to Clay street." },
    { id: "sec-1",
      text: "SECTION 1. That the name of that street in the City of Los Angeles, known and " +
            "designated as Polyxena street, be and the same is hereby changed to Clay street.",
      note: "No extent \u2014 unqualified in the amendment\u2019s sense (\u00a72)." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of June 25th, A. D. 1883. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 26th day of June, A. D. 1883. " +
            "C. E. THOM, Mayor. Published June 30th, 1883.",
      note: "No publication section precedes this, unusually for the volume." },
    { id: "res-150-polyxena-district",
      text: "RESOLUTION No. 150. RESOLUTION of intention to improve and grade Polyxena street. ... " +
            "Commencing at the point of intersection of the center line of Polyxena street with the " +
            "north boundary of Fourth street, and running thence easterly along the north boundary " +
            "of Fourth street 30 feet; thence on a line parallel to the center line of Polyxena " +
            "street northerly 610.50 feet to the south boundary of Third street; thence along the " +
            "south boundary of Third street westerly 60 feet; thence on a line parallel to the " +
            "center line of Polyxena street southerly 610.50 feet to the north boundary of Fourth " +
            "street ...",
      note: "Robinson 1884 pp. 253-254, two pages BEFORE this ordinance. Not part of Ordinance 88; " +
            "quoted here because it is the only thing in the corpus that places Polyxena street \u2014 " +
            "north-south, one block, between Third and Fourth, 610.50 feet long. The same " +
            "resolution specifies a curb on the east boundary only, a cobbled gutter on the west, " +
            "and \u201CThere shall be no sidewalks.\u201D" }
  ],

  rows: []
};
