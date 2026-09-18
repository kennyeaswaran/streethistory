// ★★ THE ORDINANCE THAT TURNED THE STREETS SOUTH OF PICO INTO NUMBERS, printed a
// week before it passed (documents/lah-1889-11-13).
//
// TWO LINES ANSWER QUESTIONS THIS PROJECT HAD OPEN. The 1893 Miguel Subdivision
// (documents/mr053-016) letters "16th ST. (formerly Pine St)" and "15th ST.
// (formerly Laura St)", and handbook/research-leads.md carried both predecessors
// as lineages with no entity and no instrument. Here they are:
//
//   • "from Pine and Rowland to Sixteenth street"
//   • "from Laurel and Adele to Fifteenth street"
//
// The first is exact. The second is one letter off — Laurel here, Laura on the
// plat four years later — and worth re-reading the plat before believing.
//
// AND IT IS THE FIRST PUSH OF A CAMPAIGN THAT RAN SEVEN YEARS. The names in this
// list reappear in the Sept. 1896 southwest ordinance (Shafer, Simpson, Janes),
// and the Sept. 1896 petition asks that names be changed "so as to make them
// compare with the names of the streets on the north side of Pico Street"
// (documents/min-1896-09-14). 1889, 1896 and 1897 are one project in three
// pushes.
//
// NOTE THE PAIRING. Almost every number takes two or three streets: California,
// Consuelo, Greenwell and Vejar all become Fourteenth. That is the continuity
// principle of Ordinance No. 48 applied to the numbered grid.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1889-11-06",
  title: "Los Angeles Herald, Nov. 6, 1889, p. 2 — an ordinance changing the names of a number of streets to numbers is read and laid over one week, with the full list printed",
  shortTitle: "the Nov. 1889 numbering list",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18891106.1.2",
  scan: "documents/lah-1889-11-06/lah-1889-11-06-clip.jpg",
  transcription: null,

  date: { before: "1889-11-06" },
  recorded: "1889-11-06",
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
    { id: "laid-over",
      text: "An ordinance changing the names of a number of streets to numbers was read and laid over " +
            "for one week. The ordinance will change the names of streets as follows:" },

    { id: "the-list",
      text: "From California, Consuelo, Greenwell and Vejar to Fourteenth street; from Laurel and " +
            "Adele to Fifteenth street; from Pine and Rowland to Sixteenth street; from Morris and " +
            "Montgomery to Seventeenth street; from Pacheco and Ocean to Eighteenth street; from " +
            "Queen to Twentieth; from York and Locust to Twenty-first street; from King to " +
            "Twenty-second; from Manhattan to Twenty-third; from Jenkins to Twenty-fourth; from " +
            "Kinney to Twenty-fifth; from Rodney, Monroe and Alice to Twenty-seventh street; from " +
            "Montague avenue and Mattie to Twenty-eighth street; from Shaw to Twenty-ninth street; " +
            "from Brooklyn to Thirtieth street; from Seville to Thirty-first street; from Goodman and " +
            "Dana to Thirty-second street; from Aruta to Thirty-third street; from Shafer to " +
            "Thirty-fifth street; from Lanterman and Grace to Thirty-sixth street; from Simpson and " +
            "Edna to Thirty-seventh street; Janes and Keller and Sanbran avenue to Thirty-eighth " +
            "street; Ruby and Ames to Thirty-ninth street; Church street to Lyon street.",
      note: "★ \"from Pine and Rowland to Sixteenth street\" and \"from Laurel and Adele to Fifteenth " +
            "street\" are the predecessors the 1893 Miguel Subdivision names parenthetically." }
  ],

  rows: [
    // Audit 2026-09-18 (handbook/change-rows-audit-2026-09-18.md), bin A.
    // ⚠ TWO-DOCUMENT WARRANT. This list was read on Nov. 5 and LAID OVER; the
    // adoption is documents/lah-1889-11-13, "as published a week ago in the HERALD
    // was read and adopted" — which names no street, so the rows have to live
    // here, where the words are. The row's date is therefore this document's
    // (before Nov. 6), a week before the Nov. 12 adoption.
    // UNQUALIFIED: bare names, no stretches.
    { kind: "change", from: "california-street-14th", to: "fourteenth-street",
      scope: "whole-name",
      says: ["laid-over", "the-list"],
      mechanism: "renaming",
      confirmed: false,
      note: "Read Nov. 5 and adopted Nov. 12, 1889, as printed here; one of four names folded into Fourteenth Street." },
    // The Oct. 1888 committee draft proposed Consuelo → California (lah-1888-10-11);
    // whether Ordinance No. 48 enacted that in May 1889 is unknown (its body is
    // untranscribed). If it did, this row dates Consuelo's end six months late.
    { kind: "change", from: "consuelo", to: "fourteenth-street",
      scope: "whole-name",
      says: ["laid-over", "the-list"],
      mechanism: "renaming",
      confirmed: false,
      note: "Read Nov. 5 and adopted Nov. 12, 1889, as printed here; one of four names folded into Fourteenth Street." },
    { kind: "change", from: "laurel-dtla", to: "fifteenth-street",
      scope: "whole-name",
      says: ["laid-over", "the-list"],
      mechanism: "renaming",
      confirmed: false,
      note: "Read Nov. 5 and adopted Nov. 12, 1889, as printed here, with Adele Street." },
    // `adele-st`, the other half of this clause, gets no row: its only lettering
    // is a vanished trace (mr010-077), so a whole-name change would land nowhere.
    { kind: "change", from: "pine-street-venice", to: "sixteenth-street",
      scope: "whole-name",
      says: ["laid-over", "the-list"],
      mechanism: "renaming",
      confirmed: false,
      note: "Read Nov. 5 and adopted Nov. 12, 1889, as printed here, with Rowland Street." },
    { kind: "change", from: "rouland-street", to: "sixteenth-street",
      scope: "whole-name",
      says: ["laid-over", "the-list"],
      mechanism: "renaming",
      confirmed: false,
      note: "Read Nov. 5 and adopted Nov. 12, 1889, as printed here; the ordinance spells it Rowland." }
  ]
};
