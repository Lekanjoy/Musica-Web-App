import { useEffect, useState } from "react";
import cover from "../assets/musicplayer/Rectangle 15.png";
import play from "../assets/musicplayer/Frame 7.png";
import next from "../assets/musicplayer/next.png";
import shuffle from "../assets/musicplayer/shuffle.png";
import previous from "../assets/musicplayer/previous.png";
import repeatOne from "../assets/musicplayer/repeate-one.png";
import volume from "../assets/musicplayer/volume-high.png";

function MusicPlayer() {
  // set lower fill color in music range input
  const [value, setValue] = useState(0);
  let range = document.getElementById("range");
  function setLowerFillColor(e) {
    setValue(e.target.value);
    let percent = ((range.value - range.min) / (range.max - range.min)) * 100;
    range.style.background = `linear-gradient(to right, #FACD66, #FACD66 ${percent}%, rgba(255, 255, 255, 0.04) ${percent}%, rgba(255, 255, 255, 0.04) 100%)`;
  }

  // set lower fill color in volume range input
  const [volumeValue, setVolumeValue] = useState(0);
  let range2 = document.getElementById("range2");
  function setLowerFillVolumeColor(e) {
    setVolumeValue(e.target.value);
    let percent = ((range2.value - range.min) / (range2.max - range2.min)) * 100;
    range2.style.background = `linear-gradient(to right, #FACD66, #FACD66 ${percent}%, rgba(255, 255, 255, 0.04) ${percent}%, rgba(255, 255, 255, 0.04) 100%)`;
  }

  return (
    <footer
      id="footer"
      className="w-full h-[125px] z-50 bsg-[#1E1E1E] px-6 text-white fixed flex justify-between items-center left-0 bottom-0 z-10"
    >
      <div className="flex items-center gap-x-1">
        <img src={cover} alt="music cover" className="mt-[25px] " />
        <div className="details">
          <h3 className="font-bold mb-1">Seasons in</h3>
          <p className="text-sm text-[rgba(255_,255_,255_,0.44)]">James</p>
        </div>
      </div>
      {/* Controls for desktop */}
      <div className="hidden flex-col w-[750px] items-center cursor-pointer md:flex">
        <div className="flex items-center  gap-x-11">
          <img src={shuffle} alt="shuffle button" />
          <img src={previous} alt="previous button" />
          <img src={play} alt="button" />
          <img src={next} alt="next button" />
          <img src={repeatOne} alt="repeatOne button" />
        </div>
        <input
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={setLowerFillColor}
          type="range"
          id="range"
          className="w-full"
        />
      </div>

      <div className="hidden relative gap-x-2 items-center cursor-pointer  md:flex">
        <img src={volume} alt="volume button" />
        <input
          type="range"
          id="range2"
          min="0"
          max="100"
          step="1"
          value={volumeValue}
          onChange={setLowerFillVolumeColor}
        />
        <p className="font-bold absolute right-12 top-5">{volumeValue}%</p>
      </div>

      {/* Controls for desktop */}

      <div className="flex items-center cursor-pointer md:hidden">
        <img src={play} alt="play button " className="" />
        <img src={next} alt="next button" />
      </div>
    </footer>
  );
}

export default MusicPlayer;
