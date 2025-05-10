import React from "react";
import ServiceCard from "../../../Helpers/ServiceCard";
import Title from "../../../Helpers/Title";

export default function ServicesSection() {
  const services = [
    {
      leftImage: "/service/image 11.png",
      rightImage: "/service/Image 12.png",
      centerTitle: "UI/UX Design",
      centerDescription:
        "We design user interfaces and experiences that are functional, beautiful, and user-friendly.",
    },
    {
      leftImage: "/service/image 13.png",
      rightImage: "/service/image 14.png",
      centerTitle: "Web Development",
      centerDescription:
        "From static sites to full-stack web apps, we craft performant and scalable websites.",
    },
    {
      leftImage: "/service/image 15.png",
      rightImage: "/service/image 16.png",
      centerTitle: "Branding & Identity",
      centerDescription:
        "We help companies stand out through smart and compelling visual identity and strategy.",
    },
  ];

  return (
    <section className="px-6 md:px-24 py-16 text-center text-[#515151]">
      <Title
        title={
          <>
            <span className="text-blue-500">What we do</span> is design brands
            that truly engage your audience.
          </>
        }
        desc={`We craft engaging digital experiences through UI/UX design, web
          development, logo & branding, and Framer-powered websites.`}
      />

      <div className="bg-gray-50 py-12">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
