'use client';
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense } from "react";
import * as THREE from "three";
import WebGLWrapper from "../../WebGLWrapper";
import CanvasErrorBoundary from "../../CanvasErrorBoundary";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  return <primitive object={scene.scene} />;
};

const TechIconCardExperience = ({ model }) => {
  const fallbackUI = (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="text-center space-y-2">
        <div className="text-5xl">⚙️</div>
        <p className="text-white-50 text-xs">3D model unavailable</p>
      </div>
    </div>
  );

  return (
    <CanvasErrorBoundary fallback={fallbackUI}>
      <WebGLWrapper fallback={fallbackUI}>
        <Canvas
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
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
          />
          <Environment preset="city" />

          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
              <Suspense fallback={null}>
                <TechIcon model={model} />
              </Suspense>
            </group>
          </Float>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </WebGLWrapper>
    </CanvasErrorBoundary>
  );
};

export default TechIconCardExperience;
