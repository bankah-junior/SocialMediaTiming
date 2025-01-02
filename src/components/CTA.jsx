import React from 'react';

const CTA = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Download Our Free Guide!
        </h2>
        <p className="text-xl mb-8">
          Get detailed insights and strategies for each platform
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default CTA;