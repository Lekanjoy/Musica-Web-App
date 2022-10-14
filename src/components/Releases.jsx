import image from "../assets/releases icon/Rectangle 14.png";
import image1 from "../assets/releases icon/Rectangle 14 (1).png";
import image2 from "../assets/releases icon/Rectangle 14 (2).png";
import image3 from "../assets/releases icon/Rectangle 14 (3).png";
import image4 from "../assets/releases icon/Rectangle 14 (4).png";
import image5 from "../assets/releases icon/Rectangle 14 1.png";

const Releases = () => {
  // function to  take the num parameter being passed and return the next number greater than num using the same digits
  const nextBigger = (num) => {
    // convert the number to string
    let numString = num.toString();
    // split the string into an array of characters

    let numArray = numString.split("");
    // loop through the array of characters from the end to the beginning
    for (let i = numArray.length - 1; i > 0; i--) {
      // check if the current character is greater than the previous character
      if (numArray[i] > numArray[i - 1]) {
        // if it is, swap the two characters
        let temp = numArray[i];
        numArray[i] = numArray[i - 1];
        numArray[i - 1] = temp;
        // sort the array of characters from the current index to the end
        let sortedArray = numArray
          .slice(i)
          .sort((a, b) => a - b)
          .join("");
        // join the array of characters from the beginning to the current index with the sorted array of characters
        let result = numArray.slice(0, i).join("") + sortedArray;
        // return the result
        return result;
      }
      
    }
    // if no swap is made, return -1
    return -1;
  };

  

  return (
    <section className="w-full mb-40 md:pl-[5rem]">
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
