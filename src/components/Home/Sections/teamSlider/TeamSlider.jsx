import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./team.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Title from "../../../../Helpers/Title";

const data = [
  {
    id: 1,
    img: "/team.png",
    name: "Rafsun Ahmed",
    position: "AI Engineer",
  },
  {
    id: 2,
    img: "/team.png",
    name: "Sara Rahman",
    position: "Machine Learning Engineer",
  },
  {
    id: 3,
    img: "/team.png",
    name: "Tom Hardy",
    position: "Data Scientist",
  },
  {
    id: 4,
    img: "/team.png",
    name: "Nina Lee",
    position: "AI Researcher",
  },
  {
    id: 5,
    img: "/team.png",
    name: "Leo Zhang",
    position: "AI Strategist",
  },
];

export default function TeamSlider() {
  return (
    <div className="team_slide flex flex-col justify-center items-center w-full py-16">
      <Title
        title={
          <>
            Meet Our <span className="text-blue-500">AI Experts</span>
          </>
        }
        desc={`Our team of AI specialists, data scientists, and engineers are passionate about creating innovative solutions.`}
      />

      <div className="w-full max-w-[1100px] ">
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="teamSwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="relative h-[600px] w-[400px] border border-gray-200 rounded-xl overflow-hidden shadow-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black to-transparent p-4 text-white text-center flex flex-col justify-end pb-10">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-blue-500">{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
