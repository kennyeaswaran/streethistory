// WALTERS STREET IN OFFICIAL USE, MAY 1890. One sentence of council business:
// the city engineer's map of Walters Street is declared official. That is the
// name in force four years after the ordinance that made High Street into
// Walters (documents/lah-1886-09-21) and five months before the omnibus that
// would have made it Ord Street — the omnibus the mayor vetoed
// (documents/lah-1890-10-28, -11-09, -11-11). So the Walters period is bracketed
// from the newspaper alone: Sept. 1886 → at least May 1890 → some later act.
//
// NO ROW: a `state` row needs an extent and the item gives none (the map it
// mentions would — an "official map of Walters street" is exactly the sheet
// that would letter the name; if it survives in the city engineer's files it
// is a document to hunt). The walters-street entity cites this item.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-18 (CDNC).

module.exports = {
  id: "lah-1890-05-22",
  title: "Los Angeles Herald, May 22, 1890, p. 2 — a map of Walters Street, presented by the city engineer, is declared official",
  shortTitle: "the May 1890 official map of Walters Street",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18900522.1.2",
  scan: "documents/lah-1890-05-22/lah-1890-05-22-clip.jpg",
  transcription: null,

  date: { before: "1890-05-22" },
  recorded: "1890-05-22",
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
    { id: "walters-map-official",
      text: "A map of Walters street, presented by the city engineer, was declared official and an " +
            "ordinance of intention to change the grade of Lopez street was adopted.",
      note: "Bears on `walters-street`: the name in official use in May 1890. The map itself is the document to want." }
  ],

  rows: []
};
