import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import darkModeReducer from "./darkMode/darkMode.slice";
import todoReducer from './todo/todo.slice';

const rootReducer = combineReducers({
  todo: todoReducer,
  darkMode: darkModeReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
})