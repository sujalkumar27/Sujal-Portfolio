import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  Text,
  MeshDistortMaterial,
  Sparkles,
  Environment,
  Html
} from '@react-three/drei';
import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────────────────────────────
// Central core — animated distortion icosahedron with primary/secondary lighting
// ─────────────────────────────────────────────────────────────────────────────────────
const Core = () => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.22;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.32;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.15, 2]} />
        <MeshDistortMaterial
          color="#00dbe9"
          emissive="#00dbe9"
          emissiveIntensity={0.18}
          speed={2.4}
          distort={0.42}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
      {/* Inner wireframe — visible through the distort surface */}
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#d0bcff" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

// ─────────────────────────────────────────────────────────────────────────────────────
// Orbiting skill pill — pulled out of Tailwind classes into a 3D label
// ─────────────────────────────────────────────────────────────────────────────────────
interface OrbitSkill {
  name: string;
  level: string;
  color: string;
  radius: number;
  speed: number;
  angle: number;
  tilt: number;
  yOffset: number;
}

const SKILL_ORBITS: OrbitSkill[] = [
  { name: 'Core Java',      level: 'Expert',       color: '#00dbe9', radius: 3.1, speed:  0.30, angle: 0,                 tilt:  0.05, yOffset:  0.0  },
  { name: 'Spring Boot',    level: 'Advanced',     color: '#d0bcff', radius: 3.5, speed: -0.24, angle: Math.PI / 3,       tilt:  0.40, yOffset:  0.3  },
  { name: 'Python · FastAPI',level: 'Advanced',    color: '#00dbe9', radius: 3.2, speed:  0.34, angle: (2 * Math.PI) / 3, tilt: -0.30, yOffset: -0.4 },
  { name: 'RAG · LangChain',level: 'Intermediate', color: '#d0bcff', radius: 3.8, speed: -0.20, angle: Math.PI,           tilt:  0.55, yOffset:  0.4  },
  { name: 'MySQL · Oracle', level: 'Advanced',     color: '#00dbe9', radius: 2.9, speed:  0.40, angle: (4 * Math.PI) / 3, tilt: -0.50, yOffset: -0.3 },
  { name: 'Git · Docker · DSA', level: 'Expert',   color: '#d0bcff', radius: 3.4, speed: -0.28, angle: (5 * Math.PI) / 3, tilt:  0.18, yOffset:  0.1  }
];

const OrbitingSkill = ({ skill }: { skill: OrbitSkill }) => {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime * skill.speed + skill.angle;
    const x = Math.cos(t) * skill.radius;
    const z = Math.sin(t) * skill.radius * Math.cos(skill.tilt);
    const y = skill.yOffset + Math.sin(t) * skill.radius * skill.tilt;
    group.current.position.set(x, y, z);
    group.current.lookAt(state.camera.position);
  });

  const width = skill.name.length * 0.13 + 0.3;

  return (
    <group
      ref={group}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Outer glow (becomes brighter on hover) */}
      <mesh position={[0, 0, -0.04]}>
        <planeGeometry args={[width + 0.12, 0.55]} />
        <meshBasicMaterial color={skill.color} transparent opacity={hovered ? 0.55 : 0.28} />
      </mesh>

      {/* Pill background */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[width, 0.45]} />
        <meshBasicMaterial color="#0f131e" transparent opacity={0.9} />
      </mesh>

      {/* Skill label */}
      <Text
        fontSize={0.16}
        color={skill.color}
        anchorX="center"
        anchorY="middle"
        position={[0, 0.05, 0]}
        outlineWidth={0.005}
        outlineColor="#000"
      >
        {skill.name}
      </Text>

      {/* Level (smaller, dimmer) */}
      <Text
        fontSize={0.07}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
        position={[0, -0.12, 0]}
      >
        {skill.level.toUpperCase()}
      </Text>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────────────
// Camera that gently follows the mouse for depth
// ─────────────────────────────────────────────────────────────────────────────────────
const ParallaxCamera = () => {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.4, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
};

// ─────────────────────────────────────────────────────────────────────────────────────
// Scene
// ─────────────────────────────────────────────────────────────────────────────────────
const Scene = () => (
  <>
    <ambientLight intensity={0.35} />
    <directionalLight position={[5, 5, 5]} intensity={0.6} />
    <pointLight position={[4, 2, 3]} color="#00dbe9" intensity={2} distance={10} />
    <pointLight position={[-4, -2, -3]} color="#d0bcff" intensity={2} distance={10} />

    <Core />

    {SKILL_ORBITS.map((s) => (
      <OrbitingSkill key={s.name} skill={s} />
    ))}

    <Sparkles count={60} size={1.6} scale={[10, 8, 6]} color="#00dbe9" speed={0.3} opacity={0.6} />
    <Sparkles count={35} size={1.1} scale={[14, 10, 8]} color="#d0bcff" speed={0.2} opacity={0.45} />

    <Environment preset="night" />
    <ParallaxCamera />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────────────
// Lightweight loader shown inside the canvas while textures/env load
// ─────────────────────────────────────────────────────────────────────────────────────
const Loader = () => (
  <Html center>
    <div className="flex items-center gap-2 text-slate-400 text-xs">
      <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      Loading skills universe
    </div>
  </Html>
);

// ─────────────────────────────────────────────────────────────────────────────────────
// Public component
// ─────────────────────────────────────────────────────────────────────────────────────
export const Skills3DScene = () => (
  <div className="w-full aspect-[16/10] sm:aspect-[16/9] max-w-5xl mx-auto">
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);
