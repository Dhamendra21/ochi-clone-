import React from 'react'

function About() {
  return (
    <div className='w-full rounded-tl-3xl text-black p-20 rounded-tr-3xl py-20 bg-[#CDEA68] '>
        <h1 className='font-["Neue_Montreal"] leading-[4vw] tracking-tight text-[4vw] '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full flex gap-5 border-t-2 mt-20 border-[#647033]">
          <div className='w-1/2'>
            <h1 className=' text-7xl pt-10'>Our Approch</h1>
            <button className='px-10 capitalize py-6 bg-zinc-950 mt-10 flex gap-10 items-center rounded-full text-white'>Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[60vh] mt-5 bg-[#9caf4ede] rounded-3xl">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='w-full rounded-3xl' />
          </div>
        </div>
    </div>
  )
}

export default About