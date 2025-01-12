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
            className="mb-4 text-lg md:text-xl leading-relaxed font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            John Mauriello is an intensely driven industrial designer and
            adjunct professor of industrial design at California College of the
            Arts. He creates best-selling designs that look great, function
            intuitively, and meet real-world constraints around deadlines and
            cost.
          </p>
          <p
            className="mb-4 text-lg md:text-xl leading-relaxed font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            As the founder of Design Theory, John creates videos about design,
            amassing nearly 500,000 YouTube followers and over 20 million views.
            He has demonstrated his ability to deliver game-changing design work
            for the most recognizable brands on the planet.
          </p>
          <p
            className="mb-4 text-lg md:text-xl leading-relaxed font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            John's design philosophy is simple: Tools and products should be an
            extension of the body, requiring no conscious articulation or
            thought. These tools must also inspire us through their carefully
            crafted forms and surfaces. John's passion is to give people the
            intuitive and beautiful physical objects they need in order to
            achieve mastery in whatever activity they engage in.
          </p>
          <br />
          <p
            className="text-lg md:text-xl leading-relaxed mb-10 font-extrabold font-Google_Chivo"
            style={{ color: "#333333" }}
          >
            Some of John’s clients and accomplishments are listed below. CV
            available upon request.
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
