// ★★ THE HISTORIC-PRESERVATION ARGUMENT, stated by a Los Angeles mayor in 1932 — the
// clearest statement of *why street names matter* anywhere in this corpus, and worth
// reading in full before writing any public note about renaming:
//
//   "The elimination of old landmarks or historical names in a city with a background
//   of color and romance, such as we have here in Los Angeles, is not for the best
//   interests of the people. History has been enriched through the preservation of
//   street names which carry a distinctive significance, and should be encouraged."
//
// Mayor John C. Porter also states the DESTINATION principle, which is a naming rule we
// can use: "We have streets leading from Los Angeles carrying such names as Wilmington
// boulevard, Santa Monica boulevard, Long Beach boulevard, Redondo boulevard and Venice
// boulevard — all indicating the destination of the highway." Pasadena avenue belongs
// to that family, and so does Pasa Hambra boulevard
// (documents/dnla-1924-01-04).
//
// The ordinance covers TWO streets, both QUALIFIED:
//   Pasadena avenue, Avenue 39 to York boulevard → North Figueroa street
//   Annandale boulevard, York junction to Colorado boulevard → North Figueroa street
//
// The Downtown Business Men's association's protest supplies a hard number: of 34,000
// feet of frontage on Pasadena avenue from the river to the city limits, **20,400 feet
// has already signed as opposing**. That is 60% by frontage — and it still lost. See
// documents/dnla-1932-03-23.
//
// The veto was overridden the next day. Pasadena Avenue is North Figueroa Street today.
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "dnla-1932-03-22",
  title: "Daily News (Los Angeles), Mar. 22, 1932 — Mayor Porter vetoes the Pasadena avenue renaming; the Downtown Business Men's association protests",
  shortTitle: "Mayor Porter vetoes the North Figueroa change",
  url: "https://cdnc.ucr.edu/?a=d&d=DNLA19320322.1.2",
  scan: "documents/dnla-1932-03-22/dnla-1932-03-22-clip.jpg",
  transcription: null,

  date: { before: "1932-03-22" },
  recorded: "1932-03-22",
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.16, -118.24], [34.16, -118.14],
             [34.05, -118.14], [34.05, -118.24]],
  sweptFully: false,
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "the-veto",
      text: "Mayor John C. Porter yesterday announced his veto of an ordinance changing the name of " +
            "Pasadena avenue, between Avenue 39 and York boulevard, and of Annandale boulevard, from " +
            "York junction to Colorado boulevard, to \"North Figueroa street.\" The ordinance recently " +
            "was passed by city council, despite protests of numerous property owners, as well as " +
            "historical and civic groups.",
      note: "Headline: \"Business Men Back Porter in Decision.\" Two QUALIFIED changes to one name." },

    { id: "not-for-best",
      text: "The elimination of old landmarks or historical names in a city with a background of " +
            "color and romance, such as we have here in Los Angeles, is not for the best interests of " +
            "the people. History has been enriched through the preservation of street names which " +
            "carry a distinctive significance, and should be encouraged.",
      note: "★★ Mayor Porter's veto message, quoted by the paper. The historic-preservation case for " +
            "street names, 1932." },

    { id: "destination",
      text: "We have streets leading from Los Angeles carrying such names as Wilmington boulevard, " +
            "Santa Monica boulevard, Long Beach boulevard, Redondo boulevard and Venice boulevard—all " +
            "indicating the destination of the highway.",
      note: "★ THE DESTINATION PRINCIPLE, with five examples named by the mayor." },

    { id: "pasadena-relations",
      text: "Pasadena avenue has been so designated for many years, and, in my opinion, the name " +
            "should not be disturbed. Furthermore, our cordial relations with the city of Pasadena " +
            "should receive careful consideration. . . .",
      note: "Continuation of the veto message." },

    { id: "merchants",
      text: "Declaring that the change is opposed by the property owners affected and will work a " +
            "hardship upon the downtown area, the Downtown Business Men's association yesterday " +
            "transmitted to council a resolution also opposing the ordinance." },

    { id: "the-numbers",
      text: "Whereas, out of a total of 34,000 feet on Pasadena avenue from the river to the city " +
            "limits, a total of 20,400 feet of frontage has already signed as opposing the change, " +
            "and Whereas, the citizens of Pasadena have declared their city will be most adversely " +
            "affected by the change.",
      note: "★ 20,400 of 34,000 feet of frontage opposed — 60% — and the change passed anyway." },

    { id: "resolved",
      text: "Now, therefore, be it resolved by the executive committee of the board of directors of " +
            "the Downtown Business Men's association of Los Angeles that it protest against the " +
            "passage of the ordinance and does hereby urge the honorable city council to reconsider " +
            "and rescind its action in passing the said ordinance in order that the status quo be " +
            "maintained, namely that the name of Pasadena avenue remain as it is." }
  ],

  rows: []
};
