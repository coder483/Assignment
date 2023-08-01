import React from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-gray-10">
      <div className="mx-auto px-[2rem] py-[3rem] sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center ">
            <Link to="/">
              <h1 className="logo text-[25px] text-redish">
                <strong>Action</strong>Recruits
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <li className="menuList text-[#6f6f6f] hover:text-redish">
                <Link to="/">Home</Link>
              </li>
              <li className="menuList text-[#6f6f6f] hover:text-redish">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="menuList text-[#6f6f6f] hover:text-redish">
                <Link to="/about">About</Link>
              </li>
            </div>
          </div>
          {/* Hamburger Menu */}
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={handleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              {open == true ? <AiOutlineClose /> : <AiOutlineBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open ? (
        <div className="md:hidden bg-black mb-[1.5rem] rounded-md m-0 p-[1.5rem]">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-2">
            <li className="menuList text-[#6f6f6f] hover:text-redish">
              <Link to="/">Home</Link>
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-redish">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-redish">
              <Link to="/about">About</Link>
            </li>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
