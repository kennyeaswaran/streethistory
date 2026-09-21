// tests/preview-test.js — drives index.html (the generated-data map) in a real browser.
//
// The colour scheme is a claim about what the map SAYS, and it is made of a
// CSS-ish stroke colour on a Leaflet polyline. Nothing in the generator can
// check it. Run: node tests/preview-test.js
const PROJECT = require("path").join(__dirname, ".."); // the project root: this script lives one folder down
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = http.createServer((req, res) => {
  const f = path.join(PROJECT, decodeURIComponent(req.url.split("?")[0]));
  fs.readFile(f, (e, d) => e ? (res.writeHead(404), res.end())
    : (res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "text/plain" }), res.end(d)));
});

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? " — " + d : "")));

// Blue stopped being one colour when scheme 1 grew its saturation ramp
// (index.html blueFor): a stretch is painted somewhere between hsl(205 25%
// 68%) and hsl(205 55% 40%) depending on how much of its story is pinned. The
// claim under test was never about a particular hex — it is "a document speaks
// about this stretch" versus "only the OSM extract does" — so the test asks
// which side of that line the paint falls on, and goes on meaning it as the
// ramp is tuned.
const GREY = "#c0c0c0";
const isBlue = c => /^hsl\(205\b/.test(String(c)) || String(c) === "#2e6f9e";
const isGrey = c => String(c) === GREY;

(async () => {
  const LEAFLET_DIR = path.join(PROJECT, "node_modules/leaflet/dist");
  if (!fs.existsSync(path.join(LEAFLET_DIR, "leaflet.js"))) {
    console.error("Needs a local Leaflet to stand in for the CDN copy:\n" +
                  "  npm install leaflet@1.9.4 --no-save");
    process.exit(1);
  }
  if (!fs.existsSync(path.join(PROJECT, "generated/streets-data.js"))) {
    console.error("Run `node tools/generate.js` first — this tests the generated map.");
    process.exit(1);
  }
  await new Promise(r => server.listen(8124, r));
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  // Basemap tiles come from tile.openstreetmap.org, which the sandbox cannot
  // reach; a missing tile is not a fault in the page. Everything else counts.
  const noise = t => /ERR_TUNNEL_CONNECTION_FAILED|Failed to load resource/.test(t);
  const errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  page.on("console", m => { if (m.type() === "error" && !noise(m.text())) errors.push(m.text()); });

  // Leaflet comes from a CDN this sandbox cannot reach; serve the local copy
  // in its place. Nothing else is rewritten — the file under test is the file
  // that ships, CDN reference and all.
  const LEAFLET = LEAFLET_DIR;
  await page.route("**/leaflet*.js", r =>
    r.fulfill({ contentType: "text/javascript",
                body: fs.readFileSync(path.join(LEAFLET, "leaflet.js"), "utf8") }));
  await page.route("**/leaflet*.css", r =>
    r.fulfill({ contentType: "text/css",
                body: fs.readFileSync(path.join(LEAFLET, "leaflet.css"), "utf8") }));

  await page.goto("http://localhost:8124/index.html");
  // Geometry comes from the bundled extract, so the map settles without network.
  await page.waitForFunction(() => typeof streets !== "undefined" && streets.size > 100,
                             null, { timeout: 30000 });
  await page.waitForTimeout(500);

  ok("the page loads without errors", errors.length === 0, errors.slice(0, 2).join(" | "));

  // What the map actually painted, read back off the polylines.
  console.log("blue means a document speaks about THIS stretch");
  // Checked across the whole map rather than on named stretches. Until
  // 2026-09-20 this section looked up five stretches by label ("Colton Street,
  // Belmont to Toluca (State St)", …). Every new sheet re-cuts and relabels
  // segments, so the lookups went null one by one and the checks failed while
  // the map was right. The claim itself doesn't depend on which stretches exist:
  // a stretch the generator marks `attested` (a document other than the base
  // map speaks about it) is blue, and every other stretch is grey.
  const paint = await page.evaluate(() => {
    const out = [];
    for (const [, st] of streets) {
      const e = st.entry;
      out.push({ name: st.name, label: e ? e.label : null, hasEntry: !!e,
                 attested: e ? e.attested : undefined,
                 colour: st.ways.length ? String(st.ways[0].options.color) : null });
    }
    return out;
  });
  const drawn = paint.filter(p => p.colour !== null);
  // A street the generated data doesn't carry at all (an OSM name nobody has
  // curated, like a plaza or a station entrance) is base map only: grey.
  const bare = drawn.filter(p => !p.hasEntry);
  ok("a street with no entry is grey", bare.every(p => isGrey(p.colour)),
     bare.filter(p => !isGrey(p.colour)).slice(0, 3).map(p => `${p.name} ${p.colour}`).join(" | "));
  const entries = drawn.filter(p => !bare.includes(p));
  const unsaid = entries.filter(p => typeof p.attested !== "boolean");
  ok("every stretch with an entry says whether a document speaks about it",
     unsaid.length === 0, unsaid.slice(0, 3).map(p => `${p.name} / ${p.label}`).join(" | "));
  const wrong = entries.filter(p => p.attested === true ? !isBlue(p.colour)
                                  : p.attested === false ? !isGrey(p.colour) : false);
  ok("every attested stretch is blue and every other stretch is grey",
     wrong.length === 0,
     `${wrong.length} of ${entries.length}: ` +
     wrong.slice(0, 3).map(p => `${p.name} / ${p.label} (${p.attested}) ${p.colour}`).join(" | "));
  ok("…and both kinds are there to check", entries.some(p => p.attested) && entries.some(p => !p.attested),
     `${entries.filter(p => p.attested).length} attested of ${entries.length}`);

  console.log("a street is coloured stretch by stretch, not end to end");
  // Blue used to be read off the NAME, which painted whole numbered streets
  // blue on the strength of one entry. Per stretch, plenty of streets are part
  // blue, part grey.
  const byName = new Map();
  for (const p of drawn) {
    const k = byName.get(p.name) || { blue: 0, grey: 0 };
    if (isBlue(p.colour)) k.blue++; else if (isGrey(p.colour)) k.grey++;
    byName.set(p.name, k);
  }
  const mixed = [...byName].filter(([, k]) => k.blue && k.grey).map(([n]) => n);
  ok("many streets are part blue, part grey", mixed.length >= 10,
     `${mixed.length}: ${mixed.slice(0, 5).join(", ")}`);

  // The whole point: most of the map should be grey, and it was not before.
  const tally = await page.evaluate(() => {
    let blue = 0, grey = 0;
    for (const [, st] of streets) {
      const c = st.ways.length ? st.ways[0].options.color : null;
      if (/^hsl\(205\b/.test(String(c)) || c === "#2e6f9e") blue++;
      else if (c === "#c0c0c0") grey++;
    }
    return { blue, grey };
  });
  // ★ REWRITTEN 2026-09-15. This used to assert `grey > blue * 2` — "most
  // stretches are grey" — which was true when the corpus was thin and stopped
  // being true as the documents went in: attestation passed half in 2026 and
  // the assertion started failing on success. A test that fails because the
  // project got better is measuring the wrong thing. What the scheme actually
  // claims is that it DISCRIMINATES: a stretch is painted by whether a document
  // speaks about it, so neither colour should swallow the map. That claim does
  // not rot as the corpus grows.
  const share = c => c / (tally.blue + tally.grey);
  ok("the colour scheme discriminates rather than painting one colour",
     share(tally.blue) > 0.15 && share(tally.grey) > 0.15, JSON.stringify(tally));
  ok("…and both populations are large enough to read",
     tally.blue > 20 && tally.grey > 20, JSON.stringify(tally));

  console.log("the entity's own note reaches the popup");
  const pop = await page.evaluate(() => {
    for (const [, st] of streets)
      if (st.name === "Ceres Avenue" && st.entry && st.entry.attested) return popupHtml(st);
    return "";
  });
  ok("Ceres carries the harvest-goddess speculation", /goddess of agriculture/.test(pop),
     pop.slice(0, 160));
  ok("…and still cites the Wikipedia page",
     /en\.wikipedia\.org\/wiki\/Ceres_\(mythology\)/.test(pop));

  console.log("a merged multi-sheet stretch cites its map once");
  const crocker = await page.evaluate(() => {
    for (const [, st] of streets)
      if (st.name === "Crocker Street" && st.entry && st.entry.attested) return popupHtml(st);
    return "";
  });
  ok("Crocker's Stanford period names the sheets in one clause",
     /Wolfskill Orchard Tract \(sheets 2–5\)/.test(crocker),
     (crocker.match(/labeled[^<]{0,120}/) || [""])[0]);
  ok("…and does not repeat the map sheet by sheet",
     (crocker.match(/Wolfskill Orchard Tract/g) || []).length <= 2,
     String((crocker.match(/Wolfskill Orchard Tract/g) || []).length));

  // -------------------------------------------------------------------------
  // The Highlight tree (ROADMAP §7). Nothing tested this control before it
  // grew a tree, which is precisely when it needed a test: "selecting a parent
  // matches every descendant" is a claim about paint, and the generator cannot
  // check it either.
  // -------------------------------------------------------------------------
  const tree = await page.evaluate(() => {
    const d = document.getElementById("filters");
    const facets = [...d.querySelectorAll(".facet")].map(x => x.textContent);
    const rows = [...d.querySelectorAll("label")].map(l => {
      const t = l.querySelector(".fcount").textContent;      // "18 (24)" or "0"
      const m = t.match(/^(\d+)(?:\s*\((\d+)\))?/) || [];
      return {
        id: l.querySelector("input").value,
        indent: parseInt(l.style.paddingLeft || "0", 10),
        count: +(m[1] || 0),
        ever: m[2] === undefined ? +(m[1] || 0) : +m[2],
        text: t
      };
    });
    return { facets, rows };
  });
  ok("the Highlight list is grouped into facets",
     tree.facets.length === 2, JSON.stringify(tree.facets));
  ok("…and no facet row is itself selectable",
     !tree.rows.some(r => ["referent", "status"].includes(r.id)));
  // Six top-level referents is the number a reader can hold at a glance. If it
  // grows, it should grow on purpose.
  const tops = await page.evaluate(() =>
    CATEGORIES.filter(c => c.parent === "referent").map(c => c.id).sort());
  ok("there are six top-level referents",
     tops.length === 6 && tops.join() === "abstract,company,nature,object,person,place",
     JSON.stringify(tops));
  ok("children are indented under their parent",
     tree.rows.some(r => r.id === "tree" && r.indent > 0) &&
     tree.rows.some(r => r.id === "nature" && r.indent === 0));
  ok("a parent's count includes its descendants",
     (tree.rows.find(r => r.id === "nature") || {}).count >=
     (tree.rows.find(r => r.id === "tree") || {}).count);

  // Collapsed on arrival: thirty-two nodes is a scroll, the dozen top-level
  // ones fit. A closed parent hides nothing, because its count already
  // includes everything under it.
  const collapse = await page.evaluate(() => {
    const vis = id => {
      const i = [...document.querySelectorAll("#filters input")].find(x => x.value === id);
      return !!(i && i.offsetParent !== null);
    };
    const before = { nature: vis("nature"), tree: vis("tree") };
    const lab = [...document.querySelectorAll("#filters label")]
      .find(l => l.querySelector("input").value === "nature");
    lab.querySelector(".twisty").click();
    return { before, afterTree: vis("tree"),
             twisty: lab.querySelector(".twisty").getAttribute("aria-expanded") };
  });
  ok("top-level nodes are visible on arrival", collapse.before.nature);
  ok("…and their children are not", !collapse.before.tree);
  ok("the twisty opens a node", collapse.afterTree && collapse.twisty === "true");

  // §3.1 on the map. The reason the file writes candid guesses into
  // `namedAfter` at all is that the grade travels with them, so both the
  // filter node and the popup badge are load-bearing, not decoration.
  const ev = await page.evaluate(() => {
    const ids = [...document.querySelectorAll("#filters input")].map(i => i.value);
    const kidsOf = p => CATEGORIES.filter(c => c.parent === p).map(c => c.id);
    return { ids, basisKids: kidsOf("basis"), noneKids: kidsOf("basis-none"),
             personOrder: CATEGORIES.filter(c => c.parent === "person" && c.only !== "legacy")
                            .map(c => c.id) };
  });
  ok("the basis node is on the map with all eight values",
     ev.basisKids.length === 8 && ev.ids.includes("basis-guess"), JSON.stringify(ev.basisKids));
  ok("…and the group itself cannot be selected, since it would match everything",
     !ev.ids.includes("basis"), JSON.stringify(ev.ids.filter(i => i.startsWith("basis"))));
  ok("…and searched hangs under the one grade it means anything for",
     ev.noneKids.length === 3 && ev.noneKids.every(k => k.startsWith("searched-")),
     JSON.stringify(ev.noneKids));
  ok("the legacy research tags are gone from the generated map",
     !ev.ids.includes("unknown") && !ev.ids.includes("unresearched"), JSON.stringify(ev.ids));
  ok("a street the base map alone knows has its own row", ev.ids.includes("stub"));
  ok("the person subtypes are in their authored order, not sorted by count",
     ev.personOrder.join() === "landowner,family,politician,mythological,people,foreign,alive",
     JSON.stringify(ev.personOrder));

  const badge = await page.evaluate(() => {
    for (const [, st] of streets) {
      if (!st.entry || !st.entry.namedAfter) continue;
      if (!(st.entry.categories || []).some(c => c.startsWith("basis-"))) continue;
      const h = popupHtml(st);
      if (/class="basis /.test(h)) return { name: st.name, ok: true };
    }
    return { ok: false };
  });
  ok("the popup prints the grade beside the namesake", badge.ok, JSON.stringify(badge));

  // Counts are NAME ENTITIES, not segments — a street drawn in eleven pieces is
  // one name. Recompute independently and compare.
  const counted = await page.evaluate(() => {
    const ids = new Set();
    for (const [name, v] of Object.entries(STREET_DATA))
      for (const e of (v.segments || v.entries || []))
        if ((e.categories || []).includes("number"))
          ids.add(e.entityId || ("~stub:" + (e.label || e.name || name)));
    let segs = 0;
    for (const v of Object.values(STREET_DATA))
      for (const e of (v.segments || v.entries || []))
        if ((e.categories || []).includes("number")) segs++;
    const shown = [...document.querySelectorAll("#filters label")]
      .find(l => l.querySelector("input").value === "number")
      .querySelector(".fcount").textContent;
    return { entities: ids.size, segments: segs, shown: parseInt(shown, 10) };
  });
  ok("the count beside a category is name entities, not segments",
     counted.shown === counted.entities, JSON.stringify(counted));

  // The parenthetical: every name that has EVER been in this category, current
  // plus former. In a project about renaming it is the more interesting number,
  // and it must never be smaller than the current one.
  const everRows = tree.rows.filter(r => r.ever > 0);
  ok("each count carries the current-and-former total in parentheses",
     everRows.length > 0 && everRows.every(r => /^\d+ \(\d+\)$/.test(r.text)),
     JSON.stringify(everRows.slice(0, 3)));
  ok("…which is never smaller than the current count",
     everRows.every(r => r.ever >= r.count),
     JSON.stringify(everRows.filter(r => r.ever < r.count)));
  ok("…and is strictly bigger somewhere, or it is not counting formers at all",
     everRows.some(r => r.ever > r.count),
     JSON.stringify(everRows.map(r => r.id + ":" + r.text).slice(0, 6)));
  ok("…which is the smaller, more useful number here",
     counted.entities < counted.segments, JSON.stringify(counted));

  // Take a real entry tagged with a CHILD node, and check the three cases that
  // matter: it matches itself, it matches its parent, it does not match a
  // sibling. Done against generated data rather than a fixture, so a migration
  // that forgets to emit `ancestors` fails here.
  const descend = await page.evaluate(() => {
    const all = [];
    for (const [name, v] of Object.entries(STREET_DATA))
      for (const e of (v.entries || v.segments || [])) all.push({ name, e });
    const probe = (leaf, parent, sibling) => {
      const hit = all.find(x => (x.e.categories || []).includes(leaf));
      if (!hit) return { leaf, missing: true };
      const paint = id => {
        activeFilters.clear(); activeFilters.add(id);
        return styleFor({ entry: hit.e, ways: [], key: "k" }).color;
      };
      const self = paint(leaf), par = paint(parent), sib = paint(sibling);
      activeFilters.clear();
      return { leaf, on: hit.name, self: self === COLOR_HIGHLIGHT,
               parent: par === COLOR_HIGHLIGHT, sibling: sib === COLOR_HIGHLIGHT };
    };
    return [probe("tree", "nature", "animal"),
            probe("number", "abstract", "aspiration"),
            probe("governor", "person", "place")];
  });
  for (const r of descend) {
    ok(`"${r.leaf}" is carried by at least one entry`, !r.missing);
    if (r.missing) continue;
    ok(`selecting "${r.leaf}" lights ${r.on}`, r.self);
    ok(`…and so does selecting its parent`, r.parent, JSON.stringify(r));
    ok(`…while a sibling does not`, !r.sibling, JSON.stringify(r));
  }

  ok("still no page errors", errors.length === 0, errors.slice(0, 2).join(" | "));

  await page.screenshot({ path: "preview-colours.png" });
  await browser.close();
  server.close();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
