import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full h-[70px] px-10">
        <Link to="/">
          {/* Wrap the h1 tag with Link */}
          <h1 className="text-3xl font-bold font-Google_Chivo">
            Abdulislam Asif
          </h1>
        </Link>
        <h3 className="text-lg text-gray-600 sm:pl-10 sm:text-xl sm:text-gray-800 font-Google_Open">
          Website Developer
        </h3>
      </div>
    </>
  );
};

export default Navbar;
