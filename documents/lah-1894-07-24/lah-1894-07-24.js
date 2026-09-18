// ★★ CASTELAR BEGINS TO BECOME HILL STREET, sixty-six years before the date this
// is usually given.
//
// Kines dates the disappearance of Castelar Street into North Hill Street to 1960.
// The Oct. 1888 committee list had proposed "Castellar Ave., changed to Hill St."
// and nothing came of it (documents/lah-1888-10-11). Here, in July 1894, an
// ordinance changing A PORTION of Castelar Street to Hill Street is passed.
//
// WHAT THAT MEANS FOR `castelar`. The entity was minted from the Feb. 1874
// ordinance that renamed Bull Street; the name then SPREAD, taking Cemetery Avenue
// in July 1886 (documents/lah-1886-07-23); and now it starts to be eaten from the
// south by Hill Street. A name with a sixty-year retreat, of which this corpus now
// has the first step and Kines has the last.
//
// ⚠ "A PORTION" — no extent is given, so which portion is unknown, and nothing in
// names.js has been changed. The published ordinance would say.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1894-07-24",
  title: "Los Angeles Herald, July 24, 1894, p. 5 — an ordinance changing the name of a portion of Castelar Street to Hill Street is passed",
  shortTitle: "the 1894 Castelar → Hill renaming",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18940724.1.5",
  scan: "documents/lah-1894-07-24/lah-1894-07-24-clip.jpg",
  transcription: null,

  date: { before: "1894-07-24" },
  recorded: "1894-07-24",
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
    { id: "castelar-hill",
      text: "I have also prepared and herewith present an ordinance changing the name of a portion of " +
            "Castelar street to Hill street. Passed." }
  ],

  rows: [
    // Audit 2026-09-18 (handbook/change-rows-audit-2026-09-18.md), bin B.
    // QUALIFIED, UNRESOLVED: "a portion" with no extent. `castelar` is lettered on
    // modern Hill Street (mr003-240). ⚠ `hill-street-downtown`'s internal note says
    // the Hill name was extended north onto Castelar in 1960; this 1894 portion is an
    // earlier, smaller step and the two accounts need reconciling.
    { kind: "change", from: "castelar", to: "hill-street-downtown",
      scope: "extent-unresolved",
      wording: "a portion of Castelar street to Hill street",
      says: ["castelar-hill"],
      mechanism: "renaming",
      confirmed: false,
      note: "Passed on the city attorney's report, July 1894." }
  ]
};
