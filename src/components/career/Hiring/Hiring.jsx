import React from "react";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const jobOpenings = [
  {
    id: "01",
    title: "UI/UX Designer",
    vacancy: 4,
    link: "",
    hiring: true,
  },
  {
    id: "02",
    title: "Frontend Developer",
    vacancy: 4,
    link: "",
    hiring: false,
  },
  {
    id: "03",
    title: "Backend Developer",
    vacancy: 4,
    link: "",
    hiring: true,
  },
  {
    id: "04",
    title: "Product Manager",
    vacancy: 4,
    link: "",
    hiring: true,
  },
  {
    id: "05",
    title: "Motion Designer",
    vacancy: 4,
    link: "",
    hiring: true,
  },
];

export default function Hiring() {
  const { ref, inView } = useInView({
    triggerOnce: false, // play every time it enters view
    threshold: 0.2,
  });

  return (
    <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-purple-900 text-white">
      <div
        className="w-full h-full bg-[url(/career/hiring.png)] bg-cover bg-no-repeat px-40 py-16"
        ref={ref}
      >
        <motion.div
          className="flex items-end overflow-hidden"
          initial={{ x: "-100%", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
        >
          <h1 className="inline-flex items-end text-6xl font-bold py-2">
            Currently We <br />
            are hiring
          </h1>
          <GoArrowRight className="text-7xl" />
        </motion.div>

        <div className="w-full mx-auto mt-10 space-y-4 py-16">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className={`flex justify-between items-center px-6 py-4 border-t border-gray-500 transition-all duration-300 ${
                job.id === "05" && "border-b pb-6"
              }`}
            >
              <div className="flex items-center justify-between w-full pe-20">
                <span className="text-gray-400">{job.id}.</span>
                <h3 className="font-semibold text-3xl">{job.title}</h3>
                <p className="text-xl text-gray-300">
                  Vacancy ({job.vacancy.toString().padStart(2, "0")})
                </p>
              </div>
              {job.hiring ? (
                <Link
                  to={job.link}
                  className="text-2xl bg-white text-gray-700 p-2 rounded-full"
                >
                  <MdArrowOutward />
                </Link>
              ) : (
                <div className="text-2xl bg-gray-300 text-gray-700 p-2 rounded-full">
                  <MdArrowOutward />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
