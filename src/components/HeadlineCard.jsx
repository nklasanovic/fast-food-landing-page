import React from "react";
import Headline01 from "../assets/images/headline01.jpg";
import Headline02 from "../assets/images/headline02.jpeg";
import Headline03 from "../assets/images/headline03.jpeg";

const HeadlineCard = () => {
  return (
    <>
      <div className="rounded-xl relative">
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out!</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black bg-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src={Headline01}
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added daily</p>
          <button className="border-white text-black bg-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src={Headline02}
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            We Deliver Deserts Too!
          </p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white text-black bg-white mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src={Headline03}
          alt="/"
        />
      </div>
    </>
  );
};

export default HeadlineCard;
