import React, { useEffect, useState } from "react";
import "../../styles/checkbox.css";
import { IoSchool, IoHome, IoBriefcase } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import CheckBox from "../checkbox/CheckBox";

const arrLanding = [
  {
    text: "Aprender React.js",
    id: 1,
    completed: false,
    categoria: <IoSchool />,
  },
  {
    text: "Pagar internet :D",
    id: 2,
    completed: false,
    categoria: <IoHome />,
  },
  {
    text: "Debug TODO app",
    id: 3,
    completed: false,
    categoria: <IoBriefcase />,
  },
];

const Example = () => {
  const [arrExample, setArrExample] = useState(arrLanding);

  const handleCompleted = (id) => {
    setArrExample(
      arrExample.map((exa) => {
        if (exa.id === id) {
          exa.completed = !exa.completed;
        }
        return exa;
      })
    );
    setTimeout(() => {
      setArrExample(arrExample.filter((fil) => fil.completed === false));
    }, 2000);

  };

  useEffect(() => {
    if (arrExample.length === 0) {
      arrLanding.forEach(ar => ar.completed = false);
      setTimeout(() => {
        setArrExample(arrLanding);
      }, 1000);
    }
  }, [arrExample]);

  // animate example init
  const initExample = {
    init:{
      opacity:0
    },
    fin:{
      opacity:1,
      transition:{
        duration:.5, delay:1
      }
    },
    exit:{
      opacity:0,
      y:-80,
      transition:{
        duration:.4
      }    
    }
  }

  return (
    <div className="text-[#0d0d0d] bg-[#fffffe]">
      <div className="container px-6 py-8 mx-auto">
        <div className="mt-6 space-y-8 xl:mt-12">
         <AnimatePresence>
          {arrExample.map((taskk) => (
            <motion.div
              variants={initExample}
              initial="init"
              animate="fin"
              exit="exit"
              key={taskk.id}
              className={`flex justify-between items-center overflow-x-auto  max-w-2xl w-full px-4 py-2 mx-auto border rounded-xl border-gray-200 bg-[#eff0f3]`}
            >
              <div className="flex items-center justify-center">
                <CheckBox
                  checked={taskk.completed}
                  onChange={() => handleCompleted(taskk.id)}
                  id={taskk.id}
                />
                <motion.p
                  animate={{
                    textDecoration: `${
                      taskk.completed ? "line-through" : "none"
                    }`,
                  }}
                  transition={{ delay: 1, duration: 1 }}
                  className="ml-2 font-semibold"
                >
                  {taskk.text}
                </motion.p>
              </div>
              <motion.div
                whileHover={{
                  color: "#FF8E3C",
                  textShadow: "0 0 8px rgba(255, 142, 50, .7)",
                }}
              >
                {taskk.categoria}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Example;
