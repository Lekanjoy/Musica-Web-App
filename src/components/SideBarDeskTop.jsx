import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/sideBar Icons/home.png";
import collections from "../assets/sideBar Icons/collections.png";
import logout from "../assets/sideBar Icons/Logout.png";
import musicVideo from "../assets/sideBar Icons/music-videos.png";
import radio from "../assets/sideBar Icons/radio.png";
import profile from "../assets/sideBar Icons/profile.png";

function SideBarDeskTop() {
  return (
    <aside className="flex flex-col gap-y-5 z-30 w-14 mt-[85px] fixed ">
      <div className="w-full flex flex-col gap-y-7 bg-bgDarkSecondary rounded-full px-4 py-6">
        <Link to="/"><img src={home} alt="home  icon" className="w-full z-10" /></Link>
        <Link to="/collections"><img src={collections} alt="collections icon" className="" /></Link>
        <img src={radio} alt="radio icon" className="" />
        <img src={musicVideo} alt="musicVideo icon" className="" />
      </div>
      <div className="w-full flex flex-col gap-y-7 bg-bgDarkSecondary rounded-full px-4 py-6">
        <img src={profile} alt="profile icon" />
        <img src={logout} alt="logout icon" />
      </div>
    </aside>
  );
}

export default SideBarDeskTop;
