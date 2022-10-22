import React, {useState,useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { SongContext } from "../App";
import heart from "../assets/hero icons/Heart2.png";

function Charts() {
  const {newSongs} = useContext(SongContext);
  const [loading, setLoading] = useState(true); 


  return (
    <section className="w-full font-extralight my-12  md:w-[50%] md:mt-0  md:ml-6">
      <h1 className="font-bold text-[20px] mb-3 text-textCategories  md:text-2xl">
        Top charts
      </h1>
      <div className="categories flex gap-x-4 w-full overflow-x-auto md:flex-col">
      {newSongs?.map((song) => {
        return (
          <Link key={song.id} to={`tunes/${song.id}`}>
            <div className="charts">
              <div className="flex flex-col gap-y-4 text-white md:gap-x-4 md:flex-row ">
                <img
                  src={song.cover}
                  alt="music cover image"
                  className="w-[110px] h-[100px] md:w-[63px] md:h-[63px] rounded-2xl"
                />
                <div className="-mt-1">
                  <h2 className="text-lg mb-2 md:mb-1">{song.title}</h2>
                  <p className="text-artistNameText text-xs mb-6 font-normal md:mb-2">
                    {song.id}
                  </p>
                  <p className="text-xs ">2:01:25</p>
                </div>
              </div>
              <div className="border p-1  rounded-full border-[rgba(255_,255_,255_,0.11)]">
                <img src={heart} alt="like icon" />
              </div>
            </div>
          </Link>
        );
      })}

      </div>
    </section>
  );
}

export default Charts;
