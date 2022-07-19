import React, { useEffect } from "react";
import "./SingleBlogStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../services/reduxslice/blogapi/singleBlogSlice";

function SingleBlog() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBlog({ id }));
  }, [dispatch, id]);

  const data = useSelector((state) => state.singleBlog.blogData);
  const blogData = data[0];

  return (
    <div className="single-blog-container">
      <h1 className="single-blog-title">{blogData?.title}</h1>

      <div className="single-blog-img-container">
        <img
          src={blogData?.main_blog_img}
          alt="Blog img missing..."
          className="single-blog-img"
        />
      </div>

      <div className="single-blog-description-container">
        <h3
          className="single-blog-description"
          dangerouslySetInnerHTML={{ __html: blogData?.description }}
        ></h3>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: blogData?.blog_content }}
        className="single-blog-content-container"
      ></div>
    </div>
  );
}

export default SingleBlog;
