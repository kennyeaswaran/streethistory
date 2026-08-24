// Document registry: one entry per document file. The osm pseudo-document is
// derived from streets-geometry.js at load time (see osm.js).

const osm = require("./osm.js");

const DOCUMENTS = [
  require("./ord-1849.js"),
  require("./lah-1874-02-27.js"),
  require("./mr003-060.js"),
  require("./mr030-009.js"),
  require("./mr066-035.js"),
  require("./ord-4093.js"),
  require("./tr0015-166a.js"),
  osm.load()
];

module.exports = { DOCUMENTS };
