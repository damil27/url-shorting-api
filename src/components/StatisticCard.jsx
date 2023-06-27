import React from 'react'
import Brand from "../images/icon-brand-recognition.svg";
import Details from "../images/icon-detailed-records.svg";
import Customized from "../images/icon-fully-customizable.svg";

const StatisticCard = ({title, image, content}) => {
  return (
    <div className="bg-white p-5">
      <img
        src={image}
        alt="brand icon"
        className="bg-custom_dark_violet h-[20] w-[20] p-2 rounded-full -mt-10 "
      />
      <h3 className="text-custom_dark_violet text-2xl font-bold py-4 mb-2">
        {title}
      </h3>
      <p>
        {content}
      </p>
    </div>
  );
}

export default StatisticCard