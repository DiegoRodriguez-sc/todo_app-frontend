import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serviceLogin } from "../../services/auth.service";

export const startLogin = createAsyncThunk("auth/startLogin", async (body) => {
  const resp = await serviceLogin(body);
  return resp;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    token: null,
    logged: false,
    loading: false,
    checked: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //login---------------------------------------
    [startLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [startLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
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
      state.error = "error al iniciar sesión";
      state.logged = false;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
