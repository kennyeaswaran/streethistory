// A NAMESAKE WHO ASKED FOR IT HERSELF — and a small case study in how a duplicate-name
// problem can be turned to a private end.
//
// The sequence, as the paper tells it:
//   1. Claire drive conflicts with a similarly-named street in the San Fernando valley.
//   2. The city proposes "Clairaly drive" as the fix — one of the ugliest coinages in
//      this corpus, and a good example of what the engineer's office did when it needed
//      a unique string rather than a meaningful name.
//   3. Marion Davies, through her attorney Alexander T. Sokolow, files a PROTEST against
//      "Clairaly."
//   4. Her letter, presented under her legal name **Marion Douras**, asks that "Davies
//      drive" be established instead.
//   5. The council authorizes the ordinance — for Claire drive AND Linda drive, the
//      latter "because it is an extention to Claire drive."
//
// So a renaming forced by duplication became a commemorative naming because the person
// commemorated objected to the alternative. Worth remembering that a protest against a
// proposed name is itself a naming mechanism.
//
// STAGE 2 — AUTHORIZED, not passed. "extention" is the paper's spelling.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "dnla-1933-09-06",
  title: "Daily News (Los Angeles), Sept. 6, 1933 — council authorizes an ordinance changing Claire drive and Linda drive to Davies drive, at Marion Davies' request",
  shortTitle: "Claire and Linda drives to Davies drive",
  url: "https://cdnc.ucr.edu/?a=d&d=DNLA19330906.1.15",
  scan: "documents/dnla-1933-09-06/dnla-1933-09-06-clip.jpg",
  transcription: null,

  date: { before: "1933-09-06" },
  recorded: "1933-09-06",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.14, -118.45], [34.14, -118.34],
             [34.05, -118.34], [34.05, -118.45]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "gratified",
      text: "Marion Davies' desire to have a street named in her honor yesterday was gratified by the " +
            "city council when that body authorized preparation of an ordinance changing Claire drive " +
            "and also Linda drive in the vicinity of Beverly Hills to \"Davies drive.\"",
      note: "Headline: \"Marion Davies to Have L. A. Street Named After Her.\" \"Yesterday\" = Sept. 5, " +
            "1933." },

    { id: "clairaly",
      text: "The motion picture actress, through her attorney, Alexander T. Sokolow, recently filed a " +
            "protest with the city council against suggestions that Claire drive be changed to " +
            "\"Clairaly drive,\" because of a conflict with a street of a similar name in the San " +
            "Fernando valley.",
      note: "★ \"Clairaly drive\" — a coined unique string, proposed and rejected. The duplicate is in " +
            "the San Fernando valley." },

    { id: "douras",
      text: "Her letter to the council, which was presented under the actress' legal name, Marion " +
            "Douras, asked that \"Davies drive\" be established as the name of the street.",
      note: "Legal name Marion Douras; stage name Davies is the one asked for." },

    { id: "linda",
      text: "Linda drive was included in the change because it is an extention to Claire drive.",
      note: "\"extention\" as printed." }
  ],

  rows: []
};
