import { motion, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import VideoPlayer from "../../../../Helpers/VideoPlayer";
import { Link } from "react-router";
import { baseUri } from "../../../../redux/features/apiSlice";

export default function ProjectsCard({
  data,
  i,
  progress,
  range,
  targetScale,
}) {
  const { title, description, video, date, coverImage, id } = data;
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Detect visibility with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (container.current) observer.observe(container.current);

    return () => {
      if (container.current) observer.unobserve(container.current);
    };
  }, []);

  // Auto pause when the video is out of view
  useEffect(() => {
    if (!isVisible && isPlaying) {
      setIsPlaying(false);
    }
  }, [isVisible, isPlaying]);

  // Toggle play/pause state
  const togglePlayback = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div
      ref={container}
      style={{ top: `${50 + i}px` }}
      className="flex items-center justify-center sticky z-10 px-4 sm:px-6"
    >
      <motion.div
        style={{ scale, top: `calc(-10% + ${i + 25}px)` }}
        className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-7xl flex flex-col justify-between my-8 sm:my-16 h-auto sm:h-[600px]"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-5">
          <div className="w-full sm:w-[64%]">
            <h1 className="text-2xl sm:text-4xl text-blue-950 font-bold mb-2">{title}</h1>
            <p className="text-base sm:text-xl text-gray-700">{description}</p>
          </div>
          <div className="w-full sm:w-[35%] flex flex-row sm:flex-col justify-between items-start sm:items-end gap-2 sm:gap-0">
            <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
              <LuCalendarClock className="text-blue-600 text-lg sm:text-xl" />
              <p>{date}</p>
            </div>
            <Link
              to={`/project/${id}`}
              className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:underline text-sm sm:text-base"
            >
              <p>View Details</p>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Media Section */}
        <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-5 mt-4 sm:mt-6 h-auto sm:h-full">
          {/* Image */}
          <div className="rounded-lg overflow-hidden w-full sm:w-[35%] h-48 sm:h-full">
            <img
              src={baseUri + coverImage}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Video (hidden on mobile) */}
          <div className="hidden sm:block w-full sm:w-[64%] h-auto sm:h-full">
            <VideoPlayer
              src={video}
              isPlaying={isPlaying}
              onToggle={togglePlayback}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}