import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import Lenis from "@studio-freight/lenis";

export default function RecentProjects({ projectsData }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(projectsData || []);
    setLoading(false);
  }, [projectsData]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="relative bg-[#F3F5F9] min-h-[50vh]">
      {loading ? (
        <div className="w-full text-center py-20 text-xl font-semibold text-gray-500 animate-pulse">
          Loading recent projects...
        </div>
      ) : projects.length === 0 ? (
        <div className="w-full text-center py-20 text-xl font-semibold text-gray-400">
          No projects found.
        </div>
      ) : (
        projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
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
        })
      )}
    </div>
  );
}
