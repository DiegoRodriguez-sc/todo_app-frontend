import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import {
  serviceLogin,
  serviceRegister,
  serviceRevalidation,
} from "../../services/auth.service";

export const startLogin = createAsyncThunk("auth/startLogin", async (body) => {
  const respLogin = await serviceLogin(body);
  return respLogin;
});

export const startRegister = createAsyncThunk(
  "auth/startRegister",
  async (body) => {
    const respRegister = await serviceRegister(body);
    return respRegister;
  }
);

export const startRevalidation = createAsyncThunk(
  "auth/startRevalidation",
  async () => {
    const respReva = await serviceRevalidation();
    return respReva;
  }
);

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-left",
  showConfirmButton: false,
  timer: "5000",
  timerProgressBar: true,
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    token: null,
    logged: false,
    loading: true,
    register: {
      status: false,
      error: null,
    },
    error: null,
  },
  reducers: {
    setLogout: (state) => {
      localStorage.removeItem("token");
      state.logged = false;
      state.user = [];
      state.token = null;
      state.error = null;
      state.register = {
        status: false,
        error: null,
      };
    },
  },
  extraReducers: {
    //login---------------------------------------
    [startLogin.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [startLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload.error) {
        state.error = action.payload.error.msg;
        state.logged = false;
        setTimeout(() => {
          Toast.fire({
            icon: "error",
            iconColor: "#B32F2D",
            color: "#BF3938",
            background: "#ECC8C5",
            title: "Error al logear usuario",
            text: action.payload.error.msg,
          });
        }, 1000);
      } else {
        state.token = action.payload.resp.data.token;
        state.user = action.payload.resp.data.user;
        state.logged = true;
        state.error = null;
        localStorage.setItem("token", action.payload.resp.data.token);
        Toast.fire({
          icon: "success",
          iconColor: "#5A7052",
          color: "#597151",
          background: "#DEF2D6",
          title: "Usuario Logeado",
        });
      }
      state.loading = false;
    },
    [startLogin.rejected]: (state, action) => {
      state.error = "error al iniciar sesión trata de recargar la página";
      state.logged = false;
      state.loading = false;
    },
    //Registro---------------------------------------
    [startRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [startRegister.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.register.error = action.payload.error.msg;
        state.register.status = false;
        state.logged = false;
        Toast.fire({
          icon: "error",
          iconColor: "white",
          color: "white",
          background: "#F33950",
          title: "Error al crear cuenta",
          text: "Email en uso",
        });
      } else {
        state.register.error = null;
        state.register.status = true;
        state.logged = false;
        Toast.fire({
          icon: "success",
          iconColor: "white",
          color: "white",
          background: "#75D00F",
          title: "Usuario Registrado",
          text: "Prueba logearte con tu nueva cuenta!",
        });
      }
      state.loading = false;
    },
    [startRegister.rejected]: (state, action) => {
      state.error = "error al Registrarse trata de recargar la página ";
      state.logged = false;
      state.loading = false;
    },
    //Revalidation---------------------------------------
    [startRevalidation.pending]: (state, action) => {
      state.loading = true;
    },
    [startRevalidation.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.logged = false;
      } else {
        state.token = action.payload.resp.data.token;
        state.user = action.payload.resp.data.user;
        state.logged = true;
        state.error = null;
        localStorage.setItem("token", action.payload.resp.data.token);
        Toast.fire({
          icon: "success",
          iconColor: "#5A7052",
          color: "#597151",
          background: "#DEF2D6",
          title: "Usuario Logeado",
        });
      }
      state.loading = false;
    },
    [startRevalidation.rejected]: (state, action) => {
      state.error = "error al iniciar sesión trata de recargar la página";
      state.logged = false;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
export const { setLogout } = authSlice.actions;
