import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaPython} from "react-icons/fa";
import { SiC, SiGo } from "react-icons/si";

const Technologies = () => {
  const techs = [
    { name: "React", icon: <FaReact className="text-8xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-8xl text-green-500" /> },
    { name: "Database", icon: <FaDatabase className="text-8xl text-yellow-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-8xl text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-8xl text-blue-700" /> },
    { name: "JavaScript", icon: <FaJs className="text-8xl text-yellow-300" /> },
    { name: "Python", icon: <FaPython className="text-8xl text-blue-300" /> },
    { name: "C", icon: <SiC className="text-8xl text-blue-500" /> },
    { name: "Go", icon: <SiGo className="text-8xl text-teal-500" /> },
  ];

  return (
    <div id="technologies" className="bg-gray-800 py-20">
      <h2 className="text-4xl font-bold text-white text-center mb-10">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center text-white w-1/4">
            {tech.icon}
            <p className="mt-4 text-xl">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
