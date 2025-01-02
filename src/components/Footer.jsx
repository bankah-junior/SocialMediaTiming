import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaTwitter className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
              <FaTiktok className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SocialTiming. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;