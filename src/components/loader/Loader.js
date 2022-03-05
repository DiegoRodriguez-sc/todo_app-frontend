import React from "react";
import { motion } from "framer-motion";

const Loader = (props) => {
  const animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: [-8, 8],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <motion.div variants={animation} initial="initial" animate="animate">
      {props.text}
    </motion.div>
  );
};

export default Loader;
