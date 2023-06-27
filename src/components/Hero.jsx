import React from "react";
import Working from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div>
      <div className="container pb-20 mt-6 justify-center items-center grid grid-cols-1  md:grid-cols-2 ">
        <div className=" ">
          <h1 className="text-6xl text-custom_dark_blue font-poppins font-bold mt-4 mb-6 tracking-wide ">
            More than just <br />
            shorter links
          </h1>
          <p className="text-xl text-custom_violet pr-5 mb-8">
            {" "}
            Build your brand’s recognition and get detailed insights on how your
            links are performing.{" "}
          </p>
          <button className="bg-custom_primary_cyan py-3 px-8 text-white text-2xl rounded-full">
            Get Started
          </button>
        </div>
        <div className="">
          <img src={Working} alt="working Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
