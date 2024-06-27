import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
 const [hover,sethover]=  useState(false) 


  return (
    <div className="w-full bg-black py-10 ">
      <div>
        <h1 className='w-full px-10 bg-black font-["Neue_Montreal"] tracking-tight py-20 border-b-2 pb-20 border-zinc-700 text-7xl '>Featured Projects </h1>
      </div>
      <div>
        <div className="cards px-20 mt-10 flex gap-10">
          <div onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} className="cardcontainer relative  w-1/2 h-[75vh]">
            {/* <h1 className='absolute left-full overflow-hidden -translate-x-[50%] top-1/2 -translate-y-1/2 text-[#CDEA68] z-[99] text-8xl leading-none tracking-tighter '> 
           
              {"FYDE".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}} 
                animate={hover ? ({y: "0"}) : ({y:"100%"})}
                transition={{ease:[0.11, 0, 0.5, 0], delay:index*0.1}} > {item} </motion.span>
              ))} 
            
            </h1> */}
            <div className="w-full h-full rounded-xl bg-green-500 overflow-hidden">
              <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='w-full h-full bg-cover' alt="" />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] ">
            {/* <h1 className='absolute flex right-full overflow-hidden translate-x-[50%] top-1/2 -translate-y-1/2 text-[#CDEA68] z-[99] text-8xl leading-none tracking-tighter '>
              {"VISE".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}} 
                animate={hover ? ({y: "0"}) : ({y:"100%"})}
                transition={{ease:[0.11, 0, 0.5, 0], delay:index*0.1}} > {item} </motion.span>
              ))} 
            </h1> */}
            <div className="w-full h-full rounded-xl bg-green-500 overflow-hidden ">
              <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='w-full h-full bg-cover' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured