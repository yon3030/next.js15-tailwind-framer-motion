import React from "react";
import { animated, useTrail } from "@react-spring/web";

const LetterSequenceAnimation = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  
  const trail = useTrail(letters.length, {
    from: { 
      y: 0,
      opacity: 1,
      transform: "scale(1)",
    },
    config: {
      mass: 1,
      tension: 400,
      friction: 15,
    },
  });

  const handleMouseEnter = () => {
    const animateSequence = async () => {
      // Animate up
      for (let i = 0; i < letters.length; i++) {
        trail[i].y.start(-20);
        trail[i].transform.start("scale(1.2)");
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      for (let i = 0; i < letters.length; i++) {
        trail[i].y.start(0);
        trail[i].transform.start("scale(1)");
        await new Promise(resolve => setTimeout(resolve, 40)); // Reduced from 80ms to 40ms
      }
    };

    animateSequence();
  };

  return (
    <h1 
      className="text-3xl md:text-4xl lg:text-6xl flex cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      {trail.map((style, index) => (
        <animated.span
          key={index}
          style={{
            display: 'inline-block',
            y: style.y,
            opacity: style.opacity,
            transform: style.transform,
          }}
        >
          {letters[index]}
        </animated.span>
      ))}
    </h1>
  );
};

export default LetterSequenceAnimation; 