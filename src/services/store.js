import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./reduxslice/menustate/menuSlice";
import blogSlice from "./reduxslice/blogapi/blogSlice";
import lastBlogSlice from "./reduxslice/blogapi/lastBlogSlice";
import singleBlogSlice from "./reduxslice/blogapi/singleBlogSlice";

const store = configureStore({
  reducer: {
    menuState: menuSlice.reducer,
    blogs: blogSlice.reducer,
    lastBlog: lastBlogSlice.reducer,
    singleBlog: singleBlogSlice.reducer,
  },
});
export default store;
