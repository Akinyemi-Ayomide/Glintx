import React from 'react';

const Section1Skeleton = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 w-full mt-5">
      {/* Skeleton Placeholder for each item */}
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-full h-[200px] bg-gray-300 animate-pulse rounded-lg shadow-lg gap-2 py-2 px-2"
        >
          {/*<div className="w-5 h-5 bg-gray-400 rounded-full mb-4"></div>*/}{' '}
          {/* Placeholder for image */}
          {/*<div className="w-3/4 h-6 bg-gray-400 rounded-md"></div>*/}{' '}
          {/* Placeholder for text */}
        </div>
      ))}
    </div>
  );
};

export default Section1Skeleton;
