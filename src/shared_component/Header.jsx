import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2">
      <div className="flex gap-4 justify-center items-center">
        {" "}
        <div className="w-8 h-8 bg-sky-500 rounded-full"></div>
        <div className="font-bold font-sans">SAROJ KAPALI</div>
        <div className="text-[10px] text-neutral-500">
          Data Science & React Developer
        </div>
      </div>
      <div>
        <ul className="flex gap-2 text-gray-500">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav_link text-red-600 underline" : ""
            }
            to={"/"}
          >
            <li>Home</li>
          </NavLink>
          <li>|</li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-600 underline" : ""
            }
            to={"/about"}
          >
            <li>About Me</li>
          </NavLink>
          <li>|</li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "text-red-600 underline" : ""
            }
          >
            <li>Contact</li>
          </NavLink>
          <li>|</li>
          <NavLink
            to={"/gallery"}
            className={({ isActive }) =>
              isActive ? "text-red-600 underline" : ""
            }
          >
            <li>Gallery</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
