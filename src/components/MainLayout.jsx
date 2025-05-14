import React from "react";
import Home from "./Home/Home";
import Navbar from "./Home/Sections/Navbar";
import { Outlet } from "react-router";
import Footer from "./Home/Sections/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
