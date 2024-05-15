"use client"
import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
const Customer = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center  bg-[#FFFFFF] py-10  rounded-2xl'>
        <div className='text-[30vw] text-[#FFB524] xl:text-[10vw]'>
            <BsFillPersonFill/>
        </div>
        <div className=' text-[#81C408] font-semibold text-2xl px-16 mt-3'>
            <h1>SATISFIED CUSTOMERS</h1>
        </div>
        <div className='text-[#45595B] font-bold text-3xl mt-3'>
            <h1>1963</h1>
        </div>
    </div>
    </>
  )
}

export default Customer