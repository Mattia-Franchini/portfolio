import React from "react";
import { FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-left text-white mb-8 md:mb-0 md:mr-24">
          <h1 className="text-3xl md:text-7xl font-bold mb-4 animate-fade-in-down">
            Hi, I'm Mattia Franchini
          </h1>
          <p className="text-2xl md:text-4xl animate-fade-in-up">
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
