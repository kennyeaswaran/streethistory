// STAGE 3+ — SIGNED, which is the stage that matters. Two renaming ordinances are in
// the batch, but the Herald prints only the OLD names:
//
//   "Changing the name of Reservoir street."
//   "Ordinance changing the name of Hermosa street and South avenue."
//
// No new names, no extents. This is the most common shape of result in the whole
// search, and it is why the minutes matter: the Herald reports that an instrument
// exists without saying what it does.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1907-12-27",
  title: "Los Angeles Herald, Dec. 27, 1907 — Mayor Harper signs a batch of street ordinances, including changes to Reservoir street, Hermosa street and South avenue",
  shortTitle: "Reservoir, Hermosa and South avenue signed",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19071227.1.3",
  scan: "documents/lah-1907-12-27/lah-1907-12-27-clip.jpg",
  transcription: null,

  date: { before: "1907-12-27" },
  recorded: "1907-12-27",
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
    { id: "batch-signed",
      text: "Mayor A. C. Harper yesterday signed a batch of street ordinances that foreshadow a large " +
            "amount of improvement work. The legal holidays delayed legislation bearing on them.",
      note: "Headline: \"Mayor Signs Batch of Street Ordinances.\" \"Yesterday\" = Dec. 26, 1907." },

    { id: "reservoir",
      text: "Changing the name of Reservoir street.",
      note: "Old name only. New name not printed." },

    { id: "hermosa-south",
      text: "Ordinance changing the name of Hermosa street and South avenue.",
      note: "Old names only. New names not printed. Two streets, possibly one ordinance." }
  ],

  rows: []
};
