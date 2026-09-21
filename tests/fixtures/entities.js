// Made-up name entities for the fixture sheets' rows. browser-test adds them to
// the page's NAME_ENTITIES at the start of the run, so the fixtures never
// depend on which entities data/names.js happens to hold.
const e = form => ({ spellings: [{ forms: [form] }], namedAfter: null,
                     categories: ["unknown"], sources: [], aliases: [] });
module.exports = {
  "test-shape":   e("Synthetic Shape"),
  "test-main":    e("Synthetic Main Street"),
  // The only entity whose present name is "Synthetic Third Street", so it is
  // offered on that street for carrying the name.
  "test-third":   e("Synthetic Third Street"),
  "test-arnold":  e("Arnold Street"),
  "test-miramar": e("Synthetic Miramar Street"),
  "test-first":   e("Synthetic First Street"),
  "test-diamond": e("Diamond Street"),
  "test-colton":  e("Synthetic Colton Street"),
  "test-douglas": e("Synthetic Douglas Street"),
  "test-waters":  e("Synthetic Waters Street")
};
