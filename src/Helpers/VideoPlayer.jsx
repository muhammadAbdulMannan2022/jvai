import React, { useRef, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoPlayer({ src, isPlaying, onToggle }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  // Play/pause based on parent
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying]);
  // Update progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const value = (video.currentTime / video.duration) * 100;
    setProgress(value || 0);
  };

  // Seek video on progress bar click
  const handleSeek = (e) => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;

    video.currentTime = newTime;
    setProgress((clickX / rect.width) * 100);
  };

  // Toggle play/pause
  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black rounded-lg"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Play icon only shown when paused */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
          onClick={handleClick}
        >
          <div className="bg-white p-4 rounded-full shadow-lg">
            <FaPlay className="text-blue-600 text-xl" />
          </div>
        </div>
      )}

      {/* Transparent click layer when playing */}
      {isPlaying && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handleClick}
        />
      )}

      {/* Progress bar, shown on hover */}
      {showControls && (
        <div>
          <div
            ref={progressRef}
            className="absolute left-[10%] w-[80%] bg-gray-300 rounded cursor-pointer z-30 h-[3px]"
            style={{ bottom: "5%" }}
            onClick={handleSeek}
          >
            <div
              className="h-full bg-blue-600 transition-all duration-300 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
