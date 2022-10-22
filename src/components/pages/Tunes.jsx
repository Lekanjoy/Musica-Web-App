import React, {useContext, useState} from "react";
import { useParams } from "react-router-dom";
import cover from './assets/tunes asssets/Lead-image.svg'
import play from './assets/tunes asssets/Play.png'
import collection from './assets/tunes asssets/music-square-add.png'
import heart from './assets/tunes asssets/Heart.svg'
import more from './assets/tunes asssets/more-vertical.png'
import like from './assets/tunes asssets/Heart transparent.svg'
import image1 from './assets/tunes asssets/Rectangle 25 (1).png'
// import { SongContext } from "../Home";
import { SongContext } from "../../App";


function Tunes() {
    const {newSongs} = useContext(SongContext);
    let { charts } = useParams();
    let currentChart = newSongs.find((song) => song.id === charts);

  return (
    <section className="text-white mt-[85px] md:ml-[5rem]">
      <div
        id="test"
        className=" z-10 w-full flex flex-col gap-x-7 pb-12  md:flex-row md:items-end"
      >
        <img
          src={currentChart?.cover}
          alt="cover image"
          className="absolute w-full opacity-10 z-[1] bottom-[70%]  right-0 md:min-h-[70vh] md:bottom-[37%]"
        />
        <img
          src={currentChart?.cover}
          alt="cover image"
          className="z-10 rounded-3xl  md:w-[285px] md:h-[290px]"
        />
        <div className="text z-10">
          <div className="mb-10 max-w-[530px]">
            <h3 className="text-[#A4C7C6] text-4xl mt-6 font-bold mb-2 md:mt-0">
              {currentChart?.title}
            </h3>
            <p className="text-sm mb-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <p className="text-sm ">{currentChart?.files.length} songs ~ 16 hrs+</p>
          </div>
          <div className="actions flex  gap-x-2 items-center">
            <div className="flex items-center gap-x-2 p-[10px] bg-actionsBg rounded-full">
              <img src={play} alt="" />
              <p className="text-xs">Play all</p>
            </div>
            <div className="flex items-center gap-x-2 p-[10px] bg-actionsBg rounded-full">
              <img src={collection} alt="" />
              <p className="text-xs">Add to collection</p>
            </div>
            <div className="flex items-center gap-x-2 p-[10px] bg-actionsBg rounded-full ">
              <img src={heart} alt="" />
              <p className="text-xs md:hidden">Like</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tunes flex flex-col gap-y-2 pb-36">
       {currentChart?.files.map(song => {
        return (
          <div key={song.id} className="cursor-pointer z-10 h-14 w-full rounded-2xl bg-tunesBg  px-3 flex justify-between items-center">
            <div className="flex items-center gap-x-3  md:gap-x-20">
              <div className="flex items-center gap-x-4">
                <img src={song.cover} alt="music image" className="w-[39px] h-[39px] rounded-lg"/>
                <img src={like} alt="like icon" className="hidden md:block" />
              </div>
              <div className="">
                <p className="text-xs w-[150px]">{song.title} - {song.artist}</p>
                <p className="text-xs   w-20 md:hidden">Single</p>
              </div>
            </div>
            <p className="hidden text-xs  text-center w-20 md:block">Single</p>
            <p className="hidden text-xs w-6 text-center md:block">04:17</p>
            <div className="flex flex-col gap-y-1">
              <img src={more} alt="more options button" />
              <p className=" text-xs w-6 text-center md:hidden">04:17</p>
            </div>
          </div>
        );
        
       })}

      </div>
    </section>
  );
}

export default Tunes;
