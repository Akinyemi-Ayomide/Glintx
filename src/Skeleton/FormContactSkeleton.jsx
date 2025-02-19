import React from 'react';

const FormContactSkeleton = () => {
  return (
    <div>
      <div className="w-full h-screen px-4 animate-pulse">
        <div className="h-10 w-48 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-4 w-full bg-gray-300 rounded-md mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="h-12 bg-gray-300 rounded-md"></div>
          <div className="h-12 bg-gray-300 rounded-md"></div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-2">
          <div className="h-12 bg-gray-300 rounded-md"></div>
          <div className="h-32 bg-gray-300 rounded-md"></div>
        </div>
        <div className="h-12 bg-gray-400 rounded-md mt-4"></div>
      </div>
    </div>
  );
};

export default FormContactSkeleton;
