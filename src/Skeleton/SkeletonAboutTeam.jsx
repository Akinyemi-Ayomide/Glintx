import React from 'react';

const SkeletonAboutTeam = () => {
  return (
    <div>
      <div>
        <div className="w-32 h-6 bg-gray-300 animate-pulse mb-4"></div>
        <div className="w-64 h-10 bg-gray-300 animate-pulse mb-10"></div>
        <div className="grid md:grid-cols-4 gap-5">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div key={index} className="relative">
                <div className="w-full h-64 bg-gray-300 animate-pulse rounded-2xl shadow-lg"></div>
                <div className="absolute bottom-0 left-0 w-full bg-gray-400 animate-pulse h-10 rounded-lg"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonAboutTeam;
