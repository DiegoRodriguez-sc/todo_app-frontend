import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.2 } },
  exit: { opacity: 0, x: -100 },
};

const AnimatePage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: .5 }}
      className="bg-[#fffffe] dark:bg-[#22242C] text-[#0d0d0d] dark:text-[#F0F1F7]"
    >
      {children}
    </motion.div>
  );
};

export default AnimatePage;
