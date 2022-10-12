import cover from '../assets/musicplayer/Rectangle 15.png'
import play from '../assets/musicplayer/Frame 7.png'
import next from '../assets/musicplayer/next.png'

function MusicPlayer() {
  return (
    <footer
      id="footer"
      className="w-full h-[125px] px-6 text-white fixed flex justify-between items-center left-0 bottom-0 z-10"
    >
      <div className="flex items-center gap-x-1">
        <img src={cover} alt="music cover" className='mt-[25px] '/>
        <div className="details">
          <h3 className="font-bold mb-1">Seasons in</h3>
          <p className="text-sm text-[rgba(255_,255_,255_,0.44)]">James</p>
        </div>
      </div>

      <div className="flex items-center cursor-pointer">
        <img src={play} alt="play icon" className="" />
        <img src={next} alt="next icon" />
      </div>
    </footer>
  );
}

export default MusicPlayer;
