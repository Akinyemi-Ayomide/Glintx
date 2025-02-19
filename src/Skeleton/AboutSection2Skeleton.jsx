import React from 'react';

const AboutSection2Skeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section (Text Skeleton) */}
        <div className="p-5">
          <div className="w-24 h-5 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-full h-10 bg-gray-300 animate-pulse mb-6"></div>
          <div className="w-full h-6 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-full h-6 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
        </div>

        {/* Right Section (Image & Stats Skeleton) */}
        <div className="p-5">
          <div className="w-full h-64 bg-gray-300 animate-pulse rounded-3xl mb-4"></div>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="w-full h-20 bg-gray-300 animate-pulse rounded-lg"></div>
            <div className="w-full h-20 bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2Skeleton;
