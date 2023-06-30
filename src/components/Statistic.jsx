import React, { useState } from "react";
import StatisticCard from "./StatisticCard";
import Brand from "../images/icon-brand-recognition.svg";
import Details from "../images/icon-detailed-records.svg";
import Customized from "../images/icon-fully-customizable.svg";

const Statistic = ({ shortlyApi, setCopyText, copyText }) => {
  // console.log(shortlyApi.map((i) => i));
  return (
    <div className="w-full bg-gray-100 ">
      <div className="container p-6 mx-auto flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 gap-4 w-full mt-20 ">
          {shortlyApi.length > 0 ? (
            shortlyApi.map((item) => (
              <div
                key={item.code}
                className="bg-white px-6 py-3 rounded-lg w-full flex  flex-col justify-center items-center md:flex-row md:justify-between"
              >
                <h3 className="text-custom_dark_violet">
                  {item.original_link}
                </h3>
                <div className="flex flex-col md:flex-row md:gap-3">
                  <h3 className="text-custom_primary_cyan ">
                    {item.full_short_link}
                  </h3>
                  <button
                    className="bg-custom_primary_cyan px-3 focus:bg-custom_primary_dark rounded-md py-1 text-sm text-white"
                    onClick={() => {
                      navigator.clipboard.writeText(item.full_short_link);
                      // shortlyApi.map(
                      //   (i) => i.code === item.code && setCopyText("copied")
                      // );

                      console.log("item :", item.code);
                    }}
                  >
                    {copyText}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div> </div>
          )}
        </div>
        <div className="flex flex-col flex-wrap ">
          <h2 className="text-5xl py-4 font-bold md:text-custom_dark_blue text-center ">
            {" "}
            Advanced Statistics
          </h2>
          <p className="text-custom_gray text-center text-xl p-10   tracking-wide">
            {" "}
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className=" relative grid grid-cols-1 md:grid-cols-3 gap-5 md:mb-6 mt-12">
          <div className="h-2 md:bg-custom_primary_cyan md:w-full md:absolute md:top-[50%] " />
          <div className="relative">
            <StatisticCard
              title="Brand Recognition"
              image={Brand}
              content="Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content."
            />
          </div>

          <div className=" md:mt-10 relative">
            <StatisticCard
              title="Detailed Records"
              image={Details}
              content="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions."
            />
          </div>
          <div className="md:mt-20 relative">
            <StatisticCard
              title="Fully Customizable"
              image={Customized}
              content="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.
"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
