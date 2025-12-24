import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Calendar } from "lucide-react";
import Title from "../../../../Helpers/Title";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./moments.css";
import {
  baseUri,
  useGetMomentsInJvaiQuery,
} from "../../../../redux/features/apiSlice";

export default function MomentsSwiper() {
  const { data, isLoading } = useGetMomentsInJvaiQuery();
  const renderImages = (images) => {
    const count = images.length;

    if (count === 1) {
      return (
        <div className="w-full h-[200px] sm:h-[80%]">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      );
    }

    if (count === 2) {
      return (
        <div className="flex flex-col h-[200px] md:h-[90%] gap-1">
          {images.map((img) => (
            <div key={img.id} className="w-full h-1/2 overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      );
    }

    if (count === 3) {
      return (
        <div className="h-[200px] md:h-[85%]">
          <div className="w-full h-1/2 overflow-hidden mb-1">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="flex h-1/2 gap-1">
            {images.slice(1).map((img) => (
              <div key={img.id} className="w-1/2 h-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-wrap h-[200px] sm:h-[380px]">
        {images.map((img) => (
          <div key={img.id} className="w-1/2 h-1/2 overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    );
  };
  if (isLoading) {
    return <div className="text-center py-10">Loading Moments...</div>;
  } else {
    // console.log(data)
    return (
      <div className="team_slide flex flex-col justify-center items-center w-full py-16 bg-[#F3F5F9]">
        <Title
          title={
            <>
              What We Do <span className="text-blue-500">Every Day</span>
            </>
          }
          desc={`Tracking the Momentum of Our Day with Every Commit and Conversation.`}
        />

        <div className="w-full max-w-[1100px] ">
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
            }}
            coverflowEffect={{
              rotate: 0,
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
            {(data?.Data || []).map((activity) => (
              <SwiperSlide key={activity.id}>
                <div className="bg-[#B2C7FF] rounded-xl shadow-lg overflow-hidden w-[300px] md:w-[600px] text-left p-5 h-fit md:h-[700px]">
                  <div className="pb-5">
                    <h3 className="text-xl font-semibold">
                      {activity.activity_title}
                    </h3>
                    <div className="flex items-center text-sm text-blue-950 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {new Date(activity.activity_date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                  {renderImages(
                    activity.activity_pictures.map((pic) => ({
                      id: pic.id,
                      src: pic.file_url,
                      alt: "Activity Image",
                    }))
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}
