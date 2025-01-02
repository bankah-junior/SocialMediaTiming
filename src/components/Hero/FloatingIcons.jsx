import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

const icons = [
  { Icon: FaInstagram, color: 'text-pink-500', delay: '0s' },
  { Icon: FaLinkedin, color: 'text-blue-500', delay: '0.2s' },
  { Icon: FaTwitter, color: 'text-sky-500', delay: '0.4s' },
  { Icon: FaTiktok, color: 'text-white', delay: '0.6s' },
  { Icon: FaYoutube, color: 'text-red-500', delay: '0.8s' }
];

const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {icons.map(({ Icon, color, delay }, index) => (
      <Icon
        key={index}
        className={`absolute ${color} opacity-20 animate-float`}
        style={{
          fontSize: `${Math.random() * 20 + 20}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: delay
        }}
      />
    ))}
  </div>
);

export default FloatingIcons;