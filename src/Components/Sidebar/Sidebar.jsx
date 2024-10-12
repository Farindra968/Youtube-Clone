import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserClock, FaYoutube } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { GiHelp } from "react-icons/gi";
import { GoHistory, GoTrophy, GoVideo } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoFlagOutline, IoMusicalNote, IoSettingsOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import {
  MdContactEmergency,
  MdOutlineCopyright,
  MdOutlineFeedback,
  MdSubscriptions,
} from "react-icons/md";
import { RiPlayList2Line, RiScissorsFill } from "react-icons/ri";
import {
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
  SiYoutubestudio,
} from "react-icons/si";
import { SlLike } from "react-icons/sl";
import { VscSettingsGear } from "react-icons/vsc";

const Sidebar = ({isExpanded }) => {
  
  const sidebar1 = [
    {
      id: 1,
      name: "Home",
      icon: <AiFillHome />,
    },
    {
      id: 1,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 1,
      name: "Subscription",
      icon: <MdSubscriptions />,
    },
  ];
  const sidebar2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <MdContactEmergency />,
    },
    {
      id: 1,
      name: "History",
      icon: <GoHistory />,
    },
    {
      id: 1,
      name: "Playlist",
      icon: <RiPlayList2Line />,
    },
    {
      id: 1,
      name: "Your Video",
      icon: <GoVideo />,
    },
    {
      id: 1,
      name: "Watch Later",
      icon: <FaUserClock />,
    },
    {
      id: 1,
      name: "Liked Video",
      icon: <SlLike />,
    },
    {
      id: 1,
      name: "Your Clips",
      icon: <RiScissorsFill />,
    },
  ];
  const sidebar3 = [
    {
      id: 1,
      name: "Codeit",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_nGwPraGeRX0HR1WSCKHcuRhG1AC8JyQy_zb-udsU_lHs0=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      id: 1,
      name: "Code with Herry",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_m05oPc8I5nhz_ej6JdKoxA6vglaI76AMqtDELBj1s2o0o=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 1,
      name: "Nepal Premire Le..",
      logo: "https://yt3.googleusercontent.com/9U-YPBq9ovclMnsKlAJ0OjqVQ8OiIpPgVyLC9hMULQDFZHMjcZyCU8fBMRD56aH_19ZZTLHW2g=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 1,
      name: "E.Nepal",
      logo: "https://yt3.ggpht.com/ilYagYomrE69BwPCY3GyZ4iroDhrZEFmdpaGsdgZFBr8GGr8IOAxTN0MZhN5e15yr0g7yZiiBw=s176-c-k-c0x00ffffff-no-rj-mo",
    },
  ];
  const sidebar4 = [
    {
      id: 1,
      name: "Trending",
      icon: <FaFire />,
    },
    {
      id: 1,
      name: "Music",
      icon: <IoMusicalNote />,
    },
    {
      id: 1,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 1,
      name: "Sports",
      icon: <GoTrophy />,
    },
  ];
  const sidebar5 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 1,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 1,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      name: "Youtube Kid",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebar6 = [
    {
      id: 1,
      name: "Setting",
      icon: <VscSettingsGear />,
    },
    {
      id: 1,
      name: "Report history",
      icon: <IoFlagOutline />,
    },
    {
      id: 1,
      name: "Help",
      icon: <GiHelp />,
    },
    {
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];
  return (
    <aside  className={`${isExpanded ? 'w-[17.5%] overflow-y-scroll' : 'w-[8%] overflow-y-hidden'} h-[calc(100vh-4.525rem)]  overflow-x-hidden scrollbar-thin  `}> 

      {/*Sidebar1 */}
      <div className=" h-auto ">
        {sidebar1.map((item) => {
          return (
            // <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
            <div className={`${isExpanded ? 'flex item center gap-5 mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg':'grid grid-rows-2 mb-3 place-content-center  text-xs  hover:bg-slate-200 hover:rounded-lg p-3 mx-3 '}`}>
              <div className={`${isExpanded ? '':'flex justify-center text-xl'} text-xl`}>{item.icon}</div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>

      <div className={`${isExpanded ? '' : 'hidden'}`}>
      <br />
      <hr />
      <br />
              {/*Sidebar2 */}
      <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
        <p>Your</p>
        <IoIosArrowForward />
      </div>
      <div className=" h-auto ">
        {sidebar2.map((item) => {
          return (
            <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
              <div className="text-xl">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*Sidebar3 */}
      <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 py-2 font-semibold ">
        <p>Subscription</p>
      </div>
      <div className=" h-auto ">
        {sidebar3.map((item) => {
          return (
            <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
              <div className="w-5 h-5 rounded-full">
                <img src={item.logo} className="w-5 h-5 rounded-full" alt="" />
              </div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
        <IoIosArrowDown />
        <p>Show More</p>

      </div>
      <br />
      <hr />
      <br />
      {/*Sidebar4 */}
      <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 py-2 font-semibold ">
        <p>Explore</p>
      </div>
      <div className=" h-auto ">
        {sidebar4.map((item) => {
          return (
            <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
              <div className="text-xl">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>

      <br />
      <hr />
      <br />
      {/*Sidebar5 */}
      <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 py-2 font-semibold ">
        <p>More From Youtube</p>
      </div>
      <div className=" h-auto ">
        {sidebar5.map((item) => {
          return (
            <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
              <div className="text-xl text-red-700">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <br />
      {/*Sidebar6 */}
      <div className=" h-auto ">
        {sidebar6.map((item) => {
          return (
            <div className="flex items-center gap-5 font-roboto text-[16px] mx-5 px-2 py-2 hover:bg-slate-200 hover:rounded-lg">
              <div className="text-xl">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <br />
      <div className="inline-flex font-roboto text-[12px] mx-5 px-2 py-2 ">
        <p>
          About Press Copyright <br /> Contact us Creator Advertise <br />{" "}
          Developers
        </p>
      </div>
      <div className="inline-flex font-roboto text-[12px] mx-5 px-2 py-2 ">
        <p>
          Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new
          features
        </p>
      </div>
      <div className="inline- font-roboto text-gray-400 text-[12px] mx-5 px-2 py-2 ">
        <p> © 2024 GOOGLE LLC</p>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
