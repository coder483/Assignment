import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer  p-[4rem] md:p-10 lg:p-[5rem] mb-4 bg-redish rounded-[10px] md:grid-cols-5 grid grid-cols-1 m-auto items-center justify-center gap-6 md:gap-8 md:w-[85%]">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <div className="logoDiv">
          <h1 className="logo text-xl md:text-3xl text-white pb-4 md:pb-6">
            <strong>Action</strong>Recruits
          </h1>
        </div>
        <p className="text-white text-sm md:text-base pb-4 md:pb-6 opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>
        {/* Links for socials */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <span className="divTitle text-base md:text-xl font-semibold pb-4 md:pb-6 text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Accounts
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Support Center
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Feedback
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Contact Us
          </li>
        </div>
      </div>

      <div className="text-center md:text-left mb-6 md:mb-0">
        <span className="divTitle text-base md:text-xl font-semibold pb-4 md:pb-6 text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Events
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            PromoCodes
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Req Demos
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Careers
          </li>
        </div>
      </div>

      <div className="text-center md:text-left mb-6 md:mb-0">
        <span className="divTitle text-base md:text-xl font-semibold pb-4 md:pb-6 text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            About Us
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            Features
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            News
          </li>
          <li className="text-white text-sm md:text-base opacity-70 hover:opacity-100">
            FAQ
          </li>
        </div>
      </div>
         {/* Emails and social icons */}
      <div className="text-center md:text-left">
        <span className="divTitle text-small md:text-xl font-semibold pb-[1.5rem] md:pb-6 text-white">
          Contact info <br />
        </span>
        <small className="text-[14px] md:text-base  text-white">
          isloremspan@outloo.com
        </small>
        <div className="icons flex gap-4 py-4 md:py-6">
          <AiFillInstagram className="w-8 h-8 md:w-10 md:h-10 p-1 md:p-2 icon text-redish bg-white rounded-full cursor-pointer" />
          <AiFillFacebook className="w-8 h-8 md:w-10 md:h-10 p-1 md:p-2 icon text-redish bg-white rounded-full cursor-pointer" />
          <AiFillTwitterSquare className="w-8 h-8 md:w-10 md:h-10 p-1 md:p-2 icon text-redish bg-white rounded-full cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
