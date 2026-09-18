// ORDINANCE NO. 169111 — "An Ordinance of the City of Los Angeles changing the
// names of Brooklyn Avenue between Indiana Street and Bridge Street; Macy Street
// between Bridge Street and New High Street; and Sunset Boulevard between Alameda
// Street and Los Angeles Street and between North Main Street and Figueroa Street
// and establishing the same as Cesar E. Chavez Avenue." Introduced Oct. 13, 1993,
// passed Oct. 22, 1993, approved Oct. 29, 1993; published in the Los Angeles
// Daily Journal Nov. 3 and (republished "due to paper error") Nov. 4, 1993;
// EFFECTIVE MARCH 31, 1994 by its own Sec. 4. Council File 93-0907.
//
// So the date everyone gives — Mar. 31, 1994 — is the effective date, written
// into the ordinance; the act is Oct. 1993. The Clerk's index: Alatorre's motion
// May 4, 1993 (Sunset, Macy and Brooklyn "between Figueroa and Indiana"); amended
// May 11 to send it through the Engineer under Div. 19 of the Administrative
// Code; Engineer's report Sept. 2, 1993; PW Committee report adopted Oct. 13 "to
// APPROVE name change from Brooklyn Ave, Macy St & Sunset Blvd bet Indiana St &
// Figueroa St to Cesar E Chavez Ave … effective *3-31-94"; ordinance adopted
// Oct. 22. The same council action asked Cultural Heritage to designate the
// Brooklyn Avenue Neighborhood Corridor (Cummings to Mott) a Historic-Cultural
// Monument, done Mar. 8, 1994. No County action was needed for this ordinance's
// ground: every stretch it names is a city street, per its own text.
//
// THREE INSTRUMENTS IN ONE, and each section states an extent. The shopping list
// expected the Macy change to be whole-name; it is not — Sec. 2 says "between
// Bridge Street and New High Street". Per RENAMING-SOURCES §2c, an extent in the
// text is never read as unqualified.
//
// ⚠ ALL THREE ROWS ARE `extent-unresolved`, deliberately. On the modern extract
// New High Street crosses Cesar Chavez WEST of North Main (lng -118.2395 against
// -118.2379), so Macy's stated west end (New High) and Sunset's stated east end
// (North Main) overlap by a block. Both cannot be read as stretches of today's
// alignment; one of them ran on ground that is not the modern street, which is
// exactly rule 2's trap. Los Angeles Street does not meet the modern avenue at
// all (185 m), and Bridge Street is beyond the extract's east edge. Resolving
// these needs the Engineer's report and its exhibit map in the complete council
// file (172 MB): https://cityclerk.lacity.org/onlinedocs/1993/93-0907.pdf
//
// Brooklyn Avenue (Sec. 1) has no entity and is east of the river, beyond the
// map; it is excerpted and not rowed.
//
// PROVENANCE. Read by an instance, 2026-09-18, from the City Clerk's PDF (two
// pages), rendered and read and checked against its OCR layer. The PDF is in this folder as
// ord-169111.pdf (downloaded by Kenny 2026-09-18; the Clerk's host refuses both
// shells), with 150 dpi page renders ord-169111-p1.png and -p2.png. Source:
// https://cityclerk.lacity.org/onlinedocs/1993/93-0907_ORD_169111_03-03-1994.pdf
// (51,956 bytes, sha256 2bcd97842c18a871…). Index record:
// https://cityclerk.lacity.org/lacityclerkconnect/index.cfm?fa=ccfi.viewrecord&cfnumber=93-0907

