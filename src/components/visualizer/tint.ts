import * as THREE from "three";

// sRGB byte values — interpolated directly in sRGB space (not via
// THREE.Color.lerp, which mixes in linear light and visibly washes out
// dark results toward mid-grey).
const CLEAR_GLASS: [number, number, number] = [174, 185, 194];
const BLACKOUT: [number, number, number] = [5, 5, 6];

function lerpByte(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

export function tintColorFor(vlt: number) {
  const darkness = 1 - vlt / 100;
  const r = lerpByte(CLEAR_GLASS[0], BLACKOUT[0], darkness);
  const g = lerpByte(CLEAR_GLASS[1], BLACKOUT[1], darkness);
  const b = lerpByte(CLEAR_GLASS[2], BLACKOUT[2], darkness);
  const color = new THREE.Color();
  color.setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace);
  return color;
}

export function tintOpacityFor(vlt: number) {
  const darkness = 1 - vlt / 100;
  return 0.22 + darkness * 0.66;
}
