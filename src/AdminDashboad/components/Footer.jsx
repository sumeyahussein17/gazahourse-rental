import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
      {/* Left Side */}
      <p className="mb-2 md:mb-0 text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600">Garissa Rentals</span>. All rights reserved.
      </p>

      {/* Right Side */}
      <div className="flex items-center space-x-4 text-gray-500">
        <a
          href="#"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="#"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
