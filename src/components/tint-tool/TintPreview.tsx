"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ASSET_PATH =
  "https://cdn.jsdelivr.net/gh/daryakoroleva97-rgb/Kalvotek@25caf66/public/tint";
const COLOR_VALUES = [0, 1, 2, 3, 4, 5, 6];
const GLASS_VALUES = [0, 70, 50, 35, 20, 15, 5];

export function TintPreview() {
  const { t } = useLanguage();
  const [colorIndex, setColorIndex] = useState(0);
  const [sideIndex, setSideIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(0);

  return (
    <div>
      <div className="relative mx-auto aspect-[175/158] w-full max-w-[560px] overflow-hidden rounded-2xl border border-border bg-[#eeeff1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET_PATH}/colorimg-${COLOR_VALUES[colorIndex]}.jpg`}
          alt={t.tint.altText(t.tint.colorNames[colorIndex])}
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
          <h3 className="text-sm font-semibold text-foreground">{t.tint.carColor}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {COLOR_VALUES.map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => setColorIndex(i)}
                aria-pressed={colorIndex === i}
                aria-label={t.tint.colorNames[i]}
                title={t.tint.colorNames[i]}
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
          <h3 className="text-sm font-semibold text-foreground">{t.tint.sideGlassTint}</h3>
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
                {t.tint.glassLabels[i]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">{t.tint.rearGlassTint}</h3>
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
                {t.tint.glassLabels[i]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
