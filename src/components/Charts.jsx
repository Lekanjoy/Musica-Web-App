import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/hero icons/Rectangle 17 (1).png";
import image1 from "../assets/hero icons/Rectangle 17 (2).png";
import image2 from "../assets/hero icons/Rectangle 17.png";
import heart from "../assets/hero icons/Heart2.png";

function Charts() {
  return (
    <section className="w-full font-extralight my-12  md:w-[50%] md:mt-0  md:ml-6">
      <h1 className="font-bold text-[20px] mb-3 text-textCategories  md:text-2xl">
        Top charts
      </h1>
      <div className="categories flex gap-x-4 w-full overflow-x-auto md:flex-col">
        <div className="charts">
          <div className="flex flex-col gap-y-4 text-white md:gap-x-4 md:flex-row ">
            <img src={image2} alt="music cover image" className="w-[110px] h-[100px] md:w-auto md:h-auto" />
            <div className="-mt-1">
              <h2 className="text-lg mb-2 md:mb-1">Golden age of 80s</h2>
              <p className="text-artistNameText text-xs mb-6 font-normal md:mb-2">
                Sean swadder
              </p>
              <p className="text-xs ">2:34:45</p>
            </div>
          </div>
          <div className="border p-1 rounded-full border-[rgba(255_,255_,255_,0.11)]">
            <img src={heart} alt="like icon" />
          </div>
        </div>

        <div className="charts">
          <div className="flex flex-col gap-y-4 text-white md:gap-x-4 md:flex-row ">
            <img src={image} alt="music cover image" className="w-[110px] h-[100px] md:w-auto md:h-auto" />
            <div className="-mt-1">
              <h2 className="text-lg mb-2 md:mb-1">Reggae “n” blues</h2>
              <p className="text-artistNameText text-xs mb-6 font-normal md:mb-2">
                Dj YK mule
              </p>
              <p className="text-xs ">1:02:42</p>
            </div>
          </div>
          <div className="border p-1 rounded-full border-[rgba(255_,255_,255_,0.11)]">
            <img src={heart} alt="like icon" />
          </div>
        </div>

        <Link to="/tunes">
          <div className="charts">
            <div className="flex flex-col gap-y-4 text-white md:gap-x-4 md:flex-row ">
              <img src={image1} alt="music cover image" className="w-[110px] h-[100px] md:w-auto md:h-auto" />
              <div className="-mt-1">
                <h2 className="text-lg mb-2 md:mb-1">Tomorrow’s tunes</h2>
                <p className="text-artistNameText text-xs mb-6 font-normal md:mb-2">
                  Obi Datti
                </p>
                <p className="text-xs ">2:01:25</p>
              </div>
            </div>
            <div className="border p-1  rounded-full border-[rgba(255_,255_,255_,0.11)]">
              <img src={heart} alt="like icon" />
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}

export default Charts;
