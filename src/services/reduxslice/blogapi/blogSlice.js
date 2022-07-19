import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogPosts = createAsyncThunk("blog/getBlogPosts", async () => {
  const response = await fetch("https://greatsales.herokuapp.com/blogs/");
  return response.json();
  //   fetch("https://greatsales.herokuapp.com/blogs/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     });
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogData: [],
    blogErr: "",
  },
  extraReducers: {
    [getBlogPosts.pending]: (state) => {
      state.blogData = [];
    },
    [getBlogPosts.fulfilled]: (state, { payload }) => {
      state.blogData=payload;
    },
    [getBlogPosts.rejected]: (state, { payload }) => {
      state.blogErr = payload;
    },
  },
});

export default blogSlice;
