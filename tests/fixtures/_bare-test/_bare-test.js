// A test fixture, not a document: tests/browser-test.js serves this folder as
// documents/_bare-test/. It is a document written the BROKEN way the map tool
// used to write them: alignment.image a bare filename with no path. The tool
// must still find the render in the document's own folder, and must never
// write a bare name back out. The image is blank; only its size (1749 x 1115,
// like a real 100 dpi render) matters. The alignment is a real one, from
// M.R. 6-138: 813 m along the top edge, so 0.465 m per pixel.
module.exports = {
  id: "_bare-test",
  title: "t", shortTitle: "t", url: "http://x", scan: null, transcription: null,
  date: { on: "1884" }, type: "tract-map", attests: "planned-by",
  completeness: "incidental", readBy: "human",
  coverage: [[202, 199], [694, 945], [1569, 919], [1573, 75], [564, 63]],
  alignment: {
    image: "_bare-test-100dpi.png",
    dpi: 100,
    points: [
      { px: [0, 0], ll: [34.068278, -118.263905] },
      { px: [1749, 0], ll: [34.064723, -118.256185] },
      { px: [0, 1115], ll: [34.064173, -118.266621] }
    ]
  },
  sweptFully: false, sweptFor: [], rows: []
};
