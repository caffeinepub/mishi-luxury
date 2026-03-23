import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const MOHIT_ZARI_Y = [-0.55, -0.2, 0.15, 0.5] as const;
const SHIVANI_TRIM_Y = [-0.62, -0.3, 0.02, 0.38] as const;

// ─── Mohit Figure (left) ────────────────────────────────────────────────────
function MohitFigure({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    timeRef.current += delta * (hovered ? 1.8 : 0.55);
    const angle = Math.sin(timeRef.current) * (Math.PI / 12);
    groupRef.current.rotation.y = angle;
    const targetScale = hovered ? 1.05 : 1.0;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08,
    );
  });

  return (
    <group ref={groupRef} position={[-0.9, 0, 0]}>
      {/* Kurta body — navy-teal */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.28, 0.32, 1.6, 16]} />
        <meshStandardMaterial
          color="#0f3d4a"
          roughness={0.4}
          metalness={0.15}
        />
      </mesh>

      {/* Gold Zari bands */}
      {MOHIT_ZARI_Y.map((y) => (
        <mesh key={`mohit-zari-${y}`} position={[0, y, 0]}>
          <torusGeometry args={[0.295, 0.018, 8, 32]} />
          <meshStandardMaterial
            color="#d4af37"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Ivory shawl draped over left shoulder */}
      <mesh position={[-0.22, 0.42, 0.1]} rotation={[0.3, -0.4, 0.6]}>
        <boxGeometry args={[0.55, 0.08, 0.4]} />
        <meshStandardMaterial
          color="#f5f0e8"
          roughness={0.7}
          metalness={0.02}
        />
      </mesh>
      {/* Shawl tail hanging down */}
      <mesh position={[-0.38, -0.05, 0.05]} rotation={[0.1, -0.3, 0.25]}>
        <boxGeometry args={[0.12, 0.7, 0.3]} />
        <meshStandardMaterial
          color="#f5f0e8"
          roughness={0.7}
          metalness={0.02}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.0, 0]}>
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshStandardMaterial color="#c8956c" roughness={0.6} />
      </mesh>
      {/* Hair */}
      <mesh position={[0, 1.14, 0]}>
        <sphereGeometry
          args={[0.235, 20, 20, 0, Math.PI * 2, 0, Math.PI / 2]}
        />
        <meshStandardMaterial color="#1a0a00" roughness={0.9} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.22, 12]} />
        <meshStandardMaterial color="#c8956c" roughness={0.6} />
      </mesh>

      {/* Trishul pendant — gold cone pointing down at chest */}
      <mesh position={[0, 0.56, 0.14]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.045, 0.14, 8]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>
      {/* Pendant chain */}
      <mesh position={[0, 0.64, 0.12]} rotation={[Math.PI / 6, 0, 0]}>
        <torusGeometry args={[0.06, 0.008, 6, 20]} />
        <meshStandardMaterial color="#d4af37" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Left arm */}
      <mesh position={[-0.44, 0.0, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.09, 0.09, 0.75, 10]} />
        <meshStandardMaterial color="#0f3d4a" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Left wrist — luxury watch (gold torus) */}
      <mesh position={[-0.5, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.03, 8, 24]} />
        <meshStandardMaterial color="#c8a72a" roughness={0.1} metalness={1.0} />
      </mesh>
      {/* Watch face */}
      <mesh position={[-0.5, -0.4, 0.06]}>
        <cylinderGeometry args={[0.075, 0.075, 0.025, 16]} />
        <meshStandardMaterial color="#1a3a40" roughness={0.2} metalness={0.6} />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.44, 0.0, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.09, 0.09, 0.75, 10]} />
        <meshStandardMaterial color="#0f3d4a" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Right wrist — kalava (red-orange torus) */}
      <mesh position={[0.5, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.025, 8, 24]} />
        <meshStandardMaterial color="#cc3300" roughness={0.7} metalness={0.0} />
      </mesh>
      {/* Second kalava thread */}
      <mesh position={[0.5, -0.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.015, 8, 24]} />
        <meshStandardMaterial color="#ffaa00" roughness={0.7} metalness={0.0} />
      </mesh>
    </group>
  );
}

