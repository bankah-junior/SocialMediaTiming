import React from 'react';

const PlatformTips = ({ tips }) => (
  <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
    <h3 className="mb-4 text-2xl font-bold text-gray-800">Platform Tips</h3>
    <ul className="space-y-3 list-none">
      {tips.map((tip, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 text-blue-500">•</span>
          <p className="text-gray-700">{tip}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default PlatformTips;
