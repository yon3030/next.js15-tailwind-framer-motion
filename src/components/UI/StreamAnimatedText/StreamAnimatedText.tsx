import React, { useRef, useCallback, useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";

const StreamAnimatedText = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  const middleIndex = Math.floor(letters.length / 2);
  const isAnimatingRef = useRef(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout[]>([]);
  
  const trail = useTrail(letters.length, {
    from: { 
      y: 0,
      opacity: 1,
      transform: "scale(1)",
    },
    config: {
      mass: 1,        // Increased mass for more stability
      tension: 320,   // Increased tension for less wobble
      friction: 14,   // Increased friction for less springiness
      velocity: 0,    // Removed initial velocity
      clamp: true,    // Prevent overshooting
    },
  });

  const cleanupTimeouts = useCallback(() => {
    animationTimeoutRef.current.forEach(clearTimeout);
    animationTimeoutRef.current = [];
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isAnimatingRef.current) {
      cleanupTimeouts();
    }
    isAnimatingRef.current = true;
    const timeouts: NodeJS.Timeout[] = [];

    const orderedIndices = Array.from({ length: letters.length }, (_, i) => {
      const distance = Math.abs(i - middleIndex);
      const side = i < middleIndex ? -1 : 1;
      return { index: i, order: distance * side };
    }).sort((a, b) => Math.abs(a.order) - Math.abs(b.order));

    orderedIndices.forEach(({ index }, i) => {
      timeouts.push(
        setTimeout(() => {
          if (!isAnimatingRef.current) return;
          trail[index].y.start(-12, {  // Reduced vertical movement
            config: {
              mass: 1,
              tension: 320,
              friction: 14,
            }
          });
          trail[index].transform.start("scale(1.08)", {  // Reduced scale effect
            config: {
              mass: 1,
              tension: 320,
              friction: 14,
            }
          });
        }, i * 35)  // Slightly faster sequence
      );
    });

    const secondWaveDelay = letters.length * 35 + 50;  // Reduced delay
    orderedIndices.forEach(({ index }, i) => {
      timeouts.push(
        setTimeout(() => {
          if (!isAnimatingRef.current) return;
          trail[index].y.start(0);
          trail[index].transform.start("scale(1)");
        }, secondWaveDelay + i * 25)  // Faster return animation
      );
    });

    animationTimeoutRef.current = timeouts;
  }, [letters.length, trail, cleanupTimeouts]);

  useEffect(() => {
    return () => cleanupTimeouts();
  }, [cleanupTimeouts]);

  const handleMouseLeave = useCallback(() => {
    isAnimatingRef.current = false;
    cleanupTimeouts();
    
    trail.forEach(spring => {
      spring.y.start(0);
      spring.transform.start("scale(1)");
    });
  }, [trail, cleanupTimeouts]);

  return (
    <h1 
      className="text-3xl md:text-4xl lg:text-6xl flex cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trail.map((style, index) => (
        <animated.span
          key={index}
          style={{
            display: 'inline-block',
            y: style.y,
            transform: style.transform,
          }}
        >
          {letters[index]}
        </animated.span>
      ))}
    </h1>
  );
};

export default StreamAnimatedText;