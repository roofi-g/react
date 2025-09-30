import {combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter(Toolkit)/counterSlice";
import profileReducer from "../features/profile/profileSlice";
import themeReducer from "../features/theme/themeSlice";
import toDoReducer from "../features/todo/toDoSlice";

// toolkit
const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    theme: themeReducer,
    todoList: toDoReducer,
  }
})

// const rootReducer = combineReducers({
//   counter: counterReducer,
// })
//
// const store = createStore(rootReducer);
//
export default store;

// export const store = createStore(counterReducer);
