const SkeletonSection3 = () => {
  return (
    <div className="mt-4 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-5 animate-pulse">
        <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-3/4 h-10 bg-gray-300 rounded-md mb-5"></div>
          <div className="w-5/6 h-96 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSection3;
