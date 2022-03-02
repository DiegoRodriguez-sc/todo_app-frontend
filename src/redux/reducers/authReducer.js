import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceLogin, serviceRegister } from "../../services/auth.service";

export const startLogin = createAsyncThunk("auth/startLogin", async (body) => {
  const resp = await serviceLogin(body);
  return resp;
});

export const startRegister = createAsyncThunk(
  "auth/startRegister",
  async (body) => {
    const resp = await serviceRegister(body);
    return resp;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    token: null,
    logged: false,
    loading: false,
    register: {
      status: false,
      error: null,
    },
    error: null,
  },
  reducers: {},
  extraReducers: {
    //login---------------------------------------
    [startLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [startLogin.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error.msg;
        state.logged = false;
      } else {
        state.token = action.payload.resp.data.token;
        state.user = action.payload.resp.data.user;
        state.logged = true;
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
      } else {
        state.register.error = null;
        state.register.status = true;
        state.logged = false;
      }
      state.loading = false;
    },
    [startRegister.rejected]: (state, action) => {
      state.error = "error al Registrarse trata de recargar la página ";
      state.logged = false;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
