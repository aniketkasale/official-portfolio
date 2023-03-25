import React from "react";
import heroImg from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="md:mt-0 mt-36 flex-col flex justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a skilled software developer with 1.6+ years of experience in
            building innovative web applications. My expertise lies in utilizing
            modern technologies such as React, Tailwind, Next.js, and Firebase
            to create stunning, user-centric designs and efficient solutions for
            clients. Let's work together to bring your vision to life!
          </p>
          <div className="">
            <button className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="py-6">
          <img
            src={heroImg}
            alt="my profile"
            className="rounded-lg mx-auto w-2/3 md:full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
