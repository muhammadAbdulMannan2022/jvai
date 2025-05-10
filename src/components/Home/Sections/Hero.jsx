import React from "react";
import Button from "../../../Helpers/Button";
import { MdRocketLaunch } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="text-[#F3F3F3] px-24 w-[70%] md:w-1/2 h-full flex flex-col justify-center">
      <h1 className="text-[28px]">We're JVAI-</h1>
      <h1 className="text-6xl font-bold mt-4 mb-10">
        <span className="text-blue-500">Empowering</span>
        <br />
        Innovation with AI
      </h1>
      <p className="text-[24px] text-xs font-[100] mb-6">
        Partner with us to design, build, and scale cutting-edge AI solutions
        tailored to your business needs.
      </p>
      <div className="flex justify-start gap-8 mt-5">
        <div>
          <Button
            className={`cursor-pointer`}
            text={"Start a Project"}
            icon={<MdRocketLaunch />}
          />
        </div>
        <div className="flex gap-4">
          <div className="w-[55px] h-[50px] p-2 bg-white rounded-full flex items-center justify-center">
            <img src="/logoOnly.png" alt="JVAI" className="h-full" />
          </div>
          <div>
            <div className="flex gap-3 items-center justify-start">
              <span>4.8</span>
              <div className="flex gap-0.5 text-[#F4C700]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <p>100+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