// ─── Shivani Figure (right) ──────────────────────────────────────────────────
function ShivaniFigure({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0.9);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    timeRef.current += delta * (hovered ? 1.8 : 0.55);
    const angle = Math.sin(timeRef.current) * (Math.PI / 12);
    groupRef.current.rotation.y = angle;
    const targetScale = hovered ? 1.05 : 1.0;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08,
    );
  });

  return (
    <group ref={groupRef} position={[0.9, 0, 0]}>
      {/* Saree body — teal base */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.27, 0.35, 1.55, 16]} />
        <meshStandardMaterial
          color="#006b5f"
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>
      {/* Gold saree trim bands */}
      {SHIVANI_TRIM_Y.map((y) => (
        <mesh key={`shivani-trim-${y}`} position={[0, y, 0]}>
          <torusGeometry args={[0.305, 0.02, 8, 32]} />
          <meshStandardMaterial
            color="#d4af37"
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>
      ))}
      {/* Saree pallu drape over right shoulder */}
      <mesh position={[0.25, 0.38, 0.1]} rotation={[0.25, 0.4, -0.55]}>
        <boxGeometry args={[0.52, 0.07, 0.38]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.4}
          metalness={0.3}
          opacity={0.9}
          transparent
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.0, 0]}>
        <sphereGeometry args={[0.21, 20, 20]} />
        <meshStandardMaterial color="#c8956c" roughness={0.6} />
      </mesh>
      {/* Hair bun */}
      <mesh position={[0, 1.22, -0.06]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#0d0500" roughness={0.9} />
      </mesh>
      {/* Maang Tikka gem */}
      <mesh position={[0, 1.25, 0.18]}>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.1}
          metalness={1.0}
          emissive="#c8960a"
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* Maang Tikka chain line */}
      <mesh position={[0, 1.18, 0.14]} rotation={[0.4, 0, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.18, 6]} />
        <meshStandardMaterial color="#d4af37" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.095, 0.11, 0.22, 12]} />
        <meshStandardMaterial color="#c8956c" roughness={0.6} />
      </mesh>

      {/* Layered necklaces */}
      <mesh position={[0, 0.62, 0.08]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.13, 0.016, 8, 28]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.12}
          metalness={0.9}
        />
      </mesh>
      <mesh position={[0, 0.55, 0.1]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.145, 0.014, 8, 28]} />
        <meshStandardMaterial
          color="#e8c84a"
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
      <mesh position={[0, 0.48, 0.12]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.155, 0.012, 8, 28]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.18}
          metalness={0.8}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.42, 0.02, 0]} rotation={[0, 0, 0.18]}>
        <cylinderGeometry args={[0.08, 0.08, 0.72, 10]} />
        <meshStandardMaterial color="#c8956c" roughness={0.6} />
      </mesh>
      <mesh position={[0.42, 0.02, 0]} rotation={[0, 0, -0.18]}>
        <cylinderGeometry args={[0.08, 0.08, 0.72, 10]} />
        <meshStandardMaterial color="#c8956c" roughness={0.6} />
      </mesh>

      {/* Jhumka earring left — stud + drop */}
      <mesh position={[-0.2, 0.87, 0.05]}>
        <sphereGeometry args={[0.04, 10, 10]} />
        <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={1.0} />
      </mesh>
      <mesh position={[-0.2, 0.82, 0.05]}>
        <coneGeometry args={[0.035, 0.09, 10]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.12}
          metalness={0.95}
        />
      </mesh>

      {/* Jhumka earring right — stud + drop */}
      <mesh position={[0.2, 0.87, 0.05]}>
        <sphereGeometry args={[0.04, 10, 10]} />
        <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={1.0} />
      </mesh>
      <mesh position={[0.2, 0.82, 0.05]}>
        <coneGeometry args={[0.035, 0.09, 10]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.12}
          metalness={0.95}
        />
      </mesh>
    </group>
  );
}

// ─── Scene ───────────────────────────────────────────────────────────────────
function Scene({ hovered }: { hovered: boolean }) {
  return (
    <>
      <ambientLight color="#ffffff" intensity={0.7} />
      <directionalLight
        position={[2, 4, 3]}
        intensity={1.2}
        color="#fff8e8"
        castShadow
      />
      <pointLight position={[-2, 1, 2]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[2, 0, -1]} intensity={0.4} color="#c4b5fd" />
      <MohitFigure hovered={hovered} />
      <ShivaniFigure hovered={hovered} />
    </>
  );
}

// ─── Main exported component ─────────────────────────────────────────────────
interface FounderModel3DProps {
  onInteract: () => void;
}

export default function FounderModel3D({ onInteract }: FounderModel3DProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      style={{
        width: 320,
        height: 420,
        cursor: hovered ? "pointer" : "default",
        position: "relative",
        background: "none",
        border: "none",
        padding: 0,
        display: "block",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onInteract}
      aria-label="Interactive 3D Founders — click to meet Mohit & Shivani"
    >
      <Canvas
        gl={{ alpha: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
        camera={{ position: [0, 0.5, 3.8], fov: 40 }}
      >
        <Scene hovered={hovered} />
      </Canvas>

      {/* Hover hint */}
      <p
        style={{
          position: "absolute",
          bottom: 4,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.6rem",
          color: "rgba(196,181,253,0.5)",
          letterSpacing: "0.1em",
          textAlign: "center",
          pointerEvents: "none",
          fontFamily: "Inter, sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        Hover or tap to meet us
      </p>
    </button>
  );
}
