import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-36 px-20">
        {["we create", "eye opening", "presentation"].map((items, index) => {
          return (
            <div key={index}  className="masker ">
              <div  className="w-fit flex items-center">
                {index===1 && (
                  <div  className="w-[9vw] mr-[1vw] rounded h-[5.5vw] bg-red-500"></div>
                )}
              <h1 className="uppercase text-[7.5vw] leading-[7vw] h-full tracking-tighter font-bold">
                {items}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-1 border-zinc-800 mt-20 flex items-center justify-between py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-0">{items}</p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-1 border-zinc-500 rounded-full font-light text-md uppercase">
            start the project
          </div>
          <div className="w-9 h-9 border-1 flex items-center justify-center border-zinc-500 rounded-full">
            <span className="rotate-45">
            <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
