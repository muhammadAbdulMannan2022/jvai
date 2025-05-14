import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import VideoPlayer from "../../../../Helpers/VideoPlayer";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Title from "../../../../Helpers/Title";

const testimonials = [
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    logo: "/logoB.png",
    name: "Jane Doe",
    title: "Product Manager",
    location: "San Francisco, CA",
    quote:
      "This product completely transformed our workflow and has made our processes significantly more efficient and streamlined, saving us a lot of time and resources.",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    logo: "/logoB.png",
    name: "John Smith",
    title: "CTO",
    location: "Berlin, Germany",
    quote:
      "The support and performance of this platform are unmatched. It’s been a game-changer for our team and allowed us to scale our operations effectively.",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    logo: "/logoB.png",
    name: "Alice Johnson",
    title: "CEO",
    location: "Tokyo, Japan",
    quote:
      "I highly recommend this service for any growing company. It’s easy to integrate, reliable, and has greatly improved our internal communication and project management processes.",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    logo: "/logoB.png",
    name: "John Smith",
    title: "CTO",
    location: "Berlin, Germany",
    quote:
      "The support and performance are truly unparalleled. This platform has significantly optimized our workflow and improved collaboration across teams, especially in our remote work environment.",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    logo: "/logoB.png",
    name: "Alice Johnson",
    title: "CEO",
    location: "Tokyo, Japan",
    quote:
      "We’ve had an incredible experience with this product. It’s user-friendly, effective, and has made a huge difference in how we manage our business operations across departments.",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    logo: "/logoB.png",
    name: "John Smith",
    title: "CTO",
    location: "Berlin, Germany",
    quote:
      "This platform has exceeded our expectations. The performance, security, and ease of use have made it a crucial tool for our business, and the support is exceptional.",
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    logo: "/logoB.png",
    name: "Alice Johnson",
    title: "CEO",
    location: "Tokyo, Japan",
    quote:
      "I can't recommend this enough. The impact it's had on our operations is immense. It's fast, efficient, and has greatly enhanced our team's productivity and coordination.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null); // To track which video is playing

  const onToggle = (index) => {
    // Toggle play/pause for the specific video
    setPlayingIndex(playingIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#F3F5F9]">
      <Title
        title={
          <>
            <span className="text-blue-500">Our Clients</span> Are Proud to
            Recommend Us.
          </>
        }
        desc={`Trusted by clients for delivering results that speak for themselves.`}
      />
      <div className="w-full">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          keyboard={{ enabled: true }}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Navigation, Keyboard, Mousewheel]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => {
            const [ref, inView] = useInView({
              threshold: 0.6, // 60% must be visible
              triggerOnce: false,
            });

            const isPlaying = activeIndex === index && inView;

            return (
              <SwiperSlide key={index} className="flex justify-center">
                <div ref={ref}>
                  <div className="card bg-white flex flex-row-reverse rounded-xl shadow-lg p-4 w-[700px] h-[400px] text-left space-x-4 space-x-reverse">
                    <div className="w-1/2">
                      <VideoPlayer
                        src={testimonial.video}
                        isPlaying={playingIndex === index && isPlaying} // Only play if it is the active one and in view
                        onToggle={() => onToggle(index)} // Pass onToggle to control play/pause
                      />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between space-y-2">
                      <div className="h-16 mb-2">
                        <img
                          src={testimonial.logo}
                          alt="Company logo"
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
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
