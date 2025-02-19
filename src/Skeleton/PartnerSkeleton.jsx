import React from 'react';

const PartnerSkeleton = () => {
  return (
    <div className="flex flex-row gap-2 py-2 mt-5 px-5 h-[50px]">
      {/* Skeleton Placeholder for each partner logo */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="w-12 h-12 bg-gray-300 animate-pulse rounded-full flex justify-center items-center"
        >
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>{' '}
          {/* Placeholder for logo */}
        </div>
      ))}
    </div>
  );
};

export default PartnerSkeleton;
