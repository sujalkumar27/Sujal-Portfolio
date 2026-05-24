import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, MeshDistortMaterial, Float, MeshWobbleMaterial, PresentationControls, ContactShadows, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '../lib/utils';
import { Maximize2, X, RotateCcw, Box, Cpu, Zap, Layers, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

interface ModelViewerProps {
  type?: 'environment' | 'abstract' | 'character' | 'architecture' | 'procedural';
}

const PlaceholderModel = ({ type, wireframe, color }: ModelViewerProps & { wireframe: boolean, color: string }) => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  // Smoothly animate scale and opacity on hover
  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetScale = hovered ? (active ? 1.3 : 1.15) : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      if (meshRef.current.material) {
        const targetOpacity = hovered ? 1 : 0.8;
        const mat = meshRef.current.material as any;
        if (mat.opacity !== undefined) {
          mat.transparent = true;
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.1);
        }
      }
    }
  });

  const handleClick = () => setActive(!active);
  const speedMultiplier = active ? 2 : 1;

  switch (type) {
    case 'environment':
      return (
        <Float speed={2 * speedMultiplier} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh 
            ref={meshRef}
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <boxGeometry args={[2, 2, 2]} />
            <MeshDistortMaterial 
              color={color} 
              speed={3 * speedMultiplier} 
              distort={active ? 0.6 : 0.4} 
              transparent
              opacity={0.8}
              wireframe={wireframe}
            />
          </mesh>
        </Float>
      );
    case 'character':
      return (
        <Float speed={3 * speedMultiplier} rotationIntensity={1} floatIntensity={1}>
          <mesh 
            ref={meshRef}
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <octahedronGeometry args={[1.5, 0]} />
            <MeshWobbleMaterial 
              color={color} 
              speed={2 * speedMultiplier} 
              factor={active ? 1.2 : 0.6} 
              transparent
              opacity={0.8}
              wireframe={wireframe}
            />
          </mesh>
        </Float>
      );
    case 'architecture':
      return (
        <Float speed={1 * speedMultiplier} rotationIntensity={0.2} floatIntensity={0.2}>
          <mesh 
            ref={meshRef}
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <MeshDistortMaterial 
              color={color} 
              speed={2 * speedMultiplier} 
              distort={active ? 0.4 : 0.2} 
              transparent
              opacity={0.8}
              wireframe={wireframe}
            />
          </mesh>
        </Float>
      );
    case 'abstract':
      return (
        <Float speed={4 * speedMultiplier} rotationIntensity={2} floatIntensity={0.5}>
          <mesh 
            ref={meshRef}
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <torusGeometry args={[1.2, 0.4, 32, 100]} />
            <MeshWobbleMaterial 
              color={color} 
              speed={5 * speedMultiplier} 
              factor={active ? 1.5 : 0.8} 
              transparent
              opacity={0.8}
              wireframe={wireframe}
            />
          </mesh>
        </Float>
      );
    case 'procedural':
      return (
        <Float speed={2 * speedMultiplier} rotationIntensity={1} floatIntensity={1}>
          <mesh 
            ref={meshRef}
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <dodecahedronGeometry args={[1.5, 0]} />
            <MeshDistortMaterial 
              color={color} 
              speed={4 * speedMultiplier} 
              distort={active ? 0.8 : 0.5} 
              transparent
              opacity={0.8}
              wireframe={wireframe}
            />
          </mesh>
        </Float>
      );
    default:
      return (
        <Float speed={2 * speedMultiplier} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh 
            ref={meshRef}
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <icosahedronGeometry args={[1.5, 0]} />
            <MeshDistortMaterial 
              color={color} 
              speed={4 * speedMultiplier} 
              distort={active ? 0.5 : 0.3} 
              transparent
              opacity={0.8}
              wireframe={wireframe}
            />
          </mesh>
        </Float>
      );
  }
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4 w-64">
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden glass">
          <motion.div 
            className="h-full bg-linear-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            Loading System {Math.round(progress)}%
          </span>
        </div>
      </div>
    </Html>
  );
};

