// ORDINANCE NO. 317 (OLD SERIES) — "An Ordinance changing the name of Deepwater
// street." Adopted June 13, 1887, approved June 17, published in the Los Angeles
// Daily Tribune June 18, 1887. **The last ordinance in the volume.**
//
// ⭐ A QUALIFIED CHANGE WITH BOTH ENDS NAMED, which is rarer in this volume than
// it ought to be: "that portion of Deepwater street … between Beaudry avenue and
// Philadelphia street … changed to Bartlett street". Only Ord. 207 §1 and
// Ord. 242 §1 state their extents as cleanly.
//
// ⚠⚠ NO ROW. Neither `deepwater` nor `bartlett` exists in `names.js`, so neither
// end of the change resolves. Both cross streets DO exist — `beaudry-avenue` and
// `philadelphia-st` — so the day the two entities are minted this is a
// `scope: "extent"` row with its from and to already written down. See TASK.md.
//
// ★ WHERE IT IS. Res. 334 and 336 grade "Montreal street, from Sand and
// Deepwater streets"; Res. 373 grades "Philadelphia street, from Bellevue
// avenue". So Deepwater ran on the Beaudry hillside among Montreal, Sand,
// Bellevue and Virgin — the same ground as Grasshopper Street (Ord. 232) and the
// western end of Bellevue Avenue (Ord. 152).
//
// ⚠ SERIES. Ordinance No. 317 of the OLD SERIES, and the last of the run this
// volume prints. Teed 1889, Vol. IV begins at No. 318, adopted June 20, 1887 —
// one week later. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from a contrast-normalised 200 dpi render of PDF page 300 of
// documents/teed-1887/teed-1887-vol3.pdf (printed p. 293). Transcribed by eye;
// full text in ord-317-transcription.md. ⚠ One reader, not two.

module.exports = {
  id: "ord-317",
  title: "Ordinance No. 317 (Old Series), “An Ordinance changing the name of Deepwater street” (the portion between Beaudry avenue and Philadelphia street, to Bartlett street) — adopted by the Council of the City of Los Angeles June 13, 1887, approved June 17, published June 18, 1887; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 293",
  shortTitle: "Ord. 317 (Old Series), Deepwater Street becomes Bartlett Street (1887)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-317/ord-317-transcription.md",

  date: { on: "1887-06-13" },
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
      text: "An Ordinance changing the name of Deepwater street.",
      note: "The title names only the old street; the new name and the extent are in Section 1." },

    { id: "sec-1",
      text: "Section 1. That the name of that portion of Deepwater street, in the City of Los " +
            "Angeles, between Beaudry avenue and Philadelphia street, be changed to Bartlett street.",
      note: "⭐ QUALIFIED, with both ends named and both cross streets live in the corpus " +
            "(`beaudry-avenue`, `philadelphia-st`). The row is blocked only on the two missing " +
            "entities for Deepwater and Bartlett — see TASK.md." },

    { id: "sec-2",
      text: "Sec. 2. The Clerk of the Council shall certify to the passage of this ordinance, and " +
            "cause the same to be published once in the Los Angeles Daily TRIBUNE, and thereupon and " +
            "thereafter it shall take effect and be in force." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the City of " +
            "Los Angeles at its meeting of June 13, 1887. FREEMAN G. TEED, Clerk of the Council of " +
            "City of Los Angeles. Approved this 17th day of June, 1887. W. H. WORKMAN, Mayor. " +
            "Published June 18, 1887.",
      note: "The last certification in the volume. Ordinance No. 318, the first in Teed 1889, Vol. " +
            "IV, was adopted a week later on June 20, 1887 — so the two volumes butt end to end with " +
            "no gap." },

    { id: "res-334-336-deepwater",
      text: "334 Accepting grading of Montreal street, from Sand and Deepwater streets … 420 / " +
            "336 Ordering payment for grading Montreal street, from Sand … 422",
      note: "⭐ The LIST OF RESOLUTIONS, page iv. The only other sighting of Deepwater Street in the " +
            "volume, and it places it: at Montreal Street near Sand Street, on the Beaudry " +
            "hillside." }
  ],

  // Deliberately empty: neither `deepwater` nor `bartlett` exists. See TASK.md.
  rows: []
};
