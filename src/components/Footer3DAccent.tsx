import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Knot = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.9, 0.28, 128, 16]} />
        <meshBasicMaterial color="#00dbe9" wireframe transparent opacity={0.45} />
      </mesh>
      {/* Solid inner core with secondary tint */}
      <mesh scale={0.7}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshBasicMaterial color="#d0bcff" wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  );
};

export const Footer3DAccent = () => (
  <div className="relative h-40 w-full overflow-hidden pointer-events-none">
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
    >
      <Suspense fallback={null}>
        <Knot />
      </Suspense>
    </Canvas>
    {/* Fade out into the footer background */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-black" aria-hidden="true" />
  </div>
);
