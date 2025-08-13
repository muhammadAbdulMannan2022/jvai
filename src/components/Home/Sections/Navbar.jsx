"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router"

export default function Navbar() {
  const currentPath = useLocation().pathname
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    {
      name: "Company",
      path: "/company", // This path is for the parent link, not necessarily a page
      child: [
        { path: "/about", text: "About Us" },
        { path: "/career", text: "Career" },
        { path: "/contact", text: "Contact Us" },
        {
          path: "/team", text: "Our Team"
        }
      ],
    },
    { name: "Work", path: "/work" },
    { name: "JVAI Insider", path: "/blog" },
  ]

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  }

  return (
    <nav className=" flex items-center justify-center fixed top-0 left-0 w-full sm:px-8 lg:px-20 z-50 w-fi">
      <div className="w-full flex justify-between items-center max-w-7xl bg-[#00000046] backdrop-blur-md font-sans p-4 px-8 rounded-full mt-4">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-16 sm:w-20 md:w-24" src="/logo.png" alt="JVAI" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white text-sm lg:text-base">
          {navItems.map((item) => {
            const isChildActive = item.child?.some((child) => currentPath.startsWith(child.path))
            const isActive = currentPath === item.path || isChildActive
            return item.child ? (
              <div key={item.name} className="relative group">
                <div
                  className={`flex items-center gap-1 cursor-pointer hover:text-blue-400 transition ${isActive ? "text-blue-400 underline" : ""}`}
                >
                  <span>
                    {isChildActive ? item.child.find((child) => currentPath.startsWith(child.path))?.text : item.name}
                  </span>
                  <ChevronDown className="transition-transform group-hover:rotate-180" />
                </div>
                <ul className="absolute top-full left-0 mt-2 bg-[#00000079] backdrop-blur-md shadow-lg rounded-md py-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 min-w-[160px]">
                  {item.child.map((child) => (
                    <li key={child.text}>
                      <Link
                        to={child.path}
                        className="block px-4 py-2 text-sm hover:text-blue-400 hover:bg-gray-800/50 transition"
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
                className={`hover:text-blue-400 hover:underline transition ${isActive ? "bg-gradient-to-tr from-blue-800 to-blue-400 px-2 py-1 rounded-xl" : ""}`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gradient-to-tr from-blue-800 to-blue-400 text-white px-4 py-2 rounded-full hover:shadow-lg transition text-sm"
          >
            Contact Us
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X /> : <Menu />}
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
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40 h-screen"
              onClick={() => setMobileOpen(false)}
            />
            {/* Sliding Menu */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-4/5 max-w-[280px] h-screen bg-white text-black z-50 shadow-xl p-6 flex flex-col space-y-4 overflow-y-auto"
            >
              <div className="flex justify-end">
                <button onClick={() => setMobileOpen(false)} className="text-2xl p-2" aria-label="Close mobile menu">
                  <X />
                </button>
              </div>
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.child ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full text-left flex justify-between items-center py-3 text-base font-medium ${currentPath === item.path ? "text-blue-500 underline" : "text-gray-800"
                          }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.child.map((sub) => (
                            <Link
                              key={sub.text}
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className={`block py-2 text-sm hover:text-blue-500 hover:underline ${currentPath === sub.path ? "text-blue-500 underline" : "text-gray-700"
                                }`}
                            >
                              {sub.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 text-base font-medium ${currentPath === item.path ? "text-blue-500 underline" : "text-gray-800"
                        } hover:text-blue-500 hover:underline`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block bg-gradient-to-tr from-blue-800 to-blue-400 text-white px-4 py-2 rounded-full text-center mt-4 text-sm font-medium"
              >
                Contact Us
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
