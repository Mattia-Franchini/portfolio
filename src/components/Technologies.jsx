import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiC, SiGo } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const Technologies = () => {
  const [showTechs, setShowTechs] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animazione scatta solo una volta
    threshold: 0.5, // Trigger dell'animazione quando la sezione è a metà schermo
  });

  useEffect(() => {
    if (inView) {
      setShowTechs(true); // Mostra le tecnologie quando la sezione è visibile
    }
  }, [inView]);

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
    <div id="technologies" ref={ref} className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold text-white mb-10">Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
        {techs.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-white p-8 md:p-12 transform transition-all duration-1000 ease-out ${
              showTechs ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-20'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {tech.icon}
            <p className="mt-4 text-xl text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
