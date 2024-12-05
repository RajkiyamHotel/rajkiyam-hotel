import { FaBed, FaConciergeBell, FaWifi, FaParking } from 'react-icons/fa';
import { IoIosNavigate } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalAirport, MdLocalLaundryService } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";

import { ADDRESS_HEADING, GOOGLE_MAP_LINK, HOTEL_ADDRESS, HOTEL_DESCRIPTION, RAJKIYAM_HOTEL, VIEW_GOOGLE, WHATSAPP_LINK } from '@/constants/names';


const HotelDetails = () => {
  const hotelDetails = {
    benefits: [
      { icon: <FaConciergeBell />, text: '24/7 Concierge Service' },
      { icon: <FaParking />, text: 'Parking Available' },
      { icon: <FaWifi />, text: 'Free high-speed Wi-Fi' },
      { icon: <MdLocalAirport />, text: 'Airport Transfer' },
      { icon: <FaBed />, text: 'Comfortable and spacious rooms' },
      { icon: <BsDoorOpen />, text: '24/7 Check-in'},
      { icon: <MdLocalLaundryService />, text: 'Laundry' },
      { icon: <CiCreditCard2 />, text: 'Keyless access' },
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white">
      <h2 className="text-3xl font-light text-center text-gray-700">{RAJKIYAM_HOTEL}</h2>
      <p className="mt-4 text-lg text-center font-normal text-gray-700">{HOTEL_DESCRIPTION}</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {hotelDetails.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="text-xl text-gray-700">{benefit.icon}</div>
            <p className='font-light text-gray-700'>{benefit.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-700">{ADDRESS_HEADING}</p>
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
      <div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <FaWhatsapp size={50} color="green" />
      </a>
      </div>
    </div>
  );
};

export default HotelDetails;
