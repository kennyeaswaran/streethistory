// browser-test.js — drives document-tool.html in a real browser.
// Unit tests cannot see a CSS rule that hides a panel; this can.
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");

// A document written the broken way — alignment.image with no path — built
// here rather than committed, so a stray fixture can never end up in the real
// documents/ set. The leading underscore is the parking convention that
// documents/index.js skips, so even a crashed run leaves nothing that breaks
// check-model.js.
const FIXTURE = path.join(__dirname, "documents/_bare-test");
const RENDER = "mr006-138-100dpi.png";
function makeFixture() {
  const src = path.join(__dirname, "documents/mr006-138", RENDER);
  if (!fs.existsSync(src)) return false;
  fs.mkdirSync(FIXTURE, { recursive: true });
  fs.copyFileSync(src, path.join(FIXTURE, RENDER));
  fs.writeFileSync(path.join(FIXTURE, "_bare-test.js"), `module.exports = {
  id: "_bare-test",
  title: "t", shortTitle: "t", url: "http://x", scan: null, transcription: null,
  date: { on: "1884" }, type: "tract-map", attests: "planned-by",
  completeness: "incidental", readBy: "human",
  coverage: [[202, 199], [694, 945], [1569, 919], [1573, 75], [564, 63]],
  alignment: {
    image: ${JSON.stringify(RENDER)},
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.068278, -118.263905] },
      { px: [1749, 0], ll: [34.064723, -118.256185] },
      { px: [0, 1115], ll: [34.064173, -118.266621] }
    ]
  },
  sweptFully: false, sweptFor: [], rows: []
};
`);
  return true;
}
const dropFixture = () => fs.rmSync(FIXTURE, { recursive: true, force: true });

const MIME = { ".html":"text/html", ".js":"text/javascript", ".png":"image/png", ".json":"application/json" };
const server = http.createServer((req, res) => {
  const f = path.join(__dirname, decodeURIComponent(req.url.split("?")[0]));
  fs.readFile(f, (e, d) => e ? (res.writeHead(404), res.end())
    : (res.writeHead(200, {"Content-Type": MIME[path.extname(f)] || "text/plain"}), res.end(d)));
});

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? " — " + d : "")));

