import React from "react";
import Button from "../../../Helpers/Button";
import { MdRocketLaunch } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="text-[#F3F3F3] bg-black/30 px-4 sm:px-8 md:px-12 lg:px-16 w-full mx-auto flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:h-full">
      <div className="max-w-7xl w-full mx-auto text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          We're JVAI-
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-1 sm:mt-2 mb-4 sm:mb-6">
          <span className="text-blue-500">Empowering</span>
          <br />
          Innovation with AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light mb-4 sm:mb-6 max-w-xl">
          Partner with us to design, build, and scale cutting-edge AI solutions
          tailored to your business needs.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6">
          <Button
            className="cursor-pointer w-full sm:w-auto rounded-md"
            text="Start a Project"
            icon={<MdRocketLaunch />}
            aria-label="Start a project with JVAI"
          />
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 p-1.5 bg-white rounded-full flex items-center justify-center">
              <img src="/logoOnly.png" alt="JVAI logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm">4.8</span>
                <div className="flex gap-0.5 text-[#F4C700]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="text-xs sm:text-sm">100+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}