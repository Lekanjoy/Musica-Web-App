import image from "../assets/releases icon/Rectangle 14.png";
import image1 from "../assets/releases icon/Rectangle 14 (1).png";
import image2 from "../assets/releases icon/Rectangle 14 (2).png";
import image3 from "../assets/releases icon/Rectangle 14 (3).png";
import image4 from "../assets/releases icon/Rectangle 14 (4).png";
import image5 from "../assets/releases icon/Rectangle 14 1.png";

const Releases = () => {

  return (
    <section className="w-full mb-24 md:pl-[5rem]">
      {" "}
      {/* remove mb-40 later on*/}
      <h2 className="mb-3 text-textCategories font-bold">New Releases</h2>
      <div className="w-full flex gap-x-8 overflow-x-auto ">
        <div className="w-[153px] h-[200px] text-xs text-white mb-1">
          <img src={image} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
        <div className="w-[153px] h-[153px] text-xs text-white mb-1">
          <img src={image1} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
        <div className="w-[153px] h-[153px] text-xs text-white mb-1">
          <img src={image2} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
        <div className="w-[153px] h-[153px] text-xs text-white mb-1">
          <img src={image3} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
        <div className="w-[153px] h-[153px] text-xs text-white mb-1">
          <img src={image4} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
        <div className="w-[153px] h-[153px] text-xs text-white mb-1">
          <img src={image5} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
        <div className="w-[153px] h-[153px] text-xs text-white mb-1">
          <img src={image2} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
        <div className="w-[153px] h-[153px] text-xs text-white mb-1">
          <img src={image3} alt="" className="min-w-[153px]" />
          <h4>Life in a bubble</h4>
          <p className="text-artistNameText">The van</p>
        </div>
      </div>
    </section>
  );
};

export default Releases;