module.exports = {
  id: "ord-169111",
  title: "Ordinance No. 169111, “An Ordinance of the City of Los Angeles changing the names of Brooklyn Avenue between Indiana Street and Bridge Street; Macy Street between Bridge Street and New High Street; and Sunset Boulevard between Alameda Street and Los Angeles Street and between North Main Street and Figueroa Street and establishing the same as Cesar E. Chavez Avenue” — passed Oct. 22, 1993, approved Oct. 29, 1993, effective Mar. 31, 1994 (Council File 93-0907)",
  shortTitle: "Ord. 169111, Brooklyn, Macy and Sunset to Cesar E. Chavez Avenue",
  url: "https://cityclerk.lacity.org/onlinedocs/1993/93-0907_ORD_169111_03-03-1994.pdf",
  scan: "documents/ord-169111/ord-169111.pdf",   // page renders beside it: ord-169111-p1.png, ord-169111-p2.png (150 dpi)
  transcription: null,

  // `date` is the council's passage; approval Oct. 29, publication Nov. 3-4,
  // 1993; in force Mar. 31, 1994 (Sec. 4).
  date: { on: "1993-10-22" },
  recorded: "1993-10-29",
  form: "textual",
  type: "ordinance",
  attests: "built-by",
  completeness: "exhaustive-in-scope",
  // Figueroa east to Indiana Street, with margin — the scope of the instrument.
  coverage: [[34.0700, -118.2500], [34.0700, -118.1880],
             [34.0380, -118.1880], [34.0380, -118.2500]],
  sweptFully: false,                // read in full by an instance; the sweep is Kenny's (rule 5)
  sweptFor: [],
  readBy: "instance",

  excerpts: [
    { id: "title",
      text: "An Ordinance of the City of Los Angeles changing the names of Brooklyn Avenue " +
            "between Indiana Street and Bridge Street; Macy Street between Bridge Street and " +
            "New High Street; and Sunset Boulevard between Alameda Street and Los Angeles " +
            "Street and between North Main Street and Figueroa Street and establishing the " +
            "same as Cesar E. Chavez Avenue." },
    { id: "sec-1",
      text: "Section 1. The City Council of the City of Los Angeles finds that the public " +
            "interest, convenience and necessity require that the name of that certain " +
            "public street, of variable width, lying between Indiana Street and Bridge Street " +
            "which, or any portion of which, may be or may have been named or known as or " +
            "called Brooklyn Avenue be and the same is hereby changed to and established as " +
            "Cesar E. Chavez Avenue." },
    { id: "sec-2",
      text: "Sec. 2. The City Council of the City of Los Angeles finds that the public " +
            "interest, convenience and necessity require that the name of that certain " +
            "public street, of variable width, lying between Bridge Street and New High " +
            "Street which, or any portion of which, may be or may have been named or known " +
            "as or called Macy Street be and the same is hereby changed to and established " +
            "as Cesar E. Chavez Avenue." },
    { id: "sec-3",
      text: "Sec. 3. The City Council of the City of Los Angeles finds that the public " +
            "interest, convenience and necessity require that the name of that certain " +
            "public street, of variable width, lying between Alameda Street and Los Angeles " +
            "Street and between North Main Street and Figueroa Street which, or any portion " +
            "of which, may be or may have been named or known as or called Sunset Boulevard " +
            "be and the same is hereby changed to and established as Cesar E. Chavez Avenue." },
    { id: "sec-4",
      text: "Sec. 4. This ordinance shall become effective on March 31, 1994." },
    { id: "certification",
      text: "I hereby certify that the foregoing ordinance was introduced at the meeting of " +
            "the Council of the City of Los Angeles OCT 13 1993 and was passed at its meeting " +
            "of OCT 22 1993 … Approved OCT 29 1993 … Mayor … File No. 93-0907",
      note: "Printed form with stamped dates; signatures elided. Beneath the file number, in " +
            "hand: \"LAJ DJC 8202114 11/3/93 11/4/93\" and \"Republished due to paper error.\" " +
            "Approved as to form Sept. 17, 1993; description approved by City Engineer Robert S. " +
            "Horii Sept. 15, 1993." }
  ],

  rows: [
    { kind: "change", from: "macy-street", to: "cesar-e-chavez-avenue",
      scope: "extent-unresolved",
      wording: "Macy Street between Bridge Street and New High Street",
      says: ["title", "sec-2", "sec-4", "certification"],
      mechanism: "renaming",
      confirmed: true,   // Kenny, 2026-09-18
      note: "Ordinance No. 169111, passed Oct. 22, 1993 and approved Oct. 29, 1993; in force Mar. 31, 1994." },

    { kind: "change", from: "sunset-boulevard", to: "cesar-e-chavez-avenue",
      scope: "extent-unresolved",
      wording: "Sunset Boulevard between North Main Street and Figueroa Street",
      says: ["title", "sec-3", "sec-4", "certification"],
      mechanism: "renaming",
      confirmed: true,   // Kenny, 2026-09-18
      note: "Ordinance No. 169111, passed Oct. 22, 1993 and approved Oct. 29, 1993; in force Mar. 31, 1994." },

    { kind: "change", from: "sunset-boulevard", to: "cesar-e-chavez-avenue",
      scope: "extent-unresolved",
      wording: "Sunset Boulevard between Alameda Street and Los Angeles Street",
      says: ["title", "sec-3", "sec-4", "certification"],
      mechanism: "renaming",
      confirmed: true,   // Kenny, 2026-09-18
      note: "Ordinance No. 169111, passed Oct. 22, 1993 and approved Oct. 29, 1993; in force Mar. 31, 1994." }
  ]
};
