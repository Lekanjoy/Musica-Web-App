import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SideBarDeskTop from "./SideBarDeskTop";
import Hero from "./Hero";
import Charts from './Charts'
const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <main>
      <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="md:hidden">{showSideBar && <SideBar />}</div>
      <section className="hero mt-[85px] md:flex">
        <SideBarDeskTop/>
        <Hero/>
        <Charts/>

      </section>
    </main>
  );
};

export default Home;
