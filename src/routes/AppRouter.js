import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { startRevalidation } from "../redux/reducers/authReducer";
import { getTodoUserThunk, setTask } from "../redux/reducers/todoReducer";
import NavBar from "../components/navBar/NavBar";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import Dashboard from "../components/dashboard/Dashboard";
import ProtectPrivate from "./ProtectPrivate";
import ConfigUser from "../components/configUser/ConfigUser";
import ProtectAuth from "./ProtectAuth";
import LoadingScreen from "../components/loader/LoadingScreen";
import Footer from "../components/footer/Footer";
import LandingScreen from "../pages/LandingScreen";

const AppRouter = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {loading, user} = useSelector( state => state.auth );
  const {todos} = useSelector( state => state.todo );
  

  useEffect(() => {
    dispatch(startRevalidation());
  }, [dispatch]);
  
  useEffect(() => {
    if(user.uid){
      dispatch(getTodoUserThunk(user.uid));
    }
  }, [dispatch,user]);

  useEffect(() => {
    if(todos.length > 0){
      dispatch(setTask(todos));
    }
  }, [dispatch, todos]);

  if(loading){
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[#fffffe] dark:bg-[#22242C]">
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
      <Footer />
    </div>
  );
};

export default AppRouter;
