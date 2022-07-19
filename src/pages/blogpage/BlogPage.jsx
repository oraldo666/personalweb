import React from "react";
import "./BlogPageStyle.css";
import LastBlogPost from "../../components/lastblogpost/LastBlogPost";
import BlogPosts from "../../components/blogposts/BlogPosts";

function BlogPage() {
  return (
    <div>
      <div className="blog-page-container">
        <LastBlogPost />
        <BlogPosts />
      </div>
    </div>
  );
}

export default BlogPage;
