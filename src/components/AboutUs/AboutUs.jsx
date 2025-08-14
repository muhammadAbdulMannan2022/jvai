import React from "react";
import HeroReUseable from "../../Helpers/HeroReUseable";
import MomentsSwiper from "../Home/Sections/moments/Moments";
import TeamSlider from "../Home/Sections/teamSlider/TeamSlider";
import GradientTitle from "../../Helpers/GradientTitle";
import Button from "../../Helpers/Button";
import AboutDisplay from "./display/AboutDisplay";
import AboutLead from "./lead/AboutLead";
import Quality from "./quality/Quality";

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
          "We are a pioneering AI solutions agency dedicated to elevating brands in the digital era. From intelligent web platforms to strategic AI-driven applications, we empower businesses to grow through innovative and impactful digital experiences that are built for the future."
        }
        bgImag={"/aboutus/aboutus.png"}
      />

      <div className="flex px-5 md:px-40 py-16 gap-5 md:gap-10">
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
          <div className="h-full max-h-[500px] overflow-hidden rounded-2xl hidden md:block">
            <img
              src="/aboutus/aboutLead1.png"
              className="w-full rounded-2xl"
              alt=""
            />
          </div>
        </div>
        {/* Content */}
        <div className="md:w-[50%] w-full md:pe-20">
          <div className="h-[150px]">
            <GradientTitle
              text="Our Leadership in Digital Solutions"
              className="bg-gradient-to-l from-blue-500 to-purple-500 text-3xl lg:text-5xl font-bold leading-tight"
            />
          </div>
          <div className="">
            <div className="flex items-start gap-5">
              <div className="space-y-4 text-[#515151] text-lg">
                <p className="text-xl leading-8">
                  We bring intelligent digital ideas to life. As a global provider of AI-powered technology, we assist businesses in accelerating their digital transformation journey, helping them achieve greater efficiency, scalability, and a lower cost of ownership.
                </p>
                <p className="text-xl leading-8">
                  Whatever your ambition may be—from embracing new generative AI capabilities to completely reimagining how your business operates—we can help you set a new standard of excellence and unlock unprecedented levels of value.
                </p>
                <Button text="Contact Us" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 30% */}
        <div className="w-[25%] md:flex items-start hidden">
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
      <Quality />
      {/*  */}
      <TeamSlider />
      <MomentsSwiper />
    </div>
  );
}

