'use client';
import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  // refs for all the cards
  const cardRefs = useRef([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };

  // return the card component with the mouse move event
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      
      {/* Tech Stack Logos */}
      {card.techStack && (
        <div className="flex flex-wrap gap-3 items-center justify-center bg-black-200/50 rounded-lg p-4 backdrop-blur-sm">
          {card.techStack.map((tech, idx) => (
            <div 
              key={idx}
              className="group relative"
              title={tech.name}
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-125"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.3))',
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default GlowCard;
