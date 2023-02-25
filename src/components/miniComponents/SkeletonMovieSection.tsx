import React from "react";
import SkeletonCard from "./SkeletonCard";

const SkeletonMovieSection = () => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse  mt-24 px-12"
    >
      <div className="h-6 bg-gray-800  rounded-full w-48 mb-4 " />
      <div className="card-holder w-full h-full space-x-3 overflow-x-scroll whitespace-nowrap">
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
      </div>
      


      
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonMovieSection;
