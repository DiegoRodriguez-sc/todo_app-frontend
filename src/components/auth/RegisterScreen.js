import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { startRegister } from "../../redux/reducers/authReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatePage from "../animatedPage/AnimatePage";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Requerido").min(3, "Minimo 3 caracteres"),
  email: Yup.string().email("Formato inválido").required("Requerido"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres!")
    .max(50, "Muy largo!")
    .required("Requerido"),
  password2: Yup.string()
    .min(6, "Minimo 6 caracteres!")
    .max(50, "Muy largo!")
    .required("Requerido")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden."),
});

const RegisterScreen = () => {
  const { status, error } = useSelector((state) => state.auth.register);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    if (status) {
      navigate("/login");
    } else {
      console.log(error);
    }
  }, [error, navigate, status]);

  return (
    <AnimatePage>
      <div className="w-full mt-10 max-w-sm p-6 m-auto text-[#0d0d0d] bg-[#fffffe] rounded-md">
        <h1 className="text-3xl font-semibold text-center">Crear Cuenta</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "", password2: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(startRegister(values));
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
          }) => (
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-lg text-[#0d0d0d] ">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="min 3 caracteres"
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
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-lg text-[#0d0d0d] "
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
                    className="block text-lg text-[#0d0d0d]"
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
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password2"
                    className="block text-lg text-[#0d0d0d]"
                  >
                    Confirmar contraseña
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
    </AnimatePage>
  );
};

export default RegisterScreen;
