import React from 'react';

const PlatformHeader = ({ icon: Icon, platform, color }) => (
  <div className="flex items-center mb-8">
    <Icon className={`h-10 w-10 ${color}`} />
    <h2 className="text-3xl font-bold ml-4">{platform}</h2>
  </div>
);

export default PlatformHeader;