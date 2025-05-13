import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Title from "../../../../Helpers/Title";

import "swiper/css";
import "swiper/css/effect-coverflow";

const activitySlides = [
  {
    id: 1,
    title: "Tracking the Momentum of Our Day Conversation.",
    date: "April 2025",
    images: [
      { id: 1, src: "/moments/1.jpg", alt: "Team meeting" },
      { id: 2, src: "/moments/2.jpg", alt: "Collaboration" },
      { id: 3, src: "/moments/3.jpg", alt: "Sticky notes" },
    ],
  },
  {
    id: 2,
    title: "Innovative Planning Sessions.",
    date: "April 2025",
    images: [
      { id: 4, src: "/moments/4.jpg", alt: "Discussion" },
      { id: 5, src: "/moments/5.jpg", alt: "Review" },
    ],
  },
  {
    id: 3,
    title: "Sharing Product Demos.",
    date: "April 2025",
    images: [{ id: 6, src: "/moments/6.jpg", alt: "Demo" }],
  },
  {
    id: 4,
    title: "Team Collaboration Continues.",
    date: "April 2025",
    images: [
      { id: 7, src: "/moments/7.jpg", alt: "Lunch" },
      { id: 8, src: "/moments/2.jpg", alt: "Chat" },
      { id: 9, src: "/moments/3.jpg", alt: "Whiteboarding" },
    ],
  },
];

export default function Moments() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === activitySlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderImages = (images) => {
    const count = images.length;

    if (count === 1) {
      return (
        <div className="w-full h-[580px]">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      );
    }

    if (count === 2) {
      return (
        <div className="flex flex-col h-[580px] gap-1">
          {images.map((img) => (
            <div key={img.id} className="w-full h-1/2 overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      );
    }

    if (count === 3) {
      return (
        <div className="h-[580px]">
          <div className="w-full h-1/2 overflow-hidden mb-1">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex h-1/2 gap-1">
            {images.slice(1).map((img) => (
              <div key={img.id} className="w-1/2 h-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-wrap h-[580px]">
        {images.map((img) => (
          <div key={img.id} className="w-1/2 h-1/2 overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full mx-auto text-center py-16 px-4 bg-[#F3F5F9]">
      <Title
        title={
          <>
            What We Do <span className="text-blue-500">Every Day</span>
          </>
        }
        desc={`Tracking the Momentum of Our Day with Every Commit and Conversation.`}
      />

      <div>
        <div className="relative h-[750px] overflow-x-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {activitySlides.map((slide, index) => {
              const position =
                (index - activeIndex + activitySlides.length) %
                activitySlides.length;

              // Show 3 slides at once (activeIndex, activeIndex+1, activeIndex+2)
              const isVisible = [0, 1, 2].includes(position);

              if (!isVisible) return null;

              let zIndex = 0;
              let scale = 0.8;
              let opacity = 0.6;
              let translateX = 0;

              if (position === 0) {
                zIndex = 30;
                scale = 1;
                opacity = 1;
                translateX = 0;
              } else if (position === 1) {
                zIndex = 20;
                scale = 0.9;
                opacity = 0.8;
                translateX = 300;
              } else if (position === 2) {
                zIndex = 20;
                scale = 0.9;
                opacity = 0.8;
                translateX = -300;
              }

              return (
                <div
                  key={slide.id}
                  className="transition-all duration-500 ease-in-out absolute"
                  style={{
                    zIndex,
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                  }}
                >
                  <div className="bg-[#B2C7FF] rounded-xl shadow-lg overflow-hidden w-[300px] md:w-[600px] text-left p-5 h-[500px] md:h-[700px]">
                    <div className="pb-5">
                      <h3 className="text-xl font-semibold">{slide.title}</h3>
                      <div className="flex items-center text-sm text-blue-950 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{slide.date}</span>
                      </div>
                    </div>
                    {renderImages(slide.images)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
