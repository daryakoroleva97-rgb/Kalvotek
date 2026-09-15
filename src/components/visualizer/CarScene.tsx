"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { CarModel } from "./CarModel";

type CarSceneProps = {
  modelId: string;
  colorHex: string;
  metalness: number;
  roughness: number;
  tintVlt: number;
};

export function CarScene(props: CarSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [4.2, 1.7, 4.6], fov: 32 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#101216"]} />
      <fog attach="fog" args={["#101216", 9, 18]} />

      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      <directionalLight position={[-5, 3, -4]} intensity={0.5} color="#8fb4ff" />
      <pointLight position={[0, 2.4, -3]} intensity={0.4} color="#c9973f" />

      <Suspense fallback={null}>
        <CarModel {...props} />
      </Suspense>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[7, 48]} />
        <meshStandardMaterial color="#181a1f" roughness={0.95} metalness={0} />
      </mesh>
      <ContactShadows position={[0, 0.001, 0]} opacity={0.65} scale={10} blur={2} far={2} resolution={512} />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={9}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 0.6, 0]}
        autoRotate
        autoRotateSpeed={1.1}
      />
    </Canvas>
  );
}
