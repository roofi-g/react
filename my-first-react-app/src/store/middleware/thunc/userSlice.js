import {createSlice} from "@reduxjs/toolkit";
import {fetchPost} from "./postSlice";

export const fetchUser = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    dispatch(setSuccess(data))
  } catch (e) {
    dispatch(setError(e.message))
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {
    setLoading: state => {
      state.status = 'loading';
    },
    setSuccess: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    }
  },
})

export const { setLoading, setSuccess, setError } = userSlice.actions;
export default userSlice.reducer;
