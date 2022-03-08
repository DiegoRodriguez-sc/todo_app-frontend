import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { IoTrash } from "react-icons/io5";
import CheckBox from "../checkbox/CheckBox";
import HeaderDate from "./HeaderDate";
import Input from "./Input";
import { arrCat } from "../../helper/categories";
import {
  deleteTodoThunk,
  putTodoThunk,
  setRemoveTask,
} from "../../redux/reducers/todoReducer";

// animate example init
const initExample = {
  init: {
    opacity: 0,
  },
  fin: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: .3,
    },
  },
  exit: {
    opacity: 0,
    y: -80,
    transition: {
      duration: 0.4,
    },
  },
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const searchLogo = (name) => {
    let logo = "";
    arrCat.forEach((c) => {
      if (c.name === name) {
        logo = c.categoria;
      }
    });
    return logo;
  };
  //complete todo
  const handleCompleted = (id) => {
    dispatch(putTodoThunk({ status: true, id }));
    dispatch(setRemoveTask());
  };
  //delete todo
  const handleDelete = (id) => {
    dispatch(deleteTodoThunk(id));
  };
  return (
    <div className="container px-1 py-16 mx-auto text-center">
      <HeaderDate />
      <div className="text-[#0d0d0d] bg-[#fffffe]">
        <div className="container px-6 py-8 mx-auto">
          <Input />
          <div className="mt-6 space-y-8 xl:mt-12">
            <AnimatePresence>
              {todos.length > 0 &&
                todos.map((td) => (
                  <motion.div
                    variants={initExample}
                    initial="init"
                    animate="fin"
                    exit="exit"
                    key={td.uid}
                    className={`flex justify-between items-center overflow-x-auto  max-w-2xl w-full px-4 py-2 mx-auto border rounded-xl border-gray-200 bg-[#eff0f3]`}
                  >
                    <div className="flex items-center justify-center">
                      <CheckBox
                        checked={td.status}
                        onChange={() => handleCompleted(td.uid)}
                        id={td.uid}
                        disabled={td.status}
                      />
                      <motion.p
                        style={
                          td.status && {
                            textDecoration: "line-through",
                          }
                        }
                        className="ml-2 font-semibold"
                      >
                        {td.bodyTodo}
                      </motion.p>
                    </div>
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          color: "#FF8E3C",
                        }}
                      >
                        {searchLogo(td.category)}
                      </motion.div>
                      <span className="mx-1"> | </span>
                      <motion.div
                        onClick={() => handleDelete(td.uid)}
                        className="cursor-pointer"
                        whileHover={{
                          color: "#FB5758",
                        }}
                      >
                        <IoTrash />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
