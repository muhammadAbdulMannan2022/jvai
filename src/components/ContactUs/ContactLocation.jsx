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
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-16 px-40 shadow-xl text-black md:h-[70vh] ">
      {/* Left - Info */}
      <div className="w-full h-full lg:w-1/2 space-y-6">
        <GradientTitle
          text={"We Are Here For You"}
          className={`bg-gradient-to-r from-blue-500 to-blue-900 text-5xl font-bold`}
        />
        <p className="text-gray-900">
          For more info or inquiry about our agency and service, please feel
          free to get in touch with us.
        </p>

        <ul className="space-y-6">
          {/* Address */}
          <li className="flex items-start gap-4">
            <PiMapPinLineFill className="text-2xl text-blue-500 mt-1" />
            <div className="flex gap-2">
              <strong className="text-blue-500">Address:</strong>
              <p className="text-gray-900 w-[300px]">
                Police Park, House #05, Road #10, floor- Lift-8. Block D,
                Banasree, Dhaka 1219
              </p>
            </div>
          </li>

          {/* Phone */}
          <li className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl text-blue-500 mt-1" />
            <div className="flex gap-2">
              <strong className="text-blue-500">Phone:</strong>
              <p className="text-gray-900">+0123456789</p>
            </div>
          </li>

          {/* Email */}
          <li className="flex items-center gap-4">
            <IoMail className="text-2xl text-blue-500 mt-1" />
            <div className="flex gap-2">
              <strong className="text-blue-500">Email:</strong>
              <p className="text-gray-900">info@example.com</p>
            </div>
          </li>
        </ul>
        <div>
          <h1 className="text-2xl font-semibold text-blue-900">Follow Us</h1>
          <div className="flex gap-2 text-3xl">
            <Link className="hover:cursor-pointer transition-colors duration-100 text-blue-800">
              <FaFacebookSquare />
            </Link>
            <Link className="hover:cursor-pointer transition-colors duration-100 text-blue-500">
              <FaTwitterSquare />
            </Link>
            <Link className="hover:cursor-pointer transition-colors duration-100 text-pink-600 hover:text-orange-600">
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </div>

      {/* Right - Map */}
      <div className="w-full h-full lg:w-1/2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d912.9202162945402!2d90.4281952696209!3d23.758757226112728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ1JzMxLjUiTiA5MMKwMjUnNDMuOCJF!5e0!3m2!1sen!2sbd!4v1747394828452!5m2!1sen!2sbd"
          frameBorder="0"
          className="rounded-xl w-full h-full border-4 border-blue-800 shadow-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
