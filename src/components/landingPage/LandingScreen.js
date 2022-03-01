import React from "react";
import { useNavigate } from "react-router-dom";
import todo from "../../assets/todo.svg";

const LandingScreen = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <section className="text-[#0d0d0d] bg-[#fffffe] body-font mx-auto">
      <div className="container mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
        <div className="flex-2 lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl md:text-5xl lg:text-6xl text-3xl mb-4 font-bold">
            <span className="inline">Mantente Organizado</span>
            <span className="block">Mantente Creativo</span>
          </h1>
          <p className="mb-8 leading-relaxed md:text-2xl text-lg text-gray-600">
            Captura tus ideas y haz algo creativo todos los dias
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleRegister}
              className="w-full shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-[#ff8e3c] hover:bg-[#ff700a]"
            >
              Crear cuenta
            </button>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/3 w-5/6 mx-auto self-center">
          <img
            className="object-cover object-center rounded w-full"
            alt="hero"
            src={todo}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingScreen;
