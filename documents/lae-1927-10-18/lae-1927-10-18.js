// RE-READ FROM A FULL-SIZE SCAN, 2026-09-06. Kenny supplied the 839-pixel crop,
// replacing a 120-pixel one. The earlier transcription was correct throughout; the
// low-confidence flags are removed.
//
// ★★ THE CLIPPING THAT EXPLAINS WHY MAIN STREET IS STILL MAIN STREET.
//
//   "The drafting of an ordinance changing the name of Main street to Huntington
//   boulevard was ordered by the former council, but the measure was withheld."
//
// Ordered, drafted, withheld — never enacted. Together with documents/dnla-1927-06-30
// ("indefinitely postponed") this closes the 1927 Main Street question, and nothing in
// documents/lah-1927-06-29 should be written as a row.
//
// The reason, for the third time in this corpus: **street-improvement law.** "Because
// Main street is so-named in a number of descriptions of property affected by
// improvements now under way or proposed for the near future, the city engineering
// department has requested that no change be made in the name for the present." Compare
// the Vrooman act in 1908 (documents/lah-1908-09-22) and the city attorney's advice in
// June 1927 (documents/dnla-1927-06-30).
//
// The opposition, for the record: 1500 signers headed by **J. A. Graves**, president of
// the Farmers & Merchants National Bank, who makes a point about the QUALITY of a
// petition that is worth keeping — it was signed not "by people at so much a head" but
// by actual property owners and businesses on the street. **Judge William P. James** of
// the United States District Court. And the **Right Rev. John J. Cantwell**, bishop of
// Los Angeles and San Diego, whose sentence is the clearest contemporary objection to
// commemorative renaming anywhere in this corpus.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search); replaced with
// a full-resolution crop the same day.

module.exports = {
  id: "lae-1927-10-18",
  title: "Los Angeles Examiner, Oct. 18, 1927 — \"1500 Fight New Main St. Name\": a petition headed by J. A. Graves, with the engineering department, a federal judge and the bishop against the change",
  shortTitle: "1500 signatures against the Main street change",
  url: "https://cdnc.ucr.edu/?a=d&d=LAE19271018.1.9",
  scan: "documents/lae-1927-10-18/lae-1927-10-18-clip.jpg",
  transcription: null,

  date: { before: "1927-10-18" },
  recorded: "1927-10-18",
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
    { id: "petition",
      text: "A petition urging the City Council not to change the name of Main street was filed with " +
            "the City Council yesterday. The petition is signed by about 1500 persons and is headed " +
            "by President J. A. Graves of the Farmers & Merchants National Bank.",
      note: "Headline: \"1500 Fight New Main St. Name.\" \"Yesterday\" = Oct. 17, 1927." },

    { id: "graves",
      text: "Mr. Graves pointed out that the petition is not signed by people at so much a head, but " +
            "actual property owners on Main street or people doing business thereon.",
      note: "An 1920s distinction between a paid signature drive and a property owners' petition." },

    { id: "withheld",
      text: "The drafting of an ordinance changing the name of Main street to Huntington boulevard " +
            "was ordered by the former council, but the measure was withheld.",
      note: "★★ ORDERED, DRAFTED, WITHHELD. The 1927 change never became law." },

    { id: "engineering",
      text: "Because Main street is so-named in a number of descriptions of property affected by " +
            "improvements now under way or proposed for the near future, the city engineering " +
            "department has requested that no change be made in the name for the present.",
      note: "★ Street-improvement law defeats a renaming — third instance in this corpus." },

    { id: "judge-james",
      text: "Judge William P. James, of the United States District Court, also asked that no change " +
            "be made in the name. In his letter he declared: \"Main street is associated in both a " +
            "sentimental and commercial way with the city's life from its earliest day.\"",
      note: "The word before \"earliest\" is damaged in the scan; \"its\" from context." },

    { id: "cantwell",
      text: "The tendency of the present day to change street names as a means of paying tribute to " +
            "the memory of some distinguished citizens tends to mar the historic connection between " +
            "the old and the new.",
      note: "★ The Right Rev. John J. Cantwell, bishop of Los Angeles and San Diego, quoted in part " +
            "by the paper." }
  ],

  rows: []
};
