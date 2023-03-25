import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aniket-kasale/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/aniketkasale",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:aniketkasale02@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaLinkedin size={30} />
        </>
      ),
      href: "/Resume_Aniket_Kasale.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li
          className={
            "hidden rounded-tr-md lg:flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"
          }
        >
          <a
            href="https://www.linkedin.com/in/aniket-kasale/"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li
          className={
            "hidden lg:flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"
          }
        >
          <a
            href="https://github.com/aniketkasale"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li
          className={
            "hidden lg:flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"
          }
        >
          <a
            href="mailto:aniketkasale02@gmail.com"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
          >
            Mail <HiOutlineMail size={30} />
          </a>
        </li>
        <li
          className={
            "hidden lg:flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"
          }
        >
          <a
            href="/Resume_Aniket_Kasale.pdf"
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferrer"
            download={true}
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
