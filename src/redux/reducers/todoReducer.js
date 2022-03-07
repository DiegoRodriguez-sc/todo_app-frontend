import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodoByUser } from "../../services/todo.service";

export const getTodoUserThunk = createAsyncThunk(
  "todo/getTodoUserThunk",
  async (id) => {
    const resp = await getTodoByUser(id);
    console.log(resp);
    return resp;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //get by user---------------------------------------
    [getTodoUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [getTodoUserThunk.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error.msg;
      } else {
        state.todos = action.payload.resp.todos;
        state.error = null;
      }
      state.loading = false;
    },
    [getTodoUserThunk.rejected]: (state, action) => {
      state.error = "error al traer las tareas";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
