import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../../Helpers/Button";

const NumberCounter = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(Math.floor(endValue));
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(timer);
    } else {
      setCount(0); // Reset on exit to replay
    }
  }, [inView, endValue]);

  return <span ref={ref}>{count}+</span>;
};

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Intro = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 text-[#515151]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
        {/* Left Image */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-4 w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          {/* Image 1 - From Left */}
          <motion.div
            className="row-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/intro/intro1.png"
              alt="Team working"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Image 2 - From Top */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <img
              src="/intro/intro2.png"
              alt="Team meeting"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Image 3 - From Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src="/intro/intro3.png"
              alt="Office space"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Right Side: Text and Counters */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
            Who We Are?
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Innovation meets intelligence.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="flex-1 min-w-[100px]">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                <NumberCounter endValue={215} />
              </p>
              <p className="text-xs sm:text-sm md:text-base">Happy Clients</p>
            </div>
            <div className="flex-1 min-w-[100px]">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                <NumberCounter endValue={2215} />
              </p>
              <p className="text-xs sm:text-sm md:text-base">Design Created</p>
            </div>
            <div className="flex-1 min-w-[100px]">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                <NumberCounter endValue={1368} />
              </p>
              <p className="text-xs sm:text-sm md:text-base">Website Coded</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
            At JVAI, we are innovators at heart—transforming ideas into
            intelligent digital solutions. Our passionate team specializes in
            building custom AI chatbots, smart applications, and dynamic
            websites tailored to your needs.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
            With a global reach, we serve businesses and individuals around the
            world, delivering seamless, powerful, and intuitive technology
            experiences. Our mission is simple: to make technology work for you
            naturally, efficiently, and with impact.
          </p>

          <Button
            text="Learn More"
            onClick={() => console.log("Learn More clicked")}
            className="cursor-pointer w-full sm:w-auto"
            aria-label="Learn more about JVAI"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;