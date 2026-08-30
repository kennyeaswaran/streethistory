// names-new.js — name entities created in the document tool's review mode.
//
// SEPARATE FROM names.js ON PURPOSE. names.js is hand-authored: every entity
// there has had its namesake looked into and its lineage decided. Review mode
// needs to mint an id the moment a plat shows a label nobody has entered yet,
// and a browser tool should not be writing into the file that holds that
// research. So new entities land here, are used by check-model.js and
// generate.js exactly as if they were in names.js, and are marked
// `pendingResearch: true` so nothing pretends they have been looked at.
//
// The intended lifecycle: research the namesake, fill in namedAfter/categories
// /sources, move the entity into names.js, delete it from here. Anything still
// sitting in this file is a to-do list.
//
// This file is written by the tool. Editing it by hand is fine — it is plain
// JavaScript and the tool only ever appends — but the real fix for an entry
// here is to move it out.

const NEW_NAME_ENTITIES = {

};

if (typeof module !== "undefined") module.exports = { NEW_NAME_ENTITIES };
