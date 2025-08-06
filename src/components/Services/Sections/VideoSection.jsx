"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import VideoPlayer from "../../../Helpers/VideoPlayer"
import Button from "../../../Helpers/Button"
import { useGetAllCategoriesQuery } from "../../../redux/features/apiSlice"

// INDIVIDUAL CARD COMPONENT
const VideoCard = ({
  data,
  isActive,
  isPlaying,
  onToggle,
  progress,
  goToNext,
  goToPrev,
  index,
  setActiveIndex,
}) => {
  const { title, desc, videoSrc, image, services, color } = data

  return (
    <div
      className={`
        transition-all duration-500 overflow-hidden relative rounded-lg shadow-md bg-cover bg-center
        ${!isActive ? "hover:cursor-pointer" : ""}
        ${isActive ? "w-full h-[70vh]" : "w-full h-[100px] md:w-[100px] md:h-[70vh]"}
      `}
      onClick={() => !isActive && setActiveIndex(index)}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black/60 backdrop-blur-sm border h-full flex flex-col ">
        {isActive ? (
          <>
            {/* Active Header */}
            <div className="w-full h-[10%] relative flex items-center justify-end py-4 px-6 lg:px-10">
              <div className="w-full flex items-center justify-end gap-4">
                <span className="w-4 h-4 rounded-full block" style={{ backgroundColor: color }} />
                <span className="font-bold text-white" style={{ color: color }}>
                  {title}
                </span>
              </div>
            </div>

            {/* Active Content */}
            <div className="w-full flex-1 overflow-y-auto md:overflow-visible">
              <div className="p-4 sm:p-6 text-white relative z-10 flex flex-col md:flex-row gap-4 md:gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl lg:text-5xl font-bold mb-2" style={{ color: color }}>
                    {title}
                  </h2>
                  <p className="text-sm lg:text-[16px] my-8 line-clamp-6">{desc}</p>
                  <ul className="list-decimal list-inside space-y-1 text-sm lg:text-lg font-bold mb-6">
                    {services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                  <Button to={"/contact"} text={"Contact Us"} />
                </div>
                <div className="w-full md:w-1/2 h-[25vh] md:h-[30vh] flex items-center justify-center">
                  <VideoPlayer src={videoSrc} isPlaying={isPlaying} onToggle={onToggle} />
                </div>
              </div>
            </div>

            {/* Active Footer/Controls */}
            <div className="w-full h-[10%] flex relative">
              <div className="absolute bottom-3 left-6 right-6 flex items-center justify-center">
                <div className="w-[70%] h-2 bg-white/20 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-white transition-all"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
              </div>
              <div className="absolute bottom-3 right-0 flex justify-end items-center w-fit px-4 gap-4 z-50">
                <button
                  onClick={goToPrev}
                  className="bg-white/30 hover:bg-white/60 hover:cursor-pointer text-black p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white/30 hover:cursor-pointer hover:bg-white/60 text-black p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Inactive state content - Mobile */}
            <div className="flex items-center justify-center h-full px-4 md:hidden">
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="font-medium tracking-wide text-white" style={{ color: color }}>
                  {title}
                </span>
              </div>
            </div>

            {/* Inactive state content - Desktop */}
            <div className="hidden md:flex flex-col items-center justify-center h-full px-4">
              <div className="w-[30px] h-[30px] rounded-full shrink-0 mb-2" style={{ backgroundColor: color }} />
              <div
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  letterSpacing: "0.1em",
                  color: color,
                }}
                className="font-medium tracking-wide text-white"
              >
                {title}
              </div>
            </div>

            {/* Play button */}
            <div className="absolute bottom-3 w-full md:flex justify-center hidden">
              <div
                onClick={() => setActiveIndex(index)}
                className="w-[40px] h-[40px] bg-white/50 hover:cursor-pointer hover:bg-white/60 text-white flex items-center justify-center rounded-full"
              >
                <Play size={20} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// MAIN SECTION
export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const progressRef = useRef(0)

  const { data: apiResponse, isLoading } = useGetAllCategoriesQuery()

  const categories =
    apiResponse?.Data?.map((item, i) => ({
      title: item.category_name,
      desc: item.category_description,
      services: item.key_points?.map((point) => point.point_name) || [],
      image: item.category_background_image,
      color: "#fff", // 🔧 Optional: derive per category
      videoSrc:
        item.category_video ||
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    })) || []

  const goToIndex = (index) => {
    setActiveIndex(index)
    setProgress(0)
    progressRef.current = 0
    setIsPlaying(false)
  }

  const goToNext = () => {
    if (categories.length) goToIndex((activeIndex + 1) % categories.length)
  }

  const goToPrev = () => {
    if (categories.length) goToIndex((activeIndex - 1 + categories.length) % categories.length)
  }

  // PROGRESS AUTO-ADVANCE
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (!isPlaying && categories.length > 0) {
      intervalRef.current = setInterval(() => {
        progressRef.current += 2
        if (progressRef.current >= 100) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          progressRef.current = 0
          setProgress(0)
          setIsPlaying(false)
          setActiveIndex((prev) => (prev + 1) % categories.length)
        } else {
          setProgress(progressRef.current)
        }
      }, 100)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [activeIndex, isPlaying, categories.length])

  if (isLoading) {
    return <div className="text-center py-20 text-xl">Loading categories...</div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center px-5 md:px-24 py-40 overflow-hidden relative">
      <div className="flex flex-col md:flex-row w-full gap-1 mx-5 md:mx-10">
        {categories.map((item, index) => (
          <VideoCard
            key={index}
            data={item}
            isActive={index === activeIndex}
            isPlaying={index === activeIndex && isPlaying}
            onToggle={() => {
              if (index === activeIndex) {
                setIsPlaying((prev) => !prev)
              }
            }}
            progress={index === activeIndex ? progress : 0}
            goToNext={goToNext}
            goToPrev={goToPrev}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  )
}
