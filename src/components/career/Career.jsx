import React, { useEffect } from "react";
import HeroReUseable from "../../Helpers/HeroReUseable";
import GradientTitle from "../../Helpers/GradientTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Career() {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
  });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (leftInView) {
      leftControls.start({ x: 0, opacity: 1 });
    } else {
      leftControls.start({ x: -100, opacity: 0 });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({ x: 0, opacity: 1 });
    } else {
      rightControls.start({ x: 100, opacity: 0 });
    }
  }, [rightInView, rightControls]);
  return (
    <div className="">
      <HeroReUseable
        title={
          <>
            Explore Career <br /> Opportunities in{" "}
            <span className="text-blue-500">JVAI</span>
          </>
        }
        bgImag={`/career/careerbg.png`}
      />
      <div className="px-40 py-16">
        <GradientTitle
          text={
            <>
              Unlock your future! <br /> start your professional career at{" "}
              <span className="text-blue-500">JVAI</span>
            </>
          }
          className={`bg-gradient-to-r from-blue-500 to-blue-950 text-5xl font-bold`}
        />
        <div className="w-[70%] flex gap-5 mt-8">
          <div className="relative flex items-center justify-center flex-col w-[40%]">
            <h1 className="text-lg text-blue-500">Career</h1>
            <img className="" src="/career/arrowLongL.png" alt="" />
          </div>
          <div className="w-[60%]">
            <p className="text-[#464646] text-lg">
              We challenge assumptions and seek to view every situation from all
              perspectives. Our passion lies in transforming ideas into
              universal human values expanding the boundaries of what’s
              possible.
            </p>
          </div>
        </div>
      </div>
      {/* new section */}
      <div className="w-full flex items-center justify-center">
        <div className="relative px-40 py-16 flex flex-col items-center justify-center space-y-16 w-full max-w-7xl">
          {/* Sticky Image */}
          <div className="w-full sticky top-20">
            <img
              className="w-full rounded-xl"
              src="/career/1.png"
              alt="Sticky"
            />
          </div>

          {/* Animated Images */}
          <div className="flex gap-4 w-full z-10">
            <motion.div
              ref={leftRef}
              animate={leftControls}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-1/2"
            >
              <img
                className="rounded-xl w-full"
                src="/career/2.png"
                alt="Left"
              />
            </motion.div>

            <motion.div
              ref={rightRef}
              animate={rightControls}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-1/2"
            >
              <img
                className="rounded-xl w-full"
                src="/career/3.png"
                alt="Right"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
