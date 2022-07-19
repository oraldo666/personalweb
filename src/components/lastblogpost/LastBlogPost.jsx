import React, { useEffect, useState } from "react";
import "./LastBlogPostStyle.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLastBlogPosts } from "../../services/reduxslice/blogapi/lastBlogSlice";

function LastBlogPost() {
  const [theLastBlog, setTheLastBlog] = useState();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getLastBlogPosts());
  }, [dispatch]);

  const latestBlog = useSelector((state) => state.lastBlog.blogData);

  useEffect(() => {
    if (latestBlog) {
      setTheLastBlog(latestBlog[0]);
    }
  }, [latestBlog]);

  const goToSingleItemPage = (id) => {
    let path = `/blog/${id}/`;
    navigate(path);
  };

  return (
    <div className="blog-last-post-container">
      <div className="blog-img-container">
        <img
          src={theLastBlog?.main_blog_img}
          alt="Blog img loading ..."
          className="blog-main-img"
        />
      </div>
      <div className="blog-title-description-container">
        <h1>{theLastBlog?.title}</h1>

        <p className="blog-description">
          {theLastBlog?.description.length > 800
            ? theLastBlog?.description.substring(0, 800) + " ..."
            : theLastBlog?.description}{" "}
        </p>
        <h2
          onClick={() => goToSingleItemPage(theLastBlog?.id)}
          className="single-blog-navigate-button"
        >
          Read full blog...
        </h2>
      </div>
    </div>
  );
}

export default LastBlogPost;
