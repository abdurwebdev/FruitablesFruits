"use client"
import Link from 'next/link'
import React from 'react'
import { BiSolidError } from "react-icons/bi";
const page = () => {
  return (
    <>
    <div className='relative '>
        <img className='md:h-[70vh] md:w-full' src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute flex flex-col inset-0 items-center justify-center text-white'>
            <h1 className='text-5xl font-extrabold md:text-6xl xl:text-[10vw]  sm:text-5xl sm:text-[20vw]'>404 Error</h1>
            <div className='flex space-x-1'>
            <Link href="/" className='text-[#ffffff] font-medium sm:text-3xl'>Home</Link>
            <Link href="#" className='text-[#ffffff] font-medium sm:text-3xl'>Pages</Link>
            <Link href="#" className='sm:text-3xl'>404</Link>
            </div>
            
        </div>
    </div>
    <div className='flex m-auto flex-col items-center justify-center mt-20 mb-20 xl:mb-28'>
               <div className='text-[#FFB525] text-[20vw]'>
                    <BiSolidError/>
               </div>
               <div>
                <h1 className='text-[10vw] text-[#45595B] font-extrabold '>404</h1>
               </div>
               <div>
                <h1 className='text-[#45595B] font-medium text-4xl'>Page Not Found</h1>
               </div>
               <div className='text-center mt-3'>
                <h1 className='text-[#45595B]'>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</h1>
               </div>
               <div className='mt-3'>
                <Link href="/"><button className='border border-[#FFB525] px-4 py-3 text-[#45595B] hover:transition-colors hover:bg-[#FFB524] hover:text-white rounded-3xl'>Go Back To Home</button></Link>
               </div>
    </div>     
    
    </>
  )
}

export default page