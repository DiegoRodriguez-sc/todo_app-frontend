import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Requerido").min(3, "Minimo 3 caracteres"),
  email: Yup.string().email("Formato invalido").required("Requerido"),
  password: Yup.string()
    .min(5, "Minimo 6 caracteres!")
    .max(50, "Muy largo!")
    .required("Requerido"),
  password2: Yup.string()
    .min(5, "Minimo 6 caracteres!")
    .max(50, "Muy largo!")
    .required("Requerido")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden."),
});

const RegisterScreen = () => {
  return (
    <div className="w-full mt-10 max-w-sm p-6 m-auto text-[#0d0d0d] bg-[#fffffe] rounded-md shadow-md">
      <h1 className="text-3xl font-semibold text-center">Crear Cuenta</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "", password2:"" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
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
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg text-[#0d0d0d] ">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="block w-full px-4 py-2 mt-2 text-[#0d0d0d] bg-[#eff0f3] border-2 border-[#0d0d0d]  rounded-md focus:ring-opacity-40"
              />
              <span className="text-red-600 md:text-sm">
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-[#0d0d0d] ">
                Correo electronico
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
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
                  className="block text-lg text-[#0d0d0d]"
                >
                  Password
                </label>
              </div>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="block w-full px-4 py-2 mt-2 text-[#0d0d0d] bg-[#eff0f3] border-2 border-[#0d0d0d] rounded-md focus:ring-opacity-40"
              />
              <span className="text-red-600 md:text-sm">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password2"
                  className="block text-lg text-[#0d0d0d]"
                >
                  Confirm Password
                </label>
              </div>

              <input
                type="password"
                name="password2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password2}
                className="block w-full px-4 py-2 mt-2 text-[#0d0d0d] bg-[#eff0f3] border-2 border-[#0d0d0d] rounded-md focus:ring-opacity-40"
              />
              <span className="text-red-600 md:text-sm">
                {errors.password2 && touched.password2 && errors.password2}
              </span>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 tracking-wide text-[#0d0d0d] font-bold transition-colors duration-200 transform bg-[#ff8e3c] rounded-md hover:bg-[#ff700a] focus:outline-none focus:bg-[#ff700a]"
              >
                Registrarse
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterScreen;
