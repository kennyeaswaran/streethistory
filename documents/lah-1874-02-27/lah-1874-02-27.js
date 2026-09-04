// Herald report of the Feb. 26, 1874 council action renaming Calle de los
// Chapules ("Grasshopper Street") to Pearl Street — property owners'
// petition, over a rival "Union Avenue" proposal. A dated newspaper report
// of the transition itself, so it may carry a change row (§5).

module.exports = {
  id: "lah-1874-02-27",
  title: "Los Angeles Herald, “City and Suburbs,” Feb. 27, 1874 (council renames Grasshopper St → Pearl St)",
  shortTitle: "the Feb. 1874 council action (Herald report)",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH18740227.2.10",
  transcription: null,

  date: { on: "1874-02-26" },
  form: "textual",
  type: "news-report",
  attests: "built-by",
  completeness: "incidental",
  coverage: [[34.065, -118.275], [34.065, -118.255],
             [34.035, -118.255], [34.035, -118.275]],
  sweptFully: true,                 // the one renaming this item reports
  sweptFor: null,
  readBy: "human",

  rows: [
    { kind: "change", from: "chapules", to: "pearl",
      street: "Figueroa Street", fromCross: null, toCross: "Pico Boulevard",
      mechanism: "renaming" }
  ]
};
