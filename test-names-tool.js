// test-names-tool.js — headless tests for the names tool's source model.
// Run: node test-names-tool.js
//
// The thing worth testing here is not the UI, it is the SURGERY. names-tool.html
// edits names.js by replacing one entity's span and writing every other byte
// back untouched, which is what lets a machine edit a file full of hand-written
// section comments and aligned sources without flattening it. If that round
// trip is ever less than exact, a save silently damages the file.
//
// So these tests run against the REAL names.js and names-new.js, and the code
// under test is EXTRACTED from the page rather than copied here — a second copy
// would drift, and the drift would be invisible until it cost something.

const fs = require("fs"), path = require("path"), vm = require("vm");

const html = fs.readFileSync(path.join(__dirname, "names-tool.html"), "utf8");
const slice = (a, b) => {
  const i = html.indexOf(a);
  const j = i < 0 ? -1 : html.indexOf(b, i + a.length);
  if (i < 0 || j < 0) {
    console.error(`Could not find ${JSON.stringify(a)} … ${JSON.stringify(b)} in ` +
                  `names-tool.html — if either was renamed, update the markers here.`);
    process.exit(1);
  }
  return html.slice(i, j) + "\n";
};
const source = slice("const SRC = {", "\n// ====") +          // the surgical source model
               slice("const J = v =>", "\n// ====") +         // the entity serialiser
               slice("function validateAll(", "\n// ====") +   // the checks
               slice("const FILE_PATH = {", "async function save()");  // what lands on disk
const { SRC, renderEntity, renderSpelling, validateAll, composeFiles } = vm.runInNewContext(
  "(function(){\n" + source +
  "\nreturn { SRC, renderEntity, renderSpelling, validateAll, composeFiles };\n})()",
  { console });

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? "\n        " + d : "")));

const read = f => fs.readFileSync(path.join(__dirname, f), "utf8");

// --- 1. the round trip, on the real files ---------------------------------
console.log("\nsource model — round trip");
for (const [file, decl] of [["names.js", "NAME_ENTITIES"], ["names-new.js", "NEW_NAME_ENTITIES"]]) {
  if (!fs.existsSync(path.join(__dirname, file))) { console.log(`  --  ${file} absent, skipped`); continue; }
  const text = read(file);
  const p = SRC.parse(text, decl);
  ok(`${file} parses`, !!p);
  if (!p) continue;
  ok(`${file} round-trips byte for byte`, SRC.render(p) === text,
     SRC.render(p) === text ? "" : "the rendered file differs from the original");
  const live = require("./" + file);
  const fromFile = live[decl] || live[Object.keys(live)[0]];
  const fromSpans = SRC.evaluate(p);
  ok(`${file} spans evaluate to the same entities`,
     JSON.stringify(Object.keys(fromSpans).sort()) === JSON.stringify(Object.keys(fromFile).sort()) &&
     JSON.stringify(fromSpans) === JSON.stringify(fromFile));
  // Comments above an entity must travel WITH it — that is how the section
  // headings in names.js stay attached to the block they head.
  const grid = p.entries.find(e => e.key === "first-street");
  if (grid) ok("names.js section comment is carried in the entity's lead",
               /downtown numbered grid/.test(grid.lead));
}

// --- 2. editing one entity leaves the rest alone ---------------------------
console.log("\nsource model — a single-entity edit");
{
  const text = read("names.js");
  const p = SRC.parse(text, "NAME_ENTITIES");
  const id = "farmer";
  const before = SRC.find(p, id);
  ok("the target entity is there", !!before);
  const e = SRC.evaluate(p)[id];
  e.categories = ["unknown", "test-only"];
  SRC.replace(p, id, renderEntity(e));
  const out = SRC.render(p);
  ok("the edited entity changed", out !== text);
  // Everything before the edited entity's own span is untouched.
  const cut = text.indexOf('"farmer"');
  ok("every byte before the edited entity is identical", out.slice(0, cut) === text.slice(0, cut));
  const p2 = SRC.parse(out, "NAME_ENTITIES");
  ok("the result re-parses", !!p2);
  const back = SRC.evaluate(p2);
  ok("the edit landed", JSON.stringify(back[id].categories) === '["unknown","test-only"]');
  ok("no entity was lost", Object.keys(back).length === Object.keys(SRC.evaluate(p)).length);
  const orig = SRC.evaluate(SRC.parse(text, "NAME_ENTITIES"));
  const others = Object.keys(orig).filter(k => k !== id);
  ok("no other entity changed",
     others.every(k => JSON.stringify(orig[k]) === JSON.stringify(back[k])));
  ok("the file still ends the way it started", out.endsWith("module.exports = { NAME_ENTITIES };\n"));
}

