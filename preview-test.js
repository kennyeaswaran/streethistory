// preview-test.js — drives preview.html in a real browser.
//
// The colour scheme is a claim about what the map SAYS, and it is made of a
// CSS-ish stroke colour on a Leaflet polyline. Nothing in the generator can
// check it. Run: node preview-test.js
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = http.createServer((req, res) => {
  const f = path.join(__dirname, decodeURIComponent(req.url.split("?")[0]));
  fs.readFile(f, (e, d) => e ? (res.writeHead(404), res.end())
    : (res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "text/plain" }), res.end(d)));
});

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? " — " + d : "")));

const BLUE = "#2e6f9e", GREY = "#c0c0c0";
// Blue is now a RAMP (§8 scheme 1 + saturation, 2026-08-31): full #2e6f9e
// only when the whole story is pinned, hsl(205 …) shades otherwise.
const isBlue = c => c === BLUE || /^hsl\(205[ ,]/.test(String(c));
const satOf = c => { const m = /^hsl\(205[ ,]+(\d+)%/.exec(String(c)); return m ? +m[1] : (c === BLUE ? 55 : -1); };

(async () => {
  const LEAFLET_DIR = path.join(__dirname, "node_modules/leaflet/dist");
  if (!fs.existsSync(path.join(LEAFLET_DIR, "leaflet.js"))) {
    console.error("Needs a local Leaflet to stand in for the CDN copy:\n" +
                  "  npm install leaflet@1.9.4 --no-save");
    process.exit(1);
  }
  if (!fs.existsSync(path.join(__dirname, "generated/streets-data.gen.js"))) {
    console.error("Run `node generate.js` first — this tests the generated map.");
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

  await page.goto("http://localhost:8124/preview.html");
  // Geometry comes from the bundled extract, so the map settles without network.
  await page.waitForFunction(() => typeof streets !== "undefined" && streets.size > 100,
                             null, { timeout: 30000 });
  await page.waitForTimeout(500);

  ok("the page loads without errors", errors.length === 0, errors.slice(0, 2).join(" | "));

  // What the map actually painted, read back off the polylines.
  const colourOf = (name, label) => page.evaluate(([n, l]) => {
    for (const [, st] of streets) {
      if (st.name !== n) continue;
      if (l !== null && (!st.entry || st.entry.label !== l)) continue;
      return st.ways.length ? st.ways[0].options.color : null;
    }
    return null;
  }, [name, label]);

  console.log("blue means a document speaks about THIS stretch");
  ok("Colton's State St stretch is blue",
     isBlue(await colourOf("Colton Street", "Belmont to Toluca (State St)")),
     String(await colourOf("Colton Street", "Belmont to Toluca (State St)")));
  ok("the Waters St stretch of Douglas is blue",
     isBlue(await colourOf("Douglas Street", "beyond Colton (Waters St)")),
     String(await colourOf("Douglas Street", "beyond Colton (Waters St)")));
  ok("…and the stretch south of Colton, which nothing attests, is grey",
     await colourOf("Douglas Street", "south of Colton") === GREY,
     String(await colourOf("Douglas Street", "south of Colton")));

  console.log("a numbered street is no longer blue end to end");
  ok("3rd Street beyond Bixel is grey",
     await colourOf("3rd Street", "beyond Bixel") === GREY,
     String(await colourOf("3rd Street", "beyond Bixel")));
  ok("…while its Arnold St stretch is blue",
     isBlue(await colourOf("3rd Street", "Bixel to Boylston (Arnold St)")),
     String(await colourOf("3rd Street", "Bixel to Boylston (Arnold St)")));

  // The whole point: most of the map should be grey, and it was not before.
  const tally = await page.evaluate(() => {
    let blue = 0, grey = 0;
    for (const [, st] of streets) {
      const c = st.ways.length ? st.ways[0].options.color : null;
      if (c === "#2e6f9e" || /^hsl\(205[ ,]/.test(String(c))) blue++;
      else if (c === "#c0c0c0") grey++;
    }
    return { blue, grey };
  });
  ok("most stretches are grey", tally.grey > tally.blue * 2, JSON.stringify(tally));
  ok("…but a real number are blue", tally.blue > 20, JSON.stringify(tally));

  console.log("rows are truncated to the document's footprint (2026-08-31)");
  // mr006-138's Court Street row says from:null,to:null — the street's own
  // ends — but the sheet only shows the Westlake stretch. The claim must not
  // reach the 1.3 km beyond the coverage polygon.
  ok("Court St inside the sheet is blue",
     isBlue(await colourOf("Court Street", "Union to Toluca (original Court St)")),
     String(await colourOf("Court Street", "Union to Toluca (original Court St)")));
  ok("…and Court St beyond the sheet is grey",
     await colourOf("Court Street", "east of Toluca") === GREY,
     String(await colourOf("Court Street", "east of Toluca")));

  console.log("negative testimony renders grey, not blue (2026-08-31)");
  // A stretch whose ONLY document row is an `absent` — a sheet showing no
  // street here yet — must not look like an attested one…
  ok("Hope St beyond 6th (absent-only) is grey",
     await colourOf("Hope Street", "beyond 6th") === GREY,
     String(await colourOf("Hope Street", "beyond 6th")));
  // …but the finding still reaches the popup.
  const hopePop = await page.evaluate(() => {
    for (const [, st] of streets)
      if (st.name === "Hope Street" && st.entry && st.entry.label === "beyond 6th")
        return popupHtml(st);
    return "";
  });
  ok("…and its popup says so", /No street yet/.test(hopePop) && /1849/.test(hopePop),
     hopePop.slice(0, 160));

  console.log("saturation tracks how much of the story is pinned");
  const satOriginal = satOf(await colourOf("3rd Street", "beyond Hill (original 3rd St)"));
  const satArnold = satOf(await colourOf("3rd Street", "Bixel to Boylston (Arnold St)"));
  ok("the pinned-since-1849 stretch is deeper blue than the one-sighting Arnold stretch",
     satOriginal > satArnold + 10, `original=${satOriginal}% arnold=${satArnold}%`);

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

  ok("still no page errors", errors.length === 0, errors.slice(0, 2).join(" | "));

  await page.screenshot({ path: "preview-colours.png" });
  await browser.close();
  server.close();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
