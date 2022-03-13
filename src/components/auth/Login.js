import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { startLogin } from "../../redux/reducers/authReducer";
import Loader from "../loader/Loader";

//validation form
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Formato inválido").required("Requerido"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres!")
    .max(50, "Muy largo!")
    .required("Requerido"),
});

const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-screen  pt-10 max-w-sm p-6 m-auto  rounded-md">
      <h1 className="text-3xl font-semibold text-center">Iniciar Sesión</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(startLogin(values));
          setSubmitting(false);
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
        }) => (
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-lg text-[#0d0d0d] dark:text-[#F0F1F7] "
              >
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="example@gmail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="block w-full px-4 py-2 mt-2 text-[#0d0d0d] bg-[#eff0f3] border-2 border-[#0d0d0d]  rounded-md focus:ring-opacity-40"
              />
              <span className="text-red-600 md:text-sm">
                {errors.email && touched.email && errors.email}
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg text-[#0d0d0d] dark:text-[#F0F1F7]"
                >
                  Contraseña
                </label>
              </div>

              <input
                type="password"
                name="password"
                placeholder="min 6 caracteres"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="block w-full px-4 py-2 mt-2 text-[#0d0d0d] bg-[#eff0f3] border-2 border-[#0d0d0d] rounded-md focus:ring-opacity-40"
              />
              <span className="text-red-600 md:text-sm">
                {errors.password && touched.password && errors.password}
              </span>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 tracking-wide text-[#0d0d0d] font-bold transition-colors duration-200 transform bg-[#ff8e3c] rounded-md focus:outline-none"
              >
                {loading ? <Loader text={"Encontrando usuario"} /> : "Login"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
