// names-browser-test.js — drives names-tool.html in a real browser.
// Run: node names-browser-test.js   (needs playwright; runs in the assistant's
// sandbox, not on Kenny's machine — same arrangement as browser-test.js.)
//
// test-names-tool.js covers the source surgery, which is the part that can
// damage data. This covers the part that can only be seen rendered: whether the
// panes are actually visible, whether the buttons do anything, whether sorting
// a column changes the order on screen. Both bugs that shipped in the map tool
// were invisible to everything but a test like this one.
//
// It works on a COPY of the project, served from a temp folder, so a stray
// write could not touch the real names.js even if the tool tried.

const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path"), os = require("os");

const ROOT = fs.mkdtempSync(path.join(os.tmpdir(), "names-tool-test-"));
for (const f of ["names-tool.html", "names.js", "names-new.js", "project-info.json"])
  if (fs.existsSync(path.join(__dirname, f))) fs.cpSync(path.join(__dirname, f), path.join(ROOT, f));
if (fs.existsSync(path.join(__dirname, "documents")))
  fs.cpSync(path.join(__dirname, "documents"), path.join(ROOT, "documents"), { recursive: true });

const MIME = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json" };
// Directory listings matter: with no folder connected the tool discovers
// documents/ by reading the server's index, exactly as python3 -m http.server
// serves it. A test server without listings would silently skip that path.
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]);
  const f = path.join(ROOT, rel);
  if (!f.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.stat(f, (e, st) => {
    if (e) { res.writeHead(404); return res.end(); }
    if (st.isDirectory()) {
      const items = fs.readdirSync(f, { withFileTypes: true })
        .map(d => `<li><a href="${d.name}${d.isDirectory() ? "/" : ""}">${d.name}</a></li>`).join("");
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(`<html><body><ul>${items}</ul></body></html>`);
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "text/plain" });
    res.end(fs.readFileSync(f));
  });
});

let pass = 0, fail = 0;
const ok = (n, c, d) => c ? (pass++, console.log("  ok  " + n))
                          : (fail++, console.error("  FAIL " + n + (d ? " — " + d : "")));

