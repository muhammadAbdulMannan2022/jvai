import React from "react";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";

export default function Home() {
  return (
    <div className="h-screen">
      {/* header */}
      <div className="bg-blue-950 bg-[url('/HeroBg.png')] bg-cover bg-no-repeat bg-center h-full">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