export const ModelViewer = ({ type }: ModelViewerProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [color, setColor] = useState(type === 'character' ? "#d0bcff" : "#00dbe9");
  const controlsRef = useRef<any>(null);

  const rotateModel = (direction: 'left' | 'right') => {
    if (controlsRef.current) {
      const angle = direction === 'left' ? -0.5 : 0.5;
      controlsRef.current.setAzimuthalAngle(controlsRef.current.getAzimuthalAngle() + angle);
      controlsRef.current.update();
    }
  };

  const colors = [
    { name: 'Cyan', hex: '#00dbe9' },
    { name: 'Purple', hex: '#d0bcff' },
    { name: 'Orange', hex: '#ff4e00' },
    { name: 'Green', hex: '#00ff88' },
    { name: 'White', hex: '#ffffff' },
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const ViewerContent = (isFull: boolean) => (
    <>
      <div className={cn(
        "absolute top-6 left-6 z-10 pointer-events-none transition-all duration-500",
        isFull ? "top-10 left-10" : ""
      )}>
        <div className={cn(
          "font-bold text-primary uppercase tracking-widest mb-1 flex items-center gap-2",
          isFull ? "text-lg" : "text-xs"
        )}>
          <Activity size={isFull ? 20 : 14} /> Interactive System View
        </div>
        <div className={cn(
          "text-slate-500 uppercase tracking-widest",
          isFull ? "text-xs" : "text-[10px]"
        )}>
          Drag to rotate • Scroll to zoom • <span className="text-secondary">Click to interact</span>
        </div>
      </div>

      {/* Controls Overlay */}
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => rotateModel('left')}
            className="glass p-2 rounded-full hover:bg-white/10 transition-colors group/btn"
            title="Rotate Left"
            aria-label="Rotate model left"
          >
            <ChevronLeft className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
          </button>
          <button
            onClick={() => rotateModel('right')}
            className="glass p-2 rounded-full hover:bg-white/10 transition-colors group/btn"
            title="Rotate Right"
            aria-label="Rotate model right"
          >
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={cn(
              "glass p-2 rounded-full transition-all group/btn",
              autoRotate ? "bg-primary/20 border-primary/40" : "hover:bg-white/10"
            )}
            title="Toggle Auto-Rotate"
            aria-label="Toggle auto-rotate"
            aria-pressed={autoRotate}
          >
            <RotateCcw className={cn("w-4 h-4 transition-colors", autoRotate ? "text-primary" : "text-slate-400")} />
          </button>
          <button
            onClick={() => setWireframe(!wireframe)}
            className={cn(
              "glass p-2 rounded-full transition-all group/btn",
              wireframe ? "bg-primary/20 border-primary/40" : "hover:bg-white/10"
            )}
            title="Toggle Wireframe"
            aria-label="Toggle wireframe mode"
            aria-pressed={wireframe}
          >
            <Layers className={cn("w-4 h-4 transition-colors", wireframe ? "text-primary" : "text-slate-400")} />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFull)}
            className="glass p-2 rounded-full hover:bg-white/10 transition-colors group/btn"
            title={isFull ? "Exit Fullscreen" : "Enter Fullscreen"}
            aria-label={isFull ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFull ? (
              <X className="w-5 h-5 text-slate-400 group-hover/btn:text-white" />
            ) : (
              <Maximize2 className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
            )}
          </button>
        </div>

        {/* Color Presets */}
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-1.5 p-1.5 glass rounded-full">
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => setColor(c.hex)}
                className={cn(
                  "w-4 h-4 rounded-full transition-transform hover:scale-125",
                  color === c.hex ? "ring-2 ring-white ring-offset-2 ring-offset-bg scale-110" : ""
                )}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={`Set model color to ${c.name}`}
                aria-pressed={color === c.hex}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 50 }}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      >
        <Suspense fallback={<Loader />}>
          <PresentationControls
            global
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Stage environment="city" intensity={0.5}>
              <PlaceholderModel type={type} wireframe={wireframe} color={color} />
            </Stage>
          </PresentationControls>
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Suspense>
        <OrbitControls 
          ref={controlsRef}
          enableZoom={true} 
          autoRotate={autoRotate} 
          autoRotateSpeed={0.5} 
          makeDefault 
          enablePan={false}
        />
      </Canvas>
      
      <div className={cn(
        "absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
        isFull ? "bottom-10 right-10 opacity-100" : ""
      )}>
        <div className="glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border-primary/20">
          Real-time Render Engine
        </div>
      </div>
    </>
  );

  return (
    <>
      <div 
        className={cn(
          "w-full h-full min-h-[400px] glass rounded-3xl overflow-hidden relative group transition-all duration-500",
          isHovering ? "ring-2 ring-primary/30" : ""
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {ViewerContent(false)}
      </div>

      <AnimatePresence>
        {isFullscreen && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="w-full h-full relative group">
              {ViewerContent(true)}
            </div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </>
  );
};
