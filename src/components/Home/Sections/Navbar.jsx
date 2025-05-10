import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", child: [{ path: "" }] },
    { name: "Company", path: "/company", child: [{ path: "" }] },
    { name: "Work", path: "/work", child: [{ path: "" }] },
    { name: "More", path: "/more", child: [{ path: "" }] },
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
    <nav className="bg-[#00000060] backdrop-blur-[10px] inter-font-text p-4 flex items-center justify-center fixed top-0 left-0 w-full md:px-24 z-50">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-[80px] md:w-[100px]" src="/logo.png" alt="JVAI" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => toggleDropdown(item.name)}
                className={`flex items-center gap-1 hover:text-blue-300 cursor-pointer ${
                  currentPath === item.path ? "text-blue-500" : "text-white"
                }`}
              >
                <span>{item.name}</span>
                {item.name !== "Home" && <IoIosArrowDown />}
              </button>

              {/* Dropdown */}
              {openDropdown === item.name && item.name !== "Home" && (
                <div className="absolute top-10 left-0 bg-white text-black p-3 rounded shadow-lg z-10 w-40">
                  <ul className="space-y-2 bg-[#ffffff59] backdrop-blur-2xl">
                    <li className="">
                      <Link to={`${item.path}/${item?.child[0]?.path}`}>
                        Option 1
                      </Link>
                    </li>
                    <li className="">
                      <Link to={`${item.path}/${item?.child[1]?.path}`}>
                        Option 2
                      </Link>
                    </li>
                    <li className="">
                      <Link to={`${item.path}/${item?.child[2]?.path}`}>
                        Option 3
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
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

      {/* Mobile Menu + Backdrop */}
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
                    className={`w-full text-left flex justify-between items-center ${
                      currentPath === item.path ? "text-blue-500" : "text-black"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.name !== "Home" && <IoIosArrowDown />}
                  </button>
                  {openDropdown === item.name && item.name !== "Home" && (
                    <div className="ml-4 mt-2 space-y-2">
                      <li className="">
                        <Link to={`${item.path}/${item?.child[0]?.path}`}>
                          Option 1
                        </Link>
                      </li>
                      <li className="">
                        <Link to={`${item.path}/${item?.child[1]?.path}`}>
                          Option 2
                        </Link>
                      </li>
                      <li className="">
                        <Link to={`${item.path}/${item?.child[2]?.path}`}>
                          Option 3
                        </Link>
                      </li>
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
