import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Importing the hook

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const ServiceCard = ({
  leftImage,
  rightImage,
  centerTitle,
  centerDescription,
  buttonText = "See All",
}) => {
  const controls = useAnimation();
  const centerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(0); // state to track top position dynamically

  // Using the Intersection Observer to check if the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Optional: Triggers the observer once when it enters the viewport
    threshold: 0.5, // Optional: You can change this to trigger when 50% of the card is in view
  });

  // Use the inView state to trigger animations when the card enters the viewport
  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0, // Reset the vertical position when the card is in view
        opacity: 1, // Make it fully visible
        transition: { duration: 0.5 }, // Smooth transition
      });
    } else {
      controls.start({
        y: 100, // Move the card down when it's out of view
        opacity: 0, // Fade it out
      });
    }
  }, [inView, controls]);

  // Scroll event listener to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const cardTop = centerRef.current?.getBoundingClientRect().top;

      // Dynamically adjust the top value as the card scrolls into the viewport
      if (cardTop < window.innerHeight) {
        const calculatedTop = clamp(188 - cardTop, 0, 188); // Adjust top between 0 and 188px
        setTopPosition(calculatedTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref} // Attach the ref to the container for Intersection Observer
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
      <div className="w-1/3 relative">
        <motion.div
          ref={centerRef}
          className="w-full h-[60%] bg-[#E6EDFF] rounded-lg text-center flex flex-col items-center justify-center px-3 absolute"
          style={{ top: `${topPosition}px` }} // Dynamically update the top position
          initial={{ y: 100, opacity: 0 }} // Start off-screen and invisible
          animate={{
            top: `${topPosition}px`, // Smooth transition of the 'top' position
            opacity: 1,
          }}
          transition={{
            duration: 0.5, // Transition duration for smooth animation
            type: "spring", // You can use 'spring' for more fluid animations
            stiffness: 100, // Adjust the stiffness for a more fluid effect
            damping: 25, // Adjust damping to prevent the animation from being too snappy
          }}
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
