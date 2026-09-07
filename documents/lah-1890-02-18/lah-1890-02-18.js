// ★★★ THE ACT THIS PROJECT HAS BEEN MISSING, and it turns out to have been in the
// newspaper all along.
//
// "An ordinance changing the name of BROADWAY STREET TO TOBERMAN STREET and
// changing the name of FORT STREET TO BROADWAY was read and adopted."
//
// WHAT IT COMPLETES. The corpus already had the petition — Fred L. Alles, Feb. 3,
// 1890 (documents/min-1890-02-03) — and the outcome, the Herald's Feb. 20 report
// that the ordinance "has gone into effect, having been signed by Mayor Hazard"
// (documents/lah-1890-02-20). Between them sat a hole: the council minutes for
// those dates are missing from the City Clerk's holdings, and
// handbook/RENAMING-SOURCES.md §2a records that gap as the first case where the
// press is the only surviving record. This is the middle of the sandwich —
// adoption, dated, two days before the Feb. 20 report.
//
// ★ AND IT REVEALS THE OTHER HALF OF THE BARGAIN. There was ALREADY a Broadway in
// Los Angeles, and it had to be moved out of the way first: the same ordinance
// makes the old Broadway Street into TOBERMAN STREET. Neither the petition nor the
// Feb. 20 report mentions this. So Fort Street did not simply take a free name —
// the council performed a swap, exactly the shape of the Stearns/Albion petition
// six years later (documents/min-1896-09-21).
//
// NO ROW HERE: documents/lah-1890-02-20 already carries the fort-street → broadway
// change row, and this document does not add an extent. What it adds is a date,
// and a second street nobody knew about.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1890-02-18",
  title: "Los Angeles Herald, Feb. 18, 1890, p. 2 — an ordinance changing Broadway Street to Toberman Street and Fort Street to Broadway is read and adopted",
  shortTitle: "the 1890 Fort → Broadway adoption",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18900218.1.2",
  scan: "documents/lah-1890-02-18/lah-1890-02-18-clip.jpg",
  transcription: null,

  date: { on: "1890-02-17" },
  recorded: "1890-02-18",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "broadway-toberman-fort-broadway",
      text: "An ordinance changing the name of Broadway street to Toberman street and changing the " +
            "name of Fort street to Broadway was read and adopted.",
      note: "★ Two changes in one instrument, and the corpus knew about only one of them." }
  ],

  rows: []
};
