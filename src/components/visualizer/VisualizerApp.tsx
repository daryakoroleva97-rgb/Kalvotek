"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { carColors, carModels, tintShades } from "@/lib/site-config";
import { BookNowButton } from "@/components/layout/BookNowButton";

const CarScene = dynamic(() => import("./CarScene").then((m) => m.CarScene), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm text-muted">
      Loading 3D preview…
    </div>
  ),
});

export function VisualizerApp() {
  const [modelId, setModelId] = useState(carModels[0].id);
  const [colorId, setColorId] = useState(carColors[0].id);
  const [customColor, setCustomColor] = useState<string | null>(null);
  const [tintVlt, setTintVlt] = useState(20);

  const activeColor = useMemo(() => {
    if (customColor) {
      return { hex: customColor, metalness: 0.55, roughness: 0.3, name: "Custom color" };
    }
    const found = carColors.find((c) => c.id === colorId) ?? carColors[0];
    return { hex: found.hex, metalness: found.metalness, roughness: found.roughness, name: found.name };
  }, [colorId, customColor]);

  const nearestShade = useMemo(
    () =>
      tintShades.reduce((closest, shade) =>
        Math.abs(shade.vlt - tintVlt) < Math.abs(closest.vlt - tintVlt) ? shade : closest,
      ),
    [tintVlt],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="h-[380px] sm:h-[460px] lg:h-[600px]">
          <CarScene
            modelId={modelId}
            colorHex={activeColor.hex}
            metalness={activeColor.metalness}
            roughness={activeColor.roughness}
            tintVlt={nearestShade.vlt}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 text-xs text-muted">
          <span>Drag to rotate · scroll to zoom</span>
          <span>
            {carModels.find((m) => m.id === modelId)?.name} · {activeColor.name} · {nearestShade.label} tint
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <section aria-labelledby="model-heading" className="rounded-2xl border border-border bg-surface p-5">
          <h3 id="model-heading" className="text-sm font-semibold text-foreground">
            1. Choose a body style
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {carModels.map((model) => (
              <button
                key={model.id}
                type="button"
                onClick={() => setModelId(model.id)}
                aria-pressed={modelId === model.id}
                className={`rounded-xl border px-3 py-3 text-left transition-colors ${
                  modelId === model.id
                    ? "border-accent bg-accent-soft text-foreground"
                    : "border-border bg-surface-2 text-muted hover:text-foreground"
                }`}
              >
                <span className="block text-sm font-semibold">{model.name}</span>
                <span className="block text-xs text-muted">{model.bodyType}</span>
              </button>
            ))}
          </div>
        </section>

        <section aria-labelledby="color-heading" className="rounded-2xl border border-border bg-surface p-5">
          <h3 id="color-heading" className="text-sm font-semibold text-foreground">
            2. Choose a car color
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {carColors.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() => {
                  setColorId(color.id);
                  setCustomColor(null);
                }}
                aria-label={color.name}
                aria-pressed={!customColor && colorId === color.id}
                title={color.name}
                className={`h-9 w-9 rounded-full border-2 transition-transform hover:scale-105 ${
                  !customColor && colorId === color.id ? "border-accent" : "border-border"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
            <label
              title="Custom color"
              className={`relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 text-[10px] font-semibold ${
                customColor ? "border-accent" : "border-border"
              }`}
              style={{
                background: customColor ?? "conic-gradient(from 0deg, red, yellow, lime, cyan, blue, magenta, red)",
              }}
            >
              <span className="sr-only">Pick a custom color</span>
              <input
                type="color"
                value={customColor ?? "#888888"}
                onChange={(e) => setCustomColor(e.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </label>
          </div>
          <p className="mt-3 text-xs text-muted">{activeColor.name}</p>
        </section>

        <section aria-labelledby="tint-heading" className="rounded-2xl border border-border bg-surface p-5">
          <h3 id="tint-heading" className="text-sm font-semibold text-foreground">
            3. Choose a tint shade (VLT%)
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {tintShades.map((shade) => (
              <button
                key={shade.vlt}
                type="button"
                onClick={() => setTintVlt(shade.vlt)}
                aria-pressed={nearestShade.vlt === shade.vlt}
                className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-3 transition-colors ${
                  nearestShade.vlt === shade.vlt
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-surface-2 hover:border-accent/50"
                }`}
              >
                <span
                  className="h-6 w-10 rounded border border-white/10"
                  style={{ backgroundColor: shade.swatch }}
                />
                <span className="text-sm font-semibold text-foreground">{shade.label}</span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">{nearestShade.description}</p>
        </section>

        <div className="rounded-2xl border border-accent/30 bg-accent-soft p-5">
          <p className="text-sm text-foreground">Like what you see?</p>
          <p className="mt-1 text-xs text-muted">
            Book your install and we&apos;ll match this exact shade on your vehicle.
          </p>
          <BookNowButton className="mt-4 w-full" />
        </div>
      </div>
    </div>
  );
}
