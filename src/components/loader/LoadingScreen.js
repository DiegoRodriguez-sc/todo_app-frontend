import React from "react";
import { motion } from "framer-motion";
import "../../styles/loading.css";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: "spring", delay: 0.2 } },
  exit: { opacity: 0 },
};

const LoadingScreen = () => {
  return (
      <motion.div
       variants={animations}
       initial="initial"
       animate="animate"
       exit="exit"
       className="loader__bg">
        <div className="loader--book">
          <div className="loader--paper"></div>
        </div>
      </motion.div>
  );
};

export default LoadingScreen;
