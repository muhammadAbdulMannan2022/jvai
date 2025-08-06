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
        <div className="absolute top-[5%] left-2 sm:left-4 md:left-10 lg:left-20 w-20 sm:w-28 md:w-64 lg:w-[400px]">
          <img
            src="/servicesImage/left.png"
            className="w-full"
            alt="Left Decoration"
          />
        </div>

        {/* Center Content */}
        <div className="z-10 text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Intelligent  <span className="text-blue-500">Technology,</span>
            <br />
            <span className="block mt-1 sm:mt-2">Human-Centered Design</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl my-4 sm:my-6 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            At JVAI, we believe the best technology feels less artificial and more intuitive. We're passionate about using Artificial Intelligence (AI) to create smarter, more helpful digital experiences that connect with people. Whether it's a Custom Chatbot that truly understands your customers, an innovative app powered by Machine Learning, or a seamless LLM Integration, we build solutions that solve real-world problems and open up new possibilities for your business.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl my-4 sm:my-6 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            But breakthrough AI is only part of the story. Our expertise is woven into beautifully crafted digital products. Our talented teams in UI/UX, App Development, and Frontend Development work hand-in-hand to bring these intelligent ideas to life. With rigorous Quality Assurance at every step, we ensure the final product is not just powerful and innovative, but also polished, reliable, and a joy to use.
          </p>
          <Button
            text="Start a Project"
            icon={<MdRocketLaunch />}
            className="hover:cursor-pointer text-sm sm:text-base"
          />
        </div>

        {/* Right Image */}
        <div className="absolute top-[5%] right-2 sm:right-4 md:right-10 lg:right-20 w-20 sm:w-28 md:w-64 lg:w-[400px]">
          <img
            src="/servicesImage/right.png"
            className="w-full"
            alt="Right Decoration"
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