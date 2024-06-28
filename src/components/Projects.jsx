import React from "react";
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false });

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
      <div className="text-center w-full">
        <h2 className="text-4xl text-white font-bold mb-4 mt-20">Projects</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-auto max-w-6xl p-4">
          <div
            ref={ref1}
            className={`bg-white p-6 rounded-lg shadow-lg col-span-2 row-span-2 flex flex-col transform transition-transform duration-[2000ms] ${
              inView1 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <img src="src/assets/studioamico.png" className="mb-4 rounded-lg"></img>
            <h3 className="text-2xl font-bold mb-2">Studio amico</h3>
            <p className="text-gray-700 mb-4">Studio amico is a web app where you can give and receive free lessons (different subjects, for now it's only for a specific school)</p>
            <div className="mt-16 grid grid-cols-2 gap-4 pt-4">
              <a href="https://studioamico.duckdns.org:5000/" className="text-blue-500 hover:underline">Link to website</a>
              <a href="https://github.com/Mattia-Franchini/StudioAmicoFrontend" className="text-blue-500 hover:underline">Link to frontend github</a>
              <a href="https://github.com/Mattia-Franchini/StudioAmicoBackend" className="text-blue-500 hover:underline">Link to backend github</a>
              <a href="https://github.com/MattiaFranchini1/Progetto_GEP" className="text-blue-500 hover:underline">Link to project study</a>
            </div>
          </div>
          <div
            ref={ref2}
            className={`bg-white p-6 rounded-lg shadow-lg col-span-2 row-span-1 transform transition-transform duration-[2000ms] ${
              inView2 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <img src="src/assets/portfolioimg.png"></img>
            <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-gray-700">My personal portfolio, what you are seeing in this moment</p>
            <div className="mt-4">
              <a href="https://github.com/Mattia-Franchini/portfolio" className="text-blue-500 hover:underline">Link to github</a>
            </div>
          </div>
          <div
            ref={ref3}
            className={`bg-white p-6 rounded-lg shadow-lg col-span-1 row-span-1 transform transition-transform duration-[2000ms] ${
              inView3 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="h-40 bg-gray-300 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
          </div>
          <div
            ref={ref4}
            className={`bg-white p-6 rounded-lg shadow-lg col-span-1 row-span-1 transform transition-transform duration-[2000ms] ${
              inView4 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="h-40 bg-gray-300 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
