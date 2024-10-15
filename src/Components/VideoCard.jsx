import React from 'react'
import Enepal from "../assets/Enepal.png"
import Codeit from '../assets/Codeit.jpg'

const VideoCard = () => {
  return (
    <div className="mx-w-sm rounded overflow-hidden ">
    <div className="relative">
      <img
        className="w-full rounded-lg"
        src="https://i.ytimg.com/vi/5A7KJoA6amw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPa3cjZA4uG4c6oTZhSmxKeeZpiw"
        alt="Pushpa 2"
        width="320"
        height="180"
        style={{ aspectRatio: "320/180", objectFit: "cover" }}
      />
      <div className="absolute bottom-0 right-0 bg-black text-white text-xs px-1.5 py-0.5">2:25:41</div>
    </div>
    <div className="p-2">
      <div className="flex items-start">
        <img
          className="w-10 h-10 rounded-full"
          src={Codeit}
          alt="Channel Logo"
          width="40"
          height="40"
          style={{ aspectRatio: "40/40", objectFit: "cover" }}
        />
        <div className="ml-3">
          <div className="font-semibold text-[16px]">ow KP OLI Destroyed His Reputation?</div>
          <div className="text-gray-600 mt-2 text-sm font-semibold">InDepth Story</div>
          <div className="text-gray-600 mt-1 text-sm">157K views • 4 hours ago</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VideoCard
