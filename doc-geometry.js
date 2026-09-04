// doc-geometry.js — the geometry shared by map-tool.html, generate.js
// and the tests. Pure functions, no DOM, no fs: loadable in the browser with
// a <script> tag and requirable in Node (MAP-TOOL-SPEC.md §6).
//
// Everything here exists because MODEL-SPEC.md §4.6 stores anything traced on
// a scan in PIXEL coordinates: the world coordinates are derived through the
// document's alignment, so an improved alignment carries the traces with it
// instead of stranding them.

(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.DocGeometry = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // --- local planar projection (metres) around a reference point -----------
  //
  // THESE TWO NUMBERS ARE DEFINED HERE, and every stored pixel coordinate in
  // the project is measured against them: change one and every alignment,
  // coverage ring and trace in documents/ silently means somewhere else. They
  // used to be stated here and again in georef.py, with a comment in each
  // saying it matched the other — a definition kept in two places, in two
  // languages, one of which nobody ran. georef.py was retired 2026-09; this is
  // now the only copy, and anything else that needs the projection should call
  // into this module rather than restate it.
  const KY = 110540;                       // metres per degree of latitude
  function makeProj(lat0, lon0) {
    const kx = 111320 * Math.cos(lat0 * Math.PI / 180);
    return {
      toEN: (lat, lon) => [(lon - lon0) * kx, (lat - lat0) * KY],
      toLL: (e, n) => [lat0 + n / KY, lon0 + e / kx]
    };
  }

  // --- alignment: control points -> affine, and back -----------------------
  // Pixel y is negated first so both systems are right-handed. 2 points give a
  // similarity; 3+ give a least-squares affine.
  function fitAlignment(points) {
    if (!points || points.length < 2) throw new Error("need at least 2 control points");
    const lat0 = points.reduce((s, p) => s + p.ll[0], 0) / points.length;
    const lon0 = points.reduce((s, p) => s + p.ll[1], 0) / points.length;
    const proj = makeProj(lat0, lon0);
    const P = points.map(p => [p.px[0], -p.px[1]]);
    const Q = points.map(p => proj.toEN(p.ll[0], p.ll[1]));

    let M;
    if (points.length === 2) {
      // exact similarity via complex arithmetic: w = s*z + t
      const dz = [P[1][0] - P[0][0], P[1][1] - P[0][1]];
      const dw = [Q[1][0] - Q[0][0], Q[1][1] - Q[0][1]];
      const den = dz[0] * dz[0] + dz[1] * dz[1];
      if (!den) throw new Error("control points coincide");
      const s = [(dw[0] * dz[0] + dw[1] * dz[1]) / den,
                 (dw[1] * dz[0] - dw[0] * dz[1]) / den];
      const t = [Q[0][0] - (s[0] * P[0][0] - s[1] * P[0][1]),
                 Q[0][1] - (s[1] * P[0][0] + s[0] * P[0][1])];
      M = [[s[0], -s[1], t[0]], [s[1], s[0], t[1]]];
    } else {
      // least squares on [x, y', 1] -> E and -> N
      const A = P.map(([x, y]) => [x, y, 1]);
      M = [solveLS(A, Q.map(q => q[0])), solveLS(A, Q.map(q => q[1]))];
    }
    return { M, proj, points };
  }

  // Normal equations + Gaussian elimination. 3x3 only; fine for this.
  function solveLS(A, y) {
    const n = 3;
    const N = Array.from({ length: n }, () => new Array(n + 1).fill(0));
    for (let r = 0; r < A.length; r++)
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) N[i][j] += A[r][i] * A[r][j];
        N[i][n] += A[r][i] * y[r];
      }
    for (let i = 0; i < n; i++) {
      let piv = i;
      for (let k = i + 1; k < n; k++) if (Math.abs(N[k][i]) > Math.abs(N[piv][i])) piv = k;
      [N[i], N[piv]] = [N[piv], N[i]];
      if (Math.abs(N[i][i]) < 1e-12) throw new Error("degenerate control points");
      for (let k = i + 1; k < n; k++) {
        const f = N[k][i] / N[i][i];
        for (let j = i; j <= n; j++) N[k][j] -= f * N[i][j];
      }
    }
    const x = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      let s = N[i][n];
      for (let j = i + 1; j < n; j++) s -= N[i][j] * x[j];
      x[i] = s / N[i][i];
    }
    return x;
  }

  function scanToWorld(fit, px, py) {
    const [a, b, c] = fit.M[0], [d, e, f] = fit.M[1];
    const E = a * px + b * (-py) + c, N = d * px + e * (-py) + f;
    return fit.proj.toLL(E, N);           // [lat, lng]
  }

  function worldToScan(fit, lat, lng) {
    const [E, N] = fit.proj.toEN(lat, lng);
    const [a, b, c] = fit.M[0], [d, e, f] = fit.M[1];
    const det = a * e - b * d;
    if (!det) throw new Error("non-invertible alignment");
    const u = E - c, v = N - f;
    const x = (u * e - v * b) / det, yneg = (a * v - d * u) / det;
    return [x, -yneg];                    // [px, py]
  }

  // --- polygons ------------------------------------------------------------
  // ray casting; ring is [[x,y], ...] in whatever space the point is in.
  function pointInPolygon(pt, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j];
      if ((yi > pt[1]) !== (yj > pt[1]) &&
          pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }

  // A coverage ring stored in scan pixels, as [lat,lng] for map-space tests.
  function coverageToWorld(fit, ring) {
    return ring.map(([x, y]) => scanToWorld(fit, x, y));
  }

  // WHICH SPACE IS THIS RING IN? (§4.6)
  //
  // A coverage ring is either scan pixels or [lat,lng], and nothing in the
  // file says which. The test is on the VALUES: no latitude exceeds 90 and no
  // longitude exceeds 180, while a 100 dpi render is over a thousand pixels
  // across, so any coordinate outside that range means pixels.
  //
  // The obvious cheap test — "is the first x large?" — is what was here, and
  // it was wrong on half the corpus: a polygon traced from the sheet's
  // top-left corner starts at x=88, and every such document was read as
  // degrees, silently turning the checks that use the ring into no-ops.
  // Whether the FIRST vertex happens to be large says nothing; whether ANY
  // coordinate is out of range says everything.
  function ringIsPixels(ring) {
    if (!Array.isArray(ring) || !ring.length) return false;
    return ring.some(pt => Array.isArray(pt) && pt.length === 2 &&
      (Math.abs(pt[0]) > 90 || Math.abs(pt[1]) > 180));
  }

  // --- which modern ways lie inside coverage -------------------------------
  // ways: [{ name, geometry: [{lat, lon}] }]; ring: [[lat,lng], ...]
  // Returns one record per way with the in-bounds portions as point runs, so
  // a way that enters, leaves and re-enters yields two runs.
  //
  // Clipped at the EDGE, not at the vertex. OSM records a straight street as
  // two points hundreds of metres apart, so testing only vertices throws away
  // everything between the last inside vertex and the boundary — on MR006-138
  // that silently lost 127 m of Douglas Street, and a way that crossed a
  // polygon with no vertex inside would have been missed altogether.
  function segmentsInBounds(ways, ringLL) {
    const out = [];
    for (const w of ways) {
      const g = w.geometry;
      if (!g || !g.length) continue;
      const runs = [];
      let cur = null;
      const open = p => { cur = [p]; runs.push(cur); };
      for (let i = 0; i < g.length; i++) {
        const p = g[i], pin = pointInPolygon([p.lat, p.lon], ringLL);
        if (pin) { if (cur) cur.push(p); else open(p); }
        if (i + 1 >= g.length) break;
        const q = g[i + 1], qin = pointInPolygon([q.lat, q.lon], ringLL);
        if (pin && qin) continue;                       // wholly inside
        const xs = ringCrossings(p, q, ringLL);
        if (pin && !qin) { if (xs.length) cur.push(xs[0]); cur = null; }
        else if (!pin && qin) { open(xs.length ? xs[xs.length - 1] : p); }
        else {                                          // both ends outside
          if (xs.length >= 2) runs.push([xs[0], xs[xs.length - 1]]);
          cur = null;
        }
      }
      if (runs.length) out.push({ name: w.name, way: w, runs });
    }
    return out;
  }

  // Where the segment p→q crosses the ring, in order along p→q. Planar, in the
  // same [lat, lon] frame pointInPolygon uses, so the two always agree.
  function ringCrossings(p, q, ring) {
    const hits = [];
    const ax = p.lat, ay = p.lon, bx = q.lat, by = q.lon;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const cx = ring[j][0], cy = ring[j][1], dx = ring[i][0], dy = ring[i][1];
      const den = (dy - cy) * (bx - ax) - (dx - cx) * (by - ay);
      if (!den) continue;                                // parallel
      const t = ((dx - cx) * (ay - cy) - (dy - cy) * (ax - cx)) / den;
      const u = ((bx - ax) * (ay - cy) - (by - ay) * (ax - cx)) / den;
      if (t < 0 || t > 1 || u < 0 || u > 1) continue;
      hits.push({ t, lat: ax + t * (bx - ax), lon: ay + t * (by - ay) });
    }
    hits.sort((m, n) => m.t - n.t);
    return hits.map(h => ({ lat: h.lat, lon: h.lon }));
  }

  // --- cross streets -------------------------------------------------------
  // streetPoints: Map(name -> [{lat,lon}]). Distances in metres, using the
  // same rough scaling intersect.js uses so results agree with it.
  const M_PER_DEG = 111000;
  function metres(a, b) {
    return Math.hypot(a.lat - b.lat, (a.lon - b.lon) * 0.83) * M_PER_DEG;
  }

  function nearestCrossStreet(streetPoints, streetName, pt, opts) {
    const maxM = (opts && opts.maxM) || 40;
    const own = streetPoints.get(streetName);
    if (!own) return null;
    let best = null;
    for (const [name, pts] of streetPoints) {
      if (name === streetName) continue;
      // the candidate must actually meet this street somewhere...
      let meet = Infinity, meetPt = null;
      for (const p of pts) for (const q of own) {
        const d = metres(p, q);
        if (d < meet) { meet = d; meetPt = { lat: (p.lat + q.lat) / 2, lon: (p.lon + q.lon) / 2 }; }
      }
      if (meet > 60) continue;                       // same threshold as check-model
      // ...and we want the intersection nearest the clicked point
      const d = metres(meetPt, pt);
      if (d <= maxM && (!best || d < best.distanceM))
        best = { name, distanceM: d, at: meetPt, meetsWithinM: meet };
    }
    return best;
  }

  // MODEL-SPEC §5.4: a cross-street name when one is near, else a point.
  // `toPx` converts a world point back to scan pixels (null for scanless docs).
  function snapOrPoint(streetPoints, streetName, pt, toPx, opts) {
    const near = nearestCrossStreet(streetPoints, streetName, pt, opts);
    if (near) return { value: near.name, snapped: true, distanceM: near.distanceM };
    const px = toPx ? toPx(pt.lat, pt.lon) : null;
    return px
      ? { value: { px: [Math.round(px[0]), Math.round(px[1])] }, snapped: false }
      : { value: { ll: [+pt.lat.toFixed(6), +pt.lon.toFixed(6)] }, snapped: false };
  }

  // --- scan placement ------------------------------------------------------
  // The map tool holds a scan's placement as a ground point under its
  // centre, a rotation from north, and metres per scan pixel — never as a
  // screen position, which would need correcting on every pan and zoom and
  // would drift as those corrections accumulated.
  const KX = lat => 111320 * Math.cos(lat * Math.PI / 180);

  function placementFromAlignment(points, imgW, imgH) {
    const fit = fitAlignment(points);
    const [lat, lng] = scanToWorld(fit, imgW / 2, imgH / 2);
    const [aLat, aLng] = scanToWorld(fit, 0, 0);
    const [bLat, bLng] = scanToWorld(fit, imgW, 0);
    const mppx = metres({ lat: aLat, lon: aLng }, { lat: bLat, lon: bLng }) / imgW;
    // the top edge runs along +x in scan space; its bearing is the rotation
    const east = (bLng - aLng) * KX(lat), south = -(bLat - aLat) * KY;
    return { lat, lng, rot: Math.atan2(south, east), mppx };
  }

  function placementToWorld(pl, imgW, imgH, px, py) {
    const c = Math.cos(pl.rot), sn = Math.sin(pl.rot);
    const dx = (px - imgW / 2) * pl.mppx, dy = (py - imgH / 2) * pl.mppx;
    const east = dx * c - dy * sn, south = dx * sn + dy * c;
    return [pl.lat - south / KY, pl.lng + east / KX(pl.lat)];
  }

  return { makeProj, fitAlignment, scanToWorld, worldToScan, pointInPolygon,
           ringCrossings,
           placementFromAlignment, placementToWorld,
           coverageToWorld, ringIsPixels, segmentsInBounds, nearestCrossStreet, snapOrPoint,
           metres };
});
