import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter(Toolkit)/counterSlice";
import profileReducer from "../features/profile/profileSlice";
import themeReducer from "../features/theme/themeSlice";
import toDoReducer from "../features/todo/toDoSlice";
import productsReducer from "../features/product_client/productsSlice";
import favoritesReducer from "../features/product_client/favoritesSlice";
import productsListReducer from "../features/product_admin/productsSlice";

// toolkit
const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    theme: themeReducer,
    todoList: toDoReducer,
    products: productsReducer,
    favorites: favoritesReducer,
    productsList: productsListReducer,
  }
})

export default store;