(async () => {
  await new Promise(r => server.listen(8124, r));
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({ viewport: { width: 1500, height: 950 } });
  const errors = [], missing = [], dialogs = [], answers = [];
  page.on("pageerror", e => errors.push(String(e)));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  page.on("response", r => { if (r.status() === 404) missing.push(r.url()); });
  page.on("dialog", d => {
    dialogs.push(d.message());
    if ((d.type() === "prompt" || d.type() === "confirm") && answers.length) d.accept(answers.shift());
    else d.dismiss();
  });

  const rows = () => page.$$eval("#rows tr.ent", ts => ts.map(t => t.dataset.id));
  const cell = (i, n) => page.$eval(`#rows tr.ent:nth-child(${i}) td:nth-child(${n})`, t => t.innerText.trim());
  const visible = sel => page.$eval(sel, el => {
    const r = el.getBoundingClientRect(), s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.display !== "none" && s.visibility !== "hidden";
  });

  await page.goto("http://localhost:8124/names-tool.html");
  await page.waitForSelector("#rows tr.ent");

  const live = require("./names.js").NAME_ENTITIES;
  let pending = {};
  try { pending = require("./names-new.js").NEW_NAME_ENTITIES; } catch (e) {}
  const total = Object.keys(live).length + Object.keys(pending).length;

  console.log("\nthe list");
  ok("every entity is listed", (await rows()).length === total,
     `${(await rows()).length} rows for ${total} entities`);
  ok("the list is actually visible", await visible("#listPane"));
  ok("the counts line names both files",
     /names\.js/.test(await page.innerText("#counts")) && /names-new\.js/.test(await page.innerText("#counts")));
  ok("the first row carries an id and a spelling",
     (await cell(1, 1)).length > 0 && (await cell(1, 2)).length > 0);
  ok("pending entities are badged",
     (await page.$$("#rows tr.ent .badge.pending")).length === Object.keys(pending).length);

  console.log("\nsorting");
  const byId = await rows();
  ok("default order is by id", byId.join() === [...byId].sort().join());
  await page.click('#list th[data-k="id"]');
  ok("clicking the sorted column reverses it", (await rows()).join() === [...byId].reverse().join());
  await page.click('#list th[data-k="display"]');
  const disp = await page.$$eval("#rows tr.ent td:nth-child(2)", ts => ts.map(t => t.innerText.trim()));
  ok("sorting by spelling reorders the list", (await rows()).join() !== byId.join());
  ok("spellings come out in order",
     disp.filter(Boolean).join() === [...disp.filter(Boolean)].sort(
       (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })).join());
  await page.click('#list th[data-k="docs"]');
  await page.click('#list th[data-k="docs"]');
  const docs = await page.$$eval("#rows tr.ent td:nth-child(5)", ts => ts.map(t => +t.innerText.trim() || 0));
  ok("the docs column is populated from documents/", docs.some(d => d > 0),
     "no entity showed a document count — the documents/ scan found nothing");
  ok("sorting by docs puts the most-attested first", docs[0] === Math.max(...docs));

  console.log("\nfiltering");
  await page.click('#fileChips button[data-f="new"]');
  ok("the names-new filter shows only pending entities",
     (await rows()).length === Object.keys(pending).length);
  await page.click('#fileChips button[data-f="names"]');
  ok("the names.js filter shows only those", (await rows()).length === Object.keys(live).length);
  await page.click('#fileChips button[data-f="all"]');
  await page.fill("#q", "figueroa");
  const found = await rows();
  ok("search narrows the list", found.length > 0 && found.length < total);
  ok("search matches spellings, not just ids",
     found.every(async id => true) && found.includes("figueroa-gov"));
  await page.fill("#q", "");
  await page.click('#stateChips button[data-s="todo"]');
  const todo = await rows();
  ok("the “no namesake” filter picks out the unresearched",
     todo.length > 0 && todo.every(id => !(live[id] || pending[id]).namedAfter));
  await page.click('#stateChips button[data-s="any"]');

  console.log("\nthe editor");
  await page.click('#rows tr.ent[data-id="farmer"]');
  ok("the editor opens", await visible("#editor"));
  ok("the empty-state prose is gone", !(await visible("#editEmpty")));
  ok("it shows the entity's own note",
     (await page.inputValue("#f_note")).includes("Crownwood"));
  ok("it shows the internalNote separately",
     (await page.inputValue("#f_internal")).includes("Kines"));
  ok("public and private notes are labelled differently",
     (await page.$$("#editor label.public")).length === 1);
  ok("possiblySameAs offers the other entities",
     (await page.$$eval("#f_same option", o => o.length)) === Object.keys(live).length + Object.keys(pending).length);
  ok("a names.js entity has no promote button", !(await page.$("#promoteBtn")));
  ok("Save is disabled with nothing edited", await page.$eval("#saveBtn", b => b.disabled));

  console.log("\nediting");
  await page.fill("#f_named", "{{Somebody}} of somewhere");
  ok("the row is marked edited",
     !!(await page.$('#rows tr.ent[data-id="farmer"] .badge')));
  ok("the counts line says so", /edited, unsaved/.test(await page.innerText("#counts")));
  ok("Save is now enabled", !(await page.$eval("#saveBtn", b => b.disabled)));
  ok("the namesake column followed the edit",
     (await page.$eval('#rows tr.ent[data-id="farmer"] td:nth-child(4)', t => t.innerText))
       .includes("Somebody"));

  console.log("\ncategories");
  await page.click("#catBtn");
  ok("the category menu opens", await visible("#catMenu"));
  ok("it lists the vocabulary already in use",
     (await page.$$eval("#catMenu input[type=checkbox]", cs => cs.map(c => c.value))).includes("person"));
  await page.check('#catMenu input[value="person"]');
  ok("checking one adds it to the entity",
     (await page.innerText("#catBtn")).includes("person"));
  await page.fill("#newCat", "brand-new-category");
  await page.click("#addCat");
  ok("a new category can be coined",
     (await page.innerText("#catBtn")).includes("brand-new-category"));
  ok("and it joins the vocabulary for everything else",
     (await page.$$eval("#catMenu input[type=checkbox]", cs => cs.map(c => c.value)))
       .includes("brand-new-category"));
  await page.click("#f_note");                      // click away
  ok("the menu closes when you click elsewhere", !(await visible("#catMenu")));

  console.log("\nerrors block a save");
  await page.click("#catBtn");
  for (const v of await page.$$eval("#catMenu input[type=checkbox]:checked", cs => cs.map(c => c.value)))
    await page.uncheck(`#catMenu input[value="${v}"]`);
  ok("an entity with no categories reports an error",
     (await page.innerText("#problems")).includes("no categories"));
  ok("and Save is refused", await page.$eval("#saveBtn", b => b.disabled));
  ok("the row is flagged in the list",
     !!(await page.$('#rows tr.ent[data-id="farmer"].bad')));
  ok("the menu stays open while you work through it", await visible("#catMenu"));
  await page.check('#catMenu input[value="unknown"]');
  ok("fixing it clears the error", !(await page.$eval("#saveBtn", b => b.disabled)));
  await page.click("#f_note");

  console.log("\nspelling periods");
  await page.click("#addSpelling");
  ok("a period can be added", (await page.$$("#spellings .card")).length === 2);
  await page.fill('#spellings .card[data-i="1"] input[data-a="form"]', "Farmer Avenue");
  ok("the latest spelling is what the list shows",
     (await page.$eval('#rows tr.ent[data-id="farmer"] td:nth-child(2)', t => t.innerText))
       .includes("Farmer Avenue"));
  await page.fill('#spellings .card[data-i="1"] input[data-a="from"]', "1909");
  ok("prose dates without a source are refused",
     (await page.innerText("#problems")).includes("prose dates"));
  await page.fill('#spellings .card[data-i="1"] input[data-a="surl"]', "https://example.org/");
  await page.fill('#spellings .card[data-i="1"] input[data-a="stitle"]', "a source");
  ok("giving it a source clears that", !(await page.innerText("#problems")).includes("prose dates"));
  await page.click('#spellings .card[data-i="1"] button[data-a="del"]');
  ok("a period can be removed again", (await page.$$("#spellings .card")).length === 1);

  console.log("\nthe corpus check reaches the editor");
  {
    // check-model.js's "cites a sheet that does not letter the name" rule runs
    // in the page too, but only once the documents/ scan has answered — so
    // this also proves the scan feeds validation, not just the Docs column.
    await page.click('#stateChips button[data-s="problems"]');
    const flagged = await rows();
    ok("an entity citing a sheet that does not letter it is flagged", flagged.includes("bull"),
       "expected bull among: " + flagged.join(", "));
    await page.click(`#rows tr.ent[data-id="bull"]`);
    ok("the warning says so and names where it IS lettered",
       /does NOT letter this name/.test(await page.innerText("#problems")) &&
       (await page.innerText("#problems")).includes("mr053-073"));
    ok("it is a warning, not an error — it must not block a save",
       (await page.$$("#problems .wrn")).length > 0 && (await page.$$("#problems .err")).length === 0);
    ok("the row is not marked as broken", !(await page.$('#rows tr.ent[data-id="bull"].bad')));
    // prune-sources.js has already taken the redundant citations out, so the
    // two redundancy rules should have nothing left to say about the corpus.
    const all = await page.$$eval("#rows tr.ent", ts => ts.map(t => t.dataset.id));
    ok("nothing still repeats its namedAfterLink",
       !(await page.evaluate(() => document.body.innerText).then(t => /repeats namedAfterLink/.test(t))));
    ok("the tessa2 Ord scan is no longer carried by entities it letters",
       !flagged.includes("hill-street-downtown") && !flagged.includes("main-street-dtla"));
    await page.click('#stateChips button[data-s="any"]');
  }

  console.log("\nselection follows the click");
  {
    // The highlight used to ride along on whatever redraw came next, so it
    // moved while you were editing and froze the moment you stopped — which is
    // exactly how it behaved after a save.
    const ids = await rows();
    const a = ids[0], b = ids[1];
    await page.click(`#rows tr.ent[data-id="${a}"]`);
    ok("the clicked row is highlighted", !!(await page.$(`#rows tr.ent[data-id="${a}"].on`)));
    await page.click(`#rows tr.ent[data-id="${b}"]`);
    ok("clicking another moves the highlight", !!(await page.$(`#rows tr.ent[data-id="${b}"].on`)));
    ok("…and only one row is highlighted", (await page.$$("#rows tr.ent.on")).length === 1);
    ok("the editor followed", (await page.innerText("#editor h2")).includes(b));
  }

  console.log("\narrow keys walk the list");
  {
    const ids = await rows();
    await page.click(`#rows tr.ent[data-id="${ids[0]}"]`);
    await page.keyboard.press("ArrowDown");
    ok("down opens the next entity", (await page.innerText("#editor h2")).includes(ids[1]));
    ok("…and the highlight came with it", !!(await page.$(`#rows tr.ent[data-id="${ids[1]}"].on`)));
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowUp");
    ok("up goes back", (await page.innerText("#editor h2")).includes(ids[1]));
    for (let i = 0; i < 3; i++) await page.keyboard.press("ArrowUp");
    ok("it stops at the top rather than wrapping", (await page.innerText("#editor h2")).includes(ids[0]));
    // Inside a field the arrows belong to the text.
    await page.click("#f_note");
    await page.keyboard.press("ArrowDown");
    ok("arrows in a text field do not move the list",
       (await page.innerText("#editor h2")).includes(ids[0]));
    await page.keyboard.press("Escape");
    await page.keyboard.press("ArrowDown");
    ok("Escape hands the arrows back to the list",
       (await page.innerText("#editor h2")).includes(ids[1]));
  }

  console.log("\nreordering the forms of one spelling");
  {
    await page.click('#rows tr.ent[data-id="farmer"]');
    const forms = () => page.$$eval('#spellings .card[data-i="0"] input[data-a="form"]', is => is.map(i => i.value));
    ok("a lone form offers no arrows",
       (await page.$$('#spellings .card[data-i="0"] button[data-a="upform"]')).length === 0);
    await page.click('#spellings .card[data-i="0"] button[data-a="addform"]');
    await page.fill('#spellings .card[data-i="0"] input[data-a="form"][data-k="1"]', "Farmer Avenue");
    ok("two forms get arrows",
       (await page.$$('#spellings .card[data-i="0"] button[data-a="upform"]')).length === 2);
    ok("the first form is what the list shows",
       (await page.$eval('#rows tr.ent[data-id="farmer"] td:nth-child(2)', t => t.innerText))
         .startsWith("Farmer Street"));
    await page.click('#spellings .card[data-i="0"] button[data-a="upform"][data-k="1"]');
    ok("up moves a form above its neighbour",
       (await forms()).join("|") === "Farmer Avenue|Farmer Street");
    ok("…and that changes the display form",
       (await page.$eval('#rows tr.ent[data-id="farmer"] td:nth-child(2)', t => t.innerText))
         .startsWith("Farmer Avenue"));
    await page.click('#spellings .card[data-i="0"] button[data-a="downform"][data-k="0"]');
    ok("down puts it back", (await forms()).join("|") === "Farmer Street|Farmer Avenue");
    ok("the ends are disabled rather than wrapping",
       await page.$eval('#spellings .card[data-i="0"] button[data-a="upform"][data-k="0"]', b => b.disabled) &&
       await page.$eval('#spellings .card[data-i="0"] button[data-a="downform"][data-k="1"]', b => b.disabled));
    await page.click('#spellings .card[data-i="0"] button[data-a="delform"][data-k="1"]');
    ok("deleting the second takes the arrows away again",
       (await page.$$('#spellings .card[data-i="0"] button[data-a="upform"]')).length === 0);
  }

  console.log("\npromotion");
  const pendingId = Object.keys(pending)[0];
  if (pendingId) {
    await page.click(`#rows tr.ent[data-id="${pendingId}"]`);
    ok("a pending entity offers the move into names.js", !!(await page.$("#promoteBtn")));
    // innerText, not textContent, because a CSS rule this test is also
    // watching uppercases the headings — so match case-insensitively.
    ok("it shows the sheets that letter the name",
       /sheets that letter this name/i.test(await page.innerText("#editor")));
    ok("and the ink each sheet uses",
       (await page.innerText("#editor")).includes(pending[pendingId].sightings[0].asWritten[0]));
    answers.push("");                                // accept the "still unresearched" confirm
    await page.click("#promoteBtn");
    await page.waitForTimeout(100);
    ok("the confirm explains what names-new.js is for",
       dialogs.some(d => /to-do list/.test(d)));
    ok("the entity now reads as a names.js one",
       /names\.js/.test(await page.innerText("#editor h2")) &&
       !/names-new/.test(await page.innerText("#editor h2")) && !(await page.$("#promoteBtn")));
    ok("its badge in the list changed",
       !(await page.$(`#rows tr.ent[data-id="${pendingId}"] .badge.pending`)));
    ok("the names-new filter no longer claims it",
       await page.click('#fileChips button[data-f="new"]').then(() => rows())
         .then(r => !r.includes(pendingId)));
    await page.click('#fileChips button[data-f="all"]');
  }

  console.log("\nsaving without a connected folder");
  await page.click("#saveBtn");
  await page.waitForTimeout(200);
  ok("Save explains that the folder has to be connected",
     dialogs.some(d => /connected/i.test(d)));

  console.log("\nhygiene");
  ok("no page errors", errors.length === 0, errors.slice(0, 3).join(" | "));
  ok("nothing 404ed", missing.length === 0, missing.slice(0, 3).join(" | "));

  console.log(`\n${pass} passed, ${fail} failed\n`);
  await page.evaluate(() => window.onbeforeunload = null);
  await browser.close();
  server.close();
  fs.rmSync(ROOT, { recursive: true, force: true });
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
