import { motion, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import VideoPlayer from "../../../../Helpers/VideoPlayer";
import { Link } from "react-router";

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
      setIsPlaying(false); // Pause the video when the section goes out of view
    }
  }, [isVisible, isPlaying]);

  // Toggle play/pause state
  const togglePlayback = () => {
    setIsPlaying((prevState) => !prevState); // Toggle play/pause
  };

  return (
    <div
      ref={container}
      style={{ top: `${50 + i}px` }}
      className="flex items-center justify-center sticky z-10"
    >
      <motion.div
        style={{ scale, top: `calc(-10% + ${i + 25}px)` }}
        className="gap-6 bg-white rounded-xl shadow-lg p-6 h-[600px] my-16 w-7xl flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex justify-between w-full gap-5">
          <div className="w-[64%]">
            <h1 className="text-4xl text-blue-950 font-bold mb-2">{title}</h1>
            <p className="text-xl text-gray-700">{description}</p>
          </div>
          <div className="w-[35%] flex justify-between items-end">
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <LuCalendarClock className="text-blue-600 text-xl" />
              <p>{date}</p>
            </div>
            <Link
              to={`/project/${id}`}
              className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              <p>View Details</p>
              <FaArrowRight />
            </Link>
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
          <div className="w-[64%] h-full">
            <VideoPlayer
              src={video}
              isPlaying={isPlaying}
              onToggle={togglePlayback} // Pass the togglePlayback function to VideoPlayer
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
