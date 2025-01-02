import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FaChartLine className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">SocialTiming</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;