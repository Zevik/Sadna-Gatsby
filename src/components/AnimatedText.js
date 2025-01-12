import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

const AnimatedText = ({ text }) => {
  const characters = Array.from(text);

  return (
    <p className="animated-text">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: i * 0.05,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimatedText;