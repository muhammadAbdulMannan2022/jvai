import React, { useEffect, useState, useRef } from "react";
import VideoPlayer from "../../../Helpers/VideoPlayer";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

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
const VideoCard = ({ data, isActive, isPlaying, onToggle, progress }) => {
  const { title, desc, videoSrc, image, services, color } = data;

  return (
    <div
      className={`transition-all duration-500 overflow-hidden relative rounded-lg shadow-md bg-cover bg-center`}
      style={{
        width: isActive ? "100%" : "100px",
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className={`absolute top-4 left-4 z-20  border ${
          !isActive && "h-full flex flex-col items-center"
        }`}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>

      {isActive && (
        <div className="bg-black/60 backdrop-blur-sm p-6 text-white relative z-10 h-full">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm mb-4">{desc}</p>
          <ul className="list-decimal list-inside space-y-1 text-sm mb-6">
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>

          <div className="w-full max-w-md">
            <VideoPlayer
              src={videoSrc}
              isPlaying={isPlaying}
              onToggle={onToggle}
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="w-[70%] h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.1s linear",
                }}
              />
              <div>
                <div>
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
      <button
        onClick={goToPrev}
        className="absolute left-0 z-30 bg-white/20 hover:bg-white/40 p-2 rounded-full"
      >
        <MdOutlineKeyboardArrowLeft size={24} />
      </button>

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
          />
        ))}
      </div>

      <button
        onClick={goToNext}
        className="absolute right-0 z-30 bg-white/20 hover:bg-white/40 p-2 rounded-full"
      >
        <MdOutlineKeyboardArrowRight size={24} />
      </button>
    </div>
  );
}
