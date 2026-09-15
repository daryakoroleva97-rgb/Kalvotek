export type CarModelParams = {
  length: number;
  width: number;
  bodyHeight: number;
  bodyTopShrink: number; // how much narrower + shorter the body top is vs bottom
  hoodTaper: number; // extra front taper of the body top (tumblehome at the nose)
  tailTaper: number; // extra rear taper of the body top
  cabinLength: number;
  cabinHeight: number;
  cabinZOffset: number; // shift of cabin center relative to body center (+ = toward front)
  cabinTopShrinkX: number;
  cabinTopShrinkZ: number;
  roofThickness: number;
  wheelRadius: number;
  wheelWidth: number;
  wheelbaseZ: number; // distance from center to front/rear axle
  trackX: number; // distance from center to wheel center, x axis
  groundClearance: number;
  hasRoofRails: boolean;
};

// Proportions lean into Volvo's Scandinavian design language: slab sides
// with very little tumblehome, a near-vertical tailgate/decklid instead of
// a swoopy fastback taper, and an upright, minimally-raked greenhouse —
// the opposite of a sporty, heavily tapered German-coupe silhouette.
export const carModelParams: Record<string, CarModelParams> = {
  s60: {
    length: 4.76,
    width: 1.85,
    bodyHeight: 0.6,
    bodyTopShrink: 0.09,
    hoodTaper: 0.4,
    tailTaper: 0.2,
    cabinLength: 2.15,
    cabinHeight: 0.54,
    cabinZOffset: -0.12,
    cabinTopShrinkX: 0.09,
    cabinTopShrinkZ: 0.26,
    roofThickness: 0.05,
    wheelRadius: 0.34,
    wheelWidth: 0.24,
    wheelbaseZ: 1.56,
    trackX: 0.78,
    groundClearance: 0.09,
    hasRoofRails: false,
  },
  xc90: {
    length: 4.95,
    width: 2.0,
    bodyHeight: 0.95,
    bodyTopShrink: 0.06,
    hoodTaper: 0.22,
    tailTaper: 0.08,
    cabinLength: 2.75,
    cabinHeight: 0.7,
    cabinZOffset: -0.05,
    cabinTopShrinkX: 0.05,
    cabinTopShrinkZ: 0.1,
    roofThickness: 0.06,
    wheelRadius: 0.4,
    wheelWidth: 0.28,
    wheelbaseZ: 1.68,
    trackX: 0.84,
    groundClearance: 0.17,
    hasRoofRails: true,
  },
  v60: {
    length: 4.78,
    width: 1.85,
    bodyHeight: 0.62,
    bodyTopShrink: 0.07,
    hoodTaper: 0.4,
    tailTaper: 0.06,
    cabinLength: 2.65,
    cabinHeight: 0.56,
    cabinZOffset: -0.05,
    cabinTopShrinkX: 0.06,
    cabinTopShrinkZ: 0.12,
    roofThickness: 0.05,
    wheelRadius: 0.335,
    wheelWidth: 0.24,
    wheelbaseZ: 1.58,
    trackX: 0.78,
    groundClearance: 0.1,
    hasRoofRails: true,
  },
  c40: {
    length: 4.44,
    width: 1.87,
    bodyHeight: 0.85,
    bodyTopShrink: 0.08,
    hoodTaper: 0.28,
    tailTaper: 0.3,
    cabinLength: 2.15,
    cabinHeight: 0.62,
    cabinZOffset: -0.2,
    cabinTopShrinkX: 0.1,
    cabinTopShrinkZ: 0.32,
    roofThickness: 0.055,
    wheelRadius: 0.365,
    wheelWidth: 0.26,
    wheelbaseZ: 1.56,
    trackX: 0.8,
    groundClearance: 0.13,
    hasRoofRails: false,
  },
};
