import React from "react";
import { motion } from "framer-motion";

export default function FloatingShape({ color, size, top, left, delay }) {
  return (
    <div>
      <motion.div
        className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl ${top} ${left}`}
        style={{ top, left }}
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["0%", "100%", "0%"],
          rotate: [0, 360],
        }}
        transition={{
          delay,
          duration: 20,
          ease: "linear",
          repeat: "infinity"
        }}
        aria-hidden="true"
      >
        FloatingShape
      </motion.div>
    </div>
  );
}
