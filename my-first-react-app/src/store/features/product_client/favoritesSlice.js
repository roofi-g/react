import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [2,4]
  },
  reducers: {
    addProduct: (state, action) => {
      const newArr = [...state.favorites, action.payload.id];
      return state = {...state, favorites: newArr};
    },
    deleteProduct: (state, action) => {
      const newArr = state.favorites.filter(el => el !== action.payload.id);
      return state = {...state, favorites: newArr};
    }
  }
})

export const { addProduct, deleteProduct } = favoritesSlice.actions;
export default favoritesSlice.reducer;
