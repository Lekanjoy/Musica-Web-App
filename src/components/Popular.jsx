import { useContext } from "react";
import { SongContext } from "../App";

const Popular = () => {
    const { popularSongs } = useContext(SongContext);

  return (
    <section className="w-full mb-36 md:pl-[5rem]">
      <h2 className="mb-3 text-textCategories font-bold">Popular in your area</h2>
      <div className="w-full flex gap-x-8 overflow-x-auto ">
        {popularSongs.map((song) => {
          return (
            <div key={song.id} className="min-w-[153px] min-h-[200px] text-xs text-white mb-1">
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

export default Popular;
