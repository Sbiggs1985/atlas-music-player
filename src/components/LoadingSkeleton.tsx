import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse flex flex-col gap-4">
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
    </div>
  );
};

export default LoadingSkeleton;