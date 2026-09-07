// A SMALL ONE, kept for two reasons.
//
// First, the paper says out loud what most of these renamings are quietly about:
// "Dear old Freitas terrace may be swanked up a bit today by the City Council." A
// Spanish or Portuguese surname is replaced by a British-sounding place name in the
// Hollywood Hills. That is a pattern worth watching for across the corpus, not a
// conclusion drawn from one instance.
//
// Second, the extent is described the way we least like: "Freitas lies between the
// northwest end and southeast boundary line of the Laurel Canyon addition" — a tract
// boundary, not cross streets, exactly as in documents/lah-1898-06-12 thirty-seven
// years earlier. `extent-unresolved` until the Laurel Canyon addition's lines are found.
//
// STAGE 2 — SCHEDULED FOR A VOTE.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "dnla-1935-09-10",
  title: "Daily News (Los Angeles), Sept. 10, 1935 — \"Swanky Name Up To Council\": Freitas terrace to be voted on for Londonderry place",
  shortTitle: "Freitas terrace to Londonderry place",
  url: "https://cdnc.ucr.edu/?a=d&d=DNLA19350910.1.8",
  scan: "documents/dnla-1935-09-10/dnla-1935-09-10-clip.jpg",
  transcription: null,

  date: { before: "1935-09-10" },
  recorded: "1935-09-10",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.14, -118.42], [34.14, -118.34],
             [34.06, -118.34], [34.06, -118.42]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "swanked",
      text: "Topping, what? Dear old Freitas terrace may be swanked up a bit today by the City " +
            "Council, which will vote on an ordinance changing the name to Londonderry place.",
      note: "Headline: \"Swanky Name Up To Council.\" The paper's own framing of the change." },

    { id: "laurel-canyon",
      text: "Oh, where is it? Well, the ordinance reads that Freitas lies between the northwest end " +
            "and southeast boundary line of the Laurel Canyon addition.",
      note: "Extent by tract boundary — `extent-unresolved`." }
  ],

  rows: []
};
