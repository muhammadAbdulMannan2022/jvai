import React from "react";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import TrustSection from "./Sections/TrustSection";
import Intro from "./Sections/Intro";
import ServicesSection from "./Sections/SerVicesSection";
import TechStack from "./Sections/TechStack";
import Proces from "./Sections/Proces";
import Footer from "./Sections/Footer";
import RecentProjects from "./Sections/recentProjects/RecentProjects";
import TeamSlider from "./Sections/teamSlider/TeamSlider";
import Testimonials from "./Sections/Testimonials/Testimonials";
import SupportSection from "./Sections/Support/SupportSection";

export default function Home() {
  return (
    <div className="h-screen relative">
      {/* header */}
      <div className="bg-blue-950 bg-[url('/HeroBg.png')] bg-cover bg-no-repeat bg-center h-full">
        <Navbar />
        <Hero />
      </div>
      <TrustSection />
      <Intro />
      <ServicesSection />
      <TechStack />
      <Proces />
      {/*  */}
      <RecentProjects />
      {/*  */}
      <SupportSection />
      {/*  */}
      <Testimonials />
      {/*  */}
      <TeamSlider />
      {/* footer */}
      <Footer />
    </div>
  );
}
