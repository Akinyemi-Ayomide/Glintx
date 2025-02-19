import React from 'react';

const GallerySkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(8)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GallerySkeleton;
