import React, { useState, useEffect } from "react";
import GradientTitle from "../../../Helpers/GradientTitle";
import VideoPlayer from "../../../Helpers/VideoPlayer";
import { useInView } from "react-intersection-observer";

const data = [
  {
    title: "Discovery & Assessment",
    desc: "Our experts begin by thoroughly analyzing your unique challenges and objectives. We identify opportunities for AI integration and design a custom solution architecture tailored to your specific needs, ensuring a strategic fit and maximum ROI.",
    icon: "/aboutus/icons/1.png",
  },
  {
    title: "Solution Design & Implementation",
    desc: "We design and develop a robust, scalable, and secure AI solution. Our team handles the end-to-end implementation, from model development and data integration to creating an intuitive user interface, turning your strategic vision into a market-ready product.",
    icon: "/aboutus/icons/2.png",
  },
  {
    title: "Discovery & Assessment",
    desc: "Our experts design a custom AI solution architecture tailored to your specific challenges. We dive deep to understand your goals, ensuring our strategy aligns perfectly with your vision for success.",
    icon: "/aboutus/icons/3.png",
  },
  {
    title: "Solution Design",
    desc: "Our experts design a custom AI solution architecture tailored to your specific challenges. We craft a detailed blueprint for your project, focusing on creating a scalable, secure, and user-friendly product.",
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
          text={`Creative & intelligent ideas`}
          className={`bg-gradient-to-l from-blue-500 to-blue-900 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold pb-4 sm:pb-5 md:pb-[20px]`}
        />
        <img
          loading="lazy"
          className="absolute top-0 right-0 h-[60px] sm:h-[80px] md:h-[100px] w-auto max-w-[100px] sm:max-w-[150px] md:max-w-[200px]"
          src="/aboutus/aboutS2Tb.png"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl mt-8 sm:mt-12 md:mt-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-2 sm:gap-2 md:gap-4 ps-2">
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
                loading="lazy"
                src="/aboutus/lead2.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-1/2 rounded-xl overflow-hidden">
              <img
                loading="lazy"
                src="/aboutus/lead1.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

          </div>
          <div className="w-full rounded-xl h-[350px] overflow-hidden">
            <img
              loading="lazy"
              src="/aboutus/lead2.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 pe-2">
          <div className="border-b border-blue-200 pb-8 sm:pb-12 md:pb-16">
            <p className="text-justify text-base sm:text-lg md:text-lg text-[#515151] mb-4 sm:mb-6 md:mb-8">
              We are a team of expert AI specialists, developers, and strategists who have been delivering digital success for more than a decade. We excel at creating intelligent websites, innovative web apps, and powerful mobile applications that deliver results.
            </p>
            <div className="flex items-center h-[60px] sm:h-[80px] md:h-[100px] gap-4 sm:gap-6 md:gap-10">
              <img loading="lazy" src="/arrowG.png" alt="" className="h-[60%] sm:h-[70%] md:h-[80%]" />
              <GradientTitle
                text={"Creative & digital ideas"}
                className="bg-gradient-to-l from-blue-500 to-purple-400 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none pb-2 sm:pb-3 md:pb-4"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            {data.map((info, key) => (
              <div key={key} className="flex gap-4 sm:gap-5 md:gap-7">
                {/* <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[60px] p-2 bg-blue-100 rounded-xl flex items-center justify-center"> */}

                <img
                  loading="lazy"
                  src={info?.icon}
                  alt=""
                  className="h-[50px] w-[50px] "
                />

                {/* </div> */}
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