import { useEffect, useState } from "react";
import play from "../assets/musicplayer/Frame 7.png";
import pause from '../assets/musicplayer/pause.svg'
import next from "../assets/musicplayer/next.png";
import shuffle from "../assets/musicplayer/shuffle.png";
import previous from "../assets/musicplayer/previous.png";
import repeatOne from "../assets/musicplayer/repeate-one.png";
import volume from "../assets/musicplayer/volume-high.png";
import MusicData from "./MusicData";

function MusicPlayer() {
  // Set lower fill color in music range input
  const [progressValue, setProgressValue] = useState(0);
  let range;
  function setLowerFillColor() {
    let percent = ((progressValue - range.min) / (range.max - range.min)) * 100;
    range.style.background = `linear-gradient(to right, #FACD66, #FACD66 ${percent}%, rgba(255, 255, 255, 0.04) ${percent}%, rgba(255, 255, 255, 0.04) 100%)`;
  }
  // Set lower fill color in volume range input
  const [volumeValue, setVolumeValue] = useState(30);
  let range2 = document.getElementById("range2");
  function setLowerFillVolumeColor(e) {
    setVolumeValue(e.target.value);
    let percent =
      ((volumeValue - range2.min) / (range2.max - range2.min)) * 100;
    range2.style.background = `linear-gradient(to right, #FACD66, #FACD66 ${percent}%, rgba(255, 255, 255, 0.04) ${percent}%, rgba(255, 255, 255, 0.04) 100%)`;
  }

  let audio;
  useEffect(() => {
    audio = document.getElementById("audio");
    range = document.getElementById("range");
  });

  const [songs, setSongs] = useState(MusicData);
  // Keep track of Current Song
  const [currentSongIndex, setCurrrentSongIndex] = useState(0);

  // Handle Music Playing
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusic = () => {
    if (isPlaying === false) {
      playSong();
    } else {
      pauseSong();
    }
  };

  // Handle Play Song
  const playSong = () => {
    setIsPlaying(true);
    audio.play();
  };

  // Handle Pause Song
  const pauseSong = () => {
    setIsPlaying(false);
    audio.pause();
  };

  // Handle Next Song
  function nextSong() {
    setCurrrentSongIndex(
      currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0
    );
    setTimeout(() => {
      playSong();
    }, 100);
  }

  // Handle Previous Song
  function prevSong() {
    setCurrrentSongIndex(
      currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1
    );
    setTimeout(() => {
      playSong();
    }, 100);
  }

  // Handle Shuffle Song
  function shuffleSong() {
    const musicDataLength = songs.length - 1;
    let randomSongIndex = Math.floor(Math.random() * musicDataLength);
    setCurrrentSongIndex(randomSongIndex);
    console.log(randomSongIndex);
  }

  // Update Music Progress Bar
  function updateMusicProgress(e) {
    const { currentTime, duration } = e.target;
    const ProgressPercent = (currentTime / duration) * 100;
    setProgressValue(ProgressPercent);
    setLowerFillColor();
    // console.log((duration/60).toFixed(2));
  }
  // Set Music Progress Bar
  function setMusicProgress(e) {
    const maxValue = range.max;
    const clickedSpot = e.clientX;
    const duration = audio.duration;

    audio.currentTime = (clickedSpot / maxValue) * duration;
  }

  const coverImageStyles = "mt-[25cpx] max-w-[75px] max-h-[65px] ";
  const musicInfoStyles = "relative flex items-center gap-x-2";

  return (
    <footer
      id="footer"
      className="w-full h-[125px] z-40 bsg-[#1E1E1E] px-6 text-white fixed flex justify-between items-center left-0 bottom-0"
    >
      <audio
        onTimeUpdate={updateMusicProgress}
        id="audio"
        src={`/src/components/musicFiles//${songs[currentSongIndex]?.src}`}
        type="audio/mpeg"
      ></audio>
      <div
        id="coverImage"
        className={
          isPlaying === true
            ? `${musicInfoStyles} after:content-[''] after:absolute after:top-[24px] after:left-[24px] after:w-[15px] after:h-[15px] after:bg-white after:rounded-full`
            : musicInfoStyles
        }
      >
        <img
          src={`/src/components/musicFiles//${songs[currentSongIndex]?.coverImage}`}
          alt="music cover"
          className={
            isPlaying === true
              ? `${coverImageStyles} animate-spin rounded-full`
              : coverImageStyles
          }
        />
        <div className="details">
          <h3 className="font-bold mb-1">
            {songs[currentSongIndex]?.musicName}
          </h3>
          <p className="text-sm text-[rgba(255_,255_,255_,0.44)]">
            {songs[currentSongIndex]?.artistName}
          </p>
        </div>
      </div>
      {/* Controls for desktop */}
      <div className="hidden flex-col w-[750px] items-center cursor-pointer md:flex">
        <div className="flex items-center  gap-x-11">
          <img onClick={shuffleSong} src={shuffle} alt="shuffle button" />
          <img onClick={prevSong} src={previous} alt="previous button" />
          <img onClick={handleMusic} src={play} alt="button" />
          <img onClick={nextSong} src={next} alt="next button" />
          <img src={repeatOne} alt="repeatOne button" />
        </div>
        <input
          min="0"
          max="100"
          step="1"
          value={progressValue}
          onChange={setLowerFillColor}
          onClick={setMusicProgress}
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
        <img onClick={handleMusic} src={play} alt="play button " className="" />
        <img onClick={nextSong} src={next} alt="next button" />
      </div>
    </footer>
  );
}

export default MusicPlayer;
