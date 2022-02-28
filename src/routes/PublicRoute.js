import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingScreen from "../components/landingPage/LandingScreen";

const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
      </Routes>
    </>
  );
};

export default PublicRoute;
