import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-8 font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-16 mt-10">Contact Me</h1>
        <p className="text-base">COMPLETE THE FORM BELOW....</p>
      </div>

      {/* Form Section */}
      <form className="flex flex-col gap-6">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name <span className='text-red-600'>*</span>
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full p-2 border border-gray-400"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
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
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className='text-red-600'>*</span>
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
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject <span className='text-red-600'>*</span>
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
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message <span className='text-red-600'>*</span>
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-2 border border-gray-400"
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-4 text-white bg-red-600 border-none hover:bg-red-700 w-36 transition duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
