// RE-READ FROM A FULL-SIZE SCAN, 2026-09-06. Kenny supplied the 660-pixel crop; the
// earlier version was read from a faint one and left the Wilmington cross street blank.
// It is **S street**. Every other reading in the earlier version was correct.
//
// ★ THE EXTENT, in full: "Main street will become Huntington drive from the northeast
// city limits at Mission road to S street in the Wilmington district." That is the
// entire length of Main street through the city — the change was total, not a segment.
//
// ⚠ AND IT DID NOT HAPPEN. Two documents found after this one settle it:
//   documents/dnla-1927-06-30 — passage "indefinitely postponed" the very next day, on
//     the city attorney's advice, because improvement notices describe property by the
//     name Main street.
//   documents/lae-1927-10-18 — four months later, "the measure was withheld."
//
// So nothing here is a row. Kept because it is the only document that states the
// proposed extent.
//
// ★ THE NAME DISCREPANCY IS REAL, not a misreading. This Herald article says
// "Huntington **drive**" twice, in the headline paragraph and in the extent sentence.
// The Examiner and the Daily News both say "Huntington **boulevard**"
// (documents/lae-1927-06-22, -06-29, -10-18; documents/dnla-1927-06-30). One paper
// against two, on a name that never took effect.
//
// Also note the procedure, stated plainly: without suspension of the rules "the measure
// would have to go through the regular series of meetings" — the same one-vote delay as
// documents/dnla-1925-07-16.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search); replaced with
// a full-resolution crop the same day.

module.exports = {
  id: "lah-1927-06-29",
  title: "Los Angeles Herald, June 29, 1927 — \"Final Action Due on Main St. Change\": the ordinance would make Main street into Huntington drive from Mission road to S street, Wilmington",
  shortTitle: "Main street to Huntington drive, final action due",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19270629.1.9",
  scan: "documents/lah-1927-06-29/lah-1927-06-29-clip.jpg",
  transcription: null,

  date: { before: "1927-06-29" },
  recorded: "1927-06-29",
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
    { id: "final-action",
      text: "Main street may officially disappear from the maps of Los Angeles today. The city " +
            "council was scheduled to give final consideration to a formal ordinance changing the " +
            "name of the old thoroughfare to Huntington drive.",
      note: "Headline: \"Final Action Due on Main St. Change / Name for Old Thoroughfare Before " +
            "Council.\"" },

    { id: "ten-to-four",
      text: "Acting under instructions from the councilmen, who voted 10 to 4 yesterday to have the " +
            "ordinance prepared, the city attorney was to present the document changing the street's " +
            "name today, with the action expected to be placed immediately before Mayor George E. " +
            "Cryer for signature unless one of the dissenting councilmen votes against suspension of " +
            "the rules. Objection to such suspension would mean that the measure would have to go " +
            "through the regular series of meetings.",
      note: "Vote of 10 to 4 on June 28, 1927 — see documents/lae-1927-06-29 for the names of the " +
            "four." },

    { id: "referendum",
      text: "Final effort to block the name change were made yesterday before council, but these were " +
            "unsuccessful. Intimations made that a referendum would be circulated among the voters if " +
            "the ordinance is passed today, but advocates of the new name for the old street " +
            "expressed belief that this request for a veto by the electorate would not meet with " +
            "success.",
      note: "\"Final effort … were made\" as printed." },

    { id: "the-extent",
      text: "Under the provisions of the ordinance Main street will become Huntington drive from the " +
            "northeast city limits at Mission road to S street in the Wilmington district.",
      note: "★ The full proposed extent: Mission road to S street, Wilmington. The ordinance was " +
            "never enacted." }
  ],

  rows: []
};
