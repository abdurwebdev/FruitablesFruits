"use client"
import React from 'react'

const Basket = () => {
  return (
    <>
    <div className='h-[20vh]  relative mt-96'>
        {/* Basket 1 */}
              <div className='w-[90vw] xl:w-[25vw] sm:w-[50vw] sm:ml-44 md:ml-72 ml-4 h-[60vh] rounded-xl border border-[#FFB524]'>
                <div className='w-full h-60  rounded-t-xl'>
                    <img className='w-full h-60 rounded-t-xl' src="https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='sm:w-[25vw] sm:h-[20vw] xl:w-[15vw]  xl:ml-[20vw]  xl:h-[10vw]  sm:ml-44 md:ml-72 md:w-[30vw] md:h-[15vw] w-[45vw] h-[40vw] flex hover:transition-all hover:scale-125 flex-col items-center justify-center absolute top-40 left-24 rounded-xl bg-[#F4F6F8]'>
                    <h1 className='font-bold text-xl text-[#81C408]'>Fresh Pineapple</h1>
                    <h1 className='font-extrabold'>20% OFF</h1>
                </div>
                <div className='h-[24vh] bg-[#81C408] rounded-b-xl'></div>
              </div>
              


              
    </div>
    
    </>
  )
}

export default Basket