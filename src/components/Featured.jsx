import { motion, useAnimation } from "motion/react";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handelHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handelHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div  className="w-full py-20">
      <div className="w-full px-20 border-b-1 border-zinc-700 pb-6">
        <h1 className="text-5xl tracking-tight">Featured</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => {
              handelHover(0);
            }}
            onHoverEnd={() => {
              handelHoverEnd(0);
            }}
            className="cardcontainer w-1/2 h-[75vh] relative "
          >
            <h1 className="absolute overflow-hidden flex text-[#CDEA68] font-semibold z-[9] text-7xl leading-none tracking-tighter left-full -translate-x-1/3 top-1/2 -translate-y-1/2">
              {"FYDE".split("").map((items, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ease:[0.85, 0, 0.15, 1], delay: index*.08}}
                  className="inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={"./assets/p1.png"}
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
          onHoverStart={() => {
              handelHover(1);
            }}
            onHoverEnd={() => {
              handelHoverEnd(1);
            }}
           className="cardcontainer w-1/2 h-[75vh] relative">
            <h1 className="absolute overflow-hidden flex text-[#CDEA68] font-semibold z-[9] text-7xl leading-none tracking-tighter right-full translate-x-1/3 top-1/2 -translate-y-1/2">
              {"VISE".split("").map((items, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ease:[0.85, 0, 0.15, 1], delay: index*.08}}
                  className="inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src={"./assets/p2.png"}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
