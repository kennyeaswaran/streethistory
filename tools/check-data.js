// Streetymology data validator. Run: node tools/check-data.js [--require-generated]
// Checks generated/streets-data.js — the file the map actually renders — against the
// contract the map relies on. It gates the deploy (.github/workflows/deploy.yml).
//
// TWO SHAPES OF DATA FILE (MODEL-IMPLEMENTATION.md, switchover checklist E).
// Until the §10 switchover (2026-09-19) generated/streets-data.js was hand-authored and
// this checker was its only guard: extents were cross-street NAMES, and the
// research-status conventions ('unknown' beside namedAfter: null) were
// authored here. Since it, generated/streets-data.js is written by tools/generate.js from
// data/names.js + documents/, the authored layers have tools/check-model.js, and this
// file's job is the output contract: every segment labelled, categories in the vocabulary,
// sources with URLs, bands tiling. In that shape extents may be positions
// (`{ px: [x, y] }`, MODEL-SPEC §5.4 — a pixel clicked on a document's
// render) and research status is `basis-*` / `stub`, derived. The checker
// tells the two apart by the generated header and by what an entry carries,
// so it passes on BOTH shapes (the legacy branches are kept for
// legacy/streets-data-2026-08.js and are post-flip cleanup):
// `--require-generated` makes a missing header an error (the hand-edit
// tripwire §10 asks for), and is what deploy.yml passes.

const PROJECT = require("path").join(__dirname, ".."); // the project root: this script lives one folder down
const fs = require("fs");
const src = fs.readFileSync(PROJECT + "/generated/streets-data.js", "utf8");
const GENERATED = /^\/\/ GENERATED FILE — DO NOT EDIT/.test(src);
const REQUIRE_GENERATED = process.argv.includes("--require-generated");
const { STREET_DATA, NAME_CATEGORY_INDEX } =
  new Function(src + "; return { STREET_DATA, NAME_CATEGORY_INDEX: typeof NAME_CATEGORY_INDEX === 'undefined' ? null : NAME_CATEGORY_INDEX };")();
// The vocabulary and the coverage boxes are authored in data/site-config.js, not in
// the data file they describe (ROADMAP §7).
const { CATEGORIES, NEIGHBORHOODS } = require(PROJECT + "/data/site-config.js");

// coverage = union of neighborhood bboxes (same as the map)
const BBOX = {
  s: Math.min(...NEIGHBORHOODS.map(n => n.bbox.s)), w: Math.min(...NEIGHBORHOODS.map(n => n.bbox.w)),
  n: Math.max(...NEIGHBORHOODS.map(n => n.bbox.n)), e: Math.max(...NEIGHBORHOODS.map(n => n.bbox.e))
};
const catIds = new Set(CATEGORIES.map(c => c.id));
let errors = 0;
const err = (...m) => { errors++; console.error("ERROR:", ...m); };
const warn = (...m) => console.warn("warn: ", ...m);

if (REQUIRE_GENERATED && !GENERATED)
  err("streets-data.js", "is not generated output (no GENERATED FILE header) — after the switchover this file is " +
      "written by `node tools/generate.js`; a hand edit here is lost on the next build and is the one way to desync the site from the corpus");

// An entry in the generated model's shape: research status is derived onto it
// as `basis-*` / `stub` (data/site-config.js, "Status of the record"); the legacy
// conventions around 'unknown' do not apply, and it has nothing to do with
// whether the FILE is generated — the test is per entry so a mixed file is
// judged entry by entry.
const modelShaped = v => (v.categories || []).some(c => c === "stub" || /^basis-/.test(c));
// A position on the street: a cross-street NAME (hand-authored), null (the
// street's end, or the coverage edge), or a pixel on a document's render
// (`{ px: [x, y] }`, §5.4, only ever written by the map tool and carried
// through by the generator).
const isExtent = x => x === null || typeof x === "string" ||
  (x && typeof x === "object" && Array.isArray(x.px) && x.px.length === 2 && x.px.every(Number.isFinite));
const showExtent = x => typeof x === "string" ? `"${x}"` : x === null ? "null" : `px(${x.px.join(",")})`;

