import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./slices/todoListSlice";

let store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

export default store;
