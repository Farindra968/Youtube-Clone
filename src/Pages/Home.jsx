import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { fetchData } from "../API/Api";
import VideoCard from "../Components/VideoCard";

const Home = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  }
  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex gap-2">
          {<Sidebar isExpanded={isSidebarExpanded}/>}
        <section className="  w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 m-1">
             {[...Array(27)].map((_, index) => (
               <VideoCard key={index} />
             ))}
           </section>
        </div>

    </div>
  );
};

export default Home
