"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaDirections } from "react-icons/fa";
import { MOBILE_NUMBER, EMAIL, GOOGLE_MAP_LINK } from "@/constants/names";

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
    return () => document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
  }, [menuOpen]);

  return (
    <div className="relative">
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-3xl text-white focus:outline-none"
      >
        <FaBars />
      </button>

      {/* Backdrop when drawer is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Right Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          <FaTimes />
        </button>

        {/* Drawer Content */}
        <div className="flex flex-col items-center space-y-6 pt-16">
            <Link href={GOOGLE_MAP_LINK} className="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex gap-1">
                <span>Direction</span>
                <FaDirections className="mt-1" />
            </Link>
          {/* <Link href="/about" className="text-xl hover:text-blue-500">
            About
          </Link>
          <Link href="/services" className="text-xl hover:text-blue-500">
            Services
          </Link>
          <Link href="/contact" className="text-xl hover:text-blue-500">
            Contact
          </Link> */}

          {/* Contact Info */}
          <div className="flex items-center space-x-2">
            <IoMdCall className="text-lg" />
            <p>{MOBILE_NUMBER}</p>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail className="text-lg" />
            <p>{EMAIL}</p>
          </div>

          {/* "Book Now" Button */}
          {/* <Link
            href="/booking"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Book Now
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
