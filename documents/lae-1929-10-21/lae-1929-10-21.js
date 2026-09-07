// ★★ A RESTORATION, and the model case for the rule in Kenny's decision log (2026-08-24)
// that **a revived name RESUMES its old entity** rather than starting a new one. The
// paper's own word is "reverts", and the ordinance is described as changing the name
// "**back to**" East Rose Hill drive.
//
// So the sequence is: East Rose Hill drive → Esmeralda street → East Rose Hill drive,
// and under MODEL-SPEC §3 that is ONE entity with three `spellings[]` periods, not two
// entities. This document is the clearest warrant in the corpus for that reading.
//
// The petition was **100 per cent** — every property owner. Set that beside
// documents/dnla-1932-03-22, where 60% of frontage opposed a change and lost, and
// documents/lah-1926-06-08, where 74% opposed. Unanimity is what actually moves a
// council; a majority does not.
//
// QUALIFIED: Raynol street to Topaz street.
//
// STAGE 2 — RECOMMENDED by the city planning committee. The earlier change, from East
// Rose Hill drive TO Esmeralda street, is not in hand and should be searched for.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lae-1929-10-21",
  title: "Los Angeles Examiner, Oct. 21, 1929 — \"'Esmeralda' Reverts to 'East Rose Hill'\": a 100 per cent petition to restore the former name",
  shortTitle: "Esmeralda street back to East Rose Hill drive",
  url: "https://cdnc.ucr.edu/?a=d&d=LAE19291021.1.12",
  scan: "documents/lae-1929-10-21/lae-1929-10-21-clip.jpg",
  transcription: null,

  date: { before: "1929-10-21" },
  recorded: "1929-10-21",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.1, -118.22], [34.1, -118.15],
             [34.03, -118.15], [34.03, -118.22]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "reverts",
      text: "The city planning committee has recommended that the city engineer be directed to " +
            "prepare an ordinance changing the name of Esmeralda street back to East Rose Hill drive " +
            "between Raynol street and Topaz street. A 100 per cent petition favored restoring the " +
            "former name.",
      note: "★★ \"back to\" — a RESTORATION. 100 per cent petition. QUALIFIED: Raynol to Topaz." }
  ],

  rows: []
};
