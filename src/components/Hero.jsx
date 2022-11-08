import React from "react";
import photo from "../assets/hero icons/Pexels Photo by Eric Esma.png";
import Ellipse from "../assets/hero icons/Ellipse 2.png";
import Ellipse1 from "../assets/hero icons/Ellipse 3.png";
import Ellipse2 from "../assets/hero icons/Ellipse 4.png";
import Ellipse3 from "../assets/hero icons/Ellipse 5.png";
import Ellipse4 from "../assets/hero icons/Ellipse 6.png";
import heart from "../assets/hero icons/Heart.png";

function Hero() {
let names = ["Alice","Bob","Bob"]
let heights = [155,185,150]

  // function singleNumber(nums){
  //   let single = 0;
  //   for(let i = 0; i < nums.length; i++){
  //     single = nums[i];
  //   }
  //   return single;
    
  // }
// var plusOne = function(digits) {

//     var i = digits.length - 1;
//     while (i >= 0) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         }
//         digits[i] = 0;
//         i--;
//     }
//     digits.unshift(1);
//     return digits;
    
    
//};

  return (
    <div
      className="bg-heroBG bg-vectormob bg-no-repeat bg-right-top text-white w-full h-[503px]
     rounded-[40px] pl-8 md:pl-11 md:w-[50%] md:h-[478px] md:flex md:justify-between md:bg-vector md:bg-right"
    >
      <div className="h-full flex flex-col justify-between  md:my-9 md:h-auto">
        <p className="text-xs font-normal mt-8">Currated playlist</p>
        <div className="">
          <h1 className="text-4xl font-bold mb-2">R & B Hits</h1>
          <p className="text-sm w-[276px]">
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>
        <div className="ellipses flex gap-x-3 mb-8">
          <div className="flex items-center">
            <img src={Ellipse2} alt="Ellipse icon" />
            <img src={Ellipse1} alt="Ellipse icon" className="-ml-3" />
            <img src={Ellipse} alt="Ellipse icon" className="-ml-3" />
            <img src={Ellipse3} alt="Ellipse icon" className="-ml-3" />
            <img src={Ellipse4} alt="Ellipse icon" className="-ml-3" />
          </div>
          <div className="flex items-center gap-x-2 ">
            <img src={heart} alt="heart icon" className="w-3 h-3" />
            <p className="text-sm ">33k Likes</p>
          </div>
        </div>
      </div>

      <div className="hidden  md:block">
        <img src={photo} alt="hero image" className="md:h-full" />
      </div>
    </div>
  );
}

export default Hero;
