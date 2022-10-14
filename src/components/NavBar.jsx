import React, { useState } from "react";
import hamburger from "../assets/navBar/hamburger.svg";
import logo from "../assets/navBar/music-logo.svg";
import search from "../assets/navBar/search.svg";
import SideBar from "./SideBar";

function NavBar({ setShowSideBar }) {
  // Toggle Sidebar
  function toggleSideBar() {
    setShowSideBar((prevState) => !prevState);
  }
  return (
    <header className="bg-bgDarskSecondary  z-30 flex justify-between items-center p-6 fixed w-full top-0 left-0 right-0">
      <div className="flex items-center gap-x-6 md:w-[10%]">
        <img
          src={hamburger}
          alt="hamburger menu"
          className="cursor-pointer md:hidden"
          onClick={toggleSideBar}
        />
        <img src={logo} alt="logo icon" />
      </div>
      <div className="relative flex gap-x-2 items-center md:w-[90%]">
        <img
          src={search}
          alt="search icon"
          className="absolute top-2 right-1 cursor-pointer md:left-4"
        />
        <input
          id="search"
          type="search"
          placeholder="Search artists..."
          className="text-inputText outline-none  placeholder-inputText relative cursor-pointer py-2 px-3 rounded-lg bg-transparent focus-visible:border focus-visible:border-inputText md:w-full md:px-16"
        />
      </div>
    </header>
  );
}

export default NavBar;
