
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+919024383224";
  const phoneNumber2 = "+919799976676";
  const email = "srks50940@email.com";

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10"
      name="Contact"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Contact Me
      </h2>
      <h3 className="font-semibold mb-4">I am always open to exciting opportunities, collaborations, and challenging projects. Let’s connect and build something great together!</h3>
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-sm md:max-w-md lg:max-w-lg w-full text-center">

        <div className="mt-4">
          <p className="text-gray-600 flex items-center justify-center gap-2 text-lg font-bold mb-3">
            <FaWhatsapp className="text-green-500" size={24} /> Chat Or Call 📲 On 👋
          </p>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            {phoneNumber}
          </a>
          {" "}
          <a
            href={`https://wa.me/${phoneNumber2}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            {phoneNumber2}
          </a>
        </div>

        <div className="mt-5">
          <p className="text-gray-600 flex items-center justify-center gap-2 text-lg font-bold mb-3">
            <FaEnvelope className="text-blue-500" size={24} /> Send an Email
          </p>
          <a
            href={`mailto:${email}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

