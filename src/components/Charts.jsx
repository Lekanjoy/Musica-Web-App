import React from "react";
import image from "../assets/hero icons/Rectangle 17 (1).png";
import image1 from "../assets/hero icons/Rectangle 17 (2).png";
import image2 from "../assets/hero icons/Rectangle 17.png";
import heart from "../assets/hero icons/Heart2.png";

function Charts() {
  return (
    <section className="ml-6 w-[620px] font-extralight">
      <h1 className="font-bold text-2xl mb-3 text-textCategories">
        Top charts
      </h1>
      <div className="categories flex md:flex-col">
        <div className="bg-bgDarkSecondary flex justify-between items-center mb-3 p-4 rounded-3xl">
          <div className="flex text-white gap-x-4  ">
            <img src={image2} alt="music cover image" className="" />
            <div className="-mt-1">
              <h2 className="text-lg mb-1">Golden age of 80s</h2>
              <p className="text-artistNameText text-xs mb-2 font-normal">Sean swadder</p>
              <p className="text-xs ">2:34:45</p>
            </div>
          </div>
          <div className="border p-1 rounded-full border-[rgba(255_,255_,255_,0.11)]">
            <img src={heart} alt="like icon" />
          </div>
        </div>

        <div className="bg-bgDarkSecondary flex justify-between items-center mb-3 p-4 rounded-3xl">
          <div className="flex text-white gap-x-4  ">
            <img src={image} alt="music cover image" className="" />
            <div className="-mt-1">
              <h2 className="text-lg mb-1">Reggae “n” blues</h2>
              <p className="text-artistNameText text-xs mb-2 font-normal">Dj YK mule</p>
              <p className="text-xs ">1:02:42</p>
            </div>
          </div>
          <div className="border p-1 rounded-full border-[rgba(255_,255_,255_,0.11)]">
            <img src={heart} alt="like icon" />
          </div>
        </div>

        <div className="bg-bgDarkSecondary flex justify-between items-center mb-3 p-4 rounded-3xl">
          <div className="flex text-white gap-x-4  ">
            <img src={image1} alt="music cover image" className="" />
            <div className="-mt-1">
              <h2 className="text-lg mb-1">Tomorrow’s tunes</h2>
              <p className="text-artistNameText text-xs mb-2 font-normal">Obi Datti</p>
              <p className="text-xs ">2:01:25</p>
            </div>
          </div>
          <div className="border p-1 rounded-full border-[rgba(255_,255_,255_,0.11)]">
            <img src={heart} alt="like icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charts;
