import React, { useState } from "react";
import { FaSearch, FaYoutube } from "react-icons/fa";
import { IoIosMenu, IoIosSearch, IoMdMic } from "react-icons/io";
import { LuBell } from "react-icons/lu";
import { MdOutlineVideoCall } from "react-icons/md";
import Enepal from '../assets/Enepal.png'

const Header = ({toggleSidebar }) => {

  return (
    <>
      <section className=" xs:gap-3 fixed top-0 z-50 bg-white w-full h-auto flex items-center xs:justify-between justify-center">
        {/* YT-LOGO */}
        <div className=" xs:w-auto w-[25%] flex  justify-center items-center py-2">
          <IoIosMenu onClick={toggleSidebar} className="text-3xl text-gray-600 w-[50px] h-[50px] p-2" />
          <FaYoutube className="text-3xl text-red-500 ml-3"/>
          <span className="font-roboto text-xl text-black font-semibold pl-2">
            Youtube <sup className="text-xs">NP</sup>
          </span>
        </div>
        {/* SEARCHBAR AND MIC */}
        <div className="xs:w-auto w-[100%]  flex gap-2 justify-center items-center">
          <div className="xs:bg-transparent xs:border-none border-slate-300 bg-slate-200 border-2 rounded-full xs:w-auto xs:h-auto w-[600px] h-10 flex items-center justify-between">
            <input
              type="search"
              placeholder="Search"
              className=" xs:hidden text-xl w-full h-[38px] pl-3 rounded-l-full border-slate-300"
            ></input>
            <IoIosSearch className="xs:w-auto w-[65px] h-[30px] border-none" />
          </div>
          <div className="">
            <IoMdMic className=" text-4xl p-1.5 bg-slate-100 border-2 rounded-full hover:bg-slate-200" />
          </div>
        </div>

        {/* PROFILE BELL AND UPLOAD */}
        <div className="xs:w-auto w-[20%] flex justify-center items-center xs:gap-1 gap-6 xs:pr-3 pr-5">
          <div className="">
            <MdOutlineVideoCall className=" w-[45px] h-[45px] p-2 hover:rounded-full hover:bg-slate-200" />
          </div>
          <div className="">
            <LuBell className="  w-[40px] h-[40px] p-2 hover:rounded-full hover:bg-slate-200" />
          </div>
          <div className="">
            <img
              src={Enepal}
              className="w-[40px] h-[40px] rounded-full"
              alt="User-Profile"
            />
          </div>
        </div>
      </section>
      <hr className="" />
      {/* Sidebar Components
      <div className={`w-1/6 bg-blue-600 z-50 overflow-auto ${showsidebar ? "hidden" : "" }`}
        >
        <Sidebarlist/>
      </div> */}

    </>
  );
};

export default Header;
