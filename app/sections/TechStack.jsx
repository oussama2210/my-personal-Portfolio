'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6 mt-12 max-w-5xl mx-auto">
          {techStackImgs.map((tech, index) => (
            <div
              key={index}
              className="tech-card card-border overflow-hidden group rounded-xl hover:border-blue-500/50 transition-all duration-300 aspect-square"
            >
              <div className="tech-card-animated-bg" />
              <div className="relative h-full flex flex-col items-center justify-center p-4 gap-2">
                <div className="flex items-center justify-center">
                  <img 
                    src={tech.imgPath} 
                    alt={tech.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))',
                    }}
                  />
                </div>
                <p className="text-center text-xs md:text-sm text-white-50 group-hover:text-white transition-colors">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
