import React from "react";
import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.09' className="w-full py-15 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-400  overflow-hidden flex whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[18vw] tracking-tighter leading-none font-black uppercase -mb-1 pr-18"
        >
          We Are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[18vw] tracking-tighter leading-none font-black uppercase -mb-1 pr-18"
        >
          We Are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
