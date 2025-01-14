import React from "react";

const Button = ({ title, bgColor, textColor, width, height, icon: Icon, type }) => {
  return (
    <button
      type={type} // Dynamically set the type, default to "button"
      className={`flex items-center justify-center ${bgColor} ${textColor} ${width} ${height} rounded-lg shadow-md hover:shadow-lg transition duration-300 font-Google_Chivo`}
    >
      {Icon && <Icon className="mr-2 mx-2" size={26} />}
      {title}
    </button>
  );
};

export default Button;
