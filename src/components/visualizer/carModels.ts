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
};

export const carModelParams: Record<string, CarModelParams> = {
  sedan: {
    length: 4.6,
    width: 1.82,
    bodyHeight: 0.62,
    bodyTopShrink: 0.14,
    hoodTaper: 0.55,
    tailTaper: 0.35,
    cabinLength: 2.05,
    cabinHeight: 0.56,
    cabinZOffset: -0.18,
    cabinTopShrinkX: 0.16,
    cabinTopShrinkZ: 0.42,
    roofThickness: 0.05,
    wheelRadius: 0.335,
    wheelWidth: 0.24,
    wheelbaseZ: 1.52,
    trackX: 0.76,
    groundClearance: 0.09,
  },
  suv: {
    length: 4.75,
    width: 1.95,
    bodyHeight: 0.92,
    bodyTopShrink: 0.1,
    hoodTaper: 0.3,
    tailTaper: 0.12,
    cabinLength: 2.55,
    cabinHeight: 0.68,
    cabinZOffset: -0.12,
    cabinTopShrinkX: 0.08,
    cabinTopShrinkZ: 0.18,
    roofThickness: 0.06,
    wheelRadius: 0.39,
    wheelWidth: 0.27,
    wheelbaseZ: 1.62,
    trackX: 0.82,
    groundClearance: 0.16,
  },
  hatchback: {
    length: 4.0,
    width: 1.76,
    bodyHeight: 0.66,
    bodyTopShrink: 0.12,
    hoodTaper: 0.4,
    tailTaper: 0.08,
    cabinLength: 2.1,
    cabinHeight: 0.6,
    cabinZOffset: -0.32,
    cabinTopShrinkX: 0.12,
    cabinTopShrinkZ: 0.24,
    roofThickness: 0.05,
    wheelRadius: 0.32,
    wheelWidth: 0.23,
    wheelbaseZ: 1.32,
    trackX: 0.74,
    groundClearance: 0.09,
  },
  coupe: {
    length: 4.55,
    width: 1.84,
    bodyHeight: 0.56,
    bodyTopShrink: 0.16,
    hoodTaper: 0.65,
    tailTaper: 0.45,
    cabinLength: 1.85,
    cabinHeight: 0.48,
    cabinZOffset: -0.35,
    cabinTopShrinkX: 0.2,
    cabinTopShrinkZ: 0.46,
    roofThickness: 0.045,
    wheelRadius: 0.335,
    wheelWidth: 0.25,
    wheelbaseZ: 1.5,
    trackX: 0.78,
    groundClearance: 0.08,
  },
};
