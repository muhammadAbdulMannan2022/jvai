import React from "react";
import { motion, useTransform } from "framer-motion";

const SupportCard = ({
  title = "24/7 Customer Support",
  description = "Have a question or need to reschedule? Our friendly support team is available round the clock to help you anytime.",
  buttonText = "Book Now",
  bgColor = "bg-cyan-100",
  textColor = "text-teal-700",
  buttonBgColor = "bg-teal-600",
  buttonTextColor = "text-white",
  imageSrc,
  progress, // Added
  range, // Added
  i,
  targetScale = 0.95, // Added
}) => {
  // Scale based on scroll position
  const scale = useTransform(progress, range, [1, targetScale]);
  const topPosition = `${10 + i * 2}%`;

  return (
    <motion.div
      style={{ scale, top: topPosition }}
      className={`w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg ${bgColor} flex flex-col md:flex-row items-center p-6 transition-transform duration-500 ease-in-out sticky`}
    >
      {/* Left Side: Image */}
      <div
        className="w-full md:w-1/2 h-64 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>

      {/* Right Side: Text and Button */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-start">
        <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>{title}</h2>
        <p className={`text-lg mb-6 ${textColor}`}>{description}</p>
        <button
          className={`px-6 py-2 rounded-full ${buttonBgColor} ${buttonTextColor} hover:opacity-90 transition-opacity`}
        >
          {buttonText} →
        </button>
      </div>
    </motion.div>
  );
};

export default SupportCard;
