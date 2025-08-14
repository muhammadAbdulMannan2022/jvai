import React from "react";
import Button from "../../Helpers/Button";
import { MdRocketLaunch } from "react-icons/md";
import VideoSection from "./Sections/VideoSection";
import Testimonials from "../Home/Sections/Testimonials/Testimonials";
import TrustSection from "../Home/Sections/TrustSection";

export default function Services() {
  return (
    <section>
      {/* hero */}
      <div className="relative h-[60vh] sm:h-[100vh] w-full flex items-center justify-center bg-radial from-[#445da8] to-[#0f1322] text-white px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">

        {/* Left Image */}
        <div className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center">
          <img
            src="/servicesImage/left.png"
            alt="Left Decoration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center">
          <img
            src="/servicesImage/right.png"
            alt="Right Decoration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-5"></div>

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Intelligent <span className="text-blue-500">Technology,</span>
            <br />
            <span className="block mt-1 sm:mt-2">Human-Centered Design</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl my-4 sm:my-6 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            At JVAI, we believe the best technology feels less artificial and more intuitive...
          </p>
          <Button
            text="Start a Project"
            icon={<MdRocketLaunch />}
            className="hover:cursor-pointer text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Other Sections */}
      <VideoSection />
      <TrustSection />
      <Testimonials />
    </section>


  );
}