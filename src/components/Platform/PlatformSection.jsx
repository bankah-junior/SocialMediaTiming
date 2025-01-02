import React from 'react';
import PlatformHeader from './PlatformHeader';
import BestTimes from './BestTimes';
import PlatformTips from './PlatformTips';
import BestDays from './BestDays';

const PlatformSection = ({ platform, icon, color, data, tips }) => {
  return (
    <div className="py-24 transition-all duration-300 ease-in-out hover:bg-gray-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="transform hover:scale-[1.01] transition-transform duration-300">
          <PlatformHeader icon={icon} platform={platform} color={color} />
          <div className="grid gap-12 md:grid-cols-1">
            <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-8">
              <BestTimes times={data.bestTimes} />
              <BestDays days={data.peakDays} />
              <PlatformTips tips={tips} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;