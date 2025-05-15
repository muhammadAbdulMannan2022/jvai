import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  { count: 215, type: "Happy Clients" },
  { count: 2215, type: "Design Created" },
  { count: 1368, type: "Website Coded" },
];

export default function AboutDisplay() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(data.map(() => 0));

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    } else {
      setCounts(data.map(() => 0));
      setStartCount(false);
    }
  }, [inView]);

  useEffect(() => {
    if (startCount) {
      data.forEach((item, index) => {
        const controls = animate(0, item.count, {
          duration: 2,
          onUpdate: (value) => {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(value);
              return newCounts;
            });
          },
        });

        return () => controls.stop();
      });
    }
  }, [startCount]);

  return (
    <div
      ref={ref}
      className="w-full h-[90vh] bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full h-full flex items-center justify-center bg-[url(/aboutus/about2bgB.png)] bg-no-repeat bg-bottom">
        <div className="relative w-[70%] lg:w-[60%] max-w-7xl h-[70%] ">
          {/* Circle Container */}
          {data.map((info, index) => {
            const baseClass = `absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full 
             from-blue-900 via-blue-900 to-purple-400 
            flex items-center justify-center flex-col text-white shadow-2xl`;

            const positionClass =
              index === 0
                ? "left-8 bottom-12"
                : index === 1
                ? "left-1/2 -translate-x-1/2 top-0"
                : "right-8 bottom-12";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${baseClass} ${
                  index == 1 ? "bg-gradient-to-bl" : "bg-gradient-to-tl"
                } ${positionClass}`}
              >
                <h1 className="text-4xl italic font-bold mb-2">
                  {counts[index]}+
                </h1>
                <p className="text-center text-sm">{info.type}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
