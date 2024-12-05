import React from "react";
import Link from "next/link";
import Image from "next/image";

import HotelLogo from '../../../public/images/logo.png'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { EMAIL, MOBILE_NUMBER, RAJKIYAM_HOTEL } from "@/constants/names";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <div className="text-lg font-bold gap-4 flex">
        <Link href="/">
            <Image width={160} alt={RAJKIYAM_HOTEL} src={HotelLogo} />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <IoMdCall className="text-lg" />
            <p>{MOBILE_NUMBER}</p>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail className="text-lg" />
            <p>{EMAIL}</p>
          </div>
        </div>
        {/* <div>
          <Link href="/booking" className="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Book Now
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
