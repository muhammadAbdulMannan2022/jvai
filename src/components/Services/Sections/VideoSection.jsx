"use client"

import { useEffect, useState, useRef } from "react"

import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import VideoPlayer from "../../../Helpers/VideoPlayer"
import Button from "../../../Helpers/Button"


// data
const data = [
  {
    title: "UX UI Design",
    desc: "At JVAI, we believe everyone should have a great user experience, whether at work or in their free time. create memorable products for businesses consumers, and we provide easy-to-use design systems for smooth product..",
    services: [
      "UX UI Design",
      "UX UI Consulting",
      "UX Audit",
      "UX Research",
      "Usability Testing",
      "Wireframe & UI Prototyping",
      "Design System",
    ],
    image: "/servicesImage/ui.jpg",
    color: "#F86925",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  },
  {
    title: "Web Development",
    desc: "At JVAI, we build modern, scalable, and high-performing websites that help businesses grow online. From responsive designs to robust backend architecture, our web development services ensure your digital presence is strong, secure, and user-friendly.",
    services: [
      "Custom Website Development",
      "Responsive Web Design",
      "E-commerce Development",
      "Content Management Systems (CMS)",
      "API Integration",
      "Performance Optimization",
      "Maintenance & Support",
    ],
    image: "/servicesImage/webdev.jpg",
    color: "#1E40AF", // Tailwind: blue-800
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  },
  {
    title: "Mobile App Design",
    desc: "We specialize in creating intuitive and visually stunning mobile app interfaces. Our design approach focuses on enhancing user interaction while aligning with business goals to deliver seamless mobile experiences across iOS and Android platforms.",
    services: [
      "iOS & Android App Design",
      "Mobile UX/UI Strategy",
      "Wireframing & Prototyping",
      "Design Systems for Mobile",
      "Cross-Platform Design",
      "Usability Testing",
      "App Redesign Services",
    ],
    image: "/servicesImage/mobile.jpg",
    color: "#0EA5E9", // Tailwind: sky-500
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },
  {
    title: "Graphics Design",
    desc: "Our graphic design team crafts compelling visuals that capture attention and communicate brand stories. From marketing materials to brand identity, we deliver designs that resonate with your audience and strengthen your brand presence.",
    services: [
      "Brand Identity Design",
      "Social Media Graphics",
      "Marketing Collateral",
      "Logo & Icon Design",
      "Infographic Design",
      "Packaging Design",
      "Presentation Design",
    ],
    image: "/servicesImage/graphic.jpg",
    color: "#DB2777", // Tailwind: pink-600
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    title: "Digital Marketing",
    desc: "We help brands connect with their audience through data-driven digital marketing strategies. From SEO to social media and paid advertising, our tailored campaigns boost visibility, engagement, and conversions across all digital channels.",
    services: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "Pay-Per-Click Advertising (PPC)",
      "Content Marketing",
      "Email Marketing",
      "Conversion Rate Optimization",
      "Analytics & Reporting",
    ],
    image: "/servicesImage/digital.jpg",
    color: "#16A34A", // Tailwind: green-600
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
]

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
              {" "}
              {/* Changed overflow-y-auto to be responsive */}
              <div className="p-4 sm:p-6 text-white relative z-10 flex flex-col md:flex-row gap-4 md:gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl lg:text-5xl font-bold mb-2" style={{ color: color }}>
                    {title}
                  </h2>
                  <p className="text-sm lg:text-[16px] my-8">{desc}</p>
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
            {/* Inactive state content - Mobile (horizontal) */}
            <div className="flex items-center justify-center h-full px-4 md:hidden">
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="font-medium tracking-wide text-white" style={{ color: color }}>
                  {title}
                </span>
              </div>
            </div>

            {/* Inactive state content - Desktop (vertical) */}
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

            {/* Play button for inactive state (common for both mobile/desktop) */}
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

  const goToIndex = (index) => {
    setActiveIndex(index)
    setProgress(0)
    progressRef.current = 0
    setIsPlaying(false)
  }

  const goToNext = () => {
    goToIndex((activeIndex + 1) % data.length)
  }

  const goToPrev = () => {
    goToIndex((activeIndex - 1 + data.length) % data.length)
  }

  // PROGRESS TIMER EFFECT
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    // Only start interval if not playing (i.e., auto-advance)
    if (!isPlaying) {
      intervalRef.current = setInterval(() => {
        progressRef.current += 2
        if (progressRef.current >= 100) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          progressRef.current = 0
          setProgress(0)
          setIsPlaying(false) // Reset playing state for next card
          setActiveIndex((prev) => (prev + 1) % data.length)
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
  }, [activeIndex, isPlaying]) // Re-run when activeIndex or isPlaying changes

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center px-5 md:px-24 py-40 overflow-hidden relative">
      <div className="flex flex-col md:flex-row w-full gap-4 mx-5 md:mx-10">
        {data.map((item, index) => (
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
