import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-speed="-.4" className='w-full h-screen pt-2 bg-zinc-900'>
        <div className="textStructure px-20 mt-52">
          {["We Create", "Eye opening", "presentation"].map((item,index)=>{
           return(
              <div className="masker">
                <div className="w-fit flex items-baseline">
                  {index === 1 && (<motion.div 
                  initial={{width:0}}
                  animate={{width:"9vw"}}
                  transition={{ease:[0.76, 0, 0.24, 1],duration:1}} 
                  className='w-[9vw] relative top-1 h-[5.7vw] rounded bg-green-500 overflow-hidden '> <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className='w-full h-full' alt="" /> </motion.div>)}
                  <h1 className="text-[7.7vw] leading-[6vw] font-semibold tracking-tight uppercase font-['Founders_Grotesk_X_Condensed '] " key={index} >{item}</h1>
                </div>
              </div>
           ) 
          })}
            
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between px-20 py-5 items-center  ">
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'key={index} > {item} </p>
          ))}
          <div className='flex items-center gap-5'>
          <div className="px-5 py-2 border-[2px] border-zinc-500 text-sm font-light uppercase rounded-full ">Start the project</div>
          <div className=' border-2 h-10 w-10 rounded-full flex items-center justify-center'><MdArrowOutward /></div>
          </div>
        </div>
    </div>
  )
}
``
export default LandingPage