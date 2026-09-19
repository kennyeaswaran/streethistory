# Publishing to the web (GitHub Pages)

Your GitHub username is `kennyeaswaran`, so the site will live at
`https://kennyeaswaran.github.io/REPONAME/` (pick the repo name accordingly —
e.g. `streetymology`). A custom domain can be pointed at it later.

## One-time setup

1. **Save the geometry file first.** Open the map, click "Save geometry file",
   and move `streets-geometry.js` from Downloads into this folder. Committing it
   means visitors never depend on Overpass.

2. **Create the repo on github.com.** Click the "+" (top right) → New repository
   → name it (e.g. `streetymology`) → Public → do NOT check "Add a README"
   (we have one) → Create repository.

3. **Install GitHub Desktop** (desktop.github.com) and sign in — the friendliest
   way to use git regularly. Then: File → Add Local Repository → choose this
   folder → it will say it isn't a git repository yet and offer to create one →
   accept.

4. **First commit and publish.** In GitHub Desktop you'll see all files listed
   as changes. Type a summary like "Initial prototype" (bottom left) → Commit to
   main → click "Publish repository" (top bar) → uncheck "Keep this code
   private" → make sure the name matches the repo from step 2 → Publish.

5. **Turn on Pages.** On github.com, open the repo → Settings → Pages →
   under "Build and deployment", set Source to **GitHub Actions**. The included
   workflow (.github/workflows/deploy.yml) takes over: on every push it runs
   the three gates below and deploys only if they pass. Watch progress in the
   repo's Actions tab; the first run finishes in about a minute, then the site
   is live.

## Everyday updates

Edit files → run the generator → GitHub Desktop shows the diff → write a
one-line summary → Commit to main → Push origin. The gates run automatically;
if one fails, the previous version of the site stays up (see the red X in the
Actions tab for what went wrong).

**`streets-data.js` is generated** (since the 2026-09-19 switchover): the map
reads it, `generate.js` writes it from `names.js` + `documents/`, and nobody
edits it by hand. So every change to a document or an entity is two files in
the commit — the change itself and the regenerated output:

    node check-model.js && node generate.js

then commit `streets-data.js` (and `generated/search-index.js`) with the rest.

The deploy runs three gates before it uploads anything:

1. `node check-data.js --require-generated` — the contract the map relies
   on, and a refusal to publish a `streets-data.js` that lacks the
   generator's header (someone edited it by hand).
2. `node check-model.js` — the authored layers (`names.js`, `documents/`).
3. **Regeneration check** — it runs `node generate.js` on the pushed tree and
   fails if the result differs from the committed `streets-data.js` /
   `generated/search-index.js`. That is the "forgot to run the generator"
   tripwire: regenerate, commit, push again. Row problems (a street the
   geometry file lacks, a cross street that does not meet it) do not fail
   it — those rows are dropped and listed in `generated/report.md` and the
   Actions log; a generator that crashes mid-run does.

## Custom domain (later)

Don't redirect — point the domain at GitHub so it stays in the address bar:

1. Buy the domain (Porkbun, Cloudflare, Namecheap; ~$10–12/yr).
2. At the registrar, add a CNAME record: `www` → `kennyeaswaran.github.io`.
   For the bare domain (no www), add the four GitHub Pages A records
   (185.199.108.153 / .109. / .110. / .111.).
3. Repo → Settings → Pages → Custom domain → enter the domain → Save.
   Check "Enforce HTTPS" once the certificate is issued (minutes to an hour).

## Notes

- git + Dropbox both sync this folder; that's fine day-to-day on one machine,
  but if you ever see odd "conflicted copy" files, resolve in git's favor.
- **If GitHub Desktop says "Unable to create index.lock: File exists,"** an AI
  instance ran a git command through the remote-devices bridge and couldn't
  clean up after it (that shell can't delete files). With Desktop idle,
  `rm .git/index.lock` in this folder and commit again. Instances are told in
  CLAUDE.md to use `git --no-optional-locks`, which avoids creating it.
- OSM's tile server is fine for modest public traffic; if the site takes off,
  switch the tile URL in index.html to a free-tier provider (MapTiler,
  Protomaps) and keep the attribution line.
