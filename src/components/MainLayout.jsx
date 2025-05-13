import React from "react";
import Home from "./Home/Home";
import Navbar from "./Home/Sections/Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
