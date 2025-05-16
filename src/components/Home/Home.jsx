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
import Title from "../../Helpers/Title";
const projectsData = [
  {
    title: "Project Title 1",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/1.png",
  },
  {
    title: "Project Title 2",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/2.png",
  },
  {
    title: "Project Title 3",
    description:
      "Complete design solution: brand, UI/UX, web, mobile, and dashboard.",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    date: "April 2025",
    coverImage: "/projects/3.png",
  },
];
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
      <div className="bg-[#F3F5F9] pt-40 px-40">
        <Title
          title={
            <>
              <span className="text-blue-500">Recent Projects</span> That
              Showcase Our Innovation and Craft
            </>
          }
          desc={`Discover the latest projects we've completed, where innovation meets real-world results. Each project reflects our dedication to delivering high-quality, impactful software solutions.`}
        />
        <RecentProjects projectsData={projectsData} />
      </div>
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
