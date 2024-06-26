import React from "react";
import { FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-left text-white mb-8 md:mb-0 md:mr-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
            Hi, I'm Mattia Franchini 
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in-up-delayed">
            WEB DEVELOPER
          </p>
        </div>
        <div className="animate-bounce">
          <FaCode className="text-7xl md:text-9xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
