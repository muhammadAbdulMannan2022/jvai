import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./team.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Title from "../../../../Helpers/Title";
import { baseUri, useGetExpertsQuery } from "../../../../redux/features/apiSlice";

export default function TeamSlider() {
  const { data, isLoading, isError } = useGetExpertsQuery();

  if (isLoading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  if (isError || !data?.Data) {
    return (
      <div className="text-center py-16 text-red-500">
        Failed to load team data.
      </div>
    );
  }

  return (
    <div className="team_slide flex flex-col justify-center items-center w-full py-16">
      <Title
        title={
          <>
            Meet Our <span className="text-blue-500">Experts</span>
          </>
        }
        desc={`Our team of AI specialists, data scientists, and engineers are passionate about creating innovative solutions.`}
      />

      <div className="w-full max-w-[1200px]">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]} // ✅ added Autoplay
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={0}
          autoplay={{
            delay: 3000, // ✅ change every 3s
            disableOnInteraction: false, // ✅ keep autoplay after interaction
            pauseOnMouseEnter: true,
          }}
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
          {data.Data.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="relative h-[600px] w-[400px] border border-gray-200 rounded-xl overflow-hidden shadow-xl">
                <img
                  src={baseUri + member.expert_picture}
                  alt={member.expert_name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black to-transparent p-4 text-white text-center flex flex-col justify-end pb-10">
                  <h3 className="text-xl font-bold">{member.expert_name}</h3>
                  <p className="text-sm text-blue-500">{member.expert_designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