// --- 3. append and remove --------------------------------------------------
console.log("\nsource model — append and remove");
{
  const text = read("names.js");
  let p = SRC.parse(text, "NAME_ENTITIES");
  const n = p.entries.length;
  SRC.append(p, "zz-test-entity", renderEntity({
    spellings: [{ forms: ["Test Street"] }], namedAfter: null, namedAfterLink: null,
    categories: ["unresearched"], sources: [], disputed: false, note: null,
    possiblySameAs: null, aliases: []
  }));
  const out = SRC.render(p);
  const p2 = SRC.parse(out, "NAME_ENTITIES");
  ok("append adds one entity", p2.entries.length === n + 1);
  ok("the appended file is valid JS", !!SRC.evaluate(p2)["zz-test-entity"]);
  ok("the entity before it kept its comma", /\},\s*\n\s*"zz-test-entity"/.test(out));

  SRC.remove(p2, "zz-test-entity");
  const out2 = SRC.render(p2);
  ok("remove takes it out again", !SRC.evaluate(SRC.parse(out2, "NAME_ENTITIES"))["zz-test-entity"]);
  ok("remove leaves valid JS", SRC.parse(out2, "NAME_ENTITIES").entries.length === n);
  // Removing the last entity must not leave a trailing comma before "};" —
  // legal in JS, but it is not how this file is written.
  const p3 = SRC.parse(read("names.js"), "NAME_ENTITIES");
  const lastId = p3.entries[p3.entries.length - 1].key;
  SRC.remove(p3, lastId);
  ok("removing the last entity leaves no dangling comma",
     !/,\s*\}\s*;/.test(SRC.render(p3).slice(-400)));
}

// --- 4. tricky source text -------------------------------------------------
console.log("\nsource model — the things that break naive parsers");
{
  const tricky = `// header
const X = {
  // a section heading
  "a": {
    note: "a brace } and a quote \\" and a // slash",   // trailing comment
    s: "one" +
       "two"
  },

  /* block comment */
  b: { note: null, deep: { nested: { x: [1, 2, { y: "}" }] } } },

  "c-3": { note: \`a template } literal\` }
};
module.exports = { X };
`;
  const p = SRC.parse(tricky, "X");
  ok("parses all three entities", p && p.entries.length === 3,
     p ? "got " + p.entries.map(e => e.key).join(", ") : "parse returned null");
  ok("round-trips", SRC.render(p) === tricky);
  ok("keys are unquoted where the source was", p.entries.map(e => e.key).join(",") === "a,b,c-3");
  ok("a brace inside a string does not end the entity",
     SRC.evaluate(p).a.note.includes("brace }"));
  ok("a block comment is carried as the next entity's lead", /block comment/.test(p.entries[1].lead));
}

// --- 5. the entity serialiser ---------------------------------------------
console.log("\nthe entity serialiser");
{
  const e = {
    spellings: [
      { forms: ["Georgia Street"], disambiguation: "west downtown", from: "1874", until: "1889",
        source: { title: "T", url: "https://x/" } },
      { forms: ["Georgia Bell Street", "Bell Street"] }
    ],
    namedAfter: "{{Georgia Herrick Bell}} (1845–1899)",
    namedAfterLink: "https://en.wikipedia.org/wiki/x",
    categories: ["person", "alive"],
    sources: [{ title: "S", url: "https://y/" }],
    disputed: false, note: "public", internalNote: "private",
    possiblySameAs: null, aliases: ["georgia"]
  };
  const text = renderEntity(e);
  const back = new Function("return (" + text + ")")();
  ok("a full entity survives the serialiser", JSON.stringify(back) === JSON.stringify(e));
  ok("it is indented for the file, not flattened", /\n    namedAfter:/.test(text));

  const bare = { spellings: [{ forms: ["X Street"] }], namedAfter: null, namedAfterLink: null,
                 categories: ["unknown"], sources: [], disputed: false, note: null,
                 possiblySameAs: null, aliases: [] };
  const bt = renderEntity(bare);
  ok("internalNote is omitted rather than written as null", !/internalNote/.test(bt));
  ok("a single simple spelling stays on one line", /spellings: \[\{ forms: \["X Street"\] \}\],/.test(bt));
  ok("an empty entity round-trips", JSON.stringify(new Function("return (" + bt + ")")()) === JSON.stringify(bare));

  // sightings belongs to names-new.js only: an entity that has reached names.js
  // has had its identity decided and does not need the trail.
  const withSight = { ...bare, sightings: [{ doc: "d", sheet: "s", asWritten: ["X"] }] };
  ok("sightings are written for names-new.js", /sightings:/.test(renderEntity(withSight, { sightings: true })));
  ok("sightings are dropped for names.js", !/sightings:/.test(renderEntity(withSight)));
}

