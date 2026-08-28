// Document registry. One FOLDER per document: documents/<id>/ holds the
// document file, its alignment, its render, its source scan and its Part A
// transcription — everything about one piece of evidence in one place, which
// is also the unit you can hand to another AI system whole.
//
// Folders are discovered, not listed: adding a document means creating its
// folder, nothing else. The osm pseudo-document is the one exception — it is
// derived from streets-geometry.js at load time rather than read from disk.

const fs = require("fs");
const path = require("path");
const osm = require("./osm.js");

const here = __dirname;
const ids = fs.readdirSync(here, { withFileTypes: true })
  .filter(e => e.isDirectory() && !e.name.startsWith("."))
  .map(e => e.name)
  .sort();

const DOCUMENTS = [];
for (const id of ids) {
  const file = path.join(here, id, `${id}.js`);
  if (!fs.existsSync(file)) {
    console.warn(`warn:  documents/${id}/ has no ${id}.js — skipped`);
    continue;
  }
  const doc = require(file);
  if (doc.id !== id)
    throw new Error(`documents/${id}/${id}.js declares id "${doc.id}" — folder and id must match`);
  DOCUMENTS.push(doc);
}
DOCUMENTS.push(osm.load());

module.exports = { DOCUMENTS };
