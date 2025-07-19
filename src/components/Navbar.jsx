import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-20 py-8 fixed z-[999] font-["gilroy"] flex items-center justify-between'>
     <div className='text-3xl'>
          <h1>logo</h1>
     </div>
     <div className="links flex gap-10">
          {["services","Our works","About Us", "insights",'contact'].map((items, index)=>(
               <a key={index} className={`text-md capitalize  ${index === 4 && "ml-32"} `}>{items}</a>
          ))}
     </div>
    </div>
  )
}

export default Navbar