import {createSlice} from "@reduxjs/toolkit";

const productsList = createSlice({
  name: 'productsList',
  initialState: {
    products: [
      {
        id: Date.now(),
        name: 'Название',
        description: 'Описание',
        price: 1000,
        available: 5
      },
      {
        id: 3,
        name: 'Название 2',
        description: 'Описание',
        price: 2000,
        available: 1
      }
    ]
  },
  reducers: {
    addProduct: () => {

    },
    deleteProduct: () => {

    },
    updateDataProduct: () => {

    },
    changeAvailableProduct: () => {

    }
  }
})

export const { addProduct, deleteProduct, updateDataProduct, changeAvailableProduct } = productsList.actions;
export default productsList.reducer;
