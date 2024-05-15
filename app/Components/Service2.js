"use client"
import React from 'react'
import { AiOutlineSecurityScan, } from 'react-icons/ai'

const Service1 = () => {
  return (
    <div className='w-[80vw] h-[50vh] sm:w-[45vw] sm:h-[80vh] md:w-[20vw] md:h-[60vh]  bg-[#F4F6F8] rounded-xl mt-20 ml-7 flex flex-col items-center justify-center'>
        <div className='sm:w-[15vw] md:w-[10vw] md:h-[10vw] sm:h-[15vw] w-[40vw] h-[40vw] rounded-full bg-[#FFB524] flex items-center justify-center text-6xl text-white'>
            <AiOutlineSecurityScan/>
        </div>
        <div className='mt-5'>
            <h1 className='font-bold text-slate-600'>Security Payment</h1>
        </div>
        <div className='mt-5'>
            <h1 className='font-[2vw] text-slate-500'>100% security payment</h1>
        </div>
    </div>
  )
}

export default Service1