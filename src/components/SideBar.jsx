import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/sideBar Icons/home.png";
import collections from "../assets/sideBar Icons/collections.png";
import logout from "../assets/sideBar Icons/Logout.png";
import musicVideo from "../assets/sideBar Icons/music-videos.png";
import radio from "../assets/sideBar Icons/radio.png";
import profile from "../assets/sideBar Icons/profile.png";

function SideBar({ toggleSideBar }) {
  return (
    <nav
      onClick={toggleSideBar}
      id="sideBar"
      className="bg-bgDarkSecondary border border-t-inputText border-x-0 border-b-0 fixed z-50  w-64  h-auto rounded-br-2xl mt-[64px] transition-all left-0 pl-9 py-16 "
    >
      <Link to="/">
        <div className="flex items-center  gap-x-7 mb-12 ml-[-12px] font-bold cursor-pointer rounded">
          <img src={home} alt="home icon" />
          <p className="ml-[-11px] text-textSideMenu text-[17px]">Home</p>
        </div>
      </Link>
      <Link to="/collections">
        <div className="flex items-center  gap-x-7 mb-12  font-bold cursor-pointer">
          <img src={collections} alt="home icon" className=" ml-[2px]" />
          <p className="ml-[5px] text-textSideMenu text-[17px] ">
            My Collections
          </p>
        </div>
      </Link>
      <div className="flex items-center  gap-x-7 mb-12 ml-[-4px]  font-bold cursor-pointer">
        <img src={radio} alt="home icon" className=" ml-[2px]" />
        <p className="text-textSideMenu text-[17px] ">Radio</p>
      </div>
      <div className="flex items-center  gap-x-7 mb-12  font-bold cursor-pointer">
        <img src={musicVideo} alt="home icon" className="" />
        <p className="text-textSideMenu text-[17px]">Music Video</p>
      </div>
      <div className="flex items-center  gap-x-7 mb-12  font-bold cursor-pointer">
        <img src={profile} alt="home icon" className="" />
        <p className="text-textSideMenu text-[17px]">Profile</p>
      </div>
      <div className="flex items-center  gap-x-7 font-bold cursor-pointer">
        <img src={logout} alt="home icon" className="" />
        <p className="text-textSideMenu text-[17px]">Log out</p>
      </div>
    </nav>
  );
}

export default SideBar;
