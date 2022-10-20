import React, { useState, useEffect } from "react";
import hamburger from "../assets/navBar/hamburger.svg";
import logo from "../assets/navBar/music-logo.svg";
import search from "../assets/navBar/search.svg";
import SideBar from "./SideBar";

function NavBar({ setShowSideBar, toggleSideBar }) {
  // Add background onScroll
  useEffect(() => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > "20") {
        header.style.background = "#1A1E1F";
      } else {
        header.style.background = "transparent";
      }
    });
  }, []);

  return (
    <header
      id="header"
      className="bg-bgDarskSecondary  z-30 flex justify-between items-center p-6 fixed w-full top-0 left-0 right-0"
    >
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
