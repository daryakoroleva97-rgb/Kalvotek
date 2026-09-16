import * as THREE from "three";

type FrustumOptions = {
  /** bottom width (x axis) */
  bw: number;
  /** bottom depth (z axis) */
  bd: number;
  /** top width (x axis) */
  tw: number;
  /** top depth (z axis) */
  td: number;
  /** height (y axis) */
  h: number;
  /** shift of the top face relative to the bottom, x axis */
  offsetX?: number;
  /** shift of the top face relative to the bottom, z axis */
  offsetZ?: number;
};

/**
 * Builds a box-like solid whose top face can be a different (and offset)
 * size than its bottom face — used to fake hood slopes, windshield rake,
 * and roof taper without a modelling tool. Winding is hand-verified for
 * outward-facing normals; pair with `flatShading` materials so per-vertex
 * normal averaging at the shared corners doesn't matter.
 */
export function createFrustumGeometry({ bw, bd, tw, td, h, offsetX = 0, offsetZ = 0 }: FrustumOptions) {
  const hbw = bw / 2;
  const hbd = bd / 2;
  const htw = tw / 2;
  const htd = td / 2;

  const positions = new Float32Array([
    -hbw, 0, -hbd, // 0 b0
    hbw, 0, -hbd, // 1 b1
    hbw, 0, hbd, // 2 b2
    -hbw, 0, hbd, // 3 b3
    -htw + offsetX, h, -htd + offsetZ, // 4 t0
    htw + offsetX, h, -htd + offsetZ, // 5 t1
    htw + offsetX, h, htd + offsetZ, // 6 t2
    -htw + offsetX, h, htd + offsetZ, // 7 t3
  ]);

  const index = [
    0, 1, 2, 0, 2, 3, // bottom
    4, 6, 5, 4, 7, 6, // top
    0, 5, 1, 0, 4, 5, // front (-z)
    2, 7, 3, 2, 6, 7, // back (+z)
    0, 3, 7, 0, 7, 4, // left (-x)
    1, 6, 2, 1, 5, 6, // right (+x)
  ];

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setIndex(index);
  geometry.computeVertexNormals();

  // Material groups so callers can render the front face (e.g. a
  // windshield) with a different material than the rest of the shape —
  // bottom+top: indices [0,12), front: [12,18), back+left+right: [18,36).
  geometry.addGroup(0, 12, 1);
  geometry.addGroup(12, 6, 0);
  geometry.addGroup(18, 18, 1);

  return geometry;
}
