import React from 'react';

const AboutSection3Skeleton = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-2 mt-10">
        {/* Left Skeleton - Mission */}
        <div className="rounded-lg shadow-lg p-10">
          <div className="w-32 h-6 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-full h-10 bg-gray-300 animate-pulse mb-6"></div>
          <div className="w-full h-6 bg-gray-300 animate-pulse mb-2"></div>
          <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
        </div>

        {/* Right Skeleton - Vision */}
        <div className="rounded-lg shadow-lg p-10">
          <div className="w-32 h-6 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-full h-10 bg-gray-300 animate-pulse mb-6"></div>
          <div className="w-full h-6 bg-gray-300 animate-pulse mb-2"></div>
          <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3Skeleton;
