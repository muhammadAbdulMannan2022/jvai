import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const ServiceCard = ({
  leftImage,
  rightImage,
  centerTitle,
  centerDescription,
  buttonText = "See All",
}) => {
  const containerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(0);
  const maxOffset = 180; // final top position

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const start = window.innerHeight / 2; // start when top hits center
      const end = 0; // end when top hits top

      // Calculate progress from center to top
      const progress = clamp((start - rect.top) / (start - end), 0, 1);

      setTopPosition(progress * maxOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-[560px] md:flex-row justify-center gap-6 py-12 px-4"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/3 h-full bg-yellow-100 rounded-lg p-4 flex items-center justify-center">
        <img
          src={leftImage}
          alt="Left"
          className="w-full h-64 object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="w-1/3 relative h-full">
        <motion.div
          className="w-full h-[60%] bg-[#E6EDFF] rounded-lg text-center flex flex-col items-center justify-center px-3 absolute"
          style={{ top: `${topPosition}px` }}
        >
          <h3 className="text-2xl font-bold text-blue-900">{centerTitle}</h3>
          <p className="text-gray-700 mt-2">{centerDescription}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700">
            <FaEye /> {buttonText}
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/3 h-full bg-purple-100 rounded-lg p-4 flex items-center justify-center">
        <img
          src={rightImage}
          alt="Right"
          className="w-full h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
