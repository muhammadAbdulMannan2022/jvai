import React, { useState } from "react";
import Button from "../../Helpers/Button";
import { MdRocketLaunch } from "react-icons/md";
import VideoPlayer from "../../Helpers/VideoPlayer";
import VideoSection from "./Sections/VideoSection";

export default function Services() {
  return (
    <section>
      {/* hero */}
      <div className="relative h-[80vh] w-full flex items-center justify-center bg-radial from-[#445da8] to-[#0f1322] text-white px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Left Image */}
        <div className="absolute top-[10%] left-4 md:left-10 lg:left-20 w-28 md:w-64 lg:w-[400px]">
          <img
            src="/servicesImage/left.png"
            className="w-full"
            alt="Left Decoration"
          />
        </div>

        {/* Center Content */}
        <div className="z-10 text-center max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Innovative <span className="text-blue-500">Product Design</span>
            <br />
            <span className="block mt-2">with Strategic Consulting</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl my-6 max-w-3xl mx-auto">
            We are a global digital product design agency empowering brands to
            build high-quality SaaS platforms, MVPs, software, mobile apps, and
            websites. We focus on creating user-friendly, visually compelling
            designs that deliver seamless functionality. Partner with us to
            elevate your business through expert-driven digital product
            solutions.
          </p>
          <Button
            text="Start a Project"
            icon={<MdRocketLaunch />}
            className="hover:cursor-pointer"
          />
        </div>

        {/* Right Image */}
        <div className="absolute top-[10%] right-4 md:right-10 lg:right-20 w-28 md:w-64 lg:w-[400px]">
          <img
            src="/servicesImage/right.png"
            className="w-full"
            alt="Right Decoration"
          />
        </div>
      </div>

      {/*  */}
      <VideoSection />
    </section>
  );
}
{
  /* <div className="w-[600px] h-[340px] mx-auto mt-10">
        <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" />
      </div> */
}
