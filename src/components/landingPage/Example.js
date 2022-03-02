import React from "react";
import "../../styles/checkbox.css";
import { IoSchool, IoHome, IoBriefcase } from "react-icons/io5";

const Example = () => {
  const arrExample = [
    { text: "Aprender React.js", completed: false, categoria: <IoSchool /> },
    { text: "Pagar internet :D", completed: true, categoria: <IoHome /> },
    { text: "Debug TODO app", completed: false, categoria: <IoBriefcase /> },
  ];
  return (
    <div className="text-[#0d0d0d] bg-[#fffffe]">
      <div className="container px-6 py-8 mx-auto">
        <div className="mt-6 space-y-8 xl:mt-12">
          {arrExample.map((taskk, index) => (
            <div key={index} className="flex justify-between items-center overflow-x-auto  max-w-2xl w-full px-4 py-2 mx-auto border cursor-pointer rounded-xl border-gray-200 bg-[#eff0f3]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={taskk.text}
                  defaultChecked={taskk.completed}
                  className="mx-1"
                />
                <label htmlFor={taskk.text} data-content={taskk.text}>
                  {taskk.text}
                </label>
              </div>
              <div>{taskk.categoria}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example;
