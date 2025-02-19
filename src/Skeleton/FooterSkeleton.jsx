import React from 'react';

const FooterSkeleton = () => {
  return (
    <div>
      <footer className="bg-black text-white text-center py-4 animate-pulse">
        {/* Skeleton for Footer Heading */}
        <div className="w-32 h-6 bg-gray-400 rounded-md mx-auto"></div>
      </footer>
    </div>
  );
  
};

export default FooterSkeleton;
