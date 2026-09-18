// ★ CLOSES A WANTED LINE. handbook/WANTED.md listed "High → Walters, 1886" among
// the undated renamings needing an instrument. Here it is, adopted, in one
// sentence.
//
// AND IT IS HALF A CHAIN. The name was still in official use in May 1890 (a map
// of Walters Street declared official, documents/lah-1890-05-22). The Oct. 1890
// omnibus ordinance would have made Walters Street ORD STREET
// (documents/lah-1890-10-28) — the council's reason being that "Water, Waters
// and Walters streets … were so much alike as to be confusing" (lah-1890-11-11)
// — but the mayor vetoed it and it went back for amendment; the act that
// actually made Walters into Ord is not yet in the corpus (2026-09-18).
//
// THE ROW (2026-09-18): a whole-name change, high-street-chinatown →
// walters-street. It lands wherever High Street / Calle Alta is lettered — the
// Ord survey's ground north of the plaza — and needs no Walters in the OSM
// extract. Confirmed by Kenny, 2026-09-18.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1886-09-21",
  title: "Los Angeles Herald, Sept. 21, 1886, p. 5 — an ordinance changing the name of High Street to Walters Street is adopted",
  shortTitle: "the 1886 High → Walters renaming",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18860921.1.5",
  scan: "documents/lah-1886-09-21/lah-1886-09-21-clip.jpg",
  transcription: null,

  date: { before: "1886-09-21" },
  recorded: "1886-09-21",
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
    { id: "high-walters",
      text: "Presented an ordinance changing name of High street to Walters street. Adopted." }
  ],

  rows: [
    { kind: "change", from: "high-street-chinatown", to: "walters-street",
      // "changing name of High street to Walters street" — the whole name,
      // no stretch stated (change-rows-amendment §2). It lands where a sheet
      // letters High Street / Calle Alta: the Ord survey's ground north of
      // the plaza (mr053-073), today's Ord Street.
      scope: "whole-name",
      says: ["high-walters"],
      mechanism: "renaming",
      confirmed: true,   // Kenny, 2026-09-18
      note: "The Herald reports the ordinance presented and adopted in one item; the ordinance number and the council day are not in the excerpt. Walters lasted four years — the Oct. 1890 omnibus renaming (lah-1890-10-28) made it Ord Street." }
  ]
};