// --- 6. validation matches check-model.js ---------------------------------
console.log("\nvalidation");
{
  const base = () => ({ spellings: [{ forms: ["A Street"] }], namedAfter: "x", namedAfterLink: null,
                        categories: ["person"], sources: [], disputed: false, note: null,
                        possiblySameAs: null, aliases: [] });
  const errs = o => (validateAll(o).a || []).filter(x => x.kind === "err").map(x => x.msg);
  const wrns = o => (validateAll(o).a || []).filter(x => x.kind === "wrn").map(x => x.msg);

  ok("a good entity is clean", errs({ a: base() }).length === 0);
  ok("no spellings is an error", errs({ a: { ...base(), spellings: [] } }).some(m => /no spellings/.test(m)));
  ok("empty forms is an error", errs({ a: { ...base(), spellings: [{ forms: [""] }] } }).some(m => /no forms/.test(m)));
  ok("prose dates without a source are an error",
     errs({ a: { ...base(), spellings: [{ forms: ["A"], from: "1890" }] } }).some(m => /prose dates/.test(m)));
  ok("prose dates with a source are fine",
     errs({ a: { ...base(), spellings: [{ forms: ["A"], from: "1890", source: { title: "t", url: "https://x/" } }] } }).length === 0);
  ok("no categories is an error", errs({ a: { ...base(), categories: [] } }).some(m => /no categories/.test(m)));
  ok("two link spans are an error",
     errs({ a: { ...base(), namedAfter: "{{a}} and {{b}}" } }).some(m => /\{\{\}\} markers/.test(m)));
  ok("a bad source url is an error",
     errs({ a: { ...base(), sources: [{ title: "t", url: "x" }] } }).some(m => /bad source url/.test(m)));
  ok("possiblySameAs must resolve",
     errs({ a: { ...base(), possiblySameAs: "nope" } }).some(m => /unknown id/.test(m)));
  ok("an alias colliding with a live id is an error",
     errs({ a: { ...base(), aliases: ["b"] }, b: base() }).some(m => /collides/.test(m)));
  ok("null namedAfter without unknown/unresearched warns",
     wrns({ a: { ...base(), namedAfter: null } }).some(m => /namedAfter is null/.test(m)));
  ok("null namedAfter with unknown is quiet",
     wrns({ a: { ...base(), namedAfter: null, categories: ["unknown"] } }).length === 0);
  ok("a working note in `note` warns",
     wrns({ a: { ...base(), note: "Kenny: worth a look" } }).some(m => /shown to readers/.test(m)));

  // Citing a sheet that does not letter the name — only checkable against the
  // corpus, so it is silent until the documents/ scan has run.
  const cited = { ...base(), sources: [{ title: "t", url: "https://x/sheet5.pdf" }] };
  const corpus = { docsByUrl: { "https://x/sheet5.pdf": ["mr030-009-p5"] },
                   attesting: { a: ["mr030-009-p2"] } };
  const cwrns = o => (validateAll(o, corpus).a || []).filter(x => x.kind === "wrn").map(x => x.msg);
  ok("citing a corpus sheet with no row for the entity warns",
     cwrns({ a: cited }).some(m => /wrong sheet of the same map/.test(m)));
  ok("…and says where it IS attested", cwrns({ a: cited }).some(m => /mr030-009-p2/.test(m)));
  ok("citing a sheet that does letter it is quiet",
     !(validateAll({ a: cited }, { docsByUrl: corpus.docsByUrl, attesting: { a: ["mr030-009-p5"] } }).a || [])
        .some(x => /wrong sheet/.test(x.msg)));
  // The county serves all five Wolfskill sheets as one PDF, so a citation of
  // that url is answered by a row on any of them.
  ok("a url shared by several sheets is answered by a row on any of them",
     !(validateAll({ a: cited }, { docsByUrl: { "https://x/sheet5.pdf": ["mr030-009-p1", "mr030-009-p2"] },
                                   attesting: { a: ["mr030-009-p2"] } }).a || [])
        .some(x => /wrong sheet/.test(x.msg)));
  ok("…and says so when it flags one",
     (validateAll({ a: cited }, { docsByUrl: { "https://x/sheet5.pdf": ["mr030-009-p1", "mr030-009-p2"] },
                                  attesting: { a: ["mr053-073"] } }).a || [])
        .some(x => /sharing that scan/.test(x.msg)));
  ok("with no corpus loaded the rule is silent",
     !wrns({ a: cited }).some(m => /wrong sheet/.test(m)));
  ok("a source that is not a corpus document is never flagged",
     !(validateAll({ a: { ...base(), sources: [{ title: "t", url: "https://lastreetnames.com/x/" }] } }, corpus).a || [])
        .some(x => /wrong sheet/.test(x.msg)));

  // And the real corpus should be clean, because check-model.js says it is.
  const live = { ...require("./names.js").NAME_ENTITIES };
  try { Object.assign(live, require("./names-new.js").NEW_NAME_ENTITIES); } catch (e) {}
  const bad = Object.entries(validateAll(live)).filter(([, p]) => p.some(x => x.kind === "err"));
  ok("the real name layer has no errors", bad.length === 0,
     bad.map(([id, p]) => id + ": " + p.map(x => x.msg).join("; ")).join("\n        "));
}

