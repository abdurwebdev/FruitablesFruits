"use client"
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Apricot = () => {
  return (
    <>
    
    <div className='flex flex-col w-72 h-[70vh]  m-auto sm:mb- md:mb-[70vw] k md:mt-28 xl:mt-0'>
        <div className='w-full rounded-2xl h-60  '>
                    <img className='w-full rounded-2xl h-60 bg-cover' src="https://images.unsplash.com/photo-1567779833503-606dc39a14fd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='text-center mt-5'>
            <h1 className='font-bold text-2xl text-[#45595B]'>Apricot</h1>
        </div>
        <div className='flex items-center justify-center'>
            <img className='w-24 h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
        </div>
        <div className='mt-2 text-center'>
            <h1 className='text-2xl font-extrabold text-[#45595B]'>3.12 $</h1>
        </div>
        <div className='flex  justify-center mt-2 text-[#81C408] font-bold text-xl'>
            <button className='gap-3 px-5 py-3 flex items-center border border-[#FFB524] rounded-3xl hover:transition-colors hover:bg-[#FFB524] hover:text-white'><AiOutlineShoppingCart/>Add To Cart</button>
        </div>
    </div>
    </>
  )
}

export default Apricot