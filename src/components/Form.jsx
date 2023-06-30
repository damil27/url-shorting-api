import React, { useState } from "react";
import Bg from "../images/bg-shorten-desktop.svg";

// GET/POST:
const Form = ({ handleSubmit, inputVal, setInputVal }) => {
  return (
    <div>
      <div className="container ">
        <div className="w-full relative  -mb-10 ">
          <img
            src={Bg}
            alt="form background"
            className="bg-custom_primary_dark h-[12rem]   rounded-lg  "
          />
          <form
            onSubmit={handleSubmit}
            className="flex  flex-col gap-16 md:gap-4  justify-center items-center md:flex-row md:justify-center md:items-center absolute md:w-[90%] mx-auto top-[50%] left-[40%] translate-x-[-40%] translate-y-[-50%]  "
          >
            <input
              required
              type="text"
              placeholder="     shorten a link here..."
              className=" py-3  w-full   rounded-lg outline-none "
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button className=" py-3 px-6 w-full bg-custom_primary_cyan  md:py-3 md:w-[10rem] md:px-6 text-[14px] text-white rounded-lg">
              Shorten It
            </button>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default Form;
