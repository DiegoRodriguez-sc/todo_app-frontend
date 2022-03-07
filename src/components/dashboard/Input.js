import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import DropCategories from "./DropCategories";

const todoSchema = Yup.object().shape({
  todo: Yup.string().required("Ecribe tus tareas por hacer!"),
  //   category: Yup.string().required("Asignale una categoria!"),
});

const Input = () => {
   const [cate, setCate] = useState({});
   console.log(cate);

  return (
    <Formik
      initialValues={{ todo: "", category: "" }}
      validationSchema={todoSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center max-w-2xl w-full px-4 py-2 mx-auto border rounded-xl border-gray-200 bg-[#eff0f3]">
            <input
              type="text"
              name="todo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.todo}
              className="flex-2 w-full text-lg px-4  mt-1 text-[#0d0d0d] bg-[#eff0f3]  focus:border-none focus:outline-none"
            />
            <DropCategories setCate={setCate}/>
          </div>
          <span className="text-red-600 flex justify-between items-center max-w-2xl w-full px-4 py-2 mx-auto md:text-sm">
            {errors.todo && touched.todo && errors.todo}
          </span>
          <button type="submit" className="hidden">
            env
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Input;
