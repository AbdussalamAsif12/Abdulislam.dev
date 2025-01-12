import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="max-w-[900px] mx-auto px-4 md:px-8 font-sans">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-16 mt-10 font-Google_Chivo">
            Hi! Let's work together.
          </h1>
          <p className="text-base font-Google_Chivo">
            COMPLETE THE FORM BELOW....
          </p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-6">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1 font-Google_Open"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full p-2 border border-gray-400"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1 font-Google_Open"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full p-2 border border-gray-400"
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 font-Google_Open"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-400"
              required
            />
          </div>
          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-1 font-Google_Open"
            >
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              id="subject"
              type="text"
              className="w-full p-2 border border-gray-400"
              required
            />
          </div>
          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 font-Google_Open"
            >
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-2 border border-gray-400"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <Button
            title="SUBMIT"
            bgColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700"
            textColor="text-white"
            width="w-28"
            height="h-12"
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
