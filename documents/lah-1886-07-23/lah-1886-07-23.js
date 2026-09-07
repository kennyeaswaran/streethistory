// ORDINANCE NO. 242, IN FULL — two qualified changes, both on ground this
// project has entities for.
//
// ★ GUADALUPE, ALAMEDA TO GEARY, BECOMES DAVIES STREET. The `guadalupe` entity
// is lettered on the 1875 Thomas Tract along 3rd Street's Alameda–Santa Fe
// stretch and had no end date. It has one now — and a successor that itself did
// not last: the Oct. 1890 ordinance changes Davies Street to Second Street
// (documents/lah-1890-10-28). Guadalupe → Davies → Second, in four years.
//
// ★ CEMETERY AVENUE, TEMPLE TO BELLEVUE, BECOMES CASTELAR STREET. Not a coining:
// Castelar was created by the Feb. 1874 ordinance out of Bull Street
// (documents/ord-1874-02-26). This is the name being extended north over a second
// street twelve years later — and in July 1894 a portion of Castelar becomes Hill
// Street (documents/lah-1894-07-24), which is the beginning of the end of it.
//
// ⚠ CEMETERY AVENUE IS NOT ETERNITY STREET. Asked and settled 2026-09-07 (Kenny's
// hypothesis, on the Wasp/Hornet precedent that the 1849 survey's English labels do
// not always translate the Spanish). Three reasons it fails: (a) the survey letters
// that street ETERNITY ST. *and* CALLE DE LA ETERNIDAD — the halves agree, unlike
// HORNET/AVISPAS; (b) our alignment puts `eternity` on the BROADWAY corridor and
// `bull`/Castelar on the HILL corridor, ~120 m apart at Temple, and Cemetery Avenue
// became Castelar; (c) "Temple to Bellevue" is not a fingerprint — documents/
// lah-1897-12-07 has "Fudigar street, Temple to Bellevue, changed to Sugg street",
// a third street on the same stretch. Two burying grounds, two streets named for
// them. Full reasoning in handbook/research-leads.md.
//
// NO ROWS. Neither extent resolves: no Geary Street or Cemetery Avenue is in the
// OSM extract, and the Temple–Bellevue stretch of Castelar has no state row here.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1886-07-23",
  title: "Ordinance No. 242, “An ordinance changing the names of certain streets” — adopted July 19, 1886, approved July 22, published in the Los Angeles Herald July 23, 1886",
  shortTitle: "Ord. 242, Guadalupe → Davies and Cemetery → Castelar",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18860723.1.1",
  scan: "documents/lah-1886-07-23/lah-1886-07-23-clip.jpg",
  transcription: null,

  date: { on: "1886-07-19" },
  recorded: "1886-07-23",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  coverage: [[34.135, -118.325], [34.135, -118.155],
             [33.995, -118.155], [33.995, -118.325]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "title",
      text: "An ordinance changing the names of certain streets." },

    { id: "sec-1-guadalupe-davies",
      text: "SECTION 1. The name of that certain street, extending from Alameda street to Geary " +
            "street and known as Guadalupe street, be and the same is hereby changed to Davies " +
            "street." },

    { id: "sec-2-cemetery-castelar",
      text: "SEC. 2. The name of that certain street, extending from Temple street to Bellevue avenue " +
            "and known as Cemetery avenue, be and the same is hereby changed to Castelar street." },

    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was adopted by the Council of the city of " +
            "Los Angeles at its meeting of July 19th, A. D., 1886. W. W. ROBINSON, Clerk of the " +
            "Council of the City of Los Angeles. Approved this 22nd day of July, A. D. 1886. E. F. " +
            "SPENCE, Mayor." }
  ],

  rows: []
};
