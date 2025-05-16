import React from "react";

export default function HeroReUseable({
  bgImag,
  gradient = "from-blue-950/80 to-purple-950/80",
  title = "",
  pageTitle = "",
  desc = "",
  height = "h-[80vh]",
}) {
  return (
    <div
      className={`relative w-full ${height} bg-cover flex items-center justify-center bg-no-repeat bg-top`}
      style={{ backgroundImage: `url(${bgImag})` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white max-w-7xl">
        <h1 className="text-3xl">{pageTitle}</h1>
        <h1 className="text-7xl font-bold my-5 leading-24">{title}</h1>
        <p className="px-5 text-2xl font-light">{desc}</p>
      </div>
    </div>
  );
}
