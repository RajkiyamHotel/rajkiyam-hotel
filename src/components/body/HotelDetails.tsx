import { FaBed, FaConciergeBell, FaWifi, FaParking } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { GiElevator } from "react-icons/gi";

import Highlights from './facilities/Highlights';
import { FACILITIES, HOTEL_DESCRIPTION, RAJKIYAM_HOTEL, WHATSAPP_LINK } from '@/constants/names';


const HotelDetails = () => {
  const hotelDetails = {
    benefits: [
      { icon: <FaConciergeBell />, text: '24/7 Concierge Service' },
      { icon: <FaParking />, text: 'Parking Available' },
      { icon: <FaWifi />, text: 'Free high-speed Wi-Fi' },
      { icon: <GiElevator />, text: 'Elevator' },
      { icon: <FaBed />, text: 'Comfortable and spacious rooms' },
      { icon: <BsDoorOpen />, text: '24/7 Check-in'},
      { icon: <MdLocalLaundryService />, text: 'Laundry' },
      { icon: <CiCreditCard2 />, text: 'Keyless access' },
    ]
  };

  return (
    <div className="mx-auto p-5 bg-white">
      <h2 className="text-3xl font-light text-center text-gray-700">{RAJKIYAM_HOTEL}</h2>
      <p className="mt-4 text-lg text-justify font-normal text-gray-700 font-serif leading-relaxed">{HOTEL_DESCRIPTION}</p>
      <h2 className="text-xl text-gray-700 m-4 text-center">{FACILITIES}</h2>
      <div className="mt-8 ml-3 grid grid-cols-2 md:grid-cols-4 gap-6">
        {hotelDetails.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="text-xl text-gray-700">{benefit.icon}</div>
            <p className='font-light text-gray-700'>{benefit.text}</p>
          </div>
        ))}
      </div>
      <Highlights />
      <div className='text-white'>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 text-white bg-green-500 h-16 w-16 p-1 rounded-full"
        >
          <FaWhatsapp className='mt-[2px] ml-[3px]' size={50} />
        </a>
      </div>
    </div>
  );
};

export default HotelDetails;
