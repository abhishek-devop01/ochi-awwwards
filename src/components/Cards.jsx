import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center px-20 gap-5">
      <div className="cardcontainer w-1/2 h-[55vh]">
        <div className="card rounded-xl w-full h-full bg-[#004D43] relative flex items-center justify-center ">
          <img src={"./assets/logo001.svg"} alt="" />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy; 2025
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">
        <div className="card relative flex items-center justify-center  rounded-xl w-full h-full bg-zinc-900">
          <img src={"./assets/logo002.svg"} alt="" />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-5 rounded-full">
            &copy; 2025
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-zinc-900">
          <img src={"./assets/logo003.png"} alt="" />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-5 rounded-full">
            &copy; 2025
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
