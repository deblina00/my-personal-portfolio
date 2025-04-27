// "use client"; //we are using state variable so we have to make it a use client//

// import { navLinks } from "@/constant/constant";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { HiBars3BottomRight } from "react-icons/hi2";

// //define props type

// type Props = {
//   openNav: () => void;
// };

// const Nav = ({ openNav }: Props) => {
//   const [navBg, setNavBg] = useState(false);

//   useEffect(() => {
//     const handler = () => {
//       if (window.scrollY >= 90) {
//         setNavBg(true);
//       } else if (window.scrollY < 90) {
//         setNavBg(false);
//       }
//     };

//     window.addEventListener("scroll", handler);

//     return () => {
//       window.removeEventListener("scroll", handler);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed ${
//         navBg ? "bg-[#1C1C1C] opacity-90" : "fixed"
//       } h-[12vh] z-[10]  w-full transition-all duration-200`}
//     >
//       <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
//         {/* Logo */}
//         <Image
//           src="/images/LOGOO.png"
//           alt="LOGO"
//           width={170}
//           height={170}
//           priority
//           className="ml-[-1.5rem] sm:ml-0"
//         />
//         {/* Nav Links */}
//         <div className="flex items-center space-x-10">
//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((navlink) => {
//               return (
//                 <Link key={navlink.id} href={navlink.url}>
//                   <p className="nav__link">{navlink.label}</p>
//                 </Link>
//               );
//             })}
//           </div>
//           {/* Button */}
//           <div className="flex items-center space-x-4">
//             <button className="md:px-10 md:py-3 px-8 py-3 text-white font-semibold sm:text-base text-sm bg-[#F78F42] hover:bg-white hover:text-black transition-all duration-200 rounded-lg">
//               <a href="#contacts">Contact Me</a>
//             </button>
//             {/* Menu Bar */}
//             <HiBars3BottomRight
//               onClick={openNav}
//               className="w-8 h-8 cursor-pointer text-white lg:hidden"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navBg ? "bg-[#1C1C1C] opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-[10vh] px-4 sm:px-8 md:px-12 xl:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/LOGO.png"
            alt="LOGO"
            width={140}
            height={140}
            priority
            className="object-contain w-24 sm:w-32"
          />
        </Link>

        {/* Navigation Links and Buttons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="text-white text-sm md:text-base font-medium hover:text-[#F78F42] transition-all duration-300">
                  {navlink.label}
                </p>
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <a href="#contacts">
            <button className="bg-[#F78F42] hover:bg-white hover:text-black text-white text-xs sm:text-sm md:text-base font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-md transition-all">
              Contact Me
            </button>
          </a>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
