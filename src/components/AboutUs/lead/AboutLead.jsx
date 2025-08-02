import React, { useState, useEffect } from "react";
import GradientTitle from "../../../Helpers/GradientTitle";
import VideoPlayer from "../../../Helpers/VideoPlayer";
import { useInView } from "react-intersection-observer";

const data = [
  {
    title: "Discovery & Assessment",
    desc: "Our experts design a custom AI solution architecture tailored to your specific challenges.",
    icon: "/aboutus/icons/1.png",
  },
  {
    title: "Solution Design",
    desc: "Our experts design a custom AI solution architecture tailored to your specific challenges.",
    icon: "/aboutus/icons/2.png",
  },
  {
    title: "Development & Training",
    desc: "Our experts design a custom AI solution architecture tailored to your specific challenges.",
    icon: "/aboutus/icons/3.png",
  },
  {
    title: "Development & Optimization",
    desc: "Our experts design a custom AI solution architecture tailored to your specific challenges.",
    icon: "/aboutus/icons/4.png",
  },
];

export default function AboutLead() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Track visibility
  const { ref, inView } = useInView({ threshold: 0.3 });

  // Stop video when not in view
  useEffect(() => {
    if (!inView) {
      setIsPlaying(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="px-4 sm:px-8 md:px-16 lg:px-40 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center min-h-[50vh]"
    >
      <div className="flex items-center justify-center flex-col relative h-[60px] sm:h-[80px] md:h-[100px] w-full max-w-7xl">
        <GradientTitle
          text={`We are leader in digital solutions`}
          className={`bg-gradient-to-l from-blue-500 to-blue-900 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold pb-4 sm:pb-5 md:pb-[20px]`}
        />
        <img
          className="absolute top-0 right-0 h-[60px] sm:h-[80px] md:h-[100px] w-auto max-w-[100px] sm:max-w-[150px] md:max-w-[200px]"
          src="/aboutus/aboutS2Tb.png"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl mt-8 sm:mt-12 md:mt-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8 ps-0 md:ps-10 lg:ps-40">
          {/* Video */}
          <div className="w-full h-auto max-h-[40vh] sm:max-h-[50vh]">
            <VideoPlayer
              src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
              onToggle={() => setIsPlaying(!isPlaying)}
              isPlaying={isPlaying}
            />
          </div>
          {/* Images */}
          <div className="flex gap-2 w-full h-auto">
            <div className="w-1/2 rounded-xl overflow-hidden">
              <img
                src="/aboutus/lead2.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-1/2 rounded-xl overflow-hidden">
              <img
                src="/aboutus/lead1.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 pe-0 md:pe-10 lg:pe-36">
          <div className="border-b border-blue-200 pb-8 sm:pb-12 md:pb-16">
            <p className="text-justify text-base sm:text-lg md:text-lg text-[#515151] mb-4 sm:mb-6 md:mb-8">
              We’re a team of expert designers, web developers and marketers
              who’ve been delivering digital success for more than a decade. We
              excel at marketing websites, innovative web apps and mobile
              applications.
            </p>
            <div className="flex items-center h-[60px] sm:h-[80px] md:h-[100px] gap-4 sm:gap-6 md:gap-10">
              <img src="/arrowG.png" alt="" className="h-[60%] sm:h-[70%] md:h-[80%]" />
              <GradientTitle
                text={"Creative & digital ideas"}
                className="bg-gradient-to-l from-blue-500 to-purple-400 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none pb-2 sm:pb-3 md:pb-4"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            {data.map((info, key) => (
              <div key={key} className="flex gap-4 sm:gap-5 md:gap-7">
                <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[60px] p-2 sm:p-3 bg-blue-100 rounded-xl flex items-center justify-center">
                  <img src={info?.icon} className="w-full h-full object-contain" alt="" />
                </div>
                <div>
                  <GradientTitle
                    text={info?.title}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3"
                  />
                  <span className="text-base sm:text-lg md:text-lg">{info?.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}