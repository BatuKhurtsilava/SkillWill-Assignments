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


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch