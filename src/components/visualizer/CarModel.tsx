"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { createFrustumGeometry } from "./geometry";
import { carModelParams } from "./carModels";
import { tintColorFor, tintOpacityFor } from "./tint";

type CarModelProps = {
  modelId: string;
  colorHex: string;
  metalness: number;
  roughness: number;
  tintVlt: number;
};

const SPOKE_ANGLES = [0, 1, 2, 3, 4].map((i) => (i * Math.PI * 2) / 5);

function Wheel({
  x,
  z,
  radius,
  width,
}: {
  x: number;
  z: number;
  radius: number;
  width: number;
}) {
  return (
    <group position={[x, radius, z]}>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, width, 24]} />
        <meshStandardMaterial color="#101113" roughness={0.7} metalness={0.2} />
      </mesh>
      {[width * 0.53, -width * 0.53].map((rimX) => (
        <group key={rimX} position={[rimX, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[radius * 0.62, radius * 0.62, width * 0.1, 20]} />
            <meshStandardMaterial color="#dde1e6" roughness={0.2} metalness={0.95} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[width * 0.02 * Math.sign(rimX || 1), 0, 0]}>
            <cylinderGeometry args={[radius * 0.2, radius * 0.2, width * 0.13, 16]} />
            <meshStandardMaterial color="#eef0f3" roughness={0.15} metalness={0.95} />
          </mesh>
          {SPOKE_ANGLES.map((angle) => (
            <group key={angle} rotation={[angle, 0, 0]}>
              <mesh position={[width * 0.02 * Math.sign(rimX || 1), radius * 0.42, 0]}>
                <boxGeometry args={[width * 0.4, radius * 0.7, radius * 0.13]} />
                <meshStandardMaterial color="#dde1e6" roughness={0.2} metalness={0.95} />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}

export function CarModel({ modelId, colorHex, metalness, roughness, tintVlt }: CarModelProps) {
  const params = carModelParams[modelId] ?? carModelParams.s60;

  const cabinBottomWidth = params.width - params.bodyTopShrink * 2 - 0.05;
  const cabinTopWidth = cabinBottomWidth - params.cabinTopShrinkX * 2;
  const cabinTopLength = params.cabinLength - params.cabinTopShrinkZ;

  const geometries = useMemo(() => {
    const body = createFrustumGeometry({
      bw: params.width,
      bd: params.length,
      tw: params.width - params.bodyTopShrink * 2,
      td: params.length - params.hoodTaper - params.tailTaper,
      h: params.bodyHeight,
      offsetZ: (params.hoodTaper - params.tailTaper) / 2,
    });

    const cabin = createFrustumGeometry({
      bw: cabinBottomWidth,
      bd: params.cabinLength,
      tw: cabinTopWidth,
      td: cabinTopLength,
      h: params.cabinHeight,
    });

    const roof = createFrustumGeometry({
      bw: cabinTopWidth + 0.06,
      bd: cabinTopLength + 0.06,
      tw: (cabinTopWidth + 0.06) * 0.96,
      td: (cabinTopLength + 0.06) * 0.96,
      h: params.roofThickness,
    });

    return { body, cabin, roof };
  }, [params, cabinBottomWidth, cabinTopWidth, cabinTopLength]);

  const bodyBottomY = params.wheelRadius * 0.55 + params.groundClearance;

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: colorHex,
        metalness,
        roughness,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        flatShading: true,
      }),
    [colorHex, metalness, roughness],
  );

  const glassMaterial = useMemo(() => {
    const color = tintColorFor(tintVlt);
    // Unlit on purpose: a physically-lit dark panel blows out to near-white
    // wherever it catches the key light straight-on, which defeats the
    // point of a tool meant to communicate exact shade darkness.
    return new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: tintOpacityFor(tintVlt),
      side: THREE.DoubleSide,
    });
  }, [tintVlt]);

  // Windshields are legally untinted almost everywhere, so — matching real
  // installs — this stays a fixed light "clear glass" look regardless of
  // the selected shade, while the side/rear glass darkens.
  const windshieldMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#c3ccd3",
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const cabinMaterials = useMemo(
    () => [windshieldMaterial, glassMaterial],
    [windshieldMaterial, glassMaterial],
  );

  const lightMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#fff6dd", emissive: "#fff3c4", emissiveIntensity: 0.9 }),
    [],
  );
  // The "Thor's Hammer" DRL accent reads as cool white/blue, distinct from
  // the warmer main headlight — the signature Volvo daytime running light look.
  const drlMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#eaf3ff", emissive: "#cfe8ff", emissiveIntensity: 1.1 }),
    [],
  );
  const tailLightMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#5c0d10", emissive: "#a5131a", emissiveIntensity: 0.7 }),
    [],
  );
  const grilleMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#101113", roughness: 0.4, metalness: 0.6 }),
    [],
  );
  const roofRailMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#3a3d42", roughness: 0.4, metalness: 0.7 }),
    [],
  );
  const rockerMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#1b1c1e", roughness: 0.85, metalness: 0.1 }),
    [],
  );
  const mirrorMaterial = bodyMaterial;

  // The body is a tapered frustum (narrower + shorter at the top than the
  // bottom), so fixtures must be positioned against the surface at their
  // own height, not against the full ground-level footprint — otherwise
  // they float off the tapered panel instead of sitting flush on it.
  const halfWidthAt = (f: number) => params.width / 2 - params.bodyTopShrink * f;
  const frontZAt = (f: number) => -params.length / 2 + params.hoodTaper * f;
  const rearZAt = (f: number) => params.length / 2 - params.tailTaper * f;

  const lightF = 0.22;
  const lightY = bodyBottomY + params.bodyHeight * lightF;
  const lightHalfWidth = halfWidthAt(lightF);
  const frontZ = frontZAt(lightF) + 0.02;
  const rearZ = rearZAt(lightF) - 0.02;

  const tailBarWidth = lightHalfWidth * 2 - 0.16;
  const grilleHalfWidth = Math.max(lightHalfWidth - 0.62, 0.28);
  const hammerAngle = 0.5;

  const roofTopY = bodyBottomY + params.bodyHeight + params.cabinHeight + params.roofThickness;
  const roofRailZ = cabinTopLength * 0.36;

  return (
    <group>
      <mesh geometry={geometries.body} material={bodyMaterial} position={[0, bodyBottomY, 0]} castShadow receiveShadow />
      <mesh
        geometry={geometries.cabin}
        material={cabinMaterials}
        position={[0, bodyBottomY + params.bodyHeight, params.cabinZOffset]}
      />
      <mesh
        geometry={geometries.roof}
        material={bodyMaterial}
        position={[0, bodyBottomY + params.bodyHeight + params.cabinHeight, params.cabinZOffset]}
      />

      {/* headlights, main housing */}
      <mesh position={[lightHalfWidth - 0.26, lightY, frontZ]} material={lightMaterial}>
        <boxGeometry args={[0.3, 0.12, 0.05]} />
      </mesh>
      <mesh position={[-(lightHalfWidth - 0.26), lightY, frontZ]} material={lightMaterial}>
        <boxGeometry args={[0.3, 0.12, 0.05]} />
      </mesh>

      {/* "Thor's Hammer" DRL accent — Volvo's signature headlight mark */}
      <mesh
        position={[lightHalfWidth - 0.16, lightY + 0.13, frontZ]}
        rotation={[0, 0, -hammerAngle]}
        material={drlMaterial}
      >
        <boxGeometry args={[0.24, 0.04, 0.045]} />
      </mesh>
      <mesh
        position={[-(lightHalfWidth - 0.16), lightY + 0.13, frontZ]}
        rotation={[0, 0, hammerAngle]}
        material={drlMaterial}
      >
        <boxGeometry args={[0.24, 0.04, 0.045]} />
      </mesh>

      {/* vertical-slat grille block between the headlights */}
      <mesh position={[0, lightY + 0.05, frontZ + 0.015]} material={grilleMaterial}>
        <boxGeometry args={[grilleHalfWidth * 2, 0.26, 0.03]} />
      </mesh>

      {/* full-width LED tail lightbar — Volvo's signature rear graphic */}
      <mesh position={[0, lightY + 0.05, rearZ]} material={tailLightMaterial}>
        <boxGeometry args={[tailBarWidth, 0.1, 0.05]} />
      </mesh>

      {/* side mirrors */}
      <mesh
        position={[params.width / 2 + 0.06, bodyBottomY + params.bodyHeight + 0.06, params.cabinZOffset - params.cabinLength / 2 + 0.15]}
        material={mirrorMaterial}
        castShadow
      >
        <boxGeometry args={[0.12, 0.08, 0.16]} />
      </mesh>
      <mesh
        position={[-(params.width / 2 + 0.06), bodyBottomY + params.bodyHeight + 0.06, params.cabinZOffset - params.cabinLength / 2 + 0.15]}
        material={mirrorMaterial}
        castShadow
      >
        <boxGeometry args={[0.12, 0.08, 0.16]} />
      </mesh>

      {/* lower rocker cladding */}
      <mesh position={[params.width / 2 + 0.01, bodyBottomY + 0.05, 0]} material={rockerMaterial}>
        <boxGeometry args={[0.03, 0.09, params.length * 0.62]} />
      </mesh>
      <mesh position={[-(params.width / 2 + 0.01), bodyBottomY + 0.05, 0]} material={rockerMaterial}>
        <boxGeometry args={[0.03, 0.09, params.length * 0.62]} />
      </mesh>

      {/* roof rails — SUV and wagon only */}
      {params.hasRoofRails && (
        <>
          <mesh position={[cabinTopWidth / 2 - 0.06, roofTopY + 0.025, params.cabinZOffset]} material={roofRailMaterial}>
            <boxGeometry args={[0.05, 0.045, roofRailZ * 2]} />
          </mesh>
          <mesh position={[-(cabinTopWidth / 2 - 0.06), roofTopY + 0.025, params.cabinZOffset]} material={roofRailMaterial}>
            <boxGeometry args={[0.05, 0.045, roofRailZ * 2]} />
          </mesh>
        </>
      )}

      <Wheel x={params.trackX} z={-params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
      <Wheel x={-params.trackX} z={-params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
      <Wheel x={params.trackX} z={params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
      <Wheel x={-params.trackX} z={params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
    </group>
  );
}
