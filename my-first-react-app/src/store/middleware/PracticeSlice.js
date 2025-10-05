import {createSlice} from "@reduxjs/toolkit";

const practiceSlice = createSlice({
  name: 'practice',
  initialState: {  },
  reducers: {
    click: state => {
      console.log('click') },
    block: state => {
      console.log('block') },
  }
})

export const { click, block } = practiceSlice.actions;
export default practiceSlice.reducer;
