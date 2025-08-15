import React from "react";
import GradientTitle from "../../Helpers/GradientTitle";
import { PiMapPinLineFill } from "react-icons/pi";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router";

export default function ContactLocation() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 py-4 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-8 lg:px-40 shadow-xl text-black min-h-[40vh] overflow-x-hidden">
      {/* Left - Info */}
      <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
        <GradientTitle
          text={"We Are Here For You"}
          className={`bg-gradient-to-r from-blue-500 to-blue-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold`}
        />
        <p className="text-gray-900 text-sm sm:text-base">
          For more info or inquiry about our agency and service, please feel
          free to get in touch with us.
        </p>

        <ul className="space-y-3 sm:space-y-4 md:space-y-6">
          {/* Address */}
          <li className="flex items-start gap-2 sm:gap-3 md:gap-4">
            <PiMapPinLineFill className="text-lg sm:text-xl md:text-2xl text-blue-500 mt-1" />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
              <strong className="text-blue-500 text-sm sm:text-base md:text-lg">Address:</strong>
              <p className="text-gray-900 text-sm sm:text-base w-full max-w-full sm:max-w-md">
                Police Park, House #05, Road #10, floor- Lift-8. Block D,
                Banasree, Dhaka 1219
              </p>
            </div>
          </li>

          {/* Phone */}
          <li className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <FaPhoneAlt className="text-lg sm:text-xl md:text-xl text-blue-500 mt-1" />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
              <strong className="text-blue-500 text-sm sm:text-base md:text-lg">Phone:</strong>
              <p className="text-gray-900 text-sm sm:text-base">+0123456789</p>
            </div>
          </li>

          {/* Email */}
          <li className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <IoMail className="text-lg sm:text-xl md:text-2xl text-blue-500 mt-1" />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
              <strong className="text-blue-500 text-sm sm:text-base md:text-lg">Email:</strong>
              <p className="text-gray-900 text-sm sm:text-base">info@example.com</p>
            </div>
          </li>
        </ul>
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900">Follow Us</h1>
          <div className="flex gap-1 sm:gap-2 text-2xl sm:text-3xl">
            <Link className="hover:cursor-pointer transition-colors duration-100 text-blue-800 hover:text-blue-600">
              <FaFacebookSquare />
            </Link>
            <Link className="hover:cursor-pointer transition-colors duration-100 text-blue-500 hover:text-blue-400">
              <FaTwitterSquare />
            </Link>
            <Link className="hover:cursor-pointer transition-colors duration-100 text-pink-600 hover:text-orange-600">
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </div>

      {/* Right - Map */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0606618653414!2d90.40497267602359!3d23.780854087605178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f812bea6b%3A0xc289a221fd0c83e5!2sAQUA%20Tower!5e0!3m2!1sen!2sbd!4v1755239011079!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}