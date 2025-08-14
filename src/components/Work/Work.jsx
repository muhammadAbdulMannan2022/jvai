import React, { useRef, useEffect } from "react";
import RecentProjects from "../Home/Sections/recentProjects/RecentProjects";
import GradientTitle from "../../Helpers/GradientTitle";
import Testimonials from "../Home/Sections/Testimonials/Testimonials";
import ContactHeroForm from "../ContactUs/ContactHeroForm";
import { motion } from "framer-motion";
import { useGetProjectsQuery } from "../../redux/features/apiSlice";

// Team data
const teamData = [
  {
    id: 1,
    image: "/team/1.png",
    alt: "Team member",
  },
  {
    id: 2,
    image: "/team/2.png",
    alt: "Team member",
  },
  {
    id: 3,
    image: "/team/3.png",
    alt: "Team member",
  },
  {
    id: 4,
    image: "/team/4.png",
    alt: "Team member",
  },
  {
    id: 5,
    image: "/team/5.png",
    alt: "Team member",
  },
];

export default function Work() {
  const { data, isLoading, error } = useGetProjectsQuery();
  const ref = useRef(null);

  // Map API fields to expected format
  const mappedProjects = data?.map((item) => ({
    id: item.id,
    title: item.project_title,
    description: item.project_short_description,
    video: item.project_video,
    date: item.project_duration,
    coverImage: item.project_picture,
  })) ?? [];

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:h-[80vh] bg-radial from-blue-900 via-blue-950 to-black bg-bottom">
        <div className="w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:h-[80vh] px-2 sm:px-4 md:px-8 lg:px-40 flex items-center justify-center bg-[url(/work.svg)] bg-no-repeat bg-cover bg-center">
          <div className="h-full w-full flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center">
              Turning{" "}
              <span className="text-blue-500">
                Unique <br /> Concepts
              </span>{" "}
              into Powerful <br /> Products
            </h1>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-100 px-2 sm:px-4 md:px-8 lg:px-40 pt-4 sm:pt-8 md:pt-12 lg:pt-16">
        <div ref={ref} className="mb-3 sm:mb-4 md:mb-5 flex flex-col items-center justify-center">
          <GradientTitle
            text={"Our Case Study"}
            className={`bg-gradient-to-r from-blue-500 to-blue-900 text-2xl sm:text-2xl md:text-5xl font-bold`}
          />
          <p className="text-[#505050] text-xs sm:text-sm md:text-base mt-5">
            An experience design agency building high-end products and
            experiences that grow your business exponentially.
          </p>
        </div>

        <RecentProjects projectsData={mappedProjects} />
      </div>

      {/* Contact Form Section */}
      <div className="relative flex flex-col lg:flex-row justify-between items-start px-2 sm:px-4 md:px-8 lg:px-40 py-4 sm:py-8 md:py-12 lg:py-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="text-start mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-black font-bold leading-tight">
              Start your{" "}
              <span className="text-blue-500">
                journey<br />
              </span>{" "}
              with us.
            </h1>
          </div>
          <p className="text-gray-900 text-sm sm:text-base md:text-lg w-full">
            Ready to build something exceptional? As a global digital product
            design agency, we help brands craft high-quality SaaS platforms,
            MVPs, software, mobile apps, and websites. With a focus on
            user-friendly, visually stunning, and seamlessly functional designs,
            we're here to turn your vision into reality. Let's create your next
            big product—contact us today.
          </p>
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex -space-x-2 sm:-space-x-3 md:-space-x-4">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                className="overflow-hidden rounded-full border-2 border-white w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14"
              >
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <ContactHeroForm dark={false} />
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}