import React, { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import VideoCard from "../Components/VideoCard";
import Mainlayout from "../layout/Mainlayout";

const Home = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  }
  return (
    <div className="mt-16">
      <Mainlayout toggleSidebar={toggleSidebar} className='xs:z-50' />
      <div className="flex xs:gap-0 gap-2 xs:relative xs:top-0  ">
        <div className="xs:absolute xs:z-50"> 
        {<Sidebar isExpanded={isSidebarExpanded} className=' ' />}
        </div>
        <section className={`${isSidebarExpanded ? 'xs:grid-cols-1 xs:w-a xs:-z-50 grid  lg:grid-cols-3 gap-4 mx-3' : 'xs:grid-cols-1 xs:-z-50 w-[95%] grid grid-cols-3 gap-2 mx-3'}`}>
        {/* " w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 " */}
             {[...Array(27)].map((_, index) => (
               <VideoCard key={index} />
             ))}
           </section>
        </div>

    </div>
  );
};

export default Home
