import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";

export default function ProjectsCard({
  data,
  i,
  progress,
  range,
  targetScale,
}) {
  const { title, description, video, date, coverImage } = data;
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky top-0 z-10"
    >
      <motion.div
        style={{ scale, top: `calc(-10% + ${i + 25}px)` }}
        className="gap-6 bg-white rounded-xl shadow-lg p-6 h-[600px] my-16 w-7xl flex flex-col justify-between"
      >
        {/* Header - Title and Meta */}
        <div className="flex justify-between w-full gap-5">
          {/* Title & Description */}
          <div className="w-[64%]">
            <h1 className="text-4xl text-blue-950 font-bold mb-2">{title}</h1>
            <p className="text-xl text-gray-700">{description}</p>
          </div>

          {/* Date & Link */}
          <div className="w-[35%] flex justify-between items-end">
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <LuCalendarClock className="text-blue-600 text-xl" />
              <p>{date}</p>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:underline">
              <p>View Details</p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="flex flex-row-reverse gap-5 h-full">
          {/* Image */}
          <div className="rounded-lg overflow-hidden w-[35%] h-full">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Video */}
          <div className="relative rounded-lg overflow-hidden w-[64%] h-full">
            <video
              src={video}
              className="w-full h-full object-cover rounded-lg"
              controls={false}
              muted
              autoPlay
              loop
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-20 transition">
              <div className="bg-white p-4 rounded-full shadow-lg cursor-pointer">
                <FaPlay className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
