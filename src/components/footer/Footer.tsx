import { RAJKIYAM_HOTEL, RIGHT_RESERVED, WHATSAPP_LINK } from "@/constants/names";
// import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="flex justify-center space-x-6">
        {/* Social Media Icons */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        {/* <Link
          href="/gallery"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaImage size={24} />
        </Link> */}
      </div>
      <p className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} {RAJKIYAM_HOTEL}. {RIGHT_RESERVED}
      </p>
      <div>
      </div>
    </footer>
  );
};

export default Footer;
