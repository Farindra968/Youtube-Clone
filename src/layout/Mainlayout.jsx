import React from 'react'
import Header from "../Components/Header";
import { Outlet } from 'react-router-dom';


const Mainlayout = ({toggleSidebar}) => {
    return (
        <>
            <Header  toggleSidebar={toggleSidebar}  />
            <Outlet/>
        </>
  )
}

export default Mainlayout
