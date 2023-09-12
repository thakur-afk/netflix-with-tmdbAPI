import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between px-10 py-2 z-10  items-center sticky top-0 bg-black bg-opacity-90">
      <div className="flex gap-10">
        <div className="max-w-[100px]">
          <img
            src="/icons/netflix_official_logo_icon.svg
      "
          ></img>
        </div>
        <div>
          <ul className="flex gap-4  text-gray-400 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                ${isActive ? "text-white" : ""}
                `}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvshows"
                className={({ isActive }) => `
                ${isActive ? "text-white" : ""}
                `}
              >
                Tv Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) => `
                ${isActive ? "text-white" : ""}
                `}
              >
                Movie
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/tvshows"
                className={({ isActive }) => `
                ${isActive ? "text-white" : ""}
                `}
              >
                Genre
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div>
          <NavLink to="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-8 h-8"
            >
              {/* currentColor */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </NavLink>
        </div>
        <div className=" max-w-[50px]">
          <img className="w-10" src="/icons/user2.svg" alt="name"></img>
        </div>
      </div>
    </div>
  );
};

export default Nav;
