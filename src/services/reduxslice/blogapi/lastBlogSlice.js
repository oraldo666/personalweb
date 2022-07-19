import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getLastBlogPosts = createAsyncThunk(
  "lastBlog/getLastBlogPosts",
  async () => {
    const response = await fetch("https://greatsales.herokuapp.com/blogs/");
    return response.json();
    //   fetch("https://greatsales.herokuapp.com/blogs/")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       return data;
    //     });
  }
);

const lastBlogSlice = createSlice({
  name: "lastBlog",
  initialState: {
    blogData: [],
    blogErr: "",
  },
  extraReducers: {
    [getLastBlogPosts.pending]: (state) => {
      state.blogData = [];
    },
    [getLastBlogPosts.fulfilled]: (state, { payload }) => {
      state.blogData.push(payload[0]);
    },
    [getLastBlogPosts.rejected]: (state, { payload }) => {
      state.blogErr = payload;
    },
  },
});

export default lastBlogSlice;
