import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex px-4 fixed text-white bg-black justify-between items-center w-full h-20">
      <div>
        <h1 className="text-5xl font-greatVibes ml-2">Aniket</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              {link}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden pr-4 z-4 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-14 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 capitalize cursor-pointer py-6 text-4xl"
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
