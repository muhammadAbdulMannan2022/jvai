import React, { useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye } from "react-icons/fa";
import Title from "../../../Helpers/Title"; // Adjust path if necessary
import { useGetAllCategoriesQuery } from "../../../redux/features/apiSlice"; // Adjust path if necessary
import { useNavigate } from "react-router";

// Child Component for Mobile Viewport
const MobileServiceItem = ({ service, index, setActiveIndex }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
    onChange: (isInView) => {
      if (isInView) setActiveIndex(index);
    },
  });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 sm:gap-6 max-w-xl mx-auto"
    >
      <h3
        className={`text-lg sm:text-xl font-bold text-blue-900 ${inView ? "opacity-100" : "opacity-50"
          } transition-opacity duration-300`}
      >
        {service.centerTitle}
      </h3>
      <div className="flex flex-col gap-4 sm:gap-6">
        <div
          className="h-[200px] sm:h-[250px] rounded-lg p-2 sm:p-3 flex items-center justify-center bg-gradient-to-br"
          style={{
            background: `linear-gradient(to bottom right, ${service.bg[0]}, ${service.bg[1]})`,
          }}
        >
          <img
            src={service.leftImage}
            alt={`${service.centerTitle} left image`}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="h-[200px] sm:h-[250px] rounded-lg p-2 sm:p-3 flex items-center justify-center bg-gradient-to-br"
          style={{
            background: `linear-gradient(to bottom right, ${service.bg[0]}, ${service.bg[1]})`,
          }}
        >
          <img
            src={service.rightImage}
            alt={`${service.centerTitle} right image`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

// Child Component for Desktop Viewport Columns
const DesktopImageColumn = ({ service, image, altText, index, setActiveIndex }) => {
  const { ref } = useInView({
    threshold: 0.6,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) setActiveIndex(index);
    },
  });

  return (
    <div
      ref={ref}
      className="h-[60vh] rounded-lg p-4 flex items-center justify-center shadow-blue-100 shadow-xl"
      style={{
        background: `linear-gradient(to bottom right, ${service.bg[0]}, ${service.bg[1]})`,
      }}
    >
      <img
        src={image}
        alt={altText}
        className="w-full h-full object-contain"
      />
    </div>
  );
};


// Main Parent Component
const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, isLoading } = useGetAllCategoriesQuery();
  const navigation = useNavigate();

  const services = useMemo(() => {
    if (!data?.Data) return [];

    return data.Data.map((category) => ({
      centerTitle: category.category_name,
      centerDescription: category.category_description,
      leftImage: category.category_left_picture || category.category_background_image,
      rightImage: category.category_right_picture || category.category_background_image,
      bg: ["#E0EAFD", "#FFFFFF"],
    }));
  }, [data]);

  // Handle loading or empty states before rendering the main component body
  if (isLoading) {
    return <section>Loading services...</section>; // Or a proper loading spinner
  }

  if (services.length === 0) {
    return null; // Don't render anything if there are no services
  }

  return (
    <section className="px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 text-center text-[#515151] bg-gray-50">
      <Title
        title={
          <>
            <span className="text-blue-500">What we do</span> is design brands
            that truly engage your audience.
          </>
        }
        desc="We craft engaging digital experiences through UI/UX design, web development, logo & branding, and Framer-powered websites."
      />

      {/* Small Screen Layout (<768px) */}
      <div className="md:hidden mt-8 sm:mt-12 space-y-12 sm:space-y-16">
        {services.map((service, i) => (
          <MobileServiceItem
            key={`service-${i}`}
            service={service}
            index={i}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      {/* Large Screen Layout (>=768px) */}
      <div className="hidden md:flex gap-5 mt-16 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-1/3 flex flex-col gap-8">
          {services.map((service, i) => (
            <DesktopImageColumn
              key={`left-${i}`}
              service={service}
              image={service.leftImage}
              altText={`${service.centerTitle} left image`}
              index={i}
              setActiveIndex={setActiveIndex}
            />
          ))}
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
                {services[activeIndex]?.centerTitle}
              </h3>
              <p title={services[activeIndex]?.centerDescription} className="text-gray-700 mt-2 line-clamp-6">
                {services[activeIndex]?.centerDescription}
              </p>
              <button
                onClick={() => navigation("/services")}
                className="mt-4 bg-blue-600 text-white hover:cursor-pointer px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700"
                aria-label={`See all ${services[activeIndex]?.centerTitle} services`}
              >
                <FaEye /> See All
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column */}
        <div className="w-1/3 flex flex-col gap-8 ">
          {services.map((service, i) => (
            <DesktopImageColumn
              key={`right-${i}`}
              service={service}
              image={service.rightImage}
              altText={`${service.centerTitle} right image`}
              index={i}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;