import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-gray-300" />
      <footer className="py-12 bg-gray-100">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/share/19zng8b16c/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://x.com/imsrk_786?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaXTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/_iamsrk_786?igsh=Y3hhaXk5MGFpN21v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/shahrukh-khan-2362471a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700 transition duration-300"
              >
                <FaLinkedinIn size={28} />
              </a>        
              <a
                href="https://github.com/iamsrk0786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaGithub size={28} />
              </a>
            </div>

            <div className="mt-8 border-t border-gray-400 pt-6 text-center">
              <p className="text-sm text-gray-600">
                &copy; 2025 <span className="font-semibold">ShaRK the ShaRP</span>. All rights reserved.
              </p>
              <p className="text-sm text-gray-600">
                Supportive Partner ❤️ <span className="font-semibold">SRK</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

