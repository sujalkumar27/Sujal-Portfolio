import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count, trackMouse }: { count: number; trackMouse: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.5);
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.03;

    if (trackMouse) {
      const targetX = (mouse.x * viewport.width) / 2;
      const targetY = (mouse.y * viewport.height) / 2;
      ref.current.position.x += (targetX * 0.1 - ref.current.position.x) * 0.05;
      ref.current.position.y += (targetY * 0.1 - ref.current.position.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export const Background3D = () => {
  // Skip the 3D background on mobile, reduced-motion users, and tabs in the background.
  const [enabled, setEnabled] = useState(false);
  const [count, setCount] = useState(800);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (prefersReducedMotion) return;

    setEnabled(true);
    setCount(isMobile ? 0 : 1000);
  }, []);

  if (!enabled || count === 0) return null;

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none opacity-40" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        <color attach="background" args={['#050505']} />
        <ParticleField count={count} trackMouse={!window.matchMedia('(pointer: coarse)').matches} />
      </Canvas>
    </div>
  );
};
