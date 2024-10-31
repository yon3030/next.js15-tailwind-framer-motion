import React from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
}

const BasicAnimatedElement = ({ 
  children, 
  className = "",
  hoverScale = 1.1
}: AnimatedElementProps) => {
  const controls: AnimationControls = useAnimation();

  const handleMouseEnter = async () => {
    controls.start({
      scale: hoverScale,
      transition: { duration: 0.3 }
    });

    // Spring shake effect
    await controls.start({
      rotate: [0, 3, -2, 1.5, -1, 0.5, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        type: "spring",
        stiffness: 320,
        damping: 14
      }
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.3,
        type: "spring",
        damping: 15
      }
    });
  };

  return (
    <motion.div 
      className={`inline-block ${className}`}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default BasicAnimatedElement;