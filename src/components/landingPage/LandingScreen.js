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
    
    <section class="min-h-screen min-w-screen text-[#0d0d0d] bg-[#fffffe]">
      
        <div class="container px-6 py-16 mx-auto text-center">
            <div class="max-w-lg mx-auto">
                <h1 class="text-3xl font-bold md:text-4xl lg:text-5xl">
                  <span className="block">Mantente Organizado</span>
                  <span className="block">Mantente Creativo</span>
                </h1>
                <p class="mt-6 text-gray-800">
                  Captura tus ideas y haz algo creativo todos los dias
                </p>
                <button
                    onClick={handleRegister}
                    class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-[#0d0d0d] uppercase bg-[#ff8e3c] rounded-md md:mx-0 md:w-auto focus:outline-none">
                    Crea tu cuenta!
                </button>
            </div>
    
            <div class="flex justify-center mt-10">
                <div class="w-full h-64  rounded-xl md:w-4/5">
                <Example />
                </div>
            </div>
        </div>
    </section>
    
    </>
  );
};

export default LandingScreen;
