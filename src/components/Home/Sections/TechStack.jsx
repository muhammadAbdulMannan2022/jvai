import React from "react";
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
    { name: "Vue.js", src: "/icons/image 345.png" },
  ];

  // Split icons into two rows
  const firstRow = techIcons.slice(0, 10);
  const secondRow = techIcons.slice(10);

  return (
    <div className="px-6 md:px-24 py-16 bg-[#F3F5F9]">
      <Title
        title={
          <>
            Advanced <span className="text-blue-500">Technology</span> Stack
          </>
        }
        desc={`We leverage the latest technologies across AI, web, and Phone platforms to build robust, scalable solutions.`}
      />

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4 flex-wrap">
            {row.map((icon, key) => (
              <div
                key={key}
                className="relative h-[80px] w-[80px] flex items-center justify-center"
              >
                <img
                  src="/icons/Polygon 5.png"
                  className="absolute h-full w-full"
                  alt=""
                />
                <img
                  src={icon.src}
                  className="z-20 w-[40px] h-[40px]"
                  alt={icon.name}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
