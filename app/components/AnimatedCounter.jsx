'use client';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    // Animate cards entrance
    gsap.from(".counter-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#counter",
        start: "top 80%",
      },
    });

    // Animate numbers
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top 70%",
        },
        onUpdate: function() {
          numberElement.textContent = `${Math.ceil(this.targets()[0].innerText)}${item.suffix}`;
        },
      });
    });

    // Animate icons
    gsap.from(".counter-icon", {
      scale: 0,
      rotation: -180,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#counter",
        start: "top 75%",
      },
    });
  }, []);

  const icons = ["📊", "👥", "🚀", "💯"];
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-blue-600 to-blue-800",
    "from-cyan-500 to-blue-600",
    "from-blue-700 to-blue-950"
  ];

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-16">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="counter-card group relative"
          >
            {/* Gradient border effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
            
            {/* Card content */}
            <div className="relative bg-black-100 border border-blue-500/20 rounded-2xl p-6 md:p-8 xl:p-10 flex flex-col items-center justify-center hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm overflow-hidden min-h-[180px] md:min-h-[200px]">
              {/* Background gradient orb */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradients[index]} rounded-full opacity-10 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="counter-icon text-4xl md:text-5xl xl:text-6xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              
              {/* Number */}
              <div className="counter-number text-white text-4xl md:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
                0{item.suffix}
              </div>
              
              {/* Label */}
              <div className="text-white-50 text-xs md:text-sm xl:text-base text-center font-medium group-hover:text-white transition-colors duration-300">
                {item.label}
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
