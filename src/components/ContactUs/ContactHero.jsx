import React from "react";
import ContactHeroForm from "./ContactHeroForm";
import { motion } from "framer-motion";
// Team data
const teamData = [
  {
    id: 1,
    image: "/team/1.png",
    alt: "Team member",
  },
  {
    id: 2,
    image: "/team/2.png",
    alt: "Team member",
  },
  {
    id: 3,
    image: "/team/3.png",
    alt: "Team member",
  },
  {
    id: 4,
    image: "/team/4.png",
    alt: "Team member",
  },
  {
    id: 5,
    image: "/team/5.png",
    alt: "Team member",
  },
];

export default function ContactHero() {
  return (
    <div className="relative min-h-screen pt-32 pb-10 flex items-center justify-center w-full bg-radial from-blue-800 via-blue-950 to-black overflow-hidden">
      {/* Top Right Image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-[60%] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/contact/bgOverLay.png')" }}
      />

      {/* Bottom Left Image */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-[60%] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/contact/bgOverLay.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 gap-5 flex flex-col md:flex-row justify-between items-center h-full px-5 md:px-40">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="text-start mb-10">
            <h1 className="text-6xl text-white font-bold leading-tight">
              Start your{" "}
              <span className="text-blue-500">
                project <br /> journey
              </span>{" "}
              with us.
            </h1>
          </div>
          <p className="text-[#F3F3F3] text-lg text-start w-full lg:w-3/5">
            Ready to build something exceptional? As a global digital product
            design agency, we help brands craft high-quality SaaS platforms,
            MVPs, software, mobile apps, and websites. With a focus on
            user-friendly, visually stunning, and seamlessly functional designs,
            we're here to turn your vision into reality. Let's create your next
            big product—contact us today.
          </p>
          <div className="mt-10 flex -space-x-4">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="overflow-hidden rounded-full border-2 border-white w-14 h-14"
              >
                <img
                  src={member.image}
                  alt={member.alt}
                  width={60}
                  className="w-14 rounded-full object-cover md:h-16 md:w-16"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2">
          <ContactHeroForm />
        </div>
      </div>
    </div>
  );
}
