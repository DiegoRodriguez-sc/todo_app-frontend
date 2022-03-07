import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import todoReducer from "./reducers/todoReducer";

export default configureStore({
  reducer: {
    auth:authReducer,
    todo:todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
