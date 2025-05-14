import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye } from "react-icons/fa";
import Title from "../../../Helpers/Title";

const services = [
  {
    leftImage: "/service/image 11.png",
    rightImage: "/service/Image 12.png",
    centerTitle: "UI/UX Design",
    centerDescription:
      "We design user interfaces and experiences that are functional, beautiful, and user-friendly.",
    bg: ["#FAD7A1", "#99AFE8"],
  },
  {
    leftImage: "/service/image 16.png",
    rightImage: "/service/image 15.png",
    centerTitle: "Web Development",
    centerDescription:
      "Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration. App Development.",
    bg: ["#FBB486", "#FCD8E2"],
  },
  {
    leftImage: "/service/image 13.png",
    rightImage: "/service/image 14.png",
    centerTitle: "Logo & Branding",
    centerDescription:
      "Logo Design, Full Branding, Business Branding, 3d logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.",
    bg: ["#013d3e", "#111f22"],
  },
  {
    leftImage: "/service/image 50.png",
    rightImage: "/service/image 51.png",
    centerTitle: "Framer",
    centerDescription:
      "Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development. Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.",
    bg: ["#E3628166", "#BA009E36"],
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-6 md:px-24 py-16 text-center text-[#515151]">
      <Title
        title={
          <>
            <span className="text-blue-500">What we do</span> is design brands
            that truly engage your audience.
          </>
        }
        desc={`We craft engaging digital experiences through UI/UX design, web development, logo & branding, and Framer-powered websites.`}
      />

      <div className="flex gap-5 mt-16">
        {/* Left Column */}
        <div className="w-1/3 flex flex-col gap-8">
          {services.map((service, i) => {
            const { ref } = useInView({
              threshold: 0.6,
              triggerOnce: false,
              onChange: (inView) => {
                if (inView) setActiveIndex(i);
              },
            });

            return (
              <div
                key={`left-${i}`}
                ref={ref}
                className={`h-[80vh] rounded-lg p-4 flex items-center justify-center`}
                style={{ backgroundColor: service.bg[0] }}
              >
                <img
                  src={service.leftImage}
                  alt="Left"
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* Center Sticky Card */}
        <div className="w-1/3 sticky top-1/3 h-[40vh] overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              exit={{ y: -400 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full h-[40vh] bg-[#E6EDFF] rounded-lg text-center flex flex-col items-center justify-center p-6 shadow-md"
            >
              <h3 className="text-2xl font-bold text-blue-900">
                {services[activeIndex].centerTitle}
              </h3>
              <p className="text-gray-700 mt-2">
                {services[activeIndex].centerDescription}
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700">
                <FaEye /> See All
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column */}
        <div className="w-1/3 flex flex-col gap-8">
          {services.map((service, i) => {
            const { ref } = useInView({
              threshold: 0.6,
              triggerOnce: false,
              onChange: (inView) => {
                if (inView) setActiveIndex(i);
              },
            });
            return (
              <div
                key={`right-${i}`}
                ref={ref}
                className={`h-[80vh] rounded-lg p-4 flex items-center justify-center`}
                style={{ backgroundColor: service.bg[1] }}
              >
                <img
                  src={service.rightImage}
                  alt="Right"
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
