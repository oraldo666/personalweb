import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleBlog = createAsyncThunk(
  "singleBlog/getSingleBlog",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://greatsales.herokuapp.com/blog/${id}/`
      );
      return response.json();
    } catch (error) {
      throw error;
    }
  }
);

const singleBlogSlice = createSlice({
  name: "singleBlog",
  initialState: {
    blogData: [],
    blogErr: null,
  },
  extraReducers: {
    [getSingleBlog.pending]: (state, { payload }) => {
      state.blogData = [];
    },
    [getSingleBlog.fulfilled]: (state, { payload }) => {
      state.blogData.push(payload);
    },
    [getSingleBlog.rejected]: (state, { payload }) => {
      console.log(payload);
      state.blogErr = payload;
    },
  },
});

export default singleBlogSlice;
