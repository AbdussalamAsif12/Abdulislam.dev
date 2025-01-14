import React from "react";
import {
  FaHtml5,

  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaCar,
} from "react-icons/fa";
import { SiExpress, SiTinder } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const PortfolioSkillsProjects = () => {
  // Skills and Projects data as arrays of objects
  const skills = [
    {
      name: "HTML",
      percentage: 80,
      icon: <FaHtml5 className="mr-2 text-2xl text-orange-600" />,
    },
    {
      name: "Tailwind",
      percentage: 65,
      icon: <RiTailwindCssFill className="mr-2 text-2xl text-blue-600" />,
    },
    {
      name: "JavaScript",
      percentage: 70,
      icon: <FaJsSquare className="mr-2 text-2xl text-yellow-600" />,
    },
    {
      name: "Node.js",
      percentage: 70,
      icon: <FaNodeJs className="mr-2 text-2xl text-green-600" />,
    },
    {
      name: "React.js",
      percentage: 65,
      icon: <FaReact className="mr-2 text-2xl text-cyan-500" />,
    },
    {
      name: "MongoDB",
      percentage: 70,
      icon: <FaDatabase className="mr-2 text-2xl text-green-500" />,
    },
    {
      name: "Express.js",
      percentage: 70,
      icon: <SiExpress className="mr-2 text-2xl text-green-600" />,
    },
  ];

  const projects = [
    {
      name: "Xber - Online Cab Service",
      link: "https://uber.com",
      description: "Online Cab Service that connects riders with drivers.",
      icon: <FaCar className="mr-2 text-xl text-black" />,
    },
    {
      name: "DevTinder - Find BestDev",
      link: "https://tinder.com",
      description: "Find the best developers for your project or team.",
      icon: <SiTinder className="mr-2 text-xl" style={{ color: '#FF4B3E' }} />,
    },
  ];

  return (
    <section className="flex items-center justify-end py-16 font-Google_Open">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full max-w-2xl">
        {/* Skills Section */}
        <div className="flex-1 pl-6 md:pl-0">
          <h2 className="text-3xl font-semibold mb-6 pl-4 md:pl-0 ">
            My <span className="text-red-600">Skills</span>{" "}
          </h2>
          <ul className=" pl-10 space-y-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="text-xl font-medium relative group flex items-center"
                style={{ cursor: "pointer" }}
              >
                {skill.icon} {/* Display icon */}
                <span>{skill.name}</span>
                <span
                  className="p-5 ml-4 bottom-0 transform  w-24 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ fontSize: "1.2rem" }}
                >
                  {skill.percentage}%
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full max-w-2xl">
          {/* Projects Section */}
          <div className="flex-1 pl-6 md:pl-0">
            <h2 className="text-3xl font-semibold mb-6 pl-4 md:pl-0">
              My <span className="text-red-600">Projects</span>
            </h2>
            <ul className="pl-10 space-y-4">
              {projects.map((project, index) => (
                <li key={index} className="text-lg">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold py-2 px-4 rounded transition-all duration-300 flex items-center hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white"
                  >
                    <span className="flex items-center space-x-3">
                      {project.icon}
                      <span>{project.name}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkillsProjects;
