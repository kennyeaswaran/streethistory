// Los Angeles Council minutes, Monday Feb. 3, 1890, ledger p. 240 — the
// PETITION that became the Fort Street renaming, and the source for a claim
// this project had been carrying unsourced for months.
//
// NO ROWS, for the reason the Feb. 1874 petition has none
// (documents/lah-1874-02-13/): a petition is a request, and only the
// instrument changes anything. What it does is date stage 1 and name the
// petitioner, which turns "on a petition by the printer Fred Lind Alles" —
// prose in names.js with nothing behind it — into a sourced fact. The clerk
// writes **Fred L. Alles**.
//
// IT ALSO TIGHTENS THE BRACKET TO SEVENTEEN DAYS. The petition is referred on
// Feb. 3; by Feb. 20 the Herald reports the ordinance signed and in force
// (documents/lah-1890-02-20/). Whatever ordinance did it passed inside that
// window — and the council minutes for those dates are missing from the City
// Clerk's holdings, which is why this project has the request and the outcome
// but not the act (handbook/RENAMING-SOURCES.md §2a).
//
// Note where it was sent: the **Board of Public Works**, not the City Attorney.
// The Feb. 1874 petition went to a special committee "in conjunction with the
// City Attorney" to draft an ordinance. Two different routes to the same kind
// of act, sixteen years apart; worth knowing when hunting a third.
//
// PROVENANCE. Scanned minutes supplied by Kenny, 2026-09-04, from
// https://clerkapps.lacity.org/oldcfidocs/ — the Feb. 3, 1890 volume, PDF
// p. 40. Clip beside this file. Transcribed by Claude from the clip; the
// entry is three lines of clear round hand and the reading is not in doubt.
// Kenny read the volume through and reports nothing else bearing on this.

module.exports = {
  id: "min-1890-02-03",
  title: "Los Angeles Council minutes, Feb. 3, 1890 — petition No. 126 of Fred L. Alles et al. to change the name of Fort Street to Broadway (ledger p. 240)",
  shortTitle: "the 1890 Fort Street petition (council minutes)",
  url: "https://clerkapps.lacity.org/oldcfidocs/",
  scan: "documents/min-1890-02-03/min-1890-02-03-clip.jpg",
  transcription: null,

  date: { on: "1890-02-03" },
  form: "textual",
  // The genre is council proceedings, not an ordinance: this volume records a
  // petition being received and referred, and enacts nothing.
  type: "minutes",
  // It attests that a street called Fort existed to be petitioned about, and
  // nothing else — no extent, so nothing here can be drawn.
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.075, -118.275], [34.075, -118.235],
             [34.020, -118.235], [34.020, -118.275]],
  sweptFully: true,                 // the one item; Kenny read the volume through
  sweptFor: [],
  readBy: "human",

  excerpts: [
    { id: "petition-126",
      text: "126. From Fred L. Alles et al, asking that the name of Fort street be " +
            "changed to Broadway. Referred to the Board of Public Works." }
  ],

  rows: []
};
