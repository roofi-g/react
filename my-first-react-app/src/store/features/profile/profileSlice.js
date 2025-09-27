import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Roofi',
    mail: 'roofi@yandex.ru'
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateMail: (state, action) => {
      state.mail = action.payload;
    },
  }
})

export const { updateName, updateMail } = profileSlice.actions;
export default profileSlice.reducer;
