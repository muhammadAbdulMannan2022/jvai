import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./team.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

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

export default function TeamSlider() {
  return (
    <div className="flower-slider">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".flower-slider .swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".flower-slider .swiper-button-next",
          prevEl: ".flower-slider .swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {data.map((member, index) => (
          <SwiperSlide
            key={index}
            className="transition-all duration-500 ease-in-out absolute"
          >
            <div className="bg-white flex flex-row-reverse rounded-xl shadow-lg w-[320px] md:w-[380px] h-[500px] text-left space-x-4 space-x-reverse">
              <div className="relative w-full h-full">
                <div className="absolute h-full pt-[80px] w-full bottom-0 left-0 px-6 overflow-hidden">
                  <img src={member.img} alt="fafsun" />
                </div>
                <div className="absolute h-[50%] w-full bg-gradient-to-t from-black via-black to-transparent bottom-0 left-0"></div>
                <div className="absolute bottom-0  w-full flex flex-col items-center justify-center py-3">
                  <h1 className="text-white font-bold text-2xl">
                    {member.name}
                  </h1>
                  <h1 className="text-blue-500 text-xl ">{member.position}</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
