import React from "react";
import { IoIosNavigate } from "react-icons/io";

import { ADDRESS_HEADING, GOOGLE_MAP_LINK, HOTEL_ADDRESS, VIEW_GOOGLE } from "@/constants/names";

const Address = () => {
    return(
        <div className="mt-8 text-center">
            <p className="font-medium text-gray-700 text-xl m-4 text-center">{ADDRESS_HEADING}</p>
            <p className="text-gray-700">{HOTEL_ADDRESS}</p>
            <a
                  href={GOOGLE_MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 block"
            >
                <div className="flex items-center justify-center font-extralight space-x-1">
                    <span>{VIEW_GOOGLE}</span>
                    <IoIosNavigate />
                </div>
            </a>
        </div>
    );
}

export default Address;