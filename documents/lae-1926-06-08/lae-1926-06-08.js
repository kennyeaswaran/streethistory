// A CHANGE OF SUFFIX ONLY — avenue to drive, same name. The corpus has a few of these
// (Arlington court → Arlington drive, Pasadena 1899; Adams street → Adams Boulevard,
// documents/lae-1928-08-06; Main street → Huntington **boulevard** vs **drive**), and
// they matter for the model: is "Waverly Avenue" → "Waverly Drive" a new naming lineage
// or a respelling within the same entity?
//
// The answer under MODEL-SPEC §3 is that this is one entity with two `spellings[]`
// periods, not two entities — the name did not change, the generic term did. Worth
// stating explicitly in the handbook, because the newspaper language ("ordinance
// changing the name of") makes it look like a renaming.
//
// QUALIFIED: Farwell avenue to Rowena avenue. Waverly Drive still runs in Silver Lake.
//
// STAGE 1 — UNDER CONSIDERATION.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lae-1926-06-08",
  title: "Los Angeles Examiner, June 8, 1926 — \"'Waverly Drive' Asked\": ordinance under consideration for Waverly avenue between Farwell and Rowena",
  shortTitle: "Waverly avenue to Waverly Drive",
  url: "https://cdnc.ucr.edu/?a=d&d=LAE19260608.1.7",
  scan: "documents/lae-1926-06-08/lae-1926-06-08-clip.jpg",
  transcription: null,

  date: { before: "1926-06-08" },
  recorded: "1926-06-08",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.14, -118.32], [34.14, -118.24],
             [34.06, -118.24], [34.06, -118.32]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "waverly",
      text: "City Council has under consideration an ordinance changing the name of Waverly avenue " +
            "between Farwell avenue and Rowena avenue to \"Waverly Drive.\"",
      note: "Headline: \"'Waverly Drive' Asked.\" A suffix change, not a renaming." }
  ],

  rows: []
};
