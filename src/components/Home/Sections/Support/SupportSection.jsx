import React, { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import SupportCard from "./SupportCard";
import Lenis from "@studio-freight/lenis";
import Title from "../../../../Helpers/Title";

const supportFeatures = [
  {
    title: "24/7 Customer Support",
    description:
      "Have a question or need to reschedule? Our friendly support team is available round the clock to help you anytime.",
    buttonText: "Book Now",
    bgColor: "bg-cyan-100",
    textColor: "text-teal-700",
    buttonBgColor: "bg-teal-600",
    buttonTextColor: "text-white",
    imageSrc: "/support/1.png",
  },
  {
    title: "Instant Booking",
    description:
      "Book services in just a few taps. No more waiting or unnecessary calls. Quick and hassle-free!",
    buttonText: "Get Started",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
    buttonBgColor: "bg-indigo-600",
    buttonTextColor: "text-white",
    imageSrc: "/support/1.png",
  },
  {
    title: "Trusted Professionals",
    description:
      "All our service providers are background-checked and highly rated by customers like you.",
    buttonText: "Meet the Team",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    buttonBgColor: "bg-yellow-600",
    buttonTextColor: "text-white",
    imageSrc: "/support/1.png",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose a time that works for you. We accommodate last-minute changes without extra fees.",
    buttonText: "See Availability",
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
    buttonBgColor: "bg-pink-600",
    buttonTextColor: "text-white",
    imageSrc: "/support/1.png",
  },
  {
    title: "Secure Payments",
    description:
      "Your transactions are protected with top-tier encryption. Pay with confidence every time.",
    buttonText: "Learn More",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
    buttonBgColor: "bg-green-600",
    buttonTextColor: "text-white",
    imageSrc: "/support/1.png",
  },
];

export default function SupportSection() {
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
    <div className="sticky top-0">
      <div ref={container} className="bg-gray-50 px-6 md:px-16 py-20 relative">
        <Title
          title={
            <>
              Why <span className="text-blue-500">Choose Us?</span>
            </>
          }
          desc={`We’re committed to unmatched quality and excellence.`}
        />
        {supportFeatures.map((features, i) => {
          const targetScale = 1 - (supportFeatures.length - i) * 0.04;
          return (
            <SupportCard
              key={i}
              {...features}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
