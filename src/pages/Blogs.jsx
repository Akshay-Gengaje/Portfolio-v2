import React from "react";
import BlogList from "../components/Blogs/BlogList";

const Blogs = () => {
  return (
    <div className="min-h-screen ">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">Blogs</h1>
      <div>
        <BlogList />
      </div>
    </div>
  );
};

export default Blogs;
