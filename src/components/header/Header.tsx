// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import HotelLogo from "../../../public/images/logo.png"
import { FaDirections } from "react-icons/fa";

import '../style/style.css'
import { MOBILE_NUMBER, EMAIL, RAJKIYAM_HOTEL, GOOGLE_MAP_LINK, DIRECTION } from "@/constants/names";

// Import HeaderMenu as a client-side component
import HeaderMenu from "./HeaderMenu";  // Client component

const Header = () => {

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between relative">
      {/* Logo and Static Content */}
      <div className="text-lg font-bold flex items-center gap-4">
        <Link href="/">
          <Image width={160} height={40} alt={RAJKIYAM_HOTEL} src={HotelLogo} />
        </Link>
      </div>

      {/* Static contact info and Book Now Button */}
      <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:space-x-6 ml-auto">
        <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <IoMdCall className="text-lg" />
            <p className="large-text">{MOBILE_NUMBER}</p>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail className="text-lg" />
            <p className="large-text">{EMAIL}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Link href={GOOGLE_MAP_LINK} target="_blank" className="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex gap-1">
                <span className="large-text">{DIRECTION}</span>
                <FaDirections className="mt-2" />
            </Link>
          </div>
        </div>
        {/* <div>
          <Link
            href="/booking"
            className="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
           Durection
           <FaDirections />
          </Link>
        </div> */}
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;
