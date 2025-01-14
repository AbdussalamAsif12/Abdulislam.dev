import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";

const About = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center lg:h-[450px] md:h-[300px]">
          <img
            src="/images/pic_31.webp" // Replace with your image URL
            alt="Profile"
            className="rounded-md shadow-lg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-md"></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p
            className="mb-4 text-xl md:text-xl font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            Hi! I am{" "}
            <span className="font-Google_Delius text-red-600">Abdulislam</span>{" "}
            a passionate MERN Stack developer. I specialize in creating
            responsive user interfaces using Tailwind CSS and Bootstrap, while
            bringing dynamic functionality to life with React.js and JavaScript.
            From form validation to API integration, I craft seamless,
            interactive user experiences that adapt across devices and deliver
            smooth, engaging browsing experiences.
          </p>
          <p
            className="mb-4 text-lg md:text-xl leading-relaxed font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            In Backend development, I excel in: Authentication and
            Authorization: Implementing secure access control mechanisms. DBMS:
            Efficiently managing and storing data using MongoDB. API
            Development: Building RESTful APIs with Node.js and Express.js.
            WebSockets: Creating real-time updates and interactive experiences
            with Socket.io.
          </p>
          <p
            className="mb-4 text-lg md:text-xl leading-relaxed font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            I'm looking for an internship where I can further develop my backend
            expertise, contribute to meaningful work, and continue to grow as a
            full-stack developer.
          </p>
          <br />
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            Hover over 'Skills' to view an overview, and click on 'Projects' to
            explore them.
            <a href="/files/MY_CV.pdf" className="text-red-600" download>
              Download CV
            </a>
          </p>
          <Link to="/contact" className="inline-block">
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
      <Profile />
    </>
  );
};

export default About;
