import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="items-center justify-center w-44 h-56 bg-gray-800 rounded inline-block">
        <div className="h-24 rounded-lg bg-rose-100/10 m-4"></div>
  <div className="space-y-3">
    <div className="h-3 w-3/5 ml-4 rounded-lg bg-rose-100/10"></div>
    <div className="h-3 w-4/5 ml-4 rounded-lg bg-rose-100/20"></div>
    <div className="h-3 w-2/5 ml-4 rounded-lg bg-rose-100/20"></div>
  </div>
      </div>
  )
}