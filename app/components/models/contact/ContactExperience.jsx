'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WebGLWrapper from "../../WebGLWrapper";
import CanvasErrorBoundary from "../../CanvasErrorBoundary";

import Computer from "./Computer";

const ContactExperience = () => {
  const fallbackUI = (
    <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-black-100 to-black-200 rounded-lg">
      <div className="text-center space-y-4">
        <div className="text-7xl animate-pulse">💻</div>
        <h3 className="text-xl font-bold text-white">3D Computer Model</h3>
        <p className="text-white-50 text-sm max-w-xs">
          WebGL is not supported on your device. The 3D computer visualization cannot be displayed.
        </p>
      </div>
    </div>
  );

  return (
    <CanvasErrorBoundary fallback={fallbackUI}>
      <WebGLWrapper fallback={fallbackUI}>
        <Canvas 
          shadows 
          camera={{ position: [0, 3, 7], fov: 45 }}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "default",
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false
          }}
          onCreated={(state) => {
            // Verify context was created successfully
            if (!state.gl || !state.gl.getContext()) {
              throw new Error('WebGL context creation failed');
            }
          }}
        >
          <ambientLight intensity={0.5} color="#fff4e6" />

          <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

          <directionalLight
            position={[5, 9, 1]}
            castShadow
            intensity={2.5}
            color="#ffd9b3"
          />

          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />

          <group scale={[1, 1, 1]}>
            <mesh
              receiveShadow
              position={[0, -1.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#a46b2d" />
            </mesh>
          </group>

          <group scale={0.03} position={[0, -1.49, -2]} castShadow>
            <Computer />
          </group>
        </Canvas>
      </WebGLWrapper>
    </CanvasErrorBoundary>
  );
};

export default ContactExperience;
