import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaEye } from "react-icons/fa";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const ServiceCard = ({
  leftImage,
  rightImage,
  centerTitle,
  centerDescription,
  buttonText = "See All",
}) => {
  const controls = useAnimation();
  const cardRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current || !centerRef.current) return;

      const cardRect = cardRef.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const elementCenter =
        centerRef.current.getBoundingClientRect().top +
        centerRef.current.getBoundingClientRect().height / 2;

      const distanceFromCenter = elementCenter - centerY;
      const translateY = clamp(distanceFromCenter * -0.2, -30, 30);

      controls.start({ y: translateY });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      ref={cardRef}
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
      <motion.div
        ref={centerRef}
        className="w-full md:w-1/3 h-[60%] bg-[#E6EDFF] rounded-lg text-center flex flex-col items-center justify-center px-3"
        initial={{ y: 0 }}
        animate={controls}
      >
        <h3 className="text-2xl font-bold text-blue-900">{centerTitle}</h3>
        <p className="text-gray-700 mt-2">{centerDescription}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700">
          <FaEye /> {buttonText}
        </button>
      </motion.div>

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
