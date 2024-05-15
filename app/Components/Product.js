"use client"
import React from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
const Product = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center bg-[#FFFFFF] py-10  rounded-2xl'>
        <div className='text-[30vw] text-[#FFB524] xl:text-[10vw]'>
            <AiOutlineProduct/>
        </div>
        <div className=' text-[#81C408] font-semibold text-2xl px-16 mt-3'>
            <h1>QUALITY CERTIFICATES</h1>
        </div>
        <div className='text-[#45595B] font-bold text-3xl mt-3'>
            <h1>33</h1>
        </div>
    </div>
    </>
  )
}

export default Product