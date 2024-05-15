"use client"
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const BestSeller = () => {
  return (
    <>
        <div className='mt-10 h-[300vh]  sm:h-[390vh] xl:h-[450vh]'>
        <h1 className='text-3xl text-center text-[#45595B] font-extrabold'>Bestseller Products</h1>
        <p className='text-center mt-5 text-[#45595B] px-6'>Saepe iste ipsam quisquam laudantium maiores? Quasi, cum reiciendis numquam perferendis optio assumenda eaque </p>
        <div className='grid grid-cols-1'>
            <div className='md:m-auto sm:m-auto sm:h-[40vw] sm:mt-7 sm:w-[50vw] md:w-[70vw] md:h-[45vw] md:mt-5 rounded-xl w-[90vw] ml-5 h-[60vw] xl:m-auto xl:mt-6 xl:w-[50vw] xl:h-[30vw] bg-[#F4F6F8] mt-10 flex items-center justify-center gap-6'>
                <div>
                    <img className='xl:h-60 xl:w-60 md:w-60 md:h-60  w-32 h-32 bg-cover rounded-full' src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-xl xl:text-3xl md:text-3xl'>Organic Cheery</h1>
                    <img className='w-24 h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
                    <h1 className='font-extrabold text-2xl'>3.12 $</h1>
                    <button className='mt-5 xl:px-10 xl:py-4 px-5 py-2 rounded-xl hover:text-white hover:bg-[#FFB524] font-bold border-[#FFB524] bg-white text-[#81C408] flex items-center justify-center'>
                <AiOutlineShoppingCart/>
                    Add To Cart
                </button>
                </div>
            </div>

            {/* Item 2 */}
            <div className='md:m-auto  md:w-[70vw] md:h-[45vw] sm:m-auto sm:mt-7 sm:h-[40vw] sm:w-[50vw]  md:mt-5 rounded-xl w-[90vw] ml-5 h-[60vw] xl:w-[50vw] xl:mt-6 xl:m-auto xl:h-[30vw] bg-[#F4F6F8] mt-10 flex items-center justify-center gap-6'>
                <div>
                    <img className='xl:h-60 md:w-60  md:h-60  xl:w-60 w-32 h-32 bg-cover rounded-full' src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-xl xl:text-3xl md:text-3xl'>Organic Orange</h1>
                    <img className='w-24 h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
                    <h1 className='font-extrabold text-2xl'>3.12 $</h1>
                    <button className='xl:px-10 xl:py-4 mt-5 px-5 py-2 rounded-xl hover:text-white hover:bg-[#FFB524] font-bold border-[#FFB524] bg-white text-[#81C408] flex items-center justify-center'>
                <AiOutlineShoppingCart/>
                    Add To Cart
                </button>
                </div>
            </div>


             {/* Item 3 */}
            <div className='md:m-auto md:w-[70vw] md:h-[45vw] sm:m-auto sm:mt-7 sm:h-[40vw] sm:w-[50vw]  md:mt-5 rounded-xl w-[90vw] ml-5 h-[60vw] xl:w-[50vw] xl:mt-6 xl:m-auto xl:h-[30vw] bg-[#F4F6F8] mt-10 flex items-center justify-center gap-6'>
                <div>
                    <img className='xl:h-60 md:w-60 md:h-60  xl:w-60 w-32 h-32 bg-cover rounded-full' src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-xl xl:text-3xl md:text-3xl'>Organic Strawberry</h1>
                    <img className='w-24 h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
                    <h1 className='font-extrabold text-2xl'>3.12 $</h1>
                    <button className='xl:px-10 xl:py-4 mt-5 px-5 py-2 rounded-xl hover:text-white hover:bg-[#FFB524] font-bold border-[#FFB524] bg-white text-[#81C408] flex items-center justify-center'>
                <AiOutlineShoppingCart/>
                    Add To Cart
                </button>
                </div>
            </div>

             {/* Item 4 */}
             <div className='md:m-auto md:w-[70vw] md:h-[45vw]  sm:m-auto sm:mt-7 sm:h-[40vw] sm:w-[50vw]  md:mt-5 rounded-xl w-[90vw] ml-5 h-[60vw] xl:w-[50vw] xl:mt-6 xl:m-auto xl:h-[30vw] bg-[#F4F6F8] mt-10 flex items-center justify-center gap-6'>
                <div>
                    <img className='xl:h-60 md:w-60 md:h-60  xl:w-60 w-32 h-32 bg-cover rounded-full' src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-xl xl:text-3xl md:text-3xl'>Fresh Lemons</h1>
                    <img className='w-24 h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
                    <h1 className='font-extrabold text-2xl'>3.12 $</h1>
                    <button className='xl:px-10 xl:py-4 mt-5 px-5 py-2 rounded-xl hover:text-white hover:bg-[#FFB524] font-bold border-[#FFB524] bg-white text-[#81C408] flex items-center justify-center'>
                <AiOutlineShoppingCart/>
                    Add To Cart
                </button>
                </div>
            </div>


             {/* Item 5 */}
             <div className='md:m-auto md:w-[70vw] md:h-[45vw] sm:m-auto sm:mt-7 sm:h-[40vw] sm:w-[50vw]  md:mt-5 rounded-xl w-[90vw] ml-5 h-[60vw] xl:w-[50vw] xl:mt-6 xl:m-auto xl:h-[30vw] bg-[#F4F6F8] mt-10 flex items-center justify-center gap-6'>
                <div>
                    <img className='xl:h-60 md:w-60 md:h-60  xl:w-60 w-32 h-32 bg-cover rounded-full' src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-xl xl:text-3xl md:text-3xl'>Pineapple</h1>
                    <img className='w-24 h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
                    <h1 className='font-extrabold text-2xl'>3.12 $</h1>
                    <button className='xl:px-10 xl:py-4 mt-5 px-5 py-2 rounded-xl hover:text-white hover:bg-[#FFB524] font-bold border-[#FFB524] bg-white text-[#81C408] flex items-center justify-center'>
                <AiOutlineShoppingCart/>
                    Add To Cart
                </button>
                </div>
            </div>


             {/* Item 6 */}
             <div className='md:m-auto md:w-[70vw] md:h-[45vw] sm:m-auto sm:mt-7 sm:h-[40vw] sm:w-[50vw]  md:mt-5 rounded-xl w-[90vw] ml-5 h-[60vw] xl:w-[50vw] xl:mt-6 xl:m-auto xl:h-[30vw] bg-[#F4F6F8] mt-10 flex items-center justify-center gap-6'>
                <div>
                    <img className='xl:h-60 md:w-60 md:h-60  xl:w-60 w-32 h-32 bg-cover rounded-full' src="https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-xl xl:text-3xl md:text-3xl'>Pomegranate</h1>
                    <img className='w-24 h-10' src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
                    <h1 className='font-extrabold text-2xl'>3.12 $</h1>
                    <button className='xl:px-10 xl:py-4 mt-5 px-5 py-2 rounded-xl hover:text-white hover:bg-[#FFB524] font-bold border-[#FFB524] bg-white text-[#81C408] flex items-center justify-center'>
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

export default BestSeller