import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";
import Career from "../components/career/Career";
import CareerMain from "../components/career/CareerMain";
import JobDetails from "../components/career/jobDetails/JobDetails";
import ApplyJob from "../components/career/Apply/ApplyJob";
import ContactUs from "../components/ContactUs/ContactUs";
import Work from "../components/Work/Work";
import Projects from "../components/Projects/Projects";
import Blog from "../components/Blog/Blog";
import BlogMain from "../components/Blog/BlogMain";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/career",
        element: <Career />,
        children: [
          {
            path: "",
            element: <CareerMain />,
          },
          {
            path: "job_details",
            element: <JobDetails />,
          },
          {
            path: "apply",
            element: <ApplyJob />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/project/:id",
        element: <Projects />,
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [
          {
            path: "",
            element: <BlogMain />,
          },
          {
            path: ":id",
            element: <BlogDetails />,
          },
        ],
      },
    ],
  },
]);
export default router;
