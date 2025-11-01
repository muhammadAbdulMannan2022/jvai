import React, { useRef, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoPlayer({ src, isPlaying, onToggle, muted = true, thum }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [hasError, setHasError] = useState(false); // State to track if there's an error

  // Play/pause based on parent
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => { });
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

  // Handle video error
  const handleError = () => {
    setHasError(true); // Set error state to true
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black rounded-lg"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {!hasError ? (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          muted={muted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onError={handleError} // Attach error handler to the video element
        />
      ) : null}

      {/* Show thumbnail if not playing and video has error */}
      {!isPlaying && thum && !hasError && (
        <img
          src={thum}
          alt="thum"
          className="absolute top-0 left-0 right-0 h-full w-full"
        />
      )}

      {/* Play icon only shown when paused */}
      {!isPlaying && !hasError && (
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
      {isPlaying && !hasError && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handleClick}
        />
      )}

      {/* Progress bar, shown on hover */}
      {showControls && !hasError && (
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
