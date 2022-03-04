import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/navBar/NavBar";
import LandingScreen from "../components/landingPage/LandingScreen";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AppRouter = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppRouter;
