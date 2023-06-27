import React from "react";
import { features, resources, company } from "../utils";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-custom_primary_dark">
      <footer className="container text-center py-4 lg:py-8 text-white gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <h2 className="text-4xl  font-bold text-white tracking-widest ">
          Shortly
        </h2>
        <div>
          <h3 className="mb-4 font-poppins font-bold tracking-widest ">
            Features
          </h3>
          <div>
            {features.map((feature) => (
              <p key={feature} className="footer_link ">
                {feature}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-poppins font-semibold tracking-widest ">
            Resourses
          </h3>
          <div>
            {resources.map((resourse) => (
              <p key={resourse} className="footer_link">
                {resourse}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-poppins font-bold tracking-widest ">
            Company
          </h2>
          <div>
            {company.map((item) => (
              <p key={item} className="footer_link">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 py-3 mt-3 lg:-mt-24">
          <div className="footer_link hover:bg-custom_primary_cyan ">
            <img src={Facebook} alt=" facebook icon" />
          </div>
          <div>
            <img src={Twitter} alt="twitter icon" />
          </div>
          <div>
            <img src={Pinterest} alt="pinterest icon" />
          </div>
          <div>
            <img src={Instagram} alt="instagram icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
