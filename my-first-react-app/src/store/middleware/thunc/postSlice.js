import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error('Error');
    return res.json();
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: { post: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = 'success';
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export default postsSlice.reducer;
