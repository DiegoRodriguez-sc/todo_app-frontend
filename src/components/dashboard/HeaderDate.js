import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "../../styles/text.css";

const dayArray = [
  "Domingo,",
  "Lunes,",
  "Martes,",
  "Miercoles,",
  "Jueves,",
  "Viernes,",
  "Sabado,",
];

const monthArray = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const taskMotion = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const HeaderDate = () => {
  const { user } = useSelector((state) => state.auth);
  const { task } = useSelector((state) => state.todo);
  const userName = user.name.split(" ")[0];

  const mydate = new Date();
  const day = dayArray[mydate.getDay()];
  const month = monthArray[mydate.getMonth()];
  const date = mydate.getDate();
  const hour = mydate.getHours();
  let saludo = "";
  if (hour >= 4 && hour < 13) {
    saludo = "Buenos días";
  } else if (hour >= 13 && hour < 20) {
    saludo = "Buenas Tardes";
  } else {
    saludo = "Buenas noches";
  }

  return (
    <div>
      <h2 className="afternon text-3xl min-w-full mx-auto px-1  font-bold md:text-4xl lg:text-5xl">
        {saludo}
      </h2>
      <h1 className="afternon my-2 text-4xl mb-3 min-w-full mx-auto px-1  font-bold md:text-5xl lg:text-6xl">
        {userName}
      </h1>
      <h3 className=" my-1 text-1xl font-bold md:text-2xl lg:text-3xl uppercase ">
        {`Hoy es ${day} ${date} de ${month}`}
      </h3>
      <p className="font-medium">
        Tienes{" "}
        <motion.span className="night" variants={taskMotion} initial="init" animate="animate">
          {task}{" "}
        </motion.span>
        tareas pendientes
      </p>
    </div>
  );
};

export default HeaderDate;
