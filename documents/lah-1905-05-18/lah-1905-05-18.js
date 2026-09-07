// THE DIAGNOSIS, and the single most historically useful clipping in this batch. The
// Herald traces the 1905 numbering chaos all the way back to the 1849 survey:
//
//   "Lieutenant Hancock of the United States engineer corps laid out the pueblo of Los
//   Angeles in 1849 under orders from the city council, and for some reason not now
//   plain, he adopted a system of running his streets on an angle of twenty-eight
//   degrees instead of north and south and east and west. This was done despite the
//   fact that the land lines of the pueblo were run north and south, and comprised an
//   area six miles square."
//
// That is the origin of downtown's tilted grid, stated by the city's own newspaper
// fifty-six years after the fact — and it is directly relevant to our July 1850
// assessment work (handbook/research-leads.md), which is the year after Hancock's
// survey. Whether "twenty-eight degrees" is accurate is testable against our own
// geometry.
//
// Also records the concrete absurdity the ordinance was meant to fix: "a person going
// out Fortieth street from Main finds himself, on crossing Figueroa, to be on Fiftieth
// street."
//
// And it records the political shape of the outcome: nobody objected to renaming as
// such, they objected to all the renaming falling on one side of town. "They desire
// that the changes be divided between the wards evenly."
//
// PROVENANCE. Clipping supplied by Kenny, 2026-09-06 (CDNC phrase search).

module.exports = {
  id: "lah-1905-05-18",
  title: "Los Angeles Herald, May 18, 1905 — \"Early Survey Is Cause of Mixup\": Lieutenant Hancock's 1849 twenty-eight-degree grid blamed for the whole numbering problem",
  shortTitle: "Hancock's 1849 survey blamed",
  url: "https://cdnc.ucr.edu/?a=d&d=LAH19050518.1.4",
  scan: "documents/lah-1905-05-18/lah-1905-05-18-clip.jpg",
  transcription: null,

  date: { before: "1905-05-18" },
  recorded: "1905-05-18",
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
    { id: "citizens-object",
      text: "The proposed ordinance changing the names of ninety streets in the southern portion of " +
            "the city affects so many people and such a large district that a great many citizens " +
            "call every day at the city hall to object to the measure or find out what has been done " +
            "with it.",
      note: "Headline: \"Early Survey Is Cause of Mixup / Street Naming a Serious Problem / Systems " +
            "Are Suggested / Angle Adopted by the City for Running Streets in 1849 Responsible for " +
            "Discrepancy in Numbers and Names.\"" },

    { id: "next-monday",
      text: "The council has recalled the ordinance, which was passed two weeks ago, and will make " +
            "some disposition of it next Monday. It is considered probable that no definite action " +
            "will be taken on the question until Councilman Smith of the First ward returns from his " +
            "trip of inspection of the property which he owns in the Bullfrog and Goldfield district. " +
            "Mr. Smith may not return to Los Angeles for another week.",
      note: "\"Next Monday\" = May 22, 1905. That council meeting is the target — see " +
            "handbook/MINUTES-TO-CHECK.md." },

    { id: "jefferson-curve",
      text: "The change in names affects both the Fifth and Sixth wards. One chief cause of the " +
            "discrepancy in the numbers of the streets running east and west through the district " +
            "affected is the fact that Jefferson street runs in a curve instead of in a straight " +
            "line. Jefferson corresponds to Thirty-fourth street. At Central avenue it ends and runs " +
            "into Thirty-sixth street and is but two short blocks from Thirty-eighth street.",
      note: "Jefferson = Thirty-fourth. Cf. documents/lah-1903-02-17, where \"East Jefferson street\" " +
            "between Eureka and Central becomes Thirty-eighth." },

    { id: "figueroa",
      text: "At Figueroa street the condition is entirely different. The way the streets are numbered " +
            "there are but three blocks between Jefferson at this point and the southern boundary of " +
            "the old pueblo of Los Angeles. On the west side of Figueroa there are four blocks, " +
            "Thirty-eighth being on the boundary." },

    { id: "hancock-1849",
      text: "Lieutenant Hancock of the United States engineer corps laid out the pueblo of Los " +
            "Angeles in 1849 under orders from the city council, and for some reason not now plain, " +
            "he adopted a system of running his streets on an angle of twenty-eight degrees instead " +
            "of north and south and east and west. This was done despite the fact that the land lines " +
            "of the pueblo were run north and south, and comprised an area six miles square.",
      note: "★ The origin of the downtown grid angle, as the city understood it in 1905. Testable " +
            "against our own geometry." },

    { id: "the-absurdity",
      text: "The section of the city taken in since the south was laid out on right angles, and all " +
            "of the streets now running into this section from the city change from their angle and " +
            "run directly north and south when they reach the boundary line. This causes the mixup. " +
            "So great is this difference that a person going out Fortieth street from Main finds " +
            "himself, on crossing Figueroa, to be on Fiftieth street." },

    { id: "divide-evenly",
      text: "City Engineer Stafford and the council are looking for a solution of this problem. Some " +
            "system of numbering only alternate streets and naming the intervening ones seems to be " +
            "the solution which has occurred to most of the interested parties, but none wish all of " +
            "the changes made on one side of the city. They desire that the changes be divided " +
            "between the wards evenly. This is the view taken by the council and the question will be " +
            "thoroughly investigated.",
      note: "The objection was to the distribution of the burden, not to renaming as such." }
  ],

  rows: []
};
