// ★★ A MAYORAL VETO, in full, with the mayor's reasons — the first this corpus
// has.
//
// "Mayor Bryson yesterday afternoon vetoed the recently-passed ordinance changing
// the names of certain streets and avenues in the city, IMMEDIATELY UPON ITS
// PRESENTATION TO HIM FOR SIGNATURE." His objection is procedural rather than
// substantive: many people had petitioned him to be heard, and he wants a
// committee to receive them before he signs.
//
// WHY IT MATTERS TO THE DATA. The ordinance adopted on Feb. 5
// (documents/lah-1889-02-06) never took effect. Anything dated from that adoption
// would be wrong by three months — the surviving act is Ordinance No. 48, adopted
// Apr. 22 and in force May 10 (documents/lah-1889-05-10). An adopted ordinance is
// not a law, and this is the document that proves it for this corpus.
//
// The veto itself could not even be presented for want of a quorum, so it waited
// another week (documents/lah-1889-02-26).
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1889-02-19",
  title: "Los Angeles Herald, Feb. 19, 1889, p. 4 — “Street Names”: Mayor Bryson vetoes the street-renaming ordinance immediately on presentation",
  shortTitle: "the Feb. 1889 veto",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18890219.1.4",
  scan: "documents/lah-1889-02-19/lah-1889-02-19-clip.jpg",
  transcription: null,

  date: { on: "1889-02-18" },
  recorded: "1889-02-19",
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
    { id: "veto",
      text: "Mayor Bryson yesterday afternoon vetoed the recently-passed ordinance changing the names " +
            "of certain streets and avenues in the city, immediately upon its presentation to him for " +
            "signature. The Mayor suggests, in view of the fact that many persons have petitioned him " +
            "to give them an opportunity to be heard on the matter, that the Council show " +
            "property-owners the consideration of appointing a committee who, at a stated time, will " +
            "receive the presences of those directly interested, and then act accordingly. This done, " +
            "the Mayor will sign the ordinance." },

    { id: "no-quorum",
      text: "The veto would have been presented at the afternoon session of the Council, but the " +
            "absence of the necessary quorum laid it over until next Monday." }
  ],

  rows: []
};
