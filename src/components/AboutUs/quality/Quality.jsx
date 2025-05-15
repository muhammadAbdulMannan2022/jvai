import React from "react";
import GradientTitle from "../../../Helpers/GradientTitle";
import { keyframes } from "framer-motion";
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
    <div className="px-40 flex flex-col items-center justify-center mb-20">
      <div className="w-[80%] flex flex-col items-center justify-center">
        <GradientTitle
          text={"The Value of Our Expert’s Involvement"}
          className={
            "bg-gradient-to-r from-blue-500 to-blue-950 text-center text-7xl font-black"
          }
        />
        <p className="text-center text-lg w-[70%] mt-8">
          We invest in brands that redefine their categories and bring
          meaningful value to people’s lives. We partner with founders driven by
          purpose and motivated to make a lasting impact.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20">
        {data.map((info, key) => (
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={info?.icon}
                  alt={info?.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-blue-600 text-xl font-semibold mb-2">
                {info?.title}
              </h3>
              <p className="text-sm">{info?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
