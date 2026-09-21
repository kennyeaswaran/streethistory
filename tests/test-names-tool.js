// tests/test-names-tool.js — headless tests for the names tool's source model.
// Run: node tests/test-names-tool.js
//
// The thing worth testing here is not the UI, it is the SURGERY. utilities/names-tool.html
// edits data/names.js by replacing one entity's span and writing every other byte
// back untouched, which is what lets a machine edit a file full of hand-written
// section comments and aligned sources without flattening it. If that round
// trip is ever less than exact, a save silently damages the file.
//
// So these tests run against the REAL data/names.js and data/names-new.js, and the code
// under test is EXTRACTED from the page rather than copied here — a second copy
// would drift, and the drift would be invisible until it cost something.

const PROJECT = require("path").join(__dirname, ".."); // the project root: this script lives one folder down
const fs = require("fs"), path = require("path"), vm = require("vm");

const html = fs.readFileSync(path.join(PROJECT, "utilities/names-tool.html"), "utf8");
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
               slice("const FILE_PATH = {", "async function save()") +   // what lands on disk
               slice("function wordDiff(", "function diffHtml(");       // the drift measure
const { SRC, renderEntity, renderSpelling, validateAll, composeFiles, wordDiff, driftOf } =
  vm.runInNewContext(
  "(function(){\n" + source +
  "\nreturn { SRC, renderEntity, renderSpelling, validateAll, composeFiles, wordDiff, driftOf };\n})()",
  { console });

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? "\n        " + d : "")));

const read = f => fs.readFileSync(path.join(PROJECT, "data", f), "utf8");   // the name files live in data/

