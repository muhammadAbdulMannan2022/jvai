import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Home/Sections/Navbar";
import Footer from "./Home/Sections/Footer";
import { useGetSeoQuery } from "../redux/features/apiSlice";

export default function MainLayout() {
  const { data, isLoading } = useGetSeoQuery();
  const seoContent = data?.Data?.[0]?.seo_content;

  useEffect(() => {
    if (seoContent) {
      document.title = "JVAI - AI Solutions";

      // Update or create description meta
      const setMeta = (name, content) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute("name", name);
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      };

      setMeta("description", seoContent);
      setMeta("keywords", seoContent);
    }
  }, [seoContent]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg font-medium">Loading...</span>
      </div>
    );
  }

  if (!seoContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg font-medium text-red-500">
          Failed to load SEO data
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
