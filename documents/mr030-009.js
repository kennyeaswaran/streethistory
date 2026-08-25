// Wolfskill Orchard Tract — surveyed Jul.–Aug. 1887 by J.H. Dockweiler,
// recorded Jan. 11, 1888. Five sheets; the final sheet shows "Georgia St"
// just east of Alameda, in line with Third St's alignment across an
// unlabeled gap that is almost certainly Alameda.

module.exports = {
  id: "mr030-009",
  title: "Recorded map: Wolfskill Orchard Tract, M.R. 30-9/13 (surveyed by J.H. Dockweiler, July–Aug. 1887; recorded Jan. 11, 1888)",
  shortTitle: "Wolfskill Orchard Tract map",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR030/MR030-009.pdf",
  transcription: null,

  date: { on: "1887-08" },          // survey completion; recording in the title
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  // Rough footprint of the old Wolfskill ranch between Alameda and Santa Fe,
  // ~3rd to 7th (replace via georef when the sheets are aligned).
  coverage: [[34.0465, -118.2400], [34.0465, -118.2320],
             [34.0355, -118.2320], [34.0355, -118.2400]],
  sweptFully: false,                // only two of the five sheets' streets entered
  sweptFor: ["3rd Street", "Central Avenue"],
  readBy: "instance",

  rows: [
    { kind: "state", name: "georgia-east", asWritten: "Georgia St",
      street: "3rd Street", from: "Alameda Street", to: "Santa Fe Avenue",
      attests: "built-by",
      basis: "alignment" },         // sheet 5 of 5; identified by alignment
                                    // with Third St across the Alameda gap

    { kind: "state", name: "wolfskill-ave", asWritten: "Wolfskill",
      street: "Central Avenue", from: "2nd Street", to: null,
      attests: "built-by",
      basis: "label" }              // on the tract's edge nearest Alameda.
                                    // ⚠ EXTENT UNVERIFIED south of the tract:
                                    // "to: null" (Central's south end) carries
                                    // over the legacy segment's claim, but the
                                    // sheet can only attest its own footprint
                                    // (~3rd–7th). Narrow when this map gets its
                                    // full sweep (Kenny flagged, 2026-08-25).
  ]
};
