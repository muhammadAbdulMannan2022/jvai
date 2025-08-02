import React from "react";
import { useLocation, useParams } from "react-router";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  FaThumbsUp,
  FaShare,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
export default function BlogDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { blog } = location.state;
  return (
    <div className="w-full px-5 md:px-40 py-16 max-w-7xl border">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full max-h-[600px] overflow-hidden rounded-2xl">
          <img className="w-full  rounded" src={blog?.image} alt="" />
        </div>
        <div className="pt-16 w-full">
          <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
            <span>
              <FaRegCalendarAlt />
            </span>
            {blog?.date}
          </p>
          <h1 className="text-4xl font-bold">{blog?.title}</h1>
          {/* <p>{blog?.description}</p> */}
          <p className="mt-10 text-[#3E3E3E] text-xl text-justify">
            User Interface and User Experience design are pivotal in creating
            digital products that resonate with users. This post delves into the
            principles of effective UI/UX design, highlighting how thoughtful
            design enhances user satisfaction and engagement.In today's digital
            landscape, user experience (UX) and user interface (UI) design are
            paramount. A well-designed interface not only attracts users but
            also ensures they have a smooth and intuitive interaction with your
            product. This post delves into the principles of effective UI/UX
            design, highlighting how thoughtful design enhances user
            satisfaction and engagement. User Interface and User Experience
            design are pivotal in creating digital products that resonate with
            users. This post delves into the principles of effective UI/UX
            design, highlighting how thoughtful design enhances user
            satisfaction and engagement.In today's digital landscape, user
            experience (UX) and user interface (UI) design are paramount. A
            well-designed interface not only attracts users but also ensures
            they have a smooth and intuitive interaction with your product. This
            post delves into the principles of effective UI/UX design,
            highlighting how thoughtful design enhances user satisfaction and
            engagement. User Interface and User Experience design are pivotal in
            creating digital products that resonate with users. This post delves
            into the principles of effective UI/UX design, highlighting how
            thoughtful design enhances user satisfaction and engagement.In
            today's digital landscape, user experience (UX) and user interface
            (UI) design are paramount. A well-designed interface not only
            attracts users but also ensures they have a smooth and intuitive
            interaction with your product. This post delves into the principles
            of effective UI/UX design, highlighting how thoughtful design
            enhances user satisfaction and engagement.In today's digital
            landscape, user experience (UX) and user interface (UI) design are
            paramount. A well-designed interface not only attracts users but
            also ensures they have a smooth and intuitive interaction with your
            product. This post delves into the principles of effective UI/UX
            design, highlighting how thoughtful design enhances user
            satisfaction and engagement.
          </p>
        </div>
        <div className="w-[80%] mt-8">
          <div className="flex items-center space-x-4 text-gray-600 text-lg w-full lg:w-[60%]">
            {/* Like Button */}
            <button className="flex hover:cursor-pointer items-center space-x-1 hover:text-blue-600">
              <FaThumbsUp />
              <span>Like</span>
            </button>

            {/* Share */}
            <div className="flex hover:cursor-pointer items-center space-x-1 hover:text-blue-600">
              <FaShare />
              <span>Share </span>
            </div>

            {/* Social Links */}
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
              <span>Twitter</span> {/* Or change to "LinkedIn" if intended */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
