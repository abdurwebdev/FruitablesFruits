"use client"
import React from 'react'

const Basket = () => {
  return (
    <>
    <div className='h-[20vh] relative mt-96'>
        {/* Basket 1 */}
              <div className='w-[90vw] xl:w-[25vw] xl:ml-40 sm:w-[45vw] ml-4 h-[60vh] rounded-xl border border-[#FFB524]'>
                <div className='w-full h-60  rounded-t-xl'>
                    <img className='w-full h-60 rounded-t-xl bg-cover' src="https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='sm:w-[25vw] sm:h-[20vw] w-[45vw] xl:ml-32 xl:w-[15vw] xl:h-[10vw]  md:w-[30vw] md:h-[15vw] h-[40vw] flex flex-col hover:transition-all hover:scale-125 items-center justify-center absolute top-40 left-24 rounded-xl bg-[#81C408]'>
                    <h1 className='font-bold text-xl text-white'>Fresh Pineapple</h1>
                    <h1 className='font-extrabold'>20% OFF</h1>
                </div>
                <div className='h-[24vh] bg-[#F4F6F8] rounded-b-xl'></div>
              </div>
              


              
    </div>
    
    </>
  )
}

export default Basket