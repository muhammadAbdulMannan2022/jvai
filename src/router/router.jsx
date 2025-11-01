import { createBrowserRouter } from "react-router";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Home from "../components/Home/Home";
// import AboutUs from "../components/AboutUs/AboutUs";
import GradientCursor from "../Helpers/WebCursor";
import Team from "../components/Home/Sections/team/Team";
import ScrollToTop from "../lib/ScrollToTop";
import BlogEdit from "../components/Blog/addBlog/BlogEdit";
import Error from "../components/Error/Error";
const SupportChat = lazy(() => import("../components/Bot/SupportChat"));
// Lazy-loaded components
const MainLayout = lazy(() => import("../components/MainLayout"));
const Services = lazy(() => import("../components/Services/Services"));
const AboutUs = lazy(() => import("../components/AboutUs/AboutUs"));

const Career = lazy(() => import("../components/career/Career"));
const CareerMain = lazy(() => import("../components/career/CareerMain"));
const JobDetails = lazy(() =>
  import("../components/career/jobDetails/JobDetails")
);
const ApplyJob = lazy(() => import("../components/career/Apply/ApplyJob"));
const ContactUs = lazy(() => import("../components/ContactUs/ContactUs"));
const Work = lazy(() => import("../components/Work/Work"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Blog = lazy(() => import("../components/Blog/Blog"));
const BlogMain = lazy(() => import("../components/Blog/BlogMain"));
const BlogDetails = lazy(() => import("../components/BlogDetails/BlogDetails"));
const ProjectHome = lazy(() => import("../components/Projects/ProjectHome"));

// Intro video component with 5-second playback, fade-out effect, and scroll prevention
const IntroVideo = ({ onVideoEnd }) => {
  const videoRef = useRef();
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasError, setHasError] = useState(false); // State to track video loading errors

  useEffect(() => {
    const video = videoRef.current;
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    if (video && !hasError) {
      // Start video playback if no error
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
      });

      // Monitor video progress to stop at 3.5 seconds and trigger fade-out
      const handleTimeUpdate = () => {
        if (video.currentTime >= 3.5) {
          video.pause();
          setFadeOut(true);
          // Hide video and re-enable scrolling after fade-out
          setTimeout(() => {
            setIsVisible(false);
            onVideoEnd();
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
          }, 1000);
          video.removeEventListener("timeupdate", handleTimeUpdate);
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [onVideoEnd, hasError]); // Adding hasError as a dependency

  // Handle video loading error
  const handleVideoError = () => {
    setHasError(true); // Mark video as failed to load
    setIsVisible(false); // Hide video component
    document.body.style.height = "auto";
    document.body.style.overflow = "auto"; // Restore scroll behavior
    onVideoEnd(); // Call the onVideoEnd callback immediately, even if video fails to load
  };

  if (!isVisible || hasError) return null; // If video has error, don't render it

  return (
    <div
      className={`fixed cursor-pointer inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 max-w-screen ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        ref={videoRef}
        className="w-full h-full object-cover"
        onError={handleVideoError} // Attach the error handler
      >
        <source
          src="https://res.cloudinary.com/dn98ksbcf/video/upload/v1757577714/MicrosoftTeams-video_koqq5l.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Root component to manage intro video and app content
const Root = () => {
  const [showIntro, setShowIntro] = useState(true);
  const handleVideoEnd = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <GradientCursor />
        <MainLayout />
        <SupportChat />
      </Suspense>
      {showIntro && <IntroVideo onVideoEnd={handleVideoEnd} />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Career />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CareerMain />
              </Suspense>
            ),
          },
          {
            path: "job_details",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <JobDetails />
              </Suspense>
            ),
          },
          {
            path: "apply",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ApplyJob />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>loading.....</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/work",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Work />
          </Suspense>
        ),
      },
      {
        path: "/project/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blog />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <BlogMain />
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <BlogDetails />
              </Suspense>
            ),
          },
          {
            path: "create",
            element: <BlogEdit />,
          },
        ],
      },
    ],
  },
]);

export default router;
