import React from 'react';
import Hero from './components/Hero/Hero';
import PlatformSection from './components/Platform/PlatformSection';
import Footer from './components/Footer/Footer';
import { platformsData } from './data/platformData';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Hero />
      <div className="divide-y divide-gray-200 flex-grow">
        {Object.entries(platformsData).map(([key, platform]) => (
          <PlatformSection
            key={key}
            platform={platform.platform}
            icon={platform.icon}
            color={platform.color}
            data={platform.data}
            tips={platform.tips}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;