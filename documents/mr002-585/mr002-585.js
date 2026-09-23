module.exports = {
  id: "mr002-585",
  title: "Map of the Bellevue Terrace Tract",
  shortTitle: "Bellevue Terrace Tract",
  url: "https://pw.lacounty.gov/sur/nas/landrecords/misc/MR002/MR002-585.pdf",
  scan: "documents/mr002-585/mr002-585.pdf",
  transcription: null,

  date: { on: "1858-12-20" },
  recorded: "1874-09-10",
  // §4.1a. Whatever this tool saves has a sheet under it — that is what the
  // tool is for — but a loaded document's own declaration wins, so re-saving
  // one this tool should not have opened cannot quietly reclassify it.
  form: "drawn",
  type: "tract-map",
  attests: "planned-by",
  completeness: "incidental",
  readBy: "human",

  // Coverage is the ground this document informs about — the tract boundary,
  // not the sheet edge (MODEL-SPEC §4.4). SCAN PIXELS against alignment.image,
  // so a better alignment carries it along (§4.6).
  coverage: [
    [510, 144], [323, 137], [266, 378], [277, 946],
    [818, 930], [785, 363], [626, 351]
  ],
  alignment: {
    image: "documents/mr002-585/mr002-585-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.050533, -118.264389], note: "map-tool corner (0,0)" },
      { px: [1103, 0], ll: [34.058339, -118.256894], note: "map-tool corner (1103,0)" },
      { px: [0, 1699], ll: [34.040901, -118.249979], note: "map-tool corner (0,1699)" }
    ]
  },

  sweptFully: false,
  sweptFor: [],

  // Rows arrive from the AI pass and are confirmed in phase 2 (MAP-TOOL-SPEC §3-§4).
  rows: [
    { kind: "absent", street: "4th Street", from: { px: [762, 361] }, to: { px: [774, 931] }, confirmed: false, note: "The modern parallel branches cross the interiors of Blocks 110, 109, 108 and 107; no roadway follows them." },
    { kind: "absent", street: "5th Street", from: { px: [540, 282] }, to: { px: [571, 937] }, confirmed: false, note: "The modern alignment crosses numbered blocks and the Bellevue Terrace garden rather than a drawn roadway." },
    { kind: "absent", street: "5th Street (south branch)", from: { px: [483, 143] }, to: "5th Street", confirmed: false, note: "The modern branch crosses Block 106; no separate roadway is drawn." },
    { kind: "state", asWritten: "4th St.", street: "6th Street", from: { px: [471, 143] }, to: { px: [374, 943] }, basis: "alignment", confirmed: false },
    { kind: "absent", street: "Beaudry Avenue", from: { px: [513, 150] }, to: { px: [317, 161] }, confirmed: false, note: "The modern alignment lies north of the historical Beaudry Street corridor and crosses block ground." },
    { kind: "unnamed", street: "Figueroa Street", from: { px: [787, 396] }, to: { px: [266, 401] }, basis: "alignment", confirmed: false, note: "A full roadway corridor is drawn, but the sheet letters only the generic word 'Street.' on this line." },
    { kind: "unnamed", street: "Flower Street", from: { px: [794, 520] }, to: { px: [269, 528] }, basis: "alignment", confirmed: false, note: "A full roadway corridor is drawn, but the sheet letters only the generic word 'Street.' on this line." },
    { kind: "absent", street: "Fremont Avenue", from: { px: [549, 299] }, to: { px: [373, 329] }, confirmed: false, note: "The modern short alignment crosses subdivision lots and a boundary line, not a roadway corridor." },
    { kind: "state", asWritten: "Charity St.", name: "charity", street: "Grand Avenue", from: { px: [808, 767] }, to: { px: [274, 779] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "Charity St.", name: "charity", street: "Grand Avenue Lower Level", from: { px: [809, 773] }, to: "4th Street", basis: "alignment", confirmed: false },
    { kind: "absent", street: "Harbor Freeway", from: { px: [564, 241] }, to: { px: [306, 209] }, confirmed: false, note: "This freeway carriageway cuts diagonally across Blocks 105 and 106 and the old Beaudry Street corridor." },
    { kind: "absent", street: "Harbor Freeway", from: { px: [558, 229] }, to: { px: [310, 194] }, confirmed: false, note: "The second freeway carriageway also crosses numbered lots rather than a historical roadway." },
    { kind: "absent", street: "Hope Place", from: "Hope Street", to: "Grand Avenue", confirmed: false, note: "The modern connector crosses Block 108; no north-south roadway is drawn here." },
    { kind: "state", asWritten: "Hope Street.", name: "hope", street: "Hope Street", from: { px: [802, 648] }, to: "Hope Place", basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "Hope Street.", name: "hope", street: "Hope Street", from: { px: [458, 650] }, to: { px: [271, 653] }, basis: "alignment", confirmed: false },
    { kind: "state", asWritten: "Olive", name: "olive", street: "Olive Street", from: { px: [816, 898] }, to: { px: [276, 906] }, basis: "alignment", confirmed: false },
    { kind: "vanished", asWritten: "Beaudry Street", trace: [[267, 315], [551, 315]], basis: "alignment", confirmed: false, note: "The historical Beaudry Street corridor lies south of the supplied modern Beaudry Avenue alignment." }
  ]
};
