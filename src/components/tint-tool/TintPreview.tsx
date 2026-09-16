"use client";

import { useState } from "react";

const ASSET_PATH = "/tint";
const COLOR_VALUES = [0, 1, 2, 3, 4, 5, 6];
const COLOR_NAMES = ["White", "Silver", "Crimson Red", "Green", "Navy Blue", "Anthracite", "Black"];
const GLASS_VALUES = [0, 70, 50, 35, 20, 15, 5];
const GLASS_LABELS = ["No tint", "70%", "50%", "35%", "20%", "15%", "5%"];

export function TintPreview() {
  const [colorIndex, setColorIndex] = useState(0);
  const [sideIndex, setSideIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(0);

  return (
    <div>
      <div className="relative mx-auto aspect-video w-full max-w-[900px] overflow-hidden rounded-2xl border border-border bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_PATH}/colorimg-${COLOR_VALUES[colorIndex]}.jpg`}
          alt={`Volvo S60, ${COLOR_NAMES[colorIndex]}`}
          className="absolute inset-0 h-full w-full object-contain"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_PATH}/sideimg-${GLASS_VALUES[sideIndex]}.png`}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_PATH}/backimg-${GLASS_VALUES[backIndex]}.png`}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Car color</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {COLOR_VALUES.map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => setColorIndex(i)}
                aria-pressed={colorIndex === i}
                aria-label={COLOR_NAMES[i]}
                title={COLOR_NAMES[i]}
                className={`overflow-hidden rounded-full border-2 transition-colors ${
                  colorIndex === i ? "border-accent" : "border-border"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${ASSET_PATH}/color-${v}.gif`} alt="" aria-hidden className="h-8 w-8" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Side glass tint</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {GLASS_VALUES.map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => setSideIndex(i)}
                aria-pressed={sideIndex === i}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  sideIndex === i
                    ? "border-accent bg-accent-soft text-foreground"
                    : "border-border bg-surface-2 text-muted hover:text-foreground"
                }`}
              >
                {GLASS_LABELS[i]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Rear glass tint</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {GLASS_VALUES.map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => setBackIndex(i)}
                aria-pressed={backIndex === i}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  backIndex === i
                    ? "border-accent bg-accent-soft text-foreground"
                    : "border-border bg-surface-2 text-muted hover:text-foreground"
                }`}
              >
                {GLASS_LABELS[i]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
