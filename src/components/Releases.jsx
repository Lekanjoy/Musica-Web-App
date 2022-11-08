import { useContext } from "react";
import { SongContext } from "../App";

const Releases = () => {
  const { newReleases } = useContext(SongContext);
  //Build skeleton loader with animation-pulse

  return (
    <section className="w-full mb-4 md:pl-[5rem]">
      <h2 className="mb-3 text-textCategories font-bold">New Releases</h2>
      <div className="w-full flex gap-x-8 overflow-x-auto ">
        {newReleases.map((song) => {
          return (
            <div key={song.title} className="min-w-[153px] min-h-[200px] text-xs text-white mb-1">
              <img
                src={song.cover}
                alt="cover image"
                className="min-w-[153px] min-h-[168px] rounded-3xl mb-1"
              />
              <h4 className="mb-1">{song.title}</h4>
              <p className="text-artistNameText">{song.artist}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Releases;
