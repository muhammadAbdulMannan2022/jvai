import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useSubscribeUpdateMutation } from "../../../redux/features/apiSlice";
import { Link } from "react-router";

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribe] = useSubscribeUpdateMutation()
  const submit = async () => {
    if (!email) {
      alert("type your email")
    } else {
      await subscribe({ email })
      setEmail("")
    }
  }
  return (
    <footer className="text-[#0F172A] pt-8 w-full bg-[#E4EAF1] open-sans-text">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8 w-full border-t border-b border-blue-500 py-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/5">
          <div className="text-2xl font-bold text-blue-500 mb-2">
            <img
              src="/logoB.png"
              className="w-[150px] md:max-w-[200px]"
              alt="JVAI Logo"
            />
          </div>
          <p className="text-center md:text-left max-w-xs text-gray-800">
            At JVAI, we deliver cutting-edge solutions that are fast, flexible,
            and designed for success.
          </p>
        </div>

        {/* Services */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Services</h3>
          <ul className="space-y-2 list-disc text-gray-800 ml-4">
            <li>
              <Link href="/services" className="hover:text-blue-700">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-700">
                AI Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-700">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-700">
                SaaS Design
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-700">
                WordPress Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-700">
                Shopify Store
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-700">
                Graphic Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-gray-800 w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-4 text-blue-500">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 mb-2">
            <FaPhone className="text-blue-500" />
            <span>+1 (555) 123-4567</span>
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-blue-500" />
            <span>info@joinventureai.com/</span>
          </p>
          <p>Aqua Tower, 43 Mohakhali C/A, Level 12-13, Dhaka 1212</p>
        </div>

        {/* Newsletter + Follow Us */}
        <div className="text-gray-800 w-full md:w-1/5">
          <h3 className="text-lg font-semibold mb-4 text-blue-500">
            Newsletter
          </h3>
          <p className="mb-4">
            Stay connected with innovation. Subscribe now for expert insights,
            latest releases, and agency-exclusive offers.
          </p>
          <div className="flex bg-white rounded-l-md">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 rounded-l-md text-black w-full focus:outline-0"
            />
            <button onClick={() => submit()} className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
          {/* Follow Us */}
          <div className="text-gray-800 mt-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <Link href="#" className="bg-blue-500 text-white p-2 rounded-full">
                <FaFacebookF />
              </Link>
              <Link href="#" className="bg-blue-500 text-white p-2 rounded-full">
                <FaInstagram />
              </Link>
              <Link href="#" className="bg-blue-500 text-white p-2 rounded-full">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8">
        <p>© 2025, JVAI | All Rights Reserved</p>
      </div>

      {/* Large Logo at Bottom */}
      <div className="mt-8 flex justify-center items-end">
        <img src="/footer.png" alt="Footer Graphic" />
      </div>
    </footer>
  );
};

export default Footer;
