import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [
      {
        id: Date.now(),
        name: 'Название товара',
        description: 'Описание товара',
        price: 0
      }
    ]
  },
  reducers: {
    addProduct: (state, actions) => {

    },
    deleteProduct: (state, actions) => {

    }
  }
})

export const { addProduct, deleteProduct } = favoritesSlice.actions;
export default favoritesSlice.reducer;
