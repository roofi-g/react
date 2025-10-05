import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter(Toolkit)/counterSlice";
import profileReducer from "../features/profile/profileSlice";
import themeReducer from "../features/theme/themeSlice";
import toDoReducer from "../features/todo/toDoSlice";
import productsReducer from "../features/product_client/productsSlice";
import favoritesReducer from "../features/product_client/favoritesSlice";
import productsListReducer from "../features/product_admin/productsSlice";

import practiceMiddlewareReducer from "../middleware/PracticeSlice";
import timerReducer from "../middleware/thunc/timerSlice";
import postsReducer from "../middleware/thunc/postSlice";
import usersReducer from "../middleware/thunc/userSlice";

import userReducer from "../middleware/saga/userSlice";
import createSagaMiddleware from "redux-saga";
import watchUserSaga from "../middleware/saga/userSaga";

const sagaMiddleware = createSagaMiddleware();

// const block = store => next => action => {
//   // console.log('block logger');
//   if (action.type === 'practice/block')
//     return console.log('запрет');
//   return next(action);
// }
//
// const logger = store => next => action => {
//   console.log('click logger');
//   console.log(action.type);
//   console.log(action.payload);
//   return next(action);
// }

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

    practice: practiceMiddlewareReducer,
    timer: timerReducer,
    posts: postsReducer,
    // user: usersReducer,

    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(block, logger);
  // }
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(watchUserSaga);

export default store;
