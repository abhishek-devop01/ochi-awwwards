import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
  
  return (
    <div className='w-full py-15 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-400 gap-10 overflow-hidden flex whitespace-nowrap'>
        <h1 className='text-[18vw] tracking-tighter leading-none font-black uppercase -mb-1' >We Are ochi</h1>
        <h1 className='text-[18vw] tracking-tighter leading-none font-black uppercase -mb-1' >We Are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee