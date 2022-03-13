import React from "react";
import { motion } from "framer-motion";
import Landing from "../components/landingPage/Landing";

const LandingScreen = () => {
  return (
    <motion.section
      className="min-h-screen min-w-screen bg-[#fffffe] dark:bg-[#22242C] text-[#0d0d0d] dark:text-[#F0F1F7]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Landing />
    </motion.section>
  );
};

export default LandingScreen;
