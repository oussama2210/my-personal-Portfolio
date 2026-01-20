'use client';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroAnimation = () => {
  const containerRef = useRef(null);
  const spheresRef = useRef([]);
  const codeRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        left: Math.random() * 100,
      }))
    );
  }, []);

  useGSAP(() => {
    // Animate floating spheres with 3D-like parallax effect
    spheresRef.current.forEach((sphere, index) => {
      if (sphere) {
        gsap.to(sphere, {
          y: `${20 + index * 10}`,
          x: `${Math.sin(index) * 20}`,
          rotation: 360,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });

        // Add subtle scale animation for depth
        gsap.to(sphere, {
          scale: 1.1,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });

    // Animate code lines with typing effect


    // Particle effect animation
    const particleElements = containerRef.current?.querySelectorAll('.particle');
    if (particleElements) {
      particleElements.forEach((particle, index) => {
        gsap.to(particle, {
          y: '-100%',
          opacity: 0,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          delay: Math.random() * 2,
          ease: 'none',
        });
      });
    }

    // Animated gradient background
    gsap.to('.gradient-orb', {
      scale: 1.2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

  }, [particles]); // Depend on particles so GSAP runs after they render

  const sphereColors = [
    'from-blue-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-pink-500 to-red-600',
    'from-cyan-500 to-blue-600',
    'from-green-500 to-cyan-600',
  ];

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="gradient-orb absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="gradient-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
          style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={`particle-${i}`}
          className="particle absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={{
            left: `${p.left}%`,
            bottom: '0',
          }}
        />
      ))}

      {/* Floating 3D-like spheres */}
      <div className="relative w-full h-full flex items-center justify-center">
        {sphereColors.map((color, index) => (
          <div
            key={index}
            ref={(el) => (spheresRef.current[index] = el)}
            className={`absolute w-20 h-20 rounded-full bg-gradient-to-br ${color} opacity-70 blur-sm`}
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + Math.sin(index) * 20}%`,
              transform: `translateZ(${index * 20}px)`,
            }}
          />
        ))}

        {/* Central animated code window */}
        <div
          ref={codeRef}
          className="relative z-10 bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl"
          style={{
            boxShadow: '0 0 60px rgba(168, 85, 247, 0.3)',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="font-mono text-sm space-y-2">
            <div className="code-line text-cyan-400">
              <span className="text-purple-400">const</span> developer = {'{'}
            </div>
            <div className="code-line text-green-400 pl-4">
              name: <span className="text-yellow-400">'Oussama'</span>,
            </div>
            <div className="code-line text-green-400 pl-4">
              passion: <span className="text-yellow-400">'Code'</span>,
            </div>
            <div className="code-line text-green-400 pl-4">
              skills: <span className="text-yellow-400">['React', 'Next.js', 'SQL', 'Node.js', 'Tailwind', 'GOLANG']</span>
            </div>
            <div className="code-line text-cyan-400">
              {'}'};
            </div>
          </div>

          {/* Animated cursor */}
          <div className="inline-block w-2 h-5 bg-white animate-pulse mt-2"></div>
        </div>

        {/* Rotating rings for depth effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 border-2 border-purple-500/20 rounded-full animate-spin-slow"
            style={{ animationDuration: '25s' }}></div>
          <div className="absolute w-80 h-80 border-2 border-blue-500/20 rounded-full animate-spin-slow"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute w-64 h-64 border-2 border-pink-500/20 rounded-full animate-spin-slow"
            style={{ animationDuration: '25s' }}></div>
        </div>
      </div>

      {/* Grid overlay for depth */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          perspective: '1000px',
          transform: 'rotateX(60deg) scale(2)',
          transformOrigin: 'center bottom',
        }}>
      </div>
    </div>
  );
};

export default HeroAnimation;
