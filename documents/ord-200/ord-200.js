// ORDINANCE NO. 200 (OLD SERIES) — "An Ordinance changing the name of Wilhart
// street to Hayes street, and of Sumner street to Walnut street." Adopted
// November 10, 1885, approved November 16, published in the Los Angeles Daily
// Herald November 17, 1885. Two renamings, both qualified by a tract.
//
// ⚠⚠ NO ROWS. None of the four names has an entity in `names.js`: there is no
// `wilhart`, no `hayes`, no `sumner` (`sumner-place` is a different thing, a
// place off Bellevue Avenue that Res. 480 grades) and no `walnut` (`willow`,
// `spruce` and `tulip` are the Arts District tree set and none of them is this).
// The ground is east of the river and not in the project's `dtla` extract. See
// TASK.md.
//
// ⭐ WHAT IT IS GOOD FOR ANYWAY: a dated, numbered pair of names on the Pioneer
// Building Association tract, with an extent for both successors from this
// volume's own resolutions — Res. 408 grades **Hayes street from Hoff to Kuhrts
// street** and Res. 415 grades **Walnut street from Hoff street to Kuhrts
// street**. Two parallel streets between the same pair of crosses, which places
// the tract on the east-side approach where Hoff, Kuhrts and Chavez streets run.
//
// ⚠ SERIES. Ordinance No. 200 of the OLD SERIES. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from a contrast-normalised 200 dpi render of PDF page 130 of
// documents/teed-1887/teed-1887-vol3.pdf (printed p. 124). Transcribed by eye;
// full text in ord-200-transcription.md. ⚠ One reader, not two.

module.exports = {
  id: "ord-200",
  title: "Ordinance No. 200 (Old Series), “An Ordinance changing the name of Wilhart street to Hayes street, and of Sumner street to Walnut street” — adopted by the Council of the City of Los Angeles November 10, 1885, approved November 16, published November 17, 1885; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 124",
  shortTitle: "Ord. 200 (Old Series), Wilhart → Hayes and Sumner → Walnut (1885)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-200/ord-200-transcription.md",

  date: { on: "1885-11-10" },
  recorded: "1887",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: true,
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance changing the name of Wilhart street to Hayes street, and of Sumner street " +
            "to Walnut street.",
      note: "Both pairs in the enacting title. The spelling “Wilhart” is the city's, repeated in " +
            "Section 1, in the LIST OF ORDINANCES and in the GENERAL INDEX." },

    { id: "sec-1-wilhart-hayes",
      text: "Section 1. That the name of Wilhart street, in the Pioneer Building Association tract, " +
            "be and the same is hereby changed to Hayes street.",
      note: "Qualified by a TRACT, not by cross streets — the same shape as Ord. 207's Childs-tract " +
            "William street, which the corpus records as `extent-unresolved`." },

    { id: "sec-2-sumner-walnut",
      text: "Sec. 2. That the name of Sumner street, in the Pioneer Building Association tract, be " +
            "and the same is hereby changed to Walnut street.",
      note: "⚠ Not `sumner-place`, which is a separate place this volume grades off Bellevue Avenue " +
            "(Res. 480, “Bellevue avenue, from Montreal street to Sumner place”)." },

    { id: "sec-3-publication",
      text: "Sec. 3. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "shall cause the same to be published once in the Los Angeles Daily HERALD, and " +
            "thereupon and thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of November 10, 1885. W. W. ROBINSON, Clerk of the Council " +
            "of the City of Los Angeles. Approved this 16th day of November, 1885. E. F. SPENCE, " +
            "Mayor. Published November 17, 1885." },

    { id: "res-408-415-extents",
      text: "408 To establish grade of Hayes street, from Hoff to Kuhrts street … 495 / 415 To " +
            "establish grade of Walnut street, from Hoff street to Kuhrts street … 502",
      note: "⭐ The LIST OF RESOLUTIONS, page vii. Both successors graded between the same pair of " +
            "cross streets — Hoff and Kuhrts — which places the Pioneer Building Association tract " +
            "on the east-side approach and gives each new name a two-ended extent for the day an " +
            "entity exists to carry it." }
  ],

  // Deliberately empty: none of the four names has an entity. See TASK.md.
  rows: []
};
