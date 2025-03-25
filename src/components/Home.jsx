import React from "react";
import { ReactTyped } from "react-typed";
import srk from "../../public/WhatsApp Image 2025-03-21 at 11.11.52.jpeg";
import { FaCity, FaGithub, FaHome, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaReddit } from "react-icons/fa6";

function Home() {
  return (
    <div name="Home" className="bg-gray-100 py-16 mt-10">
      <div className="max-w-screen-xl container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 text-center md:text-left">
          <span className="text-lg text-gray-700 font-semibold">
            Welcome To My World
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            My Name Is <span className="text-green-600">Shah Rukh Khan</span> <br />
            And I`m Not An Actor 😄
          </h1>

          <div className="text-xl md:text-3xl mt-4 flex flex-wrap justify-center md:justify-start space-x-2">
            <h1>I'm an</h1>
            <ReactTyped
              className="text-green-500 font-bold"
              strings={["Engineer", "Developer", "Programmer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>

          <p className="text-gray-600 text-sm md:text-md mt-4 leading-relaxed">
            With 1.5+ years of experience, I specialize in building scalable, high-performance web applications.
            My expertise includes developing robust backends, dynamic frontends, and efficient APIs using MongoDB, Express.js, React, and Node.js. 🚀
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-8 space-y-6 md:space-y-0">

            <div>
              <h1 className="font-semibold text-md md:text-lg text-gray-700 text-center md:text-left">Find Me On</h1>
              <div className="flex justify-center md:justify-start space-x-4 md:space-x-5 mt-2">
                <a href="https://www.instagram.com/_iamsrk_786?igsh=Y3hhaXk5MGFpN21v" target="_blank">
                  <FaInstagramSquare className="text-2xl md:text-3xl text-pink-500 hover:scale-110 transition-all duration-200" />
                </a>
                <a href="https://www.linkedin.com/in/shahrukh-khan-2362471a9" target="_blank">
                  <FaLinkedin className="text-2xl md:text-3xl text-blue-600 hover:scale-110 transition-all duration-200" />
                </a>
                <a href="https://github.com/iamsrk0786" target="_blank">
                  <FaGithub className="text-2xl md:text-3xl text-gray-900 hover:scale-110 transition-all duration-200" />
                </a>
                <a href="https://www.reddit.com/user/Shah-Rukh-0786/" target="_blank">
                  <FaReddit className="text-2xl md:text-3xl text-red-500 hover:scale-110 transition-all duration-200" />
                </a>
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-md md:text-lg text-gray-700 text-center md:text-left">
                Tech Stack
              </h1>
              <div className="flex justify-center md:justify-start space-x-4 md:space-x-5 mt-2">
                <SiMongodb className="text-2xl md:text-3xl text-green-600 hover:scale-110 transition-all duration-200" />
                <SiExpress className="text-2xl md:text-3xl text-gray-700 hover:scale-110 transition-all duration-200" />
                <FaReact className="text-2xl md:text-3xl text-blue-500 hover:scale-110 transition-all duration-200" />
                <FaNodeJs className="text-2xl md:text-3xl text-green-500 hover:scale-110 transition-all duration-200" />
              </div>
            </div>

          </div>
          <div className="mt-5">
            <p className="text-gray-600 flex items-center justify-center gap-2 text-lg font-bold mb-3">
              <FaHome size={28} />
            </p>
            <h4 className="text-gray-600 flex items-center justify-center gap-2 text-lg">Lives In - Jaipur, Rajasthan, India </h4>
            <h4 className="text-gray-600 flex items-center justify-center gap-2 text-lg font-semibold">HomeTown - Alwar, Rajasthan, India </h4>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <img
            src={srk}
            className="w-50 h-50 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-lg border-4 border-gray-300"
            alt="Shah Rukh Khan"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;


