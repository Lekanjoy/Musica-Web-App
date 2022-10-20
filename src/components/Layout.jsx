import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SideBarDeskTop from "./SideBarDeskTop";
import MusicPlayer from './MusicPlayer';

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  // Toggle Sidebar
  function toggleSideBar() {
    setShowSideBar((prevState) => !prevState);
  }


  return (
    <div
      // onClick={showSideBar === true ? toggleSideBar : null}
      className="App font-QuickSand relative bg-bgDarkPrimary w-full min-h-screen p-6"
    >
      <NavBar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        toggleSideBar={toggleSideBar}
      />
      <div className=" hidden md:flex">
        <SideBarDeskTop />
      </div>
      <div className="md:hidden">
        {showSideBar && <SideBar toggleSideBar={toggleSideBar} />}
      </div>
      <div className="">
        <MusicPlayer />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout