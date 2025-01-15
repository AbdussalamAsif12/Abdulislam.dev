import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import DynamicTitle from "../DynamicTitle/DynamicTitle ";
import "./About.css";
const About = () => {
  return (
    <>
      <DynamicTitle title="About" />
      <Navbar />
      <hr />
      <div
        className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8"
        style={{
          background: "linear-gradient(120deg, #f8f9fa, #ffffff)",
          minHeight: "100vh",
        }}
      >
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center lg:h-[450px] md:h-[300px] overflow-hidden">
          <img
            src="/images/pic_2.webp"
            alt="Profile"
            className="rounded-md shadow-lg w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-20 rounded-md"></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 ">
            Hi! I'm{" "}
            <span className="text-red-500 font-Google_Delius">Abdulislam.</span>
          </h1>

          <p className="text-lg md:text-lg font-medium text-gray-700 leading-relaxed text-justify">
            I am a MERN stack developer currently pursuing a Bachelor's degree
            in Computer Science from Virtual University. With a keen interest in
            full-stack development, I focus on building modern, scalable, and
            efficient web applications.
          </p>
          <p className="text-lg md:text-lg font-medium text-gray-700 leading-relaxed text-justify">
            As a Frontend{" "}
            <span className="text-xl text-blue-700 font-Google_Chivo ">
              React.js
            </span>{" "}
            developer, I specialize in building responsive and interactive user
            interfaces using Tailwind CSS and Bootstrap. I develop dynamic web
            applications by utilizing React’s component-based architecture, and
            I am skilled in API integration to enhance the functionality of the
            applications. My goal is to deliver seamless user experiences.
          </p>
          <p className="text-lg md:text-lg font-medium text-gray-700 leading-relaxed text-justify">
            As a Backend{" "}
            <span className="text-xl text-green-700 font-Google_Chivo ">
              Node.js
            </span>{" "}
            developer, I focus on building scalable and efficient
            server-side applications using Node.js and Express.js. I design and
            implement RESTful APIs, manage database interactions with MongoDB,
            and ensure smooth data flow between the client and server. My
            emphasis is on creating secure, high-performance back-end services
            that support modern web applications while optimizing for speed and
            reliability.
          </p>
          <p className="text-lg md:text-lg font-medium text-gray-700">
            Hover over <span className="text-red-500">Skills</span> for an
            overview, and click on{" "}
            <span className="text-red-500">Projects</span> to explore them.{" "}
            <br />
            <br />
            If you want to know more,{" "}
            <a
              href="/files/MY_CV.pdf"
              className="text-red-500 underline hover:text-red-600"
              download
            >
              Download CV
            </a>
          </p>

          <Link to="/contact" className="inline-block">
            <Button
              title="Contact"
              bgColor="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              textColor="text-white"
              width="w-32"
              height="h-12"
              className="font-semibold shadow-md transform transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </div>
      <Profile />
    </>
  );
};

export default About;
