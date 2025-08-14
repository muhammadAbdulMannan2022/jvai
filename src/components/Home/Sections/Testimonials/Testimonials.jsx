import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import Title from "../../../../Helpers/Title";
import { baseUri, useGetClientReviewsQuery } from "../../../../redux/features/apiSlice";
import Flag from "react-world-flags";


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const { data, isLoading, isError } = useGetClientReviewsQuery();

  // Map API data to the component's expected structure
  const testimonials = data?.Data?.map((item) => ({
    logo: "",
    quote: item.client_feedback,
    name: item.client_name,
    title: item.client_profession,
    location: item.client_country,
    client_picture: item.client_picture
  })) || [];

  // Handle loading and error states
  if (isLoading) {
    return (
      <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#F3F5F9]">
        <p>Loading testimonials...</p>
      </section>
    );
  }

  if (isError || !testimonials.length) {
    return (
      <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#F3F5F9]">
        <p>No testimonials available.</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#F3F5F9]">
      <Title
        title={
          <>
            <span className="text-blue-500">Our Clients</span> Are Proud to
            Recommend Us.
          </>
        }
        desc="Trusted by clients for delivering results that speak for themselves."
      />
      <div className="w-full">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          keyboard={{ enabled: true }}
          navigation={true}
          autoplay={{ delay: 4000 }}
          modules={[EffectCoverflow, Navigation, Keyboard, Mousewheel, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="w-full"
          role="region"
          aria-label="Client testimonials carousel"
        >
          {testimonials.map((testimonial, index) => (

            <SwiperSlide key={index} className="flex justify-center">
              <div>
                <div className="card bg-white flex flex-row-reverse rounded-xl shadow-lg p-4 w-[700px] h-[400px] text-left space-x-4 space-x-reverse">
                  <div className="md:w-1/2 w-full h-full">
                    <img
                      src={baseUri + testimonial.client_picture}
                      alt={`${testimonial.name}'s company logo`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col justify-between space-y-2">
                    <div className="h-16 mb-2">
                      <img
                        src="/logoB.png"
                        alt={`${testimonial.name}'s company logo`}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-700 italic line-clamp-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-2">
                      <p className="font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {testimonial.title}
                      </p>
                      <Flag code={testimonial.location} style={{ width: '32px', height: '20px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;