import React from "react";
import ball from "../../assets/ball.svg"
import shield from "../../assets/shield.svg"
import summer from "../../assets/summer.svg"

const ValueDiv = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block capitalize ">
        The Value that holds us true  <strong className="text-redish">and to account</strong>
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={ball} alt="not found" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            Things beinf made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={shield} alt="not found" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
            Security
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            Things beinf made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={summer} alt="not found" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
            Scalable
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            Things beinf made beautiful simple are at the heart of everything we Lorem ipsum dolor sit.
            do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueDiv;
