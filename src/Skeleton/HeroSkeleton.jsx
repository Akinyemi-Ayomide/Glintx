import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="w-full h-screen bg-gray-300 animate-pulse">
      <div className="flex justify-center items-center w-full h-full">
        <div className="text-center">
          <div className="w-3/4 h-12 bg-gray-400 rounded-md mx-auto mb-4"></div>
          <div className="w-1/2 h-6 bg-gray-400 rounded-md mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
