import React from 'react'
import {motion} from 'framer-motion'
function Marqee () {
  
  return (
      <div data-scroll data-scroll0section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43] '>
        <div className="text border-t-2 overflow-hidden border-b-2 flex  whitespace-nowrap border-zinc-300">
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] uppercase pt-10 -mb-[3vw] pr-20 font-medium ' >We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] uppercase pt-10 -mb-[7vw] font-medium ' >We are ochi</motion.h1>    
        </div>
    </div>
  )
}

export default  Marqee