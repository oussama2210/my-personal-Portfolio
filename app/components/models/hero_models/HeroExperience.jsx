'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import WebGLWrapper from "../../WebGLWrapper";
import CanvasErrorBoundary from "../../CanvasErrorBoundary";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const fallbackUI = (
    <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-black-100 to-black-200">
      <div className="text-center space-y-6 max-w-lg">
        <div className="relative">
          <div className="text-8xl mb-4 animate-bounce">🚀</div>
        </div>
        <h3 className="text-3xl font-bold text-white">Interactive 3D Experience</h3>
        <p className="text-white-50 text-lg leading-relaxed">
          This section features an interactive 3D workspace, but your current graphics setup doesn't support WebGL.
        </p>
        <div className="pt-4 space-y-2 text-sm text-white-50">
          <p>💡 Try:</p>
          <ul className="list-disc list-inside space-y-1 text-left max-w-md mx-auto">
            <li>Updating your graphics drivers</li>
            <li>Using a different browser (Chrome, Firefox, or Edge)</li>
            <li>Enabling hardware acceleration in browser settings</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <CanvasErrorBoundary fallback={fallbackUI}>
      <WebGLWrapper fallback={fallbackUI}>
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 45 }}
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
            state.gl.setClearColor('#000000', 0);
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.2} color="#1a1a40" />
          <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />

          <Suspense fallback={null}>
            <HeroLights />
            <Particles count={isMobile ? 50 : 100} />
            <group
              scale={isMobile ? 0.7 : 1}
              position={[0, -3.5, 0]}
              rotation={[0, -Math.PI / 4, 0]}
            >
              <Room />
            </group>
          </Suspense>
        </Canvas>
      </WebGLWrapper>
    </CanvasErrorBoundary>
  );
};

export default HeroExperience;