(async () => {
  const haveFixture = makeFixture();
  await new Promise(r => server.listen(8123, r));
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({ viewport: { width: 1500, height: 950 } });
  const errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  const missing = [];
  page.on("response", r => { if (r.status() === 404) missing.push(r.url()); });
  // One dialog handler for the whole run: a second one races the first and
  // Playwright refuses the loser. `answers` lets a test feed a prompt.
  const dialogs = [], answers = [];
  page.on("dialog", d => {
    dialogs.push(d.message());
    if (d.type() === "prompt" && answers.length) d.accept(answers.shift());
    else d.dismiss();
  });

  await page.goto("http://localhost:8123/document-tool.html");
  await page.addInitScript(() => {});
  await page.evaluate(() => {
    // Pick the point on a feature that is furthest from every OTHER feature,
    // so a click there cannot be captured by a neighbour within tolerance.
    // Bring the feature into view first — the tool's own list does this now,
    // and a click at a negative y is not a click at all.
    window.centreOn = (pred) => {
      const f = reviewFeatures.find(pred);
      if (f) revealFeature(f);
    };
    window.clearestPointOn = (pred) => {
      let best = null;
      for (const f of reviewFeatures) {
        if (!pred(f)) continue;
        for (const [x, y] of f.pts) {
          let clear = Infinity;
          for (const g of reviewFeatures) if (g !== f) clear = Math.min(clear, distToPts(g.pts, x, y));
          if (!best || clear > best.clear) best = { x, y, clear };
        }
      }
      return best ? [Math.round(best.x), Math.round(best.y)] : null;
    };
  });
  await page.waitForFunction(() => typeof setMode === "function" || document.getElementById("cv"));

  // The two loaders and the file chooser sit at the BOTTOM of Open now, folded
  // behind their own summary: the three lists of folders are the way in, and
  // typing an id is the way in only when you already know which id you want.
  // A test that types one opens them first, exactly as a person would.
  const showLoaders = () => page.evaluate(() => {
    for (const id of ["openBox", "openByName"]) {
      const d = document.getElementById(id);
      if (d) d.open = true;
    }
  });

  console.log("loading a document");
  await showLoaders();
  await page.fill("#loadId", "mr066-035");
  await page.click("#loadDoc");
  await page.waitForFunction(() => loadedDoc && img, null, { timeout: 15000 });
  await page.waitForTimeout(400);

  ok("no page errors while loading",
     errors.filter(e => !/404/.test(e)).length === 0, errors.slice(0, 3).join(" | "));
  ok("every file the page asks for exists",
     missing.filter(u => !/favicon/.test(u)).length === 0, missing.join(" | "));
  ok("it switched itself to review mode",
     await page.evaluate(() => mode) === "review",
     await page.evaluate(() => mode));

  console.log("one panel, showing only the mode you are in");
  const vis = sel => page.evaluate(s => {
    const el = document.querySelector(s);
    if (!el) return { missing: true };
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    return { display: cs.display, visibility: cs.visibility, w: r.width, h: r.height,
             x: r.x, y: r.y, z: cs.zIndex };
  }, sel);
  const shown = () => page.evaluate(() => [...document.querySelectorAll(".modebody")]
    .filter(b => getComputedStyle(b).display !== "none").map(b => b.dataset.mode));

  const pv0 = await vis("#panel");
  ok("the panel is on screen", pv0.display !== "none" && pv0.w > 100 && pv0.h > 100,
     JSON.stringify(pv0));
  ok("…and leaves most of the window to the map", pv0.w < 500, String(pv0.w));
  ok("exactly one mode body is visible",
     (await shown()).length === 1, JSON.stringify(await shown()));
  ok("…and it is the mode we are in", (await shown())[0] === "review",
     JSON.stringify(await shown()));
  ok("the alignment sliders are not taking up space in review mode",
     (await vis("#op")).display === "none" || (await vis("#op")).h === 0);
  ok("nor the document header fields",
     (await vis("#f_title")).display === "none" || (await vis("#f_title")).h === 0);

  console.log("the Open box");
  ok("it folds itself away once something is open",
     await page.evaluate(() => !document.getElementById("openBox").open));
  const open = await page.textContent("#whatsOpen");
  ok("…and says what is open", /mr066-035/.test(open), open);

  console.log("connecting the project folder");
  const advice = await page.textContent("#dirState");
  ok("it names the folder to pick", /Street name history/.test(advice), advice);

  console.log("a document whose alignment.image has no path");
  if (!haveFixture) console.log("  (skipped — documents/mr006-138/ render not present)");
  else {
    // The tool used to WRITE a bare filename whenever the render came from the
    // file picker (which hands over a name and nothing else), and then could
    // never reopen the document — alignment.image is fetched relative to the
    // project root. documents/bare-test/ is exactly such a file.
    dialogs.length = 0;
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await page.waitForTimeout(100);
    await showLoaders();
    await page.fill("#loadId", "_bare-test");
    await page.click("#loadDoc");
    await page.waitForTimeout(1200);
    ok("it finds the render in the document's own folder", dialogs.length === 0,
       dialogs.join(" | ").slice(0, 160));
    ok("…and the scan is actually loaded",
       await page.evaluate(() => !!img && img.naturalWidth > 0));
    // 813 m along the sheet's top edge / 1749 px = 0.465 m/px. A wrong render
    // (or none) would not land anywhere near that.
    ok("…and the alignment restored onto it",
       await page.evaluate(() => Math.abs(scan.mppx - 0.465) < 0.01),
       String(await page.evaluate(() => scan.mppx)));
    ok("…and it repaired the path it shows you",
       (await page.inputValue("#renderPath")).includes("documents/_bare-test/"),
       await page.inputValue("#renderPath"));
    // Saving it must not write the bare name back out.
    ok("a save would record a project-relative path",
       await page.evaluate(() => renderRelPath().includes("documents/")),
       await page.evaluate(() => renderRelPath()));

    // back to the document the rest of the run expects (the Open box folds
    // itself away once something is loaded)
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await showLoaders();
    await page.fill("#loadId", "mr066-035");
    await page.click("#loadDoc");
    await page.waitForFunction(() => loadedDoc && loadedDoc.id === "mr066-035",
                               null, { timeout: 15000 });
    await page.waitForTimeout(400);
  }

  // The corpus moves: mr066-035 has since been swept for real. The gate tests
  // below are about the gate itself, not about this document's current state,
  // so run them from unswept.
  await page.evaluate(() => { docSwept = { fully: false, for: [] };
                              reviewSig = null; updateReviewActions(); });

  console.log("aligning a second sheet into the first sheet's folder");
  {
    // A document holds one alignment. Overwriting it is how a multi-page scan
    // destroys the first sheet's work, so the save must ask first.
    dialogs.length = 0;
    await page.evaluate(() => {
      renderPathUsed = "documents/mr066-035/mr066-035-100dpi-2.png";
      alignmentTouched = true;
    });
    await page.click("#mCoverage");
    await page.waitForTimeout(150);
    await page.click("#save");
    await page.waitForTimeout(400);
    ok("it warns before replacing an alignment for a different image",
       dialogs.some(d => /already holds an alignment/.test(d)),
       dialogs.join(" | ").slice(0, 160));
    ok("…and says each page needs its own document",
       dialogs.some(d => /-p1\/, -p2\//.test(d)), dialogs.join(" | ").slice(0, 200));
    // dismissed, so nothing was written
    ok("…and dismissing writes nothing",
       !dialogs.some(d => /^saved/.test(d)));
    await page.evaluate(() => { alignmentTouched = false; });
    await page.click("#mReview");
    await page.waitForTimeout(200);
  }

  console.log("handing it a PDF");
  {
    // A PDF used to fail silently: the picker filtered it out and the path
    // loader said only "could not load".
    dialogs.length = 0;
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await showLoaders();
    await page.fill("#renderPath", "inbox/MR006-138.pdf");
    await page.click("#loadRenderBtn");
    await page.waitForTimeout(300);
    const said = dialogs[0];
    ok("it says what a PDF needs instead of failing", said && /pdftoppm/.test(said),
       String(said).slice(0, 100));
    ok("…and names the script that does it", said && /new-document\.command/.test(said));
    ok("…and works out the document id", said && /mr006-138/.test(said),
       String(said).slice(0, 160));
    ok("the picker no longer hides PDFs from you",
       /pdf/i.test(await page.getAttribute("#file", "accept")),
       await page.getAttribute("#file", "accept"));
    await showLoaders();
    await page.fill("#renderPath", "");
  }

  console.log("the alignment survives a review save");
  {
    // Confirming a row must not quietly re-derive the alignment: the placement
    // the tool holds cannot represent everything a 3-point affine fit can, so a
    // round trip moves it a metre or two, every time it is written.
    const stored = await page.evaluate(() => loadedDoc.alignment.points);
    const written = await page.evaluate(() => serialiseDoc(""));
    const missing = stored.filter(p =>
      !written.includes(`ll: [${p.ll[0]}, ${p.ll[1]}]`));
    ok("an untouched alignment is written back unchanged", missing.length === 0,
       JSON.stringify(missing));

    // …but a real nudge in Align mode must replace it.
    await page.evaluate(() => { alignmentTouched = true; scan.rot += 0.02; });
    const moved = await page.evaluate(() => serialiseDoc(""));
    ok("a nudged alignment is rewritten instead", moved !== written);
    ok("…and the old control points are gone from it",
       stored.some(p => !moved.includes(`ll: [${p.ll[0]}, ${p.ll[1]}]`)));
    await page.evaluate(() => { scan.rot -= 0.02; alignmentTouched = false; });
  }

  console.log("clicking a street opens the popup");
  const feat = await page.evaluate(() => {
    // Aim at a point on a `state` row that is well clear of every OTHER
    // feature, since the hit test takes the nearest line within 14 px and
    // 3rd and 4th Street fork inside this tract — clicking near that fork
    // legitimately selects whichever is closer.
    let best = null;
    for (const f of reviewFeatures) {
      if (!f.street || !f.row || f.row.kind !== "state") continue;
      for (const [x, y] of f.pts) {
        let clear = Infinity;
        for (const g of reviewFeatures) if (g !== f) clear = Math.min(clear, distToPts(g.pts, x, y));
        if (!best || clear > best.clear)
          best = { street: f.street, x: Math.round(x), y: Math.round(y), clear,
                   n: reviewFeatures.length };
      }
    }
    return best;
  });
  ok("there are drawable features to click", feat && feat.n > 0, JSON.stringify(feat));
  ok("…and one is unambiguous enough to aim at", feat && feat.clear > 25, JSON.stringify(feat));

  await page.mouse.move(feat.x, feat.y);
  await page.mouse.down();
  await page.mouse.up();
  await page.waitForTimeout(250);

  const pv = await vis("#pop");
  ok("the popup is displayed", pv.display !== "none", JSON.stringify(pv));
  ok("…with real size", pv.w > 100 && pv.h > 40, JSON.stringify(pv));
  ok("…fully inside the viewport", pv.x >= 0 && pv.y >= 0 &&
     pv.x + pv.w <= 1500 && pv.y + pv.h <= 950, JSON.stringify(pv));
  ok("…on top of the side panels", +pv.z > 10, String(pv.z));

  const txt = await page.textContent("#pop");
  ok("it names the street clicked", txt.includes(feat.street), feat.street + " / " + txt.slice(0, 80));
  ok("…and it is the street we aimed at",
     await page.evaluate(() => selStreet) === feat.street,
     await page.evaluate(() => selStreet));
  ok("it lists row fields", /asWritten/.test(txt) && /basis/.test(txt), txt.slice(0, 120));
  ok("it offers a name picker", await page.locator("#pop input.npick").count() > 0);
  ok("it offers a confirm button", await page.locator("#pop button.conf").count() > 0);

  console.log("the controls work");
  const before = await page.evaluate(() => JSON.stringify(loadedDoc.rows.map(r => r.confirmed)));
  await page.locator("#pop button.conf").first().click();
  await page.waitForTimeout(250);
  const after = await page.evaluate(() => JSON.stringify(loadedDoc.rows.map(r => r.confirmed)));
  ok("confirming a row changes the document", before !== after, before + " -> " + after);
  ok("the popup survives the edit",
     (await vis("#pop")).display !== "none");
  ok("Save review became enabled",
     !(await page.locator("#saveReview").isDisabled()));
  ok("the sweep gate explains what is missing",
     /Not sweepable yet/.test(await page.textContent("#sweepState")),
     await page.textContent("#sweepState"));

  const entOpts = await page.locator("#entlist option").count();
  ok("the name picker has entities to offer", entOpts > 5, String(entOpts));

  console.log("tracing a street that has no modern counterpart");
  {
    const before = await page.evaluate(() => loadedDoc.rows.length);
    dialogs.length = 0;
    await page.click("#traceStart");
    ok("Finish and Cancel appear, Trace goes away",
       await page.isVisible("#traceDone") && !(await page.isVisible("#traceStart")));
    ok("it says a trace needs two points",
       /two points is the minimum/.test(await page.textContent("#traceState")),
       await page.textContent("#traceState"));

    // Finishing with one point must be refused, not silently accepted.
    await page.mouse.click(700, 300);
    await page.waitForTimeout(120);
    await page.click("#traceDone");
    await page.waitForTimeout(150);
    ok("one point is refused", dialogs.some(d => /at least two points/.test(d)),
       dialogs.join(" | "));
    ok("…and no row was added",
       await page.evaluate(() => loadedDoc.rows.length) === before);

    await page.mouse.click(760, 380);
    await page.waitForTimeout(120);
    ok("the point count keeps up", /2 points/.test(await page.textContent("#traceState")),
       await page.textContent("#traceState"));

    // Cancelling leaves nothing behind.
    await page.click("#traceCancel");
    await page.waitForTimeout(120);
    ok("cancel drops the trace",
       await page.evaluate(() => tracing === null && loadedDoc.rows.length) === before);
    ok("…and restores the button", await page.isVisible("#traceStart"));

    // A real one, answering the asWritten prompt.
    answers.push("Waters Street");
    await page.click("#traceStart");
    await page.mouse.click(700, 300); await page.waitForTimeout(80);
    await page.mouse.click(760, 380); await page.waitForTimeout(80);
    await page.click("#traceDone");
    await page.waitForTimeout(300);
    const row = await page.evaluate(() => loadedDoc.rows[loadedDoc.rows.length - 1]);
    ok("a vanished row is added", row && row.kind === "vanished", JSON.stringify(row));
    ok("…carrying the verbatim ink", row.asWritten === "Waters Street", row.asWritten);
    ok("…and a trace in scan pixels", Array.isArray(row.trace) && row.trace.length === 2,
       JSON.stringify(row.trace));
    ok("…marked unconfirmed, since it still has no name entity",
       row.confirmed === false && !row.name);
    ok("the popup opens on it so it is not forgotten",
       (await page.textContent("#pop")).includes("Waters Street"),
       (await page.textContent("#pop") || "").slice(0, 80));
    ok("a vanished row can be re-traced",
       await page.locator("#pop button.retrace").count() === 1);
    ok("the sweep now refuses on the nameless row",
       /no name entity/.test(await page.textContent("#sweepState")),
       await page.textContent("#sweepState"));

    // put mr066-035 back the way the rest of the run expects
    await page.evaluate(n => { loadedDoc.rows.length = n; lastModel = null; reviewSig = null; },
                        before);
    await page.evaluate(() => draw());
  }

  console.log("stretches no row speaks for");
  {
    // MR006-138 is the case this came from: Douglas Street has a row for the
    // part matching Waters Street and 152 m south of it that nothing covers.
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await page.waitForTimeout(100);
    await showLoaders();
    await page.fill("#loadId", "mr006-138");
    await page.click("#loadDoc");
    await page.waitForFunction(() => loadedDoc && loadedDoc.id === "mr006-138",
                               null, { timeout: 15000 });
    await page.waitForTimeout(600);

    // Make the gap rather than depend on the document still having one: this
    // is live data, and the whole point of the feature is that Kenny closes
    // these. Drop whatever row covers Douglas Street, in memory only.
    // Also un-sweep it and put back the streets already excluded as overshoot,
    // so the sweep gate and the exclusion flow both have something to act on.
    await page.evaluate(() => {
      // Keep only the `state` row on Douglas, whatever the others are called —
      // this fixture is live data and its row kinds have been renamed once.
      loadedDoc.rows = loadedDoc.rows.filter(r => r.street !== "Douglas Street" ||
                                                  r.kind === "state");
      docSwept = { fully: false, for: [] };
      coverageExcept = [];
      lastModel = null; reviewSig = null; draw(); updateReviewActions();
    });
    await page.waitForTimeout(300);

    const m = () => page.evaluate(() => ({
      gaps: lastModel.gaps.map(g => ({ street: g.street, m: Math.round(g.metres) })),
      metres: lastModel.counts.gapMetres,
      status: Object.fromEntries(lastModel.streets.map(s => [s.name, s.status]))
    }));
    const before = await m();
    ok("a street with a row can still have an unaccounted stretch",
       before.gaps.some(g => g.street === "Douglas Street"), JSON.stringify(before.gaps));
    ok("…and the street reads as partial, not named",
       before.status["Douglas Street"] === "partial", before.status["Douglas Street"]);
    ok("the sweep counts metres, not street names",
       /m across/.test(await page.textContent("#sweepState")),
       await page.textContent("#sweepState"));

    // Clicking the gap must offer both answers, and they are different claims.
    // Aim at the point on the gap furthest from every other feature — this
    // sheet has vanished traces running close to it, and the hit test takes
    // the nearest line, quite correctly.
    await page.evaluate(() => centreOn(f => f.gap && f.gap.street === "Douglas Street"));
    await page.waitForTimeout(200);
    const at = await page.evaluate(() => clearestPointOn(
      f => f.gap && f.gap.street === "Douglas Street"));
    ok("the gap can be brought on screen",
       at && at[0] > 0 && at[1] > 0 && at[0] < 1500 && at[1] < 950, JSON.stringify(at));
    await page.mouse.click(at[0], at[1]);
    await page.waitForTimeout(250);
    ok("clicking it offers an absent row", await page.locator("#pop button.mkabsent").count() === 1);
    ok("…and an exclusion of this stretch", await page.locator("#pop button.mkexcept").count() === 1);
    ok("…and of the whole street", await page.locator("#pop button.mkexceptall").count() === 1);
    ok("…and names the ends in row vocabulary",
       /Colton|px /.test(await page.textContent("#pop")),
       (await page.textContent("#pop")).slice(0, 140));

    const rows0 = await page.evaluate(() => loadedDoc.rows.length);
    await page.locator("#pop button.mkabsent").first().click();
    await page.waitForTimeout(400);
    const after = await m();
    ok("a absent row closes the gap",
       !after.gaps.some(g => g.street === "Douglas Street"), JSON.stringify(after.gaps));
    ok("…and it is a real row with extents",
       await page.evaluate(() => {
         const r = loadedDoc.rows[loadedDoc.rows.length - 1];
         return r.kind === "absent" && r.street === "Douglas Street" && "from" in r && "to" in r;
       }));
    ok("…added as a proposal, not silently vouched for",
       await page.evaluate(() => loadedDoc.rows[loadedDoc.rows.length - 1].confirmed === false));
    ok("…and one row longer", await page.evaluate(() => loadedDoc.rows.length) === rows0 + 1);

    console.log("dropping a street the polygon overshoots");
    // Close the popup first: it sits over the canvas and would swallow the click.
    await page.evaluate(() => hidePop());
    await page.waitForTimeout(120);
    const gap2 = await page.evaluate(() => {
      const f = reviewFeatures.find(x => x.gap && x.gap.street !== "Douglas Street");
      if (!f) return null;
      centreOn(x => x.gap && x.gap.street === f.gap.street);
      return { street: f.gap.street,
               at: clearestPointOn(x => x.gap && x.gap.street === f.gap.street) };
    });
    ok("there is another overshoot to test on", !!gap2, JSON.stringify(gap2));
    await page.mouse.click(gap2.at[0], gap2.at[1]);
    await page.waitForTimeout(250);
    answers.push("");                       // the confirm() is answered below
    dialogs.length = 0;
    page.once("dialog", () => {});          // no-op; the global handler dismisses
    await page.locator("#pop button.mkexcept").first().click();
    await page.waitForTimeout(200);
    ok("it asks before dropping ground from coverage",
       dialogs.some(d => /Drop .* from the document's coverage/.test(d)), dialogs.join(" | "));
    ok("…and says which stretch, in metres", dialogs.some(d => /Drop this \d+ m of/.test(d)),
       dialogs.join(" | "));
    ok("…and dismissing means nothing changed",
       await page.evaluate(() => coverageExcept.length) === 0);

    // Now accept it.
    // push the whole-street form, which is what "all of <street>" writes
    await page.evaluate(s => { coverageExcept.push(s); lastModel = null; reviewSig = null; draw(); },
                        gap2.street);
    await page.waitForTimeout(300);
    const after2 = await m();
    ok("the excluded street leaves the model",
       !(gap2.street in after2.status), Object.keys(after2.status).join(", "));
    ok("…and its gap goes with it",
       !after2.gaps.some(g => g.street === gap2.street), JSON.stringify(after2.gaps));
    ok("…and the panel says so, with an undo",
       (await page.textContent("#revStreets")).includes("overshoot") &&
       await page.locator("#revStreets a[data-unexcept]").count() > 0,
       (await page.textContent("#revStreets")).slice(-120));
    ok("it is written into the document",
       (await page.evaluate(() => serialiseDoc(""))).includes("coverageExcept"));

    await page.locator("#revStreets a[data-unexcept]").first().click();
    await page.waitForTimeout(300);
    ok("undo puts it back",
       gap2.street in (await m()).status, Object.keys((await m()).status).join(", "));

  console.log("re-classifying a row, and deleting one");
  {
    // The AI pass reliably confuses "no name lettered here" with "no street
    // here"; both were `silent`/`absent` until `unnamed` existed.
    await page.evaluate(() => hidePop());
    // A street with more than one row, so the "also on this street" list has
    // something in it — that list is what replaced showing every row at once.
    // Needs a street with more than one row AND a `state` row drawn on it —
    // the click below aims at a state feature, and a street whose rows are all
    // `absent` has nothing to hit.
    const multi = await page.evaluate(() => {
      const s = lastModel.streets.find(x => x.rows.length > 1 &&
        x.rows.some(r => r.kind === "state") &&
        reviewFeatures.some(f => f.street === x.name && f.row && f.row.kind === "state"));
      return s ? s.name : null;
    });
    ok("a street with several rows exists to test on", !!multi, String(multi));
    // Bring it on screen before aiming: the clearest point on a feature is
    // often outside the window, and a click at y=987 in a 950-high viewport is
    // not a click at all.
    await page.evaluate(n => centreOn(f => f.row && f.row.kind === "state" && f.street === n), multi);
    await page.waitForTimeout(200);
    const at = await page.evaluate(n => clearestPointOn(
      f => f.row && f.row.kind === "state" && f.street === n), multi);
    await page.mouse.click(at[0], at[1]);
    await page.waitForTimeout(250);
    ok("the popup offers the row's kind", await page.locator("#pop select.kindpick").count() === 1);
    ok("…with only one row's controls, not every row on the street",
       await page.locator("#pop button.conf").count() === 1,
       String(await page.locator("#pop button.conf").count()));
    ok("…and lists the street's other stretches as links",
       await page.locator("#pop li[data-sib]").count() > 0);

    const before = await page.evaluate(() => loadedDoc.rows.length);
    await page.selectOption("#pop select.kindpick", "unnamed");
    await page.waitForTimeout(350);
    const changed = await page.evaluate(() =>
      loadedDoc.rows.filter(r => r.kind === "unnamed").length);
    ok("changing the kind takes", changed === 1, String(changed));
    ok("…and strips the fields that kind cannot carry",
       await page.evaluate(() => loadedDoc.rows.every(r =>
         r.kind !== "unnamed" || (!r.name && !r.asWritten))));
    ok("…and un-confirms it, since it now says something else",
       await page.evaluate(() => loadedDoc.rows.some(r => r.kind === "unnamed" && r.confirmed === false)));

    // Reclassifying INTO state strips asWritten, so the field has to be there
    // to type it back in — otherwise the row can never be confirmed and the
    // sheet can never be finished.
    await page.selectOption("#pop select.kindpick", "state");
    await page.waitForTimeout(350);
    ok("a state row offers an asWritten box",
       await page.locator("#pop textarea.awpick").count() === 1);
    ok("…which starts empty after the reclassification",
       (await page.inputValue("#pop textarea.awpick")) === "",
       await page.inputValue("#pop textarea.awpick"));
    await page.fill("#pop textarea.awpick", "THIRD St");
    // A textarea keeps Enter for a newline — that is how a second lettered
    // form is typed — so the edit commits on blur, not on Enter.
    await page.locator("#pop textarea.awpick").blur();
    await page.waitForTimeout(350);
    ok("typing the ink lands on the row",
       await page.evaluate(() => loadedDoc.rows.some(r => r.asWritten === "THIRD St")));
    ok("…and the popup stays on that row",
       (await page.inputValue("#pop textarea.awpick")) === "THIRD St");

    // The Ord survey case: one row, two lettered forms, one per line.
    await page.fill("#pop textarea.awpick", "THIRD St\nCALLE 3a");
    await page.locator("#pop textarea.awpick").blur();
    await page.waitForTimeout(350);
    ok("two lines become two forms on one row",
       await page.evaluate(() => loadedDoc.rows.some(r =>
         Array.isArray(r.asWritten) && r.asWritten.length === 2 &&
         r.asWritten[1] === "CALLE 3a")),
       await page.evaluate(() => JSON.stringify(loadedDoc.rows.map(r => r.asWritten).filter(Boolean).slice(-3))));
    ok("…and the box shows them back, one per line",
       (await page.inputValue("#pop textarea.awpick")) === "THIRD St\nCALLE 3a",
       JSON.stringify(await page.inputValue("#pop textarea.awpick")));
    await page.fill("#pop textarea.awpick", "THIRD St");
    await page.locator("#pop textarea.awpick").blur();
    await page.waitForTimeout(300);

    dialogs.length = 0;
    await page.locator("#pop button.delrow").first().click();
    await page.waitForTimeout(300);
    ok("deleting asks first", dialogs.some(d => /Delete this row/.test(d)), dialogs.join(" | "));
    ok("…and dismissing keeps it",
       await page.evaluate(() => loadedDoc.rows.length) === before);
  }

    // nothing was saved, and reloading discards every in-memory change above
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await page.waitForTimeout(100);
    await showLoaders();
    await page.fill("#loadId", "mr066-035");
    await page.click("#loadDoc");
    await page.waitForFunction(() => loadedDoc && loadedDoc.id === "mr066-035",
                               null, { timeout: 15000 });
    await page.waitForTimeout(400);
  }

  console.log("switching modes swaps the panel body");
  await page.click("#mAlign");
  await page.waitForTimeout(150);
  ok("align mode shows only the align body", JSON.stringify(await shown()) === '["align"]',
     JSON.stringify(await shown()));
  ok("the alignment sliders are back", (await vis("#op")).h > 0);

  console.log("choosing what a drag moves");
  {
    const place = () => page.evaluate(() => ({ scan: [scan.lat, scan.lng],
                                               view: [view.lat, view.lng] }));
    const moved = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) > 1e-9;

    ok("it starts on the scan", await page.evaluate(() => dragTarget) === "scan");
    const p0 = await place();
    await page.mouse.move(700, 500); await page.mouse.down();
    await page.mouse.move(760, 540, { steps: 4 }); await page.mouse.up();
    await page.waitForTimeout(120);
    const p1 = await place();
    ok("dragging moves the scan", moved(p0.scan, p1.scan));
    ok("…and leaves the view alone", !moved(p0.view, p1.view));

    await page.click("#dView");
    ok("the switch takes", await page.evaluate(() => dragTarget) === "view");
    await page.mouse.move(700, 500); await page.mouse.down();
    await page.mouse.move(640, 460, { steps: 4 }); await page.mouse.up();
    await page.waitForTimeout(120);
    const p2 = await place();
    ok("now dragging moves the map", moved(p1.view, p2.view));
    ok("…and the scan stays where it was put on the ground", !moved(p1.scan, p2.scan));

    // shift inverts whichever way the switch is set
    await page.keyboard.down("Shift");
    await page.mouse.move(700, 500); await page.mouse.down();
    await page.mouse.move(750, 530, { steps: 4 }); await page.mouse.up();
    await page.keyboard.up("Shift");
    await page.waitForTimeout(120);
    const p3 = await place();
    ok("shift inverts it", moved(p2.scan, p3.scan) && !moved(p2.view, p3.view),
       JSON.stringify({ p2, p3 }));

    // the wheel follows the same switch
    const before = await page.evaluate(() => [scan.mppx, view.mpp]);
    await page.mouse.move(700, 500);
    await page.mouse.wheel(0, -120);
    await page.waitForTimeout(120);
    const after = await page.evaluate(() => [scan.mppx, view.mpp]);
    ok("with the map selected the wheel zooms the map",
       Math.abs(after[1] - before[1]) > 1e-9 && Math.abs(after[0] - before[0]) < 1e-12,
       JSON.stringify({ before, after }));

    await page.click("#dScan");
    await page.evaluate(p => { scan.lat = p.scan[0]; scan.lng = p.scan[1];
                               view.lat = p.view[0]; view.lng = p.view[1]; draw(); }, p0);
  }
  ok("the popup hides with it", (await vis("#pop")).display === "none");
  await page.click("#mCoverage");
  await page.waitForTimeout(150);
  ok("coverage mode shows only the coverage body",
     JSON.stringify(await shown()) === '["coverage"]', JSON.stringify(await shown()));
  // The header left the Coverage panel: it is read far more often than it is
  // written, and reading it means looking at the sheet at the same time. Both
  // modes now open it where a row's popup opens.
  ok("the header is not sitting in the coverage panel", (await vis("#f_title")).h === 0);
  await page.click("#sheetMetaC");
  await page.waitForTimeout(120);
  ok("…and Sheet metadata opens it there", (await vis("#f_title")).h > 0);
  ok("…as the one live set of fields, moved rather than copied",
     await page.evaluate(() => document.querySelectorAll("#f_title").length === 1 &&
                               document.getElementById("pop").contains(document.getElementById("f_title"))));
  ok("…pinned to the far right, like every other popup",
     await page.evaluate(() => {
       const r = document.getElementById("pop").getBoundingClientRect();
       return Math.abs(r.right - (innerWidth - 8)) < 2 && r.top < 20;
     }));
  await page.click("#pop .close");
  await page.waitForTimeout(120);
  ok("…and closing it puts the fields back rather than destroying them",
     await page.evaluate(() => !!document.getElementById("f_title") &&
       document.getElementById("headerHome").contains(document.getElementById("f_title"))));
  await page.click("#mReview");
  await page.waitForTimeout(200);
  ok("and review comes back on return", JSON.stringify(await shown()) === '["review"]',
     JSON.stringify(await shown()));
  ok("the project folder control is visible in every mode", (await vis("#connectDir")).h > 0);

  console.log("splitting a row in two");
  {
    await page.click("#mReview");
    await page.waitForTimeout(200);
    // A long, unambiguous state row to cut in half.
    const target = await page.evaluate(() => {
      let best = null;
      for (const f of reviewFeatures) {
        if (!f.row || f.row.kind !== "state" || f.pts.length < 4) continue;
        const len = f.pts.slice(1).reduce((t, p, i) =>
          t + Math.hypot(p[0] - f.pts[i][0], p[1] - f.pts[i][1]), 0);
        if (!best || len > best.len) best = { street: f.street, len, i: loadedDoc.rows.indexOf(f.row) };
      }
      return best;
    });
    ok("there is a long row to split", target && target.i >= 0, JSON.stringify(target));

    const nBefore = await page.evaluate(() => loadedDoc.rows.length);
    await page.evaluate(i => focusRow(loadedDoc.rows[i]), target.i);
    await page.waitForTimeout(250);
    ok("the split control is offered on a row",
       await page.locator("#pop button.splitrow").count() === 1,
       String(await page.locator("#pop button.splitrow").count()));

    await page.locator("#pop button.splitrow").first().click();
    await page.waitForTimeout(200);
    ok("the panel says what is being split",
       (await vis("#splitState")).display !== "none" &&
       /Splitting the state row/.test(await page.textContent("#splitState")),
       await page.textContent("#splitState"));
    ok("…and the popup gets out of the way", (await vis("#pop")).display === "none");
    ok("…while the row stays selected, so it is still highlighted",
       await page.evaluate(i => popRow === loadedDoc.rows[i], target.i));

    // A click nowhere near it must not split anything.
    const away = await page.evaluate(() => {
      const f = reviewFeatures.find(x => x.row === popRow);
      const mid = f.pts[Math.floor(f.pts.length / 2)];
      return [Math.round(mid[0]) + 300, Math.round(mid[1]) + 300];
    });
    await page.mouse.move(away[0], away[1]);
    await page.mouse.down(); await page.mouse.up();
    await page.waitForTimeout(200);
    ok("a click off the stretch splits nothing",
       await page.evaluate(() => loadedDoc.rows.length) === nBefore &&
       await page.evaluate(() => !!splitting));
    ok("…and says why", dialogs.some(d => /has to sit on it|nowhere to put a boundary/.test(d)),
       dialogs.slice(-1).join(""));

    const on = await page.evaluate(() => {
      const f = reviewFeatures.find(x => x.row === popRow);
      const p = f.pts[Math.floor(f.pts.length / 2)];
      return [Math.round(p[0]), Math.round(p[1])];
    });
    await page.mouse.move(on[0], on[1]);
    await page.mouse.down(); await page.mouse.up();
    await page.waitForTimeout(300);
    const after = await page.evaluate(() => loadedDoc.rows.length);
    ok("clicking on the stretch makes two rows out of one", after === nBefore + 1,
       `${nBefore} -> ${after}`);
    ok("…both awaiting confirmation",
       await page.evaluate(i => loadedDoc.rows[i].confirmed === false &&
                                loadedDoc.rows[i + 1].confirmed === false, target.i));
    ok("…meeting at the same point",
       await page.evaluate(i => JSON.stringify(loadedDoc.rows[i].to) ===
                                JSON.stringify(loadedDoc.rows[i + 1].from) &&
                                loadedDoc.rows[i].to != null, target.i));
    ok("…on the same street, with the same ink",
       await page.evaluate(i => loadedDoc.rows[i].street === loadedDoc.rows[i + 1].street &&
                                loadedDoc.rows[i].asWritten === loadedDoc.rows[i + 1].asWritten,
                           target.i));
    ok("the split mode ends itself", await page.evaluate(() => !splitting) &&
       (await vis("#splitState")).display === "none");
    ok("…and the popup comes back on the first half",
       (await vis("#pop")).display !== "none" &&
       await page.evaluate(i => popRow === loadedDoc.rows[i], target.i));
    ok("the popup says how much ground the half speaks for",
       /Speaks for \d+ m of/.test(await page.textContent("#pop")),
       (await page.textContent("#pop")).slice(0, 200));
    ok("Save review is dirty again", !(await page.locator("#saveReview").isDisabled()));
  }

  console.log("getting to a row you cannot see");
  {
    const blockers = await page.textContent("#sweepBlockers");
    ok("the blocking rows are listed, not just counted",
       /Rows still waiting/.test(blockers), blockers.slice(0, 160));
    const n = await page.locator("#sweepBlockers li[data-br]").count();
    ok("…one line each", n >= 2, String(n));
    ok("…with the stretch's length on it, so a stray is recognisable",
       /\d+ m/.test(blockers), blockers.slice(0, 200));

    // The case this exists for: a row too short to find, drawn underneath a
    // longer one on the same street.
    await page.evaluate(() => {
      const long = loadedDoc.rows.find(r => r.kind === "state" && r.street);
      const rec = lastModel.streets.find(s => s.name === long.street);
      const run = rec.runs[0];
      const px = i => ({ px: G.worldToScan(G.fitAlignment(controlPoints()),
                                           run[i].lat, run[i].lon).map(v => Math.round(v)) });
      loadedDoc.rows.push({ kind: "state", asWritten: "STRAY", street: long.street,
                            from: px(0), to: px(1), confirmed: false });
      lastModel = null; reviewSig = null; hidePop(); draw();
    });
    await page.waitForTimeout(250);
    const li = page.locator("#sweepBlockers li[data-br]", { hasText: "STRAY" });
    ok("the stray shows up in the list", await li.count() === 1, String(await li.count()));
    await li.first().click();
    await page.waitForTimeout(300);
    ok("clicking it opens that exact row",
       await page.evaluate(() => popRow && popRow.asWritten === "STRAY"),
       await page.evaluate(() => popRow && popRow.asWritten));
    ok("…and the popup is on screen", (await vis("#pop")).display !== "none");
    ok("…offering delete", await page.locator("#pop button.delrow").count() === 1);
    const nb = await page.evaluate(() => loadedDoc.rows.length);
    answers.push("");                                  // the confirm() below
    page.once("dialog", () => {});
    await page.evaluate(() => { window.__c = window.confirm; window.confirm = () => true; });
    await page.locator("#pop button.delrow").first().click();
    await page.waitForTimeout(300);
    await page.evaluate(() => { window.confirm = window.__c; });
    ok("deleting it removes it",
       await page.evaluate(() => loadedDoc.rows.length) === nb - 1 &&
       await page.evaluate(() => !loadedDoc.rows.some(r => r.asWritten === "STRAY")));
  }

  console.log("Tab walks the rows that still need something");
  {
    await page.click("#mReview");
    await page.waitForTimeout(200);
    // Leave a couple of rows waiting, deterministically.
    await page.evaluate(() => {
      loadedDoc.rows.slice(0, 2).forEach(r => { r.confirmed = false; });
      lastModel = null; reviewSig = null; hidePop(); draw();
    });
    await page.waitForTimeout(200);
    const waiting = await page.evaluate(() => blockingRows().length);
    ok("there are rows waiting to walk", waiting >= 2, String(waiting));

    await page.evaluate(() => document.activeElement && document.activeElement.blur());
    await page.keyboard.press("Tab");
    await page.waitForTimeout(250);
    const first = await page.evaluate(() => loadedDoc.rows.indexOf(popRow));
    ok("Tab opens a row that is waiting",
       await page.evaluate(() => !!popRow && blockingRows().includes(popRow)), String(first));
    ok("…and the popup is on screen", (await vis("#pop")).display !== "none");

    await page.evaluate(() => document.activeElement && document.activeElement.blur());
    await page.keyboard.press("Tab");
    await page.waitForTimeout(250);
    const second = await page.evaluate(() => loadedDoc.rows.indexOf(popRow));
    ok("Tab again moves on", second !== first, `${first} -> ${second}`);

    await page.evaluate(() => document.activeElement && document.activeElement.blur());
    await page.keyboard.down("Shift"); await page.keyboard.press("Tab"); await page.keyboard.up("Shift");
    await page.waitForTimeout(250);
    ok("shift-Tab goes back",
       await page.evaluate(() => loadedDoc.rows.indexOf(popRow)) === first,
       String(await page.evaluate(() => loadedDoc.rows.indexOf(popRow))));

    // Typing in the popup must keep its own Tab.
    const box = page.locator("#pop textarea.awpick, #pop input.npick").first();
    if (await box.count()) {
      await box.focus();
      const held = await page.evaluate(() => loadedDoc.rows.indexOf(popRow));
      await page.keyboard.press("Tab");
      await page.waitForTimeout(200);
      ok("Tab inside a field does not jump the map",
         await page.evaluate(() => loadedDoc.rows.indexOf(popRow)) === held);
    }
  }

  console.log("a vanished corridor with nothing lettered on it");
  {
    const before = await page.evaluate(() => loadedDoc.rows.length);
    await page.click("#traceStart");
    await page.waitForTimeout(150);
    await page.mouse.click(700, 400); await page.waitForTimeout(80);
    await page.mouse.click(780, 470); await page.waitForTimeout(80);
    answers.push("");                       // the prompt: left EMPTY on purpose
    await page.click("#traceDone");
    await page.waitForTimeout(300);
    ok("an empty label makes an unlettered trace, not a rejected one",
       await page.evaluate(() => loadedDoc.rows.length) === before + 1 &&
       await page.evaluate(() => loadedDoc.rows[loadedDoc.rows.length - 1].kind) === "vanished-unnamed",
       await page.evaluate(() => loadedDoc.rows[loadedDoc.rows.length - 1].kind));
    ok("…carrying no ink and no name",
       await page.evaluate(() => {
         const r = loadedDoc.rows[loadedDoc.rows.length - 1];
         return r.asWritten === undefined && r.name === undefined;
       }));
    ok("…and it does not block the sweep for having no name",
       !/no name entity/.test(await page.textContent("#sweepState")),
       await page.textContent("#sweepState"));
  }

  console.log("the brief the AI pass reads")
  {
    // TASK.md is generated, so it goes stale silently every time the model
    // gains a way to say something. These are the claims it must teach.
    const task = await page.evaluate(() => taskMarkdown("mr066-035"));
    ok("it lists every row kind", ["state", "unnamed", "absent", "vanished", "vanished-unnamed"]
       .every(k => task.includes(`kind: "${k}"`)),
       ["state", "unnamed", "absent", "vanished", "vanished-unnamed"]
         .filter(k => !task.includes(`kind: "${k}"`)).join(", "));
    ok("…and warns against the placeholder that used to stand in for one",
       /asWritten: "unnamed"/.test(task) && /which is false/.test(task));
    ok("it explains a stretch lettered twice", /ONE row/.test(task) &&
       /CALLE DE LAS CHAPULES/.test(task));
    ok("…as an array, not a slash", /asWritten: \["/.test(task));
    ok("it still fixes which end is `from`", /`from` is the \*\*west\*\* end/.test(task));
    ok("…and still warns about null", /`null` is almost never what you want/.test(task));
    // The sweep is the strongest claim in the model — that this document's
    // SILENCE can be argued from. Only the human who checked the rows can make
    // it, so the brief has to say so rather than leave it to be inferred.
    ok("it tells the assistant to leave sweptFully alone",
       /Leave .?sweptFully: false.? exactly as it is/.test(task) &&
       /silence/i.test(task.slice(task.indexOf("sweptFully: false"))),
       task.slice(task.indexOf("sweptFully"), task.indexOf("sweptFully") + 120));
    ok("…and says why confirmed:false is not a hedge",
       /confirmed: false\\`. That is\s+not a hedge/.test(task) ||
       /not a hedge about your reading/.test(task));
  }

  console.log("every field a row can carry reaches the popup");
  {
    // A field the popup does not print is a field that can be wrong in the
    // file and right on the screen. The table is ORDERED by ROW_FIELDS but must
    // not be LIMITED by it, so this checks a made-up key too. The row is put
    // into the loaded document and taken out again, because the editable
    // controls only render for a row the document actually has.
    const shown = await page.evaluate(() => {
      const r = { kind: "state", street: "3rd Street", from: "Bixel Street",
                  to: "Boylston Street", fromCross: "a", toCross: "b", toForm: "Third St",
                  mechanism: "renaming", attests: "built-by", basis: "alignment",
                  date: { on: "1888" }, trace: [[1, 2], [3, 4]],
                  text: "Site of something", url: "https://example.org/x",
                  note: "why", confirmed: false, name: "third-street",
                  asWritten: "THIRD ST", somethingNobodyThoughtOf: "42" };
      loadedDoc.rows.push(r);
      let html;
      try { html = rowHtml(r, true); } finally { loadedDoc.rows.pop(); }
      const d = document.createElement("div"); d.innerHTML = html;
      return { keys: [...d.querySelectorAll("table.fields td.fk")].map(td => td.textContent),
               controls: ["kindpick", "awpick", "npick", "atpick", "notepick", "conf"]
                 .filter(c => html.includes(c)),
               fields: Object.keys(r) };
    });
    // Three fields are deliberately absent from the table because they are
    // rendered as controls instead — showing a field twice makes the text look
    // like the field, and it is the one you cannot type in.
    const asControl = { kind: "kindpick", asWritten: "awpick", name: "npick",
                        attests: "atpick", note: "notepick", confirmed: "conf" };
    const unaccounted = shown.fields.filter(k =>
      !shown.keys.includes(k) && !shown.controls.includes(asControl[k]));
    ok("every field is either printed or editable", unaccounted.length === 0,
       unaccounted.join(", "));
    ok("…including a key the tool has never heard of",
       shown.keys.includes("somethingNobodyThoughtOf"), shown.keys.join(", "));
    ok("…and annotation's own two", shown.keys.includes("text") && shown.keys.includes("url"),
       shown.keys.join(", "));
    ok("the six that are editable really do render as controls",
       Object.values(asControl).every(c => shown.controls.includes(c)),
       shown.controls.join(", "));
    ok("…and none of those is printed twice",
       Object.keys(asControl).every(k => !shown.keys.includes(k)),
       shown.keys.join(", "));
  }

  console.log("editing a row's attests override and its note");
  {
    await page.click("#mReview");
    await page.waitForTimeout(200);
    const i = await page.evaluate(() =>
      loadedDoc.rows.findIndex(r => r.kind === "state" || r.kind === "unnamed"));
    ok("there is a row that may carry an override", i >= 0, String(i));
    await page.evaluate(n => focusRow(loadedDoc.rows[n]), i);
    await page.waitForTimeout(250);

    ok("the popup offers attests", await page.locator("#pop select.atpick").count() === 1);
    ok("…defaulting to the document's, not to a value",
       await page.inputValue("#pop select.atpick") === "");
    ok("…and naming what the document's default is",
       /this document's default/.test(await page.textContent("#pop")));
    await page.selectOption("#pop select.atpick", "built-by");
    await page.waitForTimeout(300);
    ok("choosing one writes the override",
       await page.evaluate(n => loadedDoc.rows[n].attests === "built-by", i));
    ok("…and un-confirms the row, since it claims something else now",
       await page.evaluate(n => loadedDoc.rows[n].confirmed === false, i));
    await page.selectOption("#pop select.atpick", "");
    await page.waitForTimeout(300);
    ok("choosing the default again removes the field entirely",
       await page.evaluate(n => !("attests" in loadedDoc.rows[n]), i));

    ok("the popup offers the note", await page.locator("#pop textarea.notepick").count() === 1);
    await page.evaluate(n => { loadedDoc.rows[n].confirmed = undefined;
                               delete loadedDoc.rows[n].confirmed; }, i);
    await page.fill("#pop textarea.notepick", "Rewritten by hand.");
    await page.locator("#pop textarea.notepick").blur();
    await page.waitForTimeout(300);
    ok("editing the note lands on the row",
       await page.evaluate(n => loadedDoc.rows[n].note === "Rewritten by hand.", i));
    ok("…and does NOT un-confirm it — a note is not a claim",
       await page.evaluate(n => loadedDoc.rows[n].confirmed !== false, i));
    await page.fill("#pop textarea.notepick", "");
    await page.locator("#pop textarea.notepick").blur();
    await page.waitForTimeout(300);
    ok("clearing it removes the field", await page.evaluate(n => !("note" in loadedDoc.rows[n]), i));
  }

  console.log("what is left to do");
  {
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await page.waitForTimeout(100);
    ok("the Open box offers a list of what is left",
       await page.locator("#listDocs").count() === 1);
    // No project folder is connected in the harness (the File System Access
    // API needs a real user gesture), so this is the branch that has to say so
    // rather than fail silently.
    await page.click("#listDocs");
    await page.waitForTimeout(400);
    const txt = await page.textContent("#docList");
    ok("…and says what is missing when the folder is not connected",
       /project folder has to be connected/.test(txt), txt.slice(0, 120));
    ok("…without throwing", errors.filter(e => !/404/.test(e)).length === 0,
       errors.slice(0, 2).join(" | "));

    // Bracketing is pure, so drive it directly.
    const b = await page.evaluate(() => bracket([
      { id: "mr030-009-p1", short: "Wolfskill Orchard Tract, sheet 1 (M.R. 30-9)" },
      { id: "mr030-009-p2", short: "Wolfskill Orchard Tract, sheet 2 (M.R. 30-10)" },
      { id: "mr053-067", short: "Hutton / Ord Survey" },
      { id: "mr053-068", short: "Hutton / Ord Survey" },
      { id: "mr066-035", short: "Washington Tract map" },
      { id: "zz-nameless", short: null }
    ]).map(g => [g.name, g.docs.map(d => d.id)]));
    ok("sheets of one map bracket under it, sheet numbers off the map name",
       JSON.stringify(b[0]) === '["Wolfskill Orchard Tract",["mr030-009-p1","mr030-009-p2"]]',
       JSON.stringify(b[0]));
    ok("…and separate folders sharing a title bracket too",
       JSON.stringify(b[1]) === '["Hutton / Ord Survey",["mr053-067","mr053-068"]]',
       JSON.stringify(b[1]));
    ok("a lone map is its own bracket", JSON.stringify(b[2]) === '["Washington Tract map",["mr066-035"]]');
    ok("a document with no short title is never folded into a neighbour",
       b[3][0] === null && b[3][1][0] === "zz-nameless", JSON.stringify(b[3]));

    const order = await page.evaluate(() => {
      const docs = [
        { id: "a-one", short: "Zebra Tract", state: "review", rows: 1 },
        { id: "z-two", short: "Apple Tract", state: "review", rows: 1 },
        { id: "m-none", short: null, state: "review", rows: 1 }
      ];
      const u = g => g.name === null ? 0 : 1;
      const byName = bracket(docs).sort((x, y) =>
        u(x) - u(y) || (x.name || x.docs[0].id).localeCompare(y.name || y.docs[0].id));
      const byId = bracket(docs).sort((x, y) => x.docs[0].id.localeCompare(y.docs[0].id));
      return { byName: byName.map(g => g.name || g.docs[0].id),
               byId: byId.map(g => g.docs[0].id) };
    });
    ok("sorting by name puts the unnamed ones first",
       JSON.stringify(order.byName) === '["m-none","Apple Tract","Zebra Tract"]',
       JSON.stringify(order.byName));
    ok("…and sorting by folder name is the other order",
       JSON.stringify(order.byId) === '["a-one","m-none","z-two"]', JSON.stringify(order.byId));
    ok("the sort control offers both", await page.locator("#docSort option").count() === 2);
  }

  console.log("getting the view and the scan back to each other");
  {
    await page.click("#mAlign");
    await page.waitForTimeout(150);

    // Drag the sheet a long way off, the way one hard drag with the map
    // selected does, and then find it again.
    const home = await page.evaluate(() => ({ scan: { ...scan }, view: { ...view } }));
    await page.evaluate(() => { view.lat += 0.05; view.lng += 0.05; draw(); });
    const away = await page.evaluate(() =>
      Math.hypot(view.lat - scan.lat, view.lng - scan.lng));
    ok("the scan can end up well off screen", away > 0.04, String(away));
    await page.click("#fitScan");
    await page.waitForTimeout(120);
    ok("Find the scan brings the view back to it",
       await page.evaluate(() => Math.abs(view.lat - scan.lat) < 1e-9 &&
                                 Math.abs(view.lng - scan.lng) < 1e-9));
    ok("…and zooms out far enough to see the whole sheet",
       await page.evaluate(() => view.mpp * cv.width >= img.width * scan.mppx &&
                                 view.mpp * cv.height >= img.height * scan.mppx));

    // The converse, which is the one that saves the dragging: pan to where the
    // sheet belongs and put it there.
    const placed = await page.evaluate(() => {
      const before = { rot: scan.rot, mppx: scan.mppx };
      view.lat = 34.09; view.lng = -118.31; draw();
      alignmentTouched = false;
      document.getElementById("placeScan").click();
      return { before, scan: { ...scan }, touched: alignmentTouched };
    });
    ok("Place scan here moves the sheet to the middle of the view",
       Math.abs(placed.scan.lat - 34.09) < 1e-9 && Math.abs(placed.scan.lng - (-118.31)) < 1e-9,
       JSON.stringify(placed.scan));
    ok("…and leaves rotation and scale alone, which are separate judgements",
       placed.scan.rot === placed.before.rot && placed.scan.mppx === placed.before.mppx,
       JSON.stringify([placed.before, placed.scan]));
    // Without this the next save re-derives the placement from the STORED
    // control points and silently undoes the move.
    ok("…and counts as authoring the alignment, not restoring it", placed.touched === true);
    ok("…and says what to do next", /rotate and scale/.test(await page.textContent("#modeHint")),
       await page.textContent("#modeHint"));

    // Review moves the view all the time — the row list and the popup both do
    // — so it needs the same way back.
    await page.click("#mReview");
    await page.waitForTimeout(150);
    ok("Review has a Find the scan of its own", (await vis("#fitScanR")).h > 0);
    await page.evaluate(() => { view.lat += 0.05; draw(); });
    await page.click("#fitScanR");
    await page.waitForTimeout(120);
    ok("…and it does the same thing",
       await page.evaluate(() => Math.abs(view.lat - scan.lat) < 1e-9));

    await page.evaluate(h => { Object.assign(scan, h.scan); Object.assign(view, h.view);
                               alignmentTouched = false; draw(); }, home);
    // Switching modes folds the Open box away again; the doc-list tests below
    // expect it open, as the block that set it up left it.
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await page.waitForTimeout(100);
  }

  console.log("a new name records which sheets letter it");
  {
    // scanNameSightings walks documents/ through the project handle, which
    // needs a real user gesture — so the sightings are handed in, and what is
    // under test is that they reach the file and that a failed scan cannot
    // erase what is already there.
    const out = await page.evaluate(() => {
      const seen = new Map([["waters-street", [
        { doc: "mr003-060-p1", sheet: "Colton Tract", asWritten: ["WATERS ST"] },
        { doc: "mr006-138", sheet: "Hancock Survey", asWritten: ["Waters St", "WATERS STREET"] }
      ]]]);
      const existing = {
        "waters-street": { spellings: [{ forms: ["Waters Street"] }], namedAfter: null,
          categories: ["unknown"], sources: [], aliases: [] },
        "home-street": { spellings: [{ forms: ["Home Street"] }], namedAfter: null,
          categories: ["unknown"], sources: [], aliases: [],
          sightings: [{ doc: "mr053-073", sheet: "Ord", asWritten: ["HOME ST"] }] }
      };
      return { fresh: namesNewText(existing, seen), noScan: namesNewText(existing, null) };
    });
    ok("the sheets a name appears on are written into names-new.js",
       /sightings: \[/.test(out.fresh) && /"doc":"mr006-138"/.test(out.fresh),
       (out.fresh.match(/sightings[\s\S]{0,160}/) || [""])[0]);
    ok("…with the ink each sheet uses",
       /"asWritten":\["Waters St","WATERS STREET"\]/.test(out.fresh));
    ok("…and the sheet's short title, so the id is not the only clue",
       /"sheet":"Hancock Survey"/.test(out.fresh));
    ok("a name with no rows anywhere gets no sightings line",
       !/home-street[\s\S]{0,80}sightings/.test(out.fresh),
       (out.fresh.match(/home-street[\s\S]{0,120}/) || [""])[0]);
    // The file is rewritten whole, so a scan that could not run must not be
    // allowed to write an empty list over a real one.
    ok("a scan that could not run leaves what is already on disk alone",
       /"doc":"mr053-073"/.test(out.noScan), "carried through");
    ok("…and invents nothing for the rest", !/mr006-138/.test(out.noScan));
    ok("the file still explains where sightings come from",
       /recomputed from|DERIVED/.test(out.fresh));
  }

  console.log("three lists, and each opens in the mode that does the next work");
  {
    // scanDocuments needs the File System Access API, which needs a real user
    // gesture — so the FOLDERS are stubbed and everything downstream of them
    // is the shipping code: the grouping, the three headings, the bold, and
    // the mode each row carries.
    await page.evaluate(() => {
      window.__realScan = scanDocuments;
      window.scanDocuments = async () => [
        { id: "aa-bare",  short: null,        rows: 0, swept: false,
          render: "aa-bare-100dpi.png", missing: ["aa-bare.js", "aa-bare-alignment.json",
            "aa-bare-streets.json", "TASK.md"], state: "align" },
        { id: "bb-noalign", short: "Bee Tract", rows: 0, swept: false,
          render: "bb-100dpi.png", missing: ["bb-noalign-alignment.json"], state: "align" },
        { id: "cc-fresh", short: "Cee Tract",  rows: 0,  swept: false, render: "c.png",
          missing: [], state: "review" },
        { id: "dd-read",  short: "Dee Tract",  rows: 12, swept: false, render: "d.png",
          missing: [], state: "review" },
        { id: "ee-p1",    short: "Eee Survey, sheet 1", rows: 9, swept: true, render: "e1.png",
          missing: [], state: "swept" },
        { id: "ee-p2",    short: "Eee Survey, sheet 2", rows: 4, swept: true, render: "e2.png",
          missing: [], state: "swept" }
      ];
    });
    await page.evaluate(() => refreshDocList());
    await page.waitForTimeout(150);

    const heads = await page.$$eval("#docList details.docgroup > summary",
                                    hs => hs.map(h => h.textContent));
    ok("there are exactly three lists", heads.length === 3, JSON.stringify(heads));
    ok("…one for folders that still need aligning and coverage",
       /^Needs aligning and coverage \(2\)/.test(heads[0]), heads[0]);
    ok("…one for folders waiting on a first pass or a review",
       /^Needs a first pass or your review \(2\)/.test(heads[1]), heads[1]);
    ok("…and one for the swept", /^Swept \(2\)/.test(heads[2]), heads[2]);
    ok("each one has a caret of its own",
       await page.locator("#docList details.docgroup").count() === 3);
    ok("…and all three start open, since they are presented equally",
       await page.$$eval("#docList details.docgroup", ds => ds.every(d => d.open)));

    const rows = await page.$$eval("#docList li[data-doc]", ls => ls.map(l => ({
      id: l.dataset.doc, mode: l.dataset.mode, bold: !!l.querySelector("b.mn"),
      st: l.querySelector(".st").textContent })));
    const by = Object.fromEntries(rows.map(r => [r.id, r]));
    ok("a folder that still needs aligning opens in align mode",
       by["aa-bare"].mode === "align" && by["bb-noalign"].mode === "align",
       JSON.stringify([by["aa-bare"], by["bb-noalign"]]));
    ok("one that has been through coverage opens in review mode",
       by["cc-fresh"].mode === "review" && by["dd-read"].mode === "review");
    ok("…and so does a swept one", by["ee-p1"].mode === "review" && by["ee-p2"].mode === "review");
    ok("a sheet of a bracketed map is still clickable, and in review mode",
       by["ee-p2"].mode === "review");

    // The point of the bold: a one-sheet map's name is a map name too.
    ok("a lone map's name is bold", by["bb-noalign"].bold && by["cc-fresh"].bold,
       JSON.stringify([by["bb-noalign"], by["cc-fresh"]]));
    const mapHead = await page.$$eval("#docList li.mapname b.mn", bs => bs.map(b => b.textContent));
    ok("…and so is the heading a multi-sheet map brackets its sheets under",
       mapHead.includes("Eee Survey"), JSON.stringify(mapHead));
    ok("a folder with no short title shows its folder name and no bold map name",
       !by["aa-bare"].bold, JSON.stringify(by["aa-bare"]));

    // What is missing, said as a condition rather than as a filename.
    ok("a folder with only a render says so", /no document file/.test(by["aa-bare"].st), by["aa-bare"].st);
    ok("…one that is missing just the alignment says that", /no alignment/.test(by["bb-noalign"].st),
       by["bb-noalign"].st);
    ok("a covered folder with no rows yet says so", /no rows yet/.test(by["cc-fresh"].st), by["cc-fresh"].st);
    ok("…and one with rows counts them", /12 rows/.test(by["dd-read"].st), by["dd-read"].st);

    // Folding one and reading the list again: the list is rebuilt from scratch
    // every refresh, so a caret that reopened itself would be a caret you had
    // to close again after every save.
    await page.click("#docList details.docgroup:last-of-type > summary");
    await page.waitForTimeout(50);
    ok("a list folds away on its caret",
       await page.$$eval("#docList details.docgroup", ds => ds.map(d => d.open))
         .then(o => JSON.stringify(o) === "[true,true,false]"));
    await page.evaluate(() => refreshDocList());
    await page.waitForTimeout(150);
    ok("…and stays folded when the list is read again",
       await page.$$eval("#docList details.docgroup", ds => ds.map(d => d.open))
         .then(o => JSON.stringify(o) === "[true,true,false]"));
    await page.click("#docList details.docgroup:last-of-type > summary");
    await page.waitForTimeout(50);
    ok("…and opens again on the same caret",
       await page.$$eval("#docList details.docgroup", ds => ds.every(d => d.open)));

    await page.evaluate(() => { window.scanDocuments = window.__realScan; });
  }

  console.log("the loaders moved out of the way, and the trace button moved to the sweep");
  {
    const order = await page.evaluate(() => {
      const box = document.getElementById("openBox");
      const kids = [...box.children].map(e => e.id || e.tagName.toLowerCase());
      const byName = document.getElementById("openByName");
      return { kids, foldedByDefault: byName ? !byName.open : null,
               listBeforeLoaders: kids.indexOf("docList") < kids.indexOf("openByName"),
               loadersInside: !!(byName && byName.querySelector("#loadId") &&
                                 byName.querySelector("#renderPath") &&
                                 byName.querySelector("#file")) };
    });
    ok("the two load bars and the file chooser sit together at the bottom",
       order.loadersInside && order.listBeforeLoaders, JSON.stringify(order.kids));

    const trace = await page.evaluate(() => {
      const body = document.querySelector('.modebody[data-mode="review"]');
      const kids = [...body.children];
      const at = sel => kids.findIndex(e => e.matches(sel) || e.querySelector(sel));
      return { blockers: at("#sweepBlockers"), trace: at("#traceStart"),
               sweep: at("#sweepBtn"), streets: at("#revStreets") };
    });
    ok("Trace a vanished street sits next to the rows the sweep is waiting on",
       trace.trace > trace.blockers && trace.trace < trace.sweep, JSON.stringify(trace));
    ok("…and no longer below the list of streets in coverage",
       trace.trace < trace.streets, JSON.stringify(trace));
  }

  ok("still no page errors",
     errors.filter(e => !/404/.test(e)).length === 0, errors.slice(0, 3).join(" | "));

  await page.screenshot({ path: "review-mode.png" });
  await browser.close();
  server.close();
  dropFixture();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
