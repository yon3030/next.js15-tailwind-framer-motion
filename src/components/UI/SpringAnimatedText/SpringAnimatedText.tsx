import React from "react";
import { useSpring, animated } from "@react-spring/web";

const SpringAnimatedText = ({ text }: { text: string }) => {
  const [props, set] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 10 },
  }));

  return (
    <animated.h1
      className="text-3xl md:text-4xl lg:text-6xl"
      onMouseEnter={() => set({ transform: "scale(1.2)" })}
      onMouseLeave={() => set({ transform: "scale(1)" })}
      style={props}
    >
      {text}
    </animated.h1>
  );
};

export default SpringAnimatedText;
