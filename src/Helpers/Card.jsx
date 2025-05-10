import React from "react";

export default function Card({ service }) {
  const { title, description, icon } = service;

  return (
    <div className="bg-[#e6edff] w-[300px] flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer">
      {/* Top Circular Header */}
      <div className="bg-[#031f6b] relative flex justify-center items-center aspect-square rounded-b-full mx-auto w-full text-white lg:-translate-y-10">
        <div className="flex flex-col items-center text-center gap-2 z-10 px-2 pt-6">
          <div className="text-3xl">{icon}</div>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <img
          src="/batch.png"
          className="absolute left-0 top-1/3 lg:top-[50%] w-8"
          alt="left badge"
        />
        <img
          src="/batch.png"
          className="absolute right-0 top-1/3 lg:top-[50%] w-8"
          alt="right badge"
        />
      </div>

      {/* Description */}
      <div className="p-4 text-center flex-1 z-10">
        <p className="text-gray-700 text-sm mt-5 lg:mt-0 lg:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
}
