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
import SupportSection from "./Sections/Support/SupportSection";
import Moments from "./Sections/moments/Moments";
import FAQSection from "./Sections/FAQ/FAQSection";
import Testimonials from "./Sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="h-screen relative">
      {/* header */}
      <div className="bg-blue-950 bg-[url('/HeroBg.png')] bg-cover bg-no-repeat bg-center h-full">
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
      {/*  */}
      <Moments />
      {/*  */}
      <FAQSection />
      {/* footer */}
      <Footer />
    </div>
  );
}
