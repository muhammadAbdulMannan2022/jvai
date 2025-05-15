import React from "react";
import HeroReUseable from "../../Helpers/HeroReUseable";
import MomentsSwiper from "../Home/Sections/moments/Moments";
import TeamSlider from "../Home/Sections/teamSlider/TeamSlider";
import GradientTitle from "../../Helpers/GradientTitle";
import Button from "../../Helpers/Button";
import AboutDisplay from "./display/AboutDisplay";
import AboutLead from "./lead/AboutLead";

export default function AboutUs() {
  return (
    <div className="text-[#515151]">
      <HeroReUseable
        pageTitle={"About Us"}
        title={
          <>
            We are <span className="text-blue-500">JVAI</span>
          </>
        }
        desc={
          "Javai is a digital agency specializing in creative solutions that elevate brands online. From web design and development to digital marketing and strategy, we help businesses grow through innovative and impactful digital experiences."
        }
        bgImag={"/aboutus/aboutus.png"}
      />

      <div className="flex px-40 py-16 gap-5 md:gap-10">
        {/* Left Column - 70% */}
        <div className="w-[25%] flex flex-col items-end">
          {/* Arrow */}
          <div className="h-[150px]">
            <img
              src="/arrowG.png"
              alt="Arrow"
              className="h-full max-h-16 mt-2"
            />
          </div>
          <div className="h-full max-h-[500px] overflow-hidden rounded-2xl">
            <img
              src="/aboutus/aboutLead1.png"
              className="w-full rounded-2xl"
              alt=""
            />
          </div>
        </div>
        {/* Content */}
        <div className="w-[50%] pe-20">
          <div className="h-[150px]">
            <GradientTitle
              text="We are leader in digital solutions"
              className="bg-gradient-to-l from-blue-500 to-purple-500 text-3xl lg:text-5xl font-bold leading-tight"
            />
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <div className="space-y-4 text-[#515151] text-lg">
                <p className="text-xl leading-8">
                  Bring new digital ideas to life. We are a global technology
                  provider who assists businesses to accelerate their digital
                  transformation journey while achieving efficiency,
                  scalability, and lower cost of ownership.
                </p>
                <p className="text-xl leading-8">
                  Whatever your ambition may be—from embracing new digital
                  capabilities to reimagining how your business operates—we can
                  help you set a new standard of excellence and achieve
                  unprecedented levels of value.
                </p>
                <Button text="Contact Us" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 30% */}
        <div className="w-[25%] flex items-start">
          <div className="h-full max-h-[500px] overflow-hidden rounded-2xl">
            <img
              src="/aboutus/aboutLead2.png"
              className="w-full rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*  */}
      <AboutDisplay />
      {/*  */}
      <AboutLead />
      {/*  */}
      {/*  */}
      <TeamSlider />
      <MomentsSwiper />
    </div>
  );
}
