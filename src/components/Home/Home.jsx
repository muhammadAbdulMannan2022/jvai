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
import { useGetProjectsQuery } from "../../redux/features/apiSlice";

export default function Home() {
  const { data, isLoading, error } = useGetProjectsQuery();

  // Optional: map API fields to expected format
  const mappedProjects = data?.map((item) => ({
    id: item.id,
    title: item.project_title,
    description: item.project_short_description,
    video: item.project_video,
    date: item.project_duration,
    coverImage: item.project_picture,
  })) ?? [];

  return (
    <div className="h-screen relative w-full">
      {/* header */}
      <div className="bg-blue-950 bg-[url('/MainBg.png')] bg-cover relative bg-no-repeat bg-center h-fit md:h-full w-full">
        {/* <video
          className="absolute w-screen h-screen object-cover z-[-1]"
          src="/logo.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video> */}
        <Hero />
      </div>

      <TrustSection />
      <Intro />
      <ServicesSection />
      <TechStack />
      <Proces />

      <div className="bg-[#F3F5F9] pt-40 px-10 md:px-40">
        <Title
          title={
            <>
              <span className="text-blue-500">Recent Projects</span> That
              Showcase Our Innovation and Craft
            </>
          }
          desc={`Discover the latest projects we've completed, where innovation meets real-world results. Each project reflects our dedication to delivering high-quality, impactful software solutions.`}
        />
        {isLoading ? (
          <p>Loading projects...</p>
        ) : error ? (
          <p className="text-red-500">Failed to load projects</p>
        ) : (
          <RecentProjects projectsData={mappedProjects} />
        )}
      </div>

      <SupportSection />
      <Testimonials />
      <TeamSlider />
      <Moments />
      <FAQSection />
      <Footer />
    </div>
  );
}