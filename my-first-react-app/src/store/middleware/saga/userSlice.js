import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {
    fetchUser: state => {
      state.status = 'loading';
    },
    fetchUserSuccess: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
  },
})

export const { fetchUser, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;
