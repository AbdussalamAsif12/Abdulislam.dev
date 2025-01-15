import React from "react";
import Button from "../Button/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="relative flex flex-col justify-end px-6 sm:px-8 md:px-12 lg:px-16 background-image">
        {/* Dark overlay on left and right */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content Section */}
        <div className="w-full max-w-[500px] h-[190px] text-white relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-Google_Delius">
            Abdulislam Asif
          </h1>
          <p className="mb-6 sm:mb-8 md:mb-10 font-Google_Chivo text-sm sm:text-base md:text-[18px]">
            I am a junior MERN stack developer specializing in creating scalable
            and secure web applications. I have successfully developed multiple
            projects using the MERN stack. To view these projects, simply click
            on the "About" button....
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap sm:flex-nowrap space-x-4 w-full max-w-[384px] h-20 mb-10 sm:mb-16 mt-5 relative z-10">
          {/* GitHub Button */}
          <a
            href="https://github.com/AbdussalamAsif12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              bgColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700"
              className="socialIcon"
              textColor="text-white"
              width="w-12"
              height="h-12"
              icon={FaGithub}
            />
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/abdulislam-asif-300925279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              bgColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700"
              className="socialIcon"
              textColor="text-white"
              width="w-12"
              height="h-12"
              icon={FaLinkedin}
            />
          </a>

          {/* Twitter Button */}
          <a
            href="https://x.com/Abdulislam_12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              bgColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700"
              className="socialIcon"
              textColor="text-white"
              width="w-12"
              height="h-12"
              icon={FaXTwitter}
            />
          </a>

          {/* About Button */}
          <Link to="/about">
            <Button
              title="About"
              bgColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700"
              textColor="text-white"
              width="w-28"
              height="h-12"
            />
          </Link>

          {/* Contact Button */}
          <Link to="/contact">
            <Button
              title="Contact"
              bgColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700"
              textColor="text-white"
              width="w-28"
              height="h-12"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
