import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../../Helpers/Button";
import { useNavigate } from "react-router";


const Intro = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const navigate = useNavigate()
  return (
    <section ref={ref} className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 text-[#515151]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
        {/* Left Image */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-4 w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px]">
          {/* Image 1 - From Left */}
          <motion.div
            className="row-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/new/landing/landingSi.png"
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
              src="/new/landing/landingSi5.png"
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
              src="/new/landing/landingSi2.png"
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



          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
            At <b className="font-bold">Join Venture AI (JVAI)</b>, we are innovators at heart, transforming ideas into intelligent digital solutions. As a pioneering AI-based software provider from Dhaka, Bangladesh, and a sister concern of <b className="font-bold">Betopia Group</b>, we specialize in building custom AI chatbots, smart applications, and dynamic websites tailored to your needs. Our proven success in developing commercially successful AI SaaS products sets us apart.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
            With a global reach, we serve businesses and individuals around the world, delivering seamless, powerful, and intuitive technology experiences. Our strength lies in our large, dedicated team of experts in AI, Backend, App, and Web development who are committed to pushing the boundaries of what's possible and ensuring our partners thrive in a digital-first world.
          </p>

          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
            Our mission is simple: to make technology work for you naturally, efficiently, and with impact.
          </p>

          <Button
            text="Learn More"
            onClick={() => navigate("/about")}
            className="cursor-pointer w-full sm:w-auto"
            aria-label="Learn more about JVAI"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;