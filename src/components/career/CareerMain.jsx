import React, { useEffect } from "react";
import GradientTitle from "../../Helpers/GradientTitle";
import Hiring from "./Hiring/Hiring";
import CareerFaq from "./CareerFaq/CareerFaq";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CareerMain() {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) {
      leftControls.start({ x: 0, opacity: 1 });
    } else {
      leftControls.start({ x: -30, opacity: 0 });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({ x: 0, opacity: 1 });
    } else {
      rightControls.start({ x: 30, opacity: 0 });
    }
  }, [rightInView, rightControls]);

  return (
    <>
      <div className="px-5 sm:px-4 md:px-8 lg:px-40 py-4 sm:py-8 md:py-12 lg:py-16 overflow-x-hidden">
        <GradientTitle
          text={
            <>
              Unlock your future! <br /> start your professional career at{" "}
              <span className="text-blue-500">JVAI</span>
            </>
          }
          className={`bg-gradient-to-r from-blue-500 to-blue-950 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-start`}
        />
        <div className="w-full flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-2 sm:mt-4 md:mt-6 lg:mt-8 mx-auto">
          <div className="relative flex items-center justify-center flex-col w-full md:w-[40%]">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-500">Career</h1>
            <img className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" src="/career/arrowLongL.png" alt="" />
          </div>
          <div className="w-full md:w-[60%]">
            <p className="text-[#464646] text-xs sm:text-sm md:text-base lg:text-lg text-center md:text-left">
              We challenge assumptions and seek to view every situation from all
              perspectives. Our passion lies in transforming ideas into
              universal human values expanding the boundaries of what’s
              possible.
            </p>
          </div>
        </div>
      </div>
      {/* new section */}
      <div className="w-full flex items-center justify-center min-h-[40vh]">
        <div className="relative px-2 sm:px-4 md:px-8 lg:px-40 py-4 sm:py-8 md:py-12 lg:py-16 flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 w-full max-w-6xl overflow-x-hidden">
          {/* Sticky Image */}
          <div className="w-full sm:sticky top-10">
            <img
              className="w-full h-auto max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] rounded-xl object-cover"
              src="/career/1.png"
              alt="Sticky"
            />
          </div>

          {/* Animated Images */}
          <div className="flex flex-col sm:flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 w-full z-10">
            <motion.div
              ref={leftRef}
              animate={leftControls}
              initial={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <img
                className="rounded-xl w-full h-auto max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] object-cover"
                src="/career/2.png"
                alt="Left"
              />
            </motion.div>

            <motion.div
              ref={rightRef}
              animate={rightControls}
              initial={{ x: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <img
                className="rounded-xl w-full h-auto max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh] object-cover"
                src="/career/3.png"
                alt="Right"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Hiring />
      <CareerFaq />
    </>
  );
}