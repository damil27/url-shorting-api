import React from "react";
import Working from "../images/illustration-working.svg";

const Hero = ({ handleToggle, openMenu }) => {
  return (
    <div>
      <div className="container pb-20 mt-6 justify-center items-center grid grid-cols-1  md:grid-cols-2 ">
        {openMenu && (
          <div className="bg-custom_primary_dark md:hidden lg:hidden rounded-lg mx-auto w-full p-4 flex flex-col justify-center items-center gap-5 text-white">
            <ul className="flex flex-col justify-center items-center  gap-4">
              <li className="text-[1.4rem] mt-6 font-[500] tracking-wide">
                Features
              </li>
              <li className="text-[1.4rem]  font-[500] tracking-wide">
                Pricing
              </li>
              <li className="text-[1.4rem]  font-[500] tracking-wide">
                Resources
              </li>
            </ul>
            <div className="h-[1px] mt-4 mb-4 bg-custom_violet w-full" />
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-[1.4rem] mb-2 font-[500] tracking-wide">
                Login
              </p>
              <button className="bg-custom_primary_cyan px-[5rem] py-2 mb-6   rounded-full">
                {" "}
                Sign up
              </button>
            </div>
          </div>
        )}

        <div className=" flex flex-col mb-5 justify-center items-center md:justify-start md:items-start ">
          <h1 className="text-4xl font-semibold text-center md:text-start md:text-6xl text-custom_dark_blue font-poppins  mt-4 mb-6 tracking-wide ">
            More than just <br />
            shorter links
          </h1>
          <p className="text-xl text-center md:text-start text-custom_violet pr-5 mb-8">
            {" "}
            Build your brand’s recognition and get detailed insights on how your
            links are performing.{" "}
          </p>
          <button className="bg-custom_primary_cyan  py-3 px-8 md:w-[300px] text-white text-2xl rounded-full">
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
