import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { animatedTexts } from "../Texts/appText";

const SpringTextChanger = () => {
  const [index, setIndex] = useState(0);
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    reset: true,
    config: { tension: 200, friction: 12 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <animated.div style={props} className="text-8xl text-orange-500 font-bold tracking-wide w-full text-center mt-8">
      {animatedTexts[index]}
    </animated.div>
  );
};

export default SpringTextChanger;