function checkEntry(id, v) {
  if (!v.name) err(id, "missing name");
  if (v.namedAfter === undefined) err(id, "missing namedAfter (use null if genuinely nothing)");
  if (!Array.isArray(v.categories) || !v.categories.length) err(id, "missing categories");
  else v.categories.forEach(c => { if (!catIds.has(c)) err(id, "undefined category:", c); });
  if (!Array.isArray(v.sources) || !v.sources.length) err(id, "no sources — every entry must justify its claims");
  else v.sources.forEach(s => { if (!/^https?:\/\//.test(s.url)) err(id, "bad source url:", s.url); });
  if (v.nameHistory) {
    // A 1-item history is allowed only when it documents HOW the current name
    // arrived (how: "origin"/"extension"/...); otherwise omit for never-renamed streets.
    if (v.nameHistory.length < 2 && !(v.nameHistory.length === 1 && v.nameHistory[0].how))
      err(id, "nameHistory with <2 entries and no `how` — omit it for never-renamed streets");
    const last = v.nameHistory[v.nameHistory.length - 1];
    if (last.until !== null) err(id, "nameHistory must end with the current name (until: null)");
    if (v.nameHistory.length >= 2 && !v.categories.includes("renamed")) warn(id, "has nameHistory but no 'renamed' category");
    const HOWS = ["origin", "extension", "renaming", "transfer"];
    v.nameHistory.forEach((h, j) => {
      if (h.how !== undefined && !HOWS.includes(h.how))
        err(id, `nameHistory[${j}].how "${h.how}" — must be one of ${HOWS.join("/")}`);
    });
  }
  if (v.disputed && !v.categories.includes("disputed")) warn(id, "disputed:true but no 'disputed' category");
  if (v.formerNames || v.named !== undefined || v.history !== undefined) err(id, "obsolete schema field (formerNames/named/history)");
  if (v.note && /click it|see the|this stretch has/i.test(v.note)) warn(id, "note looks like a cross-reference — segment chips handle that");
  checkBraces(id, "namedAfter", v.namedAfter, v.namedAfterLink);
  (v.nameHistory || []).forEach((h, j) => checkBraces(id, `nameHistory[${j}].origin`, h.origin, h.originLink));
  // [[Street Key]] cross-links must point at existing entries
  // Three forms (MODEL-SPEC §8): [[Street Key]] (legacy), [[street:<key>]],
  // and [[name:<entity id>]] — the last checkable only when the generated file
  // carries NAME_CATEGORY_INDEX, which lists every entity the build knew.
  const checkCross = (field, text) => {
    if (!text) return;
    for (const m of text.matchAll(/\[\[(.+?)\]\]/g)) {
      const ref = m[1].split("|")[0];
      const [, kind, target] = ref.match(/^(name|street):(.*)$/) || [null, "street", ref];
      if (kind === "street") { if (!STREET_DATA[target]) err(id, field, "cross-link target not in STREET_DATA:", target); }
      else if (NAME_CATEGORY_INDEX && !NAME_CATEGORY_INDEX[target]) err(id, field, "cross-link target is not an entity this build knows:", target);
    }
  };
  checkCross("note", v.note);
  checkCross("namedAfter", v.namedAfter);
  (v.nameHistory || []).forEach((h, j) => checkCross(`nameHistory[${j}].origin`, h.origin));
  // "unknown" = researched but origin not found: goes hand in hand with
  // namedAfter: null. Hand-authored convention only — a model-shaped entry
  // says the same thing with `basis-none` and `searched-*`, derived by
  // tools/generate.js from the entity, where tools/check-model.js is the guard.
  if (!modelShaped(v)) {
    if (v.namedAfter === null && !v.categories.includes("unknown"))
      warn(id, "namedAfter is null but 'unknown' category missing");
    if (v.categories.includes("unknown") && v.namedAfter !== null)
      warn(id, "'unknown' category but namedAfter is set — pick one");
  } else if (v.categories.includes("unknown") || v.categories.includes("unresearched")) {
    err(id, "carries a legacy-only status category beside a derived one — tools/generate.js should never emit 'unknown' / 'unresearched'");
  }
  // The style budget (note / namedAfter length) is checked on the authored
  // entities by tools/check-model.js, once per entity — not here, where the
  // same text repeats on every stretch it names (ROADMAP §11).
  const spanChecks = [
    ["namedAfter", v.namedAfter, v.namedAfterLink],
    ...(v.nameHistory || []).map((h, j) => [`nameHistory[${j}].origin`, h.origin, h.originLink])
  ];
  for (const [field, text, link] of spanChecks) {
    if (!text) continue;
    const m = text.match(/\{\{(.+?)\}\}/);
    if (m && m[1].length > 45) warn(id, `${field}: {{}} span "${m[1].slice(0, 30)}..." is ${m[1].length} chars — link a few words, not a clause`);
    // a link with no marker makes the ENTIRE text the link — always mark a span
    if (link && !m && text.length > 45) warn(id, `${field}: has a link but no {{}} marker — the whole text becomes the link; wrap a few words`);
  }
}

// {{...}} link-span markers: at most one per field, balanced, and pointless without a link
function checkBraces(id, field, text, url) {
  if (!text) return;
  const open = (text.match(/\{\{/g) || []).length, close = (text.match(/\}\}/g) || []).length;
  if (open !== close || open > 1) err(id, field, "unbalanced or multiple {{}} markers");
  if (open && !url) warn(id, field, "has {{}} marker but no link");
}

NEIGHBORHOODS.forEach(nb => {
  if (!nb.id || !nb.name || !nb.bbox) err("NEIGHBORHOODS", nb.id || "?", "needs id, name, bbox");
  else if (nb.bbox.s >= nb.bbox.n || nb.bbox.w >= nb.bbox.e) err("NEIGHBORHOODS", nb.id, "bbox has s>=n or w>=e");
});

for (const [key, v] of Object.entries(STREET_DATA)) {
  if (/^(North|South|East|West)\s/i.test(key)) err(key, "keys must omit directional prefixes");
  if (!v.segments) { checkEntry(key, v); continue; }

  // --- segmented street ---
  if (v.orientation !== "NS" && v.orientation !== "EW") err(key, "segmented street needs orientation 'NS' or 'EW'");
  v.segments.forEach((s, i) => {
    const id = key + "::" + i;
    if (!s.label) err(id, "segment missing label");
    else if (s.label.length > 40) warn(id, "label over 40 chars — chips should be a few words");
    // from/to: a cross-street name, null (coverage edge / physical end), or a
    // pixel on a document's render (§5.4); see isExtent
    for (const f of ["from", "to"]) {
      if (s[f] !== undefined && !isExtent(s[f]))
        err(id, `${f} must be a cross-street name string, null, or { px: [x, y] } — got ${JSON.stringify(s[f])}`);
    }
    checkEntry(id, s);
  });
  // Adjacent segments should meet at a shared cross-street, unless the street
  // is physically discontinuous there (gapAfter: true on the earlier segment).
  // Only NAMES can be compared: two pixel extents are on two different
  // renders, and their agreement is the band-tiling check below, which is
  // what the generator guarantees by construction.
  for (let i = 1; i < v.segments.length; i++) {
    const a = v.segments[i - 1], b = v.segments[i];
    if (typeof a.to === "string" && typeof b.from === "string" && a.to !== b.from && !a.gapAfter)
      warn(key + "::" + i, `from ${showExtent(b.from)} doesn't match previous segment's to ${showExtent(a.to)} — shared boundary, or set gapAfter`);
  }

  // band coverage: every position along the street resolves to exactly one segment
  const isNS = v.orientation === "NS";
  const lo = isNS ? BBOX.s : BBOX.w, hi = isNS ? BBOX.n : BBOX.e;
  const bandOf = s => isNS ? [s.minLat, s.maxLat] : [s.minLng, s.maxLng];
  for (let x = lo; x < hi; x += (hi - lo) / 200) {
    const hits = v.segments.filter(s => {
      const [mn, mx] = bandOf(s);
      return (mn === undefined || x >= mn) && (mx === undefined || x < mx);
    }).length;
    if (hits !== 1) { err(key, `position ${x.toFixed(4)} matches ${hits} segments (bands must tile with no gaps/overlaps)`); break; }
  }

  // canonical chip order: NS = north→south (descending), EW = west→east (ascending)
  const mid = s => {
    const [mn, mx] = bandOf(s);
    return ((mn !== undefined ? mn : lo) + (mx !== undefined ? mx : hi)) / 2;
  };
  for (let i = 1; i < v.segments.length; i++) {
    const prev = mid(v.segments[i - 1]), cur = mid(v.segments[i]);
    if (isNS && cur >= prev) err(key, "segments out of canonical order — N–S streets list north to south");
    if (!isNS && cur <= prev) err(key, "segments out of canonical order — E–W streets list west to east");
  }
}

if (errors) { console.error(`\n${errors} error(s).`); process.exit(1); }

// primary-anchor coverage (see ADDING-STREETS.md): survey, ordinance,
// contemporary newspaper, or recorded tract map. pw.lacounty.gov/sur/nas/
// landrecords serves the DPW recorded-map scans (tract maps + the recorded
// Ord Survey, M.R. 53-66/73) — a recorded-map primary record.
const PRIMARY = /tessa2?\.lapl\.org|cdnc\.ucr\.edu|clerk\.lacity\.org|navigatela\.lacity\.org|pqarchiver|newspapers\.com|pw\.lacounty\.gov\/sur\/nas\/landrecords/;
const allEntries = Object.values(STREET_DATA).flatMap(v => v.segments || [v]);
const anchored = allEntries.filter(v => (v.sources || []).some(s => PRIMARY.test(s.url))).length;
console.log(`All checks pass: ${Object.keys(STREET_DATA).length} streets, ${allEntries.length} entries` +
  ` (${GENERATED ? "generated file" : "hand-authored file"}). ` +
  `Primary-record anchor: ${anchored}/${allEntries.length}.`);
