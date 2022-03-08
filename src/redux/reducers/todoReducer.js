import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTodoByUser,
  postTodo,
  putTodo,
  deleteTodo,
} from "../../services/todo.service";

export const getTodoUserThunk = createAsyncThunk(
  "todo/getTodoUserThunk",
  async (id) => {
    const resp = await getTodoByUser(id);
    return resp;
  }
);

export const postTodoThunk = createAsyncThunk(
  "todo/postTodoThunk",
  async (body) => {
    const { todo, category } = body;
    const resp = await postTodo({ bodyTodo: todo, category });
    return resp;
  }
);
export const putTodoThunk = createAsyncThunk(
  "todo/putTodoThunk",
  async (body) => {
    const { status, id } = body;
    const resp = await putTodo({ status }, id);
    return resp;
  }
);
export const deleteTodoThunk = createAsyncThunk(
  "todo/deleteTodoThunk",
  async (id) => {
    const resp = await deleteTodo(id);
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
    //post todo-----------------------------------------
    [postTodoThunk.pending]: (state) => {
      state.loading = true;
    },
    [postTodoThunk.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error.msg;
      } else {
        state.todos = [...state.todos, action.payload.resp.todo];
        state.error = null;
      }
      state.loading = false;
    },
    [postTodoThunk.rejected]: (state, action) => {
      state.error = "error al crear todo";
      state.loading = false;
    },
    //put todo-----------------------------------------
    [putTodoThunk.pending]: (state) => {
      state.loading = true;
    },
    [putTodoThunk.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error.msg;
      } else {
        state.todos = state.todos.map((td) =>
          td.uid === action.payload.resp.todo.uid
            ? action.payload.resp.todo
            : td
        );
        state.error = null;
      }
      state.loading = false;
    },
    [putTodoThunk.rejected]: (state) => {
      state.error = "error al actualizar el todo";
      state.loading = false;
    },
    //delete todo-----------------------------------------
    [deleteTodoThunk.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodoThunk.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error.msg;
      } else {
        state.todos = state.todos.filter(
          (td) => td.uid !== action.payload.resp.todo.uid
        );
        state.error = null;
      }
      state.loading = false;
    },
    [deleteTodoThunk.rejected]: (state) => {
      state.error = "error al actualizar el todo";
      state.loading = false;
    },
  },
});

export default todoSlice.reducer;
