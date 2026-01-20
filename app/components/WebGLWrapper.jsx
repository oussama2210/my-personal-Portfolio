'use client';
import { useState, useEffect } from 'react';

const WebGLWrapper = ({ children, fallback }) => {
  const [status, setStatus] = useState('checking'); // 'checking' | 'supported' | 'unsupported'

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        
        // Try to get WebGL context with minimal requirements
        const contextOptions = {
          failIfMajorPerformanceCaveat: false,
          powerPreference: 'default',
          antialias: false,
          alpha: false,
          depth: false,
          stencil: false,
          premultipliedAlpha: false,
          preserveDrawingBuffer: false
        };
        
        // Try WebGL2 first, then WebGL1, then experimental
        let gl = canvas.getContext('webgl2', contextOptions);
        if (!gl) {
          gl = canvas.getContext('webgl', contextOptions);
        }
        if (!gl) {
          gl = canvas.getContext('experimental-webgl', contextOptions);
        }
        
        // Verify we got a valid context
        if (!gl) {
          console.warn('WebGL context creation failed');
          setStatus('unsupported');
          return;
        }

        // Additional validation - try to create a shader program
        try {
          const vertexShader = gl.createShader(gl.VERTEX_SHADER);
          const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
          
          if (!vertexShader || !fragmentShader) {
            console.warn('WebGL shader creation failed');
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            setStatus('unsupported');
            return;
          }
          
          // Clean up test shaders
          gl.deleteShader(vertexShader);
          gl.deleteShader(fragmentShader);
          
          // WebGL is supported and working
          setStatus('supported');
        } catch (shaderError) {
          console.warn('WebGL shader test failed:', shaderError);
          setStatus('unsupported');
        }
        
      } catch (e) {
        console.warn('WebGL check failed:', e);
        setStatus('unsupported');
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(checkWebGL, 100);
    return () => clearTimeout(timer);
  }, []);

  // Loading state
  if (status === 'checking') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <div className="text-white-50 text-sm animate-pulse">Loading 3D...</div>
      </div>
    );
  }

  // WebGL not supported - show fallback
  if (status === 'unsupported') {
    return fallback || (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">🎨</div>
          <h3 className="text-xl font-bold text-white">3D Content Unavailable</h3>
          <p className="text-white-50 text-sm max-w-md">
            Your device doesn't support WebGL graphics.
          </p>
        </div>
      </div>
    );
  }

  // WebGL is supported - render the 3D content
  return children;
};

export default WebGLWrapper;
