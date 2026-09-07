// ★ A CASCADE — one renaming forcing another, stated in advance and in one sentence.
//
//   Childs avenue → **Griffith Park boulevard** (adopted)
//   and therefore, "to prevent confusion with Griffith Park boulevard",
//   Griffin avenue → **Montecito drive** (probable)
//
// This is the same mechanism as the Moneta / Main / San Pedro chain of 1899
// (documents/lah-1899-03-14) and the Sherman way / Van Nuys chain of 1926
// (documents/lah-1926-06-08), but caught at the moment the second change is only
// "probable". If Griffin Avenue in Lincoln Heights still exists — and it does — then
// this second change did NOT happen, and the anticipated confusion was tolerated. That
// is worth knowing: a predicted follow-on renaming is not evidence that it occurred.
//
// ★★ AND A DIRECT LINK TO OUR OWN DATA. **Childs avenue** is almost certainly named for
// O. W. Childs, whose tract is already in names.js (the O. W. Childs Tract section:
// william, maple-dtla, myrtle, san-julian-st). If so, this is the loss of the last
// street carrying his name — and it should be checked against the Childs Tract geometry
// before anything is written, per rule 2.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "laevex-1925-10-16",
  title: "Los Angeles Evening Express, Oct. 16, 1925 — ordinance adopted changing Childs avenue to Griffith Park boulevard; Griffin avenue expected to follow as Montecito drive",
  shortTitle: "Childs avenue to Griffith Park boulevard",
  url: "https://cdnc.ucr.edu/?a=d&d=LAEVEX19251016.1.7",
  scan: "documents/laevex-1925-10-16/laevex-1925-10-16-clip.jpg",
  transcription: null,

  date: { before: "1925-10-16" },
  recorded: "1925-10-16",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.14, -118.32], [34.14, -118.18],
             [34.05, -118.18], [34.05, -118.32]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "childs-griffith",
      text: "City Council has adopted an ordinance changing the name of Childs avenue to Griffith " +
            "Park boulevard. As a result of this change it is probable Griffin avenue will be changed " +
            "to Montecito drive to prevent confusion with Griffith Park boulevard.",
      note: "★ Headline: \"Change Name of Avenue.\" A cascade, with the second step only \"probable\" — " +
            "and Griffin Avenue survives today, so it did not follow." }
  ],

  rows: []
};
