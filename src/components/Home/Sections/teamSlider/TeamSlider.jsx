const data = [
  {
    id: 1,
    img: "/team.png",
    name: "Rafsun Ahmed",
    position: "Ai Engineer",
  },
  {
    id: 1,
    img: "/team.png",
    name: "Rafsun Ahmed",
    position: "Ai Engineer",
  },
  {
    id: 1,
    img: "/team.png",
    name: "Rafsun Ahmed",
    position: "Ai Engineer",
  },
];

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./team.css";
import Title from "../../../../Helpers/Title";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function TeamSlider() {
  return (
    <div className="team_slide flex flex-col justify-center items-center w-full">
      <Title
        title={
          <>
            Meet Our <span className="text-blue-500">AI Experts</span>
          </>
        }
        desc={`Our team of AI specialists, data scientists, and engineers are passionate about creating innovative solutions.`}
      />
      <div className="w-[900px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Limit to 3 visible slides
          spaceBetween={30} // Optional: spacing between slides
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {Array(9)
            .fill(null)
            .map((_, i) => (
              <SwiperSlide key={i} className="relative overflow-hidden">
                <div className="w-full h-full overflow-hidden relative flex items-center justify-center">
                  <img
                    src={`/team.png`}
                    alt={`Nature ${i + 1}`}
                    className="w-[260px] object-cover absolute top-0" // Ensure consistent size
                  />
                </div>
                <div className="w-full h-1/2 bg-gradient-to-t from-black via-black to-transparent absolute bottom-0">
                  <div className="w-full h-full relative">
                    <h1 className="absolute bottom-16 text-center w-full text-2xl text-blue-500 font-bold">
                      Rafsun Ahmed
                    </h1>
                    <p className="absolute bottom-10 text-center w-full text-lg text-white font-bold">
                      Ai Engineer
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      ;
    </div>
  );
}
