import React from 'react'

function Cards() {
  return (
    <div className='w-full px-32 h-screen flex items-center gap-5 bg-zinc-900'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
          <button className='absolute text-[#CDEA68] px-5 py-2 rounded-full border-[#CDEA68] border-2  left-10 bottom-10'> &copy; 2023 2324 </button>
        </div>
      </div>
      <div className='cardcontainer w-1/2 flex gap-5 h-[50vh] '>
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center  bg-[#212121] ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
          <button className='absolute  px-10 py-2 rounded-full border-2  left-10 bottom-10 uppercase'> rating 5.0 on clutch </button>
        </div>
        <div className="card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' />
          <button className='absolute px-8 py-2 rounded-full border-2  left-7 bottom-10 uppercase '> Business bootcamp allumini </button>
        </div>

      </div>
    </div>

  )
}

export default Cards