'use client'

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../../Helpers/Title";

export default function TechStack() {
  const techIcons = [
    { name: "Figma", src: "/icons/image 15.png" },
    { name: "Python", src: "/icons/image 17.png" },
    { name: "JavaScript", src: "/icons/image 16.png" },
    { name: "PHP", src: "/icons/image 18.png" },
    { name: "Node.js", src: "/icons/image 19.png" },
    { name: "Docker", src: "/icons/image 20.png" },
    { name: "Adobe XD", src: "/icons/image 21.png" },
    { name: "MongoDB", src: "/icons/image 22.png" },
    { name: "Redis", src: "/icons/image 23.png" },
    { name: "Django", src: "/icons/image 24.png" },
    { name: "C#", src: "/icons/image 25.png" },
    { name: "HTML5", src: "/icons/image 26.png" },
    { name: "Ionic", src: "/icons/image 27.png" },
    { name: "Laravel", src: "/icons/image 28.png" },
    { name: "Angular", src: "/icons/image 29.png" },
    { name: "React", src: "/icons/image 30.png" },
    { name: "Vue.js", src: "/icons/image 32.png" },
    { name: "Vue.js", src: "/icons/image 33.png" },
    { name: "Vue.js", src: "/icons/image 34.png" },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const hexagonalClipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

  return (
    <div
      ref={containerRef}
      className="relative px-6 md:px-24 py-16 bg-[#F3F5F9] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 250, 0.5) 0%, transparent 50%)`,
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />
      <Title
        title={
          <>
            Advanced <span className="text-blue-500">Technology</span> Stack
          </>
        }
        desc="We leverage the latest technologies across AI, web, and Phone platforms to build robust, scalable solutions."
      />
      <div className="flex flex-row flex-wrap justify-center max-w-6xl mx-auto mt-8 relative z-10">
        {techIcons.map((icon, key) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.1,
          });
          return (
            <motion.div
              key={key}
              ref={ref}
              className="relative h-[100px] w-[100px] flex items-center justify-center hover:scale-110 transition-all hover:drop-shadow-xl hover:drop-shadow-blue-400 overflow-hidden bg-white"
              style={{ clipPath: hexagonalClipPath }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : Math.random() * 50 - 10,
                y: inView ? 0 : Math.random() * 50 - 10,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: key * 0.05,
              }}
            >
              <img
                loading="lazy"
                src={icon.src || "/placeholder.svg"}
                className="z-20 w-10 h-10 object-cover"
                alt={icon.name}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}