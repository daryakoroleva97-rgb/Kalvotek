"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { CarModel } from "./CarModel";

export const STUDIO_BG = "#3d4451";

type CarView = "side" | "rear3q";

type CarSceneProps = {
  modelId: string;
  colorHex: string;
  metalness: number;
  roughness: number;
  tintVlt: number;
  view: CarView;
};

// Fixed studio-style camera presets — no orbit/spin, matching a flat product
// photo composition (a side profile shot plus a rear three-quarter shot)
// rather than a freely-rotatable model.
const CAMERA_PRESETS: Record<CarView, { position: [number, number, number]; fov: number }> = {
  side: { position: [8.4, 1.05, 0.9], fov: 20 },
  rear3q: { position: [5.4, 2.0, 5.6], fov: 26 },
};

export function CarScene({ view, ...props }: CarSceneProps) {
  const preset = CAMERA_PRESETS[view];

  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: preset.position, fov: preset.fov }}
      gl={{ antialias: true }}
      onCreated={({ camera }) => camera.lookAt(0, 0.62, 0)}
    >
      <color attach="background" args={[STUDIO_BG]} />

      {/* Bright, even studio lighting — a catalog photo look, not a moody scene. */}
      <ambientLight intensity={1.0} />
      <directionalLight position={[3, 6, 5]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-5, 4, -2]} intensity={0.55} />
      <directionalLight position={[0, 3, -6]} intensity={0.4} />

      <Suspense fallback={null}>
        <CarModel {...props} />
      </Suspense>

      {/* Self-contained studio reflection rig (baked from simple light
          panels, not an external HDRI) so the clearcoat paint picks up
          soft gradient highlights instead of looking flat/matte. */}
      <Environment resolution={256}>
        <Lightformer intensity={2.2} color="#ffffff" position={[0, 5, -6]} scale={[10, 5, 1]} />
        <Lightformer intensity={1.1} color="#ffffff" position={[-6, 1.5, 4]} rotation-y={Math.PI / 2} scale={[6, 4, 1]} />
        <Lightformer intensity={1.1} color="#ffffff" position={[6, 1.5, 4]} rotation-y={-Math.PI / 2} scale={[6, 4, 1]} />
        <Lightformer intensity={0.6} color={STUDIO_BG} position={[0, -4, 0]} rotation-x={Math.PI / 2} scale={[20, 20, 1]} />
      </Environment>

      <ContactShadows position={[0, 0.001, 0]} opacity={0.5} scale={10} blur={2.2} far={2} resolution={512} color="#000000" />
    </Canvas>
  );
}
