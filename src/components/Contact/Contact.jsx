import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Heading from "../Heading/Heading";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Remove the error for the specific field
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value.trim()) {
        delete newErrors[id];
      }
      return newErrors;
    });
  };

  const handleValidation = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      isValid = false;
      newErrors.firstName = "First name is required.";
    }

    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      isValid = false;
      newErrors.email = "Invalid email address.";
    }

    if (!formData.subject.trim()) {
      isValid = false;
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      isValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        const response = await axios.post(
          "https://formspree.io/f/xwppywjy", // Replace with your Formspree endpoint
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
        }
      } catch (error) {
        toast.error("There was an error submitting the form.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error("Error submitting form", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <hr />
      <div className="max-w-[900px] mx-auto px-4 md:px-8 font-sans">
        <Heading />
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full p-2 border border-gray-400"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full p-2 border border-gray-400"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-400"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              id="subject"
              type="text"
              className="w-full p-2 border border-gray-400"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className="text-red-600 text-sm">{errors.subject}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-2 border border-gray-400"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message}</p>
            )}
          </div>
          <Button
            type="submit"
            title="SUBMIT"
            bgColor="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700"
            textColor="text-white"
            width="w-28"
            height="h-12"
          />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
