import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: {},
});

export default authSlice.reducer;
