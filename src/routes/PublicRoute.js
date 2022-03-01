import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import LandingScreen from "../components/landingPage/LandingScreen";

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </>
  );
};

export default PublicRoute;
