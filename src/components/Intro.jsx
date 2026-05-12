import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

export default function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 50;

  return (
    <div className="intro">
      <div>
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
            A digital artisan, who likes breaking things apart to build them
            back better—currently tinkering with the interface you’re exploring.
          </p>
        </motion.div>

        <div className="text">
          <p>
            A <span>creative developer</span> merging technical rigor with
            radical design to ship products that feel alive.
          </p>
        </div>
      </div>
      <div className="pic">
        <img src="../../public/aashi.jpg"></img>
      </div>{" "}
      *
    </div>
  );
}
