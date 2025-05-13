import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonials.css";

import Title from "../../../../Helpers/Title";

const testimonials = [
  {
    id: 1,
    name: "Rafsun Ahmed",
    title: "CEO",
    image: "/team.png",
    quote: "Leading with vision and purpose.",
    location: "New York",
    logo: "/logo.png",
  },
  {
    id: 2,
    name: "Sania Ahmed",
    title: "CTO",
    image: "/team.png",
    quote: "Innovation is the key to success.",
    location: "San Francisco",
    logo: "/logo.png",
  },
  {
    id: 3,
    name: "John Doe",
    title: "COO",
    image: "/team.png",
    quote: "Efficient operations lead to excellence.",
    location: "Los Angeles",
    logo: "/logo.png",
  },
  {
    id: 4,
    name: "Jane Smith",
    title: "CFO",
    image: "/team.png",
    quote: "Smart financial strategies are the foundation of growth.",
    location: "Chicago",
    logo: "/logo.png",
  },
  {
    id: 5,
    name: "Robert Brown",
    title: "CMO",
    image: "/team.png",
    quote: "Marketing drives engagement and loyalty.",
    location: "Miami",
    logo: "/logo.png",
  },
];

export default function Testimonials() {
  return (
    <div className="flower-slider bg-[#F3F5F9]">
      <Title
        title={
          <>
            <span className="text-blue-500">Our Clients</span> Are Proud to
            Recommend Us.
          </>
        }
        desc={`Trusted by clients for delivering results that speak for themselves.`}
      />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
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
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="card bg-white flex flex-row-reverse rounded-xl shadow-lg p-4 w-[500px] h-[400px] text-left space-x-4 space-x-reverse">
              <div className="w-1/2">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <div className="w-1/2 flex flex-col justify-between space-y-2">
                <div className="h-6 mb-2">
                  <img
                    src={testimonial.logo}
                    alt="Company logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-2">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.title}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
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
