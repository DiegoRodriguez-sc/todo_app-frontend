import React from "react";
import { useNavigate } from "react-router-dom";
import Example from "./Example";

const LandingScreen = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <>
    
    <section className="min-h-screen min-w-screen text-[#0d0d0d] bg-[#fffffe]">
      
        <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl min-w-full mx-auto  font-extrabold md:text-4xl lg:text-5xl">
                  <span className="block whitespace-nowrap">Mantente Organizado</span>
                  <span className="block">Mantente Creativo</span>
                </h1>
                <p className="mt-6 text-gray-800">
                  Captura tus ideas y haz algo creativo todos los días
                </p>
                <button
                    onClick={handleRegister}
                    className="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-[#0d0d0d] uppercase bg-[#ff8e3c] rounded-md md:mx-0 md:w-auto focus:outline-none">
                    Crea tu cuenta!
                </button>
            </div>
    
            <div className="flex justify-center mt-10">
                <div className="w-full h-64  rounded-xl md:w-4/5">
                <Example />
                </div>
            </div>
        </div>
    </section>
    
    </>
  );
};

export default LandingScreen;
