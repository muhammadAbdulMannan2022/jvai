import React from "react";
import { useParams } from "react-router";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  FaThumbsUp,
  FaShare,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useGetOneBlogQuery } from "../../redux/features/apiSlice";

export default function BlogDetails() {
  const { id } = useParams();

  const { data: blog, isLoading, isError } = useGetOneBlogQuery(id);

  if (isLoading) {
    return (
      <div className="text-center py-16 text-gray-600 text-xl font-medium">
        Loading blog details...
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="text-center py-16 text-red-500 text-xl font-medium">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="w-full px-5 md:px-40 py-16 max-w-7xl">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full max-h-[600px] overflow-hidden rounded-2xl">
          <img className="w-full rounded" src={blog.picture} alt={blog.title} />
        </div>
        <div className="pt-16 w-full">
          <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
            <FaRegCalendarAlt />
            {blog.date || "Unknown date"}
          </p>
          <h1 className="text-4xl font-bold">{blog.title}</h1>

          <div
            className="mt-10 text-[#3E3E3E] text-xl text-justify leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>

        <div className="w-[80%] mt-8">
          <div className="flex flex-wrap gap-4 text-gray-600 text-lg">
            {/* Like */}
            <button className="flex hover:cursor-pointer items-center space-x-1 hover:text-blue-600">
              <FaThumbsUp />
              <span>Like</span>
            </button>

            {/* Share */}
            <div className="flex hover:cursor-pointer items-center space-x-1 hover:text-blue-600">
              <FaShare />
              <span>Share</span>
            </div>

            {/* Social buttons */}
            <button className="flex hover:cursor-pointer items-center space-x-1 hover:text-blue-600">
              <FaFacebookF />
              <span>Facebook</span>
            </button>

            <button className="flex hover:cursor-pointer items-center space-x-1 hover:text-pink-500">
              <FaInstagram />
              <span>Instagram</span>
            </button>

            <button className="flex hover:cursor-pointer items-center space-x-1 hover:text-blue-400">
              <FaTwitter />
              <span>Twitter</span>
            </button>

            <button className="flex hover:cursor-pointer items-center space-x-1 hover:text-blue-700">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
