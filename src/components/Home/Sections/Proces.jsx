import React from "react";
import Title from "../../../Helpers/Title";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "../../../Helpers/Card";
export default function Proces() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const serviceData = [
    {
      title: "Discovery & Assessment",
      description:
        "Our experts design a custom AI solution architecture tailored to your specific challenges architecture tailored.",
      icon: <FaCode className="text-6xl" />, // Reference to react-icons/fa
      color: "bg-blue-900",
      hoverColor: "hover:bg-blue-800",
    },
    {
      title: "Solution Design",
      description:
        "Our experts design a custom AI solution architecture tailored to your specific challenges architecture tailored.",
      icon: <FaLightbulb className="text-6xl" />, // Reference to react-icons/fa
      color: "bg-blue-900",
      hoverColor: "hover:bg-blue-800",
    },
    {
      title: "Development & Training",
      description:
        "Our experts design a custom AI solution architecture tailored to your specific challenges architecture tailored.",
      icon: <FaCode className="text-6xl" />, // Reference to react-icons/fa
      color: "bg-blue-900",
      hoverColor: "hover:bg-blue-800",
    },
    {
      title: "Deployment & Optimization",
      description:
        "Our experts design a custom AI solution architecture tailored to your specific challenges architecture tailored.",
      icon: <FaRocket className="text-6xl" />, // Reference to react-icons/fa
      color: "bg-blue-900",
      hoverColor: "hover:bg-blue-800",
    },
  ];
  return (
    <div className="px-24 py-16">
      <Title
        title={
          <>
            <span className="text-blue-500">Our Process</span> for Crafting
            Comprehensive AI Solutions
          </>
        }
        desc={`Our advanced AI technologies help businesses automate processes, gain insights, and create exceptional customer experiences.`}
      />
      <div
        ref={ref}
        className="flex items-center justify-center gap-4 flex-wrap py-16"
      >
        {/* Mapping over serviceData and animating each card */}
        {serviceData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 0 }} // Initially positioned and invisible
              animate={inView ? { y: isEven ? -35 : 35, opacity: 1 } : {}} // Animate based on scroll
              transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger the animations
            >
              <Card service={service} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
