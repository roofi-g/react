import {createSlice} from "@reduxjs/toolkit";

let timer;

export const startTimer = () => (dispatch, getState) => {
  if (timer) return;

  timer = setInterval(() => {
    const currentValue = getState().timer.value;
    dispatch(setValue(currentValue + 1));
  }, 1000)
}

export const stopTimer = () => (dispatch, getState) => {
  clearInterval(timer);
  timer = null;
}

const timerSlice = createSlice({
  name: 'timer',
  initialState: { value: 0 },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
})

export const { setValue, reset } = timerSlice.actions;
export default timerSlice.reducer;
