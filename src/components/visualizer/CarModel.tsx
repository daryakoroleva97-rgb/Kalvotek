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
        <meshStandardMaterial color="#26282c" roughness={0.75} metalness={0.15} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[width * 0.53, 0, 0]}>
        <cylinderGeometry args={[radius * 0.62, radius * 0.62, width * 0.14, 8]} />
        <meshStandardMaterial color="#dfe2e6" roughness={0.25} metalness={0.9} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[-width * 0.53, 0, 0]}>
        <cylinderGeometry args={[radius * 0.62, radius * 0.62, width * 0.14, 8]} />
        <meshStandardMaterial color="#dfe2e6" roughness={0.25} metalness={0.9} />
      </mesh>
    </group>
  );
}

export function CarModel({ modelId, colorHex, metalness, roughness, tintVlt }: CarModelProps) {
  const params = carModelParams[modelId] ?? carModelParams.sedan;

  const geometries = useMemo(() => {
    const body = createFrustumGeometry({
      bw: params.width,
      bd: params.length,
      tw: params.width - params.bodyTopShrink * 2,
      td: params.length - params.hoodTaper - params.tailTaper,
      h: params.bodyHeight,
      offsetZ: (params.hoodTaper - params.tailTaper) / 2,
    });

    const cabinBottomWidth = params.width - params.bodyTopShrink * 2 - 0.05;
    const cabinTopWidth = cabinBottomWidth - params.cabinTopShrinkX * 2;
    const cabinTopLength = params.cabinLength - params.cabinTopShrinkZ;

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
  }, [params]);

  const bodyBottomY = params.wheelRadius * 0.55 + params.groundClearance;

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: colorHex,
        metalness,
        roughness,
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

  const lightMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#fff6dd", emissive: "#fff3c4", emissiveIntensity: 0.9 }),
    [],
  );
  const tailLightMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#5c0d10", emissive: "#a5131a", emissiveIntensity: 0.7 }),
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

  return (
    <group>
      <mesh geometry={geometries.body} material={bodyMaterial} position={[0, bodyBottomY, 0]} castShadow receiveShadow />
      <mesh
        geometry={geometries.cabin}
        material={glassMaterial}
        position={[0, bodyBottomY + params.bodyHeight, params.cabinZOffset]}
      />
      <mesh
        geometry={geometries.roof}
        material={bodyMaterial}
        position={[0, bodyBottomY + params.bodyHeight + params.cabinHeight, params.cabinZOffset]}
      />

      {/* headlights */}
      <mesh position={[lightHalfWidth - 0.26, lightY, frontZ]} material={lightMaterial}>
        <boxGeometry args={[0.32, 0.13, 0.05]} />
      </mesh>
      <mesh position={[-(lightHalfWidth - 0.26), lightY, frontZ]} material={lightMaterial}>
        <boxGeometry args={[0.32, 0.13, 0.05]} />
      </mesh>

      {/* taillights */}
      <mesh position={[lightHalfWidth - 0.24, lightY + 0.05, rearZ]} material={tailLightMaterial}>
        <boxGeometry args={[0.28, 0.15, 0.05]} />
      </mesh>
      <mesh position={[-(lightHalfWidth - 0.24), lightY + 0.05, rearZ]} material={tailLightMaterial}>
        <boxGeometry args={[0.28, 0.15, 0.05]} />
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

      <Wheel x={params.trackX} z={-params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
      <Wheel x={-params.trackX} z={-params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
      <Wheel x={params.trackX} z={params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
      <Wheel x={-params.trackX} z={params.wheelbaseZ} radius={params.wheelRadius} width={params.wheelWidth} />
    </group>
  );
}
