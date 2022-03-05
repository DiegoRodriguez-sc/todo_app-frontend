import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/navBar/NavBar";
import LandingScreen from "../components/landingPage/LandingScreen";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import Dashboard from "../components/dashboard/Dashboard";
import ProtectPrivate from "./ProtectPrivate";
import ConfigUser from "../components/configUser/ConfigUser";
import ProtectAuth from "./ProtectAuth";
import { useDispatch } from "react-redux";
import { startRevalidation } from "../redux/reducers/authReducer";

const AppRouter = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(startRevalidation());

    
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          {/* public */}
          <Route path="/" element={<ProtectAuth> <LandingScreen /> </ProtectAuth>} />
          <Route path="/login" element={<ProtectAuth> <LoginScreen /> </ProtectAuth> } />
          <Route path="/register" element={<ProtectAuth> <RegisterScreen /> </ProtectAuth>} />
          {/* private */}
          <Route path="/dashboard" element={ <ProtectPrivate> <Dashboard /> </ProtectPrivate>} />
          <Route path="/dashboard/:id" element={ <ProtectPrivate> <ConfigUser /> </ProtectPrivate>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppRouter;
