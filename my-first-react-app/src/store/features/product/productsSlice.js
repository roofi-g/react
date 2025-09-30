import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: Date.now(),
        name: 'Название товара',
        description: 'Описание товара',
        price: 1000
      },
      {
        id: 2,
        name: 'Название товара 2',
        description: 'Описание товара',
        price: 2000
      },
      {
        id: 3,
        name: 'Название товара 3',
        description: 'Описание товара',
        price: 3000
      },
      {
        id: 4,
        name: 'Название товара 4',
        description: 'Описание товара',
        price: 2000
      },
      {
        id: 5,
        name: 'Название товара 5',
        description: 'Описание товара',
        price: 1000
      }
    ]
  }
})

export const {  } = productsSlice.actions;
export default productsSlice.reducer;
