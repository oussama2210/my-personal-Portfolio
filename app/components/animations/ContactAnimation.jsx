'use client';
import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ContactAnimation = () => {
  const containerRef = useRef(null);
  const screenRef = useRef(null);
  const keysRef = useRef([]);
  const [emailIcons, setEmailIcons] = useState([]);

  useEffect(() => {
    setEmailIcons(
      [...Array(8)].map(() => ({
        left: Math.random() * 80 + 10,
        top: Math.random() * 80 + 10,
      }))
    );
  }, []);

  useGSAP(() => {
    // Animate computer screen glow
    gsap.to(screenRef.current, {
      boxShadow: '0 0 80px rgba(59, 130, 246, 0.6)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Animate keyboard keys press effect
    keysRef.current.forEach((key, index) => {
      if (key) {
        gsap.to(key, {
          y: 2,
          scale: 0.95,
          duration: 0.1,
          repeat: -1,
          repeatDelay: Math.random() * 3 + 1,
          yoyo: true,
          ease: 'power2.inOut',
          delay: Math.random() * 2,
        });
      }
    });

    // Floating email icons animation
    const emailIconElements = containerRef.current?.querySelectorAll('.email-icon');
    if (emailIconElements) {
      emailIconElements.forEach((icon, index) => {
        gsap.to(icon, {
          y: -20,
          x: Math.sin(index) * 10,
          rotation: Math.random() * 10 - 5,
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3,
        });
      });
    }

    // Code text typing animation
    const codeLines = containerRef.current?.querySelectorAll('.screen-text');
    if (codeLines) {
      gsap.from(codeLines, {
        opacity: 0,
        x: -10,
        duration: 0.5,
        stagger: 0.3,
        repeat: -1,
        repeatDelay: 4,
        ease: 'power2.out',
      });
    }

  }, [emailIcons]);

  const keyboardKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y'],
    ['A', 'S', 'D', 'F', 'G', 'H'],
    ['Z', 'X', 'C', 'V', 'B', 'N'],
  ];

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-black">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating email icons */}
      {emailIcons.map((icon, i) => (
        <div
          key={`email-${i}`}
          className="email-icon absolute text-4xl opacity-20"
          style={{
            left: `${icon.left}%`,
            top: `${icon.top}%`,
          }}
        >
          ✉️
        </div>
      ))}

      {/* Computer illustration */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Monitor */}
        <div className="relative">
          {/* Monitor stand */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg"></div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gray-800 rounded-full"></div>

          {/* Monitor frame */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-2xl border-4 border-gray-700">
            {/* Screen */}
            <div
              ref={screenRef}
              className="w-96 h-64 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden relative"
              style={{
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
              }}
            >
              {/* Screen content */}
              <div className="absolute inset-0 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="space-y-2 text-green-400">
                  <div className="screen-text">$ send_message()</div>
                  <div className="screen-text pl-4">{'>'} Connecting...</div>
                  <div className="screen-text pl-4">{'>'} Ready to receive!</div>
                  <div className="screen-text flex items-center gap-2">
                    <span>💬</span>
                    <span>Let's talk!</span>
                  </div>
                </div>

                {/* Blinking cursor */}
                <div className="inline-block w-2 h-4 bg-green-400 animate-pulse mt-2"></div>
              </div>

              {/* Screen glare effect */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
            </div>

            {/* Webcam */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 rounded-full border-2 border-gray-600">
              <div className="w-1 h-1 bg-green-500 rounded-full m-auto mt-0.5 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Keyboard */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border-2 border-gray-700"
          style={{ perspective: '1000px' }}>
          <div className="space-y-2" style={{ transform: 'rotateX(15deg)' }}>
            {keyboardKeys.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2 justify-center">
                {row.map((key, keyIndex) => (
                  <div
                    key={keyIndex}
                    ref={(el) => {
                      const index = rowIndex * 6 + keyIndex;
                      keysRef.current[index] = el;
                    }}
                    className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white text-sm font-semibold shadow-lg border border-gray-600"
                  >
                    {key}
                  </div>
                ))}
              </div>
            ))}
            {/* Space bar */}
            <div className="flex justify-center mt-2">
              <div
                ref={(el) => keysRef.current[18] = el}
                className="w-48 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg border border-gray-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated message bubbles */}
      <div className="absolute bottom-10 right-10 space-y-2">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-none shadow-lg animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '2s' }}>
          👋 Hi there!
        </div>
        <div className="bg-purple-500 text-white px-4 py-2 rounded-2xl rounded-br-none shadow-lg animate-bounce"
          style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
          📧 Get in touch
        </div>
      </div>
    </div>
  );
};

export default ContactAnimation;
