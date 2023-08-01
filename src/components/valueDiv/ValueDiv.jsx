import React from "react";
import ball from "../../assets/ball.svg";
import shield from "../../assets/shield.svg";
import summer from "../../assets/summer.svg";

const ValueDiv = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] px-4 md:px-8 lg:px-12 xl:px-20">
      <h1 className="text-textColor text-2xl md:text-3xl py-4 md:py-6 pb-3 font-bold w-full md:w-[400px] block capitalize">
        The Value that holds us true{" "}
        <strong className="text-redish">and to account</strong>
      </h1>

      <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-3 items-center">
        <div className="singleGrid rounded-lg hover:bg-[#eeedf7] p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-2 rounded-lg bg-[#dedef8] h-16 w-16 flex items-center justify-center">
              <img src={ball} alt="not found" className="w-8 md:w-10" />
            </div>
            <span className="font-semibold text-textColor text-lg md:text-xl">
              Simplicity
            </span>
          </div>
          <p className="text-sm md:text-base text-textColor opacity-70 py-4 md:py-6 font-semibold">
            Things being made beautifully simple are at the heart of everything
            we do.
          </p>
        </div>

        <div className="singleGrid rounded-lg hover:bg-[#eeedf7] p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-2 rounded-lg bg-[#dedef8] h-16 w-16 flex items-center justify-center">
              <img src={shield} alt="not found" className="w-8 md:w-10" />
            </div>
            <span className="font-semibold text-textColor text-lg md:text-xl">
              Security
            </span>
          </div>
          <p className="text-sm md:text-base text-textColor opacity-70 py-4 md:py-6 font-semibold">
            Things being made beautifully simple are at the heart of everything
            we do.
          </p>
        </div>

        <div className="singleGrid rounded-lg hover:bg-[#eeedf7] p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-2 rounded-lg bg-[#dedef8] h-16 w-16 flex items-center justify-center">
              <img src={summer} alt="not found" className="w-8 md:w-10" />
            </div>
            <span className="font-semibold text-textColor text-lg md:text-xl">
              Scalable
            </span>
          </div>
          <p className="text-sm md:text-base text-textColor opacity-70 py-4 md:py-6 font-semibold">
            Things being made beautifully simple are at the heart of everything
            we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueDiv;
