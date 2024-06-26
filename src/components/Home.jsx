import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          Hi, I'm Mattia Franchini
        </h1>
        <p className="text-2xl animate-fade-in-up-delayed">
          WEB DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default Home;