// --- 1. the round trip, on the real files ---------------------------------
console.log("\nsource model — round trip");
for (const [file, decl] of [["names.js", "NAME_ENTITIES"], ["names-new.js", "NEW_NAME_ENTITIES"]]) {
  if (!fs.existsSync(path.join(PROJECT, "data", file))) { console.log(`  --  ${file} absent, skipped`); continue; }
  const text = read(file);
  const p = SRC.parse(text, decl);
  ok(`${file} parses`, !!p);
  if (!p) continue;
  ok(`${file} round-trips byte for byte`, SRC.render(p) === text,
     SRC.render(p) === text ? "" : "the rendered file differs from the original");
  const live = require("../data/" + file);
  const fromFile = live[decl] || live[Object.keys(live)[0]];
  const fromSpans = SRC.evaluate(p);
  ok(`${file} spans evaluate to the same entities`,
     JSON.stringify(Object.keys(fromSpans).sort()) === JSON.stringify(Object.keys(fromFile).sort()) &&
     JSON.stringify(fromSpans) === JSON.stringify(fromFile));
  // Comments above an entity must travel WITH it — that is how the section
  // headings in data/names.js stay attached to the block they head.
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
    basis: "eponymous", rival: true, sharesWarrantWith: ["georgia-east"],
    refuted: [{ candidate: "the state", killedBy: "the plat letters the family", kind: "namesake" }],
    disputed: false, note: "public", internalNote: "private",
    possiblySameAs: null, aliases: ["georgia"]
  };
  const text = renderEntity(e);
  const back = new Function("return (" + text + ")")();
  ok("a full entity survives the serialiser", JSON.stringify(back) === JSON.stringify(e));
  ok("it is indented for the file, not flattened", /\n    namedAfter:/.test(text));

  // ★ This serializer shipped with a fixed field list that did not include
  // `basis`, so every save silently stripped it from the entity being edited —
  // and the tests above did not catch it, because the round-trip fixture had no
  // basis and the whole-file tests only compare the entities they did NOT edit.
  // These name the fields explicitly so a future omission fails loudly.
  for (const f of ["basis", "rival", "sharesWarrantWith", "refuted"])
    ok(`\`${f}\` survives the serialiser`, new RegExp(`\\n    ${f}:`).test(text));
  ok("basis is written between sources and disputed",
     text.indexOf("\n    basis:") > text.indexOf("\n    sources:") &&
     text.indexOf("\n    basis:") < text.indexOf("\n    disputed:"));
  ok("a refuted lead keeps its candidate, killedBy and kind",
     JSON.stringify(back.refuted) === JSON.stringify(e.refuted));

  const bare = { spellings: [{ forms: ["X Street"] }], namedAfter: null, namedAfterLink: null,
                 categories: ["unknown"], sources: [], basis: "none", searched: "partial",
                 disputed: false, note: null, possiblySameAs: null, aliases: [] };
  const bt = renderEntity(bare);
  ok("internalNote is omitted rather than written as null", !/internalNote/.test(bt));
  ok("searched is written when present", /\n    searched: "partial",/.test(bt));

  // §3.2. ABSENT means never approved; "" means a human approved the absence of
  // text. The serializer has to keep those apart, or approving an empty note
  // silently reverts to "nobody has looked at this".
  const appr = { ...bare, namedAfter: "x", namedAfterApproved: "x",
                 namedAfterApprovedOn: "2026-09-15", note: null, noteApproved: "",
                 noteApprovedOn: "2026-09-15", basis: "guess" };
  delete appr.searched;
  const at = renderEntity(appr);
  const aback = new Function("return (" + at + ")")();
  // Compared key-sorted: the serialiser writes the schema's order, which is not
  // the order a spread happens to produce, and only the content is under test.
  const sorted = o => JSON.stringify(Object.fromEntries(
    Object.keys(o).sort().map(k => [k, o[k]])));
  ok("the approved-text fields survive the serialiser", sorted(aback) === sorted(appr), at);
  ok("an approved-as-empty string is not written as absent",
     aback.noteApproved === "" && "noteApproved" in aback);
  ok("a never-approved field is omitted rather than written as null",
     !/Approved/.test(bt));
  ok("the absent companions are omitted rather than written as null",
     !/rival|refuted|sharesWarrantWith/.test(bt));
  ok("a single simple spelling stays on one line", /spellings: \[\{ forms: \["X Street"\] \}\],/.test(bt));
  ok("an empty entity round-trips", JSON.stringify(new Function("return (" + bt + ")")()) === JSON.stringify(bare));

  // sightings belongs to data/names-new.js only: an entity that has reached data/names.js
  // has had its identity decided and does not need the trail.
  const withSight = { ...bare, sightings: [{ doc: "d", sheet: "s", asWritten: ["X"] }] };
  ok("sightings are written for names-new.js", /sightings:/.test(renderEntity(withSight, { sightings: true })));
  ok("sightings are dropped for names.js", !/sightings:/.test(renderEntity(withSight)));
}

