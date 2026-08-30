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

  console.log("loading a document");
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
    await page.fill("#loadId", "mr066-035");
    await page.click("#loadDoc");
    await page.waitForFunction(() => loadedDoc && loadedDoc.id === "mr066-035",
                               null, { timeout: 15000 });
    await page.waitForTimeout(400);
  }

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
      loadedDoc.rows = loadedDoc.rows.filter(r => r.street !== "Douglas Street" ||
                                                  r.kind !== "silent");
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
    ok("clicking it offers a silent row", await page.locator("#pop button.mksilent").count() === 1);
    ok("…and an exclusion", await page.locator("#pop button.mkexcept").count() === 1);
    ok("…and names the ends in row vocabulary",
       /Colton|px /.test(await page.textContent("#pop")),
       (await page.textContent("#pop")).slice(0, 140));

    const rows0 = await page.evaluate(() => loadedDoc.rows.length);
    await page.locator("#pop button.mksilent").first().click();
    await page.waitForTimeout(400);
    const after = await m();
    ok("a silent row closes the gap",
       !after.gaps.some(g => g.street === "Douglas Street"), JSON.stringify(after.gaps));
    ok("…and it is a real row with extents",
       await page.evaluate(() => {
         const r = loadedDoc.rows[loadedDoc.rows.length - 1];
         return r.kind === "silent" && r.street === "Douglas Street" && "from" in r && "to" in r;
       }));
    ok("…added as a proposal, not silently vouched for",
       await page.evaluate(() => loadedDoc.rows[loadedDoc.rows.length - 1].confirmed === false));
    ok("…and one row longer", await page.evaluate(() => loadedDoc.rows.length) === rows0 + 1);

    console.log("dropping a street the polygon overshoots");
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
    ok("it asks before dropping a street from coverage",
       dialogs.some(d => /Drop .* from this document/.test(d)), dialogs.join(" | "));
    ok("…and dismissing means nothing changed",
       await page.evaluate(() => coverageExcept.length) === 0);

    // Now accept it.
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

    // nothing was saved, and reloading discards every in-memory change above
    await page.evaluate(() => { document.getElementById("openBox").open = true; });
    await page.waitForTimeout(100);
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
  ok("the header fields are reachable there", (await vis("#f_title")).h > 0);
  await page.click("#mReview");
  await page.waitForTimeout(200);
  ok("and review comes back on return", JSON.stringify(await shown()) === '["review"]',
     JSON.stringify(await shown()));
  ok("the project folder control is visible in every mode", (await vis("#connectDir")).h > 0);

  ok("still no page errors",
     errors.filter(e => !/404/.test(e)).length === 0, errors.slice(0, 3).join(" | "));

  await page.screenshot({ path: "review-mode.png" });
  await browser.close();
  server.close();
  dropFixture();
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
