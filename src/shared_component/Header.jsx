import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="max-w-full mx-auto flex justify-between items-center">
        <div className="w-20 sm:w-24 ">
          <img className="w-full object-contain" src="logoPng.png" alt="" />
        </div>
        {/* Hamburger menu for mobile */}
        <div className="sm:hidden" onClick={toggleMenu}>
          <div className="w-6 hamburgermenu">
            <img className="w-full object-contain " src="menu.png" alt="" />
          </div>
        </div>
        {/* Desktop menu */}
        <ul className="sm:flex hidden space-x-6">
          <li>
            <NavLink to={"/"} className=" hover:text-gray-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className=" hover:text-gray-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/service"} className=" hover:text-gray-400">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className=" hover:text-gray-400">
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 w-1/2  shadow-lg bg-gray-800  h-full transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <ul className="flex flex-col items-center mt-20">
            <li className="py-4">
              <NavLink
                to={"/"}
                className="text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                to={"/about"}
                className="text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                to={"/service"}
                className="text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                to={"/contact"}
                className="text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
