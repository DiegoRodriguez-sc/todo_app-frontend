import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default todoSlice.reducer;
