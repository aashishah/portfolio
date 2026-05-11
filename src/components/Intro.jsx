import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

export default function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 50;

  return (
    <div className="intro">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 1.35}px ${y - size / 1.35}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A creative tinkerer who likes creating cool stuff like this website
          you're interacting with!
        </p>
      </motion.div>

      <div className="text">
        <p>
          A <span>creative developer</span> producing high quality & impactful
          digital experiences.
        </p>
      </div>
    </div>
  );
}
