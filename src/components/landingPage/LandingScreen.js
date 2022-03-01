import React from "react";
import todo from "../../assets/todo.svg";

const LandingScreen = () => {
  return (
   <section class="text-[#0d0d0d] bg-[#fffffe] body-font mx-auto">
   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
       <h1 class="title-font sm:text-6xl text-4xl mb-4 font-bold">
          <span className="inline">Mantente Organizado</span>
          <span className="block">Mantente Creativo</span>
       </h1>
       <p class="mb-8 leading-relaxed text-2xl text-gray-600">Captura tus ideas y haz algo creativo todos los dias</p>
       <div class="flex justify-center">
         <button class="w-full shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-[#ff8e3c] hover:bg-[#ff700a]">Crear cuenta</button>
       </div>
     </div>
     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
       <img class="object-cover object-center rounded" alt="hero" src={todo} />
     </div>
   </div>
 </section>
  );
};

export default LandingScreen;
