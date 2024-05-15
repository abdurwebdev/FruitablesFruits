"use client"
import React, { useState } from 'react'
import {data} from './FilterData';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Card = () => {
   
  return (
    <>
    <div className=' w-full h-[550vh] xl:h-[130vh] md:h-[280vh] sm:h-[370vh]'>
      <h1 className='font-bold text-[#45595B] text-xl ml-10'>Our Organic Products</h1>
      <div className='grid grid-cols-2 mt-5 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4'>
      <button className='rounded-3xl py-2 ml-5 bg-[#F4F6F8] hover:transition-colors hover:bg-[#FFB524] mb-4'>All Products</button>
      <button className='rounded-3xl py-2 ml-5 bg-[#F4F6F8] hover:transition-colors hover:bg-[#FFB524] mb-4'>Vegetables</button>
      <button className='rounded-3xl py-2 ml-5 bg-[#F4F6F8] hover:transition-colors hover:bg-[#FFB524] mb-4'>Fruits</button>
      <button className='rounded-3xl py-2 ml-5 bg-[#F4F6F8] hover:transition-colors hover:bg-[#FFB524] mb-4'>Bread</button>
      <button className='rounded-3xl py-2 ml-5 bg-[#F4F6F8] hover:transition-colors hover:bg-[#FFB524] mb-4'>Meat</button>
      </div>
      {/* Items To Filter */}
      <div className='ml-3 grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4 '>
       {/* Item 1 */}
        <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Cheery</h1>
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



        {/* Item 2 */}
        <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Kiwi</h1>
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

{/* Item 3 */}
<div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
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
        {/* Item 4 */}
        <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Watermelon</h1>
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
        {/* Item 5 */}
        <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Strawbery</h1>
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
        {/* Item 6 */}
        <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Oranges</h1>
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
        {/* Item 7 */}
        <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1587583650088-9451513b7b5d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Pineapple</h1>
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
        {/* Item 8 */}
        <div className='border border-[#FFB524] w-[330px] xl:w-[300px] h-[440px] flex flex-col  ml-3 rounded-xl mb-10'>
            <div className='w-full h-60 border rounded-md'>
                <img className='w-full h-60 border rounded-md hover:scale-150 hover:transition-all' src="https://images.unsplash.com/photo-1621659911279-b08ce9ff421f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-[#45595B] text-3xl'>Watermelon</h1>
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







</div>


      
    </div>
    
    </>
  )
}

export default Card