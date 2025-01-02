import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PlatformSection = ({ platform, icon: Icon, color, data, tips, chart: Chart }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <Icon className={`h-10 w-10 ${color}`} />
          <h2 className="text-3xl font-bold ml-4">{platform}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Best Times to Post</h3>
            <ul className="space-y-2">
              {data.bestTimes.map((time, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-24 font-medium">
                    {time.day}:
                  </span>
                  <span>{time.times}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Tips</h3>
            <ul className="list-disc list-inside space-y-2">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {Chart}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;