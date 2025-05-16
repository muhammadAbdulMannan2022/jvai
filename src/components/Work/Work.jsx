import React, { useState, useMemo, useRef, useEffect } from "react";
import WorkCatagory from "./WorkCatagory";
import RecentProjects from "../Home/Sections/recentProjects/RecentProjects";
import GradientTitle from "../../Helpers/GradientTitle";

const projectsData = [
  {
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
    </div>
  );
}
