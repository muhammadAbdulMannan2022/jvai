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
    <section ref={ref} className="bg-gray-50 py-16 px-24 text-[515151]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-1/2 h-[500px]">
          {/* Image 1 - From Left */}
          <motion.div
            className="row-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/intro/intro1.png"
              alt="Team working"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Image 2 - From Top */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/intro/intro2.png"
              alt="Team meeting"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Image 3 - From Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/intro/intro3.png"
              alt="Office space"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Right Side: Text and Counters */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-950">Who We Are?</h2>
          <p className="text-md text-[20px] leading-relaxed">
            Innovation meets intelligence.
          </p>

          {/* Stats */}
          <div className="flex gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">
                <NumberCounter endValue={215} />
              </p>
              <p className="text-[20px]">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">
                <NumberCounter endValue={2215} />
              </p>
              <p className="text-[20px]">Design Created</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">
                <NumberCounter endValue={1368} />
              </p>
              <p className="text-[20px]">Website Coded</p>
            </div>
          </div>

          {/* Description */}
          <p className=" text-[20px] font-[400] leading-relaxed">
            At JVAI, we are innovators at heart—transforming ideas into
            intelligent digital solutions. Our passionate team specializes in
            building custom AI chatbots, smart applications, and dynamic
            websites tailored to your needs.
          </p>
          <p className="text-[20px] font-[400] leading-relaxed">
            With a global reach, we serve businesses and individuals around the
            world, delivering seamless, powerful, and intuitive technology
            experiences. Our mission is simple: to make technology work for you
            naturally, efficiently, and with impact.
          </p>

          <Button
            text="Learn More"
            onClick={() => console.log("Learn More clicked")}
            className={`hover:cursor-pointer`}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
