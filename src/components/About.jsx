import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-4xl">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] flex mt-7 pt-10 border-[#a0b365]">
          <div className="w-1/2 ">
          <h1 className="text-5xl">Our Approach:</h1>
          <button className="px-10 uppercase flex gap-5 items-center py-4 bg-zinc-900 mt-10 rounded-full text-white">Read More
               <div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
          </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl bg-[#aabe6b]"></div>
      </div>
    </div>
  );
};

export default About;
