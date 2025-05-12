import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import Lenis from "@studio-freight/lenis";
import Title from "../../../../Helpers/Title";

const data = [
  {
    title: "Project Title 1",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/1.png",
  },
  {
    title: "Project Title 2",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/2.png",
  },
  {
    title: "Project Title 3",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/3.png",
  },
];

export default function RecentProjects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="relative bg-[#F3F5F9] pt-16 px-16">
      <Title
        title={
          <>
            <span className="text-blue-500">Recent Projects</span> That Showcase
            Our Innovation and Craft
          </>
        }
        desc={`Discover the latest projects we've completed, where innovation meets real-world results. Each project reflects our dedication to delivering high-quality, impactful software solutions.`}
      />
      {data.map((project, i) => {
        const targetScale = 1 - (data.length - i) * 0.05;
        return (
          <ProjectsCard
            key={`proj_${i}`}
            i={i}
            data={project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
