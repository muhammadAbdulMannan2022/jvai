import React, { useEffect, useState, useRef } from "react";
import VideoPlayer from "../../../Helpers/VideoPlayer";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Button from "../../../Helpers/Button";
import { FaCircle, FaPlay } from "react-icons/fa";

// Your data
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
];
// INDIVIDUAL CARD COMPONENT
const VideoCard = ({
  data,
  isActive,
  isPlaying,
  onToggle,
  progress,
  goToNext,
  goToPrev,
}) => {
  const { title, desc, videoSrc, image, services, color } = data;

  return (
    <div
      className={`transition-all duration-500 overflow-hidden relative rounded-lg shadow-md bg-cover bg-center`}
      style={{
        width: isActive ? "100%" : "100px",
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-black/60 px-[10%] backdrop-blur-sm border h-full">
        <div
          className={`w-full h-[10%] relative flex items-center justify-end py-4 ${
            !isActive && "h-full"
          }`}
        >
          {isActive ? (
            <div
              className={`w-full flex items-center  gap-4 ${
                !isActive ? "rotate-90 justify-center" : "justify-end"
              }`}
            >
              <span
                className="w-4 h-4 rounded-full block"
                style={{ backgroundColor: color }}
              />
              <span
                className={`font-bold ${!isActive && "hidden"}`}
                style={{ color: color }}
              >
                {title}
              </span>
            </div>
          ) : (
            <div className="w-16 h-full flex flex-col items-center gap-4 overflow-hidden">
              {/* Green circle icon */}
              <div className="">
                <FaCircle
                  style={{ color: color }}
                  className={`w-[30px] h-[30px] `}
                />
              </div>

              {/* Vertical text using Tailwind */}
              <div className="flex flex-col items-center">
                <div
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    letterSpacing: "0.1em",
                    color: color,
                  }}
                  className={` font-medium tracking-wide`}
                >
                  {title}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-[80%]">
          {isActive && (
            <div className=" p-6 text-white relative z-10 h-[80vh] flex gap-10 items-center">
              <div className="w-1/2">
                <h2
                  className="text-2xl lg:text-5xl font-bold mb-2"
                  style={{ color: color }}
                >
                  {title}
                </h2>
                <p className="text-sm lg:text-[16px] my-8">{desc}</p>
                <ul className="list-decimal list-inside space-y-1 text-sm lg:text-lg font-bold mb-6">
                  {services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
                <Button text={"Contact Us"} />
              </div>

              <div className="w-1/2 h-[40%] max-w-md flex items-center justify-center">
                <VideoPlayer
                  src={videoSrc}
                  isPlaying={isPlaying}
                  onToggle={onToggle}
                />
              </div>
            </div>
          )}
        </div>
        {isActive && (
          <>
            <div className="w-full h-[10%] flex relative">
              {/* Progress Bar */}
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

              {/* Controls Inside Card */}
              <div className="absolute bottom-3 right-0 flex  justify-end items- w-fit px-4 gap-4 z-50">
                <button
                  onClick={goToPrev}
                  className="bg-white/30 hover:bg-white/60 hover:cursor-pointer text-black p-2 rounded-full"
                >
                  <MdOutlineKeyboardArrowLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white/30 hover:cursor-pointer hover:bg-white/60 text-black p-2 rounded-full"
                >
                  <MdOutlineKeyboardArrowRight size={24} />
                </button>
              </div>
            </div>
          </>
        )}
        {!isActive && (
          <div className="absolute bottom-3 w-full flex justify-center">
            {/* terget */}
            <div className="w-[40px] h-[40px] bg-white/50 hover:cursor-pointer hover:bg-white/60 text-white flex items-center justify-center rounded-full">
              <FaPlay />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// MAIN SECTION
export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef(null);
  const progressRef = useRef(0);

  const goToIndex = (index) => {
    setActiveIndex(index);
    setProgress(0);
    progressRef.current = 0;
    setIsPlaying(false);
  };

  const goToNext = () => {
    goToIndex((activeIndex + 1) % data.length);
  };

  const goToPrev = () => {
    goToIndex((activeIndex - 1 + data.length) % data.length);
  };

  // PROGRESS TIMER EFFECT
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isPlaying) {
      intervalRef.current = setInterval(() => {
        progressRef.current += 2;

        if (progressRef.current >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          progressRef.current = 0;

          setProgress(0);
          setIsPlaying(false);
          setActiveIndex((prev) => (prev + 1) % data.length);
        } else {
          setProgress(progressRef.current);
        }
      }, 100);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [activeIndex, isPlaying]);

  return (
    <div className="flex gap-4 items-stretch px-24 py-40 overflow-hidden relative">
      <div className="flex w-full gap-4 ml-10 mr-10">
        {data.map((item, index) => (
          <VideoCard
            key={index}
            data={item}
            isActive={index === activeIndex}
            isPlaying={index === activeIndex && isPlaying}
            onToggle={() => {
              if (index === activeIndex) {
                setIsPlaying((prev) => !prev);
              }
            }}
            progress={index === activeIndex ? progress : 0}
            goToNext={goToNext}
            goToPrev={goToPrev}
          />
        ))}
      </div>
    </div>
  );
}