// --- 6. validation matches tools/check-model.js ---------------------------------
console.log("\nvalidation");
{
  const base = () => ({ spellings: [{ forms: ["A Street"] }], namedAfter: "x", namedAfterLink: null,
                        categories: ["person"], sources: [], basis: "attested", disputed: false,
                        note: null, possiblySameAs: null, aliases: [] });
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
  ok("an undeclared category warns once the vocabulary is known",
     (validateAll({ a: { ...base(), categories: ["person", "mythological"] } },
                  { docsByUrl: {}, attesting: {}, categoryIds: new Set(["person", "unresearched"]) }).a || [])
       .some(p => p.kind === "wrn" && /"mythological" is not declared/.test(p.msg)));
  ok("…and is quiet when no vocabulary was loaded",
     !wrns({ a: { ...base(), categories: ["person", "mythological"] } }).some(m => /not declared/.test(m)));
  // ★ REPLACED 2026-09-15. `unknown` and `unresearched` used to be hand-typed
  // beside a null namedAfter, and this pair of checks policed that. They are
  // now DERIVED by tools/generate.js from `namedAfter` and `searched` (ROADMAP §7),
  // because the hand-typed versions drifted: twenty of the 143 entities
  // disagreed with their own fields. So the rules invert — authoring one is an
  // error, and a null namedAfter with no categories at all is correct.
  ok("authoring a derived category is an error",
     errs({ a: { ...base(), namedAfter: null, categories: ["unknown"] } })
       .some(m => /derived by tools\/generate\.js/.test(m)));
  ok("…and so is authoring `unresearched`",
     errs({ a: { ...base(), namedAfter: null, categories: ["unresearched"] } })
       .some(m => /derived by tools\/generate\.js/.test(m)));
  ok("an eponymous entity must say landowner or family",
     errs({ a: { ...base(), basis: "eponymous", categories: ["person"] } })
       .some(m => /neither "landowner" nor "family"/.test(m)));
  ok("…and is clean once it does",
     !errs({ a: { ...base(), basis: "eponymous", categories: ["person", "landowner"] } })
       .some(m => /landowner/.test(m)));
  ok("a null namedAfter may carry no categories at all",
     errs({ a: { ...base(), namedAfter: null, categories: [] } }).length === 0);
  ok("…but a populated namedAfter may not",
     errs({ a: { ...base(), categories: [] } }).some(m => /only legal where namedAfter is null/.test(m)));
  ok("a working note in `note` warns",
     wrns({ a: { ...base(), note: "Kenny: worth a look" } }).some(m => /shown to readers/.test(m)));

  // --- redundancy in `sources` -------------------------------------------
  const url = "https://x/sheet5.pdf";
  const corpus = { docsByUrl: { [url]: ["mr030-009-p5"] }, attesting: { a: ["mr030-009-p2"] } };
  const cwrns = (e, c) => (validateAll({ a: e }, c === undefined ? corpus : c).a || [])
    .filter(x => x.kind === "wrn").map(x => x.msg);

  ok("a source repeating namedAfterLink warns",
     cwrns({ ...base(), namedAfterLink: "https://w/x", sources: [{ title: "t", url: "https://w/x" }] })
       .some(m => /repeats namedAfterLink/.test(m)));
  ok("…and does so with no corpus loaded, since it needs none",
     cwrns({ ...base(), namedAfterLink: "https://w/x", sources: [{ title: "t", url: "https://w/x" }] }, null)
       .some(m => /repeats namedAfterLink/.test(m)));

  const cited = { ...base(), sources: [{ title: "t", url }] };
  ok("citing a corpus document that letters the name warns as redundant",
     (validateAll({ a: cited }, { docsByUrl: { [url]: ["mr030-009-p2"] }, attesting: { a: ["mr030-009-p2"] } }).a || [])
       .some(x => /which letters this name/.test(x.msg)));
  ok("citing one that does NOT letter it is flagged differently",
     cwrns(cited).some(m => /does NOT letter this name/.test(m)));
  ok("…and says where the name IS lettered", cwrns(cited).some(m => /mr030-009-p2/.test(m)));
  // The county serves all five Wolfskill sheets as one PDF, and the LAPL scan
  // of the Ord survey is a copy of all five Ord sheets: a citation of either
  // url is answered by a row on any of the documents behind it.
  ok("a url shared by several documents is answered by a row on any of them",
     (validateAll({ a: cited }, { docsByUrl: { [url]: ["mr030-009-p1", "mr030-009-p2"] },
                                  attesting: { a: ["mr030-009-p2"] } }).a || [])
       .some(x => /which letters this name/.test(x.msg)));
  ok("…and the flag names how many share the scan",
     (validateAll({ a: cited }, { docsByUrl: { [url]: ["mr030-009-p1", "mr030-009-p2"] },
                                  attesting: { a: ["mr053-073"] } }).a || [])
       .some(x => /sharing that scan/.test(x.msg)));
  ok("with no corpus loaded the document rules are silent",
     !cwrns(cited, null).some(m => /letter this name/.test(m)));
  ok("a source that is not a corpus document is never flagged",
     !cwrns({ ...base(), sources: [{ title: "t", url: "https://lastreetnames.com/x/" }] })
        .some(m => /letter this name/.test(m)));

  // And the real corpus should be clean, because tools/check-model.js says it is.
  const live = { ...require("../data/names.js").NAME_ENTITIES };
  try { Object.assign(live, require("../data/names-new.js").NEW_NAME_ENTITIES); } catch (e) {}
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
  //
  // data/names-new.js is a QUEUE and empties: on 2026-09-06 the last of its entities
  // was researched and moved into data/names.js, and this section — which promotes
  // one of them — had nothing to promote. So it falls back to a fixture when
  // the real file is empty. The round-trip tests above still run on the real
  // file either way; it is only the promotion that needs an entity to exist.
  const FIXTURE_NEW =
    'const NEW_NAME_ENTITIES = {\n\n' +
    '  "fixture-street": {\n' +
    '    sightings: [\n      {"doc":"mr000-000","sheet":"fixture","asWritten":["Fixture Street"]}\n    ],\n' +
    '    spellings: [{ forms: ["Fixture Street"] }],\n' +
    '    namedAfter: null,\n    namedAfterLink: null,\n' +
    '    categories: ["unknown"],\n    sources: [],\n' +
    '    disputed: false,\n    note: null,\n    internalNote: null,\n' +
    '    possiblySameAs: null, aliases: []\n  }\n\n};\n';
  const newNamesText = () => {
    const real = read("names-new.js");
    const live = SRC.evaluate(SRC.parse(real, "NEW_NAME_ENTITIES"));
    return live && Object.keys(live).length ? real : FIXTURE_NEW;
  };
  const parsedFresh = () => ({
    names: SRC.parse(read("names.js"), "NAME_ENTITIES"),
    newNames: SRC.parse(newNamesText(), "NEW_NAME_ENTITIES")
  });
  const P = parsedFresh();
  const before = { names: SRC.evaluate(P.names), newNames: SRC.evaluate(P.newNames) };
  const promoteId = Object.keys(before.newNames)[0];
  const editId = "farmer", oldId = "third-street", newId = "third-street-downtown";

  // Promotion is the moment an entity acquires a basis: the to-do has been
  // researched, so the grade stops being optional and `searched` stops applying.
  const promoted = { ...before.newNames[promoteId], __file: "names",
                     namedAfter: "somebody", categories: ["person"], basis: "attested" };
  delete promoted.sightings; delete promoted.searched;
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
  // ★ The regression that got through: the assertion below excludes the edited
  // entity, so a serializer that dropped a field on exactly the entity you were
  // editing passed every test in this file. Check the edited one too — in full,
  // not just the field that was edited.
  ok("…and the edited entity kept every other field it had",
     JSON.stringify({ ...before.names[editId], note: "rewritten by the tool" }) ===
     JSON.stringify(after.names[editId]));
  ok("…including its basis", after.names[editId].basis === before.names[editId].basis);
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

// ===========================================================================
// DRIFT — how far the public prose has moved since a person approved it
// ===========================================================================
// The number rides in a sortable column, so it has to mean one thing. The trap
// it exists to avoid is conflating "approved, then rewritten" with "nobody ever
// approved this": the second is 200-odd entities and would bury the first.
{
  const D = e => driftOf(e);

  ok("no public prose at all is not a drift",
     (() => { const d = D({}); return !d.any && d.words === 0; })());

  ok("approved and unchanged scores zero",
     (() => { const d = D({ note: "a b c", noteApproved: "a b c" });
              return d.any && d.words === 0 && !d.changed && !d.never; })());

  ok("never approved counts every word, and says so",
     (() => { const d = D({ note: "one two three" });
              return d.never && !d.changed && d.words === 3; })());

  ok("an approved absence of text is not the same as never approved",
     (() => { const d = D({ note: "", noteApproved: "" });
              return d.any && !d.never && !d.changed && d.words === 0; })());

  ok("one word replaced by one word scores two — a reviewer reads both halves",
     (() => { const d = D({ note: "the quick fox", noteApproved: "the slow fox" });
              return d.changed && d.words === 2; })());

  ok("a pure insertion scores only what was inserted",
     (() => { const d = D({ note: "a b c d", noteApproved: "a b" });
              return d.changed && d.words === 2; })());

  ok("a pure deletion scores only what was removed",
     (() => { const d = D({ note: "a b", noteApproved: "a b c d" });
              return d.changed && d.words === 2; })());

  ok("both public fields are counted, not just note",
     (() => { const d = D({ note: "a b", noteApproved: "a X",
                            namedAfter: "p q", namedAfterApproved: "p Y" });
              return d.words === 4; })());

  ok("internalNote is NOT counted — it is not published and needs no approval",
     (() => { const d = D({ note: "a", noteApproved: "a",
                            internalNote: "a whole paragraph of working notes" });
              return d.words === 0 && !d.changed; })());

  // The mixed state: one field drifted, the other never approved. It must read
  // as `changed` so the "drifted" filter catches it, and still carry `never` so
  // the cell can say the rest is unreviewed.
  ok("drifted in one field and unapproved in the other is both",
     (() => { const d = D({ note: "a b", noteApproved: "a X", namedAfter: "p q r" });
              return d.changed && d.never && d.words === 5; })());

  // ★ THE REGRESSION THESE TWO CAUGHT. The diff tokenises a word together with
  // its trailing whitespace, so the last word of a text never matches itself
  // once something follows it — an append of n words scored n+2. The measure
  // normalises whitespace to kill that; the panel does not, because there it
  // costs nothing. The two may now differ by up to one token each way, so the
  // promise the column makes about the panel is "no worse than", not "equal to".
  ok("an append scores exactly the words appended, with no boundary tax",
     (() => { const d = D({ note: "Named for a man. He was a merchant.",
                            noteApproved: "Named for a man." });
              return d.words === 4; })());   // He was a merchant. — four, not six

  ok("the count never exceeds what the approval panel draws",
     (() => {
       const cases = [["a b", "a b c d"], ["a b c d", "a b"],
                      ["Named for a man who was never here", "Named for a woman who lived here"],
                      ["one", "one two three four five"]];
       return cases.every(([ap, cur]) => {
         const shown = wordDiff(ap, cur).filter(p => p.kind !== "same")
           .reduce((n, p) => n + (p.text.match(/\S+\s*/g) || []).length, 0);
         return D({ note: cur, noteApproved: ap }).words <= shown;
       });
     })());

  // Whitespace-only edits are still edits — the raw comparison decides
  // `changed`, and only the measurement is normalised.
  ok("a whitespace-only rewrite counts as changed but scores zero",
     (() => { const d = D({ note: "a  b", noteApproved: "a b" });
              return d.changed && d.words === 0; })());
}

// The column, the filters and the inverted sort all have to exist in the page.
{
  ok("the list has a sortable Drift column",
     /<th data-k="drift"/.test(html));
  ok("there is a filter for prose that drifted after approval",
     /data-s="drifted"/.test(html) && /filterState === "drifted"/.test(html));
  ok("…and a separate one for prose nobody has ever approved",
     /data-s="unapproved"/.test(html) && /filterState === "unapproved"/.test(html));
  // Every other column sorts ascending on the first click. This one must not:
  // a Drift column that opens on a screen of zeroes answers nothing.
  ok("Drift sorts biggest-first rather than following sortDir like the rest",
     /sortKey === "drift"/.test(html) && /B\.words - A\.words/.test(html));
  ok("entities with no public prose still sort last, as blanks do elsewhere",
     /A\.any !== B\.any/.test(html));
}

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail ? 1 : 0);
