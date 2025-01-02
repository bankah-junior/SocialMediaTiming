import React from 'react';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import FloatingIcons from './FloatingIcons';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 overflow-hidden">
      <FloatingIcons />
      <div className="relative max-w-7xl mx-auto px-6 text-center animate-fadeIn">
        <HeroTitle />
        <HeroSubtitle />
      </div>
    </div>
  );
};

export default Hero;