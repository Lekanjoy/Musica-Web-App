import React from 'react'
import {Link} from 'react-router-dom'
import image from './assets/Rectangle 26.png'
import image1 from './assets/Rectangle 26 (1).png'
import image2 from './assets/Rectangle 26 (2).png'
import image3 from "./assets/Rectangle 26 (3).png";
import image4 from './assets/Rectangle 2.png'
import play from './assets/Play.svg'

function Collections() {
  return (
    <section className="text-white mt-[85px] md:ml-[5rem]">
      <div className="w-full flex gap-x-4  flex-1 items-center mb-6 cursor-pointer md:gap-x-2">
        <p className="text-sm w-1/2 text-center text-[#1D2123] bg-[#FACD66] p-3 rounded-3xl md:w-fit">
          My collection
        </p>
        <p className="text-sm w-1/2 text-center text-[#EFEEE0] py-3 px-8 rounded-3xl border border-[#EFEEE0] md:w-fit">
          Likes
        </p>
      </div>
      <div className="collections flex flex-col gap-y-5 w-full  md:items-center md:gap-x-6 md:flex-row">
        <div className="relative w-full h-[235px] md:w-[215px] md:h-[260px]">
          <img
            src={image}
            alt="cover image "
            className="w-full h-full md:h-fit"
          />
          <div className="text-[#EFEEE0] absolute bottom-8 left-6">
            <h3 className="text-2xl  mb-[1px]">Limits</h3>
            <p className="text-xs mb-8">John watts</p>
            <p className="text-sm md:hidden">23m likes</p>
          </div>
          <img
            src={play}
            alt="play button"
            className="absolute bottom-5 right-6 md:hidden"
          />
        </div>

        <div className="relative w-full h-[235px] md:w-[215px] md:h-[260px]">
          <img
            src={image1}
            alt="cover image "
            className=" w-full h-full md:h-fit"
          />
          <div className="text-[#EFEEE0] absolute bottom-8 left-6">
            <h3 className="text-2xl  mb-[1px]">Limits</h3>
            <p className="text-xs mb-8">John watts</p>
            <p className="text-sm md:hidden">23m likes</p>
          </div>
          <img
            src={play}
            alt="play button"
            className="absolute bottom-5 right-6 md:hidden"
          />
        </div>

        <div className="relative w-full h-[235px] md:w-[215px] md:h-[260px]">
          <img
            src={image2}
            alt="cover image "
            className=" w-full h-full md:h-fit"
          />
          <div className="text-[#EFEEE0] absolute bottom-8 left-6">
            <h3 className="text-2xl  mb-[1px]">Limits</h3>
            <p className="text-xs mb-8">John watts</p>
            <p className="text-sm md:hidden">23m likes</p>
          </div>
          <img
            src={play}
            alt="play button"
            className="absolute bottom-5 right-6 md:hidden"
          />
        </div>

        <div className="relative w-full h-[235px] md:w-[215px] md:h-[260px]">
          <img
            src={image3}
            alt="cover image "
            className="rounded-[20px] w-full h-full md:h-fit"
          />
          <div className="text-[#EFEEE0] absolute bottom-8 left-6">
            <h3 className="text-2xl  mb-[1px]">Limits</h3>
            <p className="text-xs mb-8">John watts</p>
            <p className="text-sm md:hidden">23m likes</p>
          </div>
          <img
            src={play}
            alt="play button"
            className="absolute bottom-5 right-6 md:hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Collections