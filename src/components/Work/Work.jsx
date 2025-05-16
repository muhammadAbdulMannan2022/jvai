import React, { useState, useMemo, useRef, useEffect } from "react";
import WorkCatagory from "./WorkCatagory";
import RecentProjects from "../Home/Sections/recentProjects/RecentProjects";
import GradientTitle from "../../Helpers/GradientTitle";
import Testimonials from "../Home/Sections/Testimonials/Testimonials";
import ContactHeroForm from "../ContactUs/ContactHeroForm";
import { motion } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Project Title 1",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/1.png",
    catagory: "UI UX Design",
  },
  {
    id: 2,
    title: "Project Title 2",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/2.png",
    catagory: "Mobile App",
  },
  {
    id: 3,
    title: "Project Title 3",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/3.png",
    catagory: "Web Development",
  },
  {
    id: 4,
    title: "Project Title 1",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/1.png",
    catagory: "UI UX Design",
  },
  {
    id: 5,
    title: "Project Title 2",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/2.png",
    catagory: "Mobile App",
  },
  {
    id: 6,
    title: "Project Title 3",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/3.png",
    catagory: "Web Development",
  },
  {
    id: 8,
    title: "Project Title 1",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/1.png",
    catagory: "UI UX Design",
  },
  {
    id: 9,
    title: "Project Title 2",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/2.png",
    catagory: "Mobile App",
  },
  {
    id: 10,
    title: "Project Title 3",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/3.png",
    catagory: "Web Development",
  },
];
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
  const [selectedCategory, setSelectedCategory] = useState("All Project");
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 5;
  const ref = useRef(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // reset page on category change
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Project") return projectsData;
    return projectsData.filter(
      (project) => project.catagory === selectedCategory
    );
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[80vh] bg-radial from-blue-900 via-blue-950 to-black bg-bottom px-40">
        <div className="bg-[url(/work.png)] h-full w-full bg-no-repeat bg-contain bg-center flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white text-center">
            Turning{" "}
            <span className="text-blue-500">
              Unique <br /> Concepts
            </span>{" "}
            into Powerful <br /> Products
          </h1>
        </div>
      </div>

      {/* Category Filter */}
      <div className="w-full flex items-center justify-center">
        <WorkCatagory onCategoryChange={handleCategoryChange} />
      </div>

      {/* Filtered Projects */}
      <div className="bg-gray-100 px-20 lg:px-40 pt-16">
        <div ref={ref} className="mb-5">
          <GradientTitle
            text={"Our Case Study"}
            className={`bg-gradient-to-r from-blue-500 to-blue-900 text-3xl font-bold`}
          />
          <p className="text-[#505050]">
            An experience design agency building high-end products and
            experiences that grow your business exponentially.
          </p>
        </div>

        <RecentProjects projectsData={currentProjects} />

        {/* Pagination Buttons */}
        {filteredProjects.length > projectsPerPage && (
          <div className="w-full flex justify-center gap-4 mt-8 pb-16">
            {currentPage > 0 && (
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition hover:cursor-pointer"
              >
                Prev
              </button>
            )}
            {currentPage < totalPages - 1 && (
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition hover:cursor-pointer"
              >
                See More
              </button>
            )}
          </div>
        )}
      </div>
      {/*  */}
      <div className="relative flex justify-between items-center h-full px-40 py-16">
        {/* Left Section */}
        <div className="w-1/2">
          <div className="text-start mb-10">
            <h1 className="text-6xl text-black font-bold leading-tight">
              Start your{" "}
              <span className="text-blue-500">
                project <br /> journey
              </span>{" "}
              with us.
            </h1>
          </div>
          <p className="text-gray-900 text-lg text-start w-full lg:w-3/5">
            Ready to build something exceptional? As a global digital product
            design agency, we help brands craft high-quality SaaS platforms,
            MVPs, software, mobile apps, and websites. With a focus on
            user-friendly, visually stunning, and seamlessly functional designs,
            we're here to turn your vision into reality. Let's create your next
            big product—contact us today.
          </p>
          <div className="mt-10 flex -space-x-4">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="overflow-hidden rounded-full border-2 border-white w-14 h-14"
              >
                <img
                  src={member.image}
                  alt={member.alt}
                  width={60}
                  className="w-14 rounded-full object-cover md:h-16 md:w-16"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <ContactHeroForm dark={false} />
        </div>
      </div>
      {/* testimonials */}
      <Testimonials />
    </div>
  );
}
