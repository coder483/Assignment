import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-redish rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center ">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb[1.5rem]">
            <strong>Action</strong>Recruits
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          emplyers find the best candidates.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Accounts
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Support Center
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Contact Us
          </li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            PromoCodes
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Req Demos
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Careers</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact info
        </span>
          <small className="text-[14px] text-white">
            isloremspan@outloo.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className="w-[35px] p-[5px] icon h-[35px] text-redish bg-white rounded-full cursor-pointer"/>
            <AiFillFacebook className="w-[35px] p-[5px] icon h-[35px] text-redish bg-white rounded-full cursor-pointer"/>
            <AiFillTwitterSquare className="w-[35px] icon p-[5px] h-[35px] text-redish bg-white rounded-full cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
