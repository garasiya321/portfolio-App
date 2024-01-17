import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Projects" },
    { id: 4, text: "About" },
    { id: 5, text: "TechSkills" },
    { id: 6, text: "Contact" },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 ${nav ? 'bg-[#3e993e]' : ''}`}>
   <div className="flex justify-between items-center h-24 max-w-[1275px] mx-auto px-4 text-pink-900">
   {/* Logo */}
        <img src="/images/Logo01.png" alt="DG logo" className="w-24 h-24 p-4"/>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-pink-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link
                to={item.text.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={4000}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div className="w- max-w-screen-xl mx-auto p-4 md:py-0">
       
       <hr className="border-gray-200 dark:border-pink-700" />
       <span className="span"></span>
   </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          nav
            ? "fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] cursor-pointer"
        }`}
      >
        {/* Mobile Logo */}
        <img src="/images/Name Logo.png" alt="DG logo" className="w-24 h-24" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link
              to={item.text.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={4000}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
