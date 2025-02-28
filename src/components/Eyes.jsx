import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let delatX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            var angle = Math.atan2(deltaY, delatX) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    })
    return (
        <div className='eyes w-full h-screen overflow-hidden '>
            <div data-scroll data-scroll-speed="-0.7" section className="w-full h-screen relative bg-red-500 bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] ">
                <div className=" absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%] ">
                    <div className="w-[15vw] flex items-center justify-center h-[15vw] bg-white rounded-full ">
                        <div className=" relative w-2/3 h-2/3  bg-zinc-900 rounded-full ">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-10 ">
                                <div className="w-10 h-10 bg-white rounded-full "> </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-[15vw] flex items-center justify-center h-[15vw] bg-white rounded-full ">
                    <div className=" relative w-2/3 h-2/3  bg-zinc-900 rounded-full ">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-10 ">
                                <div className="w-10 h-10 bg-white rounded-full "> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes