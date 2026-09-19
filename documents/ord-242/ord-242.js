// ★★ ORDINANCE NO. 242 (OLD SERIES) — "An Ordinance changing the names of
// certain streets." Adopted July 19, 1886, approved July 22, published in the
// Los Angeles Daily Herald July 23, 1886. Two renamings.
//
//   Sec. 1 — GUADALUPE STREET, from Alameda street to Geary street → DAVIES STREET
//   Sec. 2 — CEMETERY AVENUE, from Temple street to Bellevue avenue → CASTELAR STREET
//
// THE CORPUS ALREADY KNEW THE NUMBER but not the printing. documents/lah-1886-07-23
// transcribes the Herald's copy and its `guadalupe → davies-2nd` row already says
// "Ordinance No. 242, adopted July 19 and approved July 22, 1886". This folder
// holds the city's own printing of it, word for word, and adds the publication
// date the newspaper item did not carry.
//
// ⚠⚠ NO ROWS HERE, ON PURPOSE. Section 1's row exists on lah-1886-07-23, audited
// 2026-09-18 and resolved to 2nd Street from Alameda to Garey. Section 2 has no
// row anywhere and cannot have one: there is no `cemetery-avenue` entity. See
// TASK.md. Same shape as documents/ord-345 in the sibling volume.
//
// ⭐⭐⭐ AND THE "GEARY" QUESTION IS SETTLED, EIGHT MONTHS LATER AND IN THIS SAME
// VOLUME. lah-1886-07-23's row reads Section 1's "Geary street" as GAREY and
// calls it "a spelling inference all the same; Kenny to confirm."
// **Resolution No. 508** (printed p. 598, adopted March 7, 1887) establishes the
// grade of "**Guadalupe street, from Alameda street to Garey street**" — the same
// street, the same two ends, spelled **Garey** six times on the page, and with two
// intermediate crosses the ordinance does not give: **Rose street** and **Hewitt
// street**, both live entities here. So "Geary" in Ord. 242 is a mis-spelling of
// Garey and the corpus's reading is right. Read by eye at PDF 617.
//
// ⚠ AND THE OLD NAME OUTLIVED THE ORDINANCE. Res. 508 still calls the street
// GUADALUPE in March 1887, eight months after Ord. 242 renamed it Davies — the
// same lag this volume shows for Short street (Res. 313, after Ord. 152) and the
// mirror of the Grand/Charity and Winston cases. FINDINGS §7.
//
// ★ CEMETERY AVENUE'S EXTENT IS WORTH HAVING EVEN WITHOUT A ROW: "from Temple
// street to Bellevue avenue". `castelar` and `bellevue-ave` are both live
// entities, and Bellevue avenue was itself made two years earlier out of Short
// and Canal and Reservoir streets (documents/ord-152). The GENERAL INDEX adds
// Res. 425, "Cemetery avenue, grade of, from Sand street", and Res. 311/312,
// "grading of Sand street, from Cemetery avenue" — so Cemetery ran Temple → Sand
// → Bellevue before it became Castelar.
//
// ⚠ SERIES. Ordinance No. 242 of the OLD SERIES. documents/teed-1887/FINDINGS.md §9.
//
// PROVENANCE. Read from contrast-normalised 200 dpi renders of PDF pages 184–185
// of documents/teed-1887/teed-1887-vol3.pdf (printed pp. 178–179). Transcribed by
// eye; full text in ord-242-transcription.md. ⚠ One reader, not two.

module.exports = {
  id: "ord-242",
  title: "Ordinance No. 242 (Old Series), “An Ordinance changing the names of certain streets” (Guadalupe to Davies; Cemetery avenue to Castelar) — adopted by the Council of the City of Los Angeles July 19, 1886, approved July 22, published July 23, 1886; printed in Freeman G. Teed, comp., Compiled Ordinances and Resolutions of the City of Los Angeles, Vol. III (1887), p. 178",
  shortTitle: "Ord. 242 (Old Series), Guadalupe → Davies and Cemetery → Castelar (1886)",
  url: "https://link.gale.com/apps/doc/DT0106633769/MMLP?u=uclosangeles",
  scan: "documents/teed-1887/teed-1887-vol3.pdf",
  transcription: "documents/ord-242/ord-242-transcription.md",

  date: { on: "1886-07-19" },
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
      text: "An Ordinance changing the names of certain streets.",
      note: "Identical to the titles of Ords. 207 and 314 in this volume." },

    { id: "sec-1-guadalupe-davies",
      text: "Section 1. The name of that certain street, extending from Alameda street to Geary " +
            "street, and known as Guadalupe street, be and the same is hereby changed to Davies " +
            "street.",
      note: "⭐ The city's own spelling is **Geary**, exactly as the Herald printed it — so the " +
            "mis-spelling is the council's, not a typesetter's. Resolution No. 508 of this same " +
            "volume spells the same junction **Garey** (see below), which settles it. Qualified by a " +
            "stated from\u2013to; the row is on lah-1886-07-23." },

    { id: "res-508-garey",
      text: "RESOLUTION No. 508. Resolution of the Mayor and Council of the City of Los Angeles to " +
            "establish the grade of Guadalupe street, from Alameda street to Garey street. … " +
            "Section 1. That the grade of Guadalupe street, from Alameda street to Garey street, be " +
            "and the same is hereby established as follows: At the intersection of Guadalupe and " +
            "Alameda streets … At the intersection of Guadalupe and Rose streets … At the " +
            "intersection of Guadalupe and Hewitt streets … At the northwest and southwest corners " +
            "of Guadalupe and Garey streets, the grade shall be 4.50 above the datum plane. … " +
            "adopted by the Council of the City of Los Angeles at its meeting of March 7, 1887.",
      note: "⭐⭐⭐ Printed p. 598, PDF 617; read by eye. **GAREY, six times on one page, for the " +
            "same street between the same two ends.** This is what confirms lah-1886-07-23's " +
            "reading of Ord. 242's “Geary”. It also adds two intermediate cross streets the " +
            "ordinance omits — **Rose street** and **Hewitt street**, both live entities " +
            "(`rose-street`, `hewitt`) — so the Alameda\u2192Garey run is now four points, not two. " +
            "⚠ And the council was still calling the street GUADALUPE in March 1887, eight months " +
            "after renaming it Davies." },

    { id: "sec-2-cemetery-castelar",
      text: "Sec. 2. The name of that certain street, extending from Temple street to Bellevue " +
            "avenue, and known as Cemetery avenue, be and the same is hereby changed to Castelar " +
            "street.",
      note: "⚠ NO ROW ANYWHERE IN THE CORPUS: there is no `cemetery-avenue` entity, so the `from` " +
            "does not resolve. The extent is stated and usable the moment one exists — Temple street " +
            "to Bellevue avenue. See TASK.md. The GENERAL INDEX adds Res. 425 (“Cemetery avenue, " +
            "grade of, from Sand street”) and Res. 311–312 (“Sand street, from Cemetery avenue”)." },

    { id: "sec-3-publication",
      text: "Sec. 3. The Clerk of the Council shall certify to the passage of this ordi nance, and " +
            "cause the same to be published once in the Los Angeles Daily HERALD, and thereupon and " +
            "thereafter it shall take effect and be in force.",
      note: "“ordi nance” is broken across the line without a hyphen in the book." },

    { id: "certification",
      text: "I hereby certify that the forgoing ordinance was adopted by the Council of the City of " +
            "Los Angeles, at its meeting of July 19, 1886. W. W. ROBINSON, Clerk of the Council of " +
            "the City of Los Angeles. Approved this 22d day of July, 1886. E. F. SPENCE, Mayor. " +
            "Published July 23, 1886.",
      note: "“forgoing” is the book's. ⚠ Ordinance No. 241 on the facing page carries “Published " +
            "July 24, 1886” — the earlier ordinance published a day later than this one. One of the " +
            "two is a slip; recorded, not resolved." }
  ],

  // Deliberately empty. Sec. 1's row is on documents/lah-1886-07-23; Sec. 2 has
  // no entity to hang a row on. See TASK.md.
  rows: []
};
