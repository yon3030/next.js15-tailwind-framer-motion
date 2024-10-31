import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { animatedTexts } from "../Texts/appText";

const LargerAnimatedText = () => {
   const [index, setIndex] = useState(0);
   const props = useSpring({
      from: {opacity: 0, transform: 'scale(0.5)'},
      to: {opacity: 1, transform: 'scale(1)'},
      reset: true,
      config: {tension: 200, friction: 12},
   });
   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
      }, 2000);
      return () => clearInterval(interval);
   }, []);
   return (
      <div>
         <animated.div 
            style={props} 
            className="overflow-hidden text-4xl md:text-6xl lg:text-8xl text-orange-500 font-bold font-dinoko tracking-wide w-full text-center p-2 md:p-4"
         >
            {animatedTexts[index]}
         </animated.div>
      </div>
   );
};

export default LargerAnimatedText;