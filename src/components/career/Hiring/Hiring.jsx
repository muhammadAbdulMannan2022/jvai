import React from "react";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useGetJobsQuery } from "../../../redux/features/apiSlice";

const jobOpenings = [
  {
    id: "01",
    title: "UI/UX Designer",
    link: "/career/job_details",
  },
  {
    id: "02",
    title: "Frontend Developer",
    link: "/career/job_details",
  },
  {
    id: "03",
    title: "Backend Developer",
    link: "/career/job_details",
  },
  {
    id: "04",
    title: "Product Manager",
    link: "/career/job_details",
  },
  {
    id: "05",
    title: "Motion Designer",
    link: "/career/job_details",
  },
];

export default function Hiring() {
  const { data: hiringData, isLoading } = useGetJobsQuery();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Function to find matching job and determine hiring status
  const getJobStatus = (title) => {
    if (!hiringData) return { vacancy: 0, hiring: false, job: null };
    const matchedJob = hiringData.find(
      (job) => job.title.toLowerCase() === title.toLowerCase()
    );
    if (matchedJob && matchedJob.published && (matchedJob.vacancy || 1) > 0) {
      return { vacancy: matchedJob.vacancy || 1, hiring: true, job: matchedJob };
    }
    return { vacancy: 0, hiring: false, job: null };
  };

  return (
    <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      <div
        className="w-full h-full bg-[url(/career/hiring.png)] bg-cover bg-no-repeat bg-center px-2 sm:px-4 md:px-8 lg:px-40 py-4 sm:py-8 md:py-12 lg:py-16"
        ref={ref}
      >
        <motion.div
          className="flex items-end overflow-hidden"
          initial={{ x: "-30%", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-30%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h1 className="inline-flex items-end text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold py-1 sm:py-2">
            Currently We <br />
            are hiring
          </h1>
          <GoArrowRight className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-2 sm:ml-3 md:ml-4" />
        </motion.div>

        <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 space-y-2 sm:space-y-3 md:space-y-4">
          {isLoading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : (
            jobOpenings.map((category, index) => {
              const { vacancy, hiring, job } = getJobStatus(category.title);
              return (
                <div
                  key={category.id}
                  className={`flex flex-row items-start justify-between px-4 sm:px-5 md:px-6 py-3 sm:py-4 border-t border-gray-500 transition-all duration-300 ${index === jobOpenings.length - 1 ? "border-b" : ""
                    }`}
                >
                  <div className="flex flex-row items-start space-x-2 sm:space-x-3 md:space-x-4">
                    <span className="text-gray-400 text-sm sm:text-base md:text-lg">{category.id}.</span>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">{category.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
                        Vacancy ({vacancy.toString().padStart(2, "0")})
                      </p>
                    </div>
                  </div>
                  <div className="flex-none ml-auto">
                    {hiring ? (
                      <Link
                        to={`${category.link}/`} // Dynamic route with job ID
                        state={{ job }} // Pass the full job object
                        className="text-lg sm:text-xl md:text-2xl bg-white text-gray-700 p-1 sm:p-1.5 md:p-2 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                      >
                        <MdArrowOutward />
                      </Link>
                    ) : (
                      <div className="text-lg sm:text-xl md:text-2xl bg-gray-300 text-gray-500 p-1 sm:p-1.5 md:p-2 rounded-full flex items-center justify-center cursor-not-allowed">
                        <MdArrowOutward />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}