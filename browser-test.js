// browser-test.js — drives document-tool.html in a real browser.
// Unit tests cannot see a CSS rule that hides a panel; this can.
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");

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
  await new Promise(r => server.listen(8123, r));
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({ viewport: { width: 1500, height: 950 } });
  const errors = [];
  page.on("pageerror", e => errors.push(String(e)));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  const missing = [];
  page.on("response", r => { if (r.status() === 404) missing.push(r.url()); });
  page.on("dialog", d => d.dismiss());

  await page.goto("http://localhost:8123/document-tool.html");
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

  console.log("switching modes swaps the panel body");
  await page.click("#mAlign");
  await page.waitForTimeout(150);
  ok("align mode shows only the align body", JSON.stringify(await shown()) === '["align"]',
     JSON.stringify(await shown()));
  ok("the alignment sliders are back", (await vis("#op")).h > 0);
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
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
