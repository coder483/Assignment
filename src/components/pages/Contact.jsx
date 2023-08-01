import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <div className="w-[85%] m-auto">
      <Navbar />
      {/* CONTACT PAGE */}
      <div className="xl:container   mb-32 ">
        <div className="flex justify-center  bg-grayish rounded-[10px] h-[250px]">
          <h className="text-5xl  text-redish uppercase pt-12">Contact</h>
        </div>
        <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
          <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
            <div className="form-group mb-6">
              <label
                htmlFor="firstname"
                className="block text-gray-700  text-sm font-bold mb-2"
                id="firstname"
              >
                FirstName
              </label>
              <input
                type="text"
                className="form-control w-full px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none"
                placeholder="FirstName ..."
              />
              <label
                htmlFor="secondname"
                className="block text-gray-700 mt-[20px] text-sm font-bold mb-2"
                id="firstname"
              >
                SecondName
              </label>
              <input
                type="text"
                id="secondname"
                className="form-control w-full px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none"
                placeholder="SecondName ..."
              />

              <label
                htmlFor="email"
                className="block text-gray-700 mt-[20px] text-sm font-bold mb-2"
                id="firstname"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control w-full px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none"
                placeholder="Enter your email ..."
              />
              <label
                htmlFor="textarea"
                className=" mt-[20px]  block text-gray-700 text-sm font-bold mb-2"
                id="textarea"
              >
                Add Something Special
              </label>
              <textarea
                type="textarea"
                id="textarea"
                className="form-control w-full h-[250px] px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none "
                placeholder="Anything you wanna say ..."
              />
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] bg-redish font-semibold text-textColor hover:bg-white  group-hover:text-textColor">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
