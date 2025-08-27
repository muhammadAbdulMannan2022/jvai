import React from "react";

export default function HeroReUseable({
  bgImag,
  gradient = "from-blue-950/80 to-purple-950/80",
  title = "",
  pageTitle = "",
  desc = "",
  height = "h-screen",
}) {
  return (
    <div
      className={`relative w-full ${height} bg-cover bg-no-repeat bg-center flex items-center justify-center overflow-x-hidden`}
      style={{ backgroundImage: `url(${bgImag})` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-16 text-white w-full max-w-6xl">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{pageTitle}</h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold my-2 sm:my-3 md:my-4 lg:my-5 leading-tight">{title}</h1>
        <p className="px-2 sm:px-4 md:px-5 text-sm sm:text-base md:text-lg lg:text-2xl font-light">{desc}</p>
      </div>
    </div>
  );
}