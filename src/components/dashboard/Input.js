import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import DropCategories from "./DropCategories";

const todoSchema = Yup.object().shape({
  todo: Yup.string().required("Ecribe tus tareas por hacer!"),
});

const Input = () => {
   const [cate, setCate] = useState({});
   const [errorCate, setErrorCate] = useState(false);

   useEffect(() => {
     
      if(cate.nombre === "Default"){
        setErrorCate(true);
      }else{
        setErrorCate(false);
      }
     
   }, [cate]);

  return (
    <Formik
      initialValues={{ todo: ""}}
      validationSchema={todoSchema}
      onSubmit={(values, { resetForm }) => {
        if(!errorCate){
          const newValues = {...values, category:cate.name}
          console.log(newValues);
          resetForm();
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center max-w-2xl w-full px-4 py-2 mx-auto border rounded-xl border-gray-200 bg-[#eff0f3]">
            <input
              type="text"
              name="todo"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.todo}
              className="flex-2 w-full text-lg px-4  mt-1 text-[#0d0d0d] bg-[#eff0f3]  focus:border-none focus:outline-none"
            />
            <DropCategories setCate={setCate}/>
          </div>
          <p className="text-red-600 flex justify-between items-center max-w-2xl w-full px-4 py-2 mx-auto md:text-sm">
            <span>{errors.todo && touched.todo && errors.todo}</span>
              <span>{errorCate && "Necesitas seleccionar una categoria!"}</span> 
          </p>
          <button type="submit" className="hidden">
            env
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Input;