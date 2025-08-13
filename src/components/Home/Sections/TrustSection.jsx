import React, { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";

// Sample 20 logos (replace with actual logo URLs)
const logos = [
  "/logo/AiTAiN.Ai logo-01 1.png",
  "/logo/boutique.png",
  "/logo/cifa.gif",
  "/logo/cyrus.svg",
  "/logo/For delivery-01 1.png",
  "/logo/gameplan.webp",
  "/logo/image (2).png",
  "/logo/nutraAi.png",
  "/logo/valr.png",
  "/logo/fondify.png",
  "/logo/ramis.png",
  "/logo/calz.png"
];

const LogoMarquee = ({ direction = "left" }) => {
  const [isMount, setIsMount] = useState(false)
  const repeated = [...logos, ...logos];

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;

  return (
    <div className="marquee-fade">
      <Marquee
        direction={direction}
        speed={50}
        gradient={false}
        pauseOnHover={false}
      >
        {repeated.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            className="mx-8 w-28 h-14 object-contain transition duration-300"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default function TrustSection() {
  return (
    <div className="bg-white py-12 px-5 md:px-24">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-8 text-gray-900">
        TRUSTED BY <span className="text-blue-600">100+</span> GLOBAL BRANDS
      </h1>

      <div className="mb-6">
        <LogoMarquee direction="left" />
      </div>
      {/* <div>
        <LogoMarquee direction="right" />
      </div> */}
    </div>
  );
}
