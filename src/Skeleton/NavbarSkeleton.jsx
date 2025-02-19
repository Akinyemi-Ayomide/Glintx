import React from 'react';

const NavbarSkeleton = () => {
  return (
    <div className="flex flex-row fixed top-0 w-full justify-between px-6 z-50 items-center bg-black text-white py-4 animate-pulse">
      {/* Skeleton for Logo */}
      <div>
        {' '}
        <div className="w-32 h-6 bg-gray-400 rounded-md"></div>
      </div>

      {/* Skeleton for Navbar Links */}

      {/* Skeleton for Menu Icon */}
      <div className='flex flex-row items-center  gap-2'>
        {' '}
        <div className="w-20 h-6 bg-gray-400 rounded-md"></div>
        <div className="w-20 h-6 bg-gray-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;
