import React from "react";

const Button = ({ title, bgColor, textColor, width, height, icon: Icon, type, additionalClasses }) => {
  return (
    <button
      type={type || "button"}
      className={`flex items-center justify-center ${bgColor} ${textColor} ${width} ${height} rounded-lg shadow-md hover:shadow-lg transition duration-300 font-Google_Chivo ${additionalClasses}`}
    >
      {Icon && <Icon className="mr-2" size={20} />}
      {title}
    </button>
  );
};

export default Button;
