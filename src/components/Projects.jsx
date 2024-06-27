import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
      <div className="text-center w-full">
        <h2 className="text-4xl text-white font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-auto max-w-6xl p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2 row-span-2">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-700">Description for project 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2 row-span-1">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-700">Description for project 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 row-span-1">
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-700">Description for project 3.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 row-span-1">
            <h3 className="text-2xl font-bold mb-2">Project 4</h3>
            <p className="text-gray-700">Description for project 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
