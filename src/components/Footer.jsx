import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 " id="contacts">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400">
              I'm a web developer passionate about creating interactive and user-friendly web applications. I enjoy learning new technologies and improving my skills.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="home" smooth={true} duration={500} className="hover:underline">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="technologies" smooth={true} duration={500} className="hover:underline">Technologies</Link>
              </li>
              <li className="mb-2">
                <Link to="projects" smooth={true} duration={500} className="hover:underline">Projects</Link>
              </li>
              <li className="mb-2">
                <Link to="contacts" className="hover:underline">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p className="text-gray-400 mb-2">Email: example@example.com</p>
            <p className="text-gray-400 mb-4">Phone: (123) 456-7890</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Mattia-Franchini" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-2x text-gray-400 hover:text-white"></i>
              </a>
              <a href="https://www.linkedin.com/in/mattia-franchini-088a932a2/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x text-gray-400 hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
