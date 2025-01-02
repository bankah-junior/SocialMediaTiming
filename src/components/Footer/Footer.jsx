import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Bankah. All rights reserved.
      </p>
      <div className="flex items-center mt-4 md:mt-0">
        <a
          href="https://github.com/bankah-junior"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;