# Streetymology (working title)

A zoomable, clickable map of street-name history. Prototype area: Downtown Los Angeles.

## Run it

Open `index.html` in a browser (internet required — it loads OSM map tiles and fetches
street geometry live from the Overpass API). For a local server:
`python3 -m http.server` in this folder, then http://localhost:8000.

## How it works

- Basemap: OpenStreetMap tiles via Leaflet.
- Street geometry: fetched at load from Overpass (named highways in the DTLA bounding
  box, defined in `BBOX` in index.html). Ways sharing a name (after stripping N/S/E/W
  prefixes) are grouped into one clickable street.
- Click target: each street segment carries an invisible ~18px-wide stroke, so the
  street's drawn area is clickable without hunting for a hairline.
- Data: `streets-data.js` — one entry per street, subdivided into **segments**
  wherever stretches have distinct name lineages (see the schema comment at the top
  of that file). Segments are bounded by cross-streets (`from`/`to`), and each
  carries its own chronological `nameHistory` whose items can be tagged with `how`
  the name arrived there: the segment where a name originated vs. stretches it
  reached by extension, renaming, or transfer (rendered as popup badges).
  3rd Street is the exemplar. Streets without an entry render grey; entries render
  blue; filter checkboxes highlight matches in amber.

## Adding history

Research is **document-first**: find a primary document (recorded tract map,
renaming ordinance, newspaper report of a council action), transcribe it once,
then apply it to every street segment it touches — adding it as a source to
existing segments, splitting segments where its extents demand, and creating
new (even partial) entries for streets it names. Entries are keyed by the
street's OSM name without directional prefix (e.g. "Main Street", not "South
Main Street"). Full guide: ADDING-STREETS.md; map pipeline: TRACT-RESEARCH.md.

## Known limitations / next steps

- Geometry loading order: `streets-geometry.js` if present → browser cache (7 days) →
  Overpass mirrors (20s timeout each). After a successful network load, click
  "Save geometry file" in the panel and move the downloaded `streets-geometry.js`
  next to `index.html` — from then on the map never depends on Overpass. Delete the
  file and reload to refresh geometry from OSM.
- OSM rarely maps streets as areas (`area:highway` coverage is near zero), so true
  street polygons aren't available; the wide invisible stroke approximates "click the
  street itself".
- Name normalization is simple prefix-stripping; watch for collisions (e.g. two
  distinct streets sharing a base name).
- Seed data (7 streets) is summarized from lastreetnames.com — before going public,
  confirm permissions/attribution with Mark Tapio Kines, and diversify sources
  (newspapers.com, LAPL, county tract maps).

## Expanding coverage

Coverage is neighborhood-based: `NEIGHBORHOODS` in `streets-data.js` drives the
Overpass query, the dashed coverage outlines, and the geometry-file staleness
check. `node coverage-report.js` prints the per-neighborhood research to-do list.
Full workflow in ADDING-STREETS.md.

## Research process

Batched by document (see ADDING-STREETS.md, "Scaling research"): a batch is a
set of primary documents — e.g. the tract maps harvested for a neighborhood —
transcribed into `tracts/transcriptions/` or `omnibus-*.md` and applied one by
one. Unverified hunches and open questions live in `research-leads.md`;
sourced claims go straight into the data even when found incidentally.

## Research resources

- L.A. Street Names (Mark Tapio Kines): https://lastreetnames.com/
- Los Angeles Revisited blog (deep-dives incl. Pearl/Figueroa): https://losangelesrevisited.blogspot.com/
- The Homestead Museum blog (early L.A., incl. Calle Eternidad): https://homesteadmuseum.blog/
- Solano Canyon street-name histories (Buena Vista/N. Broadway dates): https://www.solanocanyon.org/street-name-histories.html
- Ord/Hutton 1849 survey (LAPL): https://tessa2.lapl.org/digital/collection/maps/id/42/
- Calisphere (historic maps & photos): https://calisphere.org/
- California Digital Newspaper Collection (Herald etc., renaming ordinances): https://cdnc.ucr.edu/
- L.A. City Archives & Records Center (Council minutes/ordinances to 1850): https://clerk.lacity.gov/records
- NavigateLA (recorded tract boundaries): https://navigatela.lacity.org/
- L.A. County tract map search (recorded subdivision maps, scanned): https://pw.lacounty.gov/smpm/landrecords/TractMaps.aspx
  — full street→tract→map workflow in TRACT-RESEARCH.md
- Bernice Kimball, "Street Names of Los Angeles" (BOE, 1988) — at LAPL; the city's own renaming compendium
