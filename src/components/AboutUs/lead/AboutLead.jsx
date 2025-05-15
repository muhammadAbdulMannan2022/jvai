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
      className="px-40 py-16 flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center flex-col relative h-[100px]">
        <GradientTitle
          text={`We are leader in digital solutions`}
          className={`bg-gradient-to-l from-blue-500 to-blue-900 text-7xl font-bold pb-[20px]`}
        />
        <img
          className="absolute top-0 right-0 h-[100px]"
          src="/aboutus/aboutS2Tb.png"
          alt=""
        />
      </div>

      <div className="flex gap-16 h-full max-h-[90vh] mt-16">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col gap-2 ps-10 lg:ps-40">
          {/* Video */}
          <div className="h-1/2">
            <VideoPlayer
              src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
              onToggle={() => setIsPlaying(!isPlaying)}
              isPlaying={isPlaying}
            />
          </div>
          {/* Images */}
          <div className="flex gap-2 w-full h-1/2">
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
        <div className="w-1/2 flex flex-col gap-20 pe-20 lg:pe-36">
          <div className="border-b border-blue-200 pb-16">
            <p className="text-justify text-lg mb-8 text-[#515151]">
              We’re a team of expert designers, web developers and marketers
              who’ve been delivering digital success for more than a decade. We
              excel at marketing websites, innovative web apps and mobile
              applications.
            </p>
            <div className="flex items-center h-[100px] max-h-[150px] gap-10">
              <img src="/arrowG.png" alt="" className="h-[80%]" />
              <GradientTitle
                text={"Creative & digital ideas"}
                className="bg-gradient-to-l from-blue-500 to-purple-400 text-6xl font-bold leading-none pb-4"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {data.map((info, key) => (
              <div key={key} className="flex gap-7">
                <div className="w-[70px] h-[60px] p-3 bg-blue-100 rounded-xl flex items-center justify-center">
                  <img src={info?.icon} className="w-full h-full" alt="" />
                </div>
                <div>
                  <GradientTitle
                    text={info?.title}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-3xl font-bold mb-3"
                  />
                  <span className="text-lg">{info?.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
