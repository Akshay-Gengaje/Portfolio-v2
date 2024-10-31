// BlogCard.js
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <a
      
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        className="w-full h-48 object-cover"
        src={blog.cover_image || "images/blog.jpg"}
        alt={blog.title}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
        <p className="text-gray-500">{blog.readable_publish_date}</p>
        <div className="mt-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={blog.user.profile_image_90}
            alt={blog.user.name}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">
              {blog.user.name}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
