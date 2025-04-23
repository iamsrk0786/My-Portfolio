import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import srk from "../../public/WhatsApp Image 2025-03-21 at 12.36.37.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Experiance" },
    { id: 4, text: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">

          <div className="flex space-x-2">
            <img
              src={srk}
              className="h-12 w-12 rounded-full cursor-pointer hover:scale-105 transition"
              alt="Profile"
              onClick={() => setIsModalOpen(true)}
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Shah{" "}
              <span className="text-green-500 text-2xl">Rukh</span>
              <p className="text-sm">Software Engineer</p>
            </h1>
          </div>


          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-green-500 cursor-pointer transition-colors"
                  activeClass="text-green-500 font-bold"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300">
            <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-semibold">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-green-500 cursor-pointer transition-colors"
                    activeClass="text-green-500 font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative">
              <img
                src={srk}
                className="max-w-full max-h-screen rounded-lg shadow-lg"
                alt="Full Profile"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

