// // components/HeaderMenu.js
// "use client"; // This marks the component as a client-side component

// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { IoMdCall } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import Link from "next/link";
// import { MOBILE_NUMBER, EMAIL } from "@/constants/names";  // Import constants for mobile and email

// const HeaderMenu = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     console.log("Toggling menu!"); // Confirm button click is working
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Mobile Hamburger Button */}
//       <button
//         onClick={toggleMenu}
//         className="sm:hidden text-3xl text-white focus:outline-none"
//       >
//         {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`sm:hidden absolute top-16 left-0 right-0 bg-gray-800 text-white transition-all duration-300 ease-in-out ${
//           menuOpen ? "block" : "hidden"
//         }`} // Toggle visibility based on menuOpen state
//       >
//         <div className="flex flex-col items-center space-y-4 py-4">
//           {/* Links for Mobile Menu */}
//           <Link href="/" className="text-xl hover:text-blue-500">
//             Home
//           </Link>
//           <Link href="/about" className="text-xl hover:text-blue-500">
//             About
//           </Link>
//           <Link href="/services" className="text-xl hover:text-blue-500">
//             Services
//           </Link>
//           <Link href="/contact" className="text-xl hover:text-blue-500">
//             Contact
//           </Link>

//           {/* Contact Info: Mobile Number */}
//           <div className="flex items-center space-x-2">
//             <IoMdCall className="text-lg" />
//             <p>{MOBILE_NUMBER}</p>
//           </div>

//           {/* Contact Info: Email */}
//           <div className="flex items-center space-x-2">
//             <MdEmail className="text-lg" />
//             <p>{EMAIL}</p>
//           </div>

//           {/* "Book Now" Button */}
//           <Link
//             href="/booking"
//             className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderMenu;
