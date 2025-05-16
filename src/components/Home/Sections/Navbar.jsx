import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    {
      name: "Company",
      path: "/company",
      child: [
        { path: "/about", text: "About Us" },
        { path: "/career", text: "Career" },
        { path: "/contact", text: "Contact Us" },
      ],
    },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
  ];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <nav className="bg-[#0000004d] backdrop-blur-[10px] inter-font-text p-4 flex items-center justify-center fixed top-0 left-0 w-full md:px-40 z-50">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-[80px] md:w-[100px]" src="/logo.png" alt="JVAI" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          {navItems.map((item) => {
            const isChildActive = item.child?.some((child) =>
              currentPath.startsWith(child.path)
            );

            const isActive = currentPath === item.path || isChildActive;

            return item.child ? (
              <div key={item.name} className="relative group">
                <div
                  className={`flex items-center gap-1 cursor-pointer group-hover:text-blue-500 transition ${
                    isActive ? "text-blue-500 underline" : ""
                  }`}
                >
                  <span>{item.name}</span>
                  <IoIosArrowUp className="transition-transform group-hover:rotate-180" />
                </div>
                <ul className="absolute top-full left-0 mt-2 bg-[#0000005e] backdrop-blur-[3px] shadow-md rounded-md py-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transform transition-all duration-200 z-50 min-w-[150px]">
                  {item.child.map((child) => (
                    <li key={child.text}>
                      <Link
                        to={child.path}
                        className="block px-4 py-2 hover:text-blue-500 hover:underline"
                      >
                        {child.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-blue-500 hover:underline transition ${
                  isActive ? "text-blue-500 underline" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gradient-to-tr from-blue-800 to-blue-400 text-white px-4 py-2 rounded-full hover:shadow-xl transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white text-black z-50 shadow-2xl p-6 space-y-6"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl"
                >
                  <HiX />
                </button>
              </div>

              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`w-full text-left flex justify-between items-center py-2 ${
                      currentPath === item.path
                        ? "text-blue-500 underline"
                        : "text-black"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.child ? <IoIosArrowDown /> : null}
                  </button>
                  {openDropdown === item.name && item.child && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.child.map((sub) => (
                        <Link
                          key={sub.text}
                          to={sub.path}
                          className="block hover:text-blue-500 hover:underline"
                        >
                          {sub.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="inline-block bg-gradient-to-tr from-blue-800 to-blue-400 text-white px-4 py-2 rounded-full w-full text-center mt-4"
              >
                Contact Us
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