// --- 7. what a save actually writes ---------------------------------------
// The composition step, run end to end on the real files: an ordinary edit, a
// rename and a promotion at once, which is the combination that has to get
// both files right or leave an entity in neither.
console.log("\nwhat a save writes");
{
  const parsedFresh = () => ({
    names: SRC.parse(read("names.js"), "NAME_ENTITIES"),
    newNames: SRC.parse(read("names-new.js"), "NEW_NAME_ENTITIES")
  });
  const P = parsedFresh();
  const before = { names: SRC.evaluate(P.names), newNames: SRC.evaluate(P.newNames) };
  const promoteId = Object.keys(before.newNames)[0];
  const editId = "farmer", oldId = "third-street", newId = "third-street-downtown";

  const promoted = { ...before.newNames[promoteId], __file: "names",
                     namedAfter: "somebody", categories: ["person"] };
  delete promoted.sightings;
  const renamed = { ...before.names[oldId], __file: "names",
                    aliases: [...(before.names[oldId].aliases || []), oldId] };
  const edit = { ...before.names[editId], __file: "names", note: "rewritten by the tool" };

  const out = composeFiles(P,
    { [editId]: edit, [promoteId]: promoted, [newId]: renamed },
    new Set([promoteId, oldId]));

  ok("both files are written", typeof out.names === "string" && typeof out.newNames === "string");
  const after = {
    names: SRC.evaluate(SRC.parse(out.names, "NAME_ENTITIES")),
    newNames: SRC.evaluate(SRC.parse(out.newNames, "NEW_NAME_ENTITIES"))
  };
  ok("the promoted entity is in names.js", !!after.names[promoteId]);
  ok("…and gone from names-new.js", !after.newNames[promoteId]);
  ok("…and lost its derived sightings", !after.names[promoteId].sightings);
  ok("names-new.js kept everything else",
     Object.keys(after.newNames).length === Object.keys(before.newNames).length - 1);
  ok("the renamed entity is under its new id", !!after.names[newId]);
  ok("…the old id is gone", !after.names[oldId]);
  ok("…and survives as an alias, so existing document rows still resolve",
     (after.names[newId].aliases || []).includes(oldId));
  ok("the ordinary edit landed", after.names[editId].note === "rewritten by the tool");
  ok("every other entity is untouched",
     Object.keys(before.names).filter(k => ![editId, oldId].includes(k))
       .every(k => JSON.stringify(before.names[k]) === JSON.stringify(after.names[k])));
  ok("no bookkeeping field leaked into the file",
     !/__file|__renamedFrom|__promotedFrom/.test(out.names + out.newNames));
  ok("the result would pass validation",
     Object.values(validateAll({ ...after.names, ...after.newNames }))
       .every(p => !p.some(x => x.kind === "err")));

  // A save that changes nothing writes nothing — an empty edit set must not
  // rewrite (and so reformat) a file.
  ok("nothing edited means nothing written",
     Object.keys(composeFiles(parsedFresh(), {}, new Set())).length === 0);
  // An edit confined to one file leaves the other alone.
  const only = composeFiles(parsedFresh(), { [editId]: edit }, new Set());
  ok("an edit in names.js does not rewrite names-new.js",
     Object.keys(only).join() === "names");
}

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);
