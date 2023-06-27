import React from "react";
import BgBoost from "../images/bg-shorten-desktop.svg";
const Boost = () => {
  return (
    <div className="w-full relative  bg-custom_primary_dark">
      <div className="">
        <img src={BgBoost} alt="bg boost" className=" w-full img -z-20  " />
        <div className=" flex  flex-col justify-center items-center gap-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="sm:text-xl   md:text-4xl text-white font-bold tracking-wider font-poppins ">
            {" "}
            Boost your links today
          </h2>
          <button className="px-3 text-[14px] font-bold md:px-5 py-3 text-white  bg-custom_primary_cyan rounded-full">
            {" "}
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boost;
