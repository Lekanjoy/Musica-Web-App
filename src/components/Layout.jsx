import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SideBarDeskTop from "./SideBarDeskTop";
import MusicPlayer from './MusicPlayer';

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);


  return (
    <div className="App font-QuickSand relative bg-bgDarkPrimary w-full min-h-screen p-6">
      <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="fixed"><SideBarDeskTop/></div>
      <div className="md:hidden">{showSideBar && <SideBar />}</div>
      <div className=""><MusicPlayer/></div>
      <Outlet/>
    </div>
  );
}

export default Layout