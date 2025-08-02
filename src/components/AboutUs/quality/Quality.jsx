import React from "react";
import GradientTitle from "../../../Helpers/GradientTitle";

const data = [
  {
    title: "Innovation",
    desc: "We thrive on fresh ideas, driving us pioneer solutions that redefine norm and position us as a trailblazing team!",
    icon: "/aboutus/icons/i1.png",
  },
  {
    title: "Collaboration",
    desc: "We thrive on fresh ideas, driving us pioneer solutions that redefine norm and position us as a trailblazing team!",
    icon: "/aboutus/icons/i2.png",
  },
  {
    title: "Excellence",
    desc: "We thrive on fresh ideas, driving us pioneer solutions that redefine norm and position us as a trailblazing team!",
    icon: "/aboutus/icons/i3.png",
  },
  {
    title: "Empathy",
    desc: "We thrive on fresh ideas, driving us pioneer solutions that redefine norm and position us as a trailblazing team!",
    icon: "/aboutus/icons/i4.png",
  },
  {
    title: "Adaptability",
    desc: "We thrive on fresh ideas, driving us pioneer solutions that redefine norm and position us as a trailblazing team!",
    icon: "/aboutus/icons/i5.png",
  },
  {
    title: "Accountability",
    desc: "We thrive on fresh ideas, driving us pioneer solutions that redefine norm and position us as a trailblazing team!",
    icon: "/aboutus/icons/i6.png",
  },
];

export default function Quality() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-40 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center min-h-[50vh] mb-8 sm:mb-12 md:mb-20">
      <div className="w-full sm:w-[80%] flex flex-col items-center justify-center">
        <GradientTitle
          text={"The Value of Our Expert’s Involvement"}
          className={
            "bg-gradient-to-r from-blue-500 to-blue-950 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black"
          }
        />
        <p className="text-center text-sm sm:text-base md:text-lg w-full sm:w-[80%] md:w-[70%] mt-4 sm:mt-6 md:mt-8">
          We invest in brands that redefine their categories and bring
          meaningful value to people’s lives. We partner with founders driven by
          purpose and motivated to make a lasting impact.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-20 w-full max-w-7xl">
        {data.map((info, key) => (
          <div key={key} className="w-full max-w-full sm:max-w-md lg:max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4 overflow-hidden">
                <img
                  src={info?.icon}
                  alt={info?.title}
                  className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
                />
              </div>
              <h3 className="text-blue-600 text-lg sm:text-xl md:text-xl font-semibold mb-2">
                {info?.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-sm">{info?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}