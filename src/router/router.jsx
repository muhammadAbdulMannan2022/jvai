import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";
import Career from "../components/career/Career";

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
      },
    ],
  },
]);
export default router;
