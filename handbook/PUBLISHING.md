# Publishing to the web (GitHub Pages)

The site is published from GitHub (user `kennyeaswaran`) through GitHub Pages,
at `https://kennyeaswaran.github.io/<repo>/`; a custom domain can be pointed at it
later (below).

## One-time setup (done; for reference if it ever has to be redone)

1. Commit `data/streets-geometry.js` (the map's "Save geometry file" button), so
   visitors never depend on Overpass.
2. Create a public repository on github.com (no auto-generated README), add this
   folder to GitHub Desktop as a local repository, commit, and "Publish
   repository" with "Keep this code private" unchecked.
3. Repo → Settings → Pages → Source: **GitHub Actions**. The included workflow
   (`.github/workflows/deploy.yml`) then runs the three gates below on every push
   and deploys only if they pass; progress is in the Actions tab.

## Everyday updates

Edit files → run the generator → GitHub Desktop shows the diff → write a
one-line summary → Commit to main → Push origin. The gates run automatically;
if one fails, the previous version of the site stays up (see the red X in the
Actions tab for what went wrong).

**`generated/streets-data.js` is generated** (since the 2026-09-19 switchover): the map
reads it, `tools/generate.js` writes it from `data/names.js` + `documents/`, and nobody
edits it by hand. So every change to a document or an entity is two files in
the commit — the change itself and the regenerated output:

    node tools/check-model.js && node tools/generate.js

then commit `generated/streets-data.js` (and `generated/search-index.js`) with the rest.

The deploy runs three gates before it uploads anything:

1. `node tools/check-data.js --require-generated` — the contract the map relies
   on, and a refusal to publish a `generated/streets-data.js` that lacks the
   generator's header (someone edited it by hand).
2. `node tools/check-model.js` — the authored layers (`data/names.js`, `documents/`).
3. **Regeneration check** — it runs `node tools/generate.js` on the pushed tree and
   fails if the result differs from the committed `generated/streets-data.js` /
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
