import React, { useEffect, useState } from "react";

import "./BlogPostsStyle.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBlogPosts } from "../../services/reduxslice/blogapi/blogSlice";
function BlogPosts() {
  const [otherBlogs, setOtherBlogs] = useState();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);

  const data = useSelector((state) => state.blogs.blogData);

  useEffect(() => {
    if (data) {
      setOtherBlogs(data.slice(1));
    }
  }, [data]);

  const goToSingleItemPage = (id) => {
    let path = `/blog/${id}/`;
    navigate(path);
  };

  return (
    <div className="all-blogs-container">
      {otherBlogs?.map((item) => {
        return (
          <div className="all-blogs-item" key={item.id}>
            <div className="all-blogs-item-image-container">
              {item?.main_blog_img ? (
                <img
                  src={item?.main_blog_img}
                  alt=""
                  className="all-blogs-item-image"
                />
              ) : (
                "Blog img missing..."
              )}
            </div>
            <div className="all-blogs-item-title-description">
              <h1>{item?.title}</h1>{" "}
              <div
                className="all-blogs-item-description"
                dangerouslySetInnerHTML={{
                  __html:
                    item?.description.length > 400
                      ? item?.description.substring(0, 400) + " ..."
                      : item?.description,
                }}
              ></div>
              <h2
                onClick={() => goToSingleItemPage(item?.id)}
                className="all-blogs-single-blog-navigate-button"
              >
                Read full blog...
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogPosts;
