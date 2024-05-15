"use client"
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Card3 = () => {
  return (
    <>
    <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-6 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Banana</h1>
            </div>
            <div className='text-center'>
                <p className='text-[#45595b98]'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            </div>
            <div className='px-3'>
                <h1 className='font-bold text-[#45595B]'>$4.99 $</h1>
            </div>
            <div className=' text-[#81C408] flex items-center justify-center'>
            
                <button className='px-5 py-2 border rounded-xl hover:text-white hover:bg-[#FFB524] font-bold border-[#FFB524] flex items-center justify-center'>
                <AiOutlineShoppingCart/>
                    Add To Cart
                </button>
            </div>
        </div>
    </>
  )
}

export default Card3