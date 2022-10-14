import React, { useState } from "react";
import Hero from "./Hero";
import Charts from './Charts'
import Releases from "./Releases";



const Home = () => {
  return (
    <main className="w-full relative">
      <section className="hero mt-[85px] md:ml-[5rem] md:flex">
        <Hero/>
        <Charts/>
      </section>
      <Releases/>
    </main>
  );
};

export default Home;
